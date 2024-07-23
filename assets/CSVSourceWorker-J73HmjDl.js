import{aH as _,b_ as j,s as I,b$ as P,d as R,b as V,I as A,U as L,aA as T,az as G,G as Q,a_ as M,dG as Z,ad as J,bZ as U,bJ as Y}from"./index-BdlI2FVT.js";import{e as B,n as H}from"./date-M6n_RqpC.js";import{W}from"./projection-NmY8Pkrx.js";import{t as z}from"./json-Wa8cmqdu.js";import{t as K,e as X}from"./OptimizedGeometry-CQuTPb9g.js";import{m as ee}from"./FeatureStore-B8W1tHIO.js";import{x as te}from"./timeSupport-BoBnP7hk.js";import{$ as ie}from"./QueryEngine-DtjoUZZM.js";import{a as ne}from"./number-D9NwyGVu.js";import{i as re,o as oe}from"./clientSideDefaults-BKblCmxj.js";import{Z as w}from"./FieldsIndex-BZm6eFTZ.js";import"./featureConversionUtils-DuXJe-nV.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-Ca-uTxfM.js";import"./PooledRBush-BqAT_dad.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./normalizeUtils-Cik6ve5l.js";import"./normalizeUtilsCommon-Cpq7p5az.js";import"./utils-nisnNviQ.js";import"./LRUCache-CZ2xYNgP.js";import"./WhereClause-DgCJjgOC.js";import"./TimeOnly-BmkK1Ctx.js";import"./UnknownTimeZone-BLIgHyqR.js";import"./fieldType-CHp3lv4g.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./heatmapUtils-Xd5ASPFI.js";import"./vec42-DpHkGCNS.js";import"./vec4f64-CCf6w8sj.js";import"./utils-DOnCa0Oz.js";import"./commonProperties-DDhb4E0s.js";import"./utils-fAKF9tVT.js";import"./Basemap-CgzecouK.js";import"./loadAll-d4sPuW9e.js";import"./PortalItem-D_imZ4F9.js";import"./writeUtils-BJozxT0a.js";import"./layerUtils-C0ByrsCg.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CSxAPr-6.js";import"./utils-DnvSpbGV.js";import"./ClassBreaksDefinition-CrXWJYKW.js";import"./signal-yOcmJBqC.js";import"./RenderState-DaVlEYWY.js";import"./defaultsJSON-CHAaurhX.js";const E=/^\s*"([\S\s]*)"\s*$/,S=/""/g,$=`
`,se=[","," ",";","|","	"];function*O(r,t,e){let i=0;for(;i<=r.length;){const n=r.indexOf(t,i),o=r.substring(i,n>-1?n:void 0);i+=o.length+t.length,e&&!o.trim()||(yield o)}}function q(r){const t=r.includes(`\r
`)?`\r
`:$;return O(r,t,!0)}function C(r,t){return O(r,t,!1)}function ae(r,t,e){r=r.trim(),t=t==null?void 0:t.trim();const i=[],n=Array.from(new Set([e==null?void 0:e.delimiter,...se])).filter(s=>s!=null);for(const s of n){const a=N(r,s).length,d=N(t,s).length??a;a>1&&i.push({weight:Math.min(a,d),delimiter:s})}const o=i.sort(({weight:s},{weight:a})=>a-s).map(({delimiter:s})=>s);for(const s of o){const a=le(k(r,s).names,e==null?void 0:e.longitudeField,e==null?void 0:e.latitudeField);if(a.longitudeFieldName&&a.latitudeFieldName)return{delimiter:s,locationInfo:a}}return{delimiter:o[0],locationInfo:null}}function*v(r,t,e,i=()=>Object.create(null)){const n=q(r);n.next();let o="",s="",a=0,d=i(),u=0;e:for(const h of n){const f=C(h,e);for(const y of f)if(o+=s+y,s="",a+=D(y),a%2==0){if(a>0){const g=E.exec(o);if(!g){d=i(),u=0,o="",a=0;continue e}d[t[u]]=g[1].replaceAll(S,'"'),u++}else d[t[u]]=o,u++;o="",a=0}else s=e;a===0?(yield d,d=i(),u=0):s=$}}function k(r,t){const e=N(r,t).filter(n=>n!=null),i=e.map(n=>_(n));for(let n=i.length-1;n>=0;n--)i[n]||(i.splice(n,1),e.splice(n,1));return{names:i,aliases:e}}function N(r,t){if(!(r!=null&&r.length))return[];const e=[];let i="",n="",o=0;const s=C(r,t);for(const a of s)if(i+=n+a,n="",o+=D(a),o%2==0){if(o>0){const d=E.exec(i);d&&e.push(d[1].replaceAll(S,'"'))}else e.push(i);i="",o=0}else n=t;return e}function D(r){let t=0,e=0;for(e=r.indexOf('"',e);e>=0;)t++,e=r.indexOf('"',e+1);return t}function le(r,t,e){var s,a;t=(s=_(t))==null?void 0:s.toLowerCase(),e=(a=_(e))==null?void 0:a.toLowerCase();const i=r.map(d=>d.toLowerCase()),n=t?r[i.indexOf(t)]:null,o=e?r[i.indexOf(e)]:null;return{longitudeFieldName:n||r[i.indexOf(me.find(d=>i.includes(d)))],latitudeFieldName:o||r[i.indexOf(ue.find(d=>i.includes(d)))]}}function ce(r,t,e,i,n){const o=[],s=v(r,e,t),a=[];for(const d of s){if(a.length===10)break;a.push(d)}for(let d=0;d<e.length;d++){const u=e[d],h=i[d];if(u===n.longitudeFieldName||u===n.latitudeFieldName)o.push({name:u,type:"esriFieldTypeDouble",alias:h});else{let f;switch(de(a.map(y=>y[u]))){case"integer":f="esriFieldTypeInteger";break;case"double":f="esriFieldTypeDouble";break;case"date":f="esriFieldTypeDate";break;default:f="esriFieldTypeString"}o.push({name:u,type:f,alias:h,length:j(f)})}}return o}function de(r){if(!r.length)return"string";const t=/[^+\-.,0-9]/;return r.map(e=>{if(e!==""){if(!t.test(e)){let i=x(e);if(!isNaN(i))return/[.,]/.test(e)||!Number.isInteger(i)||i>214783647||i<-214783648?"double":"integer";if(e.includes("E")&&(i=Number(e),!Number.isNaN(i)||e.includes(",")&&(e=e.replace(",","."),i=Number(e),!Number.isNaN(i))))return"double"}return B(e)?"date":"string"}}).reduce((e,i)=>e===void 0?i:i===void 0?e:e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}const x=function(){const r=ne(),t=new RegExp("^"+r.regexp+"$"),e=new RegExp("["+r.group+"\\s\\xa0]","g"),i=r.factor;return n=>{const o=t.exec(n);if(r.factor=i,!o)return NaN;let s=o[1];if(!o[1]){if(!o[2])return NaN;s=o[2],r.factor*=-1}return s=s.replace(e,"").replace(r.decimal,"."),+s*r.factor}}(),ue=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],me=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],fe=oe("esriGeometryPoint"),pe=["csv"],he=[0,0];class ye{constructor(t,e){this.x=t,this.y=e}}class lt{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var d;this._loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((d=t==null?void 0:t.parsingOptions)==null?void 0:d.spatialReference)]),n=ge(i,t);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const o=await this._createFeatures(i);this._queryEngine.featureStore.addMany(o);const{fullExtent:s,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=s,a){const{start:u,end:h}=a;n.layerDefinition.timeInfo.timeExtent=[u,h]}return n}async applyEdits(){throw new I("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var n;this._loadOptions.customParameters=t,(n=this._snapshotTask)==null||n.abort(),this._snapshotTask=P(this._snapshotFeatures),this._snapshotTask.promise.then(o=>{this._queryEngine.featureStore.clear(),o&&this._queryEngine.featureStore.addMany(o)},o=>{this._queryEngine.featureStore.clear(),R(o)||V.getLogger("esri.layers.CSVLayer").error(new I("csv-layer:refresh","An error occurred during refresh",{error:o}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:i}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this._loadOptions;if(!e)throw new I("csv-layer:invalid-source","url not defined");const n=A(e);return(await L(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:o}=t.layerDefinition,s=new ee({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new ie({fieldsIndex:w.fromLayerJSON({fields:i,dateFieldsTimeReference:{timeZoneIANA:T}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:o,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:o,spatialReference:s}=this._queryEngine;let a=[];const d=[],u=o.fields.filter(l=>l.name!==n).map(l=>l.name);let h=0;const f={};for(const l of o.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=G(l);p!==void 0&&(f[l.name]=p)}const y=v(t,u,this._delimiter,re(f,n));for(const l of y){const p=this._parseCoordinateValue(l[e]),F=this._parseCoordinateValue(l[i]);if(F!=null&&p!=null&&!isNaN(p)&&!isNaN(F)){l[e]=p,l[i]=F;for(const c in l)if(c!==e&&c!==i){if(o.isDateField(c))l[c]=H(l[c]);else if(o.isNumericField(c)){const m=x(l[c]);isNaN(m)?l[c]=null:l[c]=m}}l[n]=h,h++,a.push(new ye(F,p)),d.push(l)}}if(!Q({wkid:4326},s))if(M(s))for(const l of a)[l.x,l.y]=Z(l.x,l.y,he);else a=W(z,a,J.WGS84,s,null,null);const g=[];for(let l=0;l<a.length;l++){const{x:p,y:F}=a[l],c=d[l];c[n]=l+1,g.push(new K(new X([],[p,F]),c,null,c[n]))}return g}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=x(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await te(U,t)}catch{throw new I("csv-layer:projection-not-supported","Projection not supported")}}}function ge(r,t){var l,p,F;const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=i.layerDefinition={name:Y(t.url,pe)||"csv",dateFieldsTimeReference:{timeZoneIANA:T},drawingInfo:fe,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},o=q(r),s=(l=o.next().value)==null?void 0:l.trim(),a=(p=o.next().value)==null?void 0:p.trim();if(!s)throw new I("csv-layer:empty-csv","CSV is empty",{csv:r});const{delimiter:d,locationInfo:u}=ae(s,a,e);if(!d)throw new I("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:s,secondLine:a,parsingOptions:e});if(!u)throw new I("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:s,secondLine:a,parsingOptions:e});i.locationInfo=u,i.delimiter=d;const{names:h,aliases:f}=k(s,d),y=ce(r,i.delimiter,h,f,i.locationInfo);if((F=e.fields)!=null&&F.length){const c=new w(e.fields);for(const m of y){const b=c.get(m.name);b&&Object.assign(m,b)}}if(!y.some(c=>c.type==="esriFieldTypeOID"&&(n.objectIdField=c.name,!0))){const c={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=c.name,y.unshift(c)}n.fields=y;const g=new w(n.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=g.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=g.get(i.locationInfo.longitudeFieldName).name),n.timeInfo){const c=n.timeInfo;if(c.startTimeField){const m=g.get(c.startTimeField);m?(c.startTimeField=m.name,m.type="esriFieldTypeDate"):c.startTimeField=null}if(c.endTimeField){const m=g.get(c.endTimeField);m?(c.endTimeField=m.name,m.type="esriFieldTypeDate"):c.endTimeField=null}if(c.trackIdField){const m=g.get(c.trackIdField);c.trackIdField=m?m.name:null}c.startTimeField||c.endTimeField||(n.timeInfo=null)}return i}export{lt as default};
