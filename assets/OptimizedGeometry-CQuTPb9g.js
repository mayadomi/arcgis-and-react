let a=class c{constructor(t=null,s={},e,h){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const t=new c(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}clone(){var e,h;const t=(e=this.geometry)==null?void 0:e.clone(),s=new c(t,{...this.attributes},(h=this.centroid)==null?void 0:h.clone(),this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}};function d(g){var t,s;return!!((s=(t=g.geometry)==null?void 0:t.coords)!=null&&s.length)}const i=2;class o{constructor(t=[],s=[],e=!1){this.lengths=t??[],this.coords=s??[],this.hasIndeterminateRingOrder=e}static fromRect(t){const[s,e,h,r]=t,n=h-s,l=r-e;return new o([5],[s,e,n,0,0,l,-n,0,0,-l])}get isPoint(){return this.lengths.length===0}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,s)=>t+s)}forEachVertex(t){let s=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let e=0;e<this.lengths.length;e++){const h=this.lengths[e];for(let r=0;r<h;r++)t(this.coords[i*(r+s)],this.coords[i*(r+s)+1]);s+=h}}deltaDecode(){const t=this.clone(),{coords:s,lengths:e}=t;let h=0;for(const r of e){for(let n=1;n<r;n++)s[2*(h+n)]+=s[2*(h+n)-2],s[2*(h+n)+1]+=s[2*(h+n)-1];h+=r}return t}clone(t){if(this.lengths.length===0)return new o([],[this.coords[0],this.coords[1]]);const s=(this.lengths.length===0?1:this.lengths.reduce((h,r)=>h+r))*i,e=this.coords.slice(0,s);return t?(t.set(e),new o(this.lengths,t,this.hasIndeterminateRingOrder)):new o(Array.from(this.lengths),Array.from(e),this.hasIndeterminateRingOrder)}}export{o as e,d as s,a as t};
