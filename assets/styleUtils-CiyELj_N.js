import{_ as o,a0 as c,X as g}from"./index-BdlI2FVT.js";async function u(r,e,a){const s=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(s&&s.type==="unique-value"&&s.styleOrigin){const n=await o(s.populateFromStyle());if(c(a),n.ok===!1){const t=n.error;e!=null&&e.messages&&e.messages.push(new g("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:e})),r.clear("renderer",e==null?void 0:e.origin)}}}export{u as t};
