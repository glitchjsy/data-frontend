"use strict";(self.webpackChunk_glitchjsy_data_frontend=self.webpackChunk_glitchjsy_data_frontend||[]).push([[983],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const i={},l="Getting Started",o={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting Started",description:"The base URL for the API is:",source:"@site/docs/getting-started/index.mdx",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/docs/getting-started/",draft:!1,editUrl:"https://github.com/glitchjsy/data-frontend/tree/master/docs/getting-started/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",next:{title:"Errors",permalink:"/docs/errors/"}},s={},p=[{value:"User-Agent Header",id:"user-agent-header",level:3},{value:"Caching",id:"caching",level:3},{value:"Global Query Parameters",id:"global-query-parameters",level:3},{value:"Response",id:"response",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-started"},"Getting Started"),(0,a.yg)("admonition",{title:"The API is not currently live",type:"caution"}),(0,a.yg)("p",null,"The base URL for the API is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"https://api.data.glitch.je\n")),(0,a.yg)("h3",{id:"user-agent-header"},"User-Agent Header"),(0,a.yg)("p",null,"All API requests must include a valid ",(0,a.yg)("inlineCode",{parentName:"p"},"User-Agent")," header. The ",(0,a.yg)("inlineCode",{parentName:"p"},"User-Agent")," header identifies the user or application that is making the request."),(0,a.yg)("h3",{id:"caching"},"Caching"),(0,a.yg)("p",null,"By default, all endpoints that don't require authentication cache the response for 5 minutes. This may differ for certain endpoints, such as those that fetch live data."),(0,a.yg)("h3",{id:"global-query-parameters"},"Global Query Parameters"),(0,a.yg)("p",null,"Here is a list of query parameters that can be used on every endpoint."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Values"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"pretty")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"false")),(0,a.yg)("td",{parentName:"tr",align:null},"If specified the resulting JSON will be pretty printed")))),(0,a.yg)("h3",{id:"response"},"Response"),(0,a.yg)("p",null,"If a request is successful, the server will return a 200 status code with the data. "),(0,a.yg)("p",null,"If the request fails, see ",(0,a.yg)("a",{parentName:"p",href:"../errors"},"Errors"),"."))}u.isMDXComponent=!0}}]);