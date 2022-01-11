!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).graphiqlCostPlugin={},e.react)}(this,function(e,t){var n="default"in t?t.default:t;function r(e){return e.num>=2147483647?n.createElement("span",null,"∞ "):n.createElement("span",null,e.num%1!=0?e.num.toFixed(2):e.num.toString()," ")}function a(e){var t=n.useState(!1),r=t[0],a=t[1];if(!Array.isArray(e.details)||0===e.details.length)return null;var l=n.createElement("div",null,n.createElement("h3",{style:{marginBlockStart:0,marginBlockEnd:0}},e.title),n.createElement("ul",{style:{marginBlockStart:5,marginBlockEnd:5}},e.details.map(function(e,t){return n.createElement("li",{key:t},e)})));return n.createElement("span",{style:{marginLeft:"0.2rem",color:"gray",borderBottom:"1px dotted gray",cursor:"pointer",position:"relative"},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)}},"ℹ",n.createElement("div",{style:{display:r?"block":"none",zIndex:1e3,position:"absolute",borderRadius:"5px",backgroundColor:"#111",color:"white",bottom:15,width:"max-content",padding:5,right:-50}},l))}function l(e){var t=e.characteristics,l=t.typeCounts&&Object.keys(t.typeCounts).map(function(e){return n.createElement("span",null,e,": ",n.createElement(r,{num:t.typeCounts[e]}))})||null,i=t.fieldCounts&&Object.keys(t.fieldCounts).map(function(e){return n.createElement("span",null,e,": ",n.createElement(r,{num:t.fieldCounts[e]}))})||null;return n.createElement("div",{style:{padding:"0.5em 0 0.5em 0.5em"}},n.createElement("h3",{style:{marginBlockStart:"0.2em",marginBlockEnd:0}},"Query cost"),n.createElement("div",{style:{paddingLeft:"0.5em"}},"Type cost: ",n.createElement(r,{num:t.typeCost}),n.createElement(a,{title:"Type counts",details:l})," "),n.createElement("div",{style:{paddingLeft:"0.5em"}},"Field cost: ",n.createElement(r,{num:t.fieldCost}),n.createElement(a,{title:"Field counts",details:i})," "))}function i(e,t){return 0===e||0===t?Number.MAX_SAFE_INTEGER:Math.floor(e/t)}function o(e){var t=e.timeFrame,l=e.limits,o=e.characteristics,m=l.find(function(e){return"typeCost"===e.name}),c=l.find(function(e){return"fieldCost"===e.name}),s=o.typeCounts&&Object.keys(o.typeCounts).map(function(e){return n.createElement("span",null,e,": ",n.createElement(r,{num:o.typeCounts[e]}))})||null,u=o.fieldCounts&&Object.keys(o.fieldCounts).map(function(e){return n.createElement("span",null,e,": ",n.createElement(r,{num:o.fieldCounts[e]}))})||null;return n.createElement("div",null,n.createElement("h4",{style:{marginBlockStart:"0.3em",marginBlockEnd:0}},"Limits for ",t.interval," ",t.unit,":"),n.createElement("div",null,m?n.createElement("span",{style:{paddingLeft:"0.5em"}},n.createElement(r,{num:i(m.rate,o.typeCost)}),"times for type cost of ",n.createElement(r,{num:o.typeCost}),n.createElement(a,{title:"Type counts",details:s})):n.createElement("span",{style:{color:"gray",paddingLeft:"0.5em"}},"No limit defined for type cost")),n.createElement("div",null,c?n.createElement("span",{style:{paddingLeft:"0.5em"}},n.createElement(r,{num:i(c.rate,o.fieldCost)}),"times for field cost of ",n.createElement(r,{num:o.fieldCost}),n.createElement(a,{title:"Field counts",details:u})):n.createElement("span",{style:{color:"gray",paddingLeft:"0.5em"}},"No limit defined for field cost")))}function m(){return n.createElement("div",{style:{width:0,height:0,borderTop:"8px solid transparent",borderBottom:"8px solid transparent",borderRight:"8px solid #444",float:"right"}})}function c(e,t,n){Array.isArray(e)&&0!==e.length&&e.forEach(function(e){var r=t.find(function(t){return t.timeFrame.interval===e.interval&&t.timeFrame.unit===e.unit});r?r.limits.push({name:n,rate:e.rate}):t.push({timeFrame:{interval:e.interval,unit:e.unit},limits:[{name:n,rate:e.rate}]})})}function s(e){var a,l,i,s=e.characteristics,u=e.rateLimits,d=t.useState(null),f=d[0],p=d[1],E=null==(a=u.assemblyRateLimits)?void 0:a["graphql-field-cost"],y=null==(l=u.assemblyRateLimits)?void 0:l["graphql-type-cost"],g=null==(i=u.assemblyRateLimits)?void 0:i["graphql-type-cost"],v=[];c(E,v,"fieldCost"),c(y,v,"typeCost"),c(g,v,"inputTypeCost");var h=f?n.createElement(o,{timeFrame:f.timeFrame,characteristics:s,limits:f.limits}):null,b=n.createElement("div",null,n.createElement("h3",{style:{marginBlockStart:"0.2em",marginBlockEnd:0}},"Query limits:"),v.map(function(e,t){var a=function(e,t){var n=Number.MAX_SAFE_INTEGER;return e.forEach(function(e){var r=e.rate,a=t[e.name],l="number"==typeof a&&0!==a&&0!==r?Math.floor(r/a):Number.MAX_SAFE_INTEGER;l<n&&(n=l)}),n}(e.limits,s),l=!!f&&e.timeFrame.interval===f.timeFrame.interval&&e.timeFrame.unit===f.timeFrame.unit,i=n.createElement("span",{onClick:function(){return t=e,void p(f&&f.timeFrame.interval===t.timeFrame.interval&&f.timeFrame.unit===t.timeFrame.unit?null:t);var t},style:{fontStyle:"italic",textDecorationStyle:"dotted",cursor:"pointer",paddingLeft:10}},l?"hide...":"more...");return n.createElement("div",{key:t,style:{paddingLeft:"0.5em"}},n.createElement(r,{num:a}),"times per ",e.timeFrame.interval," ",e.timeFrame.unit,i,l?n.createElement(m,null):null)})),C=h?n.createElement(n.Fragment,null,n.createElement("div",{style:{width:250,padding:"0.5em 0 0.5em 0.5em"}},b),n.createElement("div",{style:{flex:1,backgroundColor:"#444",color:"white",padding:"0.5em 0 0.5em 0.5em"}},h)):n.createElement(n.Fragment,null,n.createElement("div",{style:{flex:1,padding:"0.5em 0 0.5em 0.5em"}},b));return n.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"}},C)}e.CostPlugin=function(e){var t,r=e.costData;switch(e.dataAvailability){case"NONE":t=n.createElement("h3",{style:{color:"#cdcdcd",textAlign:"center"}},"No data yet");break;case"LOADING":t=n.createElement("h3",{style:{color:"#cdcdcd",textAlign:"center"}},"Loading...");break;case"ERROR":var a="Error loading cost data";if("object"==typeof r&&r&&r.errors){var i=Array.isArray(r.errors)?r.errors:[r.errors];a=n.createElement("ul",null,i.map(function(e){return n.createElement("li",null,e&&e.message||"")}))}t=n.createElement("h3",{style:{color:"#cdcdcd",textAlign:"center"}},a);break;case"AVAILABLE":t="object"==typeof r&&"object"==typeof r.request&&"object"==typeof r.rateLimits?n.createElement(s,{characteristics:r.request,rateLimits:r.rateLimits}):"object"==typeof r.request?n.createElement(l,{characteristics:r.request}):n.createElement("h3",{style:{color:"#cdcdcd",textAlign:"center"}},"Error rendering cost data")}return n.createElement("div",{className:"qcs_wrapper"},t)}});
//# sourceMappingURL=index.umd.js.map
