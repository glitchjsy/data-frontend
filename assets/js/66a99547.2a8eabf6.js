"use strict";(self.webpackChunk_glitchjsy_data_frontend=self.webpackChunk_glitchjsy_data_frontend||[]).push([[716],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),p=u(a),s=r,m=p["".concat(o,".").concat(s)]||p[s]||y[s]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[p]="string"==typeof e?e:r,i[1]=g;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(53);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(8168),r=a(6540),l=a(53),i=a(3104),g=a(6347),o=a(7485),u=a(1682),d=a(9466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function y(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function s(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,g.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=y(e),[i,g]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!s({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=m({queryString:a,groupId:n}),[p,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),N=(()=>{const e=o??p;return s({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&g(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!s({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);g(e),u(e),c(e)}),[u,c,l]),tabValues:l}}var N=a(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:g,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),y=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==g&&(p(t),o(n))},s=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>d.push(e),onKeyDown:s,onClick:y},i,{className:(0,l.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":g===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=c(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(f,(0,n.A)({},e,t)))}function T(e){const t=(0,N.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},6355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>g,metadata:()=>u,toc:()=>p});var n=a(8168),r=(a(6540),a(5680)),l=a(1470),i=a(9365);const g={},o="All Vehicles",u={unversionedId:"endpoints/vehicles/index",id:"endpoints/vehicles/index",title:"All Vehicles",description:"Returns a list of all registered vehicles in Jersey.",source:"@site/docs/endpoints/vehicles/index.mdx",sourceDirName:"endpoints/vehicles",slug:"/endpoints/vehicles/",permalink:"/docs/endpoints/vehicles/",draft:!1,editUrl:"https://github.com/glitchjsy/data-frontend/tree/master/docs/endpoints/vehicles/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Parking Spaces (Live)",permalink:"/docs/endpoints/carparks/parking-spaces"},next:{title:"Vehicle Lookup By Plate (Live)",permalink:"/docs/endpoints/vehicles/lookup"}},d={},p=[{value:"Query Params",id:"query-params",level:4},{value:"Response",id:"response",level:3},{value:"Root",id:"root",level:4},{value:"Pagination Data",id:"pagination-data",level:4},{value:"Vehicle",id:"vehicle",level:4},{value:"Enums",id:"enums",level:4},{value:"Fuel Types",id:"fuel-types",level:4},{value:"Sources",id:"sources",level:3}],y={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"all-vehicles"},"All Vehicles"),(0,r.yg)("p",null,"Returns a list of all registered vehicles in Jersey."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"GET /v1/vehicles\n")),(0,r.yg)("h4",{id:"query-params"},"Query Params"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Desription"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"page")),(0,r.yg)("td",{parentName:"tr",align:null},"The page to show")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"limit")),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of entries per page")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"startDate")),(0,r.yg)("td",{parentName:"tr",align:null},"Retrieve results after the given date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"endDate")),(0,r.yg)("td",{parentName:"tr",align:null},"Retrieve results before the given date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dateType")),(0,r.yg)("td",{parentName:"tr",align:null},"- ",(0,r.yg)("inlineCode",{parentName:"td"},"regInJersey")," - startDate and endDate checks the date the car was registered in Jersey",(0,r.yg)("br",null),"- Anything else - startDate and endDate checks the date the car was first ever registered")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"make")),(0,r.yg)("td",{parentName:"tr",align:null},"Search by the make of the car")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"model")),(0,r.yg)("td",{parentName:"tr",align:null},"Search by the model of car")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fuelType")),(0,r.yg)("td",{parentName:"tr",align:null},"Search by the fuel type of the car. See ",(0,r.yg)("inlineCode",{parentName:"td"},"Fuel Types")," below for enum values.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"color")),(0,r.yg)("td",{parentName:"tr",align:null},"Search by the color of the car")))),(0,r.yg)("p",null,"Example: ",(0,r.yg)("inlineCode",{parentName:"p"},"https://data-api.glitch.je/v1/vehicles?page=10&limit=500")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Cache: ",(0,r.yg)("strong",{parentName:"li"},"1 day")),(0,r.yg)("li",{parentName:"ul"},"Rate Limit:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Maximum of 600 requests per hour")))),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"res-sample-200",label:"200 (OK)",mdxType:"TabItem"},(0,r.yg)("p",null,"This is a sample response."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="Status: 200 (OK)"',title:'"Status:','(OK)"':!0},'{\n  "pagination": {\n    "page": 6,\n    "limit": 500,\n    "totalPages": 257,\n    "totalItems": 128003\n  },\n  "results": [\n    {\n        "make": "Lancia",\n        "model": "aprilia",\n        "color": "Grey",\n        "cylinderCapacity": 1418,\n        "weight": null,\n        "co2Emissions": null,\n        "fuelType": "PETROL",\n        "firstRegisteredAt": "1969-12-31T23:00:00.000Z",\n        "firstRegisteredInJerseyAt": "1969-12-31T23:00:00.000Z",\n        "hash": "121c70d140b15fc475e4141f9bf3d8a7bf1b9c1754338fd30da982c5a33cb35b"\n    },\n    {\n        "make": "Jaguar",\n        "model": "XK8 COUPE",\n        "color": "Green",\n        "cylinderCapacity": 3996,\n        "weight": null,\n        "co2Emissions": null,\n        "fuelType": "PETROL",\n        "firstRegisteredAt": "1969-12-31T23:00:00.000Z",\n        "firstRegisteredInJerseyAt": "1969-12-31T23:00:00.000Z",\n        "hash": "682e49c172c8e67a3ac09af74dfcf70433dc4da25d16aab6c8f9e421055b818a"\n    }\n  ]\n}\n'))),(0,r.yg)(i.A,{value:"res-schema",label:"Schema",mdxType:"TabItem"},(0,r.yg)("h4",{id:"root"},"Root"),(0,r.yg)("p",null,"See example JSON response."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pagination")),(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("inlineCode",{parentName:"td"},"Pagination Data")," below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"results")),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of ",(0,r.yg)("inlineCode",{parentName:"td"},"Vehicle"),"s.")))),(0,r.yg)("h4",{id:"pagination-data"},"Pagination Data"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"page")),(0,r.yg)("td",{parentName:"tr",align:null},"Number"),(0,r.yg)("td",{parentName:"tr",align:null},"The current page of results")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"limit")),(0,r.yg)("td",{parentName:"tr",align:null},"Number"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of results per page")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"totalPages")),(0,r.yg)("td",{parentName:"tr",align:null},"Number"),(0,r.yg)("td",{parentName:"tr",align:null},"The total amount of pages based on the total results and results per page")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"totalItems")),(0,r.yg)("td",{parentName:"tr",align:null},"Number"),(0,r.yg)("td",{parentName:"tr",align:null},"The total amount of results")))),(0,r.yg)("h4",{id:"vehicle"},"Vehicle"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"make")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle make")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"model")),(0,r.yg)("td",{parentName:"tr",align:null},"String/null"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle model")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"type")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle category")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"color")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle colour")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cylinderCapacity")),(0,r.yg)("td",{parentName:"tr",align:null},"Number/null"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle cylinder capacity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"weight")),(0,r.yg)("td",{parentName:"tr",align:null},"String/null"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle weight")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"co2Emissions")),(0,r.yg)("td",{parentName:"tr",align:null},"Number/null"),(0,r.yg)("td",{parentName:"tr",align:null},"The CO2 emossions that the vehicle emits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fuelType")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("inlineCode",{parentName:"td"},"Fuel Types")," below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"firstRegisteredAt")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The date the vehicle was first ever registered")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"firstRegisteredInJerseyAt")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The date the vehicle was first registered in Jersey")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hash")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"A SHA-256 hash of multiple properties above. This is used to cross reference vehicle information from the Search API and open data")))),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"enums"},"Enums"),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"fuel-types"},"Fuel Types"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PETROL")),(0,r.yg)("td",{parentName:"tr",align:null},"Petrol powered")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HEAVY_OIL")),(0,r.yg)("td",{parentName:"tr",align:null},"Diesel powered")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ELECTRIC")),(0,r.yg)("td",{parentName:"tr",align:null},"Fully electric")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HYBRID_ELECTRIC")),(0,r.yg)("td",{parentName:"tr",align:null},"Hybrid")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"GAS")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DIESEL_ELECTRIC")),(0,r.yg)("td",{parentName:"tr",align:null},"Diesel hybrid")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"GAS_BI_FUEL")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"STEAM")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UNKNOWN")),(0,r.yg)("td",{parentName:"tr",align:null},"The fuel type is unknown")))))),(0,r.yg)("h3",{id:"sources"},"Sources"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://opendata.gov.je/dataset/registered-vehicles"},"All Vehicles Registered in Jersey on opendata.gov.je"))))))}m.isMDXComponent=!0}}]);