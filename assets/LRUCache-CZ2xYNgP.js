import{bw as z}from"./index-BdlI2FVT.js";const c=-3,g=c-1;var n;(function(_){_[_.ALL=0]="ALL",_[_.SOME=1]="SOME"})(n||(n={}));class b{constructor(e,t,s){this.name=e,this._storage=t,this.id=S+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),s&&(this._storage.registerRemoveFunc(this.id,s),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(e){return this._storage.getSize(this,e)}resetHitRate(){this._hit=this._miss=0}put(e,t,s,r=0){this._storage.put(this,e,t,s,r)}pop(e){const t=this._storage.pop(this,e);return t===void 0?++this._miss:++this._hit,t}get(e){const t=this._storage.get(this,e);return t===void 0?++this._miss:++this._hit,t}peek(e){return this._storage.peek(this,e)}updateSize(e,t,s){this._storage.updateSize(this,e,t,s)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class f{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new z,this._users=new z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){const s=this._db.get(e.id+t);return(s==null?void 0:s.size)??0}put(e,t,s,r,h){t=e.id+t;const i=this._db.get(t);if(i&&(this._size-=i.size,e.size-=i.size,this._db.delete(t),i.entry!==s&&this._notifyRemove(t,i.entry,i.size,n.ALL)),r>this._maxSize)return void this._notifyRemove(t,s,r,n.ALL);if(s===void 0)return void console.warn("Refusing to cache undefined entry ");if(!r||r<0)return console.warn(`Refusing to cache entry with size ${r} for key ${t}`),void this._notifyRemove(t,s,0,n.ALL);const o=1+Math.max(h,g)-c;this._db.set(t,new v(s,r,o)),this._size+=r,e.size+=r,this._checkSize()}updateSize(e,t,s,r){t=e.id+t;const h=this._db.get(t);if(h&&h.entry===s){for(this._size-=h.size,e.size-=h.size;r>this._maxSize;){const i=this._notifyRemove(t,s,r,n.SOME);if(!(i!=null&&i>0))return void this._db.delete(t);r=i}h.size=r,this._size+=r,e.size+=r,this._checkSize()}}pop(e,t){t=e.id+t;const s=this._db.get(t);if(s)return this._size-=s.size,e.size-=s.size,this._db.delete(t),++this._hit,s.entry;++this._miss}get(e,t){t=e.id+t;const s=this._db.get(t);if(s!==void 0)return this._db.delete(t),s.lives=s.lifetime,this._db.set(t,s),++this._hit,s.entry;++this._miss}peek(e,t){const s=this._db.get(e.id+t);return s?++this._hit:++this._miss,s==null?void 0:s.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},s=new Array;this._db.forEach((i,o)=>{const a=i.lifetime;s[a]=(s[a]||0)+i.size,this._users.forAll(d=>{const{id:m,name:u}=d;if(o.startsWith(m)){const l=t[u]||0;t[u]=l+i.size}})});const r={};this._users.forAll(i=>{const o=i.name;if("hitRate"in i&&typeof i.hitRate=="number"&&!isNaN(i.hitRate)&&i.hitRate>0){const a=t[o]||0;t[o]=a,r[o]=Math.round(100*i.hitRate)+"%"}else r[o]="0%"});const h=Object.keys(t);h.sort((i,o)=>t[o]-t[i]),h.forEach(i=>e[i]=Math.round(t[i]/2**20)+"MB / "+r[i]);for(let i=s.length-1;i>=0;--i){const o=s[i];o&&(e["Priority "+(i+c-1)]=Math.round(o/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){const t=e.id;this._db.forEach((s,r)=>{r.startsWith(t)&&(this._size-=s.size,this._db.delete(r),this._notifyRemove(r,s.entry,s.size,n.ALL))}),e.size=0}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,e.size,n.ALL)),this._users.forAll(e=>e.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,s,r){let h;return this._removeFuncs.some(i=>{if(e.startsWith(i[0])){const o=i[1](t,r,s);return typeof o=="number"&&(h=o),!0}return!1}),h}_checkSize(){this._users.forAll(e=>this._checkSizeLimits(e)),this._checkSizeLimits()}_checkSizeLimits(e){const t=e??this;if(t.maxSize<0||t.size<=t.maxSize)return;const s=e==null?void 0:e.id;let r=!0;for(;r;){r=!1;for(const[h,i]of this._db)if(i.lifetime===0&&(!s||h.startsWith(s))){if(this._purgeItem(h,i,e),t.size<=.9*t.maxSize)return;r||(r=this._db.has(h))}}for(const[h,i]of this._db)if((!s||h.startsWith(s))&&(this._purgeItem(h,i,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t,s=this._users.find(r=>e.startsWith(r.id))){if(this._db.delete(e),t.lives<=1){this._size-=t.size,s&&(s.size-=t.size);const r=this._notifyRemove(e,t.entry,t.size,n.SOME);r!=null&&r>0&&(this._size+=r,s&&(s.size+=r),t.lives=t.lifetime,t.size=r,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let S=0;class v{constructor(e,t,s){this.entry=e,this.size=t,this.lifetime=s,this.lives=s}}class y{constructor(e,t){this._storage=new f,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t,s=1){this._storage.put(this,e,t,s,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}export{y as e,f as h,b as r};
