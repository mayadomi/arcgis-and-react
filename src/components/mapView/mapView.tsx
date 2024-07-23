import React, { useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView.js';
import Graphic from '@arcgis/core/Graphic.js';
import { PictureMarkerSymbol } from "@arcgis/core/symbols.js";
import { TextSymbol } from "@arcgis/core/symbols.js";
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';''
import selectedSymbol from '../../assets/selected_symbol.svg'
import './mapView.css';

type Props = {
    selectedPlace: string,
    setSelectedPlace: (val: string) => void
}

export const MapComponent: React.FC<Props> = ({ selectedPlace, setSelectedPlace }) => {

    const selectedMarkerSymbol = new PictureMarkerSymbol({
        // if get CORS error, can use a local image url like "http://localhost:5173/assets/selected_symbol.svg"
        url: selectedSymbol,
        width: 28,
        height: 28
    })

    const selectedTextSymbol = new TextSymbol({
        text: selectedPlace,
        haloColor: "black",
        haloSize: 1,
        color: "white",
        font: {
            size: 12,
            family: "sans-serif"
        },
        xoffset: 40,
        yoffset: 10
    })

    const createElm = document.createElement('div');
    const elementRef = useRef(createElm);
    elementRef.current.id = "arcgis-map";
    const [view, setView] = useState<MapView>();
    const [places, setPlacesLayer] = useState<FeatureLayer>();
    
    // Load the map intially, with a feature layer of the points as reference
    useEffect(() => {
        const loadMap = async () => {
            const { init } = await import('../map/map');
            const {mapView, featureLayer} = await init(elementRef.current);
            setView(mapView);
            setPlacesLayer(featureLayer);
            setSelectedPlace("Place01")
        }
        loadMap()
        return () => { view && view.destroy()};
    }, []);

    // Handle user clicking on the map to select a point
    useEffect(() => {
        if (!view) return;
        const eventHandler = (e: __esri.ViewPointerDownEvent) => {
            if (view) {
                view.hitTest(e)
                    .then(selectFeature)
                    .catch(console.error)
            }
        }
        const handler = view.on('pointer-down', eventHandler);
        return () => handler.remove();

    }, [view]);

    // Selected point symbology updated by essentially creating a temporary graphic and 
    // panning to it.

    const selectFeature = (selection: __esri.HitTestResult) => {

        // Clear any existing graphics from previous
        view?.graphics.removeAll();

        const result = selection.results[0];

        if (result.type === 'graphic') {

            const attributes = result.graphic.attributes;
            const placeName = attributes.placeName;
            setSelectedPlace(placeName);

            view?.goTo(result.graphic.geometry)

            // Create a new symbol/graphic
            const graphic = new Graphic({
                geometry: result.graphic.geometry,
                attributes: {
                    "OBJECTID": 1,
                    "placeName": attributes.placeName,
                },
                symbol: selectedMarkerSymbol,

            })

            view?.graphics.add(graphic);

        }
    }

    // Handle user selecting hole item from table
    
    /*

    We could query the graphics directly through accessing them via the view.layer[0].query()
    type pattern - but by design layer objects instantiated this way will only 
    contain the points/graphics that are visible in the current extent of the map.
    Because we keep the map quite zoomed in many points are off-screen/out of view,
    meaning that any view instantiated will be missing many of the points - and any 
    subsequent queries will not find them.
    
    So we have to query the 'server-side' original feature layer to ensure we are not
    limited to only what is in view when querying.

    */
    useEffect(() => {

        view?.graphics.removeAll();

           if (places) {

            const queryObject = places?.createQuery();
    
            queryObject.where = "placeName='" + selectedPlace + "'";
            queryObject.outFields = ["*"];
            queryObject.returnGeometry = true;
    
            places?.queryFeatures(queryObject).then(async (results) => {
                    
                const feature = results.features[0];
    
                const symbolGraphic = new Graphic({
                    geometry: feature.geometry,
                    symbol: selectedMarkerSymbol,
                })
    
                const labelGraphic = new Graphic({
                    geometry: feature.geometry,
                    symbol: selectedTextSymbol
                })
    
                view?.graphics.addMany([symbolGraphic, labelGraphic]) && view?.goTo(results.features[0].geometry);
            })
        } 

    }, [selectedPlace]);

    return (
        <>
            <div ref={elementRef}>
            </div>
        </>
    )
}

export default MapComponent;