import{I as c,U as p,bH as F,c0 as f,cO as m}from"./index-BdlI2FVT.js";import{R as E}from"./normalizeUtils-Cik6ve5l.js";import{t as x}from"./query-gDdM8KJG.js";import{t as j}from"./queryZScale-DxngEzoS.js";const a="Layer does not support extent calculation.";function O(o,e){var l,y;const n=o.geometry,t=o.toJSON(),r=t;if(n!=null&&(r.geometry=JSON.stringify(n),r.geometryType=f(n),r.inSR=m(n.spatialReference)),(l=t.topFilter)!=null&&l.groupByFields&&(r.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(r.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),t.objectIds&&(r.objectIds=t.objectIds.join(",")),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?r.outFields="*":r.outFields=t.outFields.join(","):delete r.outFields,t.outSR?r.outSR=m(t.outSR):n&&t.returnGeometry&&(r.outSR=r.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const s=t.timeExtent,{start:i,end:u}=s;i==null&&u==null||(r.time=i===u?i:`${i??"null"},${u??"null"}`),delete t.timeExtent}return r}async function R(o,e,n,t){const r=await d(o,e,"json",t);return j(e,n,r.data),r}async function h(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",n,{returnIdsOnly:!0})}async function w(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const r=t.data;if(r.hasOwnProperty("extent"))return t;if(r.features)throw new Error(a);if(r.hasOwnProperty("count"))throw new Error(a);return t})}function $(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,n,t={},r={}){const l=typeof o=="string"?c(o):o,y=e.geometry?[e.geometry]:[];return t.responseType="json",E(y,null,t).then(s=>{const i=s==null?void 0:s[0];i!=null&&((e=e.clone()).geometry=i);const u=x({...l.query,f:n,...r,...O(e,r)});return p(F(l.path,"queryTopFeatures"),{...t,query:{...u,...t.query}})})}export{$ as a,w as d,h as m,R as p};
