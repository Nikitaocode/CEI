(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[22],{106:function(e,a,t){"use strict";var l=t(5),c=t.n(l),n=t(111),s=t(112),r=t(77),m=t(101),i=t(8);const o=e=>"/"+e===i.a?c.a.createElement(m.a,{id:"menu.home"}):c.a.createElement(m.a,{id:"menu.".concat(e)}),u=(e,a,t)=>e.split(a)[0]+a,g=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,l)=>c.a.createElement(s.a,{key:l,active:t.length===l+1},t.length!==l+1?c.a.createElement(r.b,{to:"/".concat(u(a,e))},o(e)):o(e)))))};a.a=({heading:e,match:a})=>c.a.createElement(c.a.Fragment,null,e&&c.a.createElement("h1",null,c.a.createElement(m.a,{id:e})),c.a.createElement(g,{match:a}))},1080:function(e,a,t){"use strict";t.r(a);var l=t(5),c=t.n(l),n=t(441),s=t(101),r=t(105),m=t(106);a.default=({match:e})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,null,c.a.createElement(r.a,{xxs:"12"},c.a.createElement(m.a,{heading:"menu.blank-page",match:e}),c.a.createElement(r.b,{className:"mb-5"}))),c.a.createElement(n.a,null,c.a.createElement(r.a,{xxs:"12",className:"mb-4"},c.a.createElement("p",null,c.a.createElement(s.a,{id:"menu.blank-page"})))))},111:function(e,a,t){"use strict";var l=t(10),c=t(14),n=t(5),s=t.n(n),r=t(24),m=t.n(r),i=t(98),o=t.n(i),u=t(99),g={tag:u.tagPropType,listTag:u.tagPropType,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},b=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,r=e.children,m=e.tag,i=e.listTag,g=e["aria-label"],b=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),d=Object(u.mapToCssModules)(o()(a),n),p=Object(u.mapToCssModules)(o()("breadcrumb",t),n);return s.a.createElement(m,Object(l.a)({},b,{className:d,"aria-label":g}),s.a.createElement(i,{className:p},r))};b.propTypes=g,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},112:function(e,a,t){"use strict";var l=t(10),c=t(14),n=t(5),s=t.n(n),r=t(24),m=t.n(r),i=t(98),o=t.n(i),u=t(99),g={tag:u.tagPropType,active:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.active,r=e.tag,m=Object(c.a)(e,["className","cssModule","active","tag"]),i=Object(u.mapToCssModules)(o()(a,!!n&&"active","breadcrumb-item"),t);return s.a.createElement(r,Object(l.a)({},m,{className:i,"aria-current":n?"page":void 0}))};b.propTypes=g,b.defaultProps={tag:"li"},a.a=b}}]);