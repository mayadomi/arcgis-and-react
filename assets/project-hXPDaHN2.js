import{f as s,y as i,g as l,T as h,cO as n,c0 as f,au as g,U as S}from"./index-BdlI2FVT.js";import{f as y,n as R,o as w}from"./utils-nisnNviQ.js";let o=class extends h{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=n(this.outSpatialReference),r.inSR=n(t.spatialReference),r.geometries=JSON.stringify({geometryType:f(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([i()],o.prototype,"geometries",void 0),s([i({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([i()],o.prototype,"transformation",void 0),s([i()],o.prototype,"transformForward",void 0),o=s([l("esri.rest.support.ProjectParameters")],o);const O=o,j=g(O);async function N(e,t,r){t=j(t);const a=y(e),p={...a.query,f:"json",...t.toJSON()},m=t.outSpatialReference,c=f(t.geometries[0]),u=R(p,r);return S(a.path+"/project",u).then(({data:{geometries:d}})=>w(d,c,m))}export{N as n,O as p};
