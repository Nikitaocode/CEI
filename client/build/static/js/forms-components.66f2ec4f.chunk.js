(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[47],{1054:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t.n(l),c=t(233),s=t(110),r=t(114),m=t(122),o=t(101),i=t(104),u=t(106),d=t(196),E=t(659),p=t(660),b=t(661);var g=()=>n.a.createElement(d.a,null,n.a.createElement(E.a,null,n.a.createElement(p.a,{for:"exCustomCheckbox"},n.a.createElement(o.a,{id:"form-components.checkboxes"})),n.a.createElement("div",null,n.a.createElement(b.a,{type:"checkbox",id:"exCustomCheckbox",label:"Check this custom checkbox"}),n.a.createElement(b.a,{type:"checkbox",id:"exCustomCheckbox2",label:"Or this one"}),n.a.createElement(b.a,{type:"checkbox",id:"exCustomCheckbox3",label:"But not this disabled one",disabled:!0}))),n.a.createElement(E.a,null,n.a.createElement(p.a,{for:"exCustomRadio"},n.a.createElement(o.a,{id:"form-components.radios"})),n.a.createElement("div",null,n.a.createElement(b.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"Select this custom radio"}),n.a.createElement(b.a,{type:"radio",id:"exCustomRadio2",name:"customRadio",label:"Or this one"}),n.a.createElement(b.a,{type:"radio",id:"exCustomRadio3",label:"But not this disabled one",disabled:!0}))),n.a.createElement(E.a,null,n.a.createElement(p.a,{for:"exCustomInline"},n.a.createElement(o.a,{id:"form-components.inline"})),n.a.createElement("div",null,n.a.createElement(b.a,{type:"checkbox",id:"exCustomInline",label:"An inline custom input",inline:!0}),n.a.createElement(b.a,{type:"checkbox",id:"exCustomInline2",label:"and another one",inline:!0})))),h=t(103),x=t(126),f=t(129);const v=[{label:"Cake",value:"cake",key:0},{label:"Cupcake",value:"cupcake",key:1},{label:"Dessert",value:"dessert",key:2}];var k=()=>{const e=Object(l.useState)(""),a=Object(h.a)(e,2),t=a[0],s=a[1],r=Object(l.useState)([]),m=Object(h.a)(r,2),u=m[0],d=m[1];return n.a.createElement(c.a,null,n.a.createElement(i.a,{xxs:"12",md:"6",className:"mb-5"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.state-single"})),n.a.createElement(x.a,{components:{Input:f.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",value:t,onChange:s,options:v})),n.a.createElement(i.a,{xxs:"12",md:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.state-multiple"})),n.a.createElement(x.a,{components:{Input:f.a},className:"react-select",classNamePrefix:"react-select",isMulti:!0,name:"form-field-name",value:u,onChange:d,options:v})))},O=t(231),N=t(886),j=t.n(N);const C=e=>e.name,w=e=>n.a.createElement("div",null,e.name);var y=({data:e,value:a,placeholder:t,onChange:c})=>{const s=Object(l.useState)(a),r=Object(h.a)(s,2),m=r[0],o=r[1],i=Object(l.useState)(e||[]),u=Object(h.a)(i,1)[0],d=Object(l.useState)([]),E=Object(h.a)(d,2),p=E[0],b=E[1],g={placeholder:t||"",value:m,onChange:(e,{newValue:a})=>{o(a),c(a)}};return n.a.createElement(j.a,{suggestions:p,onSuggestionsFetchRequested:({value:e})=>{b((e=>{if(e){const a=e.trim().toLowerCase(),t=a.length;return 0===t?[]:u.filter(e=>e.name.toLowerCase().slice(0,t)===a)}return u})(e))},onSuggestionsClearRequested:()=>{b([])},getSuggestionValue:C,renderSuggestion:w,inputProps:g,theme:{container:"autosuggest",input:"form-control",inputOpen:"react-autosuggest__input--open",suggestionsContainer:"react-autosuggest__suggestions-container",suggestionsContainerOpen:"react-autosuggest__suggestions-container--open",suggestionsList:"react-autosuggest__suggestions-list ".concat(p.length?"show":""),suggestionFocused:"active",suggestion:"react-autosuggest__suggestion"}})};const S=t(243).a.map(e=>({name:e.title}));var z=Object(O.c)(({intl:e})=>{const a=Object(l.useState)(""),t=Object(h.a)(a,2),c=t[0],s=t[1],r=e.messages;return n.a.createElement(y,{placeholder:r["form-components.type-a-cake"],value:c,onChange:e=>s(e),data:S})}),D=t(394),F=t.n(D);t(393);var R=Object(O.c)(({intl:e})=>{const a=Object(l.useState)(new Date),t=Object(h.a)(a,2),u=t[0],d=t[1],E=Object(l.useState)(new Date),p=Object(h.a)(E,2),b=p[0],g=p[1],x=Object(l.useState)(new Date),f=Object(h.a)(x,2),v=f[0],k=f[1],O=Object(l.useState)(new Date),N=Object(h.a)(O,2),j=N[0],C=N[1],w=Object(l.useState)(new Date),y=Object(h.a)(w,2),S=y[0],z=y[1],D=e.messages;return n.a.createElement(c.a,null,n.a.createElement(i.a,{xxs:"12",xl:"8",className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.date-picker"})),n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.date"})),n.a.createElement("div",{className:"mb-5"},n.a.createElement(F.a,{selected:u,onChange:d,placeholderText:D["forms.date"]})),n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.date-range"})),n.a.createElement(c.a,{className:"mb-5"},n.a.createElement(i.a,{xxs:"6"},n.a.createElement(F.a,{selected:v,selectsStart:!0,startDate:v,endDate:j,onChange:k,placeholderText:D["form-components.start"]})),n.a.createElement(i.a,{xxs:"6"},n.a.createElement(F.a,{selected:j,selectsEnd:!0,startDate:v,endDate:j,onChange:C,placeholderText:D["form-components.end"]}))),n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.date-with-time"})),n.a.createElement(F.a,{className:"mb-5",selected:b,onChange:g,placeholderText:D["forms.date"],showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,dateFormat:"LLL",timeCaption:"Time"})))),n.a.createElement(i.a,{xxs:"12",xl:"4",className:"mb-4"},n.a.createElement(s.a,{className:"h-100"},n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.embedded"})),n.a.createElement(F.a,{calendarClassName:"embedded",inline:!0,selected:S,onChange:z})))))}),_=t(897),A=t.n(_);t(898);const T=t(522),H={postUrl:"https://httpbin.org/post"},M={thumbnailHeight:160,maxFilesize:2,previewTemplate:T.renderToStaticMarkup(n.a.createElement("div",{className:"dz-preview dz-file-preview mb-3"},n.a.createElement("div",{className:"d-flex flex-row "},n.a.createElement("div",{className:"p-0 w-30 position-relative"},n.a.createElement("div",{className:"dz-error-mark"},n.a.createElement("span",null,n.a.createElement("i",null)," ")),n.a.createElement("div",{className:"dz-success-mark"},n.a.createElement("span",null,n.a.createElement("i",null))),n.a.createElement("div",{className:"preview-container"},n.a.createElement("img",{"data-dz-thumbnail":!0,className:"img-thumbnail border-0"}),n.a.createElement("i",{className:"simple-icon-doc preview-icon"}))),n.a.createElement("div",{className:"pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"},n.a.createElement("div",null," ",n.a.createElement("span",{"data-dz-name":!0})," "),n.a.createElement("div",{className:"text-primary text-extra-small","data-dz-size":!0}),n.a.createElement("div",{className:"dz-progress"},n.a.createElement("span",{className:"dz-upload","data-dz-uploadprogress":!0})),n.a.createElement("div",{className:"dz-error-message"},n.a.createElement("span",{"data-dz-errormessage":!0})))),n.a.createElement("a",{href:"#/",className:"remove","data-dz-remove":!0}," ",n.a.createElement("i",{className:"glyph-icon simple-icon-trash"})," "))),headers:{"My-Awesome-Header":"header value"}};class I extends l.Component{clear(){this.myDropzone.removeAllFiles(!0)}render(){return n.a.createElement(A.a,{config:H,djsConfig:M,eventHandlers:{init:e=>{this.myDropzone=e}}})}}var L=t(395),B=t.n(L);t(396);var P=Object(O.c)(({intl:e})=>{const a=Object(l.useState)([]),t=Object(h.a)(a,2),c=t[0],s=t[1],r=e.messages;return n.a.createElement(B.a,{value:c,onChange:s,inputProps:{placeholder:r["form-components.tags"]}})}),V=t(655);t(383);var G=()=>{const e=Object(l.useState)(!1),a=Object(h.a)(e,2),t=a[0],u=a[1],d=Object(l.useState)(!0),E=Object(h.a)(d,2),p=E[0],b=E[1],g=Object(l.useState)(!0),x=Object(h.a)(g,2),f=x[0],v=x[1],k=Object(l.useState)(!1),O=Object(h.a)(k,2),N=O[0],j=O[1],C=Object(l.useState)(!1),w=Object(h.a)(C,2),y=w[0],S=w[1],z=Object(l.useState)(!0),D=Object(h.a)(z,2),F=D[0],R=D[1],_=Object(l.useState)(!0),A=Object(h.a)(_,2),T=A[0],H=A[1],M=Object(l.useState)(!1),I=Object(h.a)(M,2),L=I[0],B=I[1];return n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.switch"})),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.primary"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-primary",checked:t,onChange:e=>u(e)})),n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.secondary"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-secondary",checked:p,onChange:e=>b(e)}))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.primary-inverse"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-primary-inverse",checked:f,onChange:e=>v(e)})),n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.secondary-inverse"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-secondary-inverse",checked:N,onChange:e=>j(e)}))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.primary"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-primary custom-switch-small",checked:y,onChange:e=>S(e)})),n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.secondary"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-secondary custom-switch-small",checked:F,onChange:e=>R(e)}))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.primary-inverse"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-primary-inverse custom-switch-small",checked:T,onChange:e=>H(e)})),n.a.createElement(i.a,{xxs:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.secondary-inverse"})),n.a.createElement(V.a,{className:"custom-switch custom-switch-secondary-inverse custom-switch-small",checked:L,onChange:e=>B(e)})))))},q=t(45),J=t(1053);t(721);const U=e=>{let a=e.value,t=(e.dragging,e.index),l=e.offset,c=Object(q.a)(e,["value","dragging","index","offset"]);const s={position:"absolute",left:"".concat(l,"%")};return n.a.createElement("span",{key:t},n.a.createElement("div",{className:"rc-slider-tooltip",style:s},"$".concat(a)),n.a.createElement(J.b.Handle,Object.assign({value:a,offset:l},c)))},$=e=>n.a.createElement(J.b,Object.assign({handle:e.handle||U},e)),K=e=>n.a.createElement(J.a,Object.assign({handle:e.handle||U},e));var Q=()=>n.a.createElement(c.a,null,n.a.createElement(i.a,{xxs:"12",sm:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.double-slider"})),n.a.createElement(K,{min:500,max:1500,className:"mb-5",defaultValue:[800,1200],allowCross:!1,pushable:100})),n.a.createElement(i.a,{xxs:"12",sm:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.single-slider"})),n.a.createElement($,{min:0,max:2500,defaultValue:1e3,className:"mb-5",step:500}))),W=t(222);var X=()=>n.a.createElement(c.a,null,n.a.createElement(i.a,{xxs:"12",sm:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.interactive"})),n.a.createElement(W.a,{total:5,rating:0,onRate:e=>{}})),n.a.createElement(i.a,{xxs:"12",sm:"6"},n.a.createElement("label",null,n.a.createElement(o.a,{id:"form-components.readonly"})),n.a.createElement(W.a,{total:5,rating:5,interactive:!1})));a.default=({match:e})=>{const a=Object(l.useRef)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(i.a,{xxs:"12"},n.a.createElement(u.a,{heading:"menu.form-components",match:e}),n.a.createElement(i.b,{className:"mb-5"}))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.custom-inputs"})),n.a.createElement(g,null))))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.react-select"})),n.a.createElement(k,null))))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.react-autosuggest"})),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12",sm:"6"},n.a.createElement(z,null))))))),n.a.createElement(R,null),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.dropzone"})),n.a.createElement(I,{ref:a}))))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.tags"})),n.a.createElement(P,null))))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(G,null))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.slider"})),n.a.createElement(Q,null))))),n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(i.a,{xxs:"12"},n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{id:"form-components.rating"})),n.a.createElement(X,null))))))}},106:function(e,a,t){"use strict";var l=t(5),n=t.n(l),c=t(112),s=t(113),r=t(77),m=t(101),o=t(8);const i=e=>"/"+e===o.a?n.a.createElement(m.a,{id:"menu.home"}):n.a.createElement(m.a,{id:"menu.".concat(e)}),u=(e,a,t)=>e.split(a)[0]+a,d=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,l)=>n.a.createElement(s.a,{key:l,active:t.length===l+1},t.length!==l+1?n.a.createElement(r.b,{to:"/".concat(u(a,e))},i(e)):i(e)))))};a.a=({heading:e,match:a})=>n.a.createElement(n.a.Fragment,null,e&&n.a.createElement("h1",null,n.a.createElement(m.a,{id:e})),n.a.createElement(d,{match:a}))},129:function(e,a,t){"use strict";var l=t(0),n=t(5),c=t.n(n),s=t(459);a.a=e=>{const a=Object(l.a)({},e);return delete a.autoCorrect,delete a.autoCapitalize,c.a.createElement(s.z.Input,a)}},222:function(e,a,t){"use strict";var l=t(0),n=t(5),c=t.n(n),s=t(245),r=t.n(s);t(223);const m=e=>{const a=Object(l.a)({},e),t={isDisabled:"is-disabled",isActive:"is-active",isActiveHalf:"is-active-half",willBeActive:"will-be-active"},n=Object.keys(t).filter(t=>(delete a[t],e[t])).map(e=>t[e]).join(" ");return c.a.createElement("div",Object.assign({className:"react-rater-star ".concat(n)},a))};m.defaultProps={willBeActive:!1,isActive:!1,isActiveHalf:!1,isDisabled:!1},a.a=e=>c.a.createElement(r.a,e,c.a.createElement(m,null))},243:function(e,a,t){"use strict";var l=t(8);const n=[{title:"Marble Cake",link:"".concat(l.a,"/pages/product/details")},{title:"Fruitcake",link:"".concat(l.a,"/pages/product/details")},{title:"Chocolate Cake",link:"".concat(l.a,"/pages/product/details")},{title:"Fat Rascal",link:"".concat(l.a,"/pages/product/details")},{title:"Financier",link:"".concat(l.a,"/pages/product/details")},{title:"Genoise",link:"".concat(l.a,"/pages/product/details")},{title:"Gingerbread",link:"".concat(l.a,"/pages/product/details")},{title:"Goose Breast",link:"".concat(l.a,"/pages/product/details")},{title:"Parkin",link:"".concat(l.a,"/pages/product/details")},{title:"Salzburger Nockerl",link:"".concat(l.a,"/pages/product/details")},{title:"Souffl\xe9",link:"".concat(l.a,"/pages/product/details")},{title:"Merveilleux",link:"".concat(l.a,"/pages/product/details")},{title:"Streuselkuchen",link:"".concat(l.a,"/pages/product/details")},{title:"Tea Loaf",link:"".concat(l.a,"/pages/product/details")},{title:"Napoleonshat",link:"".concat(l.a,"/pages/product/details")},{title:"Merveilleux",link:"".concat(l.a,"/pages/product/details")},{title:"Magdalena",link:"".concat(l.a,"/pages/product/details")},{title:"Cremeschnitte",link:"".concat(l.a,"/pages/product/details")},{title:"Cheesecake",link:"".concat(l.a,"/pages/product/details")},{title:"Bebinca",link:"".concat(l.a,"/pages/product/details")},{title:"Salzburger Nockerl",link:"".concat(l.a,"/pages/product/details")},{title:"Souffl\xe9",link:"".concat(l.a,"/pages/product/details")},{title:"Merveilleux",link:"".concat(l.a,"/pages/product/details")},{title:"Streuselkuchen",link:"".concat(l.a,"/pages/product/details")}];a.a=n}}]);