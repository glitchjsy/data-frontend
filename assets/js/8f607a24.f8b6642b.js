"use strict";(self.webpackChunk_glitchjsy_data_frontend=self.webpackChunk_glitchjsy_data_frontend||[]).push([[577],{242:(e,t,a)=>{a.d(t,{Z:()=>w});var l=a(6540);const i="popup_P_2S",c="popupName_aI73";function n(e){let{location:t}=e;return l.createElement("div",{className:i},l.createElement("p",{className:c},t.name))}const s="popup_5RKj",r="popupName_ihZz",o="servicesName_d1ic",p="services_M2AE";var u=a(3925);function m(e){let{location:t}=e;return l.createElement("div",{className:s},l.createElement("p",{className:r},t.location),l.createElement("p",{className:o},"Services:"),l.createElement("ul",{className:p},t.services.map((e=>l.createElement("li",null,(e=>{switch(e){case u.d.MIXED_TEXTILES:return"Mixed Textiles";case u.d.BATTERIES:return"Batteries";case u.d.CARDBOARD:return"Cardboard";case u.d.METAL_PACKAGING:return"Metal Packaging";case u.d.METAL_PACKAGING_DRINK_CANS:return"Drink Cans";case u.d.PAPER:return"Paper";case u.d.PLASTIC_BOTTLES:return"Plastic Bottles";case u.d.GLASS:return"Glass"}return"Unknown"})(e))))))}function d(e){let{location:t}=e;const[a,i]=(0,l.useState)("transparent"),[c,n]=(0,l.useState)(!1),s={border:"2px solid",borderColor:a,height:"25px"};return(0,l.useEffect)((()=>{null!==t.owner?.id&&(n(!0),"6060f60d-17a1-49c8-aa4a-c268721a806a"===t.owner.id&&i("red"),"62a13258-686c-456c-87f3-8a93ff735d35"===t.owner.id&&i("blue"),"52c49647-20f2-49f0-b9b6-a9ba49a13d03"===t.owner.id&&i("orange"))}),[t]),l.createElement("div",{style:c?s:{}},l.createElement("img",{src:"/img/maps/toilet.png",height:"20",width:"20"}))}function E(e){let{location:t}=e;return l.createElement("img",{src:"/img/maps/recycling.png",height:"20",width:"20"})}function g(e){let{location:t}=e;return l.createElement("img",{src:`/img/maps/eatsafe-${t.rating}.png`,height:"20",width:"20",style:{backgroundColor:"white",borderRadius:"50%"}})}const b={popup:"popup_YQy9",popupName:"popupName_U7DZ",popupType:"popupType_kaXW",popupList:"popupList_RGla",facilitiesWrapper:"facilitiesWrapper_vcKX",facility:"facility_z7_y",popupParish:"popupParish_IEy8",toiletGrid:"toiletGrid_keSm",toiletItem:"toiletItem_Sap9",ownedBy:"ownedBy_yMNL"};function S(e){let{location:t}=e;const a=l.createElement("span",{style:{color:"red"}},"N/A");return l.createElement("div",{className:b.popup},l.createElement("p",{className:b.popupName},t.name),l.createElement("p",{className:b.popupParish},t.parish," ",t.buildDate&&`| Built in ${t.buildDate}`),l.createElement("div",{className:b.facilitiesWrapper},t.facilities.map((e=>l.createElement("p",{className:b.facility},e)))),l.createElement("div",{className:b.toiletGrid},l.createElement("div",{className:b.maleToilet},l.createElement("strong",null,"Male"),t.male?l.createElement(l.Fragment,null,l.createElement("p",{className:b.toiletItem},"Cubicles: ",t.male.cubicles??a),l.createElement("p",{className:b.toiletItem},"Urinals: ",t.male.urinales??a),l.createElement("p",{className:b.toiletItem},"Hand Dryers: ",t.male.handDryers??a),l.createElement("p",{className:b.toiletItem},"Sinks: ",t.male.sinks??a)):l.createElement("p",null,"No male toilets")),l.createElement("div",{className:b.femaleToilet},l.createElement("strong",null,"Female"),t.female?l.createElement(l.Fragment,null,l.createElement("p",{className:b.toiletItem},"Cubicles: ",t.female.cubicles??a),l.createElement("p",{className:b.toiletItem},"Hand Dryers: ",t.female.handDryers??a),l.createElement("p",{className:b.toiletItem},"Sinks: ",t.female.sinks??a)):l.createElement("p",null,"No female toilets")),t.owner&&l.createElement("p",{className:b.ownedBy},"Owned by ",t.owner.name)))}function h(e){let{location:t}=e;return l.createElement("img",{src:"/img/maps/defib.png",height:"20",width:"20"})}const N="popup_v_lW",A="popupAddress_O2pV",f="popupParish_EZZs",C="popupPadNumber_VObk",_="popupNotes_kSdB";function y(e){let{location:t}=e;return l.createElement("div",{className:N},l.createElement("p",{className:A},t.address),l.createElement("p",{className:f},t.parish),l.createElement("p",{className:C},t.padNumber),t.notes&&l.createElement("p",{className:_},t.notes))}function k(e){let{location:t}=e;return l.createElement("img",{src:t.shelter?"/img/maps/bus-stop-yellow.png":"/img/maps/bus-stop.png",height:"20",width:"20"})}const T="popup_mXuE",v="popupName_azMX";function G(e){let{location:t}=e;return l.createElement("div",{className:T},l.createElement("p",{className:v},t.name))}function R(e){let{location:t}=e;return l.createElement("img",{src:"/img/maps/carpark.png",height:"20",width:"20"})}const D="popup_oaBH",O="popupName_jxds",I="popupType_pGU4",L="popupList_pjIE";function B(e){let{location:t}=e;return l.createElement("div",{className:D},l.createElement("p",{className:O},t.name),l.createElement("p",{className:I},(()=>{switch(t.type){case"LONG_STAY":return"Long Stay";case"SHORT_STAY":return"Short Stay";case"UNKNOWN":return"Unknown"}return t.type})()),l.createElement("ul",{className:L},l.createElement("li",null,l.createElement("strong",null,"Surface: "),t.surfaceType),l.createElement("li",null,l.createElement("strong",null,"Spaces:")," ",t.spaces),l.createElement("li",null,l.createElement("strong",null,"Disabled Spaces:")," ",t.disabledSpaces),l.createElement("li",null,l.createElement("strong",null,"Parent/Child Spaces:")," ",t.parentChildSpaces),l.createElement("li",null,l.createElement("strong",null,"Electric Charging Spaces:")," ",t.electricChargingSpaces)))}const w={eatsafe:{label:"Eatsafe ratings",icon:e=>l.createElement(g,{location:e}),popup:e=>l.createElement(n,{location:e}),fetchData:()=>P("eatsafe")},recycling:{label:"Recycling centres",icon:e=>l.createElement(E,{location:e}),popup:e=>l.createElement(m,{location:e}),fetchData:()=>P("recycling")},toilet:{label:"Public toilets",icon:e=>l.createElement(d,{location:e}),popup:e=>l.createElement(S,{location:e}),fetchData:()=>P("toilets")},defib:{label:"Defibrillators",icon:e=>l.createElement(h,{location:e}),popup:e=>l.createElement(y,{location:e}),fetchData:()=>P("defibrillators")},busStop:{label:"Bus stops",icon:e=>l.createElement(k,{location:e}),popup:e=>l.createElement(G,{location:e}),fetchData:()=>P("bus/stops")},carpark:{label:"Car parks",icon:e=>l.createElement(R,{location:e}),popup:e=>l.createElement(B,{location:e}),fetchData:()=>P("carparks")}};async function P(e){try{const t="https://data-api.glitch.je/v1",a=await fetch(`${t}/${e}`);if(!a.ok)throw new Error("Response was not ok");const l=await a.json();return l?.results}catch(t){throw console.error(`Failed to fetch data for route ${e}: ${t.message}`),t}}},3925:(e,t,a)=>{a.d(t,{d:()=>l});let l=function(e){return e.BATTERIES="BATTERIES",e.CARDBOARD="CARDBOARD",e.METAL_PACKAGING="METAL_PACKAGING",e.METAL_PACKAGING_DRINK_CANS="METAL_PACKAGING_DRINK_CANS",e.MIXED_TEXTILES="MIXED_TEXTILES",e.PAPER="PAPER",e.PLASTIC_BOTTLES="PLASTIC_BOTTLES",e.GLASS="GLASS",e}({})},228:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var l=a(8168),i=a(6540),c=a(7330),n=a(242),s=a(5549);const r={grid:"grid__dFs",drawer:"drawer_Y40b",checkboxGroup:"checkboxGroup_KR_s",checkmark:"checkmark_T8Dv"},o={subOptions:"subOptions_b7XZ",subOptionOptions:"subOptionOptions_xGmD",subOptionSectionTitle:"subOptionSectionTitle_AFFO",subOptionGroup:"subOptionGroup_xlG5",checkmark:"checkmark_VkFL",checkboxGroup:"checkboxGroup_Tg19"};var p=a(53);function u(e){return i.createElement("div",{style:{borderBottom:"1px solid #ececec",paddingTop:"15px"}},i.createElement("label",{className:o.checkboxGroup},e.label,i.createElement("input",{type:"checkbox",checked:e.isVisible,onChange:e.toggleVisibility}),i.createElement("span",{className:o.checkmark})),e.isVisible&&e.subOptions?.length>0&&i.createElement("div",{className:o.subOptions},e.subOptions.map((e=>i.createElement("div",{className:o.subOptionSection},i.createElement("p",{className:o.subOptionSectionTitle},e.title),i.createElement("div",{className:o.subOptionOptions},e.options.map((e=>i.createElement("label",{key:e.value,className:(0,p.A)(o.checkboxGroup,o.subOptionGroup)},e.label,i.createElement("input",{type:"checkbox",checked:e.isChecked,onChange:e.toggle}),i.createElement("span",{className:o.checkmark}))))))))))}var m=a(8272);let d=function(e){return e.SHORT_STAY="SHORT_STAY",e.LONG_STAY="LONG_STAY",e.UNKNOWN="UNKNOWN",e}({}),E=function(e){return e.TARMAC="TARMAC",e.CONCRETE="CONCRETE",e.GRAVEL="GRAVEL",e}({}),g=function(e){return e.GENDER_NEUTRAL="GENDER_NEUTRAL",e.BEACH_SHOWER="BEACH_SHOWER",e.BABY_CHANGING="BABY_CHANGING",e.DISABLED="DISABLED",e}({});var b=a(3925);function S(){const[e,t]=(0,i.useState)({width:"100%",height:"80vh",latitude:49.214198,longitude:-2.132497,zoom:11}),[a,o]=(0,i.useState)(null),[p,S]=(0,i.useState)(!1),[N,A]=(0,i.useState)(!0),[f,C]=(0,i.useState)(!0),[_,y]=(0,i.useState)(!0),[k,T]=(0,i.useState)(!0),[v,G]=(0,i.useState)(!0),[R,D]=(0,i.useState)(!0),[O,I]=(0,i.useState)(!1),[L,B]=(0,i.useState)(!0),[w,P]=(0,i.useState)(!0),[M,x]=(0,i.useState)(!0),[V,H]=(0,i.useState)(!0),[K,Z]=(0,i.useState)(!0),[Y,U]=(0,i.useState)(!1),[W,X]=(0,i.useState)(!0),[j,F]=(0,i.useState)(!0),[z,$]=(0,i.useState)(!0),[J,Q]=(0,i.useState)(!0),[q,ee]=(0,i.useState)(!0),[te,ae]=(0,i.useState)(!0),[le,ie]=(0,i.useState)(!0),[ce,ne]=(0,i.useState)(!0),[se,re]=(0,i.useState)(!1),[oe,pe]=(0,i.useState)(!1),[ue,me]=(0,i.useState)(!1),[de,Ee]=(0,i.useState)([]),[ge,be]=(0,i.useState)([]),[Se,he]=(0,i.useState)([]),[Ne,Ae]=(0,i.useState)([]),[fe,Ce]=(0,i.useState)([]),[_e,ye]=(0,i.useState)([]);(0,i.useEffect)((()=>{n.Z.carpark.fetchData().then(Ee),n.Z.toilet.fetchData().then(be),n.Z.busStop.fetchData().then(he),n.Z.recycling.fetchData().then(Ae),n.Z.defib.fetchData().then(Ce),n.Z.eatsafe.fetchData().then(ye)}),[]);return i.createElement(s.A,{title:"Map",description:"Interactive map example"},i.createElement("main",null,i.createElement("div",{className:r.grid},i.createElement("div",{className:r.drawer},i.createElement(u,{label:"Car parks",isVisible:p,toggleVisibility:()=>S(!p),subOptions:[{title:"Type",options:[{label:"Long Stay",value:"includeLongStayCarparks",isChecked:N,toggle:()=>A(!N)},{label:"Short Stay",value:"includeShortStayCarparks",isChecked:f,toggle:()=>C(!f)},{label:"Unknown",value:"includeUnknownCarparks",isChecked:_,toggle:()=>y(!_)}]},{title:"Surface",options:[{label:"Tarmac",value:"includeTarmacCarparks",isChecked:v,toggle:()=>G(!v)},{label:"Concrete",value:"includeConcreteCarparks",isChecked:R,toggle:()=>D(!R)},{label:"Gravel",value:"includeGravelCarparks",isChecked:k,toggle:()=>T(!k)}]}]}),i.createElement(u,{label:"Public toilets",isVisible:O,toggleVisibility:()=>I(!O),subOptions:[{title:"Facilities",options:[{label:"Gender Neutral",value:"includeGenderNeutralToilets",isChecked:L,toggle:()=>B(!L)},{label:"Beach Showers",value:"includeBeachShowerToilets",isChecked:w,toggle:()=>P(!w)},{label:"Baby Changing",value:"includeBabyChangingToilets",isChecked:M,toggle:()=>x(!M)},{label:"Disabled",value:"includeDisabledToilets",isChecked:V,toggle:()=>H(!V)},{label:"None",value:"includeNoneToilets",isChecked:K,toggle:()=>Z(!K)}]}]}),i.createElement(u,{label:"Bus stops",isVisible:se,toggleVisibility:()=>re(!se)}),i.createElement(u,{label:"Recycling centres",isVisible:Y,toggleVisibility:()=>U(!Y),subOptions:[{title:"Services",options:[{label:"Mixed Textiles",value:"includeMixedTextilesRecycling",isChecked:W,toggle:()=>X(!W)},{label:"Batteries",value:"includeBatteriesRecycling",isChecked:j,toggle:()=>F(!j)},{label:"Cardboard",value:"includeCardboardRecycling",isChecked:z,toggle:()=>$(!z)},{label:"Metal Packaging",value:"includeMetalPackagingRecycling",isChecked:J,toggle:()=>Q(!J)},{label:"Drink Cans",value:"includeDrinkCansRecycling",isChecked:q,toggle:()=>ee(!q)},{label:"Paper",value:"includePaperRecycling",isChecked:te,toggle:()=>ae(!te)},{label:"Plastic Bottles",value:"includePlasticBottlesRecycling",isChecked:le,toggle:()=>ie(!le)},{label:"Glass",value:"includeGlassRecycling",isChecked:ce,toggle:()=>ne(!ce)}]}]}),i.createElement(u,{label:"Defibrillators",isVisible:oe,toggleVisibility:()=>pe(!oe)}),i.createElement(u,{label:"Eat safe ratings",isVisible:ue,toggleVisibility:()=>me(!ue)})),i.createElement(c.Ay,(0,l.A)({},e,{mapStyle:"mapbox://styles/mapbox/streets-v11",onViewportChange:e=>t(e),mapboxApiAccessToken:m.R}),i.createElement(c.ov,{showZoom:!0,style:{padding:"20px",zIndex:1e4}}),p&&de.filter((e=>(N&&e.type===d.LONG_STAY||f&&e.type===d.SHORT_STAY||_&&e.type===d.UNKNOWN)&&(k&&e.surfaceType===E.GRAVEL||v&&e.surfaceType===E.TARMAC||R&&e.surfaceType===E.CONCRETE))).map(((e,t)=>i.createElement(h,{item:e,type:"carpark",onSelect:o}))),O&&ge.filter((e=>!(!K&&0===e.facilities.length||!L&&e.facilities.includes(g.GENDER_NEUTRAL)||!w&&e.facilities.includes(g.BEACH_SHOWER)||!M&&e.facilities.includes(g.BABY_CHANGING)||!V&&e.facilities.includes(g.DISABLED)))).map(((e,t)=>i.createElement(h,{item:e,type:"toilet",onSelect:o}))),se&&Se.map(((e,t)=>i.createElement(h,{item:e,type:"busStop",onSelect:o}))),Y&&Ne.filter((e=>!(!W&&e.services.includes(b.d.MIXED_TEXTILES)||!j&&e.services.includes(b.d.BATTERIES)||!z&&e.services.includes(b.d.CARDBOARD)||!J&&e.services.includes(b.d.METAL_PACKAGING)||!q&&e.services.includes(b.d.METAL_PACKAGING_DRINK_CANS)||!te&&e.services.includes(b.d.PAPER)||!le&&e.services.includes(b.d.PLASTIC_BOTTLES)||!ce&&e.services.includes(b.d.GLASS)))).map(((e,t)=>i.createElement(h,{item:e,type:"recycling",onSelect:o}))),oe&&fe.map(((e,t)=>i.createElement(h,{item:e,type:"defib",onSelect:o}))),ue&&_e.map(((e,t)=>i.createElement(h,{item:e,type:"eatsafe",onSelect:o}))),a&&i.createElement(c.zD,{latitude:Number(a.item.latitude),longitude:Number(a.item.longitude),onClose:()=>o(null),closeOnClick:!1,anchor:"top"},n.Z[a.type].popup(a.item))))))}function h(e){let{item:t,type:a,onSelect:l}=e;return i.createElement(c.pH,{latitude:Number(t.latitude),longitude:Number(t.longitude)},i.createElement("div",{onClick:()=>l({item:t,type:a}),style:{cursor:"pointer"}},n.Z[a].icon(t)))}},8272:e=>{e.exports=JSON.parse('{"R":"pk.eyJ1IjoibHVrZWVleWRldiIsImEiOiJjbHI4cjV3MGswYjYzMmp0M3lnaGllcHZhIn0.rBFyu08FWcUHQ2S7YSN0zg","y":"https://data-api.glitch.je/v1"}')}}]);