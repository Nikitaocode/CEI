(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[69],{106:function(e,a,t){"use strict";var c=t(5),l=t.n(c),n=t(112),m=t(113),s=t(77),r=t(101),i=t(8);const o=e=>"/"+e===i.a?l.a.createElement(r.a,{id:"menu.home"}):l.a.createElement(r.a,{id:"menu.".concat(e)}),d=(e,a,t)=>e.split(a)[0]+a,u=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,c)=>l.a.createElement(m.a,{key:c,active:t.length===c+1},t.length!==c+1?l.a.createElement(s.b,{to:"/".concat(d(a,e))},o(e)):o(e)))))};a.a=({heading:e,match:a})=>l.a.createElement(l.a.Fragment,null,e&&l.a.createElement("h1",null,l.a.createElement(r.a,{id:e})),l.a.createElement(u,{match:a}))},129:function(e,a,t){"use strict";var c=t(0),l=t(5),n=t.n(l),m=t(459);a.a=e=>{const a=Object(c.a)({},e);return delete a.autoCorrect,delete a.autoCapitalize,n.a.createElement(m.z.Input,a)}},200:function(e,a,t){"use strict";var c=t(5),l=t.n(c),n=t(440),m=t(441),s=t(689),r=t(104);a.a=({totalPage:e=0,currentPage:a=1,numberLimit:t=5,lastIsActive:c=!0,firstIsActive:i=!0,onChangePage:o})=>{let d=1,u=t;t>e?(d=1,u=e):a<=parseInt(t/2,10)?(d=1,u=t):a+parseInt(t/2,10)<=e?(d=a-parseInt(t/2,10),u=a+parseInt(t/2,10)):(d=e-(t-1),u=e),d=0===d?1:d;const p=[];for(let l=d;l<=u;l+=1)p.push(l);const E=a<=1?"disabled":"",g=a>=e?"disabled":"",b=a<=1?"disabled":"",h=a>=e?"disabled":"";return e>1?l.a.createElement(r.a,{xxs:"12",className:"mt-3 mb-3"},l.a.createElement(n.a,{className:"pagination justify-content-center"},i&&l.a.createElement(m.a,{className:"page-item ".concat(E)},l.a.createElement(s.a,{className:"page-link first c-pointer",onClick:()=>o(1)},l.a.createElement("i",{className:"simple-icon-control-start"}))),l.a.createElement(m.a,{className:"page-item ".concat(b)},l.a.createElement(s.a,{className:"page-link prev c-pointer",onClick:()=>o(a-1)},l.a.createElement("i",{className:"simple-icon-arrow-left"}))),p.map(e=>l.a.createElement(m.a,{key:e,className:"page-item ".concat(a===e&&"active")},l.a.createElement(s.a,{className:"page-link c-pointer",onClick:()=>o(e)},e))),l.a.createElement(m.a,{className:"page-item ".concat(h)},l.a.createElement(s.a,{className:"page-link next c-pointer",onClick:()=>o(a+1)},l.a.createElement("i",{className:"simple-icon-arrow-right"}))),c&&l.a.createElement(m.a,{className:"page-item ".concat(g)},l.a.createElement(s.a,{className:"page-link last c-pointer",onClick:()=>o(e)},l.a.createElement("i",{className:"simple-icon-control-end"}))))):l.a.createElement(r.a,{xxs:"12",className:"mt-2"})}},247:function(e,a,t){"use strict";var c=t(103),l=t(5),n=t.n(l),m=t(233),s=t(217),r=t(186),i=t(661),o=t(677),d=t(679),u=t(696),p=t(383),E=t(676),g=t(231),b=t(104),h=t(106),k=t(101),N=t(369);a.a=Object(g.c)(({intl:e,displayMode:a,changeDisplayMode:t,handleChangeSelectAll:g,changeOrderBy:f,changePageSize:x,selectedPageSize:C,totalItemCount:y,selectedOrderOption:O,match:v,startIndex:w,endIndex:j,selectedItemsLength:S,itemsLength:I,onSearchKey:M,orderOptions:P,pageSizes:z,toggleModal:D,heading:A})=>{const L=Object(l.useState)(!1),_=Object(c.a)(L,2),R=_[0],K=_[1],B=Object(l.useState)(!1),F=Object(c.a)(B,2),J=F[0],T=F[1],H=e.messages;return n.a.createElement(m.a,null,n.a.createElement(b.a,{xxs:"12"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h1",null,n.a.createElement(k.a,{id:A})),n.a.createElement("div",{className:"text-zero top-right-button-container"},n.a.createElement(s.a,{color:"primary",size:"lg",className:"top-right-button",onClick:()=>D()},n.a.createElement(k.a,{id:"pages.add-new"})),"  ",n.a.createElement(r.a,{isOpen:R,toggle:()=>K(!R)},n.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},n.a.createElement(i.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:S>=I,onChange:()=>g(!0),label:n.a.createElement("span",{className:"custom-control-label ".concat(S>0&&S<I?"indeterminate":"")})})),n.a.createElement(o.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),n.a.createElement(d.a,{right:!0},n.a.createElement(u.a,null,n.a.createElement(k.a,{id:"pages.delete"})),n.a.createElement(u.a,null,n.a.createElement(k.a,{id:"pages.another-action"}))))),n.a.createElement(h.a,{match:v})),n.a.createElement("div",{className:"mb-2"},n.a.createElement(s.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:()=>T(!J)},n.a.createElement(k.a,{id:"pages.display-options"})," ",n.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),n.a.createElement(p.a,{isOpen:J,className:"d-md-block",id:"displayOptions"},n.a.createElement("span",{className:"mr-3 d-inline-block float-md-left"},n.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("list"===a?"active":""),onClick:()=>t("list")},n.a.createElement(N.a,null)),n.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("thumblist"===a?"active":""),onClick:()=>t("thumblist")},n.a.createElement(N.e,null)),n.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("imagelist"===a?"active":""),onClick:()=>t("imagelist")},n.a.createElement(N.b,null))),n.a.createElement("div",{className:"d-block d-md-inline-block pt-1"},n.a.createElement(E.a,{className:"mr-1 float-md-left btn-group mb-1"},n.a.createElement(o.a,{caret:!0,color:"outline-dark",size:"xs"},n.a.createElement(k.a,{id:"pages.orderby"}),O.label),n.a.createElement(d.a,null,P.map((e,a)=>n.a.createElement(u.a,{key:a,onClick:()=>f(e.column)},e.label)))),n.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},n.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:H["menu.search"],onKeyPress:e=>M(e)}))),n.a.createElement("div",{className:"float-md-right pt-1"},n.a.createElement("span",{className:"text-muted text-small mr-1"},"".concat(w,"-").concat(j," of ").concat(y," ")),n.a.createElement(E.a,{className:"d-inline-block"},n.a.createElement(o.a,{caret:!0,color:"outline-dark",size:"xs"},C),n.a.createElement(d.a,{right:!0},z.map((e,a)=>n.a.createElement(u.a,{key:a,onClick:()=>x(e)},e))))))),n.a.createElement(b.b,{className:"mb-5"})))})},248:function(e,a,t){"use strict";var c=t(5),l=t.n(c),n=t(287),m=t(249),s=t(250),r=t(660),i=t(446),o=t(661),d=t(251),u=t(217),p=t(126),E=t(129),g=t(101);a.a=({modalOpen:e,toggleModal:a,categories:t})=>l.a.createElement(n.a,{isOpen:e,toggle:a,wrapClassName:"modal-right",backdrop:"static"},l.a.createElement(m.a,{toggle:a},l.a.createElement(g.a,{id:"pages.add-new-modal-title"})),l.a.createElement(s.a,null,l.a.createElement(r.a,null,l.a.createElement(g.a,{id:"pages.product-name"})),l.a.createElement(i.a,null),l.a.createElement(r.a,{className:"mt-4"},l.a.createElement(g.a,{id:"pages.category"})),l.a.createElement(p.a,{components:{Input:E.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:t}),l.a.createElement(r.a,{className:"mt-4"},l.a.createElement(g.a,{id:"pages.description"})),l.a.createElement(i.a,{type:"textarea",name:"text",id:"exampleText"}),l.a.createElement(r.a,{className:"mt-4"},l.a.createElement(g.a,{id:"pages.status"})),l.a.createElement(o.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"ON HOLD"}),l.a.createElement(o.a,{type:"radio",id:"exCustomRadio2",name:"customRadio",label:"PROCESSED"})),l.a.createElement(d.a,null,l.a.createElement(u.a,{color:"secondary",outline:!0,onClick:a},l.a.createElement(g.a,{id:"pages.cancel"})),l.a.createElement(u.a,{color:"primary",onClick:a},l.a.createElement(g.a,{id:"pages.submit"}))," "))},253:function(e,a,t){"use strict";var c=t(236),l=t.n(c),n=t(5);a.a=(e,a)=>{const t=Object(n.useRef)(null);t.current=a,Object(n.useEffect)(()=>(l.a.bind(e,(e,a)=>{"function"===typeof t.current&&t.current(e,a),e.preventDefault()}),()=>{l.a.unbind(e)}),[e])}},283:function(e,a,t){"use strict";var c=t(5),l=t.n(c),n=t(233),m=t(200),s=t(138);var r=({onContextMenu:e,onContextMenuClick:a})=>l.a.createElement(s.a,{id:"menu_id",onShow:a=>e(a,a.detail.data)},l.a.createElement(s.c,{onClick:a,data:{action:"copy"}},l.a.createElement("i",{className:"simple-icon-docs"})," ",l.a.createElement("span",null,"Copy")),l.a.createElement(s.c,{onClick:a,data:{action:"move"}},l.a.createElement("i",{className:"simple-icon-drawer"})," ",l.a.createElement("span",null,"Move to archive")),l.a.createElement(s.c,{onClick:a,data:{action:"delete"}},l.a.createElement("i",{className:"simple-icon-trash"})," ",l.a.createElement("span",null,"Delete"))),i=t(110),o=t(661),d=t(77),u=t(98),p=t.n(u),E=t(104),g=t(370);var b=l.a.memo(({product:e,isSelect:a,collect:t,onCheckItem:c})=>l.a.createElement(E.a,{xxs:"12",className:"mb-3"},l.a.createElement(s.b,{id:"menu_id",data:e.id,collect:t},l.a.createElement(i.a,{onClick:a=>c(a,e.id),className:p()("d-flex flex-row",{active:a})},l.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},l.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},l.a.createElement(o.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:a=>c(a,e.id),label:""})),l.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},l.a.createElement(d.b,{to:"?p=".concat(e.id),className:"w-15 w-sm-100"},l.a.createElement("p",{style:{textTransform:"capitalize"},className:"list-item-heading mb-1 truncate"},e.firstName)),l.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100 list-item-heading"}," ",e.lastName),l.a.createElement("p",{className:"mb-1 text-muted text-small w-20 w-sm-100 list-item-heading"}," ",e.email),l.a.createElement(g.a,{onClick:e=>{e.preventDefault(),console.log("hi")},style:{cursor:"pointer"},className:"mb-1 w-2 w-sm-100 list-item-heading "}),l.a.createElement(g.b,{style:{cursor:"pointer"},className:"mb-1 w-2 w-sm-100 list-item-heading"}),l.a.createElement(g.c,{style:{cursor:"pointer"},className:"mb-1 w-2 w-sm-100 list-item-heading"}))))))),h=t(300),k=t(146),N=t(114),f=t(175),x=t(252);var C=l.a.memo(({product:e,isSelect:a,collect:t,onCheckItem:c})=>l.a.createElement(E.a,{sm:"6",lg:"4",xl:"3",className:"mb-3",key:e.id},l.a.createElement(s.b,{id:"menu_id",data:e.id,collect:t},l.a.createElement(i.a,{onClick:a=>c(a,e.id),className:p()({active:a})},l.a.createElement("div",{className:"position-relative"},l.a.createElement(d.b,{to:"?p=".concat(e.id),className:"w-40 w-sm-100"},l.a.createElement(h.a,{top:!0,alt:e.title,src:e.img})),l.a.createElement(k.a,{color:e.statusColor,pill:!0,className:"position-absolute badge-top-left"},e.status)),l.a.createElement(N.a,null,l.a.createElement(n.a,null,l.a.createElement(E.a,{xxs:"2"},l.a.createElement(o.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:()=>{},label:""})),l.a.createElement(E.a,{xxs:"10",className:"mb-3"},l.a.createElement(f.a,null,e.title),l.a.createElement(x.a,{className:"text-muted text-small mb-0 font-weight-light"},e.date))))))));var y=l.a.memo(({product:e,isSelect:a,collect:t,onCheckItem:c})=>l.a.createElement(E.a,{xxs:"12",key:e.id,className:"mb-3"},l.a.createElement(s.b,{id:"menu_id",data:e.id,collect:t},l.a.createElement(i.a,{onClick:a=>c(a,e.id),className:p()("d-flex flex-row",{active:a})},l.a.createElement(d.b,{to:"?p=".concat(e.id),className:"d-flex"},l.a.createElement("img",{alt:e.title,src:e.img,className:"list-thumbnail responsive border-0 card-img-left"})),l.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},l.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},l.a.createElement(d.b,{to:"?p=".concat(e.id),className:"w-40 w-sm-100"},l.a.createElement("p",{className:"list-item-heading mb-1 truncate"},e.title)),l.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.category),l.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.date),l.a.createElement("div",{className:"w-15 w-sm-100"},l.a.createElement(k.a,{color:e.statusColor,pill:!0},e.status))),l.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},l.a.createElement(o.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:()=>{},label:""})))))));function O(e){return{data:e.data}}a.a=l.a.memo(({items:e,displayMode:a,selectedItems:t,onCheckItem:c,currentPage:s,totalPage:i,onContextMenuClick:o,onContextMenu:d,onChangePage:u})=>l.a.createElement(n.a,null,e.map(e=>"imagelist"===a?l.a.createElement(C,{key:e.id,product:e,isSelect:t.includes(e.id),collect:O,onCheckItem:c}):"thumblist"===a?l.a.createElement(y,{key:e.id,product:e,isSelect:t.includes(e.id),collect:O,onCheckItem:c}):l.a.createElement(b,{key:e.id,product:e,isSelect:t.includes(e.id),onCheckItem:c,collect:O})),l.a.createElement(m.a,{currentPage:s,totalPage:i,onChangePage:e=>u(e)}),l.a.createElement(r,{onContextMenuClick:o,onContextMenu:d})))},837:function(e,a,t){"use strict";t.r(a);var c=t(3),l=t.n(c),n=t(0),m=t(12),s=t(103),r=t(5),i=t.n(r),o=t(163),d=t.n(o),u=t(8),p=t(247),E=t(248),g=t(283),b=t(253);const h=(e,a,t)=>{for(let c=0;c<a.length;c+=1)if(a[c][t]===e)return c;return-1},k="".concat(u.p,"/cakes/paging"),N=[{column:"title",label:"Product Name"},{column:"category",label:"Category"},{column:"status",label:"Status"}],f=[4,8,12,20],x=[{label:"Cakes",value:"Cakes",key:0},{label:"Cupcakes",value:"Cupcakes",key:1},{label:"Desserts",value:"Desserts",key:2}];a.default=({match:e})=>{const a=Object(r.useState)(!1),t=Object(s.a)(a,2),c=t[0],o=t[1],u=Object(r.useState)("list"),C=Object(s.a)(u,2),y=C[0],O=C[1],v=Object(r.useState)(1),w=Object(s.a)(v,2),j=w[0],S=w[1],I=Object(r.useState)(8),M=Object(s.a)(I,2),P=M[0],z=M[1],D=Object(r.useState)({column:"title",label:"Product Name"}),A=Object(s.a)(D,2),L=A[0],_=A[1],R=Object(r.useState)(!1),K=Object(s.a)(R,2),B=K[0],F=K[1],J=Object(r.useState)(0),T=Object(s.a)(J,2),H=T[0],q=T[1],G=Object(r.useState)(1),Q=Object(s.a)(G,2),U=Q[0],V=Q[1],W=Object(r.useState)(""),X=Object(s.a)(W,2),Y=X[0],Z=X[1],$=Object(r.useState)([]),ee=Object(s.a)($,2),ae=ee[0],te=ee[1],ce=Object(r.useState)([]),le=Object(s.a)(ce,2),ne=le[0],me=le[1],se=Object(r.useState)(null),re=Object(s.a)(se,2),ie=re[0],oe=re[1];Object(r.useEffect)(()=>{S(1)},[P,L]),Object(r.useEffect)(()=>{function e(){return(e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.get("".concat(k,"?pageSize=").concat(P,"&currentPage=").concat(j,"&orderBy=").concat(L.column,"&search=").concat(Y)).then(e=>e.data).then(e=>{V(e.totalPage),me(e.data.map(e=>Object(n.a)(Object(n.a)({},e),{},{img:e.img.replace("img/","img/products/")}))),te([]),q(e.totalItem),o(!0)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[P,j,L,Y]);const de=e=>(ae.length>=ne.length?e&&te([]):te(ne.map(e=>e.id)),document.activeElement.blur(),!1);Object(b.a)(["ctrl+a","command+a"],()=>{de(!1)}),Object(b.a)(["ctrl+d","command+d"],()=>(te([]),!1));const ue=(j-1)*P,pe=j*P;return c?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"disable-text-selection"},i.a.createElement(p.a,{heading:"menu.data-list",displayMode:y,changeDisplayMode:O,handleChangeSelectAll:de,changeOrderBy:e=>{_(N.find(a=>a.column===e))},changePageSize:z,selectedPageSize:P,totalItemCount:H,selectedOrderOption:L,match:e,startIndex:ue,endIndex:pe,selectedItemsLength:ae?ae.length:0,itemsLength:ne?ne.length:0,onSearchKey:e=>{"Enter"===e.key&&Z(e.target.value.toLowerCase())},orderOptions:N,pageSizes:f,toggleModal:()=>F(!B)}),i.a.createElement(E.a,{modalOpen:B,toggleModal:()=>F(!B),categories:x}),i.a.createElement(g.a,{items:ne,displayMode:y,selectedItems:ae,onCheckItem:(e,a)=>{if("A"===e.target.tagName||e.target.parentElement&&"A"===e.target.parentElement.tagName)return!0;null===ie&&oe(a);let t=[...ae];if(t.includes(a)?t=t.filter(e=>e!==a):t.push(a),te(t),e.shiftKey){let e=[...ne];const c=h(a,e,"id"),l=h(ie,e,"id");e=e.slice(Math.min(c,l),Math.max(c,l)+1),ae.push(...e.map(e=>e.id)),t=Array.from(new Set(ae)),te(t)}return document.activeElement.blur(),!1},currentPage:j,totalPage:U,onContextMenuClick:(e,a)=>{console.log("onContextMenuClick - selected items",ae),console.log("onContextMenuClick - action : ",a.action)},onContextMenu:(e,a)=>{const t=a.data;return ae.includes(t)||te([t]),!0},onChangePage:S}))):i.a.createElement("div",{className:"loading"})}}}]);