(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[19],{106:function(e,t,a){"use strict";var o=a(5),n=a.n(o),l=a(112),s=a(113),c=a(77),i=a(101),r=a(8);const d=e=>"/"+e===r.a?n.a.createElement(i.a,{id:"menu.home"}):n.a.createElement(i.a,{id:"menu.".concat(e)}),m=(e,t,a)=>e.split(t)[0]+t,p=({match:e})=>{const t=e.path.substr(1);let a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter(e=>-1===e.indexOf(":"))),n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((e,o)=>n.a.createElement(s.a,{key:o,active:a.length===o+1},a.length!==o+1?n.a.createElement(c.b,{to:"/".concat(m(t,e))},d(e)):d(e)))))};t.a=({heading:e,match:t})=>n.a.createElement(n.a.Fragment,null,e&&n.a.createElement("h1",null,n.a.createElement(i.a,{id:e})),n.a.createElement(p,{match:t}))},1061:function(e,t,a){"use strict";a.r(t);var o=a(103),n=a(5),l=a.n(n),s=a(233),c=a(217),i=a(186),r=a(661),d=a(677),m=a(679),p=a(696),u=a(385),h=a(676),b=a(231),g=a(39),E=a(101),f=a(104),O=a(106),C=a(1),N=a(110),k=a(114),y=a(146),v=a(77);var T=l.a.memo(({item:e,handleCheckChange:t,isSelected:a})=>l.a.createElement(f.a,{xxs:"12"},l.a.createElement(N.a,{className:"card d-flex mb-3"},l.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},l.a.createElement(k.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},l.a.createElement(v.b,{to:"#",location:{},id:"toggler".concat(e.id),className:"list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1"},l.a.createElement("i",{className:"".concat("COMPLETED"===e.status?"simple-icon-check heading-icon":"simple-icon-refresh heading-icon")}),l.a.createElement("span",{className:"align-middle d-inline-block"},e.title)),l.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},e.category),l.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},e.createDate),l.a.createElement("div",{className:"w-15 w-xs-100"},l.a.createElement(y.a,{color:e.labelColor,pill:!0},e.label))),l.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center mr-4"},l.a.createElement(r.a,{className:"itemCheck mb-0",type:"checkbox",id:"check_".concat(e.id),checked:a,onChange:a=>t(a,e.id),label:""}))),l.a.createElement("div",{className:"card-body pt-1"},l.a.createElement("p",{className:"mb-0"},e.detail))))),j=a(0),x=a(287),M=a(249),w=a(250),A=a(660),_=a(446),P=a(251),I=a(126),D=a(129);const S={title:"",detail:"",label:{},category:{},status:"PENDING"};var B=Object(g.b)(({todoApp:e})=>({labels:e.labels,categories:e.categories}),{addTodoItemAction:C.fb})(({modalOpen:e,toggleModal:t,labels:a,categories:s,addTodoItemAction:i})=>{const d=Object(n.useState)(S),m=Object(o.a)(d,2),p=m[0],u=m[1];return l.a.createElement(x.a,{isOpen:e,toggle:t,wrapClassName:"modal-right",backdrop:"static"},l.a.createElement(M.a,{toggle:t},l.a.createElement(E.a,{id:"todo.add-new-title"})),l.a.createElement(w.a,null,l.a.createElement(A.a,{className:"mt-4"},l.a.createElement(E.a,{id:"todo.title"})),l.a.createElement(_.a,{type:"text",defaultValue:p.title,onChange:e=>u(Object(j.a)(Object(j.a)({},p),{},{title:e.target.value}))}),l.a.createElement(A.a,{className:"mt-4"},l.a.createElement(E.a,{id:"todo.detail"})),l.a.createElement(_.a,{type:"textarea",defaultValue:p.detail,onChange:e=>u(Object(j.a)(Object(j.a)({},p),{},{detail:e.target.value}))}),l.a.createElement(A.a,{className:"mt-4"},l.a.createElement(E.a,{id:"todo.category"})),l.a.createElement(I.a,{components:{Input:D.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:s.map((e,t)=>({label:e,value:e,key:t})),value:p.category,onChange:e=>u(Object(j.a)(Object(j.a)({},p),{},{category:e}))}),l.a.createElement(A.a,{className:"mt-4"},l.a.createElement(E.a,{id:"todo.label"})),l.a.createElement(I.a,{components:{Input:D.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:a.map((e,t)=>({label:e.label,value:e.label,key:t,color:e.color})),value:p.label,onChange:e=>u(Object(j.a)(Object(j.a)({},p),{},{label:e}))}),l.a.createElement(A.a,{className:"mt-4"},l.a.createElement(E.a,{id:"todo.status"})),l.a.createElement(r.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"COMPLETED",checked:"COMPLETED"===p.status,onChange:e=>u(Object(j.a)(Object(j.a)({},p),{},{status:"on"===e.target.value?"COMPLETED":"PENDING"}))}),l.a.createElement(r.a,{type:"radio",id:"exCustomRadio2",name:"customRadio2",label:"PENDING",defaultChecked:"PENDING"===p.status,onChange:e=>u(Object(j.a)(Object(j.a)({},p),{},{status:"on"!==e.target.value?"COMPLETED":"PENDING"}))})),l.a.createElement(P.a,null,l.a.createElement(c.a,{color:"secondary",outline:!0,onClick:t},l.a.createElement(E.a,{id:"todo.cancel"})),l.a.createElement(c.a,{color:"primary",onClick:()=>(()=>{const e={title:p.title,detail:p.detail,label:p.label.value,labelColor:p.label.color,category:p.category.value,status:p.status};i(e),t(),u(S)})()},l.a.createElement(E.a,{id:"todo.submit"}))," "))}),F=a(441),L=a(153),z=a.n(L),R=a(98),G=a.n(R),K=a(254);var W=Object(g.b)(({todoApp:e})=>({todoItems:e.todoItems,filter:e.filter,allTodoItems:e.allTodoItems,loading:e.loading,labels:e.labels,categories:e.categories}),{getTodoListWithFilterAction:C.xb})(({todoItems:e,filter:t,allTodoItems:a,loading:o,labels:n,categories:s,getTodoListWithFilterAction:c})=>{const i=(e,t)=>{c(e,t)};return l.a.createElement(K.a,null,l.a.createElement(z.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},l.a.createElement("div",{className:"p-4"},l.a.createElement("p",{className:"text-muted text-small"},l.a.createElement(E.a,{id:"todo.status"})),l.a.createElement("ul",{className:"list-unstyled mb-5"},l.a.createElement(F.a,{className:G()({active:!t})},l.a.createElement(v.b,{to:"#",onClick:()=>i("",""),location:{}},l.a.createElement("i",{className:"simple-icon-reload"}),l.a.createElement(E.a,{id:"todo.all-tasks"}),l.a.createElement("span",{className:"float-right"},o&&a.length))),l.a.createElement(F.a,{className:G()({active:t&&"status"===t.column&&"PENDING"===t.value})},l.a.createElement(v.b,{location:{},to:"#",onClick:()=>i("status","PENDING")},l.a.createElement("i",{className:"simple-icon-refresh"}),l.a.createElement(E.a,{id:"todo.pending-tasks"}),l.a.createElement("span",{className:"float-right"},o&&e.filter(e=>"PENDING"===e.status).length))),l.a.createElement(F.a,{className:G()({active:t&&"status"===t.column&&"COMPLETED"===t.value})},l.a.createElement(v.b,{to:"#",location:{},onClick:()=>i("status","COMPLETED")},l.a.createElement("i",{className:"simple-icon-check"}),l.a.createElement(E.a,{id:"todo.completed-tasks"}),l.a.createElement("span",{className:"float-right"},o&&e.filter(e=>"COMPLETED"===e.status).length)))),l.a.createElement("p",{className:"text-muted text-small"},l.a.createElement(E.a,{id:"todo.categories"})),l.a.createElement("ul",{className:"list-unstyled mb-5"},s.map((e,a)=>l.a.createElement(F.a,{key:a},l.a.createElement("div",{onClick:()=>i("category",e)},l.a.createElement("div",{className:"custom-control custom-radio"},l.a.createElement("input",{type:"radio",className:"custom-control-input",defaultChecked:t&&"category"===t.column&&t.value===e}),l.a.createElement("label",{className:"custom-control-label"},e)))))),l.a.createElement("p",{className:"text-muted text-small"},l.a.createElement(E.a,{id:"todo.labels"})),l.a.createElement("div",null,n.map((e,a)=>l.a.createElement("p",{className:"d-sm-inline-block mb-1",key:a},l.a.createElement(v.b,{to:"#",location:{},onClick:()=>i("label",e.label)},l.a.createElement(y.a,{className:"mb-1",color:"".concat(t&&"label"===t.column&&t.value===e.label?e.color:"outline-".concat(e.color)),pill:!0},e.label))))))))});const U=(e,t,a)=>{for(let o=0;o<t.length;o+=1)if(t[o][a]===e)return o;return-1};t.default=Object(b.c)(Object(g.b)(({todoApp:e})=>({todoItems:e.todoItems,searchKeyword:e.searchKeyword,loading:e.loading,orderColumn:e.orderColumn,orderColumns:e.orderColumns,selectedItems:e.selectedItems}),{getTodoListAction:C.vb,getTodoListWithOrderAction:C.yb,getTodoListSearchAction:C.wb,selectedTodoItemsChangeAction:C.Gb})(({match:e,intl:t,todoItems:a,searchKeyword:b,loading:g,orderColumn:C,orderColumns:N,selectedItems:k,getTodoListAction:y,getTodoListWithOrderAction:v,getTodoListSearchAction:j,selectedTodoItemsChangeAction:x})=>{const M=Object(n.useState)(!1),w=Object(o.a)(M,2),A=w[0],_=w[1],P=Object(n.useState)(!1),I=Object(o.a)(P,2),D=I[0],S=I[1],F=Object(n.useState)(!1),L=Object(o.a)(F,2),z=L[0],R=L[1],G=Object(n.useState)(null),K=Object(o.a)(G,2),V=K[0],q=K[1];Object(n.useEffect)(()=>(document.body.classList.add("right-menu"),y(),()=>{document.body.classList.remove("right-menu")}),[y]);const J=(e,t)=>{null==V&&q(t);let o=Object.assign([],k);if(o.includes(t)?o=o.filter(e=>e!==t):o.push(t),x(o),e.shiftKey){let e=a;const n=U(t,e,"id"),l=U(V,e,"id");e=e.slice(Math.min(n,l),Math.max(n,l)+1),o.push(...e.map(e=>e.id)),o=Array.from(new Set(o)),x(o)}},X=()=>{g&&(k.length>=a.length?x([]):x(a.map(e=>e.id)))},$=t.messages;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{className:"app-row survey-app"},l.a.createElement(f.a,{xxs:"12"},l.a.createElement("div",{className:"mb-2"},l.a.createElement("h1",null,l.a.createElement(E.a,{id:"menu.todo"})),g&&l.a.createElement("div",{className:"text-zero top-right-button-container"},l.a.createElement(c.a,{color:"primary",size:"lg",className:"top-right-button",onClick:()=>_(!0)},l.a.createElement(E.a,{id:"todo.add-new"}))," ",l.a.createElement(i.a,{isOpen:D,toggle:()=>S(!D)},l.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},l.a.createElement(r.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:k.length>=a.length,onClick:()=>X(),onChange:()=>X(),label:l.a.createElement("span",{className:"custom-control-label ".concat(k.length>0&&k.length<a.length?"indeterminate":"")})})),l.a.createElement(d.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),l.a.createElement(m.a,{right:!0},l.a.createElement(p.a,null,l.a.createElement(E.a,{id:"todo.action"})),l.a.createElement(p.a,null,l.a.createElement(E.a,{id:"todo.another-action"}))))),l.a.createElement(O.a,{match:e})),l.a.createElement("div",{className:"mb-2"},l.a.createElement(c.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:()=>R(!z)},l.a.createElement(E.a,{id:"todo.display-options"})," ",l.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),l.a.createElement(u.a,{id:"displayOptions",className:"d-md-block",isOpen:z},l.a.createElement("div",{className:"d-block mb-2 d-md-inline-block"},l.a.createElement(h.a,{className:"mr-1 float-md-left btn-group mb-1"},l.a.createElement(d.a,{caret:!0,color:"outline-dark",size:"xs"},l.a.createElement(E.a,{id:"todo.orderby"}),C?C.label:""),l.a.createElement(m.a,null,N.map((e,t)=>l.a.createElement(p.a,{key:t,onClick:()=>v(e.column)},e.label)))),l.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},l.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:$["menu.search"],defaultValue:b,onKeyPress:e=>{"Enter"===e.key&&j(e.target.value)}}))))),l.a.createElement(f.b,{className:"mb-5"}),l.a.createElement(s.a,null,g?a.map((e,t)=>l.a.createElement(T,{key:"todo_item_".concat(t),item:e,handleCheckChange:J,isSelected:!!g&&k.includes(e.id)})):l.a.createElement("div",{className:"loading"})))),g&&l.a.createElement(W,null),l.a.createElement(B,{toggleModal:()=>_(!A),modalOpen:A}))}))},129:function(e,t,a){"use strict";var o=a(0),n=a(5),l=a.n(n),s=a(459);t.a=e=>{const t=Object(o.a)({},e);return delete t.autoCorrect,delete t.autoCapitalize,l.a.createElement(s.z.Input,t)}},146:function(e,t,a){"use strict";var o=a(10),n=a(14),l=a(5),s=a.n(l),c=a(24),i=a.n(c),r=a(98),d=a.n(r),m=a(99),p={color:i.a.string,pill:i.a.bool,tag:m.tagPropType,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),children:i.a.node,className:i.a.string,cssModule:i.a.object},u=function(e){var t=e.className,a=e.cssModule,l=e.color,c=e.innerRef,i=e.pill,r=e.tag,p=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),u=Object(m.mapToCssModules)(d()(t,"badge","badge-"+l,!!i&&"badge-pill"),a);return p.href&&"span"===r&&(r="a"),s.a.createElement(r,Object(o.a)({},p,{className:u,ref:c}))};u.propTypes=p,u.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=u},186:function(e,t,a){"use strict";var o=a(10),n=a(5),l=a.n(n),s=a(24),c=a.n(s),i=a(164),r={children:c.a.node},d=function(e){return l.a.createElement(i.a,Object(o.a)({group:!0},e))};d.propTypes=r,t.a=d},249:function(e,t,a){"use strict";var o=a(10),n=a(14),l=a(5),s=a.n(l),c=a(24),i=a.n(c),r=a(98),d=a.n(r),m=a(99),p={tag:m.tagPropType,wrapTag:m.tagPropType,toggle:i.a.func,className:i.a.string,cssModule:i.a.object,children:i.a.node,closeAriaLabel:i.a.string,charCode:i.a.oneOfType([i.a.string,i.a.number]),close:i.a.object},u=function(e){var t,a=e.className,l=e.cssModule,c=e.children,i=e.toggle,r=e.tag,p=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(n.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),E=Object(m.mapToCssModules)(d()(a,"modal-header"),l);if(!b&&i){var f="number"===typeof h?String.fromCharCode(h):h;t=s.a.createElement("button",{type:"button",onClick:i,className:Object(m.mapToCssModules)("close",l),"aria-label":u},s.a.createElement("span",{"aria-hidden":"true"},f))}return s.a.createElement(p,Object(o.a)({},g,{className:E}),s.a.createElement(r,{className:Object(m.mapToCssModules)("modal-title",l)},c),b||t)};u.propTypes=p,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},250:function(e,t,a){"use strict";var o=a(10),n=a(14),l=a(5),s=a.n(l),c=a(24),i=a.n(c),r=a(98),d=a.n(r),m=a(99),p={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},u=function(e){var t=e.className,a=e.cssModule,l=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(d()(t,"modal-body"),a);return s.a.createElement(l,Object(o.a)({},c,{className:i}))};u.propTypes=p,u.defaultProps={tag:"div"},t.a=u},251:function(e,t,a){"use strict";var o=a(10),n=a(14),l=a(5),s=a.n(l),c=a(24),i=a.n(c),r=a(98),d=a.n(r),m=a(99),p={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},u=function(e){var t=e.className,a=e.cssModule,l=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(d()(t,"modal-footer"),a);return s.a.createElement(l,Object(o.a)({},c,{className:i}))};u.propTypes=p,u.defaultProps={tag:"div"},t.a=u},254:function(e,t,a){"use strict";var o=a(103),n=a(5),l=a.n(n),s=a(689);t.a=({children:e})=>{const t=Object(n.useRef)(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],r=c[1],d=e=>{if(i){const a=t.current;if(a.contains(e.target)||a===e.target)return;r(!1)}};return Object(n.useEffect)(()=>(["click","touchstart"].forEach(e=>document.addEventListener(e,d,!1)),()=>{["click","touchstart"].forEach(e=>document.removeEventListener(e,d,!1))}),[i]),l.a.createElement("div",{ref:t,className:"app-menu ".concat(i?"shown":"")},e,l.a.createElement(s.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:()=>r(!i)},l.a.createElement("i",{className:"simple-icon-options"})))}},287:function(e,t,a){"use strict";var o=a(127),n=a(10),l=a(109),s=a(16),c=a(5),i=a.n(c),r=a(24),d=a.n(r),m=a(98),p=a.n(m),u=a(26),h=a.n(u),b=a(99),g={children:d.a.node.isRequired,node:d.a.any},E=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(i.a.Component);E.propTypes=g;var f=E,O=a(165);function C(){}var N=d.a.shape(O.a.propTypes),k={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:N,modalTransition:N,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.targetPropType},y=Object.keys(k),v={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:C,onClosed:C,modalTransition:{timeout:b.TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.TransitionTimeouts.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},T=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(l.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(l.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(l.a)(a)),a.handleEscape=a.handleEscape.bind(Object(l.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(l.a)(a)),a.handleTab=a.handleTab.bind(Object(l.a)(a)),a.onOpened=a.onOpened.bind(Object(l.a)(a)),a.onClosed=a.onClosed.bind(Object(l.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(l.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(l.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,o=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),o&&o(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||C)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||C)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.focusableElements.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var o=this.getFocusedChild(),n=0,l=0;l<a;l+=1)if(t[l]===o){n=l;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.keyCodes.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.getTarget)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.getOriginalBodyPadding)(),Object(b.conditionallyUpdateScrollbar)(),0===t.openCount&&(document.body.className=p()(document.body.className,Object(b.mapToCssModules)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.mapToCssModules)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.setScrollbarWidth)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.omit)(this.props,y);return i.a.createElement("div",Object(n.a)({},a,{className:Object(b.mapToCssModules)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),i.a.createElement("div",{className:Object(b.mapToCssModules)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,l=a.wrapClassName,s=a.modalClassName,c=a.backdropClassName,r=a.cssModule,d=a.isOpen,m=a.backdrop,u=a.role,h=a.labelledBy,g=a.external,E=a.innerRef,C={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:u,tabIndex:"-1"},N=this.props.fade,k=Object(o.a)({},O.a.defaultProps,{},this.props.modalTransition,{baseClass:N?this.props.modalTransition.baseClass:"",timeout:N?this.props.modalTransition.timeout:0}),y=Object(o.a)({},O.a.defaultProps,{},this.props.backdropTransition,{baseClass:N?this.props.backdropTransition.baseClass:"",timeout:N?this.props.backdropTransition.timeout:0}),v=m&&(N?i.a.createElement(O.a,Object(n.a)({},y,{in:d&&!!m,cssModule:r,className:Object(b.mapToCssModules)(p()("modal-backdrop",c),r)})):i.a.createElement("div",{className:Object(b.mapToCssModules)(p()("modal-backdrop","show",c),r)}));return i.a.createElement(f,{node:this._element},i.a.createElement("div",{className:Object(b.mapToCssModules)(l)},i.a.createElement(O.a,Object(n.a)({},C,k,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(b.mapToCssModules)(p()("modal",s,this.state.showStaticBackdropAnimation&&"modal-static"),r),innerRef:E}),g,this.renderModalDialog()),v))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(i.a.Component);T.propTypes=k,T.defaultProps=v,T.openCount=0;t.a=T}}]);