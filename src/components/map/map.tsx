
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import { fetchPoints } from "../../hooks/fetchPoints.ts";
import Home from "@arcgis/core/widgets/Home.js";
  

export const init = async (elementRef: HTMLDivElement) => {

  const points = await fetchPoints();
          const map = new Map({
            basemap: "hybrid",
            layers: []
          });

          (points).outFields = ["*"];
    
          map.add(points);
      
          const view = new MapView({
            container: elementRef,
            map: map,
            // ideally set this to centre of first location selected, or 
            // can get bounding box of all features and set it to centre of
            // that extent.
            center: [153.0260, -27.4705],
            zoom: 10,
            // Or can use scale property instead of zoom
            // scale: 5000,
            // Optional settings for pop-up docking
            // popup: {
            //   autoOpenEnabled: false,
            //   dockEnabled: true,
            //   dockOptions: {
            //     buttonEnabled: false,
            //     breakpoint: false
            //   }
            // }
            // Optional settings for highlighting features
            // highlightOptions: { 
            //  haloColor: "white",
            //  haloOpacity: 0.9,
            // }
          });

          let homeWidget = new Home({
            view: view
          })

          view.ui.components = ['zoom', 'attribution'];
          view.ui.add(homeWidget, "top-left");
    
          return {mapView: view, 
                  featureLayer: points} ;

          // If want to limit view to specific extent:
          //https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/getting-mapview-to-stay-within-bounds/td-p/350982
      }
export default init;





