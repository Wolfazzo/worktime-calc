function et(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var O={exports:{}},r={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function rt(){if(z)return r;z=1;var c=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),w=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),H=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,b={};function d(t,e,o){this.props=t,this.context=e,this.refs=b,this.updater=o||N}d.prototype.isReactComponent={},d.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},d.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I(){}I.prototype=d.prototype;function x(t,e,o){this.props=t,this.context=e,this.refs=b,this.updater=o||N}var S=x.prototype=new I;S.constructor=x,L(S,d.prototype),S.isPureReactComponent=!0;var Y=Array.isArray;function M(){}var i={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function $(t,e,o){var n=o.ref;return{$$typeof:c,type:t,key:e,ref:n!==void 0?n:null,props:o}}function Q(t,e){return $(t.type,e,t.props)}function P(t){return typeof t=="object"&&t!==null&&t.$$typeof===c}function X(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(o){return e[o]})}var q=/\/+/g;function j(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X(""+t.key):e.toString(36)}function J(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(M,M):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function v(t,e,o,n,u){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var f=!1;if(t===null)f=!0;else switch(s){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case c:case a:f=!0;break;case T:return f=t._init,v(f(t._payload),e,o,n,u)}}if(f)return u=u(t),f=n===""?"."+j(t,0):n,Y(u)?(o="",f!=null&&(o=f.replace(q,"$&/")+"/"),v(u,e,o,"",function(tt){return tt})):u!=null&&(P(u)&&(u=Q(u,o+(u.key==null||t&&t.key===u.key?"":(""+u.key).replace(q,"$&/")+"/")+f)),e.push(u)),1;f=0;var _=n===""?".":n+":";if(Y(t))for(var p=0;p<t.length;p++)n=t[p],s=_+j(n,p),f+=v(n,e,o,s,u);else if(p=Z(t),typeof p=="function")for(t=p.call(t),p=0;!(n=t.next()).done;)n=n.value,s=_+j(n,p++),f+=v(n,e,o,s,u);else if(s==="object"){if(typeof t.then=="function")return v(J(t),e,o,n,u);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return f}function k(t,e,o){if(t==null)return t;var n=[],u=0;return v(t,n,"","",function(s){return e.call(o,s,u++)}),n}function V(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o)},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var D=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},F={map:k,forEach:function(t,e,o){k(t,function(){e.apply(this,arguments)},o)},count:function(t){var e=0;return k(t,function(){e++}),e},toArray:function(t){return k(t,function(e){return e})||[]},only:function(t){if(!P(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};return r.Activity=G,r.Children=F,r.Component=d,r.Fragment=l,r.Profiler=C,r.PureComponent=x,r.StrictMode=y,r.Suspense=g,r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,r.__COMPILER_RUNTIME={__proto__:null,c:function(t){return i.H.useMemoCache(t)}},r.cache=function(t){return function(){return t.apply(null,arguments)}},r.cacheSignal=function(){return null},r.cloneElement=function(t,e,o){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=L({},t.props),u=t.key;if(e!=null)for(s in e.key!==void 0&&(u=""+e.key),e)!U.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=o;else if(1<s){for(var f=Array(s),_=0;_<s;_++)f[_]=arguments[_+2];n.children=f}return $(t.type,u,n)},r.createContext=function(t){return t={$$typeof:w,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:E,_context:t},t},r.createElement=function(t,e,o){var n,u={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)U.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(u[n]=e[n]);var f=arguments.length-2;if(f===1)u.children=o;else if(1<f){for(var _=Array(f),p=0;p<f;p++)_[p]=arguments[p+2];u.children=_}if(t&&t.defaultProps)for(n in f=t.defaultProps,f)u[n]===void 0&&(u[n]=f[n]);return $(t,s,u)},r.createRef=function(){return{current:null}},r.forwardRef=function(t){return{$$typeof:R,render:t}},r.isValidElement=P,r.lazy=function(t){return{$$typeof:T,_payload:{_status:-1,_result:t},_init:V}},r.memo=function(t,e){return{$$typeof:A,type:t,compare:e===void 0?null:e}},r.startTransition=function(t){var e=i.T,o={};i.T=o;try{var n=t(),u=i.S;u!==null&&u(o,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(M,D)}catch(s){D(s)}finally{e!==null&&o.types!==null&&(e.types=o.types),i.T=e}},r.unstable_useCacheRefresh=function(){return i.H.useCacheRefresh()},r.use=function(t){return i.H.use(t)},r.useActionState=function(t,e,o){return i.H.useActionState(t,e,o)},r.useCallback=function(t,e){return i.H.useCallback(t,e)},r.useContext=function(t){return i.H.useContext(t)},r.useDebugValue=function(){},r.useDeferredValue=function(t,e){return i.H.useDeferredValue(t,e)},r.useEffect=function(t,e){return i.H.useEffect(t,e)},r.useEffectEvent=function(t){return i.H.useEffectEvent(t)},r.useId=function(){return i.H.useId()},r.useImperativeHandle=function(t,e,o){return i.H.useImperativeHandle(t,e,o)},r.useInsertionEffect=function(t,e){return i.H.useInsertionEffect(t,e)},r.useLayoutEffect=function(t,e){return i.H.useLayoutEffect(t,e)},r.useMemo=function(t,e){return i.H.useMemo(t,e)},r.useOptimistic=function(t,e){return i.H.useOptimistic(t,e)},r.useReducer=function(t,e,o){return i.H.useReducer(t,e,o)},r.useRef=function(t){return i.H.useRef(t)},r.useState=function(t){return i.H.useState(t)},r.useSyncExternalStore=function(t,e,o){return i.H.useSyncExternalStore(t,e,o)},r.useTransition=function(){return i.H.useTransition()},r.version="19.2.4",r}var B;function nt(){return B||(B=1,O.exports=rt()),O.exports}var m=nt();const ht=et(m);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(...c)=>c.filter((a,l,y)=>!!a&&a.trim()!==""&&y.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,y)=>y?y.toUpperCase():l.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=c=>{const a=ut(c);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var st={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=c=>{for(const a in c)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=m.forwardRef(({color:c="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:y,className:C="",children:E,iconNode:w,...R},g)=>m.createElement("svg",{ref:g,...st,width:a,height:a,stroke:c,strokeWidth:y?Number(l)*24/Number(a):l,className:W("lucide",C),...!E&&!ct(R)&&{"aria-hidden":"true"},...R},[...w.map(([A,T])=>m.createElement(A,T)),...Array.isArray(E)?E:[E]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(c,a)=>{const l=m.forwardRef(({className:y,...C},E)=>m.createElement(it,{ref:E,iconNode:a,className:W("lucide-".concat(ot(K(c))),"lucide-".concat(c),y),...C}));return l.displayName=K(c),l};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],dt=h("calculator",ft);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],vt=h("circle-alert",at);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mt=h("circle-check",pt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ct=h("circle-play",lt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],Rt=h("circle-stop",yt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tt=h("clock",_t);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],kt=h("refresh-cw",Et);export{Tt as C,kt as R,m as a,Ct as b,Rt as c,dt as d,vt as e,mt as f,et as g,ht as h,nt as r};
