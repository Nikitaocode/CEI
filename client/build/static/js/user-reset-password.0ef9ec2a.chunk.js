(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[84],{101:function(e,a,t){"use strict";var s=t(5),r=t.n(s),n=t(776),o=t(426);a.a=Object(o.c)(e=>r.a.createElement(n.a,e),{withRef:!1})},105:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return l}));var s=t(5),r=t.n(s),n=t(440);const o=e=>r.a.createElement(n.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),l=({className:e})=>r.a.createElement("div",{className:"separator ".concat(e)})},1086:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t(103),n=t(5),o=t.n(n),l=t(441),c=t(110),m=t(122),i=t(654),u=t(655),d=t(372),b=t(77),p=t(213),g=t(39),E=t(105),w=t(101),f=t(1),N=t(224),h=t(180),v=t.n(h);a.default=Object(g.b)(({authUser:e})=>({newPassword:e.newPassword,resetPasswordCode:e.resetPasswordCode,loading:e.loading,error:e.error}),{resetPasswordAction:f.Cb})(({location:e,history:a,loading:t,error:g,resetPasswordAction:f})=>{const h=Object(n.useState)({}),j=Object(r.a)(h,2),y=j[0],O=j[1],P=()=>localStorage.getItem("userEmail");console.log(P()),Object(n.useEffect)(()=>{P()?console.log("hi"):window.location.href="/user/login"});return o.a.createElement(l.a,{className:"h-100"},o.a.createElement(E.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},o.a.createElement(c.a,{className:"auth-card"},o.a.createElement("div",{className:"position-relative image-side "},o.a.createElement("p",{className:"text-white h2"},"MAGIC IS IN THE DETAILS"),o.a.createElement("p",{className:"white mb-0"},"Please use your e-mail to reset your password. ",o.a.createElement("br",null),"If you are not a member, please"," ",o.a.createElement(b.b,{to:"/register",className:"white"},"register"),".")),o.a.createElement("div",{className:"form-side"},o.a.createElement(b.b,{to:"/",className:"white"},o.a.createElement("span",{className:"logo-single"})),o.a.createElement(m.a,{className:"mb-4"},o.a.createElement(w.a,{id:"user.reset-password"})),o.a.createElement(p.c,null,o.a.createElement(p.b,{className:"av-tooltip tooltip-label-bottom"},o.a.createElement(i.a,{className:"form-group has-float-label"},o.a.createElement(u.a,null,o.a.createElement(w.a,{id:"user.new-password"})),o.a.createElement(p.a,{onChange:e=>{O(Object(s.a)(Object(s.a)({},y),{},{password:e.target.value,email:P()}))},className:"form-control",name:"newPassword",type:"password"})),o.a.createElement(i.a,{className:"form-group has-float-label"},o.a.createElement(u.a,null,o.a.createElement(w.a,{id:"user.new-password-again"})),o.a.createElement(p.a,{className:"form-control",name:"newPasswordAgain",type:"password",onChange:e=>{O(Object(s.a)(Object(s.a)({},y),{},{ConfirmPassword:e.target.value}))}})),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement(b.b,{to:"/user/login"},o.a.createElement(w.a,{id:"user.login-title"})),o.a.createElement(d.a,{onClick:e=>{y.password==y.ConfirmPassword?v.a.post("/change-password",y).then(e=>{console.log(e.data),e.data.success?(N.b.success(e.data.success,"Success",3e3,null,null,""),O({}),localStorage.removeItem("userEmail")):e.data.error&&N.b.warning(e.data.error,"Error",3e3,null,null,"")}):N.b.warning("Password do not match","Error",3e3,null,null,"")},color:"primary",className:"btn-shadow btn-multiple-state ".concat(t?"show-spinner":""),size:"lg"},o.a.createElement("span",{className:"spinner d-inline-block"},o.a.createElement("span",{className:"bounce1"}),o.a.createElement("span",{className:"bounce2"}),o.a.createElement("span",{className:"bounce3"})),o.a.createElement("span",{className:"label"},o.a.createElement(w.a,{id:"user.reset-password-button"}))))))))))})},110:function(e,a,t){"use strict";var s=t(10),r=t(14),n=t(5),o=t.n(n),l=t(24),c=t.n(l),m=t(98),i=t.n(m),u=t(99),d={tag:u.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.body,c=e.inverse,m=e.outline,d=e.tag,b=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.mapToCssModules)(i()(a,"card",!!c&&"text-white",!!l&&"card-body",!!n&&(m?"border":"bg")+"-"+n),t);return o.a.createElement(d,Object(s.a)({},p,{className:g,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},122:function(e,a,t){"use strict";var s=t(10),r=t(14),n=t(5),o=t.n(n),l=t(24),c=t.n(l),m=t(98),i=t.n(m),u=t(99),d={tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.mapToCssModules)(i()(a,"card-title"),t);return o.a.createElement(n,Object(s.a)({},l,{className:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b}}]);