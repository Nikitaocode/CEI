(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[32],{106:function(e,a,t){"use strict";var n=t(5),l=t.n(n),r=t(111),c=t(112),o=t(77),s=t(101),d=t(8);const m=e=>"/"+e===d.a?l.a.createElement(s.a,{id:"menu.home"}):l.a.createElement(s.a,{id:"menu.".concat(e)}),i=(e,a,t)=>e.split(a)[0]+a,E=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,n)=>l.a.createElement(c.a,{key:n,active:t.length===n+1},t.length!==n+1?l.a.createElement(o.b,{to:"/".concat(i(a,e))},m(e)):m(e)))))};a.a=({heading:e,match:a})=>l.a.createElement(l.a.Fragment,null,e&&l.a.createElement("h1",null,l.a.createElement(s.a,{id:e})),l.a.createElement(E,{match:a}))},110:function(e,a,t){"use strict";var n=t(10),l=t(14),r=t(5),c=t.n(r),o=t(24),s=t.n(o),d=t(98),m=t.n(d),i=t(99),E={tag:i.tagPropType,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,s=e.inverse,d=e.outline,E=e.tag,u=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(i.mapToCssModules)(m()(a,"card",!!s&&"text-white",!!o&&"card-body",!!r&&(d?"border":"bg")+"-"+r),t);return c.a.createElement(E,Object(n.a)({},p,{className:b,ref:u}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},111:function(e,a,t){"use strict";var n=t(10),l=t(14),r=t(5),c=t.n(r),o=t(24),s=t.n(o),d=t(98),m=t.n(d),i=t(99),E={tag:i.tagPropType,listTag:i.tagPropType,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},u=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,o=e.children,s=e.tag,d=e.listTag,E=e["aria-label"],u=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(i.mapToCssModules)(m()(a),r),b=Object(i.mapToCssModules)(m()("breadcrumb",t),r);return c.a.createElement(s,Object(n.a)({},u,{className:p,"aria-label":E}),c.a.createElement(d,{className:b},o))};u.propTypes=E,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},112:function(e,a,t){"use strict";var n=t(10),l=t(14),r=t(5),c=t.n(r),o=t(24),s=t.n(o),d=t(98),m=t.n(d),i=t(99),E={tag:i.tagPropType,active:s.a.bool,className:s.a.string,cssModule:s.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.active,o=e.tag,s=Object(l.a)(e,["className","cssModule","active","tag"]),d=Object(i.mapToCssModules)(m()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(o,Object(n.a)({},s,{className:d,"aria-current":r?"page":void 0}))};u.propTypes=E,u.defaultProps={tag:"li"},a.a=u},114:function(e,a,t){"use strict";var n=t(10),l=t(14),r=t(5),c=t.n(r),o=t(24),s=t.n(o),d=t(98),m=t.n(d),i=t(99),E={tag:i.tagPropType,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),d=Object(i.mapToCssModules)(m()(a,"card-body"),t);return c.a.createElement(o,Object(n.a)({},s,{className:d,ref:r}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},122:function(e,a,t){"use strict";var n=t(10),l=t(14),r=t(5),c=t.n(r),o=t(24),s=t.n(o),d=t(98),m=t.n(d),i=t(99),E={tag:i.tagPropType,className:s.a.string,cssModule:s.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),s=Object(i.mapToCssModules)(m()(a,"card-title"),t);return c.a.createElement(r,Object(n.a)({},o,{className:s}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},185:function(e,a,t){"use strict";var n=t(10),l=t(14),r=t(5),c=t.n(r),o=t(24),s=t.n(o),d=t(98),m=t.n(d),i=t(99),E={tag:i.tagPropType,className:s.a.string,cssModule:s.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),s=Object(i.mapToCssModules)(m()(a,"card-subtitle"),t);return c.a.createElement(r,Object(n.a)({},o,{className:s}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},199:function(e,a,t){"use strict";var n=t(10),l=t(5),r=t.n(l),c=t(24),o=t.n(c),s=t(168),d={children:o.a.node},m=function(e){return r.a.createElement(s.a,Object(n.a)({group:!0},e))};m.propTypes=d,a.a=m},949:function(e,a,t){"use strict";t.r(a);var n=t(103),l=t(5),r=t.n(l),c=t(441),o=t(110),s=t(114),d=t(122),m=t(185),i=t(168),E=t(664),u=t(666),p=t(683),b=t(663),g=t(199),w=t(372),h=t(105),O=t(106),f=t(101);a.default=({match:e})=>{const a=Object(l.useState)(!1),t=Object(n.a)(a,2),j=t[0],N=t[1],v=Object(l.useState)(!1),y=Object(n.a)(v,2),T=y[0],M=y[1],x=Object(l.useState)(!1),P=Object(n.a)(x,2),C=P[0],S=P[1],R=Object(l.useState)(!1),k=Object(n.a)(R,2),z=k[0],F=k[1],J=Object(l.useState)(!1),q=Object(n.a)(J,2),A=q[0],B=q[1],D=Object(l.useState)(!1),G=Object(n.a)(D,2),H=G[0],I=G[1],K=Object(l.useState)(!1),L=Object(n.a)(K,2),Q=L[0],U=L[1],V=Object(l.useState)(!1),W=Object(n.a)(V,2),X=W[0],Y=W[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(h.a,{xxs:"12"},r.a.createElement(O.a,{heading:"menu.dropdowns",match:e}),r.a.createElement(h.b,{className:"mb-5"}))),r.a.createElement(c.a,{className:"mb-4"},r.a.createElement(h.a,{xxs:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{id:"dropdowns.basic"})),r.a.createElement(m.a,null,r.a.createElement(f.a,{id:"dropdowns.controlled"})),r.a.createElement(i.a,{isOpen:j,toggle:()=>N(!j),className:"mb-5"},r.a.createElement(E.a,{caret:!0,color:"secondary",outline:!0},r.a.createElement(f.a,{id:"dropdowns.dropdown"})),r.a.createElement(u.a,null,r.a.createElement(p.a,{header:!0},r.a.createElement(f.a,{id:"dropdowns.header"})),r.a.createElement(p.a,{disabled:!0},r.a.createElement(f.a,{id:"dropdowns.action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))),r.a.createElement(m.a,null,r.a.createElement(f.a,{id:"dropdowns.uncontrolled"})),r.a.createElement(b.a,null,r.a.createElement(E.a,{caret:!0,color:"secondary",outline:!0},r.a.createElement(f.a,{id:"dropdowns.dropdown"})),r.a.createElement(u.a,null,r.a.createElement(p.a,{header:!0},r.a.createElement(f.a,{id:"dropdowns.header"})),r.a.createElement(p.a,{disabled:!0},r.a.createElement(f.a,{id:"dropdowns.action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))))))),r.a.createElement(c.a,{className:"mb-4"},r.a.createElement(h.a,{xxs:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{id:"dropdowns.split-button"})),r.a.createElement(g.a,{isOpen:T,toggle:()=>M(!T)},r.a.createElement(w.a,{color:"secondary"},r.a.createElement(f.a,{id:"dropdowns.action"})),r.a.createElement(E.a,{caret:!0,color:"secondary"}),r.a.createElement(u.a,null,r.a.createElement(p.a,{header:!0},r.a.createElement(f.a,{id:"dropdowns.header"})),r.a.createElement(p.a,{disabled:!0},r.a.createElement(f.a,{id:"dropdowns.action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))))))),r.a.createElement(c.a,{className:"mb-4"},r.a.createElement(h.a,{xxs:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{id:"dropdowns.sizing"})),r.a.createElement(g.a,{className:"mr-1 mb-1",isOpen:C,toggle:()=>S(!C)},r.a.createElement(E.a,{caret:!0,size:"lg",outline:!0,color:"info"},r.a.createElement(f.a,{id:"dropdowns.large-button"})),r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))),r.a.createElement(g.a,{className:"mr-1 mb-1",isOpen:z,toggle:()=>F(!z)},r.a.createElement(E.a,{caret:!0,size:"sm",outline:!0,color:"info"},r.a.createElement(f.a,{id:"dropdowns.small-button"})),r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))),r.a.createElement(g.a,{className:"mr-1 mb-1",isOpen:A,toggle:()=>B(!A)},r.a.createElement(E.a,{caret:!0,size:"xs",outline:!0,color:"info"},r.a.createElement(f.a,{id:"dropdowns.small-button"})),r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))))))),r.a.createElement(c.a,{className:"mb-4"},r.a.createElement(h.a,{xxs:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{id:"dropdowns.drop-directions"})),r.a.createElement(g.a,{direction:"up",className:"mr-1 mb-5",isOpen:H,toggle:()=>I(!H)},r.a.createElement(E.a,{caret:!0},r.a.createElement(f.a,{id:"dropdowns.dropup"})),r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))),r.a.createElement(g.a,{direction:"left",className:"mr-1 mb-5",isOpen:Q,toggle:()=>U(!Q)},r.a.createElement(E.a,{caret:!0},r.a.createElement(f.a,{id:"dropdowns.dropleft"})),r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))),r.a.createElement(g.a,{direction:"right",className:"mr-1 mb-5",isOpen:X,toggle:()=>Y(!X)},r.a.createElement(E.a,{caret:!0},r.a.createElement(f.a,{id:"dropdowns.dropright"})),r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))))))),r.a.createElement(c.a,{className:"mb-4"},r.a.createElement(h.a,{xxs:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{id:"dropdowns.drop-directions"})),r.a.createElement(m.a,null,r.a.createElement(f.a,{id:"dropdowns.left"})),r.a.createElement(b.a,{className:"mb-5"},r.a.createElement(E.a,{caret:!0,color:"secondary",outline:!0},r.a.createElement(f.a,{id:"dropdowns.dropdown"})),r.a.createElement(u.a,null,r.a.createElement(p.a,{header:!0},r.a.createElement(f.a,{id:"dropdowns.header"})),r.a.createElement(p.a,{disabled:!0},r.a.createElement(f.a,{id:"dropdowns.action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))),r.a.createElement(m.a,null,r.a.createElement(f.a,{id:"dropdowns.right"})),r.a.createElement(b.a,null,r.a.createElement(E.a,{caret:!0,color:"secondary",outline:!0},r.a.createElement(f.a,{id:"dropdowns.dropdown"})),r.a.createElement(u.a,{right:!0},r.a.createElement(p.a,{header:!0},r.a.createElement(f.a,{id:"dropdowns.header"})),r.a.createElement(p.a,{disabled:!0},r.a.createElement(f.a,{id:"dropdowns.action"})),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,r.a.createElement(f.a,{id:"dropdowns.another-action"})))))))))}}}]);