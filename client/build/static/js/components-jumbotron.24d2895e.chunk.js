(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[35],{106:function(e,a,t){"use strict";var l=t(5),s=t.n(l),n=t(112),c=t(113),r=t(77),o=t(101),m=t(8);const i=e=>"/"+e===m.a?s.a.createElement(o.a,{id:"menu.home"}):s.a.createElement(o.a,{id:"menu.".concat(e)}),u=(e,a,t)=>e.split(a)[0]+a,d=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),s.a.createElement(s.a.Fragment,null,s.a.createElement(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,l)=>s.a.createElement(c.a,{key:l,active:t.length===l+1},t.length!==l+1?s.a.createElement(r.b,{to:"/".concat(u(a,e))},i(e)):i(e)))))};a.a=({heading:e,match:a})=>s.a.createElement(s.a.Fragment,null,e&&s.a.createElement("h1",null,s.a.createElement(o.a,{id:e})),s.a.createElement(d,{match:a}))},110:function(e,a,t){"use strict";var l=t(10),s=t(14),n=t(5),c=t.n(n),r=t(24),o=t.n(r),m=t(98),i=t.n(m),u=t(99),d={tag:u.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,r=e.body,o=e.inverse,m=e.outline,d=e.tag,b=e.innerRef,g=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(i()(a,"card",!!o&&"text-white",!!r&&"card-body",!!n&&(m?"border":"bg")+"-"+n),t);return c.a.createElement(d,Object(l.a)({},g,{className:p,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},112:function(e,a,t){"use strict";var l=t(10),s=t(14),n=t(5),c=t.n(n),r=t(24),o=t.n(r),m=t(98),i=t.n(m),u=t(99),d={tag:u.tagPropType,listTag:u.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},b=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,r=e.children,o=e.tag,m=e.listTag,d=e["aria-label"],b=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(u.mapToCssModules)(i()(a),n),p=Object(u.mapToCssModules)(i()("breadcrumb",t),n);return c.a.createElement(o,Object(l.a)({},b,{className:g,"aria-label":d}),c.a.createElement(m,{className:p},r))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},113:function(e,a,t){"use strict";var l=t(10),s=t(14),n=t(5),c=t.n(n),r=t(24),o=t.n(r),m=t(98),i=t.n(m),u=t(99),d={tag:u.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.active,r=e.tag,o=Object(s.a)(e,["className","cssModule","active","tag"]),m=Object(u.mapToCssModules)(i()(a,!!n&&"active","breadcrumb-item"),t);return c.a.createElement(r,Object(l.a)({},o,{className:m,"aria-current":n?"page":void 0}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b},114:function(e,a,t){"use strict";var l=t(10),s=t(14),n=t(5),c=t.n(n),r=t(24),o=t.n(r),m=t(98),i=t.n(m),u=t(99),d={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,r=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),m=Object(u.mapToCssModules)(i()(a,"card-body"),t);return c.a.createElement(r,Object(l.a)({},o,{className:m,ref:n}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},629:function(e,a,t){"use strict";var l=t(10),s=t(14),n=t(5),c=t.n(n),r=t(24),o=t.n(r),m=t(98),i=t.n(m),u=t(99),d={tag:u.tagPropType,fluid:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=e.fluid,o=Object(s.a)(e,["className","cssModule","tag","fluid"]),m=Object(u.mapToCssModules)(i()(a,"jumbotron",!!r&&"jumbotron-fluid"),t);return c.a.createElement(n,Object(l.a)({},o,{className:m}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},970:function(e,a,t){"use strict";t.r(a);var l=t(5),s=t.n(l),n=t(233),c=t(110),r=t(114),o=t(629),m=t(217),i=t(101),u=t(104),d=t(106);a.default=({match:e})=>s.a.createElement(s.a.Fragment,null,s.a.createElement(n.a,null,s.a.createElement(u.a,{xxs:"12"},s.a.createElement(d.a,{heading:"menu.jumbotron",match:e}),s.a.createElement(u.b,{className:"mb-5"}))),s.a.createElement(n.a,null,s.a.createElement(u.a,{xxs:"12",className:"mb-4"},s.a.createElement(c.a,null,s.a.createElement(r.a,null,s.a.createElement(o.a,null,s.a.createElement("h1",{className:"display-4"},s.a.createElement(i.a,{id:"jumbotron.hello-world"})),s.a.createElement("p",{className:"lead"},s.a.createElement(i.a,{id:"jumbotron.lead"})),s.a.createElement("hr",{className:"my-4"}),s.a.createElement("p",null,s.a.createElement(i.a,{id:"jumbotron.lead-detail"})),s.a.createElement("p",{className:"lead mb-0"},s.a.createElement(m.a,{color:"primary",size:"lg"},s.a.createElement(i.a,{id:"jumbotron.learn-more"})))))))))}}]);