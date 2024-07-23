import { Point } from "@arcgis/core/geometry.js";
import Graphic from "@arcgis/core/Graphic.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import { PictureMarkerSymbol } from "@arcgis/core/symbols.js";
import { SimpleRenderer } from "@arcgis/core/renderers.js";
import getPlaceData from "../data/getCurrentData.json";
import defaultSymbol from "../assets/default_symbol.svg";

export async function fetchPoints() {

    const points = new Array<Graphic>;
    const placeOverviewItems = getPlaceData.data.placeOverviewItems

    placeOverviewItems.forEach((place, index) => {
      const point = new Point({
        longitude: place.placeCoordinates.longitude,
        latitude: place.placeCoordinates.latitude
      });

      const graphic = new Graphic({
        geometry: point,
        attributes: {
          "OBJECTID": index,
          "placeName": place.placeName,
        }
      });
      points.push(graphic);

    });


    // other OOTB image options:
    //https://sagewall.github.io/symbol-builder/simple-marker-symbol/ or
    //https://developers.arcgis.com/javascript/3/samples/portal_symbols/index.html

    const defaultMarkerSymbol = new PictureMarkerSymbol({
      // if get CORS issues, can try to use a local image url like "http://localhost:5173/assets/selected_symbol.svg"
      url: defaultSymbol, 
      width:20,
      height:20
    })


    const renderer = new SimpleRenderer({
      symbol: defaultMarkerSymbol,   
    })

    // for hole info, can either use:
    // labels and set label class to attribute (ie only show labels for features that are selected)
    // pop-ups - this is out-of-box, but a very rich feature that can be used to show a lot of information/interactivity
    // or fetch dom element (tooltip) and do some stuff with it https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/fetch-feature-data-on-pointer-move-event-to-label/td-p/711139

    return new FeatureLayer(({
      id: "placeLayer",
        source: points,
        // to restrict points to just one world/location
        //definitionExpression example (depending on JSON structure): "world.name = 'Middle Earth'",
        renderer: renderer,
        popupEnabled: false,
        popupTemplate: {
          title: "{placeName}"
        },
        objectIdField: "OBJECTID",
        fields: [{
            name: "OBJECTID",
            alias: "ObjectID",
            type: "oid"
          },
          {
             name: "placeName",
            alias: "placeName",
            type: "string"
          }
          // whatever other fields you'd like to include/expose
        ]
        }));
    
    }


