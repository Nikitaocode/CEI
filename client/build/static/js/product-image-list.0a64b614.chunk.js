(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[72],{106:function(e,a,t){"use strict";var l=t(5),c=t.n(l),n=t(112),m=t(113),r=t(77),s=t(101),o=t(8);const i=e=>"/"+e===o.a?c.a.createElement(s.a,{id:"menu.home"}):c.a.createElement(s.a,{id:"menu.".concat(e)}),d=(e,a,t)=>e.split(a)[0]+a,u=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,l)=>c.a.createElement(m.a,{key:l,active:t.length===l+1},t.length!==l+1?c.a.createElement(r.b,{to:"/".concat(d(a,e))},i(e)):i(e)))))};a.a=({heading:e,match:a})=>c.a.createElement(c.a.Fragment,null,e&&c.a.createElement("h1",null,c.a.createElement(s.a,{id:e})),c.a.createElement(u,{match:a}))},130:function(e,a,t){"use strict";var l=t(0),c=t(5),n=t.n(c),m=t(458);a.a=e=>{const a=Object(l.a)({},e);return delete a.autoCorrect,delete a.autoCapitalize,n.a.createElement(m.z.Input,a)}},201:function(e,a,t){"use strict";var l=t(5),c=t.n(l),n=t(439),m=t(440),r=t(688),s=t(104);a.a=({totalPage:e=0,currentPage:a=1,numberLimit:t=5,lastIsActive:l=!0,firstIsActive:o=!0,onChangePage:i})=>{let d=1,u=t;t>e?(d=1,u=e):a<=parseInt(t/2,10)?(d=1,u=t):a+parseInt(t/2,10)<=e?(d=a-parseInt(t/2,10),u=a+parseInt(t/2,10)):(d=e-(t-1),u=e),d=0===d?1:d;const E=[];for(let c=d;c<=u;c+=1)E.push(c);const g=a<=1?"disabled":"",p=a>=e?"disabled":"",b=a<=1?"disabled":"",h=a>=e?"disabled":"";return e>1?c.a.createElement(s.a,{xxs:"12",className:"mt-3 mb-3"},c.a.createElement(n.a,{className:"pagination justify-content-center"},o&&c.a.createElement(m.a,{className:"page-item ".concat(g)},c.a.createElement(r.a,{className:"page-link first c-pointer",onClick:()=>i(1)},c.a.createElement("i",{className:"simple-icon-control-start"}))),c.a.createElement(m.a,{className:"page-item ".concat(b)},c.a.createElement(r.a,{className:"page-link prev c-pointer",onClick:()=>i(a-1)},c.a.createElement("i",{className:"simple-icon-arrow-left"}))),E.map(e=>c.a.createElement(m.a,{key:e,className:"page-item ".concat(a===e&&"active")},c.a.createElement(r.a,{className:"page-link c-pointer",onClick:()=>i(e)},e))),c.a.createElement(m.a,{className:"page-item ".concat(h)},c.a.createElement(r.a,{className:"page-link next c-pointer",onClick:()=>i(a+1)},c.a.createElement("i",{className:"simple-icon-arrow-right"}))),l&&c.a.createElement(m.a,{className:"page-item ".concat(p)},c.a.createElement(r.a,{className:"page-link last c-pointer",onClick:()=>i(e)},c.a.createElement("i",{className:"simple-icon-control-end"}))))):c.a.createElement(s.a,{xxs:"12",className:"mt-2"})}},247:function(e,a,t){"use strict";var l=t(103),c=t(5),n=t.n(c),m=t(233),r=t(218),s=t(187),o=t(660),i=t(676),d=t(678),u=t(695),E=t(385),g=t(675),p=t(231),b=t(104),h=t(106),N=t(101),k=t(288),C=t(248),O=t(249),f=t(250),x=t(122),j=t.n(x);t(370);a.a=Object(p.c)(({intl:e,displayMode:a,changeDisplayMode:t,handleChangeSelectAll:p,changeOrderBy:x,changePageSize:v,selectedPageSize:y,totalItemCount:w,selectedOrderOption:S,match:I,startIndex:P,endIndex:M,selectedItemsLength:z,itemsLength:A,onSearchKey:D,orderOptions:L,pageSizes:F,toggleModal:_,heading:K,selectedItems:V})=>{const B=Object(c.useState)(!1),J=Object(l.a)(B,2),R=J[0],U=J[1],T=Object(c.useState)(!1),q=Object(l.a)(T,2),G=q[0],H=q[1],Q=Object(c.useState)(!1),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=Object(c.useState)(""),$=Object(l.a)(Z,2),ee=($[0],$[1],e.messages);return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(b.a,{xxs:"12"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h1",null,n.a.createElement(N.a,{id:K})),n.a.createElement("div",{className:"text-zero top-right-button-container"},n.a.createElement(r.a,{color:"primary",size:"lg",className:"top-right-button",onClick:()=>_()},n.a.createElement(N.a,{id:"pages.add-new"})),"  ",n.a.createElement(s.a,{isOpen:R,toggle:()=>U(!R)},n.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},n.a.createElement(o.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:z>=A,onChange:()=>p(!0),label:n.a.createElement("span",{className:"custom-control-label ".concat(z>0&&z<A?"indeterminate":"")})})),n.a.createElement(i.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),n.a.createElement(d.a,{right:!0},n.a.createElement(u.a,{onClick:()=>Y(!0)},n.a.createElement("span",null,"Delete")),n.a.createElement(u.a,null,n.a.createElement(N.a,{id:"pages.another-action"}))))),n.a.createElement(h.a,{match:I})),n.a.createElement("div",{className:"mb-2"},n.a.createElement(r.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:()=>H(!G)},n.a.createElement(N.a,{id:"pages.display-options"})," ",n.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),n.a.createElement(E.a,{isOpen:G,className:"d-md-block",id:"displayOptions"},n.a.createElement("div",{className:"d-block d-md-inline-block pt-1"},n.a.createElement(g.a,{className:"mr-1 float-md-left btn-group mb-1"},n.a.createElement(i.a,{caret:!0,color:"outline-dark",size:"xs"},n.a.createElement(N.a,{id:"pages.orderby"}),"Name"),n.a.createElement(d.a,null,L.map((e,a)=>n.a.createElement(u.a,{key:a,onClick:()=>x(e.column)},e.label)))),n.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},n.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:ee["menu.search"],onKeyPress:e=>D(e)}))),n.a.createElement("div",{className:"float-md-right pt-1"},n.a.createElement("span",{className:"text-muted text-small mr-1"},"".concat(P,"-").concat(M," of ").concat(w," ")),n.a.createElement(g.a,{className:"d-inline-block"},n.a.createElement(i.a,{caret:!0,color:"outline-dark",size:"xs"},y),n.a.createElement(d.a,{right:!0},F.map((e,a)=>n.a.createElement(u.a,{key:a,onClick:()=>v(e)},e))))))),n.a.createElement(b.b,{className:"mb-5"}))),n.a.createElement(k.a,{isOpen:X,toggle:()=>Y(!X)},n.a.createElement(C.a,null,n.a.createElement(N.a,{id:"Delete"})),n.a.createElement(O.a,null,"Are you sure you want to delete user?"),n.a.createElement(f.a,null,n.a.createElement(r.a,{onClick:e=>{console.log("hi"),j.a.post("/api/delete-user",null,{params:{id:V}}).then(e=>{console.log(e.data),Y(!1),window.location.reload()})},color:"primary"},"Confirm")," ",n.a.createElement(r.a,{color:"secondary",onClick:()=>Y(!1)},"Cancel"))))})},251:function(e,a,t){"use strict";var l=t(0),c=t(103),n=t(5),m=t.n(n),r=t(288),s=t(248),o=t(249),i=t(233),d=t(232),u=t(659),E=t(445),g=t(250),p=t(218),b=t(127),h=t(130),N=t(101),k=t(122),C=t.n(k);a.a=({modalOpen:e,toggleModal:a,categories:t})=>{const n=m.a.useState({}),k=Object(c.a)(n,2),O=k[0],f=k[1];return m.a.createElement(r.a,{isOpen:e,toggle:a,wrapClassName:"modal-right",backdrop:"static"},m.a.createElement(s.a,{toggle:a},m.a.createElement(N.a,{id:"Add New User"})),m.a.createElement(o.a,null,m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"sm-6"},m.a.createElement(u.a,null,m.a.createElement(N.a,{id:"First name"})),m.a.createElement(E.a,{onChange:e=>{f(Object(l.a)(Object(l.a)({},O),{},{firstname:e.target.value}))}})),m.a.createElement(d.a,{className:"sm-6"},m.a.createElement(u.a,null,m.a.createElement(N.a,{id:"Last name"})),m.a.createElement(E.a,{onChange:e=>{f(Object(l.a)(Object(l.a)({},O),{},{lastname:e.target.value}))}}))),m.a.createElement(u.a,{className:"mt-4"},m.a.createElement(N.a,{id:"Email"})),m.a.createElement(E.a,{onChange:e=>{f(Object(l.a)(Object(l.a)({},O),{},{email:e.target.value}))}}),m.a.createElement(u.a,{className:"mt-4"},m.a.createElement(N.a,{id:"Phone"})),m.a.createElement(E.a,{name:"text",onChange:e=>{f(Object(l.a)(Object(l.a)({},O),{},{phone:e.target.value}))}}),m.a.createElement(u.a,{className:"mt-4"},m.a.createElement(N.a,{id:"Role"})),m.a.createElement(b.a,{components:{Input:h.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:t,onChange:e=>{f(Object(l.a)(Object(l.a)({},O),{},{role:e.value}))}})),m.a.createElement(g.a,null,m.a.createElement(p.a,{color:"secondary",outline:!0,onClick:a},m.a.createElement(N.a,{id:"pages.cancel"})),m.a.createElement(p.a,{onClick:e=>{e.preventDefault(),C.a.post("/api/new-user",O).then(e=>{e.data.success&&window.location.reload()})},color:"primary"},m.a.createElement(N.a,{id:"Create Account"}))))}},253:function(e,a,t){"use strict";var l=t(236),c=t.n(l),n=t(5);a.a=(e,a)=>{const t=Object(n.useRef)(null);t.current=a,Object(n.useEffect)(()=>(c.a.bind(e,(e,a)=>{"function"===typeof t.current&&t.current(e,a),e.preventDefault()}),()=>{c.a.unbind(e)}),[e])}},283:function(e,a,t){"use strict";var l=t(5),c=t.n(l),n=t(233),m=t(201),r=t(132);var s=({onContextMenu:e,onContextMenuClick:a})=>c.a.createElement(r.a,{id:"menu_id",onShow:a=>e(a,a.detail.data)},c.a.createElement(r.c,{onClick:a,data:{action:"copy"}},c.a.createElement("i",{className:"simple-icon-docs"})," ",c.a.createElement("span",null,"Copy")),c.a.createElement(r.c,{onClick:a,data:{action:"move"}},c.a.createElement("i",{className:"simple-icon-drawer"})," ",c.a.createElement("span",null,"Move to archive")),c.a.createElement(r.c,{onClick:a,data:{action:"delete"}},c.a.createElement("i",{className:"simple-icon-trash"})," ",c.a.createElement("span",null,"Delete"))),o=t(0),i=t(103),d=t(110),u=t(660),E=t(77),g=t(98),p=t.n(g),b=t(164),h=t(104),N=t(284),k=t(101),C=t(122),O=t.n(C),f=t(288),x=t(248),j=t(249),v=t(232),y=t(659),w=t(445),S=t(250),I=t(218);var P=c.a.memo(({product:e,isSelect:a,collect:t,onCheckItem:m})=>{const s=c.a.useState({}),g=Object(i.a)(s,2),C=g[0],P=g[1],M=Object(l.useState)(!1),z=Object(i.a)(M,2),A=z[0],D=z[1],L=Object(l.useState)({}),F=Object(i.a)(L,2),_=F[0],K=F[1],V=Object(l.useState)(""),B=Object(i.a)(V,2),J=B[0],R=B[1],U=Object(l.useState)(!1),T=Object(i.a)(U,2),q=T[0],G=T[1],H={active:{color:"green"},inactive:{color:"red"}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{xxs:"12",className:"mb-3"},c.a.createElement(r.b,{id:"menu_id",data:e.id,collect:t},c.a.createElement(d.a,null,c.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},c.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},c.a.createElement(u.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:a=>m(a,e.id),className:p()("d-flex flex-row",{active:a}),label:""})),c.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},c.a.createElement(E.b,{to:"?p=".concat(e.id),className:"w-15 w-sm-100"},c.a.createElement("p",{style:{textTransform:"capitalize"},className:"list-item-heading mb-1 truncate"},e.firstName)),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100 list-item-heading"}," ",e.lastName),c.a.createElement("p",{className:"mb-1 text-muted text-small w-20 w-sm-100 list-item-heading"}," ",e.email),e.status?c.a.createElement("p",{style:H.active,className:"mb-1 w-10 w-sm-100 list-item-heading truncate"},"Active"):c.a.createElement("p",{style:H.inactive,className:"mb-1 w-10 w-sm-100 list-item-heading truncate"},"Inactive"),c.a.createElement(N.a,{onClick:()=>{return a=e.id,void O.a.get("/api/user-details",{params:{id:a}}).then(e=>{console.log(e.data.data),K(e.data.data),console.log(_),G(!0)});var a},style:{cursor:"pointer"},id:e.id,className:"mb-1 w-2 w-sm-100 list-item-heading "}),c.a.createElement(N.b,{onClick:()=>{return a=e.id,R(a),void D(!0);var a},value:e.id,style:{cursor:"pointer"},className:"mb-1 w-2 w-sm-100 list-item-heading"})))))),c.a.createElement(f.a,{isOpen:q,toggle:()=>G(!q)},c.a.createElement(x.a,null,c.a.createElement(k.a,{id:"Edit"})),c.a.createElement(j.a,null,c.a.createElement(n.a,null,c.a.createElement(v.a,{className:"sm-6"},c.a.createElement(y.a,null,c.a.createElement(k.a,{id:"First name"})),c.a.createElement(w.a,{defaultValue:_.firstName,onChange:e=>{P(Object(o.a)(Object(o.a)({},C),{},{firstName:e.target.value.toLowerCase()}))}})),c.a.createElement(v.a,{className:"sm-6"},c.a.createElement(y.a,null,c.a.createElement(k.a,{id:"Last name"})),c.a.createElement(w.a,{defaultValue:_.lastName,onChange:e=>{P(Object(o.a)(Object(o.a)({},C),{},{lastName:e.target.value.toLowerCase()}))}}))),c.a.createElement(y.a,{className:"mt-4"},c.a.createElement(k.a,{id:"Email"})),c.a.createElement(w.a,{defaultValue:_.email,onChange:e=>{P(Object(o.a)(Object(o.a)({},C),{},{email:e.target.value}))}}),c.a.createElement(y.a,{className:"mt-4"},c.a.createElement(k.a,{id:"Phone"})),c.a.createElement(w.a,{defaultValue:_.phone,name:"text",onChange:e=>{P(Object(o.a)(Object(o.a)({},C),{},{phone:e.target.value}))}})),c.a.createElement(S.a,null,c.a.createElement(I.a,{onClick:()=>{return e=_.id,console.log(e),void O.a.post("/api/edit-user",C,{params:{id:e}}).then(e=>{console.log(e),e.data.success&&(G(!1),b.b.success(e.data.success,"Success",3e3,null,null,""),window.location.reload())});var e},color:"primary"},"Save Changes")," ",c.a.createElement(I.a,{color:"secondary",onClick:()=>G(!1)},"Cancel"))),c.a.createElement(f.a,{isOpen:A,toggle:()=>G(!A)},c.a.createElement(x.a,null,c.a.createElement(k.a,{id:"Delete"})),c.a.createElement(j.a,null,"Are you sure you want to delete user?"),c.a.createElement(S.a,null,c.a.createElement(I.a,{onClick:e=>{O.a.post("/api/delete-user",null,{params:{id:J}}).then(e=>{console.log(e),D(!1),window.location.reload()})},color:"primary"},"Confirm")," ",c.a.createElement(I.a,{color:"secondary",onClick:()=>D(!1)},"Cancel"))))}),M=t(301),z=t(147),A=t(114),D=t(176),L=t(252);var F=c.a.memo(({product:e,isSelect:a,collect:t,onCheckItem:l})=>c.a.createElement(h.a,{sm:"6",lg:"4",xl:"3",className:"mb-3",key:e.id},c.a.createElement(r.b,{id:"menu_id",data:e.id,collect:t},c.a.createElement(d.a,{onClick:a=>l(a,e.id),className:p()({active:a})},c.a.createElement("div",{className:"position-relative"},c.a.createElement(E.b,{to:"?p=".concat(e.id),className:"w-40 w-sm-100"},c.a.createElement(M.a,{top:!0,alt:e.title,src:e.img})),c.a.createElement(z.a,{color:e.statusColor,pill:!0,className:"position-absolute badge-top-left"},e.status)),c.a.createElement(A.a,null,c.a.createElement(n.a,null,c.a.createElement(h.a,{xxs:"2"},c.a.createElement(u.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:()=>{},label:""})),c.a.createElement(h.a,{xxs:"10",className:"mb-3"},c.a.createElement(D.a,null,e.title),c.a.createElement(L.a,{className:"text-muted text-small mb-0 font-weight-light"},e.date))))))));var _=c.a.memo(({product:e,isSelect:a,collect:t,onCheckItem:l})=>c.a.createElement(h.a,{xxs:"12",key:e.id,className:"mb-3"},c.a.createElement(r.b,{id:"menu_id",data:e.id,collect:t},c.a.createElement(d.a,{onClick:a=>l(a,e.id),className:p()("d-flex flex-row",{active:a})},c.a.createElement(E.b,{to:"?p=".concat(e.id),className:"d-flex"},c.a.createElement("img",{alt:e.title,src:e.img,className:"list-thumbnail responsive border-0 card-img-left"})),c.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},c.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},c.a.createElement(E.b,{to:"?p=".concat(e.id),className:"w-40 w-sm-100"},c.a.createElement("p",{className:"list-item-heading mb-1 truncate"},e.title)),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.category),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.date),c.a.createElement("div",{className:"w-15 w-sm-100"},c.a.createElement(z.a,{color:e.statusColor,pill:!0},e.status))),c.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},c.a.createElement(u.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:()=>{},label:""})))))));function K(e){return{data:e.data}}a.a=c.a.memo(({items:e,displayMode:a,selectedItems:t,onCheckItem:l,currentPage:r,totalPage:o,onContextMenuClick:i,onContextMenu:d,onChangePage:u,deleteUser:E})=>c.a.createElement(n.a,null,e.map(e=>"imagelist"===a?c.a.createElement(F,{key:e.id,product:e,isSelect:t.includes(e.id),collect:K,onCheckItem:l}):"thumblist"===a?c.a.createElement(_,{key:e.id,product:e,isSelect:t.includes(e.id),collect:K,onCheckItem:l}):c.a.createElement(P,{key:e.id,product:e,isSelect:t.includes(e.id),onCheckItem:l,collect:K})),c.a.createElement(m.a,{currentPage:r,totalPage:o,onChangePage:e=>u(e)}),c.a.createElement(s,{onContextMenuClick:i,onContextMenu:d})))},836:function(e,a,t){"use strict";t.r(a);var l=t(3),c=t.n(l),n=t(0),m=t(12),r=t(103),s=t(5),o=t.n(s),i=t(122),d=t.n(i),u=t(8),E=t(247),g=t(251),p=t(283),b=t(253);const h=(e,a,t)=>{for(let l=0;l<a.length;l+=1)if(a[l][t]===e)return l;return-1},N="".concat(u.p,"/cakes/paging"),k=[{column:"title",label:"Product Name"},{column:"category",label:"Category"},{column:"status",label:"Status"}],C=[4,8,12,20],O=[{label:"Cakes",value:"Cakes",key:0},{label:"Cupcakes",value:"Cupcakes",key:1},{label:"Desserts",value:"Desserts",key:2}];a.default=({match:e})=>{const a=Object(s.useState)(!1),t=Object(r.a)(a,2),l=t[0],i=t[1],u=Object(s.useState)("imagelist"),f=Object(r.a)(u,2),x=f[0],j=f[1],v=Object(s.useState)(1),y=Object(r.a)(v,2),w=y[0],S=y[1],I=Object(s.useState)(8),P=Object(r.a)(I,2),M=P[0],z=P[1],A=Object(s.useState)({column:"title",label:"Product Name"}),D=Object(r.a)(A,2),L=D[0],F=D[1],_=Object(s.useState)(!1),K=Object(r.a)(_,2),V=K[0],B=K[1],J=Object(s.useState)(0),R=Object(r.a)(J,2),U=R[0],T=R[1],q=Object(s.useState)(1),G=Object(r.a)(q,2),H=G[0],Q=G[1],W=Object(s.useState)(""),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=Object(s.useState)([]),ee=Object(r.a)($,2),ae=ee[0],te=ee[1],le=Object(s.useState)([]),ce=Object(r.a)(le,2),ne=ce[0],me=ce[1],re=Object(s.useState)(null),se=Object(r.a)(re,2),oe=se[0],ie=se[1];Object(s.useEffect)(()=>{S(1)},[M,L]),Object(s.useEffect)(()=>{function e(){return(e=Object(m.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.get("".concat(N,"?pageSize=").concat(M,"&currentPage=").concat(w,"&orderBy=").concat(L.column,"&search=").concat(Y)).then(e=>e.data).then(e=>{Q(e.totalPage),me(e.data.map(e=>Object(n.a)(Object(n.a)({},e),{},{img:e.img.replace("img/","img/products/")}))),te([]),T(e.totalItem),i(!0)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[M,w,L,Y]);const de=e=>(ae.length>=ne.length?e&&te([]):te(ne.map(e=>e.id)),document.activeElement.blur(),!1);Object(b.a)(["ctrl+a","command+a"],()=>{de(!1)}),Object(b.a)(["ctrl+d","command+d"],()=>(te([]),!1));const ue=(w-1)*M,Ee=w*M;return l?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"disable-text-selection"},o.a.createElement(E.a,{heading:"menu.image-list",displayMode:x,changeDisplayMode:j,handleChangeSelectAll:de,changeOrderBy:e=>{F(k.find(a=>a.column===e))},changePageSize:z,selectedPageSize:M,totalItemCount:U,selectedOrderOption:L,match:e,startIndex:ue,endIndex:Ee,selectedItemsLength:ae?ae.length:0,itemsLength:ne?ne.length:0,onSearchKey:e=>{"Enter"===e.key&&Z(e.target.value.toLowerCase())},orderOptions:k,pageSizes:C,toggleModal:()=>B(!V)}),o.a.createElement(g.a,{modalOpen:V,toggleModal:()=>B(!V),categories:O}),o.a.createElement(p.a,{items:ne,displayMode:x,selectedItems:ae,onCheckItem:(e,a)=>{if("A"===e.target.tagName||e.target.parentElement&&"A"===e.target.parentElement.tagName)return!0;null===oe&&ie(a);let t=[...ae];if(t.includes(a)?t=t.filter(e=>e!==a):t.push(a),te(t),e.shiftKey){let e=[...ne];const l=h(a,e,"id"),c=h(oe,e,"id");e=e.slice(Math.min(l,c),Math.max(l,c)+1),ae.push(...e.map(e=>e.id)),t=Array.from(new Set(ae)),te(t)}return document.activeElement.blur(),!1},currentPage:w,totalPage:H,onContextMenuClick:(e,a)=>{console.log("onContextMenuClick - selected items",ae),console.log("onContextMenuClick - action : ",a.action)},onContextMenu:(e,a)=>{const t=a.data;return ae.includes(t)||te([t]),!0},onChangePage:S}))):o.a.createElement("div",{className:"loading"})}}}]);