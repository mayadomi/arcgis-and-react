import{cc as Ot,c7 as ft,f0 as St,f1 as jt,ez as Et,en as zt,f as h,y as x,g as Nt,T as Gt,F as Z,f2 as Lt,bY as Bt,cb as R,cZ as Q,bC as It,b as H,dA as tt,f3 as Vt,bX as Wt,f4 as kt,f5 as Ht,f6 as Ut,dC as Yt,f7 as qt,ep as rt,eA as Xt}from"./index-BdlI2FVT.js";import{e as pt}from"./mat3f64-q3fE-ZOt.js";import{j as Zt,P as Dt,h as gt,B as Jt,f as Kt,C as Qt,c as tr}from"./mat4-CSxAPr-6.js";import{e as M,o as j}from"./mat4f64-CSKppSlJ.js";import{n as et,u as nt,j as G,z as yt}from"./mat3-e0AQhzgy.js";import{n as z,H as rr}from"./projection-NmY8Pkrx.js";import{a as C,R as N}from"./computeTranslationToOriginAndRotation-Xje1tWyk.js";import{t as ot,o as er}from"./DoubleArray-B-pqbqip.js";import{v as mt,I as U,x as nr}from"./quat-nUUgiqFL.js";import{e as D}from"./quatf64-Bdb9ZJJK.js";import"./vec4f64-CCf6w8sj.js";import{g as L,f as or,u as ht}from"./meshVertexSpaceUtils-C9bNTGWC.js";import{n as T,s as $t,i as ar,r as w}from"./vec3-o6_Ds2WY.js";import{i as $,T as A}from"./BufferView-DgnOnUs_.js";function P(t=Pt){return[t[0],t[1],t[2],t[3]]}function E(t,r,e=P()){return Ot(e,t),e[3]=r,e}function Vr(t,r=P()){const e=Zt(v,t);return At(r,ft(mt(r,e))),r}function at(t,r,e=P()){return U(v,t,Y(t)),U(it,r,Y(r)),nr(v,it,v),At(e,ft(mt(e,v)))}function Wr(t,r,e,n=P()){return E(St,t,_),E(jt,r,st),E(Et,e,lt),at(_,st,_),at(_,lt,n),n}function kr(t){return t}function ir(t){return t[3]}function Y(t){return zt(t[3])}function At(t,r){return t[3]=r,t}const Pt=[0,0,1,0],v=D(),it=D();P();const _=P(),st=P(),lt=P();var q;let y=q=class extends Gt{constructor(t){super(t),this.translation=Z(),this.rotationAxis=Lt(Pt),this.rotationAngle=0,this.scale=Bt(1,1,1)}get rotation(){return E(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=R(t),this.rotationAngle=ir(t)}get localMatrix(){const t=M();return U(ct,this.rotation,Y(this.rotation)),Dt(t,ct,this.translation,this.scale),t}get localMatrixInverse(){return gt(M(),this.localMatrix)}applyLocal(t,r){return Q(r,t,this.localMatrix)}applyLocalInverse(t,r){return Q(r,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Jt(this.localMatrix,t.localMatrix)}clone(){const t={translation:R(this.translation),rotationAxis:R(this.rotationAxis),rotationAngle:this.rotationAngle,scale:R(this.scale)};return new q(t)}};h([x({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),h([x({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAxis",void 0),h([x({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAngle",void 0),h([x({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),h([x()],y.prototype,"rotation",null),h([x()],y.prototype,"localMatrix",null),h([x()],y.prototype,"localMatrixInverse",null),y=q=h([Nt("esri.geometry.support.MeshTransform")],y);const ct=D(),ut=y;function dt(t,r){return t.isGeographic||t.isWebMercator&&(r??!0)}function xt(t,r){switch(t.type){case"georeferenced":return r.isGeographic;case"local":return r.isGeographic||r.isWebMercator}}function Hr(t,r,e,n){if(n!==void 0){It(H.getLogger(t),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const o=r.type==="local";if(!L(r)||n===o)return e.isGeographic||e.isWebMercator&&n;H.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${n}) for a Mesh vertex space of type "${r.type}" is not supported. This parameter will be ignored.`)}return xt(r,e)}const B=()=>H.getLogger("esri.geometry.support.meshUtils.normalProjection");function sr(t,r,e,n,o){return V(n)?(I(m.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(B().error("Cannot convert spatial reference to PCPF"),o)}function lr(t,r,e,n,o){return V(n)?(I(m.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(B().error("Cannot convert to spatial reference from PCPF"),o)}function cr(t,r,e){return z(t,r,0,e,C(r),0,t.length/3),e}function ur(t,r,e){return z(t,C(e),0,r,e,0,t.length/3),r}function fr(t,r,e){return G(u,e),T(r,t,u),yt(u)||$t(r,r),r}function pr(t,r,e){if(G(u,e),T(r,t,u,4),yt(u)||$t(r,r,4),t!==r)for(let n=3;n<t.length;n+=4)r[n]=t[n];return r}function gr(t,r,e,n,o){if(!V(n))return B().error("Cannot convert spatial reference to PCPF"),o;I(m.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function yr(t,r,e,n,o){if(!V(n))return B().error("Cannot convert to spatial reference from PCPF"),o;I(m.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function I(t,r,e,n,o,a){if(!r)return;const l=e.count,c=C(o);if(Ft(o))for(let i=0;i<l;i++)n.getVec(i,O),r.getVec(i,g),N(c,O,S,c),et(u,S),t===m.FROM_PCPF&&nt(u,u),tt(g,g,u),a.setVec(i,g);else for(let i=0;i<l;i++){n.getVec(i,O),r.getVec(i,g),N(c,O,S,c),et(u,S);const s=Vt(e.get(i,1));let f=Math.cos(s);t===m.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===m.FROM_PCPF&&nt(u,u),tt(g,g,u),Wt(g,g),a.setVec(i,g)}return a}function V(t){return Ft(t)||mr(t)}function Ft(t){return t.isWGS84||kt(t)||Ht(t)||Ut(t)}function mr(t){return t.isWebMercator}var m;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const O=Z(),g=Z(),S=M(),u=pt();function J(t,r,e){return dt(r.spatialReference,e==null?void 0:e.geographic)?K(t,r,!1,e):Pr(t,r,e)}function Tt(t,r=j){const{position:e,normal:n,tangent:o}=t;return{position:w(new Float64Array(e.length),e,r),normal:n!=null?fr(n,new Float32Array(n.length),r):null,tangent:o!=null?pr(o,new Float32Array(o.length),r):null}}function bt(t,r,e,n){const{position:o,normal:a,tangent:l}=t;if(!L(r))return{position:o,normal:a,tangent:l};const c=ht(r,n);return J(Tt(t,e==null?void 0:e.localMatrix),c,{geographic:r.type==="local"})}function hr(t,r,e){const n=or(r,e),o=r.spatialReference,a=L(n);if(!a)return{vertexAttributes:J(t,r,e),vertexSpace:n,transform:null};const{position:l,normal:c,tangent:i}=t,s=xt(n,o);switch(n.type){case"georeferenced":return s?{vertexAttributes:K(t,r,a,e),vertexSpace:n,transform:null}:{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut};case"local":return{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut}}}function X(t,r,e){return dt(r.spatialReference,e==null?void 0:e.geographic)?Mt(t,r,e):vt(t,r,e)}function $r(t,r,e,n,o){if(!L(r))return X(t,n,o);const{spatialReference:a}=n,l=bt(t,r,e,a);return n.equals(ht(r,a))?vt(l,n,o):X(l,n,o)}function Ar({positions:t,transform:r,vertexSpace:e,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:l}){const c=e.origin??rt,i=e.origin!=null?(r==null?void 0:r.localMatrix)??j:j;if(e.type==="georeferenced"){const p=a??ot(t.length);if(Qt(i,j)?er(p,t):w(p,t,i),!Xt(c,rt)){const[k,Rt,_t]=c;for(let b=0;b<p.length;b+=3)p[b]+=k,p[b+1]+=Rt,p[b+2]+=_t}return z(p,n,0,p,o,0,p.length/3),p}let s=n;const f=C(n);s=o.isWebMercator&&l||!rr(n,f)?s:f,N(n,c,F,s),tr(F,F,i);const d=a??ot(t.length);return w(d,t,F),z(d,s,0,d,o,0,d.length/3),d}function Pr(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,l=r.y,c=r.z??0,i=W(e?e.unit:null,r.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=o[s]*i+a,n[s+1]=o[s+1]*i+l,n[s+2]=o[s+2]*i+c;return{position:n,normal:t.normal,tangent:t.tangent}}function K(t,r,e,n){const o=r.spatialReference,a=wt(r,n,F),l=new Float64Array(t.position.length),c=dr(t.position,a,o,l),i=G(Ct,a),s=xr(c,l,t.normal,i,o),f=Fr(c,l,t.tangent,i,o);if(e){const{x:d,y:p,z:k}=r;ar(c,c,[-d,-p,-(k??0)])}return{position:c,normal:s,tangent:f}}function dr(t,r,e,n){w(n,t,r);const o=new Float64Array(t.length);return ur(n,o,e)}function xr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);return T(a,e,n),lr(a,t,r,o,a),a}function Fr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);T(a,e,n,4);for(let l=3;l<a.length;l+=4)a[l]=e[l];return yr(a,t,r,o,a),a}function vt(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,l=r.y,c=r.z??0,i=W(e?e.unit:null,r.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=(o[s]-a)/i,n[s+1]=(o[s+1]-l)/i,n[s+2]=(o[s+2]-c)/i;return{position:n,normal:t.normal,tangent:t.tangent}}function Mt(t,r,e){const n=r.spatialReference;wt(r,e,F);const o=gt(Mr,F),a=new Float64Array(t.position.length),l=Tr(t.position,n,o,a),c=G(Ct,o);return{position:l,normal:br(t.normal,t.position,a,n,c),tangent:vr(t.tangent,t.position,a,n,c)}}function wt(t,r,e){N(t.spatialReference,[t.x,t.y,t.z??0],e,C(t.spatialReference));const n=W(r?r.unit:null,t.spatialReference);return Kt(e,e,[n,n,n]),e}function Tr(t,r,e,n){const o=cr(t,r,n),a=new Float64Array(o.length);return w(a,o,e),a}function br(t,r,e,n,o){if(t==null)return null;const a=sr(t,r,e,n,new Float32Array(t.length));return T(a,a,o),a}function vr(t,r,e,n,o){if(t==null)return null;const a=gr(t,r,e,n,new Float32Array(t.length));return T(a,a,o,4),a}function W(t,r){if(t==null)return 1;const e=Yt(r);return 1/qt(e,"meters",t)}const F=M(),Mr=M(),Ct=pt(),Ur=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:Tt,georeference:J,georeferenceApplyTransform:bt,georeferenceByTransform:hr,georeferenceGlobal:K,getUnitScale:W,project:Ar,ungeoreference:X,ungeoreferenceByTransform:$r,ungeoreferenceGlobal:Mt},Symbol.toStringTag,{value:"Module"}));export{Y as A,$r as C,ur as E,Ar as G,K as I,Tt as O,bt as P,Mt as Q,hr as V,W as _,cr as a,P as b,Hr as c,ut as d,lr as e,yr as f,Ur as g,gr as h,sr as j,Vr as k,Wr as w,kr as y};
