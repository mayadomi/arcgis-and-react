import{cb as t,F as e,cc as m,cd as s,bU as p,ce as b,cf as d,ao as h,cg as j}from"./index-BdlI2FVT.js";import{s as w}from"./ObjectStack-gVF13qku.js";import{c as x}from"./plane-CwsoDe0Y.js";function a(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function k(r,n,o=a()){return m(o.origin,r),s(o.vector,n,r),o}function l(r,n,o){return A(r,n,0,1,o)}function A(r,n,o,u,i){const{vector:c,origin:f}=r,v=s(x.get(),n,f),g=p(c,v)/b(c);return d(i,c,h(g,o,u)),j(i,i,r.origin)}new w(()=>a());export{k as b,l as j,a as v};
