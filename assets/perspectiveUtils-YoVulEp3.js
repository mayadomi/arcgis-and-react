import{f as t,y as l,g as A,S as E,dy as d,b4 as F,dz as y,dA as g,F as J}from"./index-BdlI2FVT.js";import{K}from"./projection-NmY8Pkrx.js";import{p as M}from"./normalizeUtilsSync-C7NXEv7S.js";import{u as h,i as z,c as x,r as c}from"./mat3-e0AQhzgy.js";import{e as p}from"./mat3f64-q3fE-ZOt.js";import{o as i}from"./vec2-DEIrm0UN.js";let s=class extends E{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:d(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return K(o,this.spatialReference).geometry}get normalizedCoords(){return F.fromJSON(M(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([A("esri.layers.support.MediaElementView")],s);const r=J(),u=p(),a=p(),f=p();function G(o,e,n){return y(r,e[0],e[1],1),g(r,r,h(u,n)),r[2]===0?i(o,r[0],r[1]):i(o,r[0]/r[2],r[1]/r[2])}function H(o,e,n){return m(a,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),m(f,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),z(o,x(a,a),f),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function m(o,e,n,C,S,b,j,v,$){c(o,e,C,b,n,S,j,1,1,1),y(r,v,$,1),x(u,o);const[B,R,w]=g(r,r,h(u,u));return c(u,B,0,0,0,R,0,0,0,w),z(o,u,o)}export{H as j,s as m,G as p};
