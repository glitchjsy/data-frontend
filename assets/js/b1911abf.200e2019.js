"use strict";(self.webpackChunk_glitchjsy_data_frontend=self.webpackChunk_glitchjsy_data_frontend||[]).push([[936],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(6540),r=n(53);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(8168),r=n(6540),l=n(53),s=n(3104),o=n(6347),i=n(7485),u=n(1682),c=n(9466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=y({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=n(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.A)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(N,(0,a.A)({key:String(t)},e))}},3898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(8168),r=(n(6540),n(5680)),l=n(1470),s=n(9365);const o={},i="Vehicle Makes",u={unversionedId:"endpoints/vehicles/makes",id:"endpoints/vehicles/makes",title:"Vehicle Makes",description:"Returns a list of all distinct vehicle makes and the total amount of cars with that make.",source:"@site/docs/endpoints/vehicles/makes.mdx",sourceDirName:"endpoints/vehicles",slug:"/endpoints/vehicles/makes",permalink:"/docs/endpoints/vehicles/makes",draft:!1,editUrl:"https://github.com/glitchjsy/data-frontend/tree/master/docs/endpoints/vehicles/makes.mdx",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Vehicle Colors",permalink:"/docs/endpoints/vehicles/colors"},next:{title:"Vehicle Models",permalink:"/docs/endpoints/vehicles/models"}},c={},d=[{value:"Query Params",id:"query-params",level:4},{value:"Response",id:"response",level:3},{value:"Sources",id:"sources",level:3}],p={toc:d},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"vehicle-makes"},"Vehicle Makes"),(0,r.yg)("p",null,"Returns a list of all distinct vehicle makes and the total amount of cars with that make."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"GET /v1/vehicles/makes\n")),(0,r.yg)("h4",{id:"query-params"},"Query Params"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Desription"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"startDate")),(0,r.yg)("td",{parentName:"tr",align:null},"Retrieve results after the given date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"endDate")),(0,r.yg)("td",{parentName:"tr",align:null},"Retrieve results before the given date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dateType")),(0,r.yg)("td",{parentName:"tr",align:null},"- ",(0,r.yg)("inlineCode",{parentName:"td"},"regInJersey")," - startDate and endDate checks the date the car was registered in Jersey",(0,r.yg)("br",null),"- Anything else - startDate and endDate checks the date the car was first ever registered")))),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"res-sample-200",label:"200 (OK)",mdxType:"TabItem"},(0,r.yg)("p",null,"This is a sample response."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="Status: 200 (OK)"',title:'"Status:','(OK)"':!0},'{\n  "results": {\n    "Ford": 12447,\n    "Volkswagen": 6249,\n    "Honda": 5939,\n    "Renault": 4115,\n    "Toyota": 3911,\n    "B.M.W.": 3605,\n    "Peugeot": 3519,\n    "Mercedes-Benz": 3375,\n    "Suzuki": 2883,\n    "Audi": 2772,\n    "Nissan": 2495,\n    "Fiat": 2402,\n    "Vauxhall": 2308,\n    "Land Rover": 2204,\n    "Yamaha": 2091,\n    "MINI": 1923,\n    "Citroen": 1759,\n    "Austin": 1669,\n    "Mitsubishi": 1401,\n    "Rover": 1289,\n    "Mazda": 1149,\n    "HYUNDAI": 1130\n  }\n}\n')))),(0,r.yg)("h3",{id:"sources"},"Sources"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://opendata.gov.je/dataset/registered-vehicles"},"All Vehicles Registered in Jersey on opendata.gov.je"))))))}y.isMDXComponent=!0}}]);