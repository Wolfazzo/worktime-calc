var it=Object.defineProperty,ft=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var G=(n,s,f)=>s in n?it(n,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[s]=f,k=(n,s)=>{for(var f in s||(s={}))Z.call(s,f)&&G(n,f,s[f]);if(x)for(var f of x(s))Q.call(s,f)&&G(n,f,s[f]);return n},X=(n,s)=>ft(n,at(s));var L=(n,s)=>{var f={};for(var l in n)Z.call(n,l)&&s.indexOf(l)<0&&(f[l]=n[l]);if(n!=null&&x)for(var l of x(n))s.indexOf(l)<0&&Q.call(n,l)&&(f[l]=n[l]);return f};function pt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var b={exports:{}},r={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J;function lt(){if(J)return r;J=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),w=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),g=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=g&&t[g]||t["@@iterator"],typeof t=="function"?t:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,q={};function v(t,e,u){this.props=t,this.context=e,this.refs=q,this.updater=u||Y}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D(){}D.prototype=v.prototype;function $(t,e,u){this.props=t,this.context=e,this.refs=q,this.updater=u||Y}var P=$.prototype=new D;P.constructor=$,U(P,v.prototype),P.isPureReactComponent=!0;var z=Array.isArray;function j(){}var a={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function O(t,e,u){var o=u.ref;return{$$typeof:n,type:t,key:e,ref:o!==void 0?o:null,props:u}}function rt(t,e){return O(t.type,e,t.props)}function H(t){return typeof t=="object"&&t!==null&&t.$$typeof===n}function nt(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(u){return e[u]})}var K=/\/+/g;function N(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nt(""+t.key):e.toString(36)}function ot(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(j,j):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function m(t,e,u,o,c){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var p=!1;if(t===null)p=!0;else switch(i){case"bigint":case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case n:case s:p=!0;break;case T:return p=t._init,m(p(t._payload),e,u,o,c)}}if(p)return c=c(t),p=o===""?"."+N(t,0):o,z(c)?(u="",p!=null&&(u=p.replace(K,"$&/")+"/"),m(c,e,u,"",function(ct){return ct})):c!=null&&(H(c)&&(c=rt(c,u+(c.key==null||t&&t.key===c.key?"":(""+c.key).replace(K,"$&/")+"/")+p)),e.push(c)),1;p=0;var _=o===""?".":o+":";if(z(t))for(var y=0;y<t.length;y++)o=t[y],i=_+N(o,y),p+=m(o,e,u,i,c);else if(y=et(t),typeof y=="function")for(t=y.call(t),y=0;!(o=t.next()).done;)o=o.value,i=_+N(o,y++),p+=m(o,e,u,i,c);else if(i==="object"){if(typeof t.then=="function")return m(ot(t),e,u,o,c);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return p}function A(t,e,u){if(t==null)return t;var o=[],c=0;return m(t,o,"","",function(i){return e.call(u,i,c++)}),o}function ut(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(u){(t._status===0||t._status===-1)&&(t._status=1,t._result=u)},function(u){(t._status===0||t._status===-1)&&(t._status=2,t._result=u)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var W=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},st={map:A,forEach:function(t,e,u){A(t,function(){e.apply(this,arguments)},u)},count:function(t){var e=0;return A(t,function(){e++}),e},toArray:function(t){return A(t,function(e){return e})||[]},only:function(t){if(!H(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};return r.Activity=M,r.Children=st,r.Component=v,r.Fragment=f,r.Profiler=R,r.PureComponent=$,r.StrictMode=l,r.Suspense=S,r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,r.__COMPILER_RUNTIME={__proto__:null,c:function(t){return a.H.useMemoCache(t)}},r.cache=function(t){return function(){return t.apply(null,arguments)}},r.cacheSignal=function(){return null},r.cloneElement=function(t,e,u){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var o=U({},t.props),c=t.key;if(e!=null)for(i in e.key!==void 0&&(c=""+e.key),e)!B.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(o[i]=e[i]);var i=arguments.length-2;if(i===1)o.children=u;else if(1<i){for(var p=Array(i),_=0;_<i;_++)p[_]=arguments[_+2];o.children=p}return O(t.type,c,o)},r.createContext=function(t){return t={$$typeof:w,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:E,_context:t},t},r.createElement=function(t,e,u){var o,c={},i=null;if(e!=null)for(o in e.key!==void 0&&(i=""+e.key),e)B.call(e,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(c[o]=e[o]);var p=arguments.length-2;if(p===1)c.children=u;else if(1<p){for(var _=Array(p),y=0;y<p;y++)_[y]=arguments[y+2];c.children=_}if(t&&t.defaultProps)for(o in p=t.defaultProps,p)c[o]===void 0&&(c[o]=p[o]);return O(t,i,c)},r.createRef=function(){return{current:null}},r.forwardRef=function(t){return{$$typeof:h,render:t}},r.isValidElement=H,r.lazy=function(t){return{$$typeof:T,_payload:{_status:-1,_result:t},_init:ut}},r.memo=function(t,e){return{$$typeof:I,type:t,compare:e===void 0?null:e}},r.startTransition=function(t){var e=a.T,u={};a.T=u;try{var o=t(),c=a.S;c!==null&&c(u,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(j,W)}catch(i){W(i)}finally{e!==null&&u.types!==null&&(e.types=u.types),a.T=e}},r.unstable_useCacheRefresh=function(){return a.H.useCacheRefresh()},r.use=function(t){return a.H.use(t)},r.useActionState=function(t,e,u){return a.H.useActionState(t,e,u)},r.useCallback=function(t,e){return a.H.useCallback(t,e)},r.useContext=function(t){return a.H.useContext(t)},r.useDebugValue=function(){},r.useDeferredValue=function(t,e){return a.H.useDeferredValue(t,e)},r.useEffect=function(t,e){return a.H.useEffect(t,e)},r.useEffectEvent=function(t){return a.H.useEffectEvent(t)},r.useId=function(){return a.H.useId()},r.useImperativeHandle=function(t,e,u){return a.H.useImperativeHandle(t,e,u)},r.useInsertionEffect=function(t,e){return a.H.useInsertionEffect(t,e)},r.useLayoutEffect=function(t,e){return a.H.useLayoutEffect(t,e)},r.useMemo=function(t,e){return a.H.useMemo(t,e)},r.useOptimistic=function(t,e){return a.H.useOptimistic(t,e)},r.useReducer=function(t,e,u){return a.H.useReducer(t,e,u)},r.useRef=function(t){return a.H.useRef(t)},r.useState=function(t){return a.H.useState(t)},r.useSyncExternalStore=function(t,e,u){return a.H.useSyncExternalStore(t,e,u)},r.useTransition=function(){return a.H.useTransition()},r.version="19.2.4",r}var V;function yt(){return V||(V=1,b.exports=lt()),b.exports}var C=yt();const xt=pt(C);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(...n)=>n.filter((s,f,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===f).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,l)=>l?l.toUpperCase():f.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=n=>{const s=Et(n);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ht={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=n=>{for(const s in n)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=C.forwardRef((I,S)=>{var T=I,{color:n="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:l,className:R="",children:E,iconNode:w}=T,h=L(T,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return C.createElement("svg",k(k(X(k({ref:S},ht),{width:s,height:s,stroke:n,strokeWidth:l?Number(f)*24/Number(s):f,className:tt("lucide",R)}),!E&&!dt(h)&&{"aria-hidden":"true"}),h),[...w.map(([M,g])=>C.createElement(M,g)),...Array.isArray(E)?E:[E]])});/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(n,s)=>{const f=C.forwardRef((w,E)=>{var h=w,{className:l}=h,R=L(h,["className"]);return C.createElement(vt,k({ref:E,iconNode:s,className:tt(`lucide-${_t(F(n))}`,`lucide-${n}`,l)},R))});return f.displayName=F(n),f};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],St=d("calculator",mt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Mt=d("circle-alert",Ct);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$t=d("circle-check",Rt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Pt=d("circle-play",Tt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],jt=d("circle-stop",kt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ot=d("clock",wt);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ht=d("refresh-cw",gt);export{Ot as C,Ht as R,C as a,Pt as b,jt as c,St as d,Mt as e,$t as f,pt as g,xt as h,yt as r};
