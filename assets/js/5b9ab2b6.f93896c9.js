"use strict";(self.webpackChunk_glitchjsy_data_frontend=self.webpackChunk_glitchjsy_data_frontend||[]).push([[792],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,m=d["".concat(u,".").concat(y)]||d[y]||g[y]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6540),r=n(53);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>T});var a=n(8168),r=n(6540),l=n(53),i=n(3104),o=n(6347),u=n(7485),s=n(1682),p=n(9466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function c(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=g(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:n,groupId:a}),[d,c]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),N=(()=>{const e=u??d;return y({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),c(e)}),[s,c,l]),tabValues:l}}var N=n(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==o&&(d(t),u(a))},y=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:y,onClick:g},i,{className:(0,l.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=c(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(f,(0,a.A)({},e,t)))}function T(e){const t=(0,N.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},2325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(8168),r=(n(6540),n(5680)),l=n(1470),i=n(9365);const o={},u="Vehicle Lookup By Plate (Live)",s={unversionedId:"endpoints/vehicles/lookup",id:"endpoints/vehicles/lookup",title:"Vehicle Lookup By Plate (Live)",description:"Returns live vehicle information from a number plate.",source:"@site/docs/endpoints/vehicles/lookup.mdx",sourceDirName:"endpoints/vehicles",slug:"/endpoints/vehicles/lookup",permalink:"/docs/endpoints/vehicles/lookup",draft:!1,editUrl:"https://github.com/glitchjsy/data-frontend/tree/master/docs/endpoints/vehicles/lookup.mdx",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"All Vehicles",permalink:"/docs/endpoints/vehicles/"},next:{title:"Vehicle Colors",permalink:"/docs/endpoints/vehicles/colors"}},p={},d=[{value:"Response",id:"response",level:3},{value:"Enums",id:"enums",level:4},{value:"Fuel Types",id:"fuel-types",level:4}],g={toc:d},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"vehicle-lookup-by-plate-live"},"Vehicle Lookup By Plate (Live)"),(0,r.yg)("p",null,"Returns live vehicle information from a number plate."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"GET /v1/vehicles/{PLATE}\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Desription"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PLATE")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle number plate to lookup. Example: ",(0,r.yg)("inlineCode",{parentName:"td"},"J12096"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Cache: ",(0,r.yg)("strong",{parentName:"li"},"1 hour")),(0,r.yg)("li",{parentName:"ul"},"Rate Limit:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Wait 3 seconds between requests"),(0,r.yg)("li",{parentName:"ul"},"Maximum of 300 requests per hour")))),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"res-sample-200",label:"200 (OK)",mdxType:"TabItem"},(0,r.yg)("p",null,"This is a sample response."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="Status: 200 (OK)"',title:'"Status:','(OK)"':!0},'{\n  "make": "Toyota",\n  "model": "RANGE ROVER VOGUE SE SDV8",\n  "type": "Panel Van",\n  "color": "White",\n  "cylinderCapacity": "2446 (cc)",\n  "weight": "Not known",\n  "co2Emissions": "Not known",\n  "fuelType": "HEAVY_OIL",\n  "firstRegisteredAt": "1996-03-22T00:00:00.000Z",\n  "firstRegisteredInJerseyAt": "1996-03-22T00:00:00.000Z",\n  "previousOwners": 6,\n  "previousTraders": 2,\n  "hash": "o2326982cbed5c7051e0171887df2db0d75b650aac9788d4f1628e9eb275db90"\n}\n'))),(0,r.yg)(i.A,{value:"res-schema",label:"Schema",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"make")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle make")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"model")),(0,r.yg)("td",{parentName:"tr",align:null},"String/null"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle model. This may be null as the vehicle search api doesn't provide this and we need to cross reference it with open data")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"type")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle category")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"color")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle colour")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cylinderCapacity")),(0,r.yg)("td",{parentName:"tr",align:null},"Number/null"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle cylinder capacity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"weight")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The vehicle weight")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"co2Emissions")),(0,r.yg)("td",{parentName:"tr",align:null},"Number/null"),(0,r.yg)("td",{parentName:"tr",align:null},"The CO2 emossions that the vehicle emits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fuelType")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("inlineCode",{parentName:"td"},"Fuel Types")," below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"firstRegisteredAt")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The date the vehicle was first ever registered")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"firstRegisteredInJerseyAt")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The date the vehicle was first registered in Jersey")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"previousOwners")),(0,r.yg)("td",{parentName:"tr",align:null},"Number"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of previous owners")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"previousTraders")),(0,r.yg)("td",{parentName:"tr",align:null},"Number"),(0,r.yg)("td",{parentName:"tr",align:null},"The numbers of previous owners who are traders")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hash")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"A SHA-256 hash of multiple properties above. This is used to cross reference vehicle information from the Search API and open data")))),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"enums"},"Enums"),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"fuel-types"},"Fuel Types"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PETROL")),(0,r.yg)("td",{parentName:"tr",align:null},"Petrol powered")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HEAVY_OIL")),(0,r.yg)("td",{parentName:"tr",align:null},"Diesel powered")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ELECTRIC")),(0,r.yg)("td",{parentName:"tr",align:null},"Fully electric")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HYBRID_ELECTRIC")),(0,r.yg)("td",{parentName:"tr",align:null},"Hybrid")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"GAS")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DIESEL_ELECTRIC")),(0,r.yg)("td",{parentName:"tr",align:null},"Diesel hybrid")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"GAS_BI_FUEL")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"STEAM")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UNKNOWN")),(0,r.yg)("td",{parentName:"tr",align:null},"The fuel type is unknown")))))))}m.isMDXComponent=!0}}]);