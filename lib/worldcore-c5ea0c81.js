"use strict";
(globalThis["webpackChunk_croquet_microverse"] = globalThis["webpackChunk_croquet_microverse"] || []).push([["vendors-node_modules_croquet_worldcore-kernel_src_Mixins_js"],{

/***/ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/croquet/cjs/croquet-croquet.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Copyright Croquet Corporation 2023
 * Bundle of @croquet/croquet
 * Date: 2023-04-07
 * Version: 1.1.0-21
 */

if(Object.defineProperty(exports,"__esModule",{value:!0}),void 0===globalThis.TextEncoder){globalThis.TextEncoder=function(){},TextEncoder.prototype.encode=function(t){for(var e=t.length,s=-1,n="undefined"==typeof Uint8Array?new Array(1.5*e):new Uint8Array(3*e),i=0,o=0,r=0;r!==e;){if(i=t.charCodeAt(r),r+=1,i>=55296&&i<=56319){if(r===e){n[s+=1]=239,n[s+=1]=191,n[s+=1]=189;break}if(!((o=t.charCodeAt(r))>=56320&&o<=57343)){n[s+=1]=239,n[s+=1]=191,n[s+=1]=189;continue}if(r+=1,(i=1024*(i-55296)+o-56320+65536)>65535){n[s+=1]=240|i>>>18,n[s+=1]=128|i>>>12&63,n[s+=1]=128|i>>>6&63,n[s+=1]=128|63&i;continue}}i<=127?n[s+=1]=0|i:i<=2047?(n[s+=1]=192|i>>>6,n[s+=1]=128|63&i):(n[s+=1]=224|i>>>12,n[s+=1]=128|i>>>6&63,n[s+=1]=128|63&i)}return"undefined"!=typeof Uint8Array?n.subarray(0,s+1):(n.length=s+1,n)},TextEncoder.prototype.toString=function(){return"[object TextEncoder]"};try{Object.defineProperty(TextEncoder.prototype,"encoding",{get:function(){if(TextEncoder.prototype.isPrototypeOf(this))return"utf-8";throw TypeError("Illegal invocation")}})}catch(t){TextEncoder.prototype.encoding="utf-8"}"undefined"!=typeof Symbol&&(TextEncoder.prototype[Symbol.toStringTag]="TextEncoder")}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};!function(t){var e=function(t){var e,s=Object.prototype,n=s.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",r=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function l(t,e,s){return Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,s){return t[e]=s}}function c(t,e,s,n){var i=e&&e.prototype instanceof b?e:b,o=Object.create(i.prototype),r=new W(n||[]);return o._invoke=function(t,e,s){var n=h;return function(i,o){if(n===m)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return C()}for(s.method=i,s.arg=o;;){var r=s.delegate;if(r){var a=G(r,s);if(a){if(a===f)continue;return a}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(n===h)throw n=p,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);n=m;var l=d(t,e,s);if("normal"===l.type){if(n=s.done?p:u,l.arg===f)continue;return{value:l.arg,done:s.done}}"throw"===l.type&&(n=p,s.method="throw",s.arg=l.arg)}}}(t,s,r),o}function d(t,e,s){try{return{type:"normal",arg:t.call(e,s)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h="suspendedStart",u="suspendedYield",m="executing",p="completed",f={};function b(){}function y(){}function g(){}var Z={};l(Z,o,(function(){return this}));var w=Object.getPrototypeOf,X=w&&w(w(T([])));X&&X!==s&&n.call(X,o)&&(Z=X);var v=g.prototype=b.prototype=Object.create(Z);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function s(i,o,r,a){var l=d(t[i],t,o);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){s("next",t,r,a)}),(function(t){s("throw",t,r,a)})):e.resolve(h).then((function(t){c.value=t,r(c)}),(function(t){return s("throw",t,r,a)}))}a(l.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){s(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function G(t,s){var n=t.iterator[s.method];if(n===e){if(s.delegate=null,"throw"===s.method){if(t.iterator.return&&(s.method="return",s.arg=e,G(t,s),"throw"===s.method))return f;s.method="throw",s.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=d(n,t.iterator,s.arg);if("throw"===i.type)return s.method="throw",s.arg=i.arg,s.delegate=null,f;var o=i.arg;return o?o.done?(s[t.resultName]=o.value,s.next=t.nextLoc,"return"!==s.method&&(s.method="next",s.arg=e),s.delegate=null,f):o:(s.method="throw",s.arg=new TypeError("iterator result is not an object"),s.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function W(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var s=t[o];if(s)return s.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function s(){for(;++i<t.length;)if(n.call(t,i))return s.value=t[i],s.done=!1,s;return s.value=e,s.done=!0,s};return r.next=r}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=g,l(v,"constructor",g),l(g,"constructor",y),y.displayName=l(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},L(x.prototype),l(x.prototype,r,(function(){return this})),t.AsyncIterator=x,t.async=function(e,s,n,i,o){void 0===o&&(o=Promise);var r=new x(c(e,s,n,i),o);return t.isGeneratorFunction(s)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},L(v),l(v,a,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var s in t)e.push(s);return e.reverse(),function s(){for(;e.length;){var n=e.pop();if(n in t)return s.value=n,s.done=!1,s}return s.done=!0,s}},t.values=T,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var s in this)"t"===s.charAt(0)&&n.call(this,s)&&!isNaN(+s.slice(1))&&(this[s]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var s=this;function i(n,i){return a.type="throw",a.arg=t,s.next=n,i&&(s.method="next",s.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var l=n.call(r,"catchLoc"),c=n.call(r,"finallyLoc");if(l&&c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.finallyLoc===t)return this.complete(s.completion,s.afterLoc),k(s),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.tryLoc===t){var n=s.completion;if("throw"===n.type){var i=n.arg;k(s)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,s,n){return this.delegate={iterator:T(t),resultName:s,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{globalThis.regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}({exports:{}});const e={CROQUET_VERSION:"1.1.0-21"},s=window.location.hostname.endsWith("croquet.studio");let n="",i="";function o(t,e){if(e)for(const s of e.split("&")){const e=s.split("="),n=e[0];let i=!0;if(e.length>1&&(i=decodeURIComponent(e.slice(1).join("=")),i.match(/^(true|false|null|[0-9.]*|["[{].*)$/)))try{i=JSON.parse(i)}catch(t){"["===i[0]&&(i=i.slice(1,-1).split(","))}t[n]=i}}const r=new class{constructor(){this.getSession(),o(this,window.location.search.slice(1)),o(this,s?window.location.hash.slice(1):i),window.location.pathname.indexOf("/ar.html")>=0&&(this.ar=!0)}has(t,e,s){"boolean"!=typeof s&&(s=this.isHost(s));const n=this[t];if("string"!=typeof n)return s;const i=n.split(",");return!0===s&&(e=`no${e}`),e.endsWith("s")&&(e=e.slice(0,-1)),i.includes(e)||i.includes(`${e}s`)?!s:s}getSession(){if(s){const t=/^\/([^/]+)\/(.*)$/,e=window.location.pathname.match(t);if(e)return n=e[1],e[2]}else{const t=/^#([^&]+)&?(.*)$/,e=window.location.hash.match(t);if(e)return e[1].includes("=")?(i=`${e[1]}&${e[2]}`,""):(i=e[2],e[1])}return"string"==typeof this.session?(i=window.location.hash.slice(1),this.session):""}setSession(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null==s&&this.getSession();const{search:o,hash:r}=window.location,a=s?`/${n}/${t}${o}${r}`:`#${t}${i?"&"+i:""}`;e?window.history.replaceState({},"",a):window.history.pushState({},"",a)}isHost(t){const e=window.location.hostname;if(e===t)return!0;if("localhost"!==t)return!1;if(e.endsWith(".ngrok.io"))return!0;if("croquet.io"===e){if(window.location.pathname.match(/^\/(dev|files)\//))return!0}return["127.0.0.1","[::1]"].includes(e)}isLocalhost(){return this.isHost("localhost")}};var a,l,c,d={exports:{}};l=t,c=function(t){var e=function(t){return new e.lib.init(t)};function s(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function n(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,style:{background:""}},e.lib=e.prototype={toastify:"1.11.2",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var n=document.createElement("img");n.src=this.options.avatar,n.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(n):t.insertAdjacentElement("afterbegin",n)}if(!0===this.options.close){var i=document.createElement("span");i.innerHTML="&#10006;",i.className="toast-close",i.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var o=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&o>360?t.insertAdjacentElement("afterbegin",i):t.appendChild(i)}if(this.options.stopOnFocus&&this.options.duration>0){var r=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){r.removeElement(t)}),r.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var a=s("x",this.options),l=s("y",this.options),c="left"==this.options.position?a:"-"+a,d="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+c+","+d+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var s=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,s),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},s={top:15,bottom:15},i={top:15,bottom:15},o=document.getElementsByClassName("toastify"),r=0;r<o.length;r++){t=!0===n(o[r],"toastify-top")?"toastify-top":"toastify-bottom";var a=o[r].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(o[r].style[t]=i[t]+"px",i[t]+=a+15):!0===n(o[r],"toastify-left")?(o[r].style[t]=e[t]+"px",e[t]+=a+15):(o[r].style[t]=s[t]+"px",s[t]+=a+15)}return this},e.lib.init.prototype=e.lib,e},(a=d).exports?a.exports=c():l.Toastify=c();var h=d.exports,u={exports:{}};!function(e){!function(t,s,n){var i,o=256,r=n.pow(o,6),a=n.pow(2,52),l=2*a,c=255;function d(e,c,d){var b=[],y=p(m((c=1==c?{entropy:!0}:c||{}).entropy?[e,f(s)]:null==e?function(){try{var e;return i&&(e=i.randomBytes)?e=e(o):(e=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(e)),f(e)}catch(e){var n=t.navigator,r=n&&n.plugins;return[+new Date,t,r,t.screen,f(s)]}}():e,3),b),g=new h(b),Z=function(){for(var t=g.g(6),e=r,s=0;t<a;)t=(t+s)*o,e*=o,s=g.g(1);for(;t>=l;)t/=2,e/=2,s>>>=1;return(t+s)/e};return Z.int32=function(){return 0|g.g(4)},Z.quick=function(){return g.g(4)/4294967296},Z.double=Z,p(f(g.S),s),(c.pass||d||function(t,e,s,i){return i&&(i.S&&u(i,g),t.state=function(){return u(g,{})}),s?(n.random=t,e):t})(Z,y,"global"in c?c.global:this==n,c.state)}function h(t){var e,s=t.length,n=this,i=0,r=n.i=n.j=0,a=n.S=[];for(s||(t=[s++]);i<o;)a[i]=i++;for(i=0;i<o;i++)a[i]=a[r=c&r+t[i%s]+(e=a[i])],a[r]=e;(n.g=function(t){for(var e,s=0,i=n.i,r=n.j,a=n.S;t--;)e=a[i=c&i+1],s=s*o+a[c&(a[i]=a[r=c&r+e])+(a[r]=e)];return n.i=i,n.j=r,s})(o)}function u(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function m(t,e){var s,n=[],i=typeof t;if(e&&"object"==i)for(s in t)try{n.push(m(t[s],e-1))}catch(t){}return n.length?n:"string"==i?t:t+"\0"}function p(t,e){for(var s,n=t+"",i=0;i<n.length;)e[c&i]=c&(s^=19*e[c&i])+n.charCodeAt(i++);return f(e)}function f(t){return String.fromCharCode.apply(0,t)}if(p(n.random(),s),e.exports){e.exports=d;try{i=undefined}catch(t){}}else n.seedrandom=d}("undefined"!=typeof self?self:t,[],Math)}(u);var m,p=u.exports;!function(){function t(t){this.mode=s.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var i=[],o=this.data.charCodeAt(e);o>65536?(i[0]=240|(1835008&o)>>>18,i[1]=128|(258048&o)>>>12,i[2]=128|(4032&o)>>>6,i[3]=128|63&o):o>2048?(i[0]=224|(61440&o)>>>12,i[1]=128|(4032&o)>>>6,i[2]=128|63&o):o>128?(i[0]=192|(1984&o)>>>6,i[1]=128|63&o):i[0]=o,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,s=this.parsedData.length;e<s;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var s=new t(e);this.dataList.push(s),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,s){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[n][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,s),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,s)},setupPositionProbePattern:function(t,e){for(var s=-1;s<=7;s++)if(!(t+s<=-1||this.moduleCount<=t+s))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+s][e+n]=0<=s&&s<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==s||6==s)||2<=s&&s<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,s=0;s<8;s++){this.makeImpl(!0,s);var n=u.getLostPoint(this);(0==s||t>n)&&(t=n,e=s)}return e},createMovieClip:function(t,e,s){var n=t.createEmptyMovieClip(e,s);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,r=0;r<this.modules[i].length;r++){var a=1*r;this.modules[i][r]&&(n.beginFill(0,100),n.moveTo(a,o),n.lineTo(a+1,o),n.lineTo(a+1,o+1),n.lineTo(a,o+1),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=u.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var s=0;s<t.length;s++){var n=t[e],i=t[s];if(null==this.modules[n][i])for(var o=-2;o<=2;o++)for(var r=-2;r<=2;r++)this.modules[n+o][i+r]=-2==o||2==o||-2==r||2==r||0==o&&0==r}},setupTypeNumber:function(t){for(var e=u.getBCHTypeNumber(this.typeNumber),s=0;s<18;s++){var n=!t&&1==(e>>s&1);this.modules[Math.floor(s/3)][s%3+this.moduleCount-8-3]=n}for(s=0;s<18;s++){n=!t&&1==(e>>s&1);this.modules[s%3+this.moduleCount-8-3][Math.floor(s/3)]=n}},setupTypeInfo:function(t,e){for(var s=this.errorCorrectLevel<<3|e,n=u.getBCHTypeInfo(s),i=0;i<15;i++){var o=!t&&1==(n>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!t&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var s=-1,n=this.moduleCount-1,i=7,o=0,r=this.moduleCount-1;r>0;r-=2)for(6==r&&r--;;){for(var a=0;a<2;a++)if(null==this.modules[n][r-a]){var l=!1;o<t.length&&(l=1==(t[o]>>>i&1)),u.getMask(e,n,r-a)&&(l=!l),this.modules[n][r-a]=l,-1==--i&&(o++,i=7)}if((n+=s)<0||this.moduleCount<=n){n-=s,s=-s;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,s,n){for(var i=y.getRSBlocks(t,s),o=new g,r=0;r<n.length;r++){var a=n[r];o.put(a.mode,4),o.put(a.getLength(),u.getLengthInBits(a.mode,t)),a.write(o)}var l=0;for(r=0;r<i.length;r++)l+=i[r].dataCount;if(o.getLengthInBits()>8*l)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*l+")");for(o.getLengthInBits()+4<=8*l&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*l||(o.put(e.PAD0,8),o.getLengthInBits()>=8*l));)o.put(e.PAD1,8);return e.createBytes(o,i)},e.createBytes=function(t,e){for(var s=0,n=0,i=0,o=new Array(e.length),r=new Array(e.length),a=0;a<e.length;a++){var l=e[a].dataCount,c=e[a].totalCount-l;n=Math.max(n,l),i=Math.max(i,c),o[a]=new Array(l);for(var d=0;d<o[a].length;d++)o[a][d]=255&t.buffer[d+s];s+=l;var h=u.getErrorCorrectPolynomial(c),m=new b(o[a],h.getLength()-1).mod(h);r[a]=new Array(h.getLength()-1);for(d=0;d<r[a].length;d++){var p=d+m.getLength()-r[a].length;r[a][d]=p>=0?m.get(p):0}}var f=0;for(d=0;d<e.length;d++)f+=e[d].totalCount;var y=new Array(f),g=0;for(d=0;d<n;d++)for(a=0;a<e.length;a++)d<o[a].length&&(y[g++]=o[a][d]);for(d=0;d<i;d++)for(a=0;a<e.length;a++)d<r[a].length&&(y[g++]=r[a][d]);return y};for(var s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},i=0,o=1,r=2,a=3,l=4,c=5,d=6,h=7,u={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;u.getBCHDigit(e)-u.getBCHDigit(u.G15)>=0;)e^=u.G15<<u.getBCHDigit(e)-u.getBCHDigit(u.G15);return(t<<10|e)^u.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;u.getBCHDigit(e)-u.getBCHDigit(u.G18)>=0;)e^=u.G18<<u.getBCHDigit(e)-u.getBCHDigit(u.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return u.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,s){switch(t){case i:return(e+s)%2==0;case o:return e%2==0;case r:return s%3==0;case a:return(e+s)%3==0;case l:return(Math.floor(e/2)+Math.floor(s/3))%2==0;case c:return e*s%2+e*s%3==0;case d:return(e*s%2+e*s%3)%2==0;case h:return(e*s%3+(e+s)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new b([1],0),s=0;s<t;s++)e=e.multiply(new b([1,p.gexp(s)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:case s.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),s=0,n=0;n<e;n++)for(var i=0;i<e;i++){for(var o=0,r=t.isDark(n,i),a=-1;a<=1;a++)if(!(n+a<0||e<=n+a))for(var l=-1;l<=1;l++)i+l<0||e<=i+l||0==a&&0==l||r==t.isDark(n+a,i+l)&&o++;o>5&&(s+=3+o-5)}for(n=0;n<e-1;n++)for(i=0;i<e-1;i++){var c=0;t.isDark(n,i)&&c++,t.isDark(n+1,i)&&c++,t.isDark(n,i+1)&&c++,t.isDark(n+1,i+1)&&c++,0!=c&&4!=c||(s+=3)}for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(n,i)&&!t.isDark(n,i+1)&&t.isDark(n,i+2)&&t.isDark(n,i+3)&&t.isDark(n,i+4)&&!t.isDark(n,i+5)&&t.isDark(n,i+6)&&(s+=40);for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(n,i)&&!t.isDark(n+1,i)&&t.isDark(n+2,i)&&t.isDark(n+3,i)&&t.isDark(n+4,i)&&!t.isDark(n+5,i)&&t.isDark(n+6,i)&&(s+=40);var d=0;for(i=0;i<e;i++)for(n=0;n<e;n++)t.isDark(n,i)&&d++;return s+=10*(Math.abs(100*d/e/e-50)/5)}},p={glog:function(t){if(t<1)throw new Error("glog("+t+")");return p.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return p.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},f=0;f<8;f++)p.EXP_TABLE[f]=1<<f;for(f=8;f<256;f++)p.EXP_TABLE[f]=p.EXP_TABLE[f-4]^p.EXP_TABLE[f-5]^p.EXP_TABLE[f-6]^p.EXP_TABLE[f-8];for(f=0;f<255;f++)p.LOG_TABLE[p.EXP_TABLE[f]]=f;function b(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var s=0;s<t.length&&0==t[s];)s++;this.num=new Array(t.length-s+e);for(var n=0;n<t.length-s;n++)this.num[n]=t[n+s]}function y(t,e){this.totalCount=t,this.dataCount=e}function g(){this.buffer=[],this.length=0}b.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),s=0;s<this.getLength();s++)for(var n=0;n<t.getLength();n++)e[s+n]^=p.gexp(p.glog(this.get(s))+p.glog(t.get(n)));return new b(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=p.glog(this.get(0))-p.glog(t.get(0)),s=new Array(this.getLength()),n=0;n<this.getLength();n++)s[n]=this.get(n);for(n=0;n<t.getLength();n++)s[n]^=p.gexp(p.glog(t.get(n))+e);return new b(s,0).mod(t)}},y.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],y.getRSBlocks=function(t,e){var s=y.getRsBlockTable(t,e);if(null==s)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=s.length/3,i=[],o=0;o<n;o++)for(var r=s[3*o+0],a=s[3*o+1],l=s[3*o+2],c=0;c<r;c++)i.push(new y(a,l));return i},y.getRsBlockTable=function(t,e){switch(e){case n.L:return y.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return y.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return y.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return y.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},g.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var s=0;s<e;s++)this.putBit(1==(t>>>e-s-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Z=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],w=function(){var t=function(t,e){this._bIsPainted=!1,this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._bSupportDataURI=null};return t.prototype.draw=function(t){var e=this._oContext,s=this._htOption,n=t.getModuleCount(),i=s.width/n,o=s.height/n,r=Math.round(i),a=Math.round(o);this.clear();for(var l=0;l<n;l++)for(var c=0;c<n;c++){var d=t.isDark(l,c),h=c*i,u=l*o;e.strokeStyle=d?s.colorDark:s.colorLight,e.lineWidth=1,e.fillStyle=d?s.colorDark:s.colorLight,e.fillRect(h,u,i,o),e.strokeRect(Math.floor(h)+.5,Math.floor(u)+.5,r,a),e.strokeRect(Math.ceil(h)-.5,Math.ceil(u)-.5,r,a)}this._bIsPainted=!0},t.prototype.isPainted=function(){return this._bIsPainted},t.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},t.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},t}();function X(t,e){for(var s=1,i=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),o=0,r=Z.length;o<=r;o++){var a=0;switch(e){case n.L:a=Z[o][0];break;case n.M:a=Z[o][1];break;case n.Q:a=Z[o][2];break;case n.H:a=Z[o][3]}if(i<=a)break;s++}if(s>Z.length)throw new Error("Too long data");return s}m=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.H},"string"==typeof e&&(e={text:e}),e)for(var s in e)this._htOption[s]=e[s];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(w=svgDrawer),this._el=t,this._oQRCode=null,this._oDrawing=new w(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},m.prototype.makeCode=function(t){this._oQRCode=new e(X(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._oDrawing.draw(this._oQRCode)},m.prototype.clear=function(){this._oDrawing.clear()},m.prototype.getCanvas=function(){for(let t=0;t<this._el.children.length;t++){const e=this._el.children[t];if("CANVAS"===e.tagName)return e}return null},m.CorrectLevel=n}();var f,b=m,y=function(t,e){e||(e={}),"function"==typeof e&&(e={cmp:e});var s,n="boolean"==typeof e.cycles&&e.cycles,i=e.cmp&&(s=e.cmp,function(t){return function(e,n){var i={key:e,value:t[e]},o={key:n,value:t[n]};return s(i,o)}}),o=[];return function t(e){if(e&&e.toJSON&&"function"==typeof e.toJSON&&(e=e.toJSON()),void 0!==e){if("number"==typeof e)return isFinite(e)?""+e:"null";if("object"!=typeof e)return JSON.stringify(e);var s,r;if(Array.isArray(e)){for(r="[",s=0;s<e.length;s++)s&&(r+=","),r+=t(e[s])||"null";return r+"]"}if(null===e)return"null";if(-1!==o.indexOf(e)){if(n)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var a=o.push(e)-1,l=Object.keys(e).sort(i&&i(e));for(r="",s=0;s<l.length;s++){var c=l[s],d=t(e[c]);d&&(r&&(r+=","),r+=JSON.stringify(c)+":"+d)}return o.splice(a,1),"{"+r+"}"}}(t)},g={exports:{}},Z={exports:{}};Z.exports=(f=f||function(e,s){var n;if("undefined"!=typeof window&&window.crypto&&(n=window.crypto),"undefined"!=typeof self&&self.crypto&&(n=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(n=globalThis.crypto),!n&&"undefined"!=typeof window&&window.msCrypto&&(n=window.msCrypto),!n&&void 0!==t&&t.crypto&&(n=t.crypto),!n)try{n=__webpack_require__(/*! crypto */ "?985c")}catch(t){}var i=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function t(){}return function(e){var s;return t.prototype=e,s=new t,t.prototype=null,s}}(),r={},a=r.lib={},l=a.Base={extend:function(t){var e=o(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=a.WordArray=l.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=e!=s?e:4*t.length},toString:function(t){return(t||h).stringify(this)},concat:function(t){var e=this.words,s=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var r=s[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=r<<24-(n+o)%4*8}else for(var a=0;a<i;a+=4)e[n+a>>>2]=s[a>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,s=this.sigBytes;t[s>>>2]&=4294967295<<32-s%4*8,t.length=e.ceil(s/4)},clone:function(){var t=l.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],s=0;s<t;s+=4)e.push(i());return new c.init(e,t)}}),d=r.enc={},h=d.Hex={stringify:function(t){for(var e=t.words,s=t.sigBytes,n=[],i=0;i<s;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,s=[],n=0;n<e;n+=2)s[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new c.init(s,e/2)}},u=d.Latin1={stringify:function(t){for(var e=t.words,s=t.sigBytes,n=[],i=0;i<s;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,s=[],n=0;n<e;n++)s[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new c.init(s,e)}},m=d.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},p=a.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=m.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var s,n=this._data,i=n.words,o=n.sigBytes,r=this.blockSize,a=o/(4*r),l=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*r,d=e.min(4*l,o);if(l){for(var h=0;h<l;h+=r)this._doProcessBlock(i,h);s=i.splice(0,l),n.sigBytes-=d}return new c.init(s,d)},clone:function(){var t=l.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});a.Hasher=p.extend({cfg:l.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,s){return new t.init(s).finalize(e)}},_createHmacHelper:function(t){return function(e,s){return new f.HMAC.init(t,s).finalize(e)}}});var f=r.algo={};return r}(Math),f);var w=g.exports=function(t){return function(){if("function"==typeof ArrayBuffer){var e=t.lib.WordArray,s=e.init,n=e.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var e=t.byteLength,n=[],i=0;i<e;i++)n[i>>>2]|=t[i]<<24-i%4*8;s.call(this,n,e)}else s.apply(this,arguments)};n.prototype=e}}(),t.lib.WordArray}(Z.exports),X={exports:{}},v=X.exports=function(t){return function(e){var s=t,n=s.lib,i=n.WordArray,o=n.Hasher,r=s.algo,a=[],l=[];!function(){function t(t){for(var s=e.sqrt(t),n=2;n<=s;n++)if(!(t%n))return!1;return!0}function s(t){return 4294967296*(t-(0|t))|0}for(var n=2,i=0;i<64;)t(n)&&(i<8&&(a[i]=s(e.pow(n,.5))),l[i]=s(e.pow(n,1/3)),i++),n++}();var c=[],d=r.SHA256=o.extend({_doReset:function(){this._hash=new i.init(a.slice(0))},_doProcessBlock:function(t,e){for(var s=this._hash.words,n=s[0],i=s[1],o=s[2],r=s[3],a=s[4],d=s[5],h=s[6],u=s[7],m=0;m<64;m++){if(m<16)c[m]=0|t[e+m];else{var p=c[m-15],f=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,b=c[m-2],y=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;c[m]=f+c[m-7]+y+c[m-16]}var g=n&i^n&o^i&o,Z=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),w=u+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&d^~a&h)+l[m]+c[m];u=h,h=d,d=a,a=r+w|0,r=o,o=i,i=n,n=w+(Z+g)|0}s[0]=s[0]+n|0,s[1]=s[1]+i|0,s[2]=s[2]+o|0,s[3]=s[3]+r|0,s[4]=s[4]+a|0,s[5]=s[5]+d|0,s[6]=s[6]+h|0,s[7]=s[7]+u|0},_doFinalize:function(){var t=this._data,s=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;return s[i>>>5]|=128<<24-i%32,s[14+(i+64>>>9<<4)]=e.floor(n/4294967296),s[15+(i+64>>>9<<4)]=n,t.sigBytes=4*s.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});s.SHA256=o._createHelper(d),s.HmacSHA256=o._createHmacHelper(d)}(Math),t.SHA256}(Z.exports);const L="node"===e.CROQUET_PLATFORM;let x;function G(t){const e=t.sigBytes,s=t.words,n=new Uint8Array(e);let i=0,o=0;for(;i<e;){const t=s[o++];if(n[i++]=(4278190080&t)>>>24,i===e)break;if(n[i++]=(16711680&t)>>>16,i===e)break;if(n[i++]=(65280&t)>>>8,i===e)break;n[i++]=255&t}return n}function S(t){function e(t){const e=t.indexOf("{"),s=t.lastIndexOf("}");if(-1===e||-1===s||s<e)return t;const n=t.slice(0,e).replace(/\s+/g," ").replace(/\s\(/,"("),i=t.slice(e+1,s);return`${n.trim()}{${i.trim()}}`}let s=e(""+t);if(!s.startsWith("class")){const n=t.prototype;n&&(s+=Object.getOwnPropertyNames(n).map((t=>`${t}:${e(""+n[t])}`)).join(""))}return s}function k(t){return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function W(){return r.has("debug","hashing",!1)}x=globalThis.crypto&&globalThis.crypto.subtle&&"function"==typeof globalThis.crypto.subtle.digest?globalThis.crypto.subtle.digest.bind(globalThis.crypto.subtle):(t,e)=>{if("SHA-256"!==t)throw Error("Croquet: only SHA-256 available");const s=w.create(e);return G(v(s)).buffer};const T={},C=new TextEncoder;async function R(t){const e=C.encode(t),s=await async function(t){return 0===t.length?"47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU":k(await x("SHA-256",t))}(e);return W()&&(T[s]={string:t,buffer:e}),s}const P=[],V={};const Y=new Set;const M=Date.now();"undefined"==typeof performance&&(window.performance={now:()=>Date.now()-M});const I=["simulate","update","render","snapshot"],K={total:"black",update:"blue",render:"magenta",simulate:"yellow",snapshot:"green",backlog:"red",network:"lightgray"};let H,z,F=null,N=null,_=null,j=0,Q=null,E=null;function J(t){for(F=t;t.firstChild;)t.removeChild(t.firstChild);t.style.background="#faf0dc",Q=document.createElement("canvas"),E=Q.getContext("2d"),Q.id="text_stats",Q.width=Math.min(140,window.innerWidth),Q.height=36,Q.style.width=Q.width,Q.style.height=Q.height,E.font="9.5pt sans-serif",t.appendChild(Q),t.title=Object.entries(K).map((t=>{let[e,s]=t;return`${s}: ${e}`})).join("\n"),N=document.createElement("canvas"),N.width=Math.min(125,window.innerWidth),N.height=125,N.style.width="100%";const e=document.createElement("div");e.id="innerDiv",t.appendChild(e),e.appendChild(N),_=N.getContext("2d")}const U=[];let D=0,O=!1,B=tt(0);const A=1e3/60;function $(t){return 20*(1-t/A)+60}function q(t){H=function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.style.width="100%",e.style.position="absolute",e.style.left="0px",F.querySelector("#innerDiv").appendChild(e),e}(t),z=H.getContext("2d"),z.strokeStyle="rgba(255, 255, 255, 0.5)";for(let t=0;t<60;t+=A){const e=$(t);z.moveTo(0,e),z.lineTo(H.width,e),z.stroke()}}function tt(t){return{start:t,total:0,items:{},users:0,backlog:0,network:0,latency:0,activity:1e3,connected:O}}function et(t){B.total=t-B.start;const e=Math.min(120,window.innerWidth);if(U.length>=e&&U.splice(0,U.length-e+1),U.push(B),U.length<=1)return;if(!F)return;if(0===F.offsetHeight)return;const s=U.slice(1).filter((t=>t.total)),n=s.map((t=>t.total)).reduce(((t,e)=>t+e),0)/s.length,i=Math.max(...s.map((t=>t.total)));Math.max(...s.map((t=>Math.max(t.backlog,t.network)))),D=1e3,function(t,e){E.globalCompositeOperation="copy",E.fillStyle="rgb(255, 255, 255, 0)",E.fillRect(0,0,Q.width,Q.height),E.fillStyle="rgb(0, 0, 0, 1)",E.globalCompositeOperation="source-over";let s=`${B.users} users, ${Math.round(1e3/t)} fps`;e>70&&(s+=` ${Math.ceil(e).toLocaleString()}ms`),E.fillText(s,2,15),s=B.backlog<100&&B.activity<1e3?`latency: ${B.latency} ms`:`backlog: ${B.backlog<100?"0.0":(B.backlog/1e3).toFixed(1)} s`,E.fillText(s,2,33)}(n,i),H||q(N),j===N.width?(_.globalCompositeOperation="copy",_.drawImage(N,1,0,N.width-1,N.height,0,0,N.width-1,N.height),_.globalCompositeOperation="source-over",_.fillStyle="transparent",_.fillRect(N.width-1,0,1,N.height)):j++;const o=t=>$(t/D*-2*A)+5;{const t=U[U.length-1],e=j-.5;let s=$(0);_.beginPath(),_.moveTo(e,s),_.lineTo(e,$(t.total)),_.strokeStyle=K[t.connected?"total":"network"],_.stroke(),_.beginPath(),_.moveTo(e,s),s=$(t.total);let n=0;for(const i of I)t.items[i]&&(n+=t.items[i],s=$(n),_.lineTo(e,s),_.strokeStyle=K[i],_.stroke(),_.beginPath(),_.moveTo(e,s));t.network&&(_.beginPath(),_.moveTo(e,o(0)),_.lineTo(e,o(t.network)),_.strokeStyle=K.network,_.stroke())}}const st=[],nt={};let it={};const ot={frames:U,animationFrame(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};et(t),B=tt(t);for(const[t,s]of Object.entries(e))this[t](s)},begin(t){const e=performance.now();B.items[t]=(B.items[t]||0)-e;const s=st[st.length-1];return s&&(B.items[s]+=e),st.push(t),e},end(t){const e=performance.now();B.items[t]+=e;const s=st.pop();if(s!==t)throw Error(`Unmatched stats calls: expected end("${s}"), got end("${t}")`);const n=st[st.length-1];return n&&(B.items[n]-=e),e},backlog(t){B.backlog=Math.max(t,B.backlog)},network(t){B.network=t},starvation(t){B.network=t},latency(t){B.latency=t},activity(t){B.activity=t},users(t){B.users=t},connected(t){const e=O;B.connected=O=t,e&&!O&&H&&(H.remove(),z=null)},networkTraffic:nt,addNetworkTraffic(t,e){nt[t]=(nt[t]||0)+e},perSecondTally(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(window.logMessageStats)for(const[e,s]of Object.entries(t))it[e]=(it[e]||0)+s},stepSession(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=Math.floor(Date.now()/1e3);if(!window.logMessageStats)return it={second:s},null;let n=null;if(s!==it.second){if(it.second&&e&&(it.requestedMessages||it.sentMessagesTotal)){n={...it};const t=s-it.second;1!==t&&(n.sampleSeconds=t),n.sentBundles&&(n.averageDelay=Math.round(10*n.sendDelay/n.sentMessagesTotal)/10,n.averageBundlePayload=Math.round(n.sentBundlePayload/n.sentBundles)),delete n.second,delete n.sendDelay,delete n.sentBundlePayload}it={second:s}}return n}};globalThis.CROQUETSTATS=ot;const rt="ontouchstart"in document.documentElement,at=window.parent!==window,lt=rt?20:12,ct=rt?0:15;let dt=!1;function ht(){if(dt)return;dt=!0;const t=`\n        #croquet_dock { position: fixed; z-index: 2; border: 3px solid white; bottom: 6px; left: 6px; width: 36px; height: 36px; box-sizing: border-box; background: white; opacity: 0.4; transition: all 0.3s ease; }\n        #croquet_dock.active { opacity: 0.95; border-radius: 12px; }\n        #croquet_dock.debug { width: 84px; }\n        #croquet_dock_bar { position: absolute; border: 3px solid white; width: 100%; height: 30px; box-sizing: border-box; background: white; }\n\n        #croquet_badge { position: absolute; width: 72px; height: 24px; top: 50%; transform: translate(0px, -50%); cursor: none; }\n        #croquet_dock.active #croquet_badge { left: 2%; }\n        #croquet_dock:not(.debug) #croquet_badge { display: none; }\n\n        .croquet_dock_button { position: absolute; width: ${lt}%; height: 90%; top: 50%; transform: translate(0px, -50%); border-radius: 20%; }\n        .croquet_dock_button:focus { outline: 0; }\n        .croquet_dock_button canvas { position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; }\n        #croquet_dock:not(.active) .croquet_dock_button { display: none; }\n        #croquet_dock_left { right: ${2+ct+lt+2}% }\n        #croquet_dock:not(.debug) #croquet_dock_left { display: none; }\n        #croquet_dock_right { right: ${2+ct}%; }\n        #croquet_dock:not(.debug) #croquet_dock_right { display: none; }\n        #croquet_dock_pin { right: 2%; }\n        #croquet_dock_pin.pinned { background: #cce6ff; }\n\n        #croquet_dock_content { position: absolute; left: 2px; top: 2px; right: 2px; bottom: 2px; background: white; overflow: hidden; }\n        #croquet_dock.debug:not(.active) #croquet_dock_content { display: none; }\n        #croquet_dock.debug:not(.active) #croquet_dock_content div { display: none; }\n\n        #croquet_qrcode { position: absolute; width: 100%; height: 100%;box-sizing: border-box; cursor: crosshair; }\n        #croquet_dock.active #croquet_qrcode { border: 6px solid white; }\n        #croquet_dock.debug #croquet_qrcode:not(.active) { display: none; }\n        #croquet_qrcode canvas { image-rendering: pixelated; }\n\n        #croquet_stats { position: absolute; width: 70%; height: 90%; left: 15%; top: 5%; opacity: 0.8; font-family: sans-serif; }\n        #croquet_stats:not(.active) { display: none; }\n`,e=document.createElement("style");e.innerHTML=t,document.head.insertBefore(e,document.head.getElementsByTagName("style")[0])}let ut=!1;let mt,pt=!1;function ft(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t&&Rt.showMessage(t,{...e,level:"warning"})}function bt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t&&Rt.showMessage(t,{...e,level:"status"})}function yt(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error";console.error(`Error during ${t}`,e);const n=(e.stack||"").split("\n").filter((t=>!t.match(/croquet-.*\.min.js/))).join("\n");Rt.showMessage(`Error during ${t}: ${e.message}\n\n${n}`,{level:s,duration:"error"===s?1e4:void 0,stopOnFocus:!0})}function gt(t,e){const s=Tt(Rt.root,(()=>document.body));if(!1===s)return null;!function(){if(pt)return;pt=!0;let t="/*!\n        * Toastify js 1.5.0\n        * https://github.com/apvarun/toastify-js\n        * @license MIT licensed\n        *\n        * Copyright (C) 2018 Varun A P\n        */\n        .toastify {\n            padding: 12px 20px;\n            color: #ffffff;\n            display: inline-block;\n            box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n            background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n            background: linear-gradient(135deg, #73a5ff, #5477f5);\n            position: fixed;\n            opacity: 0;\n            transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n            border-radius: 2px;\n            cursor: pointer;\n            text-decoration: none;\n            max-width: calc(50% - 20px);\n            z-index: 2147483647;\n        }\n        .toastify.on {\n            opacity: 1;\n        }\n        .toast-close {\n            opacity: 0.4;\n            padding: 0 5px;\n        }\n        .toastify-right {\n            right: 15px;\n        }\n        .toastify-left {\n            left: 15px;\n        }\n        .toastify-top {\n            top: -150px;\n        }\n        .toastify-bottom {\n            bottom: -150px;\n        }\n        .toastify-rounded {\n            border-radius: 25px;\n        }\n        .toastify-avatar {\n            width: 1.5em;\n            height: 1.5em;\n            margin: 0 5px;\n            border-radius: 2px;\n        }\n        @media only screen and (max-width: 360px) {\n            .toastify-right, .toastify-left {\n                margin-left: auto;\n                margin-right: auto;\n                left: 0;\n                right: 0;\n                max-width: fit-content;\n            }\n        }\n";t+="\n        .toastify {\n            font-family: sans-serif;\n            border-radius: 8px;\n        }\n\n        .toastify-center {\n            margin-left: auto;\n            margin-right: auto;\n            left: 0;\n            right: 0;\n            max-width: fit-content;\n            max-width: -moz-fit-content;\n        }\n";const e=document.createElement("style");e.innerHTML="/*!\n        * Toastify js 1.5.0\n        * https://github.com/apvarun/toastify-js\n        * @license MIT licensed\n        *\n        * Copyright (C) 2018 Varun A P\n        */\n        .toastify {\n            padding: 12px 20px;\n            color: #ffffff;\n            display: inline-block;\n            box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n            background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n            background: linear-gradient(135deg, #73a5ff, #5477f5);\n            position: fixed;\n            opacity: 0;\n            transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n            border-radius: 2px;\n            cursor: pointer;\n            text-decoration: none;\n            max-width: calc(50% - 20px);\n            z-index: 2147483647;\n        }\n        .toastify.on {\n            opacity: 1;\n        }\n        .toast-close {\n            opacity: 0.4;\n            padding: 0 5px;\n        }\n        .toastify-right {\n            right: 15px;\n        }\n        .toastify-left {\n            left: 15px;\n        }\n        .toastify-top {\n            top: -150px;\n        }\n        .toastify-bottom {\n            bottom: -150px;\n        }\n        .toastify-rounded {\n            border-radius: 25px;\n        }\n        .toastify-avatar {\n            width: 1.5em;\n            height: 1.5em;\n            margin: 0 5px;\n            border-radius: 2px;\n        }\n        @media only screen and (max-width: 360px) {\n            .toastify-right, .toastify-left {\n                margin-left: auto;\n                margin-right: auto;\n                left: 0;\n                right: 0;\n                max-width: fit-content;\n            }\n        }\n\n        .toastify {\n            font-family: sans-serif;\n            border-radius: 8px;\n        }\n\n        .toastify-center {\n            margin-left: auto;\n            margin-right: auto;\n            left: 0;\n            right: 0;\n            max-width: fit-content;\n            max-width: -moz-fit-content;\n        }\n",document.head.insertBefore(e,document.head.getElementsByTagName("style")[0])}();const n={text:t,duration:3e3,gravity:"bottom",position:"right",stopOnFocus:!0,...e};let i;return s instanceof Element&&s!==document.body?(i=s.id,i||(s.id=i="_croquetToastParent")):"string"==typeof s&&(i=s),i&&(n.selector=i),h(n).showToast()}try{if(mt=window.localStorage,mt["croquet-debug-persist-allowed"]="true","true"!==mt["croquet-debug-persist-allowed"])throw Error("localStorage not persisted");delete mt["croquet-debug-persist-allowed"]}catch(Yo){console.warn("localStorage not allowed"),mt={}}const Zt={get pinned(){return"true"===mt[window.location.pathname+"/croquet-debug-ui-pinned"]},set pinned(t){mt[window.location.pathname+"/croquet-debug-ui-pinned"]=!!t},get activePage(){return mt[window.location.pathname+"/croquet-debug-ui-activePage"]},set activePage(t){mt[window.location.pathname+"/croquet-debug-ui-activePage"]=t}},wt=t=>{t.preventDefault(),t.stopPropagation()};function Xt(t,e,s){const n=document.createElement("canvas"),i=n.width=40*lt/12,o=n.height=60,r=n.getContext("2d");r.font="36px Arial",r.textAlign="center",r.textBaseline="middle",r.fillStyle="black",r.fillText(t,i/2,.55*o);const a=document.createElement("button");a.id=e,a.className="croquet_dock_button";const l=t=>{t.preventDefault(),t.stopPropagation(),s()};return rt?(a.ontouchstart=l,a.ontouchend=wt,a.onpointerdown=wt,a.onpointerup=wt):(a.onclick=l,a.onpointerdown=wt,a.onpointerup=wt),a.appendChild(n),a}function vt(t,e){if(!1===Rt.badge)return;const s=function(t){const e=new p(t),s=["bcdfghjklmnpqrstvwxyz","aeiou"];let n="";for(let t=0;t<5;t++)n+=s[t%2][e.quick()*s[t%2].length|0];return n}(e);for(document.title=document.title.replace(/:.*/,""),document.title+=":"+s;t.firstChild;)t.removeChild(t.firstChild);const n=document.createElement("canvas"),i=n.width=120,o=n.height=40;n.style.width="100%",t.appendChild(n);const r=n.getContext("2d"),a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const s=new p(t),n=[];for(let t=0;t<e;t++)n.push(`hsl(${360*s.quick()}, 50%, 70%)`);return n}(e,2);r.fillStyle=a[0],r.beginPath(),r.moveTo(0,0),r.lineTo(0,o),r.lineTo(i,0),r.closePath(),r.fill(),r.fillStyle=a[1],r.beginPath(),r.moveTo(i,o),r.lineTo(i,0),r.lineTo(0,o),r.closePath(),r.fill(),r.font="30px Arial",r.textAlign="center",r.textBaseline="middle",r.fillStyle="black",r.fillText(s,i/2,o/2)}function Lt(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};for(;t.firstChild;)t.removeChild(t.firstChild);return new b(t,{text:e,width:128,height:128,colorDark:"#000000",colorLight:"#ffffff",correctLevel:b.CorrectLevel.L,...s})}function xt(){if(!1===Rt.root||!1===Rt.qrcode)return;if(r.noqr)return;const t=Rt.sessionURL;if(!t)return void console.warn("App.sessionURL is not set");const e=Tt(Rt.qrcode);if(!e)return;rt||(e.onclick=e=>{e.preventDefault(),e.stopPropagation(),e.shiftKey?function(){const t=document.getElementById("croquet_dock");t&&t.classList.toggle("debug")}():window.open(t)});Lt(e,t).getCanvas().style.width="100%"}let Gt,St,kt=0;function Wt(){!function(){if(ut)return;ut=!0;const t=`\n        ${at?"body { min-height: 100vh }":""}\n        #croquet_spinnerOverlay {\n            z-index: 1000;\n            position: fixed;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background-color:#333;\n            opacity:0.9;\n            display:flex;\n            align-items:center;\n            justify-content:center;\n            transition: opacity 1.0s ease-out;\n        }\n        /* https://github.com/lukehaas/css-loaders */\n        @keyframes croquet_dots {\n            0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em; }\n            40% { box-shadow: 0 2.5em 0 0; }\n        }\n        #croquet_loader,\n        #croquet_loader::before,\n        #croquet_loader::after {\n          border-radius: 50%;\n          width: 2.5em;\n          height: 2.5em;\n          animation: croquet_dots 1.8s infinite ease-in-out;\n        }\n        #croquet_loader {\n          color: #fff;\n          font-size: 10px;\n          margin: 80px auto;\n          position: relative;\n          text-indent: -9999em;\n          animation-delay: -0.16s;\n        }\n        #croquet_loader::before,\n        #croquet_loader::after {\n          content: '';\n          position: absolute;\n          top: 0;\n        }\n        #croquet_loader::before { left: -3.5em; animation-delay: -0.32s; }\n        #croquet_loader::after { left: 3.5em; }\n        #croquet_spinnerOverlay.croquet_error>*,\n        #croquet_spinnerOverlay.croquet_error>*::before,\n        #croquet_spinnerOverlay.croquet_error>*::after {\n            color: #f00;\n        }\n        #croquet_spinnerOverlay.croquet_fatal>*,\n        #croquet_spinnerOverlay.croquet_fatal>*::before,\n        #croquet_spinnerOverlay.croquet_fatal>*::after {\n            color: #f00;\n            box-shadow: 0 2.5em 0 0 !important;\n            animation: none !important;\n        }\n`,e=document.createElement("style");e.innerHTML=t,document.head.insertBefore(e,document.head.getElementsByTagName("style")[0])}();const t=document.createElement("div");t.id="croquet_spinnerOverlay";const e=document.createElement("div");return e.id="croquet_loader",e.innerText="Catching up...",t.appendChild(e),t}function Tt(t,e){if(!1===t)return!1;if(t instanceof Element)return t;if("string"==typeof t){const e=document.getElementById(t);if(e)return e}return e?e():null}const Ct=new Set,Rt={sessionURL:function(){let t=null;const e=document.getElementsByTagName("link");for(const s of e)if("canonical"===s.getAttribute("rel")){t=s.getAttribute("href");break}return t||window.location.href}(),root:null,sync:!0,messages:!1,badge:!1,stats:!1,qrcode:!1,makeWidgetDock:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r.nodock)return;const e=t.debug||r.debug,s=document.getElementById("croquet_dock");s&&s.parentElement.removeChild(s);const n=Tt(Rt.root,(()=>document.body));if(!n)return;ht();const i=document.createElement("div");i.id="croquet_dock",e&&i.classList.add("debug"),at&&!t.iframe&&(i.style.display="none"),n.appendChild(i);const o=document.createElement("div");let a;o.id="croquet_dock_bar",i.appendChild(o),!1!==t.badge&&(a=document.createElement("div"),a.id="croquet_badge",o.appendChild(a),Rt.badge=a);const l=document.createElement("div");l.id="croquet_dock_content",i.appendChild(l);const c=[];let d,h;if(!1!==t.qrcode){Rt.sessionURL&&(d=document.createElement("div"),d.id="croquet_qrcode",l.appendChild(d),c.push(d.id),Rt.qrcode=d,e||(Zt.activePage=d.id))}if(!1!==t.stats&&(h=document.createElement("div"),h.id="croquet_stats",l.appendChild(h),c.push(h.id),Rt.stats=h),c.length){function X(t){const e=c.length;let s,n=0;if(Zt.activePage){const t=c.indexOf(Zt.activePage);t>=0?(n=t,s=document.getElementById(Zt.activePage)):Zt.activePage=null}const i=c[(n+e+t)%e];let o;i===Zt.activePage?o=s:(s&&s.classList.remove("active"),o=document.getElementById(i)),o&&o.classList.add("active"),Zt.activePage=i}c.length>1&&(o.appendChild(Xt("<","croquet_dock_left",(()=>X(-1)))),o.appendChild(Xt(">","croquet_dock_right",(()=>X(1))))),X(0)}if(!rt&&!t.alwaysPinned){const v=Xt("📌","croquet_dock_pin",(()=>{Zt.pinned=!Zt.pinned,L()})),L=()=>{Zt.pinned?v.classList.add("pinned"):v.classList.remove("pinned")};L(),o.appendChild(v)}const u=200,m=166,p=8,f=t=>{i.style.width=`${t}px`;const e=1.18*t;i.style.height=`${e}px`;const s=18*t/100;o.style.height=`${s}px`,l.style.top=`${s+2}px`,a&&(a.style.height=.9*s+"px",a.style.width=.9*s*3+"px"),d&&(d.style.border=p*t/u+"px solid white")},b=()=>{i.style.width=i.style.height="",o.style.height="",l.style.top="",a&&(a.style.height=a.style.width=""),d&&(d.style.border="")};let y=t.fixedSize||u;const g=()=>i.classList.contains("active"),Z=()=>{i.classList.add("active"),f(y),setTimeout((()=>i.style.transition="none"),300)},w=()=>{i.style.transition="",i.classList.remove("active"),b()};if(rt)w(),i.ontouchstart=t=>{t.preventDefault(),t.stopPropagation(),g()?w():Z()},i.ontouchend=wt,i.onpointerdown=wt,i.onpointerup=wt;else if(t.alwaysPinned?Z():(Zt.pinned?Z():w(),i.onmouseenter=Z,i.onmouseleave=()=>{Zt.pinned||w()}),!t.fixedSize){let x=0;i.addEventListener("wheel",(t=>{t.stopPropagation();const e=Date.now();if(e-x<100)return;x=e;let{deltaY:s}=t;s=Math.sign(s)*Math.min(5,Math.abs(s));const n=.8*Math.min(window.innerWidth,window.innerHeight);y=Math.max(m,Math.min(n,i.offsetWidth/1.05**s)),f(y)}),{passive:!0})}},makeSessionWidgets:function(t){!function(t){if(!t||!1===Rt.root)return;const e=Tt(Rt.badge);e&&vt(e,t)}(t),xt(),function(){if(!1===Rt.root)return;if(r.nostats)return;const t=Tt(Rt.stats);t&&J(t)}()},makeQRCanvas(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Rt.sessionURL)return null;const e=Lt(document.createElement("div"),Rt.sessionURL,t);return e&&e.getCanvas()},clearSessionMoniker:function(){!1!==Rt.badge&&(document.title=document.title.replace(/:.*/,""))},showSyncWait(t){!1===Rt.root?t=!1:Gt||(Gt=Wt()),function(t){if(St!==t&&("string"!=typeof St||!0!==t))if(!1===Rt.sync&&(t=!1),St=t,t)clearTimeout(kt),kt=setTimeout((()=>{St&&(Tt(Rt.root,(()=>document.body)).appendChild(Gt),Gt.style.opacity=.9,Gt.className="error"===St?"croquet_error":"fatal"===St?"croquet_fatal":"")}),500);else{if(!Gt)return;clearTimeout(kt),Gt.style.opacity=0,Gt.className="",kt=setTimeout((()=>{St||Gt.parentElement&&Gt.parentElement.removeChild(Gt)}),500)}}(t)},messageFunction:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=e.level;let n;return"error"===s?(n="orangered,red",console.error(t)):"warning"===s?(n="gold,orange",console.warn(t)):n="silver,gray",gt(t,{style:{background:`linear-gradient(90deg,${n})`},...e})},showMessage(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("once"===e.only){if(Ct.has(t))return null;Ct.add(t)}return"fatal"===e.level&&(e.level="error",e.showSyncWait="fatal"),e.showSyncWait&&("fatal"!==e.showSyncWait||e.duration||(e.duration=-1),Rt.showSyncWait(e.showSyncWait)),r.nomessages||!1===Rt.root||!1===Rt.messages||!Rt.messageFunction?("warning"===e.level&&console.warn(t),"error"===e.level&&console.error(t),null):Rt.messageFunction(t,e)},isCroquetHost:t=>t.endsWith("croquet.io")||["localhost","127.0.0.1","[::1]"].includes(t)||t.endsWith("ngrok.io"),referrerURL(){const t=new URL(Rt.sessionURL),e=this.isCroquetHost(t.hostname);return`${t.protocol}//${t.host}${t.pathname}${e?t.search:""}`},autoSession(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"q"};"string"==typeof t&&(t={key:t}),t||(t={});const e=t.key||"q",s=new URL(Rt.sessionURL);let n="";const i=s.search.slice(1).split("&"),o=i.find((t=>t.split("=")[0]===e));if(o?n=o.replace(/[^=]*=/,""):(n=i.find((t=>!t.includes("="))),n||(n=s.hash.slice(1),n&&(s.hash="",s.search?s.searchParams.set(e,n):s.search=n))),n)try{n=decodeURIComponent(n)}catch(t){}else n=Math.floor(Math.random()*36**10).toString(36),s.searchParams.set(e,n);const a=s.toString("");window.location.href!==a&&(window.history.replaceState({},"",a),Rt.sessionURL=a),r.has("debug","session")&&console.log(`Croquet.App.autoSession: "${n}"`);const l=Promise.resolve(n);return l[Symbol.toPrimitive]=()=>(console.warn("Deprecated: Croquet.App.autoSession() return value used directly. It returns a promise now!"),n),l},autoPassword(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"pw",scrub:!1,keyless:!1};const e=t.key||"pw",s=t.scrub&&!r.has("debug","password"),n=t.keyless,i=new URL(Rt.sessionURL);let o="";const a=i.hash.slice(1);if(a){const t=a.split("&"),r=t.find((t=>t.split("=")[0]===e));r?(o=r.replace(/[^=]*=/,""),o&&s&&(i.hash=t.filter((t=>t.split("=")[0]!==e)).join("&"))):n&&(o=t.find((t=>!t.includes("="))),o&&s&&(i.hash=t.filter((t=>t!==o)).join("&")))}if(!o){const t=new Uint8Array(16);window.crypto.getRandomValues(t),o=k(t.buffer),i.hash=a?`${a}&${e}=${o}`:n?o:`${e}=${o}`,Rt.sessionURL=i.href,s&&(i.hash=a)}if(r.has("debug","session")&&console.log(`Croquet.App.sessionUrl: ${Rt.sessionURL}`),window.location.href!==i.href&&window.history.replaceState({},"",i.href),o)try{o=decodeURIComponent(o)}catch(t){}r.has("debug","session")&&console.log(`Croquet.App.autoPassword: "${o}"`);const l=Promise.resolve(o);return l[Symbol.toPrimitive]=()=>(console.warn("Deprecated: Croquet.App.autoPassword() return value used directly. It returns a promise now!"),o),l}};function Pt(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n="none";for(const i of["immediate","queued","oncePerFrame","oncePerFrameWhileSynced"])for(const o of t[i])o.for===e?null===s||o.unbound===s?t[i].delete(o):n="subscriber":"none"===n&&(n="others");return n}const Vt=new class{constructor(){this.subscriptions={},this.subscribers=new Map,this.queuedEvents=[],this.perFrameEvents=new Map,this.perSyncedFrameEvents=new Map,this.subscriberIds=0}register(t){return"V"+ ++this.subscriberIds}deregister(t){}addSubscription(t,e,s,n,i){if("vote"===i)return void this.addSubscription(t,e+"#__vote",s,n,"immediate");const o=t+":"+e,r=n;r.for=s;let a=this.subscriptions[o];if(a||(a=this.subscriptions[o]={immediate:new Set,queued:new Set,oncePerFrame:new Set,oncePerFrameWhileSynced:new Set}),!a[i])throw Error(`Unknown subscribe() option: handling="${i}"`);a[i].add(r);let l=this.subscribers.get(s);l||this.subscribers.set(s,l=new Set),l.add(o)}removeSubscription(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const i=t+":"+e,o=this.subscriptions[i];if(o){const t=Pt(o,s,n);if(t||delete this.subscriptions[i],"subscriber"!==t){const t=this.subscribers.get(s);t.delete(i),0===t.size&&this.subscribers.delete(s)}}e.endsWith("#__vote")||this.removeSubscription(t,e+"#__vote",s)}removeAllSubscriptionsFor(t){const e=this.subscribers.get(t);if(e){for(const s of e){const e=this.subscriptions[s];if(e){"none"===Pt(e,t)&&delete this.subscriptions[s]}else console.error(`Croquet: topic ${s} not found in subscriptions table for ${t} during removeAllSubscriptionsFor()`)}this.subscribers.delete(t)}}handleEvent(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t=>t();const n=this.subscriptions[t];n&&(n.queued.size>0&&this.queuedEvents.push({topic:t,data:e}),n.oncePerFrame.size>0&&this.perFrameEvents.set(t,e),n.oncePerFrameWhileSynced.size>0&&this.perSyncedFrameEvents.set(t,e),n.immediate.size>0&&s((()=>{for(const s of n.immediate)try{s(e)}catch(e){console.error(e),console.warn(`Croquet: error "${e.message}" in "immediate" subscription ${t}`)}})))}processFrameEvents(t,e){let s=0;const n=(t,e,n)=>{const i=this.subscriptions[e];if(i)for(const o of i[t]){try{o(n)}catch(s){console.error(s),console.warn(`Croquet: error "${s.message}" in "${t}" subscription ${e}`)}s++}};for(const{topic:t,data:e}of this.queuedEvents)n("queued",t,e);if(this.queuedEvents.length=0,t){for(const[t,e]of this.perFrameEvents)n("oncePerFrame",t,e);if(this.perFrameEvents.clear(),e){for(const[t,e]of this.perSyncedFrameEvents)n("oncePerFrameWhileSynced",t,e);this.perSyncedFrameEvents.clear()}for(const{topic:t,data:e}of this.queuedEvents)n("queued",t,e);this.queuedEvents.length=0}return s}};let Yt={get subscribe(){return Yt={subscribe:r.has("debug","subscribe",!1)},Yt.subscribe}};class Mt{constructor(t){this.vm=t}register(t){return this.vm.registerModel(t)}deregister(t){this.vm.deregisterModel(t.id)}publish(t,e,s){this.vm.publishFromModel(s,t,e)}subscribe(t,e,s,n){return Yt.subscribe&&console.log(`Model.subscribe("${e}:${s}", ${t} ${(""+n).replace(/\([\s\S]*/,"")})`),this.vm.addSubscription(t,e,s,n)}unsubscribe(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"*";Yt.subscribe&&console.log(`Model.unsubscribe(${e}:${s}", ${t} ${(""+n).replace(/\([\s\S]*/,"")})`),this.vm.removeSubscription(t,e,s,n)}unsubscribeAll(t){Yt.subscribe&&console.log(`Model.unsubscribeAll(${t} ${t.id})`),this.vm.removeAllSubscriptionsFor(t)}future(t,e,s,n){if(Kt&&Kt.equal(this))return this.vm.future(t,e,s,n);throw Error(`Model.future() called from outside: ${t}`)}cancelFuture(t,e){if(Kt&&Kt.equal(this))return this.vm.cancelFuture(t,e);throw Error(`Model.cancelFuture() called from outside: ${t}`)}random(){return this.vm.random()}now(){return this.vm.time}equal(t){return t instanceof Mt&&t.vm===this.vm}isViewRealm(){return!1}}class It{constructor(t){this.vm=t}register(t){return Vt.register(t)}deregister(t){Vt.deregister(t)}publish(t,e,s){this.vm.publishFromView(s,t,e)}subscribe(t,e,s,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"queued";Yt.subscribe&&console.log(`View.subscribe("${n}:${t}", ${e} ${s?s.name||(""+s).replace(/\([\s\S]*/,""):""+s} [${i}])`),Vt.addSubscription(n,t,e,s,i)}unsubscribe(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;Yt.subscribe&&console.log(`View.unsubscribe("${n}:${t}", ${e} ${s?s.name||(""+s).replace(/\([\s\S]*/,""):"*"})`),Vt.removeSubscription(n,t,e,s)}unsubscribeAll(t){Yt.subscribe&&console.log(`View.unsubscribeAll(${t})`),Vt.removeAllSubscriptionsFor(t)}future(t,e){const s=this.vm;return new Proxy(t,{get(n,i){if("function"==typeof t[i]){return new Proxy(t[i],{apply(n,o,r){setTimeout((()=>{t.id&&Ft(s,(()=>t[i](...r)),!0)}),e)}})}throw Error("Tried to call "+i+"() on future of "+Object.getPrototypeOf(t).constructor.name+" which is not a function")}})}random(){return Math.random()}now(){return this.vm.time}externalNow(){return this.vm.controller.reflectorTime}extrapolatedNow(){return this.vm.controller.extrapolatedTime}isSynced(){return!!this.vm.controller.synced}equal(t){return t instanceof It&&t.vm===this.vm}isViewRealm(){return!0}}let Kt=null;function Ht(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Tried to execute code that requires realm outside of realm.";if(!Kt&&t)throw Error(t);return Kt}function zt(t,e){if(null!==Kt)throw Error("Can't switch realms from inside realm");try{return Kt=new Mt(t),e()}finally{Kt=null}}function Ft(t,e){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null!==Kt&&!s)throw Error("Can't switch realms from inside realm");const n=Kt;try{return Kt=new It(t),e()}finally{Kt=n}}var Nt=function(t){return t!=t},_t=Math.sqrt,jt=.7853981633974483;var Qt=function(t){var e,s;return 0===t?.16666666666666713:((t<0?-t:t)<=1?(e=t*(19.562619833175948+t*(t*(5.444622390564711+t*(.004253011369004428*t-.6019598008014124))-16.262479672107002))-8.198089802484825,s=t*(139.51056146574857+t*(t*(70.49610280856842+t*(1*t-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(t=1/t)*(t*(5.444622390564711+t*(t*(19.562619833175948+-8.198089802484825*t)-16.262479672107002))-.6019598008014124),s=1+t*(t*(70.49610280856842+t*(t*(139.51056146574857+-49.18853881490881*t)-147.1791292232726))-14.740913729888538)),e/s)};var Et=function(t){var e,s;return 0===t?.08333333333333809:((t<0?-t:t)<=1?(e=28.536655482610616+t*(t*(6.968710824104713+t*(.002967721961301243*t-.5634242780008963))-25.56901049652825),s=342.43986579130785+t*(t*(147.0656354026815+t*(1*t-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(t=1/t)*(t*(6.968710824104713+t*(28.536655482610616*t-25.56901049652825))-.5634242780008963),s=1+t*(t*(147.0656354026815+t*(342.43986579130785*t-383.8770957603691))-21.947795316429207)),e/s)};var Jt=function(t){var e,s,n,i,o;if(Nt(t))return NaN;if(t>0?n=t:(e=!0,n=-t),n>1)return NaN;if(n>.625)i=(s=1-n)*Et(s),s=_t(s+s),o=jt-s,o-=s=s*i-6123233995736766e-32,o+=jt;else{if(n<1e-8)return t;o=n*(o=(s=n*n)*Qt(s))+n}return e?-o:o};var Ut=function(t){var e;return Nt(t)||t<-1||t>1?NaN:t>.5?2*Jt(_t(.5-.5*t)):(e=jt-Jt(t),e+=6123233995736766e-32,e+=jt)};var Dt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var Ot=function(){return Dt&&"symbol"==typeof Symbol.toStringTag},Bt=Object.prototype.toString;var At=function(t){return Bt.call(t)},$t=Object.prototype.hasOwnProperty;var qt=function(t,e){return null!=t&&$t.call(t,e)},te="function"==typeof Symbol?Symbol.toStringTag:"";var ee=function(t){var e,s,n;if(null==t)return Bt.call(t);s=t[te],e=qt(t,te);try{t[te]=void 0}catch(e){return Bt.call(t)}return n=Bt.call(t),e?t[te]=s:delete t[te],n},se=Ot()?ee:At,ne="function"==typeof Uint32Array;var ie=function(t){return ne&&t instanceof Uint32Array||"[object Uint32Array]"===se(t)},oe="function"==typeof Uint32Array?Uint32Array:null;var re=function(){var t,e;if("function"!=typeof oe)return!1;try{e=new oe(e=[1,3.14,-3.14,4294967296,4294967297]),t=ie(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t},ae="function"==typeof Uint32Array?Uint32Array:null;var le=function(){throw new Error("not implemented")},ce=re()?ae:le,de="function"==typeof Float64Array;var he=function(t){return de&&t instanceof Float64Array||"[object Float64Array]"===se(t)},ue="function"==typeof Float64Array?Float64Array:null;var me=function(){var t,e;if("function"!=typeof ue)return!1;try{e=new ue([1,3.14,-3.14,NaN]),t=he(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t},pe="function"==typeof Float64Array?Float64Array:null;var fe=function(){throw new Error("not implemented")},be=me()?pe:fe,ye="function"==typeof Uint8Array;var ge=function(t){return ye&&t instanceof Uint8Array||"[object Uint8Array]"===se(t)},Ze="function"==typeof Uint8Array?Uint8Array:null;var we=function(){var t,e;if("function"!=typeof Ze)return!1;try{e=new Ze(e=[1,3.14,-3.14,256,257]),t=ge(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t},Xe="function"==typeof Uint8Array?Uint8Array:null;var ve=function(){throw new Error("not implemented")},Le=we()?Xe:ve,xe="function"==typeof Uint16Array;var Ge=function(t){return xe&&t instanceof Uint16Array||"[object Uint16Array]"===se(t)},Se="function"==typeof Uint16Array?Uint16Array:null;var ke=function(){var t,e;if("function"!=typeof Se)return!1;try{e=new Se(e=[1,3.14,-3.14,65536,65537]),t=Ge(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t},We="function"==typeof Uint16Array?Uint16Array:null;var Te,Ce=function(){throw new Error("not implemented")},Re={uint16:ke()?We:Ce,uint8:Le};(Te=new Re.uint16(1))[0]=4660;var Pe=52===new Re.uint8(Te.buffer)[0],Ve=!0===Pe?1:0,Ye=new be(1),Me=new ce(Ye.buffer);var Ie=function(t){return Ye[0]=t,Me[Ve]},Ke=!0===Pe?1:0,He=new be(1),ze=new ce(He.buffer);var Fe=function(t,e){return He[0]=t,ze[Ke]=e>>>0,He[0]},Ne=Fe,_e=Number.POSITIVE_INFINITY,je=Number.NEGATIVE_INFINITY;var Qe=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))},Ee=.6931471803691238,Je=1.9082149292705877e-10;var Ue=function(t){var e,s,n,i,o,r,a,l,c,d;if(t<-1||Nt(t))return NaN;if(-1===t)return je;if(t===_e)return t;if(0===t)return t;if(d=1,(n=t<0?-t:t)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(d=0,i=t,s=1)}return 0!==d&&(n<9007199254740992?(o=(d=((s=Ie(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),o/=c):(d=((s=Ie(c=t))>>20)-1023,o=0),(s&=1048575)<434334?c=Ne(c,1072693248|s):(d+=1,c=Ne(c,1071644672|s),s=1048576-s>>2),i=c-1),e=.5*i*i,0===s?0===i?d*Ee+(o+=d*Je):d*Ee-((l=e*(1-.6666666666666666*i))-(d*Je+o)-i):(l=(a=(r=i/(2+i))*r)*Qe(a),0===d?i-(e-r*(e+l)):d*Ee-(e-(r*(e+l)+(d*Je+o))-i))},De=.6931471805599453;var Oe=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)};var Be=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},Ae=.6931471803691238,$e=1.9082149292705877e-10;var qe=function(t){var e,s,n,i,o,r,a,l,c,d,h;return 0===t?je:Nt(t)||t<0?NaN:(i=0,(s=Ie(t))<1048576&&(i-=54,s=Ie(t*=0x40000000000000)),s>=2146435072?t+t:(i+=(s>>20)-1023|0,i+=(a=(s&=1048575)+614244&1048576|0)>>20|0,r=(t=Ne(t,s|1072693248^a))-1,(1048575&2+s)<3?0===r?0===i?0:i*Ae+i*$e:(o=r*r*(.5-.3333333333333333*r),0===i?r-o:i*Ae-(o-i*$e-r)):(a=s-398458|0,l=440401-s|0,n=(d=(h=(c=r/(2+r))*c)*h)*Oe(d),o=h*Be(d)+n,(a|=l)>0?(e=.5*r*r,0===i?r-(e-c*(e+o)):i*Ae-(e-(c*(e+o)+i*$e)-r)):0===i?r-c*(r-o):i*Ae-(c*(r-o)-i*$e-r))))};var ts=function(t){var e;return Nt(t)||t<1?NaN:1===t?0:t>=268435456?qe(t)+De:t>2?qe(2*t-1/(t+_t(t*t-1))):Ue((e=t-1)+_t(2*e+e*e))};var es=function(t){return t===_e||t===je};var ss=function(t){var e,s,n;return Nt(t)||es(t)?t:(t<0&&(t=-t,e=!0),n=t<3.725290298461914e-9?t:t>268435456?qe(t)+De:t>2?qe(2*t+1/(_t(t*t+1)+t)):Ue(t+(s=t*t)/(1+_t(1+s))),e?-n:n)},ns=1.5707963267948966;var is=function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025};var os=function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))};var rs=function(t){var e,s,n,i;return Nt(t)||0===t?t:t===_e?ns:t===je?-ns:(t<0&&(s=!0,t=-t),e=0,t>2.414213562373095?(n=ns,e=1,t=-1/t):t<=.66?n=0:(n=jt,e=2,t=(t-1)/(t+1)),i=t*(i=(i=t*t)*is(i)/os(i))+t,2===e?i+=3061616997868383e-32:1===e&&(i+=6123233995736766e-32),n+=i,s?-n:n)};var as,ls,cs=function(t){var e,s;return Nt(t)||t<-1||t>1?NaN:1===t?_e:-1===t?je:(t<0&&(e=!0,t=-t),t<3.725290298461914e-9?e?-t:t:(s=t<.5?.5*Ue((s=t+t)+s*t/(1-t)):.5*Ue((t+t)/(1-t)),e?-s:s))};!0===Pe?(as=1,ls=0):(as=0,ls=1);var ds={HIGH:as,LOW:ls},hs=new be(1),us=new ce(hs.buffer),ms=ds.HIGH,ps=ds.LOW;var fs=function(t,e){return hs[0]=e,t[0]=us[ms],t[1]=us[ps],t};var bs,ys,gs=function(t,e){return 1===arguments.length?fs([0,0],t):fs(t,e)};!0===Pe?(bs=1,ys=0):(bs=0,ys=1);var Zs={HIGH:bs,LOW:ys},ws=new be(1),Xs=new ce(ws.buffer),vs=Zs.HIGH,Ls=Zs.LOW;var xs=function(t,e){return Xs[vs]=t,Xs[Ls]=e,ws[0]},Gs=xs,Ss=[0,0];var ks=function(t,e){var s,n;return gs(Ss,t),s=Ss[0],s&=2147483647,n=Ie(e),Gs(s|=n&=2147483648,Ss[1])};var Ws=function(t){return!!(Ie(t)>>>31)},Ts=3.141592653589793;var Cs=function(t,e){var s;return Nt(e)||Nt(t)?NaN:es(e)?e===_e?es(t)?ks(Ts/4,t):ks(0,t):es(t)?ks(3*Ts/4,t):ks(Ts,t):es(t)?ks(Ts/2,t):0===t?e>=0&&!Ws(e)?ks(0,t):ks(Ts,t):0===e?ks(Ts/2,t):(s=rs(t/e),e<0?s<=0?s+Ts:s-Ts:s)},Rs=22250738585072014e-324;var Ps=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)};var Vs=function(t){var e,s,n,i,o;return Nt(t)||es(t)||0===t?t:(s=-2147483648&(n=Ie(t)),n&=2147483647,o=0,t<Rs?(o=0x40000000000000,e=Ie(o*=t),o=Gs(s|(e=(2147483647&e)/3+696219795),0)):o=Ne(o,s|(e=n/3+715094163)),o*=Ps(i=o*o*(o/t)),e=Ie(o),o=Gs(e+1,0),o+=o*(i=((i=t/(o*o))-o)/(o+o+i)))},Ys=Vs;var Ms=function(t){return 0===t?.0416666666666666:.0416666666666666+t*(2480158728947673e-20*t-.001388888888887411)};var Is=function(t){return 0===t?-2.7557314351390663e-7:t*(2.087572321298175e-9+-11359647557788195e-27*t)-2.7557314351390663e-7};var Ks=function(t,e){var s,n,i,o;return i=(o=t*t)*o,n=o*Ms(o),n+=i*i*Is(o),(i=1-(s=.5*o))+(1-i-s+(o*n-t*e))},Hs=-.16666666666666632;var zs=function(t,e){var s,n,i;return s=.00833333333332249+(i=t*t)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*t,0===e?t+n*(Hs+i*s):t-(i*(.5*e-n*s)-e-n*Hs)},Fs=!0===Pe?0:1,Ns=new be(1),_s=new ce(Ns.buffer);var js=function(t){return Ns[0]=t,_s[Fs]},Qs=Math.floor;var Es=function(t){return t<0?-t:0===t?0:t};var Js=function(t,e){return Nt(e)||es(e)?(t[0]=e,t[1]=0,t):0!==e&&Es(e)<Rs?(t[0]=4503599627370496*e,t[1]=-52,t):(t[0]=e,t[1]=0,t)};var Us=function(t,e){return 1===arguments.length?Js([0,0],t):Js(t,e)};var Ds=function(t){var e=Ie(t);return(e=(2146435072&e)>>>20)-1023|0},Os=Ds,Bs=[0,0],As=[0,0];var $s=function(t,e){var s,n;return 0===t||Nt(t)||es(t)?t:(Us(Bs,t),e+=Bs[1],(e+=Os(t=Bs[0]))<-1074?ks(0,t):e>1023?t<0?je:_e:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,gs(As,t),s=As[0],s&=2148532223,n*Gs(s|=e+1023<<20,As[1])))},qs=$s,tn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],en=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],sn=5.960464477539063e-8,nn=ln(new Array(20)),on=ln(new Array(20)),rn=ln(new Array(20)),an=ln(new Array(20));function ln(t){var e,s=t.length;for(e=0;e<s;e++)t[e]=0;return t}function cn(t,e,s,n,i,o,r,a,l){var c,d,h,u,m,p,f,b,y;for(u=o,y=n[s],b=s,m=0;b>0;m++)d=sn*y|0,an[m]=y-16777216*d|0,y=n[b-1]+d,b-=1;if(y=qs(y,i),y-=8*Qs(.125*y),y-=f=0|y,h=0,i>0?(f+=m=an[s-1]>>24-i,an[s-1]-=m<<24-i,h=an[s-1]>>23-i):0===i?h=an[s-1]>>23:y>=.5&&(h=2),h>0){for(f+=1,c=0,m=0;m<s;m++)b=an[m],0===c?0!==b&&(c=1,an[m]=16777216-b):an[m]=16777215-b;if(i>0)switch(i){case 1:an[s-1]&=8388607;break;case 2:an[s-1]&=4194303}2===h&&(y=1-y,0!==c&&(y-=qs(1,i)))}if(0===y){for(b=0,m=s-1;m>=o;m--)b|=an[m];if(0===b){for(p=1;0===an[o-p];p++);for(m=s+1;m<=s+p;m++){for(l[a+m]=tn[r+m],d=0,b=0;b<=a;b++)d+=t[b]*l[a+(m-b)];n[m]=d}return cn(t,e,s+=p,n,i,o,r,a,l)}}if(0===y)for(s-=1,i-=24;0===an[s];)s-=1,i-=24;else(y=qs(y,-i))>=16777216?(d=sn*y|0,an[s]=y-16777216*d|0,i+=24,an[s+=1]=d):an[s]=0|y;for(d=qs(1,i),m=s;m>=0;m--)n[m]=d*an[m],d*=sn;for(m=s;m>=0;m--){for(d=0,p=0;p<=u&&p<=s-m;p++)d+=en[p]*n[m+p];rn[s-m]=d}for(d=0,m=s;m>=0;m--)d+=rn[m];for(e[0]=0===h?d:-d,d=rn[0]-d,m=1;m<=s;m++)d+=rn[m];return e[1]=0===h?d:-d,7&f}var dn=function(t,e,s,n){var i,o,r,a,l,c,d;for(4,(o=(s-3)/24|0)<0&&(o=0),a=s-24*(o+1),c=o-(r=n-1),d=r+4,l=0;l<=d;l++)nn[l]=c<0?0:tn[c],c+=1;for(l=0;l<=4;l++){for(i=0,c=0;c<=r;c++)i+=t[c]*nn[r+(l-c)];on[l]=i}return 4,cn(t,e,4,on,a,4,o,r,nn)},hn=Math.round;var un=function(t,e,s){var n,i,o,r,a;return o=t-1.5707963267341256*(n=hn(.6366197723675814*t)),r=6077100506506192e-26*n,a=e>>20|0,s[0]=o-r,a-(Ie(s[0])>>20&2047)>16&&(r=20222662487959506e-37*n-((i=o)-(o=i-(r=6077100506303966e-26*n))-r),s[0]=o-r,a-(Ie(s[0])>>20&2047)>49&&(r=84784276603689e-45*n-((i=o)-(o=i-(r=20222662487111665e-37*n))-r),s[0]=o-r)),s[1]=o-s[0]-r,n},mn=1.5707963267341256,pn=6077100506506192e-26,fn=2*pn,bn=4*pn,yn=new Array(3),gn=new Array(2);var Zn=function(t,e){var s,n,i,o,r,a,l;if((i=2147483647&Ie(t)|0)<=1072243195)return e[0]=t,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?un(t,i,e):i<=1073928572?t>0?(l=t-mn,e[0]=l-pn,e[1]=l-e[0]-pn,1):(l=t+mn,e[0]=l+pn,e[1]=l-e[0]+pn,-1):t>0?(l=t-2*mn,e[0]=l-fn,e[1]=l-e[0]-fn,2):(l=t+2*mn,e[0]=l+fn,e[1]=l-e[0]+fn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?un(t,i,e):t>0?(l=t-3*mn,e[0]=l-1.8231301519518578e-10,e[1]=l-e[0]-1.8231301519518578e-10,3):(l=t+3*mn,e[0]=l+1.8231301519518578e-10,e[1]=l-e[0]+1.8231301519518578e-10,-3):1075388923===i?un(t,i,e):t>0?(l=t-4*mn,e[0]=l-bn,e[1]=l-e[0]-bn,4):(l=t+4*mn,e[0]=l+bn,e[1]=l-e[0]+bn,-4);if(i<1094263291)return un(t,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(s=js(t),l=Gs(i-((n=(i>>20)-1046)<<20|0),s),r=0;r<2;r++)yn[r]=0|l,l=16777216*(l-yn[r]);for(yn[2]=l,o=3;0===yn[o-1];)o-=1;return a=dn(yn,gn,n,o),t<0?(e[0]=-gn[0],e[1]=-gn[1],-a):(e[0]=gn[0],e[1]=gn[1],a)},wn=Zn,Xn=[0,0];var vn=function(t){var e;if(e=Ie(t),(e&=2147483647)<=1072243195)return e<1044381696?1:Ks(t,0);if(e>=2146435072)return NaN;switch(3&wn(t,Xn)){case 0:return Ks(Xn[0],Xn[1]);case 1:return-zs(Xn[0],Xn[1]);case 2:return-Ks(Xn[0],Xn[1]);default:return zs(Xn[0],Xn[1])}},Ln=Math.ceil;var xn=function(t){return t<0?Ln(t):Qs(t)};var Gn=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)};var Sn=function(t,e,s){var n,i,o;return o=(n=t-e)-(i=n*n)*Gn(i),qs(1-(e-n*o/(2-o)-t),s)};var kn=function(t){var e;return Nt(t)||t===_e?t:t===je?0:t>709.782712893384?_e:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:(e=xn(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5),Sn(t-.6931471803691238*e,1.9082149292705877e-10*e,e))};var Wn=function(t){return Nt(t)?t:(t<0&&(t=-t),t>21?kn(t)/2:(kn(t)+kn(-t))/2)};var Tn=function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313},Cn=.6931471803691238,Rn=1.9082149292705877e-10;var Pn=function(t){var e,s,n,i,o,r,a,l,c,d,h,u;if(t===_e||Nt(t))return t;if(t===je)return-1;if(0===t)return t;if(t<0?(s=!0,a=-t):(s=!1,a=t),a>=38.816242111356935){if(s)return-1;if(a>=709.782712893384)return _e}if(o=0|Ie(a),a>.34657359027997264)a<1.0397207708399179?s?(n=t+Cn,i=-Rn,u=-1):(n=t-Cn,i=Rn,u=1):(u=s?1.4426950408889634*t-.5:1.4426950408889634*t+.5,n=t-(d=u|=0)*Cn,i=d*Rn),c=n-(t=n-i)-i;else{if(o<1016070144)return t;u=0}return h=(l=t*(e=.5*t))*(((r=1+l*Tn(l))-(d=3-r*e))/(6-t*d)),0===u?t-(t*h-l):(h=t*(h-c)-c,h-=l,-1===u?.5*(t-h)-.5:1===u?t<-.25?-2*(h-(t+.5)):1+2*(t-h):u<=-2||u>56?(n=Ie(a=1-(h-t))+(u<<20)|0,(a=Ne(a,n))-1):(d=1,u<20?a=(d=Ne(d,n=1072693248-(2097152>>u)|0))-(h-t):(a=t-(h+(d=Ne(d,n=1023-u<<20|0))),a+=1),n=Ie(a)+(u<<20)|0,Ne(a,n)))},Vn=!0===Pe?0:1,Yn=new be(1),Mn=new ce(Yn.buffer);var In=function(t,e){return Yn[0]=t,Mn[Vn]=e>>>0,Yn[0]},Kn=In;var Hn=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)};var zn=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))};var Fn=function(t){var e,s,n,i,o,r,a,l,c,d;return i=t-1,(1048575&2+(n=Ie(t)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(c=(n&=1048575)-398458|0,d=440401-n|0,s=(l=(r=(o=i/(2+i))*o)*r)*Hn(l),a=r*zn(l)+s,(c|=d)>0?o*((e=.5*i*i)+a)-e:o*(a-i))};var Nn=function(t){var e,s,n,i,o,r,a;return Nt(t)||t<0?NaN:0===t?je:(o=0,(s=Ie(t))<1048576&&(o-=54,s=Ie(t*=0x40000000000000)),s>=2146435072?t+t:(o+=(s>>20)-1023|0,t=Ne(t,(s&=1048575)|1072693248^(i=s+614244&1048576|0)),r=o+=i>>20|0,n=Fn(t),a=3694239077158931e-28*r+25082946711645275e-27*((t-=1)+n),(a+=.4342944818781689*(t-(e=Kn(t,0))+n)+.4342944818781689*e)+.30102999566361177*r))};var _n=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)};var jn=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))};var Qn=function(t){var e,s,n,i,o,r,a,l,c,d;return i=t-1,(1048575&2+(n=Ie(t)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(c=(n&=1048575)-398458|0,d=440401-n|0,s=(l=(r=(o=i/(2+i))*o)*r)*_n(l),a=r*jn(l)+s,(c|=d)>0?o*((e=.5*i*i)+a)-e:o*(a-i))},En=[0,0];var Jn=function(t){var e,s,n,i,o;if(Nt(t)||t<0)return NaN;if(gs(En,t),o=0,(s=En[0])<1048576){if(0==(2147483647&s|En[1]))return je;o-=54,s=Ie(t*=0x40000000000000)}return s>=2146435072?t+t:(o+=(s>>20)-1023|0,t=Ne(t,(s&=1048575)|1072693248^(i=s+614244&1048576|0)),o+=i>>20|0,n=Qn(t),1.6751713164886512e-10*((t-=1)+n)+1.4426950407214463*(t-(e=Kn(t,0))+n)+1.4426950407214463*e+o)},Un=[0,0];var Dn=function(t){var e;if(e=Ie(t),(e&=2147483647)<=1072243195)return e<1045430272?t:zs(t,0);if(e>=2146435072)return NaN;switch(3&wn(t,Un)){case 0:return zs(Un[0],Un[1]);case 1:return Ks(Un[0],Un[1]);case 2:return-zs(Un[0],Un[1]);default:return-Ks(Un[0],Un[1])}};var On=function(t){var e,s;return 0===t?.16666666666666666:((t<0?-t:t)<=1?(e=t*(t*(-.789474443963537*t-163.72585752598383)-11561.443576500522)-351754.9648081514,s=t*(36157.827983443196+t*(1*t-277.7110814206028))-2110529.7888489086):(e=(t=1/t)*(t*(-351754.9648081514*t-11561.443576500522)-163.72585752598383)-.789474443963537,s=1+t*(t*(36157.827983443196+-2110529.7888489086*t)-277.7110814206028)),e/s)};var Bn=function(t){var e;return 0===t?t:(e=Es(t),t>710.4758600739439||t<-709.089565712824?t>0?_e:je:e>1?e>=709.0895657128241?(e=kn(.5*e),e*=.5*e,t<0&&(e=-e),e):(e=.5*(e=kn(e))-.5/e,t<0&&(e=-e),e):t+t*(e*=e)*On(e))};var An=function(t){return 0===t?.13333333333320124:.13333333333320124+t*(.021869488294859542+t*(.0035920791075913124+t*(.0005880412408202641+t*(7817944429395571e-20+-18558637485527546e-21*t))))};var $n=function(t){return 0===t?.05396825397622605:.05396825397622605+t*(.0088632398235993+t*(.0014562094543252903+t*(.0002464631348184699+t*(7140724913826082e-20+2590730518636337e-20*t))))};var qn=function(t,e,s){var n,i,o,r,a,l,c,d,h;return(i=2147483647&(n=Ie(t))|0)>=1072010280&&(t<0&&(t=-t,e=-e),t=(h=.7853981633974483-t)+(d=3061616997868383e-32-e),e=0),r=e+(h=t*t)*((a=h*t)*((r=An(d=h*h))+(c=h*$n(d)))+e),d=t+(r+=.3333333333333341*a),i>=1072010280?(1-(n>>30&2))*((c=s)-2*(t-(d*d/(d+c)-r))):1===s?d:(Kn(h=d,0),c=r-(h-t),Kn(l=o=-1/d,0),l+o*((a=1+l*h)+l*c))},ti=[0,0];var ei=function(t){var e,s;return e=Ie(t),(e&=2147483647)<=1072243195?e<1044381696?t:qn(t,0,1):e>=2146435072?NaN:(s=wn(t,ti),qn(ti[0],ti[1],1-((1&s)<<1)))};var si=function(t){var e,s;return 0===t?-.3333333333333332:((t<0?-t:t)<=1?(e=t*(t*(0*t-.9643991794250523)-99.28772310019185)-1614.6876844170845,s=4844.063053251255+t*(2235.4883906010045+t*(112.81167849163293+1*t))):(e=0+(t=1/t)*(t*(-1614.6876844170845*t-99.28772310019185)-.9643991794250523),s=1+t*(112.81167849163293+t*(2235.4883906010045+4844.063053251255*t))),e/s)};var ni=function(t){var e,s;if((s=Es(t))>44.014845965556525)return t<0?-1:1;if(s>=.625)s=1-2/((e=kn(2*s))+1),t<0&&(s=-s);else{if(0===t)return t;s=t+t*(e=t*t)*si(e)}return s};void 0===globalThis.CroquetMath&&(globalThis.CroquetMath={}),Object.assign(globalThis.CroquetMath,{acos:Ut,acosh:ts,asin:Jt,asinh:ss,atan:rs,atanh:cs,atan2:Cs,cbrt:Ys,cos:vn,cosh:Wn,exp:kn,expm1:Pn,log:qe,log1p:Ue,log10:Nn,log2:Jn,sin:Dn,sinh:Bn,tan:ei,tanh:ni});const ii=Math.pow;function oi(t){return t===1/0||t===-1/0}globalThis.CroquetMath.pow=(t,e)=>{if(isNaN(t)||isNaN(e))return NaN;if(oi(t)||oi(e))return ii(t,e);if(0===t||0===e)return ii(t,e);if(t<0&&!function(t){return Number.isInteger(t)}(e))return NaN;if(1===e)return t;if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return t*t*t*t;let s=1;t<0&&(t*=-1,s=ii(-1,e));return globalThis.CroquetMath.exp(globalThis.CroquetMath.log(t)*e)*s};var ri=function(t,e){return t<e};function ai(t){if(!(this instanceof ai))return new ai(t);this.array=[],this.size=0,this.compare=t||ri}ai.prototype.clone=function(){var t=new ai(this.compare);return t.size=this.size,t.array=this.array.slice(0,this.size),t},ai.prototype.add=function(t){var e,s,n=this.size;for(this.array[this.size]=t,this.size+=1;n>0&&(e=n-1>>1,s=this.array[e],this.compare(t,s));)this.array[n]=s,n=e;this.array[n]=t},ai.prototype.heapify=function(t){var e;for(this.array=t,this.size=t.length,e=this.size>>1;e>=0;e--)this._percolateDown(e)},ai.prototype._percolateUp=function(t,e){for(var s,n,i=this.array[t];t>0&&(s=t-1>>1,n=this.array[s],e||this.compare(i,n));)this.array[t]=n,t=s;this.array[t]=i},ai.prototype._percolateDown=function(t){for(var e,s,n,i=this.size,o=this.size>>>1,r=this.array[t];t<o&&(s=(e=1+(t<<1))+1,n=this.array[e],s<i&&this.compare(this.array[s],n)&&(e=s,n=this.array[s]),this.compare(n,r));)this.array[t]=n,t=e;this.array[t]=r},ai.prototype._removeAt=function(t){if(!(t>this.size-1||t<0))return this._percolateUp(t,!0),this.poll()},ai.prototype.remove=function(t){for(var e=0;e<this.size;e++)if(!this.compare(this.array[e],t)&&!this.compare(t,this.array[e]))return this._removeAt(e),!0;return!1},ai.prototype.removeOne=function(t){if("function"==typeof t)for(var e=0;e<this.size;e++)if(t(this.array[e]))return this._removeAt(e)},ai.prototype.removeMany=function(t,e){if("function"!=typeof t||this.size<1)return[];e=e?Math.min(e,this.size):this.size;for(var s=0,n=new Array(e),i=0,o=new Array(this.size);s<e&&!this.isEmpty();){var r=this.poll();t(r)?n[s++]=r:o[i++]=r}n.length=s;for(var a=0;a<i;)this.add(o[a++]);return n},ai.prototype.peek=function(){if(0!=this.size)return this.array[0]},ai.prototype.poll=function(){if(0!=this.size){var t=this.array[0];return this.size>1?(this.array[0]=this.array[--this.size],this._percolateDown(0)):this.size-=1,t}},ai.prototype.replaceTop=function(t){if(0!=this.size){var e=this.array[0];return this.array[0]=t,this._percolateDown(0),e}},ai.prototype.trim=function(){this.array=this.array.slice(0,this.size)},ai.prototype.isEmpty=function(){return 0===this.size},ai.prototype.forEach=function(t){if(!this.isEmpty()&&"function"==typeof t)for(var e=0,s=this.clone();!s.isEmpty();)t(s.poll(),e++)},ai.prototype.kSmallest=function(t){if(0==this.size)return[];t=Math.min(this.size,t);var e=new ai(this.compare);const s=Math.min((t>0?Math.pow(2,t-1):0)+1,this.size);e.size=s,e.array=this.array.slice(0,s);for(var n=new Array(t),i=0;i<t;i++)n[i]=e.poll();return n};var li=ai;class ci extends li{poll(){const t=super.poll();return this.array[this.size]=null,t}asArray(){const t=[];return this.forEach((e=>t.push(e))),t}asUnsortedArray(){return this.array.slice(0,this.size)}}var di={exports:{}},hi=di.exports=function(t){return function(){var e=t,s=e.lib.WordArray;function n(t,e,n){for(var i=[],o=0,r=0;r<e;r++)if(r%4){var a=n[t.charCodeAt(r-1)]<<r%4*2|n[t.charCodeAt(r)]>>>6-r%4*2;i[o>>>2]|=a<<24-o%4*8,o++}return s.create(i,o)}e.enc.Base64={stringify:function(t){var e=t.words,s=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;o<s;o+=3)for(var r=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<s;a++)i.push(n.charAt(r>>>6*(3-a)&63));var l=n.charAt(64);if(l)for(;i.length%4;)i.push(l);return i.join("")},parse:function(t){var e=t.length,s=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<s.length;o++)i[s.charCodeAt(o)]=o}var r=s.charAt(64);if(r){var a=t.indexOf(r);-1!==a&&(e=a)}return n(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64}(Z.exports),ui={exports:{}},mi=ui.exports=function(t){return t.enc.Utf8}(Z.exports),pi={exports:{}},fi={exports:{}};fi.exports=function(t){return function(){var e=t,s=e.lib,n=s.WordArray,i=s.Hasher,o=e.algo,r=[],a=o.SHA1=i.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var s=this._hash.words,n=s[0],i=s[1],o=s[2],a=s[3],l=s[4],c=0;c<80;c++){if(c<16)r[c]=0|t[e+c];else{var d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=d<<1|d>>>31}var h=(n<<5|n>>>27)+l+r[c];h+=c<20?1518500249+(i&o|~i&a):c<40?1859775393+(i^o^a):c<60?(i&o|i&a|o&a)-1894007588:(i^o^a)-899497514,l=a,a=o,o=i<<30|i>>>2,i=n,n=h}s[0]=s[0]+n|0,s[1]=s[1]+i|0,s[2]=s[2]+o|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0},_doFinalize:function(){var t=this._data,e=t.words,s=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=Math.floor(s/4294967296),e[15+(n+64>>>9<<4)]=s,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA1=i._createHelper(a),e.HmacSHA1=i._createHmacHelper(a)}(),t.SHA1}(Z.exports);var bi={exports:{}};bi.exports=function(t){!function(){var e=t,s=e.lib.Base,n=e.enc.Utf8;e.algo.HMAC=s.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=n.parse(e));var s=t.blockSize,i=4*s;e.sigBytes>i&&(e=t.finalize(e)),e.clamp();for(var o=this._oKey=e.clone(),r=this._iKey=e.clone(),a=o.words,l=r.words,c=0;c<s;c++)a[c]^=1549556828,l[c]^=909522486;o.sigBytes=r.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,s=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(s))}})}()}(Z.exports);var yi=pi.exports=function(t){return function(){var e=t,s=e.lib,n=s.Base,i=s.WordArray,o=e.algo,r=o.SHA1,a=o.HMAC,l=o.PBKDF2=n.extend({cfg:n.extend({keySize:4,hasher:r,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var s=this.cfg,n=a.create(s.hasher,t),o=i.create(),r=i.create([1]),l=o.words,c=r.words,d=s.keySize,h=s.iterations;l.length<d;){var u=n.update(e).finalize(r);n.reset();for(var m=u.words,p=m.length,f=u,b=1;b<h;b++){f=n.finalize(f),n.reset();for(var y=f.words,g=0;g<p;g++)m[g]^=y[g]}o.concat(u),c[0]++}return o.sigBytes=4*d,o}});e.PBKDF2=function(t,e,s){return l.create(s).compute(t,e)}}(),t.PBKDF2}(Z.exports),gi={exports:{}},Zi={exports:{}};Zi.exports=function(t){return function(e){var s=t,n=s.lib,i=n.WordArray,o=n.Hasher,r=s.algo,a=[];!function(){for(var t=0;t<64;t++)a[t]=4294967296*e.abs(e.sin(t+1))|0}();var l=r.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var s=0;s<16;s++){var n=e+s,i=t[n];t[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,r=t[e+0],l=t[e+1],m=t[e+2],p=t[e+3],f=t[e+4],b=t[e+5],y=t[e+6],g=t[e+7],Z=t[e+8],w=t[e+9],X=t[e+10],v=t[e+11],L=t[e+12],x=t[e+13],G=t[e+14],S=t[e+15],k=o[0],W=o[1],T=o[2],C=o[3];k=c(k,W,T,C,r,7,a[0]),C=c(C,k,W,T,l,12,a[1]),T=c(T,C,k,W,m,17,a[2]),W=c(W,T,C,k,p,22,a[3]),k=c(k,W,T,C,f,7,a[4]),C=c(C,k,W,T,b,12,a[5]),T=c(T,C,k,W,y,17,a[6]),W=c(W,T,C,k,g,22,a[7]),k=c(k,W,T,C,Z,7,a[8]),C=c(C,k,W,T,w,12,a[9]),T=c(T,C,k,W,X,17,a[10]),W=c(W,T,C,k,v,22,a[11]),k=c(k,W,T,C,L,7,a[12]),C=c(C,k,W,T,x,12,a[13]),T=c(T,C,k,W,G,17,a[14]),k=d(k,W=c(W,T,C,k,S,22,a[15]),T,C,l,5,a[16]),C=d(C,k,W,T,y,9,a[17]),T=d(T,C,k,W,v,14,a[18]),W=d(W,T,C,k,r,20,a[19]),k=d(k,W,T,C,b,5,a[20]),C=d(C,k,W,T,X,9,a[21]),T=d(T,C,k,W,S,14,a[22]),W=d(W,T,C,k,f,20,a[23]),k=d(k,W,T,C,w,5,a[24]),C=d(C,k,W,T,G,9,a[25]),T=d(T,C,k,W,p,14,a[26]),W=d(W,T,C,k,Z,20,a[27]),k=d(k,W,T,C,x,5,a[28]),C=d(C,k,W,T,m,9,a[29]),T=d(T,C,k,W,g,14,a[30]),k=h(k,W=d(W,T,C,k,L,20,a[31]),T,C,b,4,a[32]),C=h(C,k,W,T,Z,11,a[33]),T=h(T,C,k,W,v,16,a[34]),W=h(W,T,C,k,G,23,a[35]),k=h(k,W,T,C,l,4,a[36]),C=h(C,k,W,T,f,11,a[37]),T=h(T,C,k,W,g,16,a[38]),W=h(W,T,C,k,X,23,a[39]),k=h(k,W,T,C,x,4,a[40]),C=h(C,k,W,T,r,11,a[41]),T=h(T,C,k,W,p,16,a[42]),W=h(W,T,C,k,y,23,a[43]),k=h(k,W,T,C,w,4,a[44]),C=h(C,k,W,T,L,11,a[45]),T=h(T,C,k,W,S,16,a[46]),k=u(k,W=h(W,T,C,k,m,23,a[47]),T,C,r,6,a[48]),C=u(C,k,W,T,g,10,a[49]),T=u(T,C,k,W,G,15,a[50]),W=u(W,T,C,k,b,21,a[51]),k=u(k,W,T,C,L,6,a[52]),C=u(C,k,W,T,p,10,a[53]),T=u(T,C,k,W,X,15,a[54]),W=u(W,T,C,k,l,21,a[55]),k=u(k,W,T,C,Z,6,a[56]),C=u(C,k,W,T,S,10,a[57]),T=u(T,C,k,W,y,15,a[58]),W=u(W,T,C,k,x,21,a[59]),k=u(k,W,T,C,f,6,a[60]),C=u(C,k,W,T,v,10,a[61]),T=u(T,C,k,W,m,15,a[62]),W=u(W,T,C,k,w,21,a[63]),o[0]=o[0]+k|0,o[1]=o[1]+W|0,o[2]=o[2]+T|0,o[3]=o[3]+C|0},_doFinalize:function(){var t=this._data,s=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;s[i>>>5]|=128<<24-i%32;var o=e.floor(n/4294967296),r=n;s[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),s[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(s.length+1),this._process();for(var a=this._hash,l=a.words,c=0;c<4;c++){var d=l[c];l[c]=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8)}return a},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});function c(t,e,s,n,i,o,r){var a=t+(e&s|~e&n)+i+r;return(a<<o|a>>>32-o)+e}function d(t,e,s,n,i,o,r){var a=t+(e&n|s&~n)+i+r;return(a<<o|a>>>32-o)+e}function h(t,e,s,n,i,o,r){var a=t+(e^s^n)+i+r;return(a<<o|a>>>32-o)+e}function u(t,e,s,n,i,o,r){var a=t+(s^(e|~n))+i+r;return(a<<o|a>>>32-o)+e}s.MD5=o._createHelper(l),s.HmacMD5=o._createHmacHelper(l)}(Math),t.MD5}(Z.exports);var wi={exports:{}};wi.exports=function(t){return function(){var e=t,s=e.lib,n=s.Base,i=s.WordArray,o=e.algo,r=o.MD5,a=o.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:r,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var s,n=this.cfg,o=n.hasher.create(),r=i.create(),a=r.words,l=n.keySize,c=n.iterations;a.length<l;){s&&o.update(s),s=o.update(t).finalize(e),o.reset();for(var d=1;d<c;d++)s=o.finalize(s),o.reset();r.concat(s)}return r.sigBytes=4*l,r}});e.EvpKDF=function(t,e,s){return a.create(s).compute(t,e)}}(),t.EvpKDF}(Z.exports);var Xi={exports:{}};Xi.exports=function(t){t.lib.Cipher||function(e){var s=t,n=s.lib,i=n.Base,o=n.WordArray,r=n.BufferedBlockAlgorithm,a=s.enc;a.Utf8;var l=a.Base64,c=s.algo.EvpKDF,d=n.Cipher=r.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,s){this.cfg=this.cfg.extend(s),this._xformMode=t,this._key=e,this.reset()},reset:function(){r.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?Z:y}return function(e){return{encrypt:function(s,n,i){return t(n).encrypt(e,s,n,i)},decrypt:function(s,n,i){return t(n).decrypt(e,s,n,i)}}}}()});n.StreamCipher=d.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=s.mode={},u=n.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),m=h.CBC=function(){var t=u.extend();function s(t,s,n){var i,o=this._iv;o?(i=o,this._iv=e):i=this._prevBlock;for(var r=0;r<n;r++)t[s+r]^=i[r]}return t.Encryptor=t.extend({processBlock:function(t,e){var n=this._cipher,i=n.blockSize;s.call(this,t,e,i),n.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),t.Decryptor=t.extend({processBlock:function(t,e){var n=this._cipher,i=n.blockSize,o=t.slice(e,e+i);n.decryptBlock(t,e),s.call(this,t,e,i),this._prevBlock=o}}),t}(),p=(s.pad={}).Pkcs7={pad:function(t,e){for(var s=4*e,n=s-t.sigBytes%s,i=n<<24|n<<16|n<<8|n,r=[],a=0;a<n;a+=4)r.push(i);var l=o.create(r,n);t.concat(l)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}};n.BlockCipher=d.extend({cfg:d.cfg.extend({mode:m,padding:p}),reset:function(){var t;d.reset.call(this);var e=this.cfg,s=e.iv,n=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=n.createEncryptor:(t=n.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,s&&s.words):(this._mode=t.call(n,this,s&&s.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4});var f=n.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),b=(s.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,s=t.salt;return(s?o.create([1398893684,1701076831]).concat(s).concat(e):e).toString(l)},parse:function(t){var e,s=l.parse(t),n=s.words;return 1398893684==n[0]&&1701076831==n[1]&&(e=o.create(n.slice(2,4)),n.splice(0,4),s.sigBytes-=16),f.create({ciphertext:s,salt:e})}},y=n.SerializableCipher=i.extend({cfg:i.extend({format:b}),encrypt:function(t,e,s,n){n=this.cfg.extend(n);var i=t.createEncryptor(s,n),o=i.finalize(e),r=i.cfg;return f.create({ciphertext:o,key:s,iv:r.iv,algorithm:t,mode:r.mode,padding:r.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,s,n){return n=this.cfg.extend(n),e=this._parse(e,n.format),t.createDecryptor(s,n).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),g=(s.kdf={}).OpenSSL={execute:function(t,e,s,n){n||(n=o.random(8));var i=c.create({keySize:e+s}).compute(t,n),r=o.create(i.words.slice(e),4*s);return i.sigBytes=4*e,f.create({key:i,iv:r,salt:n})}},Z=n.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:g}),encrypt:function(t,e,s,n){var i=(n=this.cfg.extend(n)).kdf.execute(s,t.keySize,t.ivSize);n.iv=i.iv;var o=y.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,s,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(s,t.keySize,t.ivSize,e.salt);return n.iv=i.iv,y.decrypt.call(this,t,e,i.key,n)}})}()}(Z.exports);var vi=gi.exports=function(t){return function(){var e=t,s=e.lib.BlockCipher,n=e.algo,i=[],o=[],r=[],a=[],l=[],c=[],d=[],h=[],u=[],m=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var s=0,n=0;for(e=0;e<256;e++){var p=n^n<<1^n<<2^n<<3^n<<4;p=p>>>8^255&p^99,i[s]=p,o[p]=s;var f=t[s],b=t[f],y=t[b],g=257*t[p]^16843008*p;r[s]=g<<24|g>>>8,a[s]=g<<16|g>>>16,l[s]=g<<8|g>>>24,c[s]=g,g=16843009*y^65537*b^257*f^16843008*s,d[p]=g<<24|g>>>8,h[p]=g<<16|g>>>16,u[p]=g<<8|g>>>24,m[p]=g,s?(s=f^t[t[t[y^f]]],n^=t[t[n]]):s=n=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],f=n.AES=s.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,s=t.sigBytes/4,n=4*((this._nRounds=s+6)+1),o=this._keySchedule=[],r=0;r<n;r++)r<s?o[r]=e[r]:(c=o[r-1],r%s?s>6&&r%s==4&&(c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c]):(c=i[(c=c<<8|c>>>24)>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c],c^=p[r/s|0]<<24),o[r]=o[r-s]^c);for(var a=this._invKeySchedule=[],l=0;l<n;l++){if(r=n-l,l%4)var c=o[r];else c=o[r-4];a[l]=l<4||r<=4?c:d[i[c>>>24]]^h[i[c>>>16&255]]^u[i[c>>>8&255]]^m[i[255&c]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,r,a,l,c,i)},decryptBlock:function(t,e){var s=t[e+1];t[e+1]=t[e+3],t[e+3]=s,this._doCryptBlock(t,e,this._invKeySchedule,d,h,u,m,o),s=t[e+1],t[e+1]=t[e+3],t[e+3]=s},_doCryptBlock:function(t,e,s,n,i,o,r,a){for(var l=this._nRounds,c=t[e]^s[0],d=t[e+1]^s[1],h=t[e+2]^s[2],u=t[e+3]^s[3],m=4,p=1;p<l;p++){var f=n[c>>>24]^i[d>>>16&255]^o[h>>>8&255]^r[255&u]^s[m++],b=n[d>>>24]^i[h>>>16&255]^o[u>>>8&255]^r[255&c]^s[m++],y=n[h>>>24]^i[u>>>16&255]^o[c>>>8&255]^r[255&d]^s[m++],g=n[u>>>24]^i[c>>>16&255]^o[d>>>8&255]^r[255&h]^s[m++];c=f,d=b,h=y,u=g}f=(a[c>>>24]<<24|a[d>>>16&255]<<16|a[h>>>8&255]<<8|a[255&u])^s[m++],b=(a[d>>>24]<<24|a[h>>>16&255]<<16|a[u>>>8&255]<<8|a[255&c])^s[m++],y=(a[h>>>24]<<24|a[u>>>16&255]<<16|a[c>>>8&255]<<8|a[255&d])^s[m++],g=(a[u>>>24]<<24|a[c>>>16&255]<<16|a[d>>>8&255]<<8|a[255&h])^s[m++],t[e]=f,t[e+1]=b,t[e+2]=y,t[e+3]=g},keySize:8});e.AES=s._createHelper(f)}(),t.AES}(Z.exports),Li={exports:{}},xi=Li.exports=function(t){return t.HmacSHA256}(Z.exports);function Gi(t){let e=t.length;for(;--e>=0;)t[e]=0}const Si=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),ki=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Wi=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Ti=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ci=new Array(576);Gi(Ci);const Ri=new Array(60);Gi(Ri);const Pi=new Array(512);Gi(Pi);const Vi=new Array(256);Gi(Vi);const Yi=new Array(29);Gi(Yi);const Mi=new Array(30);function Ii(t,e,s,n,i){this.static_tree=t,this.extra_bits=e,this.extra_base=s,this.elems=n,this.max_length=i,this.has_stree=t&&t.length}let Ki,Hi,zi;function Fi(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}Gi(Mi);const Ni=t=>t<256?Pi[t]:Pi[256+(t>>>7)],_i=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},ji=(t,e,s)=>{t.bi_valid>16-s?(t.bi_buf|=e<<t.bi_valid&65535,_i(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=s-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=s)},Qi=(t,e,s)=>{ji(t,s[2*e],s[2*e+1])},Ei=(t,e)=>{let s=0;do{s|=1&t,t>>>=1,s<<=1}while(--e>0);return s>>>1},Ji=(t,e,s)=>{const n=new Array(16);let i,o,r=0;for(i=1;i<=15;i++)n[i]=r=r+s[i-1]<<1;for(o=0;o<=e;o++){let e=t[2*o+1];0!==e&&(t[2*o]=Ei(n[e]++,e))}},Ui=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},Di=t=>{t.bi_valid>8?_i(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},Oi=(t,e,s,n)=>{const i=2*e,o=2*s;return t[i]<t[o]||t[i]===t[o]&&n[e]<=n[s]},Bi=(t,e,s)=>{const n=t.heap[s];let i=s<<1;for(;i<=t.heap_len&&(i<t.heap_len&&Oi(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!Oi(e,n,t.heap[i],t.depth));)t.heap[s]=t.heap[i],s=i,i<<=1;t.heap[s]=n},Ai=(t,e,s)=>{let n,i,o,r,a=0;if(0!==t.last_lit)do{n=t.pending_buf[t.d_buf+2*a]<<8|t.pending_buf[t.d_buf+2*a+1],i=t.pending_buf[t.l_buf+a],a++,0===n?Qi(t,i,e):(o=Vi[i],Qi(t,o+256+1,e),r=Si[o],0!==r&&(i-=Yi[o],ji(t,i,r)),n--,o=Ni(n),Qi(t,o,s),r=ki[o],0!==r&&(n-=Mi[o],ji(t,n,r)))}while(a<t.last_lit);Qi(t,256,e)},$i=(t,e)=>{const s=e.dyn_tree,n=e.stat_desc.static_tree,i=e.stat_desc.has_stree,o=e.stat_desc.elems;let r,a,l,c=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<o;r++)0!==s[2*r]?(t.heap[++t.heap_len]=c=r,t.depth[r]=0):s[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=c<2?++c:0,s[2*l]=1,t.depth[l]=0,t.opt_len--,i&&(t.static_len-=n[2*l+1]);for(e.max_code=c,r=t.heap_len>>1;r>=1;r--)Bi(t,s,r);l=o;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],Bi(t,s,1),a=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=a,s[2*l]=s[2*r]+s[2*a],t.depth[l]=(t.depth[r]>=t.depth[a]?t.depth[r]:t.depth[a])+1,s[2*r+1]=s[2*a+1]=l,t.heap[1]=l++,Bi(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const s=e.dyn_tree,n=e.max_code,i=e.stat_desc.static_tree,o=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,a=e.stat_desc.extra_base,l=e.stat_desc.max_length;let c,d,h,u,m,p,f=0;for(u=0;u<=15;u++)t.bl_count[u]=0;for(s[2*t.heap[t.heap_max]+1]=0,c=t.heap_max+1;c<573;c++)d=t.heap[c],u=s[2*s[2*d+1]+1]+1,u>l&&(u=l,f++),s[2*d+1]=u,d>n||(t.bl_count[u]++,m=0,d>=a&&(m=r[d-a]),p=s[2*d],t.opt_len+=p*(u+m),o&&(t.static_len+=p*(i[2*d+1]+m)));if(0!==f){do{for(u=l-1;0===t.bl_count[u];)u--;t.bl_count[u]--,t.bl_count[u+1]+=2,t.bl_count[l]--,f-=2}while(f>0);for(u=l;0!==u;u--)for(d=t.bl_count[u];0!==d;)h=t.heap[--c],h>n||(s[2*h+1]!==u&&(t.opt_len+=(u-s[2*h+1])*s[2*h],s[2*h+1]=u),d--)}})(t,e),Ji(s,c,t.bl_count)},qi=(t,e,s)=>{let n,i,o=-1,r=e[1],a=0,l=7,c=4;for(0===r&&(l=138,c=3),e[2*(s+1)+1]=65535,n=0;n<=s;n++)i=r,r=e[2*(n+1)+1],++a<l&&i===r||(a<c?t.bl_tree[2*i]+=a:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[32]++):a<=10?t.bl_tree[34]++:t.bl_tree[36]++,a=0,o=i,0===r?(l=138,c=3):i===r?(l=6,c=3):(l=7,c=4))},to=(t,e,s)=>{let n,i,o=-1,r=e[1],a=0,l=7,c=4;for(0===r&&(l=138,c=3),n=0;n<=s;n++)if(i=r,r=e[2*(n+1)+1],!(++a<l&&i===r)){if(a<c)do{Qi(t,i,t.bl_tree)}while(0!=--a);else 0!==i?(i!==o&&(Qi(t,i,t.bl_tree),a--),Qi(t,16,t.bl_tree),ji(t,a-3,2)):a<=10?(Qi(t,17,t.bl_tree),ji(t,a-3,3)):(Qi(t,18,t.bl_tree),ji(t,a-11,7));a=0,o=i,0===r?(l=138,c=3):i===r?(l=6,c=3):(l=7,c=4)}};let eo=!1;const so=(t,e,s,n)=>{ji(t,0+(n?1:0),3),((t,e,s,n)=>{Di(t),n&&(_i(t,s),_i(t,~s)),t.pending_buf.set(t.window.subarray(e,e+s),t.pending),t.pending+=s})(t,e,s,!0)};var no=(t,e,s,n)=>{let i,o,r=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,s=4093624447;for(e=0;e<=31;e++,s>>>=1)if(1&s&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),$i(t,t.l_desc),$i(t,t.d_desc),r=(t=>{let e;for(qi(t,t.dyn_ltree,t.l_desc.max_code),qi(t,t.dyn_dtree,t.d_desc.max_code),$i(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*Ti[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),i=t.opt_len+3+7>>>3,o=t.static_len+3+7>>>3,o<=i&&(i=o)):i=o=s+5,s+4<=i&&-1!==e?so(t,e,s,n):4===t.strategy||o===i?(ji(t,2+(n?1:0),3),Ai(t,Ci,Ri)):(ji(t,4+(n?1:0),3),((t,e,s,n)=>{let i;for(ji(t,e-257,5),ji(t,s-1,5),ji(t,n-4,4),i=0;i<n;i++)ji(t,t.bl_tree[2*Ti[i]+1],3);to(t,t.dyn_ltree,e-1),to(t,t.dyn_dtree,s-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,r+1),Ai(t,t.dyn_ltree,t.dyn_dtree)),Ui(t),n&&Di(t)},io={_tr_init:t=>{eo||((()=>{let t,e,s,n,i;const o=new Array(16);for(s=0,n=0;n<28;n++)for(Yi[n]=s,t=0;t<1<<Si[n];t++)Vi[s++]=n;for(Vi[s-1]=n,i=0,n=0;n<16;n++)for(Mi[n]=i,t=0;t<1<<ki[n];t++)Pi[i++]=n;for(i>>=7;n<30;n++)for(Mi[n]=i<<7,t=0;t<1<<ki[n]-7;t++)Pi[256+i++]=n;for(e=0;e<=15;e++)o[e]=0;for(t=0;t<=143;)Ci[2*t+1]=8,t++,o[8]++;for(;t<=255;)Ci[2*t+1]=9,t++,o[9]++;for(;t<=279;)Ci[2*t+1]=7,t++,o[7]++;for(;t<=287;)Ci[2*t+1]=8,t++,o[8]++;for(Ji(Ci,287,o),t=0;t<30;t++)Ri[2*t+1]=5,Ri[2*t]=Ei(t,5);Ki=new Ii(Ci,Si,257,286,15),Hi=new Ii(Ri,ki,0,30,15),zi=new Ii(new Array(0),Wi,0,19,7)})(),eo=!0),t.l_desc=new Fi(t.dyn_ltree,Ki),t.d_desc=new Fi(t.dyn_dtree,Hi),t.bl_desc=new Fi(t.bl_tree,zi),t.bi_buf=0,t.bi_valid=0,Ui(t)},_tr_stored_block:so,_tr_flush_block:no,_tr_tally:(t,e,s)=>(t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&s,t.last_lit++,0===e?t.dyn_ltree[2*s]++:(t.matches++,e--,t.dyn_ltree[2*(Vi[s]+256+1)]++,t.dyn_dtree[2*Ni(e)]++),t.last_lit===t.lit_bufsize-1),_tr_align:t=>{ji(t,2,3),Qi(t,256,Ci),(t=>{16===t.bi_valid?(_i(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var oo=(t,e,s,n)=>{let i=65535&t|0,o=t>>>16&65535|0,r=0;for(;0!==s;){r=s>2e3?2e3:s,s-=r;do{i=i+e[n++]|0,o=o+i|0}while(--r);i%=65521,o%=65521}return i|o<<16|0};const ro=new Uint32Array((()=>{let t,e=[];for(var s=0;s<256;s++){t=s;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[s]=t}return e})());var ao=(t,e,s,n)=>{const i=ro,o=n+s;t^=-1;for(let s=n;s<o;s++)t=t>>>8^i[255&(t^e[s])];return-1^t},lo={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},co={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:ho,_tr_stored_block:uo,_tr_flush_block:mo,_tr_tally:po,_tr_align:fo}=io,{Z_NO_FLUSH:bo,Z_PARTIAL_FLUSH:yo,Z_FULL_FLUSH:go,Z_FINISH:Zo,Z_BLOCK:wo,Z_OK:Xo,Z_STREAM_END:vo,Z_STREAM_ERROR:Lo,Z_DATA_ERROR:xo,Z_BUF_ERROR:Go,Z_DEFAULT_COMPRESSION:So,Z_FILTERED:ko,Z_HUFFMAN_ONLY:Wo,Z_RLE:To,Z_FIXED:Co,Z_DEFAULT_STRATEGY:Ro,Z_UNKNOWN:Po,Z_DEFLATED:Vo}=co,Yo=(t,e)=>(t.msg=lo[e],e),Mo=t=>(t<<1)-(t>4?9:0),Io=t=>{let e=t.length;for(;--e>=0;)t[e]=0};let Ko=(t,e,s)=>(e<<t.hash_shift^s)&t.hash_mask;const Ho=t=>{const e=t.state;let s=e.pending;s>t.avail_out&&(s=t.avail_out),0!==s&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+s),t.next_out),t.next_out+=s,e.pending_out+=s,t.total_out+=s,t.avail_out-=s,e.pending-=s,0===e.pending&&(e.pending_out=0))},zo=(t,e)=>{mo(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,Ho(t.strm)},Fo=(t,e)=>{t.pending_buf[t.pending++]=e},No=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},_o=(t,e,s,n)=>{let i=t.avail_in;return i>n&&(i=n),0===i?0:(t.avail_in-=i,e.set(t.input.subarray(t.next_in,t.next_in+i),s),1===t.state.wrap?t.adler=oo(t.adler,e,i,s):2===t.state.wrap&&(t.adler=ao(t.adler,e,i,s)),t.next_in+=i,t.total_in+=i,i)},jo=(t,e)=>{let s,n,i=t.max_chain_length,o=t.strstart,r=t.prev_length,a=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,c=t.window,d=t.w_mask,h=t.prev,u=t.strstart+258;let m=c[o+r-1],p=c[o+r];t.prev_length>=t.good_match&&(i>>=2),a>t.lookahead&&(a=t.lookahead);do{if(s=e,c[s+r]===p&&c[s+r-1]===m&&c[s]===c[o]&&c[++s]===c[o+1]){o+=2,s++;do{}while(c[++o]===c[++s]&&c[++o]===c[++s]&&c[++o]===c[++s]&&c[++o]===c[++s]&&c[++o]===c[++s]&&c[++o]===c[++s]&&c[++o]===c[++s]&&c[++o]===c[++s]&&o<u);if(n=258-(u-o),o=u-258,n>r){if(t.match_start=e,r=n,n>=a)break;m=c[o+r-1],p=c[o+r]}}}while((e=h[e&d])>l&&0!=--i);return r<=t.lookahead?r:t.lookahead},Qo=t=>{const e=t.w_size;let s,n,i,o,r;do{if(o=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)){t.window.set(t.window.subarray(e,e+e),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,n=t.hash_size,s=n;do{i=t.head[--s],t.head[s]=i>=e?i-e:0}while(--n);n=e,s=n;do{i=t.prev[--s],t.prev[s]=i>=e?i-e:0}while(--n);o+=e}if(0===t.strm.avail_in)break;if(n=_o(t.strm,t.window,t.strstart+t.lookahead,o),t.lookahead+=n,t.lookahead+t.insert>=3)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=Ko(t,t.ins_h,t.window[r+1]);t.insert&&(t.ins_h=Ko(t,t.ins_h,t.window[r+3-1]),t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},Eo=(t,e)=>{let s,n;for(;;){if(t.lookahead<262){if(Qo(t),t.lookahead<262&&e===bo)return 1;if(0===t.lookahead)break}if(s=0,t.lookahead>=3&&(t.ins_h=Ko(t,t.ins_h,t.window[t.strstart+3-1]),s=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==s&&t.strstart-s<=t.w_size-262&&(t.match_length=jo(t,s)),t.match_length>=3)if(n=po(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=Ko(t,t.ins_h,t.window[t.strstart+3-1]),s=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=Ko(t,t.ins_h,t.window[t.strstart+1]);else n=po(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(zo(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===Zo?(zo(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zo(t,!1),0===t.strm.avail_out)?1:2},Jo=(t,e)=>{let s,n,i;for(;;){if(t.lookahead<262){if(Qo(t),t.lookahead<262&&e===bo)return 1;if(0===t.lookahead)break}if(s=0,t.lookahead>=3&&(t.ins_h=Ko(t,t.ins_h,t.window[t.strstart+3-1]),s=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==s&&t.prev_length<t.max_lazy_match&&t.strstart-s<=t.w_size-262&&(t.match_length=jo(t,s),t.match_length<=5&&(t.strategy===ko||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-3,n=po(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=i&&(t.ins_h=Ko(t,t.ins_h,t.window[t.strstart+3-1]),s=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(zo(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(n=po(t,0,t.window[t.strstart-1]),n&&zo(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=po(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===Zo?(zo(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zo(t,!1),0===t.strm.avail_out)?1:2};function Uo(t,e,s,n,i){this.good_length=t,this.max_lazy=e,this.nice_length=s,this.max_chain=n,this.func=i}const Do=[new Uo(0,0,0,0,((t,e)=>{let s=65535;for(s>t.pending_buf_size-5&&(s=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Qo(t),0===t.lookahead&&e===bo)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;const n=t.block_start+s;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,zo(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-262&&(zo(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===Zo?(zo(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(zo(t,!1),t.strm.avail_out),1)})),new Uo(4,4,8,4,Eo),new Uo(4,5,16,8,Eo),new Uo(4,6,32,32,Eo),new Uo(4,4,16,16,Jo),new Uo(8,16,32,32,Jo),new Uo(8,16,128,128,Jo),new Uo(8,32,128,256,Jo),new Uo(32,128,258,1024,Jo),new Uo(32,258,258,4096,Jo)];function Oo(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Vo,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),Io(this.dyn_ltree),Io(this.dyn_dtree),Io(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),Io(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),Io(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Bo=t=>{if(!t||!t.state)return Yo(t,Lo);t.total_in=t.total_out=0,t.data_type=Po;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=bo,ho(e),Xo},Ao=t=>{const e=Bo(t);var s;return e===Xo&&((s=t.state).window_size=2*s.w_size,Io(s.head),s.max_lazy_match=Do[s.level].max_lazy,s.good_match=Do[s.level].good_length,s.nice_match=Do[s.level].nice_length,s.max_chain_length=Do[s.level].max_chain,s.strstart=0,s.block_start=0,s.lookahead=0,s.insert=0,s.match_length=s.prev_length=2,s.match_available=0,s.ins_h=0),e},$o=(t,e,s,n,i,o)=>{if(!t)return Lo;let r=1;if(e===So&&(e=6),n<0?(r=0,n=-n):n>15&&(r=2,n-=16),i<1||i>9||s!==Vo||n<8||n>15||e<0||e>9||o<0||o>Co)return Yo(t,Lo);8===n&&(n=9);const a=new Oo;return t.state=a,a.strm=t,a.wrap=r,a.gzhead=null,a.w_bits=n,a.w_size=1<<a.w_bits,a.w_mask=a.w_size-1,a.hash_bits=i+7,a.hash_size=1<<a.hash_bits,a.hash_mask=a.hash_size-1,a.hash_shift=~~((a.hash_bits+3-1)/3),a.window=new Uint8Array(2*a.w_size),a.head=new Uint16Array(a.hash_size),a.prev=new Uint16Array(a.w_size),a.lit_bufsize=1<<i+6,a.pending_buf_size=4*a.lit_bufsize,a.pending_buf=new Uint8Array(a.pending_buf_size),a.d_buf=1*a.lit_bufsize,a.l_buf=3*a.lit_bufsize,a.level=e,a.strategy=o,a.method=s,Ao(t)};var qo={deflateInit:(t,e)=>$o(t,e,Vo,15,8,Ro),deflateInit2:$o,deflateReset:Ao,deflateResetKeep:Bo,deflateSetHeader:(t,e)=>t&&t.state?2!==t.state.wrap?Lo:(t.state.gzhead=e,Xo):Lo,deflate:(t,e)=>{let s,n;if(!t||!t.state||e>wo||e<0)return t?Yo(t,Lo):Lo;const i=t.state;if(!t.output||!t.input&&0!==t.avail_in||666===i.status&&e!==Zo)return Yo(t,0===t.avail_out?Go:Lo);i.strm=t;const o=i.last_flush;if(i.last_flush=e,42===i.status)if(2===i.wrap)t.adler=0,Fo(i,31),Fo(i,139),Fo(i,8),i.gzhead?(Fo(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),Fo(i,255&i.gzhead.time),Fo(i,i.gzhead.time>>8&255),Fo(i,i.gzhead.time>>16&255),Fo(i,i.gzhead.time>>24&255),Fo(i,9===i.level?2:i.strategy>=Wo||i.level<2?4:0),Fo(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(Fo(i,255&i.gzhead.extra.length),Fo(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=ao(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(Fo(i,0),Fo(i,0),Fo(i,0),Fo(i,0),Fo(i,0),Fo(i,9===i.level?2:i.strategy>=Wo||i.level<2?4:0),Fo(i,3),i.status=113);else{let e=Vo+(i.w_bits-8<<4)<<8,s=-1;s=i.strategy>=Wo||i.level<2?0:i.level<6?1:6===i.level?2:3,e|=s<<6,0!==i.strstart&&(e|=32),e+=31-e%31,i.status=113,No(i,e),0!==i.strstart&&(No(i,t.adler>>>16),No(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(s=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>s&&(t.adler=ao(t.adler,i.pending_buf,i.pending-s,s)),Ho(t),s=i.pending,i.pending!==i.pending_buf_size));)Fo(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>s&&(t.adler=ao(t.adler,i.pending_buf,i.pending-s,s)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){s=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>s&&(t.adler=ao(t.adler,i.pending_buf,i.pending-s,s)),Ho(t),s=i.pending,i.pending===i.pending_buf_size)){n=1;break}n=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,Fo(i,n)}while(0!==n);i.gzhead.hcrc&&i.pending>s&&(t.adler=ao(t.adler,i.pending_buf,i.pending-s,s)),0===n&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){s=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>s&&(t.adler=ao(t.adler,i.pending_buf,i.pending-s,s)),Ho(t),s=i.pending,i.pending===i.pending_buf_size)){n=1;break}n=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,Fo(i,n)}while(0!==n);i.gzhead.hcrc&&i.pending>s&&(t.adler=ao(t.adler,i.pending_buf,i.pending-s,s)),0===n&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&Ho(t),i.pending+2<=i.pending_buf_size&&(Fo(i,255&t.adler),Fo(i,t.adler>>8&255),t.adler=0,i.status=113)):i.status=113),0!==i.pending){if(Ho(t),0===t.avail_out)return i.last_flush=-1,Xo}else if(0===t.avail_in&&Mo(e)<=Mo(o)&&e!==Zo)return Yo(t,Go);if(666===i.status&&0!==t.avail_in)return Yo(t,Go);if(0!==t.avail_in||0!==i.lookahead||e!==bo&&666!==i.status){let s=i.strategy===Wo?((t,e)=>{let s;for(;;){if(0===t.lookahead&&(Qo(t),0===t.lookahead)){if(e===bo)return 1;break}if(t.match_length=0,s=po(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,s&&(zo(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===Zo?(zo(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zo(t,!1),0===t.strm.avail_out)?1:2})(i,e):i.strategy===To?((t,e)=>{let s,n,i,o;const r=t.window;for(;;){if(t.lookahead<=258){if(Qo(t),t.lookahead<=258&&e===bo)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(i=t.strstart-1,n=r[i],n===r[++i]&&n===r[++i]&&n===r[++i])){o=t.strstart+258;do{}while(n===r[++i]&&n===r[++i]&&n===r[++i]&&n===r[++i]&&n===r[++i]&&n===r[++i]&&n===r[++i]&&n===r[++i]&&i<o);t.match_length=258-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(s=po(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(s=po(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),s&&(zo(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===Zo?(zo(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zo(t,!1),0===t.strm.avail_out)?1:2})(i,e):Do[i.level].func(i,e);if(3!==s&&4!==s||(i.status=666),1===s||3===s)return 0===t.avail_out&&(i.last_flush=-1),Xo;if(2===s&&(e===yo?fo(i):e!==wo&&(uo(i,0,0,!1),e===go&&(Io(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),Ho(t),0===t.avail_out))return i.last_flush=-1,Xo}return e!==Zo?Xo:i.wrap<=0?vo:(2===i.wrap?(Fo(i,255&t.adler),Fo(i,t.adler>>8&255),Fo(i,t.adler>>16&255),Fo(i,t.adler>>24&255),Fo(i,255&t.total_in),Fo(i,t.total_in>>8&255),Fo(i,t.total_in>>16&255),Fo(i,t.total_in>>24&255)):(No(i,t.adler>>>16),No(i,65535&t.adler)),Ho(t),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?Xo:vo)},deflateEnd:t=>{if(!t||!t.state)return Lo;const e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?Yo(t,Lo):(t.state=null,113===e?Yo(t,xo):Xo)},deflateSetDictionary:(t,e)=>{let s=e.length;if(!t||!t.state)return Lo;const n=t.state,i=n.wrap;if(2===i||1===i&&42!==n.status||n.lookahead)return Lo;if(1===i&&(t.adler=oo(t.adler,e,s,0)),n.wrap=0,s>=n.w_size){0===i&&(Io(n.head),n.strstart=0,n.block_start=0,n.insert=0);let t=new Uint8Array(n.w_size);t.set(e.subarray(s-n.w_size,s),0),e=t,s=n.w_size}const o=t.avail_in,r=t.next_in,a=t.input;for(t.avail_in=s,t.next_in=0,t.input=e,Qo(n);n.lookahead>=3;){let t=n.strstart,e=n.lookahead-2;do{n.ins_h=Ko(n,n.ins_h,n.window[t+3-1]),n.prev[t&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=t,t++}while(--e);n.strstart=t,n.lookahead=2,Qo(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=r,t.input=a,t.avail_in=o,n.wrap=i,Xo},deflateInfo:"pako deflate (from Nodeca project)"};const tr=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var er=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const s=e.shift();if(s){if("object"!=typeof s)throw new TypeError(s+"must be non-object");for(const e in s)tr(s,e)&&(t[e]=s[e])}}return t},sr=t=>{let e=0;for(let s=0,n=t.length;s<n;s++)e+=t[s].length;const s=new Uint8Array(e);for(let e=0,n=0,i=t.length;e<i;e++){let i=t[e];s.set(i,n),n+=i.length}return s};let nr=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){nr=!1}const ir=new Uint8Array(256);for(let t=0;t<256;t++)ir[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;ir[254]=ir[254]=1;var or=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,s,n,i,o,r=t.length,a=0;for(i=0;i<r;i++)s=t.charCodeAt(i),55296==(64512&s)&&i+1<r&&(n=t.charCodeAt(i+1),56320==(64512&n)&&(s=65536+(s-55296<<10)+(n-56320),i++)),a+=s<128?1:s<2048?2:s<65536?3:4;for(e=new Uint8Array(a),o=0,i=0;o<a;i++)s=t.charCodeAt(i),55296==(64512&s)&&i+1<r&&(n=t.charCodeAt(i+1),56320==(64512&n)&&(s=65536+(s-55296<<10)+(n-56320),i++)),s<128?e[o++]=s:s<2048?(e[o++]=192|s>>>6,e[o++]=128|63&s):s<65536?(e[o++]=224|s>>>12,e[o++]=128|s>>>6&63,e[o++]=128|63&s):(e[o++]=240|s>>>18,e[o++]=128|s>>>12&63,e[o++]=128|s>>>6&63,e[o++]=128|63&s);return e},rr=(t,e)=>{const s=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let n,i;const o=new Array(2*s);for(i=0,n=0;n<s;){let e=t[n++];if(e<128){o[i++]=e;continue}let r=ir[e];if(r>4)o[i++]=65533,n+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&n<s;)e=e<<6|63&t[n++],r--;r>1?o[i++]=65533:e<65536?o[i++]=e:(e-=65536,o[i++]=55296|e>>10&1023,o[i++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&nr)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let s="";for(let n=0;n<e;n++)s+=String.fromCharCode(t[n]);return s})(o,i)},ar=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let s=e-1;for(;s>=0&&128==(192&t[s]);)s--;return s<0||0===s?e:s+ir[t[s]]>e?s:e};var lr=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const cr=Object.prototype.toString,{Z_NO_FLUSH:dr,Z_SYNC_FLUSH:hr,Z_FULL_FLUSH:ur,Z_FINISH:mr,Z_OK:pr,Z_STREAM_END:fr,Z_DEFAULT_COMPRESSION:br,Z_DEFAULT_STRATEGY:yr,Z_DEFLATED:gr}=co;function Zr(t){this.options=er({level:br,method:gr,chunkSize:16384,windowBits:15,memLevel:8,strategy:yr},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new lr,this.strm.avail_out=0;let s=qo.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(s!==pr)throw new Error(lo[s]);if(e.header&&qo.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?or(e.dictionary):"[object ArrayBuffer]"===cr.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,s=qo.deflateSetDictionary(this.strm,t),s!==pr)throw new Error(lo[s]);this._dict_set=!0}}function wr(t,e){const s=new Zr(e);if(s.push(t,!0),s.err)throw s.msg||lo[s.err];return s.result}Zr.prototype.push=function(t,e){const s=this.strm,n=this.options.chunkSize;let i,o;if(this.ended)return!1;for(o=e===~~e?e:!0===e?mr:dr,"string"==typeof t?s.input=or(t):"[object ArrayBuffer]"===cr.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;;)if(0===s.avail_out&&(s.output=new Uint8Array(n),s.next_out=0,s.avail_out=n),(o===hr||o===ur)&&s.avail_out<=6)this.onData(s.output.subarray(0,s.next_out)),s.avail_out=0;else{if(i=qo.deflate(s,o),i===fr)return s.next_out>0&&this.onData(s.output.subarray(0,s.next_out)),i=qo.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===pr;if(0!==s.avail_out){if(o>0&&s.next_out>0)this.onData(s.output.subarray(0,s.next_out)),s.avail_out=0;else if(0===s.avail_in)break}else this.onData(s.output)}return!0},Zr.prototype.onData=function(t){this.chunks.push(t)},Zr.prototype.onEnd=function(t){t===pr&&(this.result=sr(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Xr={Deflate:Zr,deflate:wr,deflateRaw:function(t,e){return(e=e||{}).raw=!0,wr(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,wr(t,e)},constants:co};var vr=function(t,e){let s,n,i,o,r,a,l,c,d,h,u,m,p,f,b,y,g,Z,w,X,v,L,x,G;const S=t.state;s=t.next_in,x=t.input,n=s+(t.avail_in-5),i=t.next_out,G=t.output,o=i-(e-t.avail_out),r=i+(t.avail_out-257),a=S.dmax,l=S.wsize,c=S.whave,d=S.wnext,h=S.window,u=S.hold,m=S.bits,p=S.lencode,f=S.distcode,b=(1<<S.lenbits)-1,y=(1<<S.distbits)-1;t:do{m<15&&(u+=x[s++]<<m,m+=8,u+=x[s++]<<m,m+=8),g=p[u&b];e:for(;;){if(Z=g>>>24,u>>>=Z,m-=Z,Z=g>>>16&255,0===Z)G[i++]=65535&g;else{if(!(16&Z)){if(0==(64&Z)){g=p[(65535&g)+(u&(1<<Z)-1)];continue e}if(32&Z){S.mode=12;break t}t.msg="invalid literal/length code",S.mode=30;break t}w=65535&g,Z&=15,Z&&(m<Z&&(u+=x[s++]<<m,m+=8),w+=u&(1<<Z)-1,u>>>=Z,m-=Z),m<15&&(u+=x[s++]<<m,m+=8,u+=x[s++]<<m,m+=8),g=f[u&y];s:for(;;){if(Z=g>>>24,u>>>=Z,m-=Z,Z=g>>>16&255,!(16&Z)){if(0==(64&Z)){g=f[(65535&g)+(u&(1<<Z)-1)];continue s}t.msg="invalid distance code",S.mode=30;break t}if(X=65535&g,Z&=15,m<Z&&(u+=x[s++]<<m,m+=8,m<Z&&(u+=x[s++]<<m,m+=8)),X+=u&(1<<Z)-1,X>a){t.msg="invalid distance too far back",S.mode=30;break t}if(u>>>=Z,m-=Z,Z=i-o,X>Z){if(Z=X-Z,Z>c&&S.sane){t.msg="invalid distance too far back",S.mode=30;break t}if(v=0,L=h,0===d){if(v+=l-Z,Z<w){w-=Z;do{G[i++]=h[v++]}while(--Z);v=i-X,L=G}}else if(d<Z){if(v+=l+d-Z,Z-=d,Z<w){w-=Z;do{G[i++]=h[v++]}while(--Z);if(v=0,d<w){Z=d,w-=Z;do{G[i++]=h[v++]}while(--Z);v=i-X,L=G}}}else if(v+=d-Z,Z<w){w-=Z;do{G[i++]=h[v++]}while(--Z);v=i-X,L=G}for(;w>2;)G[i++]=L[v++],G[i++]=L[v++],G[i++]=L[v++],w-=3;w&&(G[i++]=L[v++],w>1&&(G[i++]=L[v++]))}else{v=i-X;do{G[i++]=G[v++],G[i++]=G[v++],G[i++]=G[v++],w-=3}while(w>2);w&&(G[i++]=G[v++],w>1&&(G[i++]=G[v++]))}break}}break}}while(s<n&&i<r);w=m>>3,s-=w,m-=w<<3,u&=(1<<m)-1,t.next_in=s,t.next_out=i,t.avail_in=s<n?n-s+5:5-(s-n),t.avail_out=i<r?r-i+257:257-(i-r),S.hold=u,S.bits=m};const Lr=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),xr=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Gr=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Sr=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var kr=(t,e,s,n,i,o,r,a)=>{const l=a.bits;let c,d,h,u,m,p,f=0,b=0,y=0,g=0,Z=0,w=0,X=0,v=0,L=0,x=0,G=null,S=0;const k=new Uint16Array(16),W=new Uint16Array(16);let T,C,R,P=null,V=0;for(f=0;f<=15;f++)k[f]=0;for(b=0;b<n;b++)k[e[s+b]]++;for(Z=l,g=15;g>=1&&0===k[g];g--);if(Z>g&&(Z=g),0===g)return i[o++]=20971520,i[o++]=20971520,a.bits=1,0;for(y=1;y<g&&0===k[y];y++);for(Z<y&&(Z=y),v=1,f=1;f<=15;f++)if(v<<=1,v-=k[f],v<0)return-1;if(v>0&&(0===t||1!==g))return-1;for(W[1]=0,f=1;f<15;f++)W[f+1]=W[f]+k[f];for(b=0;b<n;b++)0!==e[s+b]&&(r[W[e[s+b]]++]=b);if(0===t?(G=P=r,p=19):1===t?(G=Lr,S-=257,P=xr,V-=257,p=256):(G=Gr,P=Sr,p=-1),x=0,b=0,f=y,m=o,w=Z,X=0,h=-1,L=1<<Z,u=L-1,1===t&&L>852||2===t&&L>592)return 1;for(;;){T=f-X,r[b]<p?(C=0,R=r[b]):r[b]>p?(C=P[V+r[b]],R=G[S+r[b]]):(C=96,R=0),c=1<<f-X,d=1<<w,y=d;do{d-=c,i[m+(x>>X)+d]=T<<24|C<<16|R|0}while(0!==d);for(c=1<<f-1;x&c;)c>>=1;if(0!==c?(x&=c-1,x+=c):x=0,b++,0==--k[f]){if(f===g)break;f=e[s+r[b]]}if(f>Z&&(x&u)!==h){for(0===X&&(X=Z),m+=y,w=f-X,v=1<<w;w+X<g&&(v-=k[w+X],!(v<=0));)w++,v<<=1;if(L+=1<<w,1===t&&L>852||2===t&&L>592)return 1;h=x&u,i[h]=Z<<24|w<<16|m-o|0}}return 0!==x&&(i[m+x]=f-X<<24|64<<16|0),a.bits=Z,0};const{Z_FINISH:Wr,Z_BLOCK:Tr,Z_TREES:Cr,Z_OK:Rr,Z_STREAM_END:Pr,Z_NEED_DICT:Vr,Z_STREAM_ERROR:Yr,Z_DATA_ERROR:Mr,Z_MEM_ERROR:Ir,Z_BUF_ERROR:Kr,Z_DEFLATED:Hr}=co,zr=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function Fr(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Nr=t=>{if(!t||!t.state)return Yr;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,Rr},_r=t=>{if(!t||!t.state)return Yr;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,Nr(t)},jr=(t,e)=>{let s;if(!t||!t.state)return Yr;const n=t.state;return e<0?(s=0,e=-e):(s=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?Yr:(null!==n.window&&n.wbits!==e&&(n.window=null),n.wrap=s,n.wbits=e,_r(t))},Qr=(t,e)=>{if(!t)return Yr;const s=new Fr;t.state=s,s.window=null;const n=jr(t,e);return n!==Rr&&(t.state=null),n};let Er,Jr,Ur=!0;const Dr=t=>{if(Ur){Er=new Int32Array(512),Jr=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(kr(1,t.lens,0,288,Er,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;kr(2,t.lens,0,32,Jr,0,t.work,{bits:5}),Ur=!1}t.lencode=Er,t.lenbits=9,t.distcode=Jr,t.distbits=5},Or=(t,e,s,n)=>{let i;const o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new Uint8Array(o.wsize)),n>=o.wsize?(o.window.set(e.subarray(s-o.wsize,s),0),o.wnext=0,o.whave=o.wsize):(i=o.wsize-o.wnext,i>n&&(i=n),o.window.set(e.subarray(s-n,s-n+i),o.wnext),(n-=i)?(o.window.set(e.subarray(s-n,s),0),o.wnext=n,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0};var Br=(t,e)=>{let s,n,i,o,r,a,l,c,d,h,u,m,p,f,b,y,g,Z,w,X,v,L,x=0;const G=new Uint8Array(4);let S,k;const W=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return Yr;s=t.state,12===s.mode&&(s.mode=13),r=t.next_out,i=t.output,l=t.avail_out,o=t.next_in,n=t.input,a=t.avail_in,c=s.hold,d=s.bits,h=a,u=l,L=Rr;t:for(;;)switch(s.mode){case 1:if(0===s.wrap){s.mode=13;break}for(;d<16;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(2&s.wrap&&35615===c){s.check=0,G[0]=255&c,G[1]=c>>>8&255,s.check=ao(s.check,G,2,0),c=0,d=0,s.mode=2;break}if(s.flags=0,s.head&&(s.head.done=!1),!(1&s.wrap)||(((255&c)<<8)+(c>>8))%31){t.msg="incorrect header check",s.mode=30;break}if((15&c)!==Hr){t.msg="unknown compression method",s.mode=30;break}if(c>>>=4,d-=4,v=8+(15&c),0===s.wbits)s.wbits=v;else if(v>s.wbits){t.msg="invalid window size",s.mode=30;break}s.dmax=1<<s.wbits,t.adler=s.check=1,s.mode=512&c?10:12,c=0,d=0;break;case 2:for(;d<16;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(s.flags=c,(255&s.flags)!==Hr){t.msg="unknown compression method",s.mode=30;break}if(57344&s.flags){t.msg="unknown header flags set",s.mode=30;break}s.head&&(s.head.text=c>>8&1),512&s.flags&&(G[0]=255&c,G[1]=c>>>8&255,s.check=ao(s.check,G,2,0)),c=0,d=0,s.mode=3;case 3:for(;d<32;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}s.head&&(s.head.time=c),512&s.flags&&(G[0]=255&c,G[1]=c>>>8&255,G[2]=c>>>16&255,G[3]=c>>>24&255,s.check=ao(s.check,G,4,0)),c=0,d=0,s.mode=4;case 4:for(;d<16;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}s.head&&(s.head.xflags=255&c,s.head.os=c>>8),512&s.flags&&(G[0]=255&c,G[1]=c>>>8&255,s.check=ao(s.check,G,2,0)),c=0,d=0,s.mode=5;case 5:if(1024&s.flags){for(;d<16;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}s.length=c,s.head&&(s.head.extra_len=c),512&s.flags&&(G[0]=255&c,G[1]=c>>>8&255,s.check=ao(s.check,G,2,0)),c=0,d=0}else s.head&&(s.head.extra=null);s.mode=6;case 6:if(1024&s.flags&&(m=s.length,m>a&&(m=a),m&&(s.head&&(v=s.head.extra_len-s.length,s.head.extra||(s.head.extra=new Uint8Array(s.head.extra_len)),s.head.extra.set(n.subarray(o,o+m),v)),512&s.flags&&(s.check=ao(s.check,n,m,o)),a-=m,o+=m,s.length-=m),s.length))break t;s.length=0,s.mode=7;case 7:if(2048&s.flags){if(0===a)break t;m=0;do{v=n[o+m++],s.head&&v&&s.length<65536&&(s.head.name+=String.fromCharCode(v))}while(v&&m<a);if(512&s.flags&&(s.check=ao(s.check,n,m,o)),a-=m,o+=m,v)break t}else s.head&&(s.head.name=null);s.length=0,s.mode=8;case 8:if(4096&s.flags){if(0===a)break t;m=0;do{v=n[o+m++],s.head&&v&&s.length<65536&&(s.head.comment+=String.fromCharCode(v))}while(v&&m<a);if(512&s.flags&&(s.check=ao(s.check,n,m,o)),a-=m,o+=m,v)break t}else s.head&&(s.head.comment=null);s.mode=9;case 9:if(512&s.flags){for(;d<16;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(c!==(65535&s.check)){t.msg="header crc mismatch",s.mode=30;break}c=0,d=0}s.head&&(s.head.hcrc=s.flags>>9&1,s.head.done=!0),t.adler=s.check=0,s.mode=12;break;case 10:for(;d<32;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}t.adler=s.check=zr(c),c=0,d=0,s.mode=11;case 11:if(0===s.havedict)return t.next_out=r,t.avail_out=l,t.next_in=o,t.avail_in=a,s.hold=c,s.bits=d,Vr;t.adler=s.check=1,s.mode=12;case 12:if(e===Tr||e===Cr)break t;case 13:if(s.last){c>>>=7&d,d-=7&d,s.mode=27;break}for(;d<3;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}switch(s.last=1&c,c>>>=1,d-=1,3&c){case 0:s.mode=14;break;case 1:if(Dr(s),s.mode=20,e===Cr){c>>>=2,d-=2;break t}break;case 2:s.mode=17;break;case 3:t.msg="invalid block type",s.mode=30}c>>>=2,d-=2;break;case 14:for(c>>>=7&d,d-=7&d;d<32;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if((65535&c)!=(c>>>16^65535)){t.msg="invalid stored block lengths",s.mode=30;break}if(s.length=65535&c,c=0,d=0,s.mode=15,e===Cr)break t;case 15:s.mode=16;case 16:if(m=s.length,m){if(m>a&&(m=a),m>l&&(m=l),0===m)break t;i.set(n.subarray(o,o+m),r),a-=m,o+=m,l-=m,r+=m,s.length-=m;break}s.mode=12;break;case 17:for(;d<14;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(s.nlen=257+(31&c),c>>>=5,d-=5,s.ndist=1+(31&c),c>>>=5,d-=5,s.ncode=4+(15&c),c>>>=4,d-=4,s.nlen>286||s.ndist>30){t.msg="too many length or distance symbols",s.mode=30;break}s.have=0,s.mode=18;case 18:for(;s.have<s.ncode;){for(;d<3;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}s.lens[W[s.have++]]=7&c,c>>>=3,d-=3}for(;s.have<19;)s.lens[W[s.have++]]=0;if(s.lencode=s.lendyn,s.lenbits=7,S={bits:s.lenbits},L=kr(0,s.lens,0,19,s.lencode,0,s.work,S),s.lenbits=S.bits,L){t.msg="invalid code lengths set",s.mode=30;break}s.have=0,s.mode=19;case 19:for(;s.have<s.nlen+s.ndist;){for(;x=s.lencode[c&(1<<s.lenbits)-1],b=x>>>24,y=x>>>16&255,g=65535&x,!(b<=d);){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(g<16)c>>>=b,d-=b,s.lens[s.have++]=g;else{if(16===g){for(k=b+2;d<k;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(c>>>=b,d-=b,0===s.have){t.msg="invalid bit length repeat",s.mode=30;break}v=s.lens[s.have-1],m=3+(3&c),c>>>=2,d-=2}else if(17===g){for(k=b+3;d<k;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}c>>>=b,d-=b,v=0,m=3+(7&c),c>>>=3,d-=3}else{for(k=b+7;d<k;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}c>>>=b,d-=b,v=0,m=11+(127&c),c>>>=7,d-=7}if(s.have+m>s.nlen+s.ndist){t.msg="invalid bit length repeat",s.mode=30;break}for(;m--;)s.lens[s.have++]=v}}if(30===s.mode)break;if(0===s.lens[256]){t.msg="invalid code -- missing end-of-block",s.mode=30;break}if(s.lenbits=9,S={bits:s.lenbits},L=kr(1,s.lens,0,s.nlen,s.lencode,0,s.work,S),s.lenbits=S.bits,L){t.msg="invalid literal/lengths set",s.mode=30;break}if(s.distbits=6,s.distcode=s.distdyn,S={bits:s.distbits},L=kr(2,s.lens,s.nlen,s.ndist,s.distcode,0,s.work,S),s.distbits=S.bits,L){t.msg="invalid distances set",s.mode=30;break}if(s.mode=20,e===Cr)break t;case 20:s.mode=21;case 21:if(a>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=o,t.avail_in=a,s.hold=c,s.bits=d,vr(t,u),r=t.next_out,i=t.output,l=t.avail_out,o=t.next_in,n=t.input,a=t.avail_in,c=s.hold,d=s.bits,12===s.mode&&(s.back=-1);break}for(s.back=0;x=s.lencode[c&(1<<s.lenbits)-1],b=x>>>24,y=x>>>16&255,g=65535&x,!(b<=d);){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(y&&0==(240&y)){for(Z=b,w=y,X=g;x=s.lencode[X+((c&(1<<Z+w)-1)>>Z)],b=x>>>24,y=x>>>16&255,g=65535&x,!(Z+b<=d);){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}c>>>=Z,d-=Z,s.back+=Z}if(c>>>=b,d-=b,s.back+=b,s.length=g,0===y){s.mode=26;break}if(32&y){s.back=-1,s.mode=12;break}if(64&y){t.msg="invalid literal/length code",s.mode=30;break}s.extra=15&y,s.mode=22;case 22:if(s.extra){for(k=s.extra;d<k;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}s.length+=c&(1<<s.extra)-1,c>>>=s.extra,d-=s.extra,s.back+=s.extra}s.was=s.length,s.mode=23;case 23:for(;x=s.distcode[c&(1<<s.distbits)-1],b=x>>>24,y=x>>>16&255,g=65535&x,!(b<=d);){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(0==(240&y)){for(Z=b,w=y,X=g;x=s.distcode[X+((c&(1<<Z+w)-1)>>Z)],b=x>>>24,y=x>>>16&255,g=65535&x,!(Z+b<=d);){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}c>>>=Z,d-=Z,s.back+=Z}if(c>>>=b,d-=b,s.back+=b,64&y){t.msg="invalid distance code",s.mode=30;break}s.offset=g,s.extra=15&y,s.mode=24;case 24:if(s.extra){for(k=s.extra;d<k;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}s.offset+=c&(1<<s.extra)-1,c>>>=s.extra,d-=s.extra,s.back+=s.extra}if(s.offset>s.dmax){t.msg="invalid distance too far back",s.mode=30;break}s.mode=25;case 25:if(0===l)break t;if(m=u-l,s.offset>m){if(m=s.offset-m,m>s.whave&&s.sane){t.msg="invalid distance too far back",s.mode=30;break}m>s.wnext?(m-=s.wnext,p=s.wsize-m):p=s.wnext-m,m>s.length&&(m=s.length),f=s.window}else f=i,p=r-s.offset,m=s.length;m>l&&(m=l),l-=m,s.length-=m;do{i[r++]=f[p++]}while(--m);0===s.length&&(s.mode=21);break;case 26:if(0===l)break t;i[r++]=s.length,l--,s.mode=21;break;case 27:if(s.wrap){for(;d<32;){if(0===a)break t;a--,c|=n[o++]<<d,d+=8}if(u-=l,t.total_out+=u,s.total+=u,u&&(t.adler=s.check=s.flags?ao(s.check,i,u,r-u):oo(s.check,i,u,r-u)),u=l,(s.flags?c:zr(c))!==s.check){t.msg="incorrect data check",s.mode=30;break}c=0,d=0}s.mode=28;case 28:if(s.wrap&&s.flags){for(;d<32;){if(0===a)break t;a--,c+=n[o++]<<d,d+=8}if(c!==(4294967295&s.total)){t.msg="incorrect length check",s.mode=30;break}c=0,d=0}s.mode=29;case 29:L=Pr;break t;case 30:L=Mr;break t;case 31:return Ir;default:return Yr}return t.next_out=r,t.avail_out=l,t.next_in=o,t.avail_in=a,s.hold=c,s.bits=d,(s.wsize||u!==t.avail_out&&s.mode<30&&(s.mode<27||e!==Wr))&&Or(t,t.output,t.next_out,u-t.avail_out),h-=t.avail_in,u-=t.avail_out,t.total_in+=h,t.total_out+=u,s.total+=u,s.wrap&&u&&(t.adler=s.check=s.flags?ao(s.check,i,u,t.next_out-u):oo(s.check,i,u,t.next_out-u)),t.data_type=s.bits+(s.last?64:0)+(12===s.mode?128:0)+(20===s.mode||15===s.mode?256:0),(0===h&&0===u||e===Wr)&&L===Rr&&(L=Kr),L},Ar={inflateReset:_r,inflateReset2:jr,inflateResetKeep:Nr,inflateInit:t=>Qr(t,15),inflateInit2:Qr,inflate:Br,inflateEnd:t=>{if(!t||!t.state)return Yr;let e=t.state;return e.window&&(e.window=null),t.state=null,Rr},inflateGetHeader:(t,e)=>{if(!t||!t.state)return Yr;const s=t.state;return 0==(2&s.wrap)?Yr:(s.head=e,e.done=!1,Rr)},inflateSetDictionary:(t,e)=>{const s=e.length;let n,i,o;return t&&t.state?(n=t.state,0!==n.wrap&&11!==n.mode?Yr:11===n.mode&&(i=1,i=oo(i,e,s,0),i!==n.check)?Mr:(o=Or(t,e,s,s),o?(n.mode=31,Ir):(n.havedict=1,Rr))):Yr},inflateInfo:"pako inflate (from Nodeca project)"};var $r=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const qr=Object.prototype.toString,{Z_NO_FLUSH:ta,Z_FINISH:ea,Z_OK:sa,Z_STREAM_END:na,Z_NEED_DICT:ia,Z_STREAM_ERROR:oa,Z_DATA_ERROR:ra,Z_MEM_ERROR:aa}=co;function la(t){this.options=er({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new lr,this.strm.avail_out=0;let s=Ar.inflateInit2(this.strm,e.windowBits);if(s!==sa)throw new Error(lo[s]);if(this.header=new $r,Ar.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=or(e.dictionary):"[object ArrayBuffer]"===qr.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(s=Ar.inflateSetDictionary(this.strm,e.dictionary),s!==sa)))throw new Error(lo[s])}function ca(t,e){const s=new la(e);if(s.push(t),s.err)throw s.msg||lo[s.err];return s.result}la.prototype.push=function(t,e){const s=this.strm,n=this.options.chunkSize,i=this.options.dictionary;let o,r,a;if(this.ended)return!1;for(r=e===~~e?e:!0===e?ea:ta,"[object ArrayBuffer]"===qr.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;;){for(0===s.avail_out&&(s.output=new Uint8Array(n),s.next_out=0,s.avail_out=n),o=Ar.inflate(s,r),o===ia&&i&&(o=Ar.inflateSetDictionary(s,i),o===sa?o=Ar.inflate(s,r):o===ra&&(o=ia));s.avail_in>0&&o===na&&s.state.wrap>0&&0!==t[s.next_in];)Ar.inflateReset(s),o=Ar.inflate(s,r);switch(o){case oa:case ra:case ia:case aa:return this.onEnd(o),this.ended=!0,!1}if(a=s.avail_out,s.next_out&&(0===s.avail_out||o===na))if("string"===this.options.to){let t=ar(s.output,s.next_out),e=s.next_out-t,i=rr(s.output,t);s.next_out=e,s.avail_out=n-e,e&&s.output.set(s.output.subarray(t,t+e),0),this.onData(i)}else this.onData(s.output.length===s.next_out?s.output:s.output.subarray(0,s.next_out));if(o!==sa||0!==a){if(o===na)return o=Ar.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,!0;if(0===s.avail_in)break}}return!0},la.prototype.onData=function(t){this.chunks.push(t)},la.prototype.onEnd=function(t){t===sa&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=sr(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var da={Inflate:la,inflate:ca,inflateRaw:function(t,e){return(e=e||{}).raw=!0,ca(t,e)},ungzip:ca,constants:co};const{Deflate:ha,deflate:ua,deflateRaw:ma,gzip:pa}=Xr,{Inflate:fa,inflate:ba,inflateRaw:ya,ungzip:ga}=da;var Za={Deflate:ha,deflate:ua,deflateRaw:ma,gzip:pa,Inflate:fa,inflate:ba,inflateRaw:ya,ungzip:ga,constants:co};function wa(t,e,s){var n=void 0===e?null:e,i=function(t,e){var s=atob(t);if(e){for(var n=new Uint8Array(s.length),i=0,o=s.length;i<o;++i)n[i]=s.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(n.buffer))}return s}(t,void 0!==s&&s),o=i.indexOf("\n",10)+1,r=i.substring(o)+(n?"\/\/# sourceMappingURL="+n:""),a=new Blob([r],{type:"application/javascript"});return URL.createObjectURL(a)}var Xa,va,La,xa,Ga=(Xa="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKioKICogQ29weXJpZ2h0IENyb3F1ZXQgQ29ycG9yYXRpb24gMjAyMwogKiBCdW5kbGUgb2YgQGNyb3F1ZXQvY3JvcXVldAogKiBEYXRlOiAyMDIzLTA0LTA3CiAqIFZlcnNpb246IDEuMS4wLTIxCiAqLwoKIWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciB0PSJ1bmRlZmluZWQiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOiJ1bmRlZmluZWQiIT10eXBlb2Ygd2luZG93P3dpbmRvdzoidW5kZWZpbmVkIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6InVuZGVmaW5lZCIhPXR5cGVvZiBzZWxmP3NlbGY6e307IWZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQpe3ZhciBlLHI9T2JqZWN0LnByb3RvdHlwZSxuPXIuaGFzT3duUHJvcGVydHksaT0iZnVuY3Rpb24iPT10eXBlb2YgU3ltYm9sP1N5bWJvbDp7fSxhPWkuaXRlcmF0b3J8fCJAQGl0ZXJhdG9yIixzPWkuYXN5bmNJdGVyYXRvcnx8IkBAYXN5bmNJdGVyYXRvciIsbz1pLnRvU3RyaW5nVGFnfHwiQEB0b1N0cmluZ1RhZyI7ZnVuY3Rpb24gaCh0LGUscil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KSx0W2VdfXRyeXtoKHt9LCIiKX1jYXRjaCh0KXtoPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdFtlXT1yfX1mdW5jdGlvbiBsKHQsZSxyLG4pe3ZhciBpPWUmJmUucHJvdG90eXBlIGluc3RhbmNlb2YgZz9lOmcsYT1PYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxzPW5ldyBCKG58fFtdKTtyZXR1cm4gYS5faW52b2tlPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj11O3JldHVybiBmdW5jdGlvbihpLGEpe2lmKG49PT1fKXRocm93IG5ldyBFcnJvcigiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZyIpO2lmKG49PT1mKXtpZigidGhyb3ciPT09aSl0aHJvdyBhO3JldHVybiBEKCl9Zm9yKHIubWV0aG9kPWksci5hcmc9YTs7KXt2YXIgcz1yLmRlbGVnYXRlO2lmKHMpe3ZhciBvPUEocyxyKTtpZihvKXtpZihvPT09cCljb250aW51ZTtyZXR1cm4gb319aWYoIm5leHQiPT09ci5tZXRob2Qpci5zZW50PXIuX3NlbnQ9ci5hcmc7ZWxzZSBpZigidGhyb3ciPT09ci5tZXRob2Qpe2lmKG49PT11KXRocm93IG49ZixyLmFyZztyLmRpc3BhdGNoRXhjZXB0aW9uKHIuYXJnKX1lbHNlInJldHVybiI9PT1yLm1ldGhvZCYmci5hYnJ1cHQoInJldHVybiIsci5hcmcpO249Xzt2YXIgaD1jKHQsZSxyKTtpZigibm9ybWFsIj09PWgudHlwZSl7aWYobj1yLmRvbmU/ZjpkLGguYXJnPT09cCljb250aW51ZTtyZXR1cm57dmFsdWU6aC5hcmcsZG9uZTpyLmRvbmV9fSJ0aHJvdyI9PT1oLnR5cGUmJihuPWYsci5tZXRob2Q9InRocm93IixyLmFyZz1oLmFyZyl9fX0odCxyLHMpLGF9ZnVuY3Rpb24gYyh0LGUscil7dHJ5e3JldHVybnt0eXBlOiJub3JtYWwiLGFyZzp0LmNhbGwoZSxyKX19Y2F0Y2godCl7cmV0dXJue3R5cGU6InRocm93Iixhcmc6dH19fXQud3JhcD1sO3ZhciB1PSJzdXNwZW5kZWRTdGFydCIsZD0ic3VzcGVuZGVkWWllbGQiLF89ImV4ZWN1dGluZyIsZj0iY29tcGxldGVkIixwPXt9O2Z1bmN0aW9uIGcoKXt9ZnVuY3Rpb24geSgpe31mdW5jdGlvbiB2KCl7fXZhciB3PXt9O2godyxhLChmdW5jdGlvbigpe3JldHVybiB0aGlzfSkpO3ZhciBtPU9iamVjdC5nZXRQcm90b3R5cGVPZixiPW0mJm0obShSKFtdKSkpO2ImJmIhPT1yJiZuLmNhbGwoYixhKSYmKHc9Yik7dmFyIHg9di5wcm90b3R5cGU9Zy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh3KTtmdW5jdGlvbiBrKHQpe1sibmV4dCIsInRocm93IiwicmV0dXJuIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7aCh0LGUsKGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9pbnZva2UoZSx0KX0pKX0pKX1mdW5jdGlvbiB6KHQsZSl7ZnVuY3Rpb24gcihpLGEscyxvKXt2YXIgaD1jKHRbaV0sdCxhKTtpZigidGhyb3ciIT09aC50eXBlKXt2YXIgbD1oLmFyZyx1PWwudmFsdWU7cmV0dXJuIHUmJiJvYmplY3QiPT10eXBlb2YgdSYmbi5jYWxsKHUsIl9fYXdhaXQiKT9lLnJlc29sdmUodS5fX2F3YWl0KS50aGVuKChmdW5jdGlvbih0KXtyKCJuZXh0Iix0LHMsbyl9KSwoZnVuY3Rpb24odCl7cigidGhyb3ciLHQscyxvKX0pKTplLnJlc29sdmUodSkudGhlbigoZnVuY3Rpb24odCl7bC52YWx1ZT10LHMobCl9KSwoZnVuY3Rpb24odCl7cmV0dXJuIHIoInRocm93Iix0LHMsbyl9KSl9byhoLmFyZyl9dmFyIGk7dGhpcy5faW52b2tlPWZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gYSgpe3JldHVybiBuZXcgZSgoZnVuY3Rpb24oZSxpKXtyKHQsbixlLGkpfSkpfXJldHVybiBpPWk/aS50aGVuKGEsYSk6YSgpfX1mdW5jdGlvbiBBKHQscil7dmFyIG49dC5pdGVyYXRvcltyLm1ldGhvZF07aWYobj09PWUpe2lmKHIuZGVsZWdhdGU9bnVsbCwidGhyb3ciPT09ci5tZXRob2Qpe2lmKHQuaXRlcmF0b3IucmV0dXJuJiYoci5tZXRob2Q9InJldHVybiIsci5hcmc9ZSxBKHQsciksInRocm93Ij09PXIubWV0aG9kKSlyZXR1cm4gcDtyLm1ldGhvZD0idGhyb3ciLHIuYXJnPW5ldyBUeXBlRXJyb3IoIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2QiKX1yZXR1cm4gcH12YXIgaT1jKG4sdC5pdGVyYXRvcixyLmFyZyk7aWYoInRocm93Ij09PWkudHlwZSlyZXR1cm4gci5tZXRob2Q9InRocm93IixyLmFyZz1pLmFyZyxyLmRlbGVnYXRlPW51bGwscDt2YXIgYT1pLmFyZztyZXR1cm4gYT9hLmRvbmU/KHJbdC5yZXN1bHROYW1lXT1hLnZhbHVlLHIubmV4dD10Lm5leHRMb2MsInJldHVybiIhPT1yLm1ldGhvZCYmKHIubWV0aG9kPSJuZXh0IixyLmFyZz1lKSxyLmRlbGVnYXRlPW51bGwscCk6YTooci5tZXRob2Q9InRocm93IixyLmFyZz1uZXcgVHlwZUVycm9yKCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdCIpLHIuZGVsZWdhdGU9bnVsbCxwKX1mdW5jdGlvbiBFKHQpe3ZhciBlPXt0cnlMb2M6dFswXX07MSBpbiB0JiYoZS5jYXRjaExvYz10WzFdKSwyIGluIHQmJihlLmZpbmFsbHlMb2M9dFsyXSxlLmFmdGVyTG9jPXRbM10pLHRoaXMudHJ5RW50cmllcy5wdXNoKGUpfWZ1bmN0aW9uIFModCl7dmFyIGU9dC5jb21wbGV0aW9ufHx7fTtlLnR5cGU9Im5vcm1hbCIsZGVsZXRlIGUuYXJnLHQuY29tcGxldGlvbj1lfWZ1bmN0aW9uIEIodCl7dGhpcy50cnlFbnRyaWVzPVt7dHJ5TG9jOiJyb290In1dLHQuZm9yRWFjaChFLHRoaXMpLHRoaXMucmVzZXQoITApfWZ1bmN0aW9uIFIodCl7aWYodCl7dmFyIHI9dFthXTtpZihyKXJldHVybiByLmNhbGwodCk7aWYoImZ1bmN0aW9uIj09dHlwZW9mIHQubmV4dClyZXR1cm4gdDtpZighaXNOYU4odC5sZW5ndGgpKXt2YXIgaT0tMSxzPWZ1bmN0aW9uIHIoKXtmb3IoOysraTx0Lmxlbmd0aDspaWYobi5jYWxsKHQsaSkpcmV0dXJuIHIudmFsdWU9dFtpXSxyLmRvbmU9ITEscjtyZXR1cm4gci52YWx1ZT1lLHIuZG9uZT0hMCxyfTtyZXR1cm4gcy5uZXh0PXN9fXJldHVybntuZXh0OkR9fWZ1bmN0aW9uIEQoKXtyZXR1cm57dmFsdWU6ZSxkb25lOiEwfX1yZXR1cm4geS5wcm90b3R5cGU9dixoKHgsImNvbnN0cnVjdG9yIix2KSxoKHYsImNvbnN0cnVjdG9yIix5KSx5LmRpc3BsYXlOYW1lPWgodixvLCJHZW5lcmF0b3JGdW5jdGlvbiIpLHQuaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbih0KXt2YXIgZT0iZnVuY3Rpb24iPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3RvcjtyZXR1cm4hIWUmJihlPT09eXx8IkdlbmVyYXRvckZ1bmN0aW9uIj09PShlLmRpc3BsYXlOYW1lfHxlLm5hbWUpKX0sdC5tYXJrPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsdik6KHQuX19wcm90b19fPXYsaCh0LG8sIkdlbmVyYXRvckZ1bmN0aW9uIikpLHQucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoeCksdH0sdC5hd3JhcD1mdW5jdGlvbih0KXtyZXR1cm57X19hd2FpdDp0fX0sayh6LnByb3RvdHlwZSksaCh6LnByb3RvdHlwZSxzLChmdW5jdGlvbigpe3JldHVybiB0aGlzfSkpLHQuQXN5bmNJdGVyYXRvcj16LHQuYXN5bmM9ZnVuY3Rpb24oZSxyLG4saSxhKXt2b2lkIDA9PT1hJiYoYT1Qcm9taXNlKTt2YXIgcz1uZXcgeihsKGUscixuLGkpLGEpO3JldHVybiB0LmlzR2VuZXJhdG9yRnVuY3Rpb24ocik/czpzLm5leHQoKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gdC5kb25lP3QudmFsdWU6cy5uZXh0KCl9KSl9LGsoeCksaCh4LG8sIkdlbmVyYXRvciIpLGgoeCxhLChmdW5jdGlvbigpe3JldHVybiB0aGlzfSkpLGgoeCwidG9TdHJpbmciLChmdW5jdGlvbigpe3JldHVybiJbb2JqZWN0IEdlbmVyYXRvcl0ifSkpLHQua2V5cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtmb3IodmFyIHIgaW4gdCllLnB1c2gocik7cmV0dXJuIGUucmV2ZXJzZSgpLGZ1bmN0aW9uIHIoKXtmb3IoO2UubGVuZ3RoOyl7dmFyIG49ZS5wb3AoKTtpZihuIGluIHQpcmV0dXJuIHIudmFsdWU9bixyLmRvbmU9ITEscn1yZXR1cm4gci5kb25lPSEwLHJ9fSx0LnZhbHVlcz1SLEIucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpCLHJlc2V0OmZ1bmN0aW9uKHQpe2lmKHRoaXMucHJldj0wLHRoaXMubmV4dD0wLHRoaXMuc2VudD10aGlzLl9zZW50PWUsdGhpcy5kb25lPSExLHRoaXMuZGVsZWdhdGU9bnVsbCx0aGlzLm1ldGhvZD0ibmV4dCIsdGhpcy5hcmc9ZSx0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChTKSwhdClmb3IodmFyIHIgaW4gdGhpcykidCI9PT1yLmNoYXJBdCgwKSYmbi5jYWxsKHRoaXMscikmJiFpc05hTigrci5zbGljZSgxKSkmJih0aGlzW3JdPWUpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5kb25lPSEwO3ZhciB0PXRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO2lmKCJ0aHJvdyI9PT10LnR5cGUpdGhyb3cgdC5hcmc7cmV0dXJuIHRoaXMucnZhbH0sZGlzcGF0Y2hFeGNlcHRpb246ZnVuY3Rpb24odCl7aWYodGhpcy5kb25lKXRocm93IHQ7dmFyIHI9dGhpcztmdW5jdGlvbiBpKG4saSl7cmV0dXJuIG8udHlwZT0idGhyb3ciLG8uYXJnPXQsci5uZXh0PW4saSYmKHIubWV0aG9kPSJuZXh0IixyLmFyZz1lKSwhIWl9Zm9yKHZhciBhPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTthPj0wOy0tYSl7dmFyIHM9dGhpcy50cnlFbnRyaWVzW2FdLG89cy5jb21wbGV0aW9uO2lmKCJyb290Ij09PXMudHJ5TG9jKXJldHVybiBpKCJlbmQiKTtpZihzLnRyeUxvYzw9dGhpcy5wcmV2KXt2YXIgaD1uLmNhbGwocywiY2F0Y2hMb2MiKSxsPW4uY2FsbChzLCJmaW5hbGx5TG9jIik7aWYoaCYmbCl7aWYodGhpcy5wcmV2PHMuY2F0Y2hMb2MpcmV0dXJuIGkocy5jYXRjaExvYywhMCk7aWYodGhpcy5wcmV2PHMuZmluYWxseUxvYylyZXR1cm4gaShzLmZpbmFsbHlMb2MpfWVsc2UgaWYoaCl7aWYodGhpcy5wcmV2PHMuY2F0Y2hMb2MpcmV0dXJuIGkocy5jYXRjaExvYywhMCl9ZWxzZXtpZighbCl0aHJvdyBuZXcgRXJyb3IoInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5Iik7aWYodGhpcy5wcmV2PHMuZmluYWxseUxvYylyZXR1cm4gaShzLmZpbmFsbHlMb2MpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO3I+PTA7LS1yKXt2YXIgaT10aGlzLnRyeUVudHJpZXNbcl07aWYoaS50cnlMb2M8PXRoaXMucHJldiYmbi5jYWxsKGksImZpbmFsbHlMb2MiKSYmdGhpcy5wcmV2PGkuZmluYWxseUxvYyl7dmFyIGE9aTticmVha319YSYmKCJicmVhayI9PT10fHwiY29udGludWUiPT09dCkmJmEudHJ5TG9jPD1lJiZlPD1hLmZpbmFsbHlMb2MmJihhPW51bGwpO3ZhciBzPWE/YS5jb21wbGV0aW9uOnt9O3JldHVybiBzLnR5cGU9dCxzLmFyZz1lLGE/KHRoaXMubWV0aG9kPSJuZXh0Iix0aGlzLm5leHQ9YS5maW5hbGx5TG9jLHApOnRoaXMuY29tcGxldGUocyl9LGNvbXBsZXRlOmZ1bmN0aW9uKHQsZSl7aWYoInRocm93Ij09PXQudHlwZSl0aHJvdyB0LmFyZztyZXR1cm4iYnJlYWsiPT09dC50eXBlfHwiY29udGludWUiPT09dC50eXBlP3RoaXMubmV4dD10LmFyZzoicmV0dXJuIj09PXQudHlwZT8odGhpcy5ydmFsPXRoaXMuYXJnPXQuYXJnLHRoaXMubWV0aG9kPSJyZXR1cm4iLHRoaXMubmV4dD0iZW5kIik6Im5vcm1hbCI9PT10LnR5cGUmJmUmJih0aGlzLm5leHQ9ZSkscH0sZmluaXNoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7ZT49MDstLWUpe3ZhciByPXRoaXMudHJ5RW50cmllc1tlXTtpZihyLmZpbmFsbHlMb2M9PT10KXJldHVybiB0aGlzLmNvbXBsZXRlKHIuY29tcGxldGlvbixyLmFmdGVyTG9jKSxTKHIpLHB9fSxjYXRjaDpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2U+PTA7LS1lKXt2YXIgcj10aGlzLnRyeUVudHJpZXNbZV07aWYoci50cnlMb2M9PT10KXt2YXIgbj1yLmNvbXBsZXRpb247aWYoInRocm93Ij09PW4udHlwZSl7dmFyIGk9bi5hcmc7UyhyKX1yZXR1cm4gaX19dGhyb3cgbmV3IEVycm9yKCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHQiKX0sZGVsZWdhdGVZaWVsZDpmdW5jdGlvbih0LHIsbil7cmV0dXJuIHRoaXMuZGVsZWdhdGU9e2l0ZXJhdG9yOlIodCkscmVzdWx0TmFtZTpyLG5leHRMb2M6bn0sIm5leHQiPT09dGhpcy5tZXRob2QmJih0aGlzLmFyZz1lKSxwfX0sdH0odC5leHBvcnRzKTt0cnl7Z2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWU9ZX1jYXRjaCh0KXsib2JqZWN0Ij09dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWU9ZTpGdW5jdGlvbigiciIsInJlZ2VuZXJhdG9yUnVudGltZSA9IHIiKShlKX19KHtleHBvcnRzOnt9fSk7dmFyIGU9e2V4cG9ydHM6e319OyhmdW5jdGlvbih0KXtjb25zdCBlPTQscj0wLG49MSxpPTI7ZnVuY3Rpb24gYSh0KXtsZXQgZT10Lmxlbmd0aDtmb3IoOy0tZT49MDspdFtlXT0wfWNvbnN0IHM9MCxvPTEsaD0yLGw9MyxjPTI1OCx1PTI5LGQ9MjU2LF89ZCsxK3UsZj0zMCxwPTE5LGc9MipfKzEseT0xNSx2PTE2LHc9NyxtPTI1NixiPTE2LHg9MTcsaz0xOCx6PW5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdKSxBPW5ldyBVaW50OEFycmF5KFswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXSksRT1uZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN10pLFM9bmV3IFVpbnQ4QXJyYXkoWzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdKSxCPTUxMixSPW5ldyBBcnJheSgyKihfKzIpKTthKFIpO2NvbnN0IEQ9bmV3IEFycmF5KDIqZik7YShEKTtjb25zdCBMPW5ldyBBcnJheShCKTthKEwpO2NvbnN0IFU9bmV3IEFycmF5KGMtbCsxKTthKFUpO2NvbnN0IEM9bmV3IEFycmF5KHUpO2EoQyk7Y29uc3QgTz1uZXcgQXJyYXkoZik7ZnVuY3Rpb24gRih0LGUscixuLGkpe3RoaXMuc3RhdGljX3RyZWU9dCx0aGlzLmV4dHJhX2JpdHM9ZSx0aGlzLmV4dHJhX2Jhc2U9cix0aGlzLmVsZW1zPW4sdGhpcy5tYXhfbGVuZ3RoPWksdGhpcy5oYXNfc3RyZWU9dCYmdC5sZW5ndGh9bGV0IFQsSCxaO2Z1bmN0aW9uIE0odCxlKXt0aGlzLmR5bl90cmVlPXQsdGhpcy5tYXhfY29kZT0wLHRoaXMuc3RhdF9kZXNjPWV9YShPKTtjb25zdCBOPXQ9PnQ8MjU2P0xbdF06TFsyNTYrKHQ+Pj43KV0sST0odCxlKT0+e3QucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPTI1NSZlLHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPWU+Pj44JjI1NX0sUD0odCxlLHIpPT57dC5iaV92YWxpZD52LXI/KHQuYmlfYnVmfD1lPDx0LmJpX3ZhbGlkJjY1NTM1LEkodCx0LmJpX2J1ZiksdC5iaV9idWY9ZT4+di10LmJpX3ZhbGlkLHQuYmlfdmFsaWQrPXItdik6KHQuYmlfYnVmfD1lPDx0LmJpX3ZhbGlkJjY1NTM1LHQuYmlfdmFsaWQrPXIpfSwkPSh0LGUscik9PntQKHQsclsyKmVdLHJbMiplKzFdKX0saj0odCxlKT0+e2xldCByPTA7ZG97cnw9MSZ0LHQ+Pj49MSxyPDw9MX13aGlsZSgtLWU+MCk7cmV0dXJuIHI+Pj4xfSxLPXQ9PnsxNj09PXQuYmlfdmFsaWQ/KEkodCx0LmJpX2J1ZiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTApOnQuYmlfdmFsaWQ+PTgmJih0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT0yNTUmdC5iaV9idWYsdC5iaV9idWY+Pj04LHQuYmlfdmFsaWQtPTgpfSxYPSh0LGUpPT57Y29uc3Qgcj1lLmR5bl90cmVlLG49ZS5tYXhfY29kZSxpPWUuc3RhdF9kZXNjLnN0YXRpY190cmVlLGE9ZS5zdGF0X2Rlc2MuaGFzX3N0cmVlLHM9ZS5zdGF0X2Rlc2MuZXh0cmFfYml0cyxvPWUuc3RhdF9kZXNjLmV4dHJhX2Jhc2UsaD1lLnN0YXRfZGVzYy5tYXhfbGVuZ3RoO2xldCBsLGMsdSxkLF8sZixwPTA7Zm9yKGQ9MDtkPD15O2QrKyl0LmJsX2NvdW50W2RdPTA7Zm9yKHJbMip0LmhlYXBbdC5oZWFwX21heF0rMV09MCxsPXQuaGVhcF9tYXgrMTtsPGc7bCsrKWM9dC5oZWFwW2xdLGQ9clsyKnJbMipjKzFdKzFdKzEsZD5oJiYoZD1oLHArKyksclsyKmMrMV09ZCxjPm58fCh0LmJsX2NvdW50W2RdKyssXz0wLGM+PW8mJihfPXNbYy1vXSksZj1yWzIqY10sdC5vcHRfbGVuKz1mKihkK18pLGEmJih0LnN0YXRpY19sZW4rPWYqKGlbMipjKzFdK18pKSk7aWYoMCE9PXApe2Rve2ZvcihkPWgtMTswPT09dC5ibF9jb3VudFtkXTspZC0tO3QuYmxfY291bnRbZF0tLSx0LmJsX2NvdW50W2QrMV0rPTIsdC5ibF9jb3VudFtoXS0tLHAtPTJ9d2hpbGUocD4wKTtmb3IoZD1oOzAhPT1kO2QtLSlmb3IoYz10LmJsX2NvdW50W2RdOzAhPT1jOyl1PXQuaGVhcFstLWxdLHU+bnx8KHJbMip1KzFdIT09ZCYmKHQub3B0X2xlbis9KGQtclsyKnUrMV0pKnJbMip1XSxyWzIqdSsxXT1kKSxjLS0pfX0scT0odCxlLHIpPT57Y29uc3Qgbj1uZXcgQXJyYXkoeSsxKTtsZXQgaSxhLHM9MDtmb3IoaT0xO2k8PXk7aSsrKW5baV09cz1zK3JbaS0xXTw8MTtmb3IoYT0wO2E8PWU7YSsrKXtsZXQgZT10WzIqYSsxXTswIT09ZSYmKHRbMiphXT1qKG5bZV0rKyxlKSl9fSxHPSgpPT57bGV0IHQsZSxyLG4saTtjb25zdCBhPW5ldyBBcnJheSh5KzEpO2ZvcihyPTAsbj0wO248dS0xO24rKylmb3IoQ1tuXT1yLHQ9MDt0PDE8PHpbbl07dCsrKVVbcisrXT1uO2ZvcihVW3ItMV09bixpPTAsbj0wO248MTY7bisrKWZvcihPW25dPWksdD0wO3Q8MTw8QVtuXTt0KyspTFtpKytdPW47Zm9yKGk+Pj03O248ZjtuKyspZm9yKE9bbl09aTw8Nyx0PTA7dDwxPDxBW25dLTc7dCsrKUxbMjU2K2krK109bjtmb3IoZT0wO2U8PXk7ZSsrKWFbZV09MDtmb3IodD0wO3Q8PTE0MzspUlsyKnQrMV09OCx0KyssYVs4XSsrO2Zvcig7dDw9MjU1OylSWzIqdCsxXT05LHQrKyxhWzldKys7Zm9yKDt0PD0yNzk7KVJbMip0KzFdPTcsdCsrLGFbN10rKztmb3IoO3Q8PTI4NzspUlsyKnQrMV09OCx0KyssYVs4XSsrO2ZvcihxKFIsXysxLGEpLHQ9MDt0PGY7dCsrKURbMip0KzFdPTUsRFsyKnRdPWoodCw1KTtUPW5ldyBGKFIseixkKzEsXyx5KSxIPW5ldyBGKEQsQSwwLGYseSksWj1uZXcgRihuZXcgQXJyYXkoMCksRSwwLHAsdyl9LFc9dD0+e2xldCBlO2ZvcihlPTA7ZTxfO2UrKyl0LmR5bl9sdHJlZVsyKmVdPTA7Zm9yKGU9MDtlPGY7ZSsrKXQuZHluX2R0cmVlWzIqZV09MDtmb3IoZT0wO2U8cDtlKyspdC5ibF90cmVlWzIqZV09MDt0LmR5bl9sdHJlZVsyKm1dPTEsdC5vcHRfbGVuPXQuc3RhdGljX2xlbj0wLHQubGFzdF9saXQ9dC5tYXRjaGVzPTB9LFk9dD0+e3QuYmlfdmFsaWQ+OD9JKHQsdC5iaV9idWYpOnQuYmlfdmFsaWQ+MCYmKHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPXQuYmlfYnVmKSx0LmJpX2J1Zj0wLHQuYmlfdmFsaWQ9MH0sVj0odCxlLHIsbik9PntZKHQpLG4mJihJKHQsciksSSh0LH5yKSksdC5wZW5kaW5nX2J1Zi5zZXQodC53aW5kb3cuc3ViYXJyYXkoZSxlK3IpLHQucGVuZGluZyksdC5wZW5kaW5nKz1yfSxRPSh0LGUscixuKT0+e2NvbnN0IGk9MiplLGE9MipyO3JldHVybiB0W2ldPHRbYV18fHRbaV09PT10W2FdJiZuW2VdPD1uW3JdfSxKPSh0LGUscik9Pntjb25zdCBuPXQuaGVhcFtyXTtsZXQgaT1yPDwxO2Zvcig7aTw9dC5oZWFwX2xlbiYmKGk8dC5oZWFwX2xlbiYmUShlLHQuaGVhcFtpKzFdLHQuaGVhcFtpXSx0LmRlcHRoKSYmaSsrLCFRKGUsbix0LmhlYXBbaV0sdC5kZXB0aCkpOyl0LmhlYXBbcl09dC5oZWFwW2ldLHI9aSxpPDw9MTt0LmhlYXBbcl09bn0sdHQ9KHQsZSxyKT0+e2xldCBuLGksYSxzLG89MDtpZigwIT09dC5sYXN0X2xpdClkb3tuPXQucGVuZGluZ19idWZbdC5kX2J1ZisyKm9dPDw4fHQucGVuZGluZ19idWZbdC5kX2J1ZisyKm8rMV0saT10LnBlbmRpbmdfYnVmW3QubF9idWYrb10sbysrLDA9PT1uPyQodCxpLGUpOihhPVVbaV0sJCh0LGErZCsxLGUpLHM9elthXSwwIT09cyYmKGktPUNbYV0sUCh0LGkscykpLG4tLSxhPU4obiksJCh0LGEscikscz1BW2FdLDAhPT1zJiYobi09T1thXSxQKHQsbixzKSkpfXdoaWxlKG88dC5sYXN0X2xpdCk7JCh0LG0sZSl9LGV0PSh0LGUpPT57Y29uc3Qgcj1lLmR5bl90cmVlLG49ZS5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsaT1lLnN0YXRfZGVzYy5oYXNfc3RyZWUsYT1lLnN0YXRfZGVzYy5lbGVtcztsZXQgcyxvLGgsbD0tMTtmb3IodC5oZWFwX2xlbj0wLHQuaGVhcF9tYXg9ZyxzPTA7czxhO3MrKykwIT09clsyKnNdPyh0LmhlYXBbKyt0LmhlYXBfbGVuXT1sPXMsdC5kZXB0aFtzXT0wKTpyWzIqcysxXT0wO2Zvcig7dC5oZWFwX2xlbjwyOyloPXQuaGVhcFsrK3QuaGVhcF9sZW5dPWw8Mj8rK2w6MCxyWzIqaF09MSx0LmRlcHRoW2hdPTAsdC5vcHRfbGVuLS0saSYmKHQuc3RhdGljX2xlbi09blsyKmgrMV0pO2ZvcihlLm1heF9jb2RlPWwscz10LmhlYXBfbGVuPj4xO3M+PTE7cy0tKUoodCxyLHMpO2g9YTtkb3tzPXQuaGVhcFsxXSx0LmhlYXBbMV09dC5oZWFwW3QuaGVhcF9sZW4tLV0sSih0LHIsMSksbz10LmhlYXBbMV0sdC5oZWFwWy0tdC5oZWFwX21heF09cyx0LmhlYXBbLS10LmhlYXBfbWF4XT1vLHJbMipoXT1yWzIqc10rclsyKm9dLHQuZGVwdGhbaF09KHQuZGVwdGhbc10+PXQuZGVwdGhbb10/dC5kZXB0aFtzXTp0LmRlcHRoW29dKSsxLHJbMipzKzFdPXJbMipvKzFdPWgsdC5oZWFwWzFdPWgrKyxKKHQsciwxKX13aGlsZSh0LmhlYXBfbGVuPj0yKTt0LmhlYXBbLS10LmhlYXBfbWF4XT10LmhlYXBbMV0sWCh0LGUpLHEocixsLHQuYmxfY291bnQpfSxydD0odCxlLHIpPT57bGV0IG4saSxhPS0xLHM9ZVsxXSxvPTAsaD03LGw9NDtmb3IoMD09PXMmJihoPTEzOCxsPTMpLGVbMioocisxKSsxXT02NTUzNSxuPTA7bjw9cjtuKyspaT1zLHM9ZVsyKihuKzEpKzFdLCsrbzxoJiZpPT09c3x8KG88bD90LmJsX3RyZWVbMippXSs9bzowIT09aT8oaSE9PWEmJnQuYmxfdHJlZVsyKmldKyssdC5ibF90cmVlWzIqYl0rKyk6bzw9MTA/dC5ibF90cmVlWzIqeF0rKzp0LmJsX3RyZWVbMiprXSsrLG89MCxhPWksMD09PXM/KGg9MTM4LGw9Myk6aT09PXM/KGg9NixsPTMpOihoPTcsbD00KSl9LG50PSh0LGUscik9PntsZXQgbixpLGE9LTEscz1lWzFdLG89MCxoPTcsbD00O2ZvcigwPT09cyYmKGg9MTM4LGw9Myksbj0wO248PXI7bisrKWlmKGk9cyxzPWVbMioobisxKSsxXSwhKCsrbzxoJiZpPT09cykpe2lmKG88bClkb3skKHQsaSx0LmJsX3RyZWUpfXdoaWxlKDAhPS0tbyk7ZWxzZSAwIT09aT8oaSE9PWEmJigkKHQsaSx0LmJsX3RyZWUpLG8tLSksJCh0LGIsdC5ibF90cmVlKSxQKHQsby0zLDIpKTpvPD0xMD8oJCh0LHgsdC5ibF90cmVlKSxQKHQsby0zLDMpKTooJCh0LGssdC5ibF90cmVlKSxQKHQsby0xMSw3KSk7bz0wLGE9aSwwPT09cz8oaD0xMzgsbD0zKTppPT09cz8oaD02LGw9Myk6KGg9NyxsPTQpfX0saXQ9dD0+e2xldCBlO2ZvcihydCh0LHQuZHluX2x0cmVlLHQubF9kZXNjLm1heF9jb2RlKSxydCh0LHQuZHluX2R0cmVlLHQuZF9kZXNjLm1heF9jb2RlKSxldCh0LHQuYmxfZGVzYyksZT1wLTE7ZT49MyYmMD09PXQuYmxfdHJlZVsyKlNbZV0rMV07ZS0tKTtyZXR1cm4gdC5vcHRfbGVuKz0zKihlKzEpKzUrNSs0LGV9LGF0PSh0LGUscixuKT0+e2xldCBpO2ZvcihQKHQsZS0yNTcsNSksUCh0LHItMSw1KSxQKHQsbi00LDQpLGk9MDtpPG47aSsrKVAodCx0LmJsX3RyZWVbMipTW2ldKzFdLDMpO250KHQsdC5keW5fbHRyZWUsZS0xKSxudCh0LHQuZHluX2R0cmVlLHItMSl9LHN0PXQ9PntsZXQgZSxpPTQwOTM2MjQ0NDc7Zm9yKGU9MDtlPD0zMTtlKyssaT4+Pj0xKWlmKDEmaSYmMCE9PXQuZHluX2x0cmVlWzIqZV0pcmV0dXJuIHI7aWYoMCE9PXQuZHluX2x0cmVlWzE4XXx8MCE9PXQuZHluX2x0cmVlWzIwXXx8MCE9PXQuZHluX2x0cmVlWzI2XSlyZXR1cm4gbjtmb3IoZT0zMjtlPGQ7ZSsrKWlmKDAhPT10LmR5bl9sdHJlZVsyKmVdKXJldHVybiBuO3JldHVybiByfTtsZXQgb3Q9ITE7Y29uc3QgaHQ9KHQsZSxyLG4pPT57UCh0LChzPDwxKSsobj8xOjApLDMpLFYodCxlLHIsITApfSxsdD0odCxyLG4sYSk9PntsZXQgcyxsLGM9MDt0LmxldmVsPjA/KHQuc3RybS5kYXRhX3R5cGU9PT1pJiYodC5zdHJtLmRhdGFfdHlwZT1zdCh0KSksZXQodCx0LmxfZGVzYyksZXQodCx0LmRfZGVzYyksYz1pdCh0KSxzPXQub3B0X2xlbiszKzc+Pj4zLGw9dC5zdGF0aWNfbGVuKzMrNz4+PjMsbDw9cyYmKHM9bCkpOnM9bD1uKzUsbis0PD1zJiYtMSE9PXI/aHQodCxyLG4sYSk6dC5zdHJhdGVneT09PWV8fGw9PT1zPyhQKHQsKG88PDEpKyhhPzE6MCksMyksdHQodCxSLEQpKTooUCh0LChoPDwxKSsoYT8xOjApLDMpLGF0KHQsdC5sX2Rlc2MubWF4X2NvZGUrMSx0LmRfZGVzYy5tYXhfY29kZSsxLGMrMSksdHQodCx0LmR5bl9sdHJlZSx0LmR5bl9kdHJlZSkpLFcodCksYSYmWSh0KX07dmFyIGN0PXtfdHJfaW5pdDp0PT57b3R8fChHKCksb3Q9ITApLHQubF9kZXNjPW5ldyBNKHQuZHluX2x0cmVlLFQpLHQuZF9kZXNjPW5ldyBNKHQuZHluX2R0cmVlLEgpLHQuYmxfZGVzYz1uZXcgTSh0LmJsX3RyZWUsWiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTAsVyh0KX0sX3RyX3N0b3JlZF9ibG9jazpodCxfdHJfZmx1c2hfYmxvY2s6bHQsX3RyX3RhbGx5Oih0LGUscik9Pih0LnBlbmRpbmdfYnVmW3QuZF9idWYrMip0Lmxhc3RfbGl0XT1lPj4+OCYyNTUsdC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqdC5sYXN0X2xpdCsxXT0yNTUmZSx0LnBlbmRpbmdfYnVmW3QubF9idWYrdC5sYXN0X2xpdF09MjU1JnIsdC5sYXN0X2xpdCsrLDA9PT1lP3QuZHluX2x0cmVlWzIqcl0rKzoodC5tYXRjaGVzKyssZS0tLHQuZHluX2x0cmVlWzIqKFVbcl0rZCsxKV0rKyx0LmR5bl9kdHJlZVsyKk4oZSldKyspLHQubGFzdF9saXQ9PT10LmxpdF9idWZzaXplLTEpLF90cl9hbGlnbjp0PT57UCh0LG88PDEsMyksJCh0LG0sUiksSyh0KX19LHV0PSh0LGUscixuKT0+e2xldCBpPTY1NTM1JnR8MCxhPXQ+Pj4xNiY2NTUzNXwwLHM9MDtmb3IoOzAhPT1yOyl7cz1yPjJlMz8yZTM6cixyLT1zO2Rve2k9aStlW24rK118MCxhPWEraXwwfXdoaWxlKC0tcyk7aSU9NjU1MjEsYSU9NjU1MjF9cmV0dXJuIGl8YTw8MTZ8MH07Y29uc3QgZHQ9bmV3IFVpbnQzMkFycmF5KCgoKT0+e2xldCB0LGU9W107Zm9yKHZhciByPTA7cjwyNTY7cisrKXt0PXI7Zm9yKHZhciBuPTA7bjw4O24rKyl0PTEmdD8zOTg4MjkyMzg0XnQ+Pj4xOnQ+Pj4xO2Vbcl09dH1yZXR1cm4gZX0pKCkpO3ZhciBfdD0odCxlLHIsbik9Pntjb25zdCBpPWR0LGE9bityO3RePS0xO2ZvcihsZXQgcj1uO3I8YTtyKyspdD10Pj4+OF5pWzI1NSYodF5lW3JdKV07cmV0dXJuLTFedH0sZnQ9ezI6Im5lZWQgZGljdGlvbmFyeSIsMToic3RyZWFtIGVuZCIsMDoiIiwiLTEiOiJmaWxlIGVycm9yIiwiLTIiOiJzdHJlYW0gZXJyb3IiLCItMyI6ImRhdGEgZXJyb3IiLCItNCI6Imluc3VmZmljaWVudCBtZW1vcnkiLCItNSI6ImJ1ZmZlciBlcnJvciIsIi02IjoiaW5jb21wYXRpYmxlIHZlcnNpb24ifSxwdD17Wl9OT19GTFVTSDowLFpfUEFSVElBTF9GTFVTSDoxLFpfU1lOQ19GTFVTSDoyLFpfRlVMTF9GTFVTSDozLFpfRklOSVNIOjQsWl9CTE9DSzo1LFpfVFJFRVM6NixaX09LOjAsWl9TVFJFQU1fRU5EOjEsWl9ORUVEX0RJQ1Q6MixaX0VSUk5POi0xLFpfU1RSRUFNX0VSUk9SOi0yLFpfREFUQV9FUlJPUjotMyxaX01FTV9FUlJPUjotNCxaX0JVRl9FUlJPUjotNSxaX05PX0NPTVBSRVNTSU9OOjAsWl9CRVNUX1NQRUVEOjEsWl9CRVNUX0NPTVBSRVNTSU9OOjksWl9ERUZBVUxUX0NPTVBSRVNTSU9OOi0xLFpfRklMVEVSRUQ6MSxaX0hVRkZNQU5fT05MWToyLFpfUkxFOjMsWl9GSVhFRDo0LFpfREVGQVVMVF9TVFJBVEVHWTowLFpfQklOQVJZOjAsWl9URVhUOjEsWl9VTktOT1dOOjIsWl9ERUZMQVRFRDo4fTtjb25zdHtfdHJfaW5pdDpndCxfdHJfc3RvcmVkX2Jsb2NrOnl0LF90cl9mbHVzaF9ibG9jazp2dCxfdHJfdGFsbHk6d3QsX3RyX2FsaWduOm10fT1jdCx7Wl9OT19GTFVTSDpidCxaX1BBUlRJQUxfRkxVU0g6eHQsWl9GVUxMX0ZMVVNIOmt0LFpfRklOSVNIOnp0LFpfQkxPQ0s6QXQsWl9PSzpFdCxaX1NUUkVBTV9FTkQ6U3QsWl9TVFJFQU1fRVJST1I6QnQsWl9EQVRBX0VSUk9SOlJ0LFpfQlVGX0VSUk9SOkR0LFpfREVGQVVMVF9DT01QUkVTU0lPTjpMdCxaX0ZJTFRFUkVEOlV0LFpfSFVGRk1BTl9PTkxZOkN0LFpfUkxFOk90LFpfRklYRUQ6RnQsWl9ERUZBVUxUX1NUUkFURUdZOlR0LFpfVU5LTk9XTjpIdCxaX0RFRkxBVEVEOlp0fT1wdCxNdD05LE50PTE1LEl0PTgsUHQ9Mjg2LCR0PTMwLGp0PTE5LEt0PTIqUHQrMSxYdD0xNSxxdD0zLEd0PTI1OCxXdD1HdCtxdCsxLFl0PTMyLFZ0PTQyLFF0PTY5LEp0PTczLHRlPTkxLGVlPTEwMyxyZT0xMTMsbmU9NjY2LGllPTEsYWU9MixzZT0zLG9lPTQsaGU9MyxsZT0odCxlKT0+KHQubXNnPWZ0W2VdLGUpLGNlPXQ9Pih0PDwxKS0odD40Pzk6MCksdWU9dD0+e2xldCBlPXQubGVuZ3RoO2Zvcig7LS1lPj0wOyl0W2VdPTB9O2xldCBkZT0odCxlLHIpPT4oZTw8dC5oYXNoX3NoaWZ0XnIpJnQuaGFzaF9tYXNrO2NvbnN0IF9lPXQ9Pntjb25zdCBlPXQuc3RhdGU7bGV0IHI9ZS5wZW5kaW5nO3I+dC5hdmFpbF9vdXQmJihyPXQuYXZhaWxfb3V0KSwwIT09ciYmKHQub3V0cHV0LnNldChlLnBlbmRpbmdfYnVmLnN1YmFycmF5KGUucGVuZGluZ19vdXQsZS5wZW5kaW5nX291dCtyKSx0Lm5leHRfb3V0KSx0Lm5leHRfb3V0Kz1yLGUucGVuZGluZ19vdXQrPXIsdC50b3RhbF9vdXQrPXIsdC5hdmFpbF9vdXQtPXIsZS5wZW5kaW5nLT1yLDA9PT1lLnBlbmRpbmcmJihlLnBlbmRpbmdfb3V0PTApKX0sZmU9KHQsZSk9Pnt2dCh0LHQuYmxvY2tfc3RhcnQ+PTA/dC5ibG9ja19zdGFydDotMSx0LnN0cnN0YXJ0LXQuYmxvY2tfc3RhcnQsZSksdC5ibG9ja19zdGFydD10LnN0cnN0YXJ0LF9lKHQuc3RybSl9LHBlPSh0LGUpPT57dC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109ZX0sZ2U9KHQsZSk9Pnt0LnBlbmRpbmdfYnVmW3QucGVuZGluZysrXT1lPj4+OCYyNTUsdC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109MjU1JmV9LHllPSh0LGUscixuKT0+e2xldCBpPXQuYXZhaWxfaW47cmV0dXJuIGk+biYmKGk9biksMD09PWk/MDoodC5hdmFpbF9pbi09aSxlLnNldCh0LmlucHV0LnN1YmFycmF5KHQubmV4dF9pbix0Lm5leHRfaW4raSksciksMT09PXQuc3RhdGUud3JhcD90LmFkbGVyPXV0KHQuYWRsZXIsZSxpLHIpOjI9PT10LnN0YXRlLndyYXAmJih0LmFkbGVyPV90KHQuYWRsZXIsZSxpLHIpKSx0Lm5leHRfaW4rPWksdC50b3RhbF9pbis9aSxpKX0sdmU9KHQsZSk9PntsZXQgcixuLGk9dC5tYXhfY2hhaW5fbGVuZ3RoLGE9dC5zdHJzdGFydCxzPXQucHJldl9sZW5ndGgsbz10Lm5pY2VfbWF0Y2g7Y29uc3QgaD10LnN0cnN0YXJ0PnQud19zaXplLVd0P3Quc3Ryc3RhcnQtKHQud19zaXplLVd0KTowLGw9dC53aW5kb3csYz10LndfbWFzayx1PXQucHJldixkPXQuc3Ryc3RhcnQrR3Q7bGV0IF89bFthK3MtMV0sZj1sW2Erc107dC5wcmV2X2xlbmd0aD49dC5nb29kX21hdGNoJiYoaT4+PTIpLG8+dC5sb29rYWhlYWQmJihvPXQubG9va2FoZWFkKTtkb3tpZihyPWUsbFtyK3NdPT09ZiYmbFtyK3MtMV09PT1fJiZsW3JdPT09bFthXSYmbFsrK3JdPT09bFthKzFdKXthKz0yLHIrKztkb3t9d2hpbGUobFsrK2FdPT09bFsrK3JdJiZsWysrYV09PT1sWysrcl0mJmxbKythXT09PWxbKytyXSYmbFsrK2FdPT09bFsrK3JdJiZsWysrYV09PT1sWysrcl0mJmxbKythXT09PWxbKytyXSYmbFsrK2FdPT09bFsrK3JdJiZsWysrYV09PT1sWysrcl0mJmE8ZCk7aWYobj1HdC0oZC1hKSxhPWQtR3Qsbj5zKXtpZih0Lm1hdGNoX3N0YXJ0PWUscz1uLG4+PW8pYnJlYWs7Xz1sW2Ercy0xXSxmPWxbYStzXX19fXdoaWxlKChlPXVbZSZjXSk+aCYmMCE9LS1pKTtyZXR1cm4gczw9dC5sb29rYWhlYWQ/czp0Lmxvb2thaGVhZH0sd2U9dD0+e2NvbnN0IGU9dC53X3NpemU7bGV0IHIsbixpLGEscztkb3tpZihhPXQud2luZG93X3NpemUtdC5sb29rYWhlYWQtdC5zdHJzdGFydCx0LnN0cnN0YXJ0Pj1lKyhlLVd0KSl7dC53aW5kb3cuc2V0KHQud2luZG93LnN1YmFycmF5KGUsZStlKSwwKSx0Lm1hdGNoX3N0YXJ0LT1lLHQuc3Ryc3RhcnQtPWUsdC5ibG9ja19zdGFydC09ZSxuPXQuaGFzaF9zaXplLHI9bjtkb3tpPXQuaGVhZFstLXJdLHQuaGVhZFtyXT1pPj1lP2ktZTowfXdoaWxlKC0tbik7bj1lLHI9bjtkb3tpPXQucHJldlstLXJdLHQucHJldltyXT1pPj1lP2ktZTowfXdoaWxlKC0tbik7YSs9ZX1pZigwPT09dC5zdHJtLmF2YWlsX2luKWJyZWFrO2lmKG49eWUodC5zdHJtLHQud2luZG93LHQuc3Ryc3RhcnQrdC5sb29rYWhlYWQsYSksdC5sb29rYWhlYWQrPW4sdC5sb29rYWhlYWQrdC5pbnNlcnQ+PXF0KWZvcihzPXQuc3Ryc3RhcnQtdC5pbnNlcnQsdC5pbnNfaD10LndpbmRvd1tzXSx0Lmluc19oPWRlKHQsdC5pbnNfaCx0LndpbmRvd1tzKzFdKTt0Lmluc2VydCYmKHQuaW5zX2g9ZGUodCx0Lmluc19oLHQud2luZG93W3MrcXQtMV0pLHQucHJldltzJnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXMscysrLHQuaW5zZXJ0LS0sISh0Lmxvb2thaGVhZCt0Lmluc2VydDxxdCkpOyk7fXdoaWxlKHQubG9va2FoZWFkPFd0JiYwIT09dC5zdHJtLmF2YWlsX2luKX0sbWU9KHQsZSk9PntsZXQgcixuO2Zvcig7Oyl7aWYodC5sb29rYWhlYWQ8V3Qpe2lmKHdlKHQpLHQubG9va2FoZWFkPFd0JiZlPT09YnQpcmV0dXJuIGllO2lmKDA9PT10Lmxvb2thaGVhZClicmVha31pZihyPTAsdC5sb29rYWhlYWQ+PXF0JiYodC5pbnNfaD1kZSh0LHQuaW5zX2gsdC53aW5kb3dbdC5zdHJzdGFydCtxdC0xXSkscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0KSwwIT09ciYmdC5zdHJzdGFydC1yPD10Lndfc2l6ZS1XdCYmKHQubWF0Y2hfbGVuZ3RoPXZlKHQscikpLHQubWF0Y2hfbGVuZ3RoPj1xdClpZihuPXd0KHQsdC5zdHJzdGFydC10Lm1hdGNoX3N0YXJ0LHQubWF0Y2hfbGVuZ3RoLXF0KSx0Lmxvb2thaGVhZC09dC5tYXRjaF9sZW5ndGgsdC5tYXRjaF9sZW5ndGg8PXQubWF4X2xhenlfbWF0Y2gmJnQubG9va2FoZWFkPj1xdCl7dC5tYXRjaF9sZW5ndGgtLTtkb3t0LnN0cnN0YXJ0KyssdC5pbnNfaD1kZSh0LHQuaW5zX2gsdC53aW5kb3dbdC5zdHJzdGFydCtxdC0xXSkscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0fXdoaWxlKDAhPS0tdC5tYXRjaF9sZW5ndGgpO3Quc3Ryc3RhcnQrK31lbHNlIHQuc3Ryc3RhcnQrPXQubWF0Y2hfbGVuZ3RoLHQubWF0Y2hfbGVuZ3RoPTAsdC5pbnNfaD10LndpbmRvd1t0LnN0cnN0YXJ0XSx0Lmluc19oPWRlKHQsdC5pbnNfaCx0LndpbmRvd1t0LnN0cnN0YXJ0KzFdKTtlbHNlIG49d3QodCwwLHQud2luZG93W3Quc3Ryc3RhcnRdKSx0Lmxvb2thaGVhZC0tLHQuc3Ryc3RhcnQrKztpZihuJiYoZmUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBpZX1yZXR1cm4gdC5pbnNlcnQ9dC5zdHJzdGFydDxxdC0xP3Quc3Ryc3RhcnQ6cXQtMSxlPT09enQ/KGZlKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P3NlOm9lKTp0Lmxhc3RfbGl0JiYoZmUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP2llOmFlfSxiZT0odCxlKT0+e2xldCByLG4saTtmb3IoOzspe2lmKHQubG9va2FoZWFkPFd0KXtpZih3ZSh0KSx0Lmxvb2thaGVhZDxXdCYmZT09PWJ0KXJldHVybiBpZTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYocj0wLHQubG9va2FoZWFkPj1xdCYmKHQuaW5zX2g9ZGUodCx0Lmluc19oLHQud2luZG93W3Quc3Ryc3RhcnQrcXQtMV0pLHI9dC5wcmV2W3Quc3Ryc3RhcnQmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09dC5zdHJzdGFydCksdC5wcmV2X2xlbmd0aD10Lm1hdGNoX2xlbmd0aCx0LnByZXZfbWF0Y2g9dC5tYXRjaF9zdGFydCx0Lm1hdGNoX2xlbmd0aD1xdC0xLDAhPT1yJiZ0LnByZXZfbGVuZ3RoPHQubWF4X2xhenlfbWF0Y2gmJnQuc3Ryc3RhcnQtcjw9dC53X3NpemUtV3QmJih0Lm1hdGNoX2xlbmd0aD12ZSh0LHIpLHQubWF0Y2hfbGVuZ3RoPD01JiYodC5zdHJhdGVneT09PVV0fHx0Lm1hdGNoX2xlbmd0aD09PXF0JiZ0LnN0cnN0YXJ0LXQubWF0Y2hfc3RhcnQ+NDA5NikmJih0Lm1hdGNoX2xlbmd0aD1xdC0xKSksdC5wcmV2X2xlbmd0aD49cXQmJnQubWF0Y2hfbGVuZ3RoPD10LnByZXZfbGVuZ3RoKXtpPXQuc3Ryc3RhcnQrdC5sb29rYWhlYWQtcXQsbj13dCh0LHQuc3Ryc3RhcnQtMS10LnByZXZfbWF0Y2gsdC5wcmV2X2xlbmd0aC1xdCksdC5sb29rYWhlYWQtPXQucHJldl9sZW5ndGgtMSx0LnByZXZfbGVuZ3RoLT0yO2RveysrdC5zdHJzdGFydDw9aSYmKHQuaW5zX2g9ZGUodCx0Lmluc19oLHQud2luZG93W3Quc3Ryc3RhcnQrcXQtMV0pLHI9dC5wcmV2W3Quc3Ryc3RhcnQmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09dC5zdHJzdGFydCl9d2hpbGUoMCE9LS10LnByZXZfbGVuZ3RoKTtpZih0Lm1hdGNoX2F2YWlsYWJsZT0wLHQubWF0Y2hfbGVuZ3RoPXF0LTEsdC5zdHJzdGFydCsrLG4mJihmZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIGllfWVsc2UgaWYodC5tYXRjaF9hdmFpbGFibGUpe2lmKG49d3QodCwwLHQud2luZG93W3Quc3Ryc3RhcnQtMV0pLG4mJmZlKHQsITEpLHQuc3Ryc3RhcnQrKyx0Lmxvb2thaGVhZC0tLDA9PT10LnN0cm0uYXZhaWxfb3V0KXJldHVybiBpZX1lbHNlIHQubWF0Y2hfYXZhaWxhYmxlPTEsdC5zdHJzdGFydCsrLHQubG9va2FoZWFkLS19cmV0dXJuIHQubWF0Y2hfYXZhaWxhYmxlJiYobj13dCh0LDAsdC53aW5kb3dbdC5zdHJzdGFydC0xXSksdC5tYXRjaF9hdmFpbGFibGU9MCksdC5pbnNlcnQ9dC5zdHJzdGFydDxxdC0xP3Quc3Ryc3RhcnQ6cXQtMSxlPT09enQ/KGZlKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P3NlOm9lKTp0Lmxhc3RfbGl0JiYoZmUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP2llOmFlfSx4ZT0odCxlKT0+e2xldCByLG4saSxhO2NvbnN0IHM9dC53aW5kb3c7Zm9yKDs7KXtpZih0Lmxvb2thaGVhZDw9R3Qpe2lmKHdlKHQpLHQubG9va2FoZWFkPD1HdCYmZT09PWJ0KXJldHVybiBpZTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYodC5tYXRjaF9sZW5ndGg9MCx0Lmxvb2thaGVhZD49cXQmJnQuc3Ryc3RhcnQ+MCYmKGk9dC5zdHJzdGFydC0xLG49c1tpXSxuPT09c1srK2ldJiZuPT09c1srK2ldJiZuPT09c1srK2ldKSl7YT10LnN0cnN0YXJ0K0d0O2Rve313aGlsZShuPT09c1srK2ldJiZuPT09c1srK2ldJiZuPT09c1srK2ldJiZuPT09c1srK2ldJiZuPT09c1srK2ldJiZuPT09c1srK2ldJiZuPT09c1srK2ldJiZuPT09c1srK2ldJiZpPGEpO3QubWF0Y2hfbGVuZ3RoPUd0LShhLWkpLHQubWF0Y2hfbGVuZ3RoPnQubG9va2FoZWFkJiYodC5tYXRjaF9sZW5ndGg9dC5sb29rYWhlYWQpfWlmKHQubWF0Y2hfbGVuZ3RoPj1xdD8ocj13dCh0LDEsdC5tYXRjaF9sZW5ndGgtcXQpLHQubG9va2FoZWFkLT10Lm1hdGNoX2xlbmd0aCx0LnN0cnN0YXJ0Kz10Lm1hdGNoX2xlbmd0aCx0Lm1hdGNoX2xlbmd0aD0wKToocj13dCh0LDAsdC53aW5kb3dbdC5zdHJzdGFydF0pLHQubG9va2FoZWFkLS0sdC5zdHJzdGFydCsrKSxyJiYoZmUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBpZX1yZXR1cm4gdC5pbnNlcnQ9MCxlPT09enQ/KGZlKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P3NlOm9lKTp0Lmxhc3RfbGl0JiYoZmUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP2llOmFlfSxrZT0odCxlKT0+e2xldCByO2Zvcig7Oyl7aWYoMD09PXQubG9va2FoZWFkJiYod2UodCksMD09PXQubG9va2FoZWFkKSl7aWYoZT09PWJ0KXJldHVybiBpZTticmVha31pZih0Lm1hdGNoX2xlbmd0aD0wLHI9d3QodCwwLHQud2luZG93W3Quc3Ryc3RhcnRdKSx0Lmxvb2thaGVhZC0tLHQuc3Ryc3RhcnQrKyxyJiYoZmUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBpZX1yZXR1cm4gdC5pbnNlcnQ9MCxlPT09enQ/KGZlKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P3NlOm9lKTp0Lmxhc3RfbGl0JiYoZmUodCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP2llOmFlfTtmdW5jdGlvbiB6ZSh0LGUscixuLGkpe3RoaXMuZ29vZF9sZW5ndGg9dCx0aGlzLm1heF9sYXp5PWUsdGhpcy5uaWNlX2xlbmd0aD1yLHRoaXMubWF4X2NoYWluPW4sdGhpcy5mdW5jPWl9Y29uc3QgQWU9W25ldyB6ZSgwLDAsMCwwLCgodCxlKT0+e2xldCByPTY1NTM1O2ZvcihyPnQucGVuZGluZ19idWZfc2l6ZS01JiYocj10LnBlbmRpbmdfYnVmX3NpemUtNSk7Oyl7aWYodC5sb29rYWhlYWQ8PTEpe2lmKHdlKHQpLDA9PT10Lmxvb2thaGVhZCYmZT09PWJ0KXJldHVybiBpZTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9dC5zdHJzdGFydCs9dC5sb29rYWhlYWQsdC5sb29rYWhlYWQ9MDtjb25zdCBuPXQuYmxvY2tfc3RhcnQrcjtpZigoMD09PXQuc3Ryc3RhcnR8fHQuc3Ryc3RhcnQ+PW4pJiYodC5sb29rYWhlYWQ9dC5zdHJzdGFydC1uLHQuc3Ryc3RhcnQ9bixmZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIGllO2lmKHQuc3Ryc3RhcnQtdC5ibG9ja19zdGFydD49dC53X3NpemUtV3QmJihmZSh0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIGllfXJldHVybiB0Lmluc2VydD0wLGU9PT16dD8oZmUodCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/c2U6b2UpOih0LnN0cnN0YXJ0PnQuYmxvY2tfc3RhcnQmJihmZSh0LCExKSx0LnN0cm0uYXZhaWxfb3V0KSxpZSl9KSksbmV3IHplKDQsNCw4LDQsbWUpLG5ldyB6ZSg0LDUsMTYsOCxtZSksbmV3IHplKDQsNiwzMiwzMixtZSksbmV3IHplKDQsNCwxNiwxNixiZSksbmV3IHplKDgsMTYsMzIsMzIsYmUpLG5ldyB6ZSg4LDE2LDEyOCwxMjgsYmUpLG5ldyB6ZSg4LDMyLDEyOCwyNTYsYmUpLG5ldyB6ZSgzMiwxMjgsMjU4LDEwMjQsYmUpLG5ldyB6ZSgzMiwyNTgsMjU4LDQwOTYsYmUpXSxFZT10PT57dC53aW5kb3dfc2l6ZT0yKnQud19zaXplLHVlKHQuaGVhZCksdC5tYXhfbGF6eV9tYXRjaD1BZVt0LmxldmVsXS5tYXhfbGF6eSx0Lmdvb2RfbWF0Y2g9QWVbdC5sZXZlbF0uZ29vZF9sZW5ndGgsdC5uaWNlX21hdGNoPUFlW3QubGV2ZWxdLm5pY2VfbGVuZ3RoLHQubWF4X2NoYWluX2xlbmd0aD1BZVt0LmxldmVsXS5tYXhfY2hhaW4sdC5zdHJzdGFydD0wLHQuYmxvY2tfc3RhcnQ9MCx0Lmxvb2thaGVhZD0wLHQuaW5zZXJ0PTAsdC5tYXRjaF9sZW5ndGg9dC5wcmV2X2xlbmd0aD1xdC0xLHQubWF0Y2hfYXZhaWxhYmxlPTAsdC5pbnNfaD0wfTtmdW5jdGlvbiBTZSgpe3RoaXMuc3RybT1udWxsLHRoaXMuc3RhdHVzPTAsdGhpcy5wZW5kaW5nX2J1Zj1udWxsLHRoaXMucGVuZGluZ19idWZfc2l6ZT0wLHRoaXMucGVuZGluZ19vdXQ9MCx0aGlzLnBlbmRpbmc9MCx0aGlzLndyYXA9MCx0aGlzLmd6aGVhZD1udWxsLHRoaXMuZ3ppbmRleD0wLHRoaXMubWV0aG9kPVp0LHRoaXMubGFzdF9mbHVzaD0tMSx0aGlzLndfc2l6ZT0wLHRoaXMud19iaXRzPTAsdGhpcy53X21hc2s9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMud2luZG93X3NpemU9MCx0aGlzLnByZXY9bnVsbCx0aGlzLmhlYWQ9bnVsbCx0aGlzLmluc19oPTAsdGhpcy5oYXNoX3NpemU9MCx0aGlzLmhhc2hfYml0cz0wLHRoaXMuaGFzaF9tYXNrPTAsdGhpcy5oYXNoX3NoaWZ0PTAsdGhpcy5ibG9ja19zdGFydD0wLHRoaXMubWF0Y2hfbGVuZ3RoPTAsdGhpcy5wcmV2X21hdGNoPTAsdGhpcy5tYXRjaF9hdmFpbGFibGU9MCx0aGlzLnN0cnN0YXJ0PTAsdGhpcy5tYXRjaF9zdGFydD0wLHRoaXMubG9va2FoZWFkPTAsdGhpcy5wcmV2X2xlbmd0aD0wLHRoaXMubWF4X2NoYWluX2xlbmd0aD0wLHRoaXMubWF4X2xhenlfbWF0Y2g9MCx0aGlzLmxldmVsPTAsdGhpcy5zdHJhdGVneT0wLHRoaXMuZ29vZF9tYXRjaD0wLHRoaXMubmljZV9tYXRjaD0wLHRoaXMuZHluX2x0cmVlPW5ldyBVaW50MTZBcnJheSgyKkt0KSx0aGlzLmR5bl9kdHJlZT1uZXcgVWludDE2QXJyYXkoMiooMiokdCsxKSksdGhpcy5ibF90cmVlPW5ldyBVaW50MTZBcnJheSgyKigyKmp0KzEpKSx1ZSh0aGlzLmR5bl9sdHJlZSksdWUodGhpcy5keW5fZHRyZWUpLHVlKHRoaXMuYmxfdHJlZSksdGhpcy5sX2Rlc2M9bnVsbCx0aGlzLmRfZGVzYz1udWxsLHRoaXMuYmxfZGVzYz1udWxsLHRoaXMuYmxfY291bnQ9bmV3IFVpbnQxNkFycmF5KFh0KzEpLHRoaXMuaGVhcD1uZXcgVWludDE2QXJyYXkoMipQdCsxKSx1ZSh0aGlzLmhlYXApLHRoaXMuaGVhcF9sZW49MCx0aGlzLmhlYXBfbWF4PTAsdGhpcy5kZXB0aD1uZXcgVWludDE2QXJyYXkoMipQdCsxKSx1ZSh0aGlzLmRlcHRoKSx0aGlzLmxfYnVmPTAsdGhpcy5saXRfYnVmc2l6ZT0wLHRoaXMubGFzdF9saXQ9MCx0aGlzLmRfYnVmPTAsdGhpcy5vcHRfbGVuPTAsdGhpcy5zdGF0aWNfbGVuPTAsdGhpcy5tYXRjaGVzPTAsdGhpcy5pbnNlcnQ9MCx0aGlzLmJpX2J1Zj0wLHRoaXMuYmlfdmFsaWQ9MH1jb25zdCBCZT10PT57aWYoIXR8fCF0LnN0YXRlKXJldHVybiBsZSh0LEJ0KTt0LnRvdGFsX2luPXQudG90YWxfb3V0PTAsdC5kYXRhX3R5cGU9SHQ7Y29uc3QgZT10LnN0YXRlO3JldHVybiBlLnBlbmRpbmc9MCxlLnBlbmRpbmdfb3V0PTAsZS53cmFwPDAmJihlLndyYXA9LWUud3JhcCksZS5zdGF0dXM9ZS53cmFwP1Z0OnJlLHQuYWRsZXI9Mj09PWUud3JhcD8wOjEsZS5sYXN0X2ZsdXNoPWJ0LGd0KGUpLEV0fSxSZT10PT57Y29uc3QgZT1CZSh0KTtyZXR1cm4gZT09PUV0JiZFZSh0LnN0YXRlKSxlfSxEZT0odCxlLHIsbixpLGEpPT57aWYoIXQpcmV0dXJuIEJ0O2xldCBzPTE7aWYoZT09PUx0JiYoZT02KSxuPDA/KHM9MCxuPS1uKTpuPjE1JiYocz0yLG4tPTE2KSxpPDF8fGk+TXR8fHIhPT1adHx8bjw4fHxuPjE1fHxlPDB8fGU+OXx8YTwwfHxhPkZ0KXJldHVybiBsZSh0LEJ0KTs4PT09biYmKG49OSk7Y29uc3Qgbz1uZXcgU2U7cmV0dXJuIHQuc3RhdGU9byxvLnN0cm09dCxvLndyYXA9cyxvLmd6aGVhZD1udWxsLG8ud19iaXRzPW4sby53X3NpemU9MTw8by53X2JpdHMsby53X21hc2s9by53X3NpemUtMSxvLmhhc2hfYml0cz1pKzcsby5oYXNoX3NpemU9MTw8by5oYXNoX2JpdHMsby5oYXNoX21hc2s9by5oYXNoX3NpemUtMSxvLmhhc2hfc2hpZnQ9fn4oKG8uaGFzaF9iaXRzK3F0LTEpL3F0KSxvLndpbmRvdz1uZXcgVWludDhBcnJheSgyKm8ud19zaXplKSxvLmhlYWQ9bmV3IFVpbnQxNkFycmF5KG8uaGFzaF9zaXplKSxvLnByZXY9bmV3IFVpbnQxNkFycmF5KG8ud19zaXplKSxvLmxpdF9idWZzaXplPTE8PGkrNixvLnBlbmRpbmdfYnVmX3NpemU9NCpvLmxpdF9idWZzaXplLG8ucGVuZGluZ19idWY9bmV3IFVpbnQ4QXJyYXkoby5wZW5kaW5nX2J1Zl9zaXplKSxvLmRfYnVmPTEqby5saXRfYnVmc2l6ZSxvLmxfYnVmPTMqby5saXRfYnVmc2l6ZSxvLmxldmVsPWUsby5zdHJhdGVneT1hLG8ubWV0aG9kPXIsUmUodCl9O3ZhciBMZT17ZGVmbGF0ZUluaXQ6KHQsZSk9PkRlKHQsZSxadCxOdCxJdCxUdCksZGVmbGF0ZUluaXQyOkRlLGRlZmxhdGVSZXNldDpSZSxkZWZsYXRlUmVzZXRLZWVwOkJlLGRlZmxhdGVTZXRIZWFkZXI6KHQsZSk9PnQmJnQuc3RhdGU/MiE9PXQuc3RhdGUud3JhcD9CdDoodC5zdGF0ZS5nemhlYWQ9ZSxFdCk6QnQsZGVmbGF0ZToodCxlKT0+e2xldCByLG47aWYoIXR8fCF0LnN0YXRlfHxlPkF0fHxlPDApcmV0dXJuIHQ/bGUodCxCdCk6QnQ7Y29uc3QgaT10LnN0YXRlO2lmKCF0Lm91dHB1dHx8IXQuaW5wdXQmJjAhPT10LmF2YWlsX2lufHxpLnN0YXR1cz09PW5lJiZlIT09enQpcmV0dXJuIGxlKHQsMD09PXQuYXZhaWxfb3V0P0R0OkJ0KTtpLnN0cm09dDtjb25zdCBhPWkubGFzdF9mbHVzaDtpZihpLmxhc3RfZmx1c2g9ZSxpLnN0YXR1cz09PVZ0KWlmKDI9PT1pLndyYXApdC5hZGxlcj0wLHBlKGksMzEpLHBlKGksMTM5KSxwZShpLDgpLGkuZ3poZWFkPyhwZShpLChpLmd6aGVhZC50ZXh0PzE6MCkrKGkuZ3poZWFkLmhjcmM/MjowKSsoaS5nemhlYWQuZXh0cmE/NDowKSsoaS5nemhlYWQubmFtZT84OjApKyhpLmd6aGVhZC5jb21tZW50PzE2OjApKSxwZShpLDI1NSZpLmd6aGVhZC50aW1lKSxwZShpLGkuZ3poZWFkLnRpbWU+PjgmMjU1KSxwZShpLGkuZ3poZWFkLnRpbWU+PjE2JjI1NSkscGUoaSxpLmd6aGVhZC50aW1lPj4yNCYyNTUpLHBlKGksOT09PWkubGV2ZWw/MjppLnN0cmF0ZWd5Pj1DdHx8aS5sZXZlbDwyPzQ6MCkscGUoaSwyNTUmaS5nemhlYWQub3MpLGkuZ3poZWFkLmV4dHJhJiZpLmd6aGVhZC5leHRyYS5sZW5ndGgmJihwZShpLDI1NSZpLmd6aGVhZC5leHRyYS5sZW5ndGgpLHBlKGksaS5nemhlYWQuZXh0cmEubGVuZ3RoPj44JjI1NSkpLGkuZ3poZWFkLmhjcmMmJih0LmFkbGVyPV90KHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmcsMCkpLGkuZ3ppbmRleD0wLGkuc3RhdHVzPVF0KToocGUoaSwwKSxwZShpLDApLHBlKGksMCkscGUoaSwwKSxwZShpLDApLHBlKGksOT09PWkubGV2ZWw/MjppLnN0cmF0ZWd5Pj1DdHx8aS5sZXZlbDwyPzQ6MCkscGUoaSxoZSksaS5zdGF0dXM9cmUpO2Vsc2V7bGV0IGU9WnQrKGkud19iaXRzLTg8PDQpPDw4LHI9LTE7cj1pLnN0cmF0ZWd5Pj1DdHx8aS5sZXZlbDwyPzA6aS5sZXZlbDw2PzE6Nj09PWkubGV2ZWw/MjozLGV8PXI8PDYsMCE9PWkuc3Ryc3RhcnQmJihlfD1ZdCksZSs9MzEtZSUzMSxpLnN0YXR1cz1yZSxnZShpLGUpLDAhPT1pLnN0cnN0YXJ0JiYoZ2UoaSx0LmFkbGVyPj4+MTYpLGdlKGksNjU1MzUmdC5hZGxlcikpLHQuYWRsZXI9MX1pZihpLnN0YXR1cz09PVF0KWlmKGkuZ3poZWFkLmV4dHJhKXtmb3Iocj1pLnBlbmRpbmc7aS5nemluZGV4PCg2NTUzNSZpLmd6aGVhZC5leHRyYS5sZW5ndGgpJiYoaS5wZW5kaW5nIT09aS5wZW5kaW5nX2J1Zl9zaXplfHwoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPnImJih0LmFkbGVyPV90KHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmctcixyKSksX2UodCkscj1pLnBlbmRpbmcsaS5wZW5kaW5nIT09aS5wZW5kaW5nX2J1Zl9zaXplKSk7KXBlKGksMjU1JmkuZ3poZWFkLmV4dHJhW2kuZ3ppbmRleF0pLGkuZ3ppbmRleCsrO2kuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5yJiYodC5hZGxlcj1fdCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLXIscikpLGkuZ3ppbmRleD09PWkuZ3poZWFkLmV4dHJhLmxlbmd0aCYmKGkuZ3ppbmRleD0wLGkuc3RhdHVzPUp0KX1lbHNlIGkuc3RhdHVzPUp0O2lmKGkuc3RhdHVzPT09SnQpaWYoaS5nemhlYWQubmFtZSl7cj1pLnBlbmRpbmc7ZG97aWYoaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplJiYoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPnImJih0LmFkbGVyPV90KHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmctcixyKSksX2UodCkscj1pLnBlbmRpbmcsaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplKSl7bj0xO2JyZWFrfW49aS5nemluZGV4PGkuZ3poZWFkLm5hbWUubGVuZ3RoPzI1NSZpLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQoaS5nemluZGV4KyspOjAscGUoaSxuKX13aGlsZSgwIT09bik7aS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPnImJih0LmFkbGVyPV90KHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmctcixyKSksMD09PW4mJihpLmd6aW5kZXg9MCxpLnN0YXR1cz10ZSl9ZWxzZSBpLnN0YXR1cz10ZTtpZihpLnN0YXR1cz09PXRlKWlmKGkuZ3poZWFkLmNvbW1lbnQpe3I9aS5wZW5kaW5nO2Rve2lmKGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSYmKGkuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5yJiYodC5hZGxlcj1fdCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLXIscikpLF9lKHQpLHI9aS5wZW5kaW5nLGkucGVuZGluZz09PWkucGVuZGluZ19idWZfc2l6ZSkpe249MTticmVha31uPWkuZ3ppbmRleDxpLmd6aGVhZC5jb21tZW50Lmxlbmd0aD8yNTUmaS5nemhlYWQuY29tbWVudC5jaGFyQ29kZUF0KGkuZ3ppbmRleCsrKTowLHBlKGksbil9d2hpbGUoMCE9PW4pO2kuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5yJiYodC5hZGxlcj1fdCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLXIscikpLDA9PT1uJiYoaS5zdGF0dXM9ZWUpfWVsc2UgaS5zdGF0dXM9ZWU7aWYoaS5zdGF0dXM9PT1lZSYmKGkuZ3poZWFkLmhjcmM/KGkucGVuZGluZysyPmkucGVuZGluZ19idWZfc2l6ZSYmX2UodCksaS5wZW5kaW5nKzI8PWkucGVuZGluZ19idWZfc2l6ZSYmKHBlKGksMjU1JnQuYWRsZXIpLHBlKGksdC5hZGxlcj4+OCYyNTUpLHQuYWRsZXI9MCxpLnN0YXR1cz1yZSkpOmkuc3RhdHVzPXJlKSwwIT09aS5wZW5kaW5nKXtpZihfZSh0KSwwPT09dC5hdmFpbF9vdXQpcmV0dXJuIGkubGFzdF9mbHVzaD0tMSxFdH1lbHNlIGlmKDA9PT10LmF2YWlsX2luJiZjZShlKTw9Y2UoYSkmJmUhPT16dClyZXR1cm4gbGUodCxEdCk7aWYoaS5zdGF0dXM9PT1uZSYmMCE9PXQuYXZhaWxfaW4pcmV0dXJuIGxlKHQsRHQpO2lmKDAhPT10LmF2YWlsX2lufHwwIT09aS5sb29rYWhlYWR8fGUhPT1idCYmaS5zdGF0dXMhPT1uZSl7bGV0IHI9aS5zdHJhdGVneT09PUN0P2tlKGksZSk6aS5zdHJhdGVneT09PU90P3hlKGksZSk6QWVbaS5sZXZlbF0uZnVuYyhpLGUpO2lmKHIhPT1zZSYmciE9PW9lfHwoaS5zdGF0dXM9bmUpLHI9PT1pZXx8cj09PXNlKXJldHVybiAwPT09dC5hdmFpbF9vdXQmJihpLmxhc3RfZmx1c2g9LTEpLEV0O2lmKHI9PT1hZSYmKGU9PT14dD9tdChpKTplIT09QXQmJih5dChpLDAsMCwhMSksZT09PWt0JiYodWUoaS5oZWFkKSwwPT09aS5sb29rYWhlYWQmJihpLnN0cnN0YXJ0PTAsaS5ibG9ja19zdGFydD0wLGkuaW5zZXJ0PTApKSksX2UodCksMD09PXQuYXZhaWxfb3V0KSlyZXR1cm4gaS5sYXN0X2ZsdXNoPS0xLEV0fXJldHVybiBlIT09enQ/RXQ6aS53cmFwPD0wP1N0OigyPT09aS53cmFwPyhwZShpLDI1NSZ0LmFkbGVyKSxwZShpLHQuYWRsZXI+PjgmMjU1KSxwZShpLHQuYWRsZXI+PjE2JjI1NSkscGUoaSx0LmFkbGVyPj4yNCYyNTUpLHBlKGksMjU1JnQudG90YWxfaW4pLHBlKGksdC50b3RhbF9pbj4+OCYyNTUpLHBlKGksdC50b3RhbF9pbj4+MTYmMjU1KSxwZShpLHQudG90YWxfaW4+PjI0JjI1NSkpOihnZShpLHQuYWRsZXI+Pj4xNiksZ2UoaSw2NTUzNSZ0LmFkbGVyKSksX2UodCksaS53cmFwPjAmJihpLndyYXA9LWkud3JhcCksMCE9PWkucGVuZGluZz9FdDpTdCl9LGRlZmxhdGVFbmQ6dD0+e2lmKCF0fHwhdC5zdGF0ZSlyZXR1cm4gQnQ7Y29uc3QgZT10LnN0YXRlLnN0YXR1cztyZXR1cm4gZSE9PVZ0JiZlIT09UXQmJmUhPT1KdCYmZSE9PXRlJiZlIT09ZWUmJmUhPT1yZSYmZSE9PW5lP2xlKHQsQnQpOih0LnN0YXRlPW51bGwsZT09PXJlP2xlKHQsUnQpOkV0KX0sZGVmbGF0ZVNldERpY3Rpb25hcnk6KHQsZSk9PntsZXQgcj1lLmxlbmd0aDtpZighdHx8IXQuc3RhdGUpcmV0dXJuIEJ0O2NvbnN0IG49dC5zdGF0ZSxpPW4ud3JhcDtpZigyPT09aXx8MT09PWkmJm4uc3RhdHVzIT09VnR8fG4ubG9va2FoZWFkKXJldHVybiBCdDtpZigxPT09aSYmKHQuYWRsZXI9dXQodC5hZGxlcixlLHIsMCkpLG4ud3JhcD0wLHI+PW4ud19zaXplKXswPT09aSYmKHVlKG4uaGVhZCksbi5zdHJzdGFydD0wLG4uYmxvY2tfc3RhcnQ9MCxuLmluc2VydD0wKTtsZXQgdD1uZXcgVWludDhBcnJheShuLndfc2l6ZSk7dC5zZXQoZS5zdWJhcnJheShyLW4ud19zaXplLHIpLDApLGU9dCxyPW4ud19zaXplfWNvbnN0IGE9dC5hdmFpbF9pbixzPXQubmV4dF9pbixvPXQuaW5wdXQ7Zm9yKHQuYXZhaWxfaW49cix0Lm5leHRfaW49MCx0LmlucHV0PWUsd2Uobik7bi5sb29rYWhlYWQ+PXF0Oyl7bGV0IHQ9bi5zdHJzdGFydCxlPW4ubG9va2FoZWFkLShxdC0xKTtkb3tuLmluc19oPWRlKG4sbi5pbnNfaCxuLndpbmRvd1t0K3F0LTFdKSxuLnByZXZbdCZuLndfbWFza109bi5oZWFkW24uaW5zX2hdLG4uaGVhZFtuLmluc19oXT10LHQrK313aGlsZSgtLWUpO24uc3Ryc3RhcnQ9dCxuLmxvb2thaGVhZD1xdC0xLHdlKG4pfXJldHVybiBuLnN0cnN0YXJ0Kz1uLmxvb2thaGVhZCxuLmJsb2NrX3N0YXJ0PW4uc3Ryc3RhcnQsbi5pbnNlcnQ9bi5sb29rYWhlYWQsbi5sb29rYWhlYWQ9MCxuLm1hdGNoX2xlbmd0aD1uLnByZXZfbGVuZ3RoPXF0LTEsbi5tYXRjaF9hdmFpbGFibGU9MCx0Lm5leHRfaW49cyx0LmlucHV0PW8sdC5hdmFpbF9pbj1hLG4ud3JhcD1pLEV0fSxkZWZsYXRlSW5mbzoicGFrbyBkZWZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KSJ9O2NvbnN0IFVlPSh0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKTt2YXIgQ2U9ZnVuY3Rpb24odCl7Y29uc3QgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7Zm9yKDtlLmxlbmd0aDspe2NvbnN0IHI9ZS5zaGlmdCgpO2lmKHIpe2lmKCJvYmplY3QiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKHIrIm11c3QgYmUgbm9uLW9iamVjdCIpO2Zvcihjb25zdCBlIGluIHIpVWUocixlKSYmKHRbZV09cltlXSl9fXJldHVybiB0fSxPZT17YXNzaWduOkNlLGZsYXR0ZW5DaHVua3M6dD0+e2xldCBlPTA7Zm9yKGxldCByPTAsbj10Lmxlbmd0aDtyPG47cisrKWUrPXRbcl0ubGVuZ3RoO2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkoZSk7Zm9yKGxldCBlPTAsbj0wLGk9dC5sZW5ndGg7ZTxpO2UrKyl7bGV0IGk9dFtlXTtyLnNldChpLG4pLG4rPWkubGVuZ3RofXJldHVybiByfX07bGV0IEZlPSEwO3RyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpfWNhdGNoKHQpe0ZlPSExfWNvbnN0IFRlPW5ldyBVaW50OEFycmF5KDI1Nik7Zm9yKGxldCB0PTA7dDwyNTY7dCsrKVRlW3RdPXQ+PTI1Mj82OnQ+PTI0OD81OnQ+PTI0MD80OnQ+PTIyND8zOnQ+PTE5Mj8yOjE7VGVbMjU0XT1UZVsyNTRdPTE7Y29uc3QgSGU9KHQsZSk9PntpZihlPDY1NTM0JiZ0LnN1YmFycmF5JiZGZSlyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHQubGVuZ3RoPT09ZT90OnQuc3ViYXJyYXkoMCxlKSk7bGV0IHI9IiI7Zm9yKGxldCBuPTA7bjxlO24rKylyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHRbbl0pO3JldHVybiByfTt2YXIgWmU9e3N0cmluZzJidWY6dD0+e2lmKCJmdW5jdGlvbiI9PXR5cGVvZiBUZXh0RW5jb2RlciYmVGV4dEVuY29kZXIucHJvdG90eXBlLmVuY29kZSlyZXR1cm4obmV3IFRleHRFbmNvZGVyKS5lbmNvZGUodCk7bGV0IGUscixuLGksYSxzPXQubGVuZ3RoLG89MDtmb3IoaT0wO2k8cztpKyspcj10LmNoYXJDb2RlQXQoaSksNTUyOTY9PSg2NDUxMiZyKSYmaSsxPHMmJihuPXQuY2hhckNvZGVBdChpKzEpLDU2MzIwPT0oNjQ1MTImbikmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKykpLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKGU9bmV3IFVpbnQ4QXJyYXkobyksYT0wLGk9MDthPG87aSsrKXI9dC5jaGFyQ29kZUF0KGkpLDU1Mjk2PT0oNjQ1MTImcikmJmkrMTxzJiYobj10LmNoYXJDb2RlQXQoaSsxKSw1NjMyMD09KDY0NTEyJm4pJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspKSxyPDEyOD9lW2ErK109cjpyPDIwNDg/KGVbYSsrXT0xOTJ8cj4+PjYsZVthKytdPTEyOHw2MyZyKTpyPDY1NTM2PyhlW2ErK109MjI0fHI+Pj4xMixlW2ErK109MTI4fHI+Pj42JjYzLGVbYSsrXT0xMjh8NjMmcik6KGVbYSsrXT0yNDB8cj4+PjE4LGVbYSsrXT0xMjh8cj4+PjEyJjYzLGVbYSsrXT0xMjh8cj4+PjYmNjMsZVthKytdPTEyOHw2MyZyKTtyZXR1cm4gZX0sYnVmMnN0cmluZzoodCxlKT0+e2NvbnN0IHI9ZXx8dC5sZW5ndGg7aWYoImZ1bmN0aW9uIj09dHlwZW9mIFRleHREZWNvZGVyJiZUZXh0RGVjb2Rlci5wcm90b3R5cGUuZGVjb2RlKXJldHVybihuZXcgVGV4dERlY29kZXIpLmRlY29kZSh0LnN1YmFycmF5KDAsZSkpO2xldCBuLGk7Y29uc3QgYT1uZXcgQXJyYXkoMipyKTtmb3IoaT0wLG49MDtuPHI7KXtsZXQgZT10W24rK107aWYoZTwxMjgpe2FbaSsrXT1lO2NvbnRpbnVlfWxldCBzPVRlW2VdO2lmKHM+NClhW2krK109NjU1MzMsbis9cy0xO2Vsc2V7Zm9yKGUmPTI9PT1zPzMxOjM9PT1zPzE1Ojc7cz4xJiZuPHI7KWU9ZTw8Nnw2MyZ0W24rK10scy0tO3M+MT9hW2krK109NjU1MzM6ZTw2NTUzNj9hW2krK109ZTooZS09NjU1MzYsYVtpKytdPTU1Mjk2fGU+PjEwJjEwMjMsYVtpKytdPTU2MzIwfDEwMjMmZSl9fXJldHVybiBIZShhLGkpfSx1dGY4Ym9yZGVyOih0LGUpPT57KGU9ZXx8dC5sZW5ndGgpPnQubGVuZ3RoJiYoZT10Lmxlbmd0aCk7bGV0IHI9ZS0xO2Zvcig7cj49MCYmMTI4PT0oMTkyJnRbcl0pOylyLS07cmV0dXJuIHI8MHx8MD09PXI/ZTpyK1RlW3Rbcl1dPmU/cjplfX07ZnVuY3Rpb24gTWUoKXt0aGlzLmlucHV0PW51bGwsdGhpcy5uZXh0X2luPTAsdGhpcy5hdmFpbF9pbj0wLHRoaXMudG90YWxfaW49MCx0aGlzLm91dHB1dD1udWxsLHRoaXMubmV4dF9vdXQ9MCx0aGlzLmF2YWlsX291dD0wLHRoaXMudG90YWxfb3V0PTAsdGhpcy5tc2c9IiIsdGhpcy5zdGF0ZT1udWxsLHRoaXMuZGF0YV90eXBlPTIsdGhpcy5hZGxlcj0wfXZhciBOZT1NZTtjb25zdCBJZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLHtaX05PX0ZMVVNIOlBlLFpfU1lOQ19GTFVTSDokZSxaX0ZVTExfRkxVU0g6amUsWl9GSU5JU0g6S2UsWl9PSzpYZSxaX1NUUkVBTV9FTkQ6cWUsWl9ERUZBVUxUX0NPTVBSRVNTSU9OOkdlLFpfREVGQVVMVF9TVFJBVEVHWTpXZSxaX0RFRkxBVEVEOlllfT1wdDtmdW5jdGlvbiBWZSh0KXt0aGlzLm9wdGlvbnM9T2UuYXNzaWduKHtsZXZlbDpHZSxtZXRob2Q6WWUsY2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MTUsbWVtTGV2ZWw6OCxzdHJhdGVneTpXZX0sdHx8e30pO2xldCBlPXRoaXMub3B0aW9ucztlLnJhdyYmZS53aW5kb3dCaXRzPjA/ZS53aW5kb3dCaXRzPS1lLndpbmRvd0JpdHM6ZS5nemlwJiZlLndpbmRvd0JpdHM+MCYmZS53aW5kb3dCaXRzPDE2JiYoZS53aW5kb3dCaXRzKz0xNiksdGhpcy5lcnI9MCx0aGlzLm1zZz0iIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgTmUsdGhpcy5zdHJtLmF2YWlsX291dD0wO2xldCByPUxlLmRlZmxhdGVJbml0Mih0aGlzLnN0cm0sZS5sZXZlbCxlLm1ldGhvZCxlLndpbmRvd0JpdHMsZS5tZW1MZXZlbCxlLnN0cmF0ZWd5KTtpZihyIT09WGUpdGhyb3cgbmV3IEVycm9yKGZ0W3JdKTtpZihlLmhlYWRlciYmTGUuZGVmbGF0ZVNldEhlYWRlcih0aGlzLnN0cm0sZS5oZWFkZXIpLGUuZGljdGlvbmFyeSl7bGV0IHQ7aWYodD0ic3RyaW5nIj09dHlwZW9mIGUuZGljdGlvbmFyeT9aZS5zdHJpbmcyYnVmKGUuZGljdGlvbmFyeSk6IltvYmplY3QgQXJyYXlCdWZmZXJdIj09PUllLmNhbGwoZS5kaWN0aW9uYXJ5KT9uZXcgVWludDhBcnJheShlLmRpY3Rpb25hcnkpOmUuZGljdGlvbmFyeSxyPUxlLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSx0KSxyIT09WGUpdGhyb3cgbmV3IEVycm9yKGZ0W3JdKTt0aGlzLl9kaWN0X3NldD0hMH19ZnVuY3Rpb24gUWUodCxlKXtjb25zdCByPW5ldyBWZShlKTtpZihyLnB1c2godCwhMCksci5lcnIpdGhyb3cgci5tc2d8fGZ0W3IuZXJyXTtyZXR1cm4gci5yZXN1bHR9ZnVuY3Rpb24gSmUodCxlKXtyZXR1cm4oZT1lfHx7fSkucmF3PSEwLFFlKHQsZSl9ZnVuY3Rpb24gdHIodCxlKXtyZXR1cm4oZT1lfHx7fSkuZ3ppcD0hMCxRZSh0LGUpfVZlLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQsZSl7Y29uc3Qgcj10aGlzLnN0cm0sbj10aGlzLm9wdGlvbnMuY2h1bmtTaXplO2xldCBpLGE7aWYodGhpcy5lbmRlZClyZXR1cm4hMTtmb3IoYT1lPT09fn5lP2U6ITA9PT1lP0tlOlBlLCJzdHJpbmciPT10eXBlb2YgdD9yLmlucHV0PVplLnN0cmluZzJidWYodCk6IltvYmplY3QgQXJyYXlCdWZmZXJdIj09PUllLmNhbGwodCk/ci5pbnB1dD1uZXcgVWludDhBcnJheSh0KTpyLmlucHV0PXQsci5uZXh0X2luPTAsci5hdmFpbF9pbj1yLmlucHV0Lmxlbmd0aDs7KWlmKDA9PT1yLmF2YWlsX291dCYmKHIub3V0cHV0PW5ldyBVaW50OEFycmF5KG4pLHIubmV4dF9vdXQ9MCxyLmF2YWlsX291dD1uKSwoYT09PSRlfHxhPT09amUpJiZyLmF2YWlsX291dDw9Nil0aGlzLm9uRGF0YShyLm91dHB1dC5zdWJhcnJheSgwLHIubmV4dF9vdXQpKSxyLmF2YWlsX291dD0wO2Vsc2V7aWYoaT1MZS5kZWZsYXRlKHIsYSksaT09PXFlKXJldHVybiByLm5leHRfb3V0PjAmJnRoaXMub25EYXRhKHIub3V0cHV0LnN1YmFycmF5KDAsci5uZXh0X291dCkpLGk9TGUuZGVmbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQoaSksdGhpcy5lbmRlZD0hMCxpPT09WGU7aWYoMCE9PXIuYXZhaWxfb3V0KXtpZihhPjAmJnIubmV4dF9vdXQ+MCl0aGlzLm9uRGF0YShyLm91dHB1dC5zdWJhcnJheSgwLHIubmV4dF9vdXQpKSxyLmF2YWlsX291dD0wO2Vsc2UgaWYoMD09PXIuYXZhaWxfaW4pYnJlYWt9ZWxzZSB0aGlzLm9uRGF0YShyLm91dHB1dCl9cmV0dXJuITB9LFZlLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24odCl7dGhpcy5jaHVua3MucHVzaCh0KX0sVmUucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKHQpe3Q9PT1YZSYmKHRoaXMucmVzdWx0PU9lLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpKSx0aGlzLmNodW5rcz1bXSx0aGlzLmVycj10LHRoaXMubXNnPXRoaXMuc3RybS5tc2d9O3ZhciBlcj1WZSxycj1RZSxucj1KZSxpcj10cixhcj1wdCxzcj17RGVmbGF0ZTplcixkZWZsYXRlOnJyLGRlZmxhdGVSYXc6bnIsZ3ppcDppcixjb25zdGFudHM6YXJ9O3QuRGVmbGF0ZT1lcix0LmNvbnN0YW50cz1hcix0LmRlZmF1bHQ9c3IsdC5kZWZsYXRlPXJyLHQuZGVmbGF0ZVJhdz1ucix0Lmd6aXA9aXIsT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pfSkoZS5leHBvcnRzKTt2YXIgcixuPXtleHBvcnRzOnt9fSxpPXtleHBvcnRzOnt9fTtpLmV4cG9ydHM9KHI9cnx8ZnVuY3Rpb24oZSxyKXt2YXIgbjtpZigidW5kZWZpbmVkIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmNyeXB0byYmKG49d2luZG93LmNyeXB0byksInVuZGVmaW5lZCIhPXR5cGVvZiBzZWxmJiZzZWxmLmNyeXB0byYmKG49c2VsZi5jcnlwdG8pLCJ1bmRlZmluZWQiIT10eXBlb2YgZ2xvYmFsVGhpcyYmZ2xvYmFsVGhpcy5jcnlwdG8mJihuPWdsb2JhbFRoaXMuY3J5cHRvKSwhbiYmInVuZGVmaW5lZCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5tc0NyeXB0byYmKG49d2luZG93Lm1zQ3J5cHRvKSwhbiYmdm9pZCAwIT09dCYmdC5jcnlwdG8mJihuPXQuY3J5cHRvKSwhbil0cnl7bj11bmRlZmluZWR9Y2F0Y2godCl7fXZhciBpPWZ1bmN0aW9uKCl7aWYobil7aWYoImZ1bmN0aW9uIj09dHlwZW9mIG4uZ2V0UmFuZG9tVmFsdWVzKXRyeXtyZXR1cm4gbi5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXX1jYXRjaCh0KXt9aWYoImZ1bmN0aW9uIj09dHlwZW9mIG4ucmFuZG9tQnl0ZXMpdHJ5e3JldHVybiBuLnJhbmRvbUJ5dGVzKDQpLnJlYWRJbnQzMkxFKCl9Y2F0Y2godCl7fX10aHJvdyBuZXcgRXJyb3IoIk5hdGl2ZSBjcnlwdG8gbW9kdWxlIGNvdWxkIG5vdCBiZSB1c2VkIHRvIGdldCBzZWN1cmUgcmFuZG9tIG51bWJlci4iKX0sYT1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByO3JldHVybiB0LnByb3RvdHlwZT1lLHI9bmV3IHQsdC5wcm90b3R5cGU9bnVsbCxyfX0oKSxzPXt9LG89cy5saWI9e30saD1vLkJhc2U9e2V4dGVuZDpmdW5jdGlvbih0KXt2YXIgZT1hKHRoaXMpO3JldHVybiB0JiZlLm1peEluKHQpLGUuaGFzT3duUHJvcGVydHkoImluaXQiKSYmdGhpcy5pbml0IT09ZS5pbml0fHwoZS5pbml0PWZ1bmN0aW9uKCl7ZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSxlLmluaXQucHJvdG90eXBlPWUsZS4kc3VwZXI9dGhpcyxlfSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmV4dGVuZCgpO3JldHVybiB0LmluaXQuYXBwbHkodCxhcmd1bWVudHMpLHR9LGluaXQ6ZnVuY3Rpb24oKXt9LG1peEluOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSBpbiB0KXQuaGFzT3duUHJvcGVydHkoZSkmJih0aGlzW2VdPXRbZV0pO3QuaGFzT3duUHJvcGVydHkoInRvU3RyaW5nIikmJih0aGlzLnRvU3RyaW5nPXQudG9TdHJpbmcpfSxjbG9uZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluaXQucHJvdG90eXBlLmV4dGVuZCh0aGlzKX19LGw9by5Xb3JkQXJyYXk9aC5leHRlbmQoe2luaXQ6ZnVuY3Rpb24odCxlKXt0PXRoaXMud29yZHM9dHx8W10sdGhpcy5zaWdCeXRlcz1lIT1yP2U6NCp0Lmxlbmd0aH0sdG9TdHJpbmc6ZnVuY3Rpb24odCl7cmV0dXJuKHR8fHUpLnN0cmluZ2lmeSh0aGlzKX0sY29uY2F0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMud29yZHMscj10LndvcmRzLG49dGhpcy5zaWdCeXRlcyxpPXQuc2lnQnl0ZXM7aWYodGhpcy5jbGFtcCgpLG4lNClmb3IodmFyIGE9MDthPGk7YSsrKXt2YXIgcz1yW2E+Pj4yXT4+PjI0LWElNCo4JjI1NTtlW24rYT4+PjJdfD1zPDwyNC0obithKSU0Kjh9ZWxzZSBmb3IodmFyIG89MDtvPGk7bys9NCllW24rbz4+PjJdPXJbbz4+PjJdO3JldHVybiB0aGlzLnNpZ0J5dGVzKz1pLHRoaXN9LGNsYW1wOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy53b3JkcyxyPXRoaXMuc2lnQnl0ZXM7dFtyPj4+Ml0mPTQyOTQ5NjcyOTU8PDMyLXIlNCo4LHQubGVuZ3RoPWUuY2VpbChyLzQpfSxjbG9uZTpmdW5jdGlvbigpe3ZhciB0PWguY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gdC53b3Jkcz10aGlzLndvcmRzLnNsaWNlKDApLHR9LHJhbmRvbTpmdW5jdGlvbih0KXtmb3IodmFyIGU9W10scj0wO3I8dDtyKz00KWUucHVzaChpKCkpO3JldHVybiBuZXcgbC5pbml0KGUsdCl9fSksYz1zLmVuYz17fSx1PWMuSGV4PXtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQud29yZHMscj10LnNpZ0J5dGVzLG49W10saT0wO2k8cjtpKyspe3ZhciBhPWVbaT4+PjJdPj4+MjQtaSU0KjgmMjU1O24ucHVzaCgoYT4+PjQpLnRvU3RyaW5nKDE2KSksbi5wdXNoKCgxNSZhKS50b1N0cmluZygxNikpfXJldHVybiBuLmpvaW4oIiIpfSxwYXJzZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9dC5sZW5ndGgscj1bXSxuPTA7bjxlO24rPTIpcltuPj4+M118PXBhcnNlSW50KHQuc3Vic3RyKG4sMiksMTYpPDwyNC1uJTgqNDtyZXR1cm4gbmV3IGwuaW5pdChyLGUvMil9fSxkPWMuTGF0aW4xPXtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQud29yZHMscj10LnNpZ0J5dGVzLG49W10saT0wO2k8cjtpKyspe3ZhciBhPWVbaT4+PjJdPj4+MjQtaSU0KjgmMjU1O24ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKX1yZXR1cm4gbi5qb2luKCIiKX0scGFyc2U6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQubGVuZ3RoLHI9W10sbj0wO248ZTtuKyspcltuPj4+Ml18PSgyNTUmdC5jaGFyQ29kZUF0KG4pKTw8MjQtbiU0Kjg7cmV0dXJuIG5ldyBsLmluaXQocixlKX19LF89Yy5VdGY4PXtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGQuc3RyaW5naWZ5KHQpKSl9Y2F0Y2godCl7dGhyb3cgbmV3IEVycm9yKCJNYWxmb3JtZWQgVVRGLTggZGF0YSIpfX0scGFyc2U6ZnVuY3Rpb24odCl7cmV0dXJuIGQucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHQpKSl9fSxmPW8uQnVmZmVyZWRCbG9ja0FsZ29yaXRobT1oLmV4dGVuZCh7cmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9kYXRhPW5ldyBsLmluaXQsdGhpcy5fbkRhdGFCeXRlcz0wfSxfYXBwZW5kOmZ1bmN0aW9uKHQpeyJzdHJpbmciPT10eXBlb2YgdCYmKHQ9Xy5wYXJzZSh0KSksdGhpcy5fZGF0YS5jb25jYXQodCksdGhpcy5fbkRhdGFCeXRlcys9dC5zaWdCeXRlc30sX3Byb2Nlc3M6ZnVuY3Rpb24odCl7dmFyIHIsbj10aGlzLl9kYXRhLGk9bi53b3JkcyxhPW4uc2lnQnl0ZXMscz10aGlzLmJsb2NrU2l6ZSxvPWEvKDQqcyksaD0obz10P2UuY2VpbChvKTplLm1heCgoMHxvKS10aGlzLl9taW5CdWZmZXJTaXplLDApKSpzLGM9ZS5taW4oNCpoLGEpO2lmKGgpe2Zvcih2YXIgdT0wO3U8aDt1Kz1zKXRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGksdSk7cj1pLnNwbGljZSgwLGgpLG4uc2lnQnl0ZXMtPWN9cmV0dXJuIG5ldyBsLmluaXQocixjKX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgdD1oLmNsb25lLmNhbGwodGhpcyk7cmV0dXJuIHQuX2RhdGE9dGhpcy5fZGF0YS5jbG9uZSgpLHR9LF9taW5CdWZmZXJTaXplOjB9KTtvLkhhc2hlcj1mLmV4dGVuZCh7Y2ZnOmguZXh0ZW5kKCksaW5pdDpmdW5jdGlvbih0KXt0aGlzLmNmZz10aGlzLmNmZy5leHRlbmQodCksdGhpcy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe2YucmVzZXQuY2FsbCh0aGlzKSx0aGlzLl9kb1Jlc2V0KCl9LHVwZGF0ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fYXBwZW5kKHQpLHRoaXMuX3Byb2Nlc3MoKSx0aGlzfSxmaW5hbGl6ZTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmdGhpcy5fYXBwZW5kKHQpLHRoaXMuX2RvRmluYWxpemUoKX0sYmxvY2tTaXplOjE2LF9jcmVhdGVIZWxwZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIG5ldyB0LmluaXQocikuZmluYWxpemUoZSl9fSxfY3JlYXRlSG1hY0hlbHBlcjpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gbmV3IHAuSE1BQy5pbml0KHQscikuZmluYWxpemUoZSl9fX0pO3ZhciBwPXMuYWxnbz17fTtyZXR1cm4gc30oTWF0aCksciksZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dCxyPWUubGliLldvcmRBcnJheTtmdW5jdGlvbiBuKHQsZSxuKXtmb3IodmFyIGk9W10sYT0wLHM9MDtzPGU7cysrKWlmKHMlNCl7dmFyIG89blt0LmNoYXJDb2RlQXQocy0xKV08PHMlNCoyfG5bdC5jaGFyQ29kZUF0KHMpXT4+PjYtcyU0KjI7aVthPj4+Ml18PW88PDI0LWElNCo4LGErK31yZXR1cm4gci5jcmVhdGUoaSxhKX1lLmVuYy5CYXNlNjQ9e3N0cmluZ2lmeTpmdW5jdGlvbih0KXt2YXIgZT10LndvcmRzLHI9dC5zaWdCeXRlcyxuPXRoaXMuX21hcDt0LmNsYW1wKCk7Zm9yKHZhciBpPVtdLGE9MDthPHI7YSs9Mylmb3IodmFyIHM9KGVbYT4+PjJdPj4+MjQtYSU0KjgmMjU1KTw8MTZ8KGVbYSsxPj4+Ml0+Pj4yNC0oYSsxKSU0KjgmMjU1KTw8OHxlW2ErMj4+PjJdPj4+MjQtKGErMiklNCo4JjI1NSxvPTA7bzw0JiZhKy43NSpvPHI7bysrKWkucHVzaChuLmNoYXJBdChzPj4+NiooMy1vKSY2MykpO3ZhciBoPW4uY2hhckF0KDY0KTtpZihoKWZvcig7aS5sZW5ndGglNDspaS5wdXNoKGgpO3JldHVybiBpLmpvaW4oIiIpfSxwYXJzZTpmdW5jdGlvbih0KXt2YXIgZT10Lmxlbmd0aCxyPXRoaXMuX21hcCxpPXRoaXMuX3JldmVyc2VNYXA7aWYoIWkpe2k9dGhpcy5fcmV2ZXJzZU1hcD1bXTtmb3IodmFyIGE9MDthPHIubGVuZ3RoO2ErKylpW3IuY2hhckNvZGVBdChhKV09YX12YXIgcz1yLmNoYXJBdCg2NCk7aWYocyl7dmFyIG89dC5pbmRleE9mKHMpOy0xIT09byYmKGU9byl9cmV0dXJuIG4odCxlLGkpfSxfbWFwOiJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSJ9fSgpLHQuZW5jLkJhc2U2NH0oaS5leHBvcnRzKX0obik7dmFyIGE9bi5leHBvcnRzLHM9e2V4cG9ydHM6e319LG89e2V4cG9ydHM6e319OyFmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9dCxuPXIubGliLGk9bi5Xb3JkQXJyYXksYT1uLkhhc2hlcixzPXIuYWxnbyxvPVtdOyFmdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8NjQ7dCsrKW9bdF09NDI5NDk2NzI5NiplLmFicyhlLnNpbih0KzEpKXwwfSgpO3ZhciBoPXMuTUQ1PWEuZXh0ZW5kKHtfZG9SZXNldDpmdW5jdGlvbigpe3RoaXMuX2hhc2g9bmV3IGkuaW5pdChbMTczMjU4NDE5Myw0MDIzMjMzNDE3LDI1NjIzODMxMDIsMjcxNzMzODc4XSl9LF9kb1Byb2Nlc3NCbG9jazpmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0wO3I8MTY7cisrKXt2YXIgbj1lK3IsaT10W25dO3Rbbl09MTY3MTE5MzUmKGk8PDh8aT4+PjI0KXw0Mjc4MjU1MzYwJihpPDwyNHxpPj4+OCl9dmFyIGE9dGhpcy5faGFzaC53b3JkcyxzPXRbZSswXSxoPXRbZSsxXSxfPXRbZSsyXSxmPXRbZSszXSxwPXRbZSs0XSxnPXRbZSs1XSx5PXRbZSs2XSx2PXRbZSs3XSx3PXRbZSs4XSxtPXRbZSs5XSxiPXRbZSsxMF0seD10W2UrMTFdLGs9dFtlKzEyXSx6PXRbZSsxM10sQT10W2UrMTRdLEU9dFtlKzE1XSxTPWFbMF0sQj1hWzFdLFI9YVsyXSxEPWFbM107Uz1sKFMsQixSLEQscyw3LG9bMF0pLEQ9bChELFMsQixSLGgsMTIsb1sxXSksUj1sKFIsRCxTLEIsXywxNyxvWzJdKSxCPWwoQixSLEQsUyxmLDIyLG9bM10pLFM9bChTLEIsUixELHAsNyxvWzRdKSxEPWwoRCxTLEIsUixnLDEyLG9bNV0pLFI9bChSLEQsUyxCLHksMTcsb1s2XSksQj1sKEIsUixELFMsdiwyMixvWzddKSxTPWwoUyxCLFIsRCx3LDcsb1s4XSksRD1sKEQsUyxCLFIsbSwxMixvWzldKSxSPWwoUixELFMsQixiLDE3LG9bMTBdKSxCPWwoQixSLEQsUyx4LDIyLG9bMTFdKSxTPWwoUyxCLFIsRCxrLDcsb1sxMl0pLEQ9bChELFMsQixSLHosMTIsb1sxM10pLFI9bChSLEQsUyxCLEEsMTcsb1sxNF0pLFM9YyhTLEI9bChCLFIsRCxTLEUsMjIsb1sxNV0pLFIsRCxoLDUsb1sxNl0pLEQ9YyhELFMsQixSLHksOSxvWzE3XSksUj1jKFIsRCxTLEIseCwxNCxvWzE4XSksQj1jKEIsUixELFMscywyMCxvWzE5XSksUz1jKFMsQixSLEQsZyw1LG9bMjBdKSxEPWMoRCxTLEIsUixiLDksb1syMV0pLFI9YyhSLEQsUyxCLEUsMTQsb1syMl0pLEI9YyhCLFIsRCxTLHAsMjAsb1syM10pLFM9YyhTLEIsUixELG0sNSxvWzI0XSksRD1jKEQsUyxCLFIsQSw5LG9bMjVdKSxSPWMoUixELFMsQixmLDE0LG9bMjZdKSxCPWMoQixSLEQsUyx3LDIwLG9bMjddKSxTPWMoUyxCLFIsRCx6LDUsb1syOF0pLEQ9YyhELFMsQixSLF8sOSxvWzI5XSksUj1jKFIsRCxTLEIsdiwxNCxvWzMwXSksUz11KFMsQj1jKEIsUixELFMsaywyMCxvWzMxXSksUixELGcsNCxvWzMyXSksRD11KEQsUyxCLFIsdywxMSxvWzMzXSksUj11KFIsRCxTLEIseCwxNixvWzM0XSksQj11KEIsUixELFMsQSwyMyxvWzM1XSksUz11KFMsQixSLEQsaCw0LG9bMzZdKSxEPXUoRCxTLEIsUixwLDExLG9bMzddKSxSPXUoUixELFMsQix2LDE2LG9bMzhdKSxCPXUoQixSLEQsUyxiLDIzLG9bMzldKSxTPXUoUyxCLFIsRCx6LDQsb1s0MF0pLEQ9dShELFMsQixSLHMsMTEsb1s0MV0pLFI9dShSLEQsUyxCLGYsMTYsb1s0Ml0pLEI9dShCLFIsRCxTLHksMjMsb1s0M10pLFM9dShTLEIsUixELG0sNCxvWzQ0XSksRD11KEQsUyxCLFIsaywxMSxvWzQ1XSksUj11KFIsRCxTLEIsRSwxNixvWzQ2XSksUz1kKFMsQj11KEIsUixELFMsXywyMyxvWzQ3XSksUixELHMsNixvWzQ4XSksRD1kKEQsUyxCLFIsdiwxMCxvWzQ5XSksUj1kKFIsRCxTLEIsQSwxNSxvWzUwXSksQj1kKEIsUixELFMsZywyMSxvWzUxXSksUz1kKFMsQixSLEQsayw2LG9bNTJdKSxEPWQoRCxTLEIsUixmLDEwLG9bNTNdKSxSPWQoUixELFMsQixiLDE1LG9bNTRdKSxCPWQoQixSLEQsUyxoLDIxLG9bNTVdKSxTPWQoUyxCLFIsRCx3LDYsb1s1Nl0pLEQ9ZChELFMsQixSLEUsMTAsb1s1N10pLFI9ZChSLEQsUyxCLHksMTUsb1s1OF0pLEI9ZChCLFIsRCxTLHosMjEsb1s1OV0pLFM9ZChTLEIsUixELHAsNixvWzYwXSksRD1kKEQsUyxCLFIseCwxMCxvWzYxXSksUj1kKFIsRCxTLEIsXywxNSxvWzYyXSksQj1kKEIsUixELFMsbSwyMSxvWzYzXSksYVswXT1hWzBdK1N8MCxhWzFdPWFbMV0rQnwwLGFbMl09YVsyXStSfDAsYVszXT1hWzNdK0R8MH0sX2RvRmluYWxpemU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9kYXRhLHI9dC53b3JkcyxuPTgqdGhpcy5fbkRhdGFCeXRlcyxpPTgqdC5zaWdCeXRlcztyW2k+Pj41XXw9MTI4PDwyNC1pJTMyO3ZhciBhPWUuZmxvb3Iobi80Mjk0OTY3Mjk2KSxzPW47clsxNSsoaSs2ND4+Pjk8PDQpXT0xNjcxMTkzNSYoYTw8OHxhPj4+MjQpfDQyNzgyNTUzNjAmKGE8PDI0fGE+Pj44KSxyWzE0KyhpKzY0Pj4+OTw8NCldPTE2NzExOTM1JihzPDw4fHM+Pj4yNCl8NDI3ODI1NTM2MCYoczw8MjR8cz4+PjgpLHQuc2lnQnl0ZXM9NCooci5sZW5ndGgrMSksdGhpcy5fcHJvY2VzcygpO2Zvcih2YXIgbz10aGlzLl9oYXNoLGg9by53b3JkcyxsPTA7bDw0O2wrKyl7dmFyIGM9aFtsXTtoW2xdPTE2NzExOTM1JihjPDw4fGM+Pj4yNCl8NDI3ODI1NTM2MCYoYzw8MjR8Yz4+PjgpfXJldHVybiBvfSxjbG9uZTpmdW5jdGlvbigpe3ZhciB0PWEuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gdC5faGFzaD10aGlzLl9oYXNoLmNsb25lKCksdH19KTtmdW5jdGlvbiBsKHQsZSxyLG4saSxhLHMpe3ZhciBvPXQrKGUmcnx+ZSZuKStpK3M7cmV0dXJuKG88PGF8bz4+PjMyLWEpK2V9ZnVuY3Rpb24gYyh0LGUscixuLGksYSxzKXt2YXIgbz10KyhlJm58ciZ+bikraStzO3JldHVybihvPDxhfG8+Pj4zMi1hKStlfWZ1bmN0aW9uIHUodCxlLHIsbixpLGEscyl7dmFyIG89dCsoZV5yXm4pK2krcztyZXR1cm4obzw8YXxvPj4+MzItYSkrZX1mdW5jdGlvbiBkKHQsZSxyLG4saSxhLHMpe3ZhciBvPXQrKHJeKGV8fm4pKStpK3M7cmV0dXJuKG88PGF8bz4+PjMyLWEpK2V9ci5NRDU9YS5fY3JlYXRlSGVscGVyKGgpLHIuSG1hY01ENT1hLl9jcmVhdGVIbWFjSGVscGVyKGgpfShNYXRoKSx0Lk1ENX0oaS5leHBvcnRzKX0obyk7dmFyIGg9e2V4cG9ydHM6e319LGw9e2V4cG9ydHM6e319OyFmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10LHI9ZS5saWIsbj1yLldvcmRBcnJheSxpPXIuSGFzaGVyLGE9ZS5hbGdvLHM9W10sbz1hLlNIQTE9aS5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5faGFzaD1uZXcgbi5pbml0KFsxNzMyNTg0MTkzLDQwMjMyMzM0MTcsMjU2MjM4MzEwMiwyNzE3MzM4NzgsMzI4NTM3NzUyMF0pfSxfZG9Qcm9jZXNzQmxvY2s6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dGhpcy5faGFzaC53b3JkcyxuPXJbMF0saT1yWzFdLGE9clsyXSxvPXJbM10saD1yWzRdLGw9MDtsPDgwO2wrKyl7aWYobDwxNilzW2xdPTB8dFtlK2xdO2Vsc2V7dmFyIGM9c1tsLTNdXnNbbC04XV5zW2wtMTRdXnNbbC0xNl07c1tsXT1jPDwxfGM+Pj4zMX12YXIgdT0objw8NXxuPj4+MjcpK2grc1tsXTt1Kz1sPDIwPzE1MTg1MDAyNDkrKGkmYXx+aSZvKTpsPDQwPzE4NTk3NzUzOTMrKGleYV5vKTpsPDYwPyhpJmF8aSZvfGEmbyktMTg5NDAwNzU4ODooaV5hXm8pLTg5OTQ5NzUxNCxoPW8sbz1hLGE9aTw8MzB8aT4+PjIsaT1uLG49dX1yWzBdPXJbMF0rbnwwLHJbMV09clsxXStpfDAsclsyXT1yWzJdK2F8MCxyWzNdPXJbM10rb3wwLHJbNF09cls0XStofDB9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZGF0YSxlPXQud29yZHMscj04KnRoaXMuX25EYXRhQnl0ZXMsbj04KnQuc2lnQnl0ZXM7cmV0dXJuIGVbbj4+PjVdfD0xMjg8PDI0LW4lMzIsZVsxNCsobis2ND4+Pjk8PDQpXT1NYXRoLmZsb29yKHIvNDI5NDk2NzI5NiksZVsxNSsobis2ND4+Pjk8PDQpXT1yLHQuc2lnQnl0ZXM9NCplLmxlbmd0aCx0aGlzLl9wcm9jZXNzKCksdGhpcy5faGFzaH0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgdD1pLmNsb25lLmNhbGwodGhpcyk7cmV0dXJuIHQuX2hhc2g9dGhpcy5faGFzaC5jbG9uZSgpLHR9fSk7ZS5TSEExPWkuX2NyZWF0ZUhlbHBlcihvKSxlLkhtYWNTSEExPWkuX2NyZWF0ZUhtYWNIZWxwZXIobyl9KCksdC5TSEExfShpLmV4cG9ydHMpfShsKTt2YXIgYz17ZXhwb3J0czp7fX07IWZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlLHIsbjtyPShlPXQpLmxpYi5CYXNlLG49ZS5lbmMuVXRmOCxlLmFsZ28uSE1BQz1yLmV4dGVuZCh7aW5pdDpmdW5jdGlvbih0LGUpe3Q9dGhpcy5faGFzaGVyPW5ldyB0LmluaXQsInN0cmluZyI9PXR5cGVvZiBlJiYoZT1uLnBhcnNlKGUpKTt2YXIgcj10LmJsb2NrU2l6ZSxpPTQqcjtlLnNpZ0J5dGVzPmkmJihlPXQuZmluYWxpemUoZSkpLGUuY2xhbXAoKTtmb3IodmFyIGE9dGhpcy5fb0tleT1lLmNsb25lKCkscz10aGlzLl9pS2V5PWUuY2xvbmUoKSxvPWEud29yZHMsaD1zLndvcmRzLGw9MDtsPHI7bCsrKW9bbF1ePTE1NDk1NTY4MjgsaFtsXV49OTA5NTIyNDg2O2Euc2lnQnl0ZXM9cy5zaWdCeXRlcz1pLHRoaXMucmVzZXQoKX0scmVzZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9oYXNoZXI7dC5yZXNldCgpLHQudXBkYXRlKHRoaXMuX2lLZXkpfSx1cGRhdGU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2hhc2hlci51cGRhdGUodCksdGhpc30sZmluYWxpemU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5faGFzaGVyLHI9ZS5maW5hbGl6ZSh0KTtyZXR1cm4gZS5yZXNldCgpLGUuZmluYWxpemUodGhpcy5fb0tleS5jbG9uZSgpLmNvbmNhdChyKSl9fSl9KGkuZXhwb3J0cyl9KGMpLGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXQscj1lLmxpYixuPXIuQmFzZSxpPXIuV29yZEFycmF5LGE9ZS5hbGdvLHM9YS5NRDUsbz1hLkV2cEtERj1uLmV4dGVuZCh7Y2ZnOm4uZXh0ZW5kKHtrZXlTaXplOjQsaGFzaGVyOnMsaXRlcmF0aW9uczoxfSksaW5pdDpmdW5jdGlvbih0KXt0aGlzLmNmZz10aGlzLmNmZy5leHRlbmQodCl9LGNvbXB1dGU6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIsbj10aGlzLmNmZyxhPW4uaGFzaGVyLmNyZWF0ZSgpLHM9aS5jcmVhdGUoKSxvPXMud29yZHMsaD1uLmtleVNpemUsbD1uLml0ZXJhdGlvbnM7by5sZW5ndGg8aDspe3ImJmEudXBkYXRlKHIpLHI9YS51cGRhdGUodCkuZmluYWxpemUoZSksYS5yZXNldCgpO2Zvcih2YXIgYz0xO2M8bDtjKyspcj1hLmZpbmFsaXplKHIpLGEucmVzZXQoKTtzLmNvbmNhdChyKX1yZXR1cm4gcy5zaWdCeXRlcz00Kmgsc319KTtlLkV2cEtERj1mdW5jdGlvbih0LGUscil7cmV0dXJuIG8uY3JlYXRlKHIpLmNvbXB1dGUodCxlKX19KCksdC5FdnBLREZ9KGkuZXhwb3J0cyl9KGgpO3ZhciB1PXtleHBvcnRzOnt9fTshZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5saWIuQ2lwaGVyfHxmdW5jdGlvbihlKXt2YXIgcj10LG49ci5saWIsaT1uLkJhc2UsYT1uLldvcmRBcnJheSxzPW4uQnVmZmVyZWRCbG9ja0FsZ29yaXRobSxvPXIuZW5jO28uVXRmODt2YXIgaD1vLkJhc2U2NCxsPXIuYWxnby5FdnBLREYsYz1uLkNpcGhlcj1zLmV4dGVuZCh7Y2ZnOmkuZXh0ZW5kKCksY3JlYXRlRW5jcnlwdG9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0VOQ19YRk9STV9NT0RFLHQsZSl9LGNyZWF0ZURlY3J5cHRvcjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNyZWF0ZSh0aGlzLl9ERUNfWEZPUk1fTU9ERSx0LGUpfSxpbml0OmZ1bmN0aW9uKHQsZSxyKXt0aGlzLmNmZz10aGlzLmNmZy5leHRlbmQociksdGhpcy5feGZvcm1Nb2RlPXQsdGhpcy5fa2V5PWUsdGhpcy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe3MucmVzZXQuY2FsbCh0aGlzKSx0aGlzLl9kb1Jlc2V0KCl9LHByb2Nlc3M6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2FwcGVuZCh0KSx0aGlzLl9wcm9jZXNzKCl9LGZpbmFsaXplOmZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0aGlzLl9hcHBlbmQodCksdGhpcy5fZG9GaW5hbGl6ZSgpfSxrZXlTaXplOjQsaXZTaXplOjQsX0VOQ19YRk9STV9NT0RFOjEsX0RFQ19YRk9STV9NT0RFOjIsX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuInN0cmluZyI9PXR5cGVvZiB0P3c6eX1yZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJue2VuY3J5cHQ6ZnVuY3Rpb24ocixuLGkpe3JldHVybiB0KG4pLmVuY3J5cHQoZSxyLG4saSl9LGRlY3J5cHQ6ZnVuY3Rpb24ocixuLGkpe3JldHVybiB0KG4pLmRlY3J5cHQoZSxyLG4saSl9fX19KCl9KTtuLlN0cmVhbUNpcGhlcj1jLmV4dGVuZCh7X2RvRmluYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcHJvY2VzcyghMCl9LGJsb2NrU2l6ZToxfSk7dmFyIHU9ci5tb2RlPXt9LGQ9bi5CbG9ja0NpcGhlck1vZGU9aS5leHRlbmQoe2NyZWF0ZUVuY3J5cHRvcjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLkVuY3J5cHRvci5jcmVhdGUodCxlKX0sY3JlYXRlRGVjcnlwdG9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuRGVjcnlwdG9yLmNyZWF0ZSh0LGUpfSxpbml0OmZ1bmN0aW9uKHQsZSl7dGhpcy5fY2lwaGVyPXQsdGhpcy5faXY9ZX19KSxfPXUuQ0JDPWZ1bmN0aW9uKCl7dmFyIHQ9ZC5leHRlbmQoKTtmdW5jdGlvbiByKHQscixuKXt2YXIgaSxhPXRoaXMuX2l2O2E/KGk9YSx0aGlzLl9pdj1lKTppPXRoaXMuX3ByZXZCbG9jaztmb3IodmFyIHM9MDtzPG47cysrKXRbcitzXV49aVtzXX1yZXR1cm4gdC5FbmNyeXB0b3I9dC5leHRlbmQoe3Byb2Nlc3NCbG9jazpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX2NpcGhlcixpPW4uYmxvY2tTaXplO3IuY2FsbCh0aGlzLHQsZSxpKSxuLmVuY3J5cHRCbG9jayh0LGUpLHRoaXMuX3ByZXZCbG9jaz10LnNsaWNlKGUsZStpKX19KSx0LkRlY3J5cHRvcj10LmV4dGVuZCh7cHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5fY2lwaGVyLGk9bi5ibG9ja1NpemUsYT10LnNsaWNlKGUsZStpKTtuLmRlY3J5cHRCbG9jayh0LGUpLHIuY2FsbCh0aGlzLHQsZSxpKSx0aGlzLl9wcmV2QmxvY2s9YX19KSx0fSgpLGY9KHIucGFkPXt9KS5Qa2NzNz17cGFkOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPTQqZSxuPXItdC5zaWdCeXRlcyVyLGk9bjw8MjR8bjw8MTZ8bjw8OHxuLHM9W10sbz0wO288bjtvKz00KXMucHVzaChpKTt2YXIgaD1hLmNyZWF0ZShzLG4pO3QuY29uY2F0KGgpfSx1bnBhZDpmdW5jdGlvbih0KXt2YXIgZT0yNTUmdC53b3Jkc1t0LnNpZ0J5dGVzLTE+Pj4yXTt0LnNpZ0J5dGVzLT1lfX07bi5CbG9ja0NpcGhlcj1jLmV4dGVuZCh7Y2ZnOmMuY2ZnLmV4dGVuZCh7bW9kZTpfLHBhZGRpbmc6Zn0pLHJlc2V0OmZ1bmN0aW9uKCl7dmFyIHQ7Yy5yZXNldC5jYWxsKHRoaXMpO3ZhciBlPXRoaXMuY2ZnLHI9ZS5pdixuPWUubW9kZTt0aGlzLl94Zm9ybU1vZGU9PXRoaXMuX0VOQ19YRk9STV9NT0RFP3Q9bi5jcmVhdGVFbmNyeXB0b3I6KHQ9bi5jcmVhdGVEZWNyeXB0b3IsdGhpcy5fbWluQnVmZmVyU2l6ZT0xKSx0aGlzLl9tb2RlJiZ0aGlzLl9tb2RlLl9fY3JlYXRvcj09dD90aGlzLl9tb2RlLmluaXQodGhpcyxyJiZyLndvcmRzKToodGhpcy5fbW9kZT10LmNhbGwobix0aGlzLHImJnIud29yZHMpLHRoaXMuX21vZGUuX19jcmVhdG9yPXQpfSxfZG9Qcm9jZXNzQmxvY2s6ZnVuY3Rpb24odCxlKXt0aGlzLl9tb2RlLnByb2Nlc3NCbG9jayh0LGUpfSxfZG9GaW5hbGl6ZTpmdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5jZmcucGFkZGluZztyZXR1cm4gdGhpcy5feGZvcm1Nb2RlPT10aGlzLl9FTkNfWEZPUk1fTU9ERT8oZS5wYWQodGhpcy5fZGF0YSx0aGlzLmJsb2NrU2l6ZSksdD10aGlzLl9wcm9jZXNzKCEwKSk6KHQ9dGhpcy5fcHJvY2VzcyghMCksZS51bnBhZCh0KSksdH0sYmxvY2tTaXplOjR9KTt2YXIgcD1uLkNpcGhlclBhcmFtcz1pLmV4dGVuZCh7aW5pdDpmdW5jdGlvbih0KXt0aGlzLm1peEluKHQpfSx0b1N0cmluZzpmdW5jdGlvbih0KXtyZXR1cm4odHx8dGhpcy5mb3JtYXR0ZXIpLnN0cmluZ2lmeSh0aGlzKX19KSxnPShyLmZvcm1hdD17fSkuT3BlblNTTD17c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe3ZhciBlPXQuY2lwaGVydGV4dCxyPXQuc2FsdDtyZXR1cm4ocj9hLmNyZWF0ZShbMTM5ODg5MzY4NCwxNzAxMDc2ODMxXSkuY29uY2F0KHIpLmNvbmNhdChlKTplKS50b1N0cmluZyhoKX0scGFyc2U6ZnVuY3Rpb24odCl7dmFyIGUscj1oLnBhcnNlKHQpLG49ci53b3JkcztyZXR1cm4gMTM5ODg5MzY4ND09blswXSYmMTcwMTA3NjgzMT09blsxXSYmKGU9YS5jcmVhdGUobi5zbGljZSgyLDQpKSxuLnNwbGljZSgwLDQpLHIuc2lnQnl0ZXMtPTE2KSxwLmNyZWF0ZSh7Y2lwaGVydGV4dDpyLHNhbHQ6ZX0pfX0seT1uLlNlcmlhbGl6YWJsZUNpcGhlcj1pLmV4dGVuZCh7Y2ZnOmkuZXh0ZW5kKHtmb3JtYXQ6Z30pLGVuY3J5cHQ6ZnVuY3Rpb24odCxlLHIsbil7bj10aGlzLmNmZy5leHRlbmQobik7dmFyIGk9dC5jcmVhdGVFbmNyeXB0b3IocixuKSxhPWkuZmluYWxpemUoZSkscz1pLmNmZztyZXR1cm4gcC5jcmVhdGUoe2NpcGhlcnRleHQ6YSxrZXk6cixpdjpzLml2LGFsZ29yaXRobTp0LG1vZGU6cy5tb2RlLHBhZGRpbmc6cy5wYWRkaW5nLGJsb2NrU2l6ZTp0LmJsb2NrU2l6ZSxmb3JtYXR0ZXI6bi5mb3JtYXR9KX0sZGVjcnlwdDpmdW5jdGlvbih0LGUscixuKXtyZXR1cm4gbj10aGlzLmNmZy5leHRlbmQobiksZT10aGlzLl9wYXJzZShlLG4uZm9ybWF0KSx0LmNyZWF0ZURlY3J5cHRvcihyLG4pLmZpbmFsaXplKGUuY2lwaGVydGV4dCl9LF9wYXJzZTpmdW5jdGlvbih0LGUpe3JldHVybiJzdHJpbmciPT10eXBlb2YgdD9lLnBhcnNlKHQsdGhpcyk6dH19KSx2PShyLmtkZj17fSkuT3BlblNTTD17ZXhlY3V0ZTpmdW5jdGlvbih0LGUscixuKXtufHwobj1hLnJhbmRvbSg4KSk7dmFyIGk9bC5jcmVhdGUoe2tleVNpemU6ZStyfSkuY29tcHV0ZSh0LG4pLHM9YS5jcmVhdGUoaS53b3Jkcy5zbGljZShlKSw0KnIpO3JldHVybiBpLnNpZ0J5dGVzPTQqZSxwLmNyZWF0ZSh7a2V5OmksaXY6cyxzYWx0Om59KX19LHc9bi5QYXNzd29yZEJhc2VkQ2lwaGVyPXkuZXh0ZW5kKHtjZmc6eS5jZmcuZXh0ZW5kKHtrZGY6dn0pLGVuY3J5cHQ6ZnVuY3Rpb24odCxlLHIsbil7dmFyIGk9KG49dGhpcy5jZmcuZXh0ZW5kKG4pKS5rZGYuZXhlY3V0ZShyLHQua2V5U2l6ZSx0Lml2U2l6ZSk7bi5pdj1pLml2O3ZhciBhPXkuZW5jcnlwdC5jYWxsKHRoaXMsdCxlLGkua2V5LG4pO3JldHVybiBhLm1peEluKGkpLGF9LGRlY3J5cHQ6ZnVuY3Rpb24odCxlLHIsbil7bj10aGlzLmNmZy5leHRlbmQobiksZT10aGlzLl9wYXJzZShlLG4uZm9ybWF0KTt2YXIgaT1uLmtkZi5leGVjdXRlKHIsdC5rZXlTaXplLHQuaXZTaXplLGUuc2FsdCk7cmV0dXJuIG4uaXY9aS5pdix5LmRlY3J5cHQuY2FsbCh0aGlzLHQsZSxpLmtleSxuKX19KX0oKX0oaS5leHBvcnRzKX0odSksZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dCxyPWUubGliLkJsb2NrQ2lwaGVyLG49ZS5hbGdvLGk9W10sYT1bXSxzPVtdLG89W10saD1bXSxsPVtdLGM9W10sdT1bXSxkPVtdLF89W107IWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPDI1NjtlKyspdFtlXT1lPDEyOD9lPDwxOmU8PDFeMjgzO3ZhciByPTAsbj0wO2ZvcihlPTA7ZTwyNTY7ZSsrKXt2YXIgZj1uXm48PDFebjw8Ml5uPDwzXm48PDQ7Zj1mPj4+OF4yNTUmZl45OSxpW3JdPWYsYVtmXT1yO3ZhciBwPXRbcl0sZz10W3BdLHk9dFtnXSx2PTI1Nyp0W2ZdXjE2ODQzMDA4KmY7c1tyXT12PDwyNHx2Pj4+OCxvW3JdPXY8PDE2fHY+Pj4xNixoW3JdPXY8PDh8dj4+PjI0LGxbcl09dix2PTE2ODQzMDA5KnleNjU1MzcqZ14yNTcqcF4xNjg0MzAwOCpyLGNbZl09djw8MjR8dj4+PjgsdVtmXT12PDwxNnx2Pj4+MTYsZFtmXT12PDw4fHY+Pj4yNCxfW2ZdPXYscj8ocj1wXnRbdFt0W3lecF1dXSxuXj10W3Rbbl1dKTpyPW49MX19KCk7dmFyIGY9WzAsMSwyLDQsOCwxNiwzMiw2NCwxMjgsMjcsNTRdLHA9bi5BRVM9ci5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7aWYoIXRoaXMuX25Sb3VuZHN8fHRoaXMuX2tleVByaW9yUmVzZXQhPT10aGlzLl9rZXkpe2Zvcih2YXIgdD10aGlzLl9rZXlQcmlvclJlc2V0PXRoaXMuX2tleSxlPXQud29yZHMscj10LnNpZ0J5dGVzLzQsbj00KigodGhpcy5fblJvdW5kcz1yKzYpKzEpLGE9dGhpcy5fa2V5U2NoZWR1bGU9W10scz0wO3M8bjtzKyspczxyP2Fbc109ZVtzXToobD1hW3MtMV0scyVyP3I+NiYmcyVyPT00JiYobD1pW2w+Pj4yNF08PDI0fGlbbD4+PjE2JjI1NV08PDE2fGlbbD4+PjgmMjU1XTw8OHxpWzI1NSZsXSk6KGw9aVsobD1sPDw4fGw+Pj4yNCk+Pj4yNF08PDI0fGlbbD4+PjE2JjI1NV08PDE2fGlbbD4+PjgmMjU1XTw8OHxpWzI1NSZsXSxsXj1mW3MvcnwwXTw8MjQpLGFbc109YVtzLXJdXmwpO2Zvcih2YXIgbz10aGlzLl9pbnZLZXlTY2hlZHVsZT1bXSxoPTA7aDxuO2grKyl7aWYocz1uLWgsaCU0KXZhciBsPWFbc107ZWxzZSBsPWFbcy00XTtvW2hdPWg8NHx8czw9ND9sOmNbaVtsPj4+MjRdXV51W2lbbD4+PjE2JjI1NV1dXmRbaVtsPj4+OCYyNTVdXV5fW2lbMjU1JmxdXX19fSxlbmNyeXB0QmxvY2s6ZnVuY3Rpb24odCxlKXt0aGlzLl9kb0NyeXB0QmxvY2sodCxlLHRoaXMuX2tleVNjaGVkdWxlLHMsbyxoLGwsaSl9LGRlY3J5cHRCbG9jazpmdW5jdGlvbih0LGUpe3ZhciByPXRbZSsxXTt0W2UrMV09dFtlKzNdLHRbZSszXT1yLHRoaXMuX2RvQ3J5cHRCbG9jayh0LGUsdGhpcy5faW52S2V5U2NoZWR1bGUsYyx1LGQsXyxhKSxyPXRbZSsxXSx0W2UrMV09dFtlKzNdLHRbZSszXT1yfSxfZG9DcnlwdEJsb2NrOmZ1bmN0aW9uKHQsZSxyLG4saSxhLHMsbyl7Zm9yKHZhciBoPXRoaXMuX25Sb3VuZHMsbD10W2VdXnJbMF0sYz10W2UrMV1eclsxXSx1PXRbZSsyXV5yWzJdLGQ9dFtlKzNdXnJbM10sXz00LGY9MTtmPGg7ZisrKXt2YXIgcD1uW2w+Pj4yNF1eaVtjPj4+MTYmMjU1XV5hW3U+Pj44JjI1NV1ec1syNTUmZF1ecltfKytdLGc9bltjPj4+MjRdXmlbdT4+PjE2JjI1NV1eYVtkPj4+OCYyNTVdXnNbMjU1JmxdXnJbXysrXSx5PW5bdT4+PjI0XV5pW2Q+Pj4xNiYyNTVdXmFbbD4+PjgmMjU1XV5zWzI1NSZjXV5yW18rK10sdj1uW2Q+Pj4yNF1eaVtsPj4+MTYmMjU1XV5hW2M+Pj44JjI1NV1ec1syNTUmdV1ecltfKytdO2w9cCxjPWcsdT15LGQ9dn1wPShvW2w+Pj4yNF08PDI0fG9bYz4+PjE2JjI1NV08PDE2fG9bdT4+PjgmMjU1XTw8OHxvWzI1NSZkXSlecltfKytdLGc9KG9bYz4+PjI0XTw8MjR8b1t1Pj4+MTYmMjU1XTw8MTZ8b1tkPj4+OCYyNTVdPDw4fG9bMjU1JmxdKV5yW18rK10seT0ob1t1Pj4+MjRdPDwyNHxvW2Q+Pj4xNiYyNTVdPDwxNnxvW2w+Pj44JjI1NV08PDh8b1syNTUmY10pXnJbXysrXSx2PShvW2Q+Pj4yNF08PDI0fG9bbD4+PjE2JjI1NV08PDE2fG9bYz4+PjgmMjU1XTw8OHxvWzI1NSZ1XSlecltfKytdLHRbZV09cCx0W2UrMV09Zyx0W2UrMl09eSx0W2UrM109dn0sa2V5U2l6ZTo4fSk7ZS5BRVM9ci5fY3JlYXRlSGVscGVyKHApfSgpLHQuQUVTfShpLmV4cG9ydHMpfShzKTt2YXIgZD1zLmV4cG9ydHMsXz17ZXhwb3J0czp7fX07IWZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj10LG49ci5saWIsaT1uLldvcmRBcnJheSxhPW4uSGFzaGVyLHM9ci5hbGdvLG89W10saD1bXTshZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe2Zvcih2YXIgcj1lLnNxcnQodCksbj0yO248PXI7bisrKWlmKCEodCVuKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiByKHQpe3JldHVybiA0Mjk0OTY3Mjk2Kih0LSgwfHQpKXwwfWZvcih2YXIgbj0yLGk9MDtpPDY0Oyl0KG4pJiYoaTw4JiYob1tpXT1yKGUucG93KG4sLjUpKSksaFtpXT1yKGUucG93KG4sMS8zKSksaSsrKSxuKyt9KCk7dmFyIGw9W10sYz1zLlNIQTI1Nj1hLmV4dGVuZCh7X2RvUmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9oYXNoPW5ldyBpLmluaXQoby5zbGljZSgwKSl9LF9kb1Byb2Nlc3NCbG9jazpmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10aGlzLl9oYXNoLndvcmRzLG49clswXSxpPXJbMV0sYT1yWzJdLHM9clszXSxvPXJbNF0sYz1yWzVdLHU9cls2XSxkPXJbN10sXz0wO188NjQ7XysrKXtpZihfPDE2KWxbX109MHx0W2UrX107ZWxzZXt2YXIgZj1sW18tMTVdLHA9KGY8PDI1fGY+Pj43KV4oZjw8MTR8Zj4+PjE4KV5mPj4+MyxnPWxbXy0yXSx5PShnPDwxNXxnPj4+MTcpXihnPDwxM3xnPj4+MTkpXmc+Pj4xMDtsW19dPXArbFtfLTddK3krbFtfLTE2XX12YXIgdj1uJmlebiZhXmkmYSx3PShuPDwzMHxuPj4+MileKG48PDE5fG4+Pj4xMyleKG48PDEwfG4+Pj4yMiksbT1kKygobzw8MjZ8bz4+PjYpXihvPDwyMXxvPj4+MTEpXihvPDw3fG8+Pj4yNSkpKyhvJmNefm8mdSkraFtfXStsW19dO2Q9dSx1PWMsYz1vLG89cyttfDAscz1hLGE9aSxpPW4sbj1tKyh3K3YpfDB9clswXT1yWzBdK258MCxyWzFdPXJbMV0raXwwLHJbMl09clsyXSthfDAsclszXT1yWzNdK3N8MCxyWzRdPXJbNF0rb3wwLHJbNV09cls1XStjfDAscls2XT1yWzZdK3V8MCxyWzddPXJbN10rZHwwfSxfZG9GaW5hbGl6ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2RhdGEscj10LndvcmRzLG49OCp0aGlzLl9uRGF0YUJ5dGVzLGk9OCp0LnNpZ0J5dGVzO3JldHVybiByW2k+Pj41XXw9MTI4PDwyNC1pJTMyLHJbMTQrKGkrNjQ+Pj45PDw0KV09ZS5mbG9vcihuLzQyOTQ5NjcyOTYpLHJbMTUrKGkrNjQ+Pj45PDw0KV09bix0LnNpZ0J5dGVzPTQqci5sZW5ndGgsdGhpcy5fcHJvY2VzcygpLHRoaXMuX2hhc2h9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIHQ9YS5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiB0Ll9oYXNoPXRoaXMuX2hhc2guY2xvbmUoKSx0fX0pO3IuU0hBMjU2PWEuX2NyZWF0ZUhlbHBlcihjKSxyLkhtYWNTSEEyNTY9YS5fY3JlYXRlSG1hY0hlbHBlcihjKX0oTWF0aCksdC5TSEEyNTZ9KGkuZXhwb3J0cyl9KF8pO3ZhciBmPV8uZXhwb3J0cyxwPXtleHBvcnRzOnt9fTshZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoImZ1bmN0aW9uIj09dHlwZW9mIEFycmF5QnVmZmVyKXt2YXIgZT10LmxpYi5Xb3JkQXJyYXkscj1lLmluaXQsbj1lLmluaXQ9ZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyJiYodD1uZXcgVWludDhBcnJheSh0KSksKHQgaW5zdGFuY2VvZiBJbnQ4QXJyYXl8fCJ1bmRlZmluZWQiIT10eXBlb2YgVWludDhDbGFtcGVkQXJyYXkmJnQgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheXx8dCBpbnN0YW5jZW9mIEludDE2QXJyYXl8fHQgaW5zdGFuY2VvZiBVaW50MTZBcnJheXx8dCBpbnN0YW5jZW9mIEludDMyQXJyYXl8fHQgaW5zdGFuY2VvZiBVaW50MzJBcnJheXx8dCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheXx8dCBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheSkmJih0PW5ldyBVaW50OEFycmF5KHQuYnVmZmVyLHQuYnl0ZU9mZnNldCx0LmJ5dGVMZW5ndGgpKSx0IGluc3RhbmNlb2YgVWludDhBcnJheSl7Zm9yKHZhciBlPXQuYnl0ZUxlbmd0aCxuPVtdLGk9MDtpPGU7aSsrKW5baT4+PjJdfD10W2ldPDwyNC1pJTQqODtyLmNhbGwodGhpcyxuLGUpfWVsc2Ugci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O24ucHJvdG90eXBlPWV9fSgpLHQubGliLldvcmRBcnJheX0oaS5leHBvcnRzKX0ocCk7dmFyIGc9cC5leHBvcnRzLHk9e2V4cG9ydHM6e319OyFmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdC5IbWFjU0hBMjU2fShpLmV4cG9ydHMpfSh5KTt2YXIgdj15LmV4cG9ydHM7Y29uc3Qgdz0hMTtsZXQgbSxiO29ubWVzc2FnZT1mdW5jdGlvbih0KXtjb25zdHtqb2I6cixjbWQ6bixzZXJ2ZXI6aSxwYXRoOnMsYnVmZmVyOm8sa2V5QmFzZTY0OmgsZ3ppcDpsLHJlZmVycmVyOmMsaWQ6dSxhcHBJZDpfLHBlcnNpc3RlbnRJZDpwLENST1FVRVRfVkVSU0lPTjp5LGRlYnVnOngsd2hhdDprfT10LmRhdGE7aWYoInVwbG9hZEVuY3J5cHRlZCI9PT1uKUIocyk7ZWxzZSBjb25zb2xlLmVycm9yKCJVbmtub3duIHdvcmtlciBjb21tYW5kIixuKTtmdW5jdGlvbiB6KHQpe2NvbnN0IGU9RGF0ZS5ub3coKSxyPWcuY3JlYXRlKHQpLG49YS5wYXJzZShoKSxpPXYocixuKSxzPWcucmFuZG9tKDE2KSx7Y2lwaGVydGV4dDpvfT1kLmVuY3J5cHQocixuLHtpdjpzfSksbD1uZXcgQXJyYXlCdWZmZXIoNCtzLnNpZ0J5dGVzK2kuc2lnQnl0ZXMrby5zaWdCeXRlcyksYz1uZXcgRGF0YVZpZXcobCk7bGV0IF89MDtjLnNldFVpbnQzMihfLDExMjk0NjgyMDksITEpLF8rPTQ7Zm9yKGNvbnN0IHQgb2ZbcyxpLG9dKWZvcihjb25zdCBlIG9mIHQud29yZHMpYy5zZXRJbnQzMihfLGUsITEpLF8rPTQ7cmV0dXJuIHgmJmNvbnNvbGUubG9nKGAke3V9ICR7a30gZW5jcnlwdGVkICgke2wuYnl0ZUxlbmd0aH0gYnl0ZXMpIGluICR7RGF0ZS5ub3coKS1lfW1zYCksbH1mdW5jdGlvbiBBKHQpe2NvbnN0IHI9RGF0ZS5ub3coKSxuPWUuZXhwb3J0cy5kZWZsYXRlKHQse2d6aXA6ITAsbGV2ZWw6MX0pO3JldHVybiB4JiZjb25zb2xlLmxvZyhgJHt1fSAke2t9IGNvbXByZXNzZWQgKCR7bi5sZW5ndGh9IGJ5dGVzKSBpbiAke0RhdGUubm93KCktcn1tc2ApLG59ZnVuY3Rpb24gRSh0KXtjb25zdCBlPURhdGUubm93KCkscj1mKGcuY3JlYXRlKHQpKSxuPWEuc3RyaW5naWZ5KHIpLnJlcGxhY2UoLz0vZywiIikucmVwbGFjZSgvXCsvZywiLSIpLnJlcGxhY2UoL1wvL2csIl8iKTtyZXR1cm4geCYmY29uc29sZS5sb2coYCR7dX0gJHtrfSBoYXNoZWQgKCR7dC5sZW5ndGh9IGJ5dGVzKSBpbiAke0RhdGUubm93KCktZX1tc2ApLG59YXN5bmMgZnVuY3Rpb24gUyh0KXtjb25zdCBlPURhdGUubm93KCkscj1gJHtpLnVybH0vJHt0fWA7aWYoIWkuYXBpS2V5KXJldHVybnt1cmw6cix1cGxvYWRVcmw6cn07Y29uc3Qgbj1hd2FpdCBtKHIse2hlYWRlcnM6eyJYLUNyb3F1ZXQtQXV0aCI6aS5hcGlLZXksIlgtQ3JvcXVldC1BcHAiOl8sIlgtQ3JvcXVldC1JZCI6cCwiWC1Dcm9xdWV0LVNlc3Npb24iOnUsIlgtQ3JvcXVldC1WZXJzaW9uIjp5LCJYLUNyb3F1ZXQtUGF0aCI6bmV3IFVSTChjKS5wYXRobmFtZX0scmVmZXJyZXI6Y30pLHtvazphLHN0YXR1czpzLHN0YXR1c1RleHQ6b309bjtpZighYSl0aHJvdyBFcnJvcihgRXJyb3IgaW4gc2lnbmluZyBVUkw6ICR7c30gLSAke299YCk7Y29uc3R7ZXJyb3I6aCxyZWFkOmwsd3JpdGU6ZH09YXdhaXQgbi5qc29uKCk7aWYoaCl0aHJvdyBFcnJvcihoKTtyZXR1cm4geCYmY29uc29sZS5sb2coYCR7dX0gJHtrfSBhdXRob3JpemVkIGluICR7RGF0ZS5ub3coKS1lfW1zYCkse3VybDpsLHVwbG9hZFVybDpkfX1hc3luYyBmdW5jdGlvbiBCKHQpe3RyeXtsZXQgZT16KGw/QShvKTpvKTt3LHQuaW5jbHVkZXMoIiVIQVNIJSIpJiYodD10LnJlcGxhY2UoIiVIQVNIJSIsRShlKSkpO2NvbnN0e3VwbG9hZFVybDpuLHVybDppfT1hd2FpdCBTKHQpLGE9RGF0ZS5ub3coKSx7b2s6cyxzdGF0dXM6aCxzdGF0dXNUZXh0OmR9PWF3YWl0IG0obix7bWV0aG9kOiJQVVQiLG1vZGU6ImNvcnMiLGhlYWRlcnM6eyJDb250ZW50LVR5cGUiOiJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0iLCJYLUNyb3F1ZXQtQXBwIjpfLCJYLUNyb3F1ZXQtSWQiOnAsIlgtQ3JvcXVldC1TZXNzaW9uIjp1LCJYLUNyb3F1ZXQtVmVyc2lvbiI6eX0scmVmZXJyZXI6Yyxib2R5OmV9KTtpZighcyl0aHJvdyBFcnJvcihgc2VydmVyIHJldHVybmVkICR7aH0gJHtkfSBmb3IgUFVUICR7bn1gKTt4JiZjb25zb2xlLmxvZyhgJHt1fSAke2t9IHVwbG9hZGVkICgke2h9KSBpbiAke0RhdGUubm93KCktYX1tcyAke2l9YCksYih7am9iOnIsdXJsOmksb2s6cyxzdGF0dXM6aCxzdGF0dXNUZXh0OmQsYnl0ZXM6ZS5ieXRlTGVuZ3RofSl9Y2F0Y2godCl7eCYmY29uc29sZS5sb2coYCR7dX0gdXBsb2FkIGVycm9yICR7dC5tZXNzYWdlfWApLGIoe2pvYjpyLG9rOiExLHN0YXR1czotMSxzdGF0dXNUZXh0OnQubWVzc2FnZX0pfX19LG09ZmV0Y2gsYj1wb3N0TWVzc2FnZX0oKTsKCg==",va=null,La=!1,function(t){return xa=xa||wa(Xa,va,La),new Worker(xa,t)});const Sa=e.CROQUET_VERSION,ka="node"===e.CROQUET_PLATFORM;ka||window.location.hostname.match(/co?de?pe?n\.io/)?console.log("Croquet "+Sa):console.log("%cCroquet%c %c"+Sa,"color:#F0493E","color:inherit","color:"+(Sa.includes("+")?"#909":"inherit"));const Wa=!ka&&!!window.location.hostname.match(/^(.*\.)?croquet\.io$/i)&&window.location.pathname.startsWith("/dev/"),Ta=!ka&&!!window.location.hostname.match(/^(.*\.)?croquet\.dev$/i);function Ca(t){const e=t.lastIndexOf(":"),s=-1===e?t:t.slice(e+1),n=-1===e?"":t.slice(0,e);let i=r.backend||n;const o=r.reflector&&r.reflector.match(/^wss?:/);if("none"===i||o)return{apiKey:s,signServer:"none",reflector:"overridden"};if(!i&&!ka)switch(window.location.hostname){case"croquet.dev":i="dev";break;case"staging.croquet.io":i="staging"}let a;switch(i){case"":case"prod":a="croquet.io";break;case"staging":a="staging.croquet.io";break;case"dev":a="croquet.dev";break;default:a=`${i}.croquet.dev`}return{apiKey:s,signServer:`https://api.${a}/sign`,reflector:`wss://api.${a}/reflector/v1`}}let Ra=null;const Pa=r.nocheat,Va=[0];let Ya;const Ma=new Ga;Ma.onerror=t=>console.error(`UploadWorker error: ${t.message}`);let Ia=0;const Ka=new Set;function Ha(t){for(const e of Ka)if(e.id===t){const{appId:t,persistentId:s}=e.sessionSpec;return{appId:t,persistentId:s,uploadEncrypted:t=>e.uploadEncrypted(t),downloadEncrypted:t=>e.downloadEncrypted(t)}}return{}}class za{constructor(){!function(){const t=r.dev||!1!==r.dev&&"localhost",e=r.dev||!1!==r.dev&&(Wa||Ta);Ra={messages:r.has("debug","messages",!1),sends:r.has("debug","sends",!1),ticks:r.has("debug","ticks",!1),pong:r.has("debug","pong",!1),snapshot:r.has("debug","snapshot",!1),session:r.has("debug","session",!1),initsnapshot:r.has("debug","initsnapshot",t),reflector:r.has("debug","reflector",e)}}(),this.reset()}reset(){globalThis.CROQUETVM===this.vm&&delete globalThis.CROQUETVM,this.vm=null,this.session=null,this.connection=this.connection||new Fa(this),this.networkQueue=[],this.reflectorTime=0,this.msPerTick=this.msPerTick||0,this.tickMultiplier=this.tickMultiplier||1,this.extrapolatedTimeBase=Date.now(),this.key=this.key||null,this.tove=this.tove||null,this.viewId=this.viewId||Math.floor(Math.random()*36**10).toString(36),this.timeline="",this.rejoinTimeout&&clearTimeout(this.rejoinTimeout),this.rejoinTimeout=0,this.sendBuffer=[],this.users=0,this.usersTotal=0,this.cpuTime=0,this.triggeringCpuTime=null,this.synced=null,this.latency=0,this.latencyHistory&&(this.latencyHistory=[]),this.localTicker&&(globalThis.clearInterval(this.localTicker),delete this.localTicker),this.syncTimer&&(globalThis.clearTimeout(this.syncTimer),delete this.syncTimer),this.tuttiHistory=[],this.lastAnimationEnd=0,this.animationGapCheck=[],this.rateLimitedSendTimes=[],this.rateLimitBuffer=[],this.rateLimitSoftWarned=!1,this.rateLimitBufferWarned=!1,this.rateLimitLastLogged=0,this.payloadSizeWarned=!1,Vt.removeAllSubscriptionsFor(this.viewId),Vt.addSubscription(this.viewId,"__peers__",this.viewId,(t=>bt(`users now ${t.count}`)),"oncePerFrameWhileSynced"),this.leaving||Rt.showSyncWait(!0)}get id(){return this.vm?this.vm.id:this.sessionSpec.id}get persistentId(){return this.sessionSpec.persistentId}get versionId(){return this.sessionSpec.codeHash}get extrapolatedTime(){return Date.now()-this.extrapolatedTimeBase}get viewOnly(){return this.sessionSpec.viewOnly}get backlog(){return this.vm?this.reflectorTime-this.vm.time:0}get starvation(){return Date.now()-this.lastReceived}get lag(){return this.vm?Math.max(0,this.extrapolatedTime-this.vm.time-this.msPerTick):0}get activity(){return Date.now()-this.lastSent}get viewed(){return!(!this.session||!this.session.view)}get connected(){return this.connection.connected}get shouldLeaveWhenDisconnected(){return this.leaving||!this.canRejoinSeamlessly||0===this.sessionSpec.rejoinLimit}get canRejoinSeamlessly(){return!!this.timeline}checkForConnection(t){this.connection.checkForConnection(t)}dormantDisconnect(){this.connected&&this.connection.dormantDisconnect()}async initFromSessionSpec(t){const{name:e,optionsFromUrl:s,password:n,appId:i,apiKey:o,viewIdDebugSuffix:a}=t,l=i?`${i}/${e}`:e;a&&(this.viewId=this.viewId.replace(/_.*$/,"")+"_"+encodeURIComponent((""+a).slice(0,16)).replace(/[^a-z0-9]/gi,(t=>`_${"%"===t?"":t.charCodeAt(0).toString(16).toUpperCase()}`)));const c={...t.options};if(s)for(const t of s)t in r&&(c[t]=r[t]);const d={};for(const e of["hashOverride"])e in r?d[e]=r[e]:e in t&&(d[e]=t[e]);this.key=yi(n,"",{keySize:8});const h=await async function(t,e){return R(t+y(e))}(l,c),{developerId:u,token:m}=await this.verifyApiKey(o,i,h),{id:p,codeHash:f,computedCodeHash:b}=await async function(t,e,s,n){let i,o;const r=V[t];let a="";r?(i=r.codeHashes,o=r.computedCodeHash,a=" (code hashing from cache)"):(i=await Promise.all(P),o=await R([n,...i].join("|")),V[t]={codeHashes:i,computedCodeHash:o});const{hashOverride:l,...c}=s,d=l||o,h=await R(t+"|"+e+y(c)+d);if(W()&&!Y.has(h)){(L?"utf-8":[...document.getElementsByTagName("meta")].find((t=>t.getAttribute("charset"))))||console.warn('Croquet: Missing <meta charset="..."> declaration. Croquet model code hashing might differ between browsers.'),T[o].what="Version ID",T[t].what="Persistent ID",T[h].what="Session ID",d!==o&&(i.push(o),T[o].what="Computed Version ID (replaced by overrideHash)",T[d]={what:"Version ID (as specified by overrideHash)"});const e=[...i,d,t,h].map((t=>({hash:t,...T[t]})));console.log(`Croquet: Debug Hashing for session ${h}${a}`,e),Y.add(h)}return{id:h,persistentId:t,codeHash:d,computedCodeHash:o}}(h,u,d,Sa);this.tove=await this.encrypt(p),Ra.session&&console.log(`Croquet session "${l}":\n        sessionId=${p}${i?`\n        persistentId=${h}`:""}\n        versionId=${f===b?f:`${f} (specified in hashOverride)\n        versionId=${b} (computed)`}\n        viewId=${this.viewId}`),this.eventRateLimit=t.eventRateLimit,this.eventHistoryLimit=this.eventRateLimit,this.eventMaxBundles=this.eventRateLimit,this.sessionSpec={...t,options:c,name:l,id:p,persistentId:h,developerId:u,token:m,codeHash:f,computedCodeHash:b};const{msPerTick:g,multiplier:Z}=this.getTickAndMultiplier();this.msPerTick=g,this.tickMultiplier=Z,this.setUpActivityChecks()}async establishSession(){const{id:t,persistentId:e,codeHash:s}=this.sessionSpec;this.sessionSpec.snapshot={id:t,time:0,meta:{id:t,persistentId:e,codeHash:s,created:(new Date).toISOString()}};const n=new Promise((t=>this.sessionSpec.sessionJoined=t));this.checkForConnection(!1),Ra.session&&console.log(t,"waiting for SYNC"),await n}async verifyApiKey(t,e,s){const{signServer:n,apiKey:i}=Ca(t);if("none"===n)return{developerId:"unknown_dev_id"};try{const t=await fetch(`${n}/join?meta=login`,{method:"GET",mode:"cors",headers:{"X-Croquet-Auth":i,"X-Croquet-App":e,"X-Croquet-Id":s,"X-Croquet-Version":Sa,"X-Croquet-Path":new URL(Rt.referrerURL()).pathname},referrer:Rt.referrerURL(),referrerPolicy:"no-referrer-when-downgrade"}),{error:o,developerId:r,token:a}=await t.json();if(o)throw Error(o);return Ra.session&&console.log("Croquet: verified API key"),{developerId:r,token:a}}catch(e){throw Error(`Croquet API key validation failed for "${t}": ${e.message}`)}}lastKnownTime(t){return Math.max(t.time,t.externalTime)}takeSnapshot(){const t=this.vm.snapshot(),e=this.lastKnownTime(t),s=t.externalSeq;return t.meta={...this.sessionSpec.snapshot.meta,options:this.sessionSpec.options,time:e,seq:s,date:(new globalThis.CroquetViewDate).toISOString(),host:ka?"localhost":window.location.hostname,sdk:Sa},delete t.meta.hash,t}takeSnapshotHandleErrors(){let t,e,s;try{t=ot.begin("snapshot"),s=this.takeSnapshot()}catch(t){return yt("snapshot",t),null}finally{e=ot.end("snapshot")-t}return Ra.snapshot&&console.log(this.id,`snapshot taken in ${Math.ceil(e)} ms`),s}scheduleSnapshot(){if(!this.connected||!this.vm||this.viewOnly)return;const t=this.vm.time,e=t-this.vm.lastSnapshotPoll;if(e<5e3)return void(Ra.snapshot&&console.log(`not requesting snapshot poll (${e}ms since poll scheduled)`));const s=new ml(t,0,"_","handlePollForSnapshot",[]);this.sendTagged(s,{debounce:5e3,msgID:"pollForSnapshot"}),Ra.snapshot&&console.log(this.id,"requesting snapshot poll via reflector")}handlePollForSnapshot(t){if(!0!==this.synced||this.viewOnly)return void(this.triggeringCpuTime=null);const e=this.triggeringCpuTime||this.cpuTime;let s,n,i;this.triggeringCpuTime=null,this.cpuTime=0;try{s=ot.begin("snapshot"),n={cpuTime:e,hash:this.vm.getSummaryHash(),viewId:this.viewId}}catch(t){return void yt("snapshot",t)}finally{i=ot.end("snapshot")-s,this.cpuTime-=i}Ra.snapshot&&console.log(this.id,`Summary hashing took ${Math.ceil(i)}ms`),Promise.resolve().then((()=>this.pollForSnapshot(t,n)))}pollForSnapshot(t,e){e.cpuTime+=Math.random(),Ra.snapshot&&console.log(this.id,"sending snapshot vote",e),this.sendTutti({time:t,topic:"snapshot",data:e,tallyTarget:["handleSnapshotVote"]})}handleSnapshotVote(t){if(!0!==this.synced)return void(Ra.snapshot&&console.log(this.id,"Ignoring snapshot vote during sync"));const{tally:e}=t;Ra.snapshot&&console.log(this.id,"received snapshot votes",e);const{numberOfGroups:s,shouldUpload:n,dissidentFlag:i}=this.analyzeTally(e,"cpuTime");if(s>1&&console.error(this.id,`Session diverged! Snapshots fall into ${s} groups`),n){const t=this.takeSnapshotHandleErrors();t&&Promise.resolve().then((()=>this.uploadSnapshot(t,i)))}}analyzeTally(t,e){let s=!1,n=null;const i=[],o={};let r=null;Object.keys(t).forEach(((t,e)=>{const s=JSON.parse(t);i.push(s);const{hash:n,viewId:a}=s;a===this.viewId&&(r=e),o[n]||(o[n]=[]),o[n].push(e)}));const a=Object.keys(o),l=a.length;let c=0;l>1&&(a.sort(((t,e)=>o[e].length-o[t].length)),o[a[0]].length===o[a[1]].length&&(Ra.snapshot&&console.log(this.id,"Deciding consensus by tie-break"),a[1]<a[0]&&(c=1)));const d=a[c];if(null!==r){const t=i[r].hash,a=o[t];a.length>1&&a.sort(((t,s)=>i[t][e]-i[s][e])),a[0]===r&&(s=!0,t!==d&&(n={groupVotes:a.length,allVotes:i.length}))}return{numberOfGroups:l,shouldUpload:s,dissidentFlag:n}}snapshotPath(t,e,s){const n=Math.ceil(t).toString().padStart(10,"0"),{appId:i,persistentId:o,codeHash:r,apiKey:a}=this.sessionSpec;return a?`apps/${i}/snap/${r}/${o}.${this.id}/${n}_${e}.${s}`:`snapshots/${this.id}/${n}_${e}-${s}.snap`}hashSnapshot(t){return t.meta.hash?t.meta.hash:(t.meta.hashPromise||(t.meta.hashPromise=new Promise((e=>{const s={...t};delete s.meta,R(JSON.stringify(s)).then((s=>{t.meta.hash=s,delete t.meta.hashPromise,e(s)}))}))),t.meta.hashPromise)}uploadServer(t){if("string"==typeof r.files){let t=r.files;return t.endsWith("/")&&(t=t.slice(0,-1)),{url:t,apiKey:null}}const{apiKey:e,signServer:s}=Ca(t);if("none"===s)throw Error("no file server configured");return{url:s,apiKey:e}}async uploadSnapshot(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;await this.hashSnapshot(t);const s=ot.begin("snapshot"),n=JSON.stringify(t),i=ot.end("snapshot")-s;Ra.snapshot&&console.log(this.id,`snapshot stringified (${n.length} bytes) in ${Math.ceil(i)}ms`);const{time:o,seq:r,hash:a}=t.meta,l=this.connection.socket;try{const t=await this.uploadEncrypted({content:n,path:this.snapshotPath(o,r,a),key:this.key,gzip:!0,debug:Ra.snapshot,what:"snapshot"});return this.connection.socket!==l?(console.warn(this.id,"Controller was reset while trying to upload snapshot"),!1):(this.announceSnapshotUrl(o,r,a,t,e),!0)}catch(t){return console.error(this.id,"Failed to upload snapshot"),!1}}announceSnapshotUrl(t,e,s,n,i){if(Ra.snapshot){let o=`time: ${t}, seq: ${e}, hash: ${s}`;i&&(o+=", as dissident; "+JSON.stringify(i)),console.log(this.id,`sending snapshot url to reflector (${o}): ${n}`)}try{this.connection.send(JSON.stringify({id:this.id,action:"SNAP",args:{time:t,seq:e,hash:s,url:n,dissident:i}}))}catch(t){console.error("ERROR while sending",t)}}async downloadEncrypted(t){let{url:e,gzip:s,key:n,debug:i,json:o,what:r}=t;e.startsWith("https://croquet.io/files/v1")&&(e=e.replace("https://croquet.io/files/v1","https://files.croquet.io"));let a=Date.now();const l=await fetch(e,{method:"GET",mode:"cors",headers:{"X-Croquet-App":this.sessionSpec.appId,"X-Croquet-Id":this.sessionSpec.persistentId,"X-Croquet-Session":this.sessionSpec.id,"X-Croquet-Version":Sa},referrer:Rt.referrerURL()}),c=await l.arrayBuffer();i&&console.log(this.id,`${r} fetched (${c.byteLength} bytes) in ${-a+(a=Date.now())}ms`),ot.addNetworkTraffic(`${r}_in`,c.byteLength);const d=this.decryptBinary(c,n);i&&console.log(this.id,`${r} decrypted (${d.length} bytes) in ${-a+(a=Date.now())}ms`);const h=s?Za.inflate(d):d;return i&&s&&console.log(this.id,`${r} inflated (${h.length} bytes) in ${-a+(a=Date.now())}ms`),o?JSON.parse((new TextDecoder).decode(h)):h}async uploadEncrypted(t){let{content:e,path:s,key:n,gzip:i,keep:o,debug:r,what:a}=t;const l="string"==typeof e?(new TextEncoder).encode(e).buffer:e,c=o?void 0:[l],d="string"==typeof n?n:hi.stringify(n),{apiKey:h,appId:u,persistentId:m}=this.sessionSpec,p=++Ia;return new Promise(((t,e)=>{const n=ka?"addListener":"addEventListener",o=ka?"removeListener":"removeEventListener";Ma.postMessage({job:p,cmd:"uploadEncrypted",server:this.uploadServer(h),path:s,buffer:l,keyBase64:d,gzip:i,referrer:Rt.referrerURL(),id:this.id,appId:u,persistentId:m,CROQUET_VERSION:Sa,debug:r,what:a},c);const f=s=>{if(p!==s.data.job)return;const{url:n,ok:i,status:r,statusText:l,bytes:c}=s.data;ot.addNetworkTraffic(`${a}_out`,c),Ma[o]("message",f),i?t(n):e(Error(`${r}: ${l}`))};try{Ma[n]("message",f)}catch(t){console.log("failed to add listener",t)}}))}persistentPath(t){const{appId:e,persistentId:s}=this.sessionSpec;return`apps/${e}/${s}/save/${t}`}pollForPersist(t,e,s,n,i){if(!this.synced)return;if(!this.sessionSpec.appId)throw Error("Persistence API requires appId");const o={viewId:this.viewId,hash:n,ms:i+.001*Math.random()},r={persistTime:e,persistentHash:n,persistentString:s};Ra.snapshot&&console.log(this.id,`sending persistence vote for time @${e}`,o),this.sendTutti({time:t,topic:"persist",data:o,localContext:r,tallyTarget:["handlePersistVote"]})}async handlePersistVote(t){const{tally:e,localContext:s}=t;if(Ra.snapshot){const t=!!s?`for time @${s.persistTime}`:"that we didn't participate in";console.log(this.id,`received persistence vote ${t}`,e)}const{numberOfGroups:n,shouldUpload:i,dissidentFlag:o}=this.analyzeTally(e,"ms");if(n>1&&console.warn(this.id,`Persistence records fall into ${n} groups`),!i||!s)return;const{persistTime:r,persistentHash:a,persistentString:l}=s,c=await this.uploadEncrypted({path:this.persistentPath(a),content:l,key:this.key,gzip:!0,debug:Ra.snapshot,what:"persistence"});if(Ra.snapshot){const t=o?` (as dissident; ${JSON.stringify(o)})`:"";console.log(this.id,`sending persistent data url to reflector${t}: ${c}`)}try{this.connection.send(JSON.stringify({id:this.id,action:"SAVE",args:{persistTime:r,url:c,dissident:o}}))}catch(t){console.error("ERROR while sending",t)}}convertReflectorMessage(t){let e="noop",s=[];switch(t[2].what){case"users":{const{joined:n,left:i,active:o,total:r}=t[2];this.users=o,this.usersTotal=r;const a="__peers__",l={entered:n||[],exited:i||[],count:o};e="publishFromModelOnly",s=["__VM__",a,l],Vt.handleEvent(this.viewId+":"+a,l);break}case"tally":{const{tuttiSeq:n,tuttiKey:i,tally:o,tallyTarget:r,missingClients:a}=t[2];(Ra.messages||Ra.snapshot)&&a&&console.log(`${a} ${1===a?"client":"clients"} failed to participate in tally ${i||n}`),e="handleTuttiResult",s=[{tuttiSeq:n,tuttiKey:i,tally:o,tallyTarget:r}];break}}const n=new ml(0,0,"_",e,s);t[2]=n.asState()[2]}handleTuttiResult(t){const{tuttiSeq:e,tuttiKey:s,tally:n,tallyTarget:i}=t,o=s?t=>t.tuttiKey===s:t=>t.dummyTuttiSeq===e,r=this.tuttiHistory.findIndex(o),a=-1!==r&&this.tuttiHistory.splice(r,1)[0];let l=null,c=null;if(a&&(l=a.payload,c=a.localContext),i){const[t,...e]=i,s=[...e,{tally:n,localPayload:l,localContext:c}],o=new ml(0,0,"_",t,s);this.vm.verifyExternal(o),o.executeOn(this.vm,!0)}}async receive(t,e){const s=this.lastReceived;switch(this.lastReceived=this.connection.lastReceived,t){case"SYNC":{this.syncReceived=!0,this.clearSyncReceiptTimeout(),Ka.add(this);const{progressReporter:t}=this.sessionSpec,s=t||(()=>{}),{messages:n,url:i,persisted:o,time:r,seq:a,snapshotSeq:l,tove:c,reflector:d,flags:h}=e;if(c&&c!==this.tove)try{if(this.decrypt(c)!==this.id)throw Error("wrong sessionId in tove?!")}catch(t){return this.connection.closeConnectionWithError("SYNC",Error(`failed to decrypt session secret: ${t.message}`),4200),void s(-1)}const u=e.timeline||e.reflectorSession;this.flags=h||{};const m=o?"persistence":"snapshot";Ra.session&&console.log(this.id,`received SYNC from ${d} reflector: time ${r}, ${n.length} messages, ${m} ${i||"<none>"}`);let p=!!this.vm;if(p){this.networkQueue.length=0;const t=!!u&&u===this.timeline,e=n[0],s=a,i=void 0!==l?l:e?e[1]:s;Ra.messages&&console.log(this.id,`rejoin: we have #${this.vm.seq} SYNC has #${i}-#${s}`);let o=t&&ul(i,this.vm.seq)&&ul(this.vm.seq,s)&&r>=this.reflectorTime;if(o){let t=0;e&&ul(e[1],this.vm.seq)&&(t=this.vm.seq-e[1]+1>>>0);for(let e=t;o&&e<n.length;e++){const t=n[e][2];"string"!=typeof t&&"users"===t.what&&t.left&&t.left.includes(this.viewId)&&(Ra.session&&console.log(this.id,"reflector reports that this view has left"),o=!1)}o&&t&&(Ra.messages&&console.log(this.id,`rejoin: discarding ${t} messages #${e[1]}-#${this.vm.seq}`),n.splice(0,t))}if(o){if(this.sendBuffer.length>0){const t=this.sendBuffer;this.sendBuffer=[],Ra.session&&console.log(this.id,`rejoin: sending ${t.length} messages buffered while disconnected`);for(const e of t)e()}}else Ra.session&&console.log(this.id,"cannot rejoin seamlessly; rebooting model/view"),this.leave(!0),p=!1}const f=this.networkQueue;this.networkQueue=[];for(const t of n){if("string"!=typeof t[2])this.convertReflectorMessage(t);else try{t[2]=this.decryptPayload(t[2])[0]}catch(t){return this.connection.closeConnectionWithError("SYNC",Error(`failed to decrypt message: ${t.message}`),4200),void s(-1)}Ra.messages&&console.log(this.id,"received in SYNC "+JSON.stringify(t)),this.networkQueue.push(t)}if(this.networkQueue.push(...f),r>this.reflectorTime&&this.timeFromReflector(r,"reflector"),p)return Ra.session&&console.log(this.id,"seamless rejoin successful"),void this.sessionSpec.sessionJoined();let b;if(this.timeline=u||"",Ra.snapshot&&i&&console.log(`${this.id} fetching ${m} ${i}`),i)try{b=await this.downloadEncrypted({url:i,gzip:!0,key:this.key,debug:Ra.snapshot,json:!0,what:m})}catch(t){return this.connection.closeConnectionWithError("SYNC",Error(`failed to fetch ${m}: ${t.message}`),4200),void s(-1)}if(!this.connected)return console.log(this.id,"disconnected during SYNC"),void s(-1);o?this.install(b):(b&&(this.sessionSpec.snapshot=b),this.install()),Ra.session&&console.log(`${this.id} fast-forwarding from ${Math.round(this.vm.time)} to at least ${r}`);const y=this.vm.time,g=await new Promise((t=>{const{port1:e,port2:n}=new MessageChannel;e.onmessage=()=>{let e=!0;if(this.vm.time===this.reflectorTime)this.viewId in this.vm.views&&(s(1),t(!0),e=!1);else{const t=(this.vm.time-y)/(this.reflectorTime-y);s(t)}e&&this.stepSession("fastForward",{budget:200})};this.fastForwardHandler=e=>{this.connected&&this.vm?"error"===e?(s(-1),t(!1)):n.postMessage("tick"):(console.log(this.id,"disconnected during SYNC fast-forwarding"),s(-1),t(!1))},Promise.resolve().then((()=>this.stepSession("fastForward",{budget:200})))}));return delete this.fastForwardHandler,g&&Ra.session&&console.log(`${this.id} fast-forwarded to ${Math.round(this.vm.time)}`),void(g&&this.sessionSpec.sessionJoined())}case"RECV":{const t=e;if(t[1]>>>=0,"string"!=typeof t[2])Ra.messages&&console.log(this.id,"received META "+JSON.stringify(t)),this.convertReflectorMessage(t),Ra.messages&&console.log(this.id,"converted to "+JSON.stringify(t));else try{const[e,s,n]=this.decryptPayload(t[2]);t[2]=e,s===this.viewId&&this.addToStatistics(n,this.lastReceived),Ra.messages&&console.log(this.id,"received "+JSON.stringify(t))}catch(t){return void this.connection.closeConnectionWithError("RECV",Error(`failed to decrypt message: ${t.message}`),4200)}let s;return this.networkQueue.push(t),this.flags.rawtime&&(s=t[t.length-1]),this.timeFromReflector(t[0],"reflector",s),void(this.simulateIfNeeded&&Promise.resolve().then((()=>this.simulateIfNeeded())))}case"TICK":{if(!this.vm)return;const t="number"==typeof e?e:e.time;if(Ra.ticks){const e=s&&this.lastReceived-s-this.msPerTick*this.tickMultiplier|0;console.log(this.id,`Controller received TICK ${t} ${Math.abs(e)<5?"on time":e<0?"early":"late"} (${e} ms)`)}return this.timeFromReflector(t,"reflector"),this.tickMultiplier>1&&this.multiplyTick(t),void(this.simulateIfNeeded&&Promise.resolve().then((()=>this.simulateIfNeeded())))}case"INFO":{const{msg:t,options:s}=e;return void Rt.showMessage(t,s)}case"REQU":return Ra.snapshot&&console.log("received REQU (snapshot request) from reflector"),void(this.cpuTime=12345);default:console.warn("Unknown action:",t,e)}}install(t){const e=Date.now(),{snapshot:s,initFn:n,options:i}=this.sessionSpec,[o,r]=s.modelsById?["deserializ","snapshot"]:["initializ","root model"];Ra.session&&console.log(`${this.id} ${o}ing ${r}`);let a=new cl(s,(()=>{try{return n(i,t)}catch(t){throw yt("init",t,"fatal"),t}}));if((Ra.session||Ra.snapshot&&s.modelsById)&&console.log(`${this.id} ${r} ${o}ed in ${Date.now()-e}ms`),Ra.initsnapshot&&!s.modelsById){Ra.snapshot&&console.log(`${this.id} exercising snapshot and restore after init()`);let t=null;try{t=JSON.stringify(a.snapshot())}catch(t){throw yt("initial snapshot",t,"fatal"),t}try{a=new cl(JSON.parse(t),(()=>n(i)))}catch(t){throw yt("initial snapshot resume",t,"fatal"),t}}const l=this.lastKnownTime(a);this.reflectorTime=Math.max(this.reflectorTime,l),this.setVM(a)}setVM(t){this.vm=t,this.vm.controller=this}sendJoin(){this.syncReceived=!1,delete this.fastForwardHandler,this.rejoinTimeout&&(clearTimeout(this.rejoinTimeout),this.rejoinTimeout=0),Ra.session&&console.log(this.id,"Controller sending JOIN");const{tick:t,delay:e}=this.getTickAndMultiplier(),{name:s,codeHash:n,appId:i,apiKey:o,persistentId:r,developerId:a,heraldUrl:l,rejoinLimit:c,autoSleep:d,computedCodeHash:h,flags:u}=this.sessionSpec,{apiKey:m}=Ca(o),p={name:s,apiKey:m,appId:i,persistentId:r,url:Rt.referrerURL(),sdk:Sa,developerId:a,version:1,user:this.viewId,ticks:{tick:t,delay:e},dormantDelay:d,tove:this.tove,codeHash:n};l&&Object.assign(p,{heraldUrl:l}),c&&Object.assign(p,{leaveDelay:c+250}),h!==n&&Object.assign(p,{computedCodeHash:h}),u&&Object.assign(p,{flags:u}),this.connection.send(JSON.stringify({id:this.id,action:"JOIN",args:p})),this.syncReceiptTimeout=setTimeout((()=>{delete this.syncReceiptTimeout,this.syncReceived||this.connection.closeConnectionWithError("join",Error("SYNC not received in time"))}),5e3)}clearSyncReceiptTimeout(){this.syncReceiptTimeout&&(clearTimeout(this.syncReceiptTimeout),delete this.syncReceiptTimeout)}connectionInterrupted(){this.syncReceived&&(this.shouldLeaveWhenDisconnected?this.leave():this.rejoinTimeout||(this.rejoinTimeout=setTimeout((()=>{Ra.session&&console.log(this.id,"rejoin timed out"),this.rejoinTimeout=0,this.leave()}),this.sessionSpec.rejoinLimit)))}leave(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{rebootModelView:e}=this.sessionSpec;if(this.reset(),Ra.session&&console.log(this.id,`resetting ${t?"(but keeping)":"and discarding"} controller`),t||Ka.delete(this),!this.sessionSpec)throw Error("do not discard sessionSpec!");e()}async encrypt(t){const e=w.random(16),s=vi.encrypt(t,this.key,{iv:e}),n=xi(t,this.key);return`${hi.stringify(e)}${hi.stringify(n)}${s}`}get deprecatedDefaultKey(){return Ya||(Ya=yi("THIS SHOULDN'T BE IN LOGS","",{keySize:8})),Ya}decrypt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.key;const s=hi.parse(t.slice(0,24)),n=hi.parse(t.slice(24,68)),i=t.slice(68),o=vi.decrypt(i,e,{iv:s});let r="";try{r=mi.stringify(o)}catch(t){}const a=xi(r,this.key);if(this.compareHmacs(n.words,a.words))return r;if(e!==this.deprecatedDefaultKey)return this.decrypt(t,this.deprecatedDefaultKey);throw Error("Decryption error")}decryptBinary(t,e){const s=(new TextDecoder).decode(new Uint8Array(t,0,4));let n,i,o,r,a;switch("string"==typeof e&&(e=hi.parse(e)),s){case"CRQ0":n=(new TextDecoder).decode(t),i=hi.parse(n.slice(4,28)),o=hi.parse(n.slice(28,72)),r=n.slice(72),a=vi.decrypt(r,e,{iv:i});break;case"CRQ1":n=new Uint8Array(t),i=w.create(n.subarray(4,20)),o=w.create(n.subarray(20,52)),r=w.create(n.subarray(52)),a=vi.decrypt({ciphertext:r},e,{iv:i});break;default:throw Error(`${this.id} unknown encryption version ${s}`)}a.clamp();const l=xi(a,e);if(this.compareHmacs(o.words,l.words))return G(a);if(e!==this.deprecatedDefaultKey)return this.decryptBinary(t,this.deprecatedDefaultKey);throw Error("Decryption error")}async encryptMessage(t,e,s){const[n,i,o]=t.asState();return[n,i,await this.encryptPayload([o,e,s])]}async encryptPayload(t){return this.encrypt(JSON.stringify(t))}decryptPayload(t){return JSON.parse(this.decrypt(t))}compareHmacs(t,e){let s=t.length===e.length;for(let n=0;n<t.length;n++)t[n]!==e[n]&&(s=!1);return s}sendMessage(t){if(this.viewOnly||!this.vm)return;const e=t.asState()[2].length;if(e>16384)return void console.warn(`${this.id} Message with payload of ${e} bytes exceeds maximum 16384 and will not be sent to reflector.`);!this.payloadSizeWarned&&e>4096&&(console.log(`${this.id} Message with payload of ${e} bytes being sent to reflector. Maximum recommended is 4096.`),this.payloadSizeWarned=!0);const s=Date.now(),n=this.rateLimitedSendTimes,i=this.rateLimitBuffer;if(ot.perSecondTally({requestedMessages:1}),i.length)return void this.addToRateLimitBuffer(t);let o=0;if(n.length&&this.synced){const t=n[n.length-1],e=1e3/this.eventRateLimit-(s-t);e>1&&(o=Math.ceil(e))}o?(this.addToRateLimitBuffer(t),setTimeout((()=>this.serviceRateLimitBuffer()),o)):(this.recordRateLimitedSend(s),this.socketSendMessage(t),ot.perSecondTally({sentSingleMessages:1,sentMessagesTotal:1,sentPayloadTotal:e}))}recordRateLimitedSend(t){const e=this.rateLimitedSendTimes;!this.synced&&e.length&&e[e.length-1]===t||(e.push(t),e.length>this.eventHistoryLimit&&e.shift()),!this.rateLimitSoftWarned&&e.length===this.eventHistoryLimit&&t-e[0]<1010&&(console.warn(`${this.id} Sends to reflector are at or above recommended limit of ${this.eventHistoryLimit} within one second. Events will be bundled as necessary to keep to the limit.`),this.rateLimitSoftWarned=!0)}addToRateLimitBuffer(t){ot.perSecondTally({bundledMessages:1});const e=Date.now(),s=t.asState(),n=s[2].length,i=this.rateLimitBuffer;if(i.length){const t=i[i.length-1],{msgStates:o,totalPayload:r}=t;if(r<4096)return o.push({msgState:s,bufferTime:e}),void(t.totalPayload+=n)}ot.perSecondTally({newBundles:1}),i.push({msgStates:[{msgState:s,bufferTime:e}],totalPayload:n});const o=i.length;Ra.session&&o%5==0&&o!==this.rateLimitLastLogged&&(console.log(`${this.id} SEND rate-limit buffer grew to ${o} event bundles (max ${this.eventMaxBundles})`),this.rateLimitLastLogged=o),o>this.eventMaxBundles?(console.error(`${this.id} Disconnecting after overflow of SEND rate-limit buffer.`),this.connection.closeConnectionWithError("SEND",Error("Send rate exceeded"),4200)):!this.rateLimitBufferWarned&&o>this.eventMaxBundles/2&&(console.warn(`${this.id} SEND rate-limit buffer is 50% full. If send rate does not drop, the app will be disconnected.`),this.rateLimitBufferWarned=!0)}serviceRateLimitBuffer(){if(!this.connected)return;const t=this.rateLimitBuffer;if(!t.length)return;const e=Date.now(),s=1e3/this.eventRateLimit,n=this.rateLimitedSendTimes;if(n.length){const t=n[n.length-1];if(s-(e-t)>0)return}const i=t.shift(),{msgStates:o,totalPayload:r}=i,a=[];let l=0;if(o.forEach((t=>{a.push(t.msgState),l+=e-t.bufferTime})),1===a.length){const t=ml.fromState(a[0],this.vm);this.socketSendMessage(t)}else{const t=new ml(this.vm.time,0,"_","handleBundledEvents",[a]);this.socketSendMessage(t)}if(this.recordRateLimitedSend(e),ot.perSecondTally({sentBundles:1,sentMessagesTotal:o.length,sendDelay:l,sentBundlePayload:r,sentPayloadTotal:r}),Ra.session&&this.connected){const e=t.length;e&&e%5==0&&e!==this.rateLimitLastLogged&&(console.log(`${this.id} SEND rate-limit buffer dropped to ${e} event bundles`),this.rateLimitLastLogged=e)}t.length&&setTimeout((()=>this.serviceRateLimitBuffer()),s)}async socketSendMessage(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const s=await this.encryptMessage(t,this.viewId,Date.now()),n=e?`tagged SEND ${t.asState()} with tags ${JSON.stringify(e)}`:`SEND ${t.asState()}`;if(!this.connected)return void(this.vm&&(Ra.sends&&console.log(this.id,`buffering ${n}`),this.sendBuffer.push((()=>this.socketSendMessage(t,e)))));Ra.sends&&console.log(this.id,`sending ${n}`);const i={id:this.id,action:"SEND",args:[...s,this.latency]};e&&(i.tags=e),this.lastSent=Date.now(),this.connection.send(JSON.stringify(i))}async sendTagged(t,e){this.viewOnly||this.socketSendMessage(t,e)}async sendTutti(t){let{time:e,topic:s,data:n,localContext:i=null,firstMessage:o=null,wantsVote:r=!0,tallyTarget:a=null}=t;if(this.viewOnly)return;const l=o&&await this.encryptMessage(o,this.viewId,Date.now()),c=y(n);if(!this.connected)return void(this.vm&&(Ra.sends&&console.log(this.id,`buffering "${s}" TUTTI ${c} ${o&&o.asState()}`),this.sendBuffer.push((()=>this.sendTutti({time:e,topic:s,data:n,localContext:i,firstMessage:o,wantsVote:r,tallyTarget:a})))));Ra.sends&&console.log(this.id,`sending "${s}" TUTTI ${c} ${o&&o.asState()}`),this.lastSent=Date.now();const d=`${s}@${e}`;this.connection.send(JSON.stringify({id:this.id,action:"TUTTI",args:[e,0,c,l,r,a,d]})),this.tuttiHistory.length>100&&this.tuttiHistory.shift(),this.tuttiHistory.push({time:e,tuttiKey:d,dummyTuttiSeq:0,payload:c,localContext:i})}sendLog(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];this.connected?(Ra.sends&&console.log(this.id,"sending LOG"),e.length<2&&(e=e[0]),this.connection.send(JSON.stringify({action:"LOG",args:e}))):this.vm&&(Ra.sends&&console.log(this.id,"buffering LOG"),this.sendBuffer.push((()=>this.sendLog(...e))))}addToStatistics(t,e){this.latency=e-t,this.latencyHistory&&(this.latencyHistory.length>=100&&this.latencyHistory.shift(),this.latencyHistory.push({time:e,ms:this.latency}))}get latencies(){return this.latencyHistory||(this.latencyHistory=[]),this.latencyHistory}getTickAndMultiplier(){const t=this.sessionSpec.options,e=["number","string"].includes(typeof t.tps)?t.tps:["number","string"].includes(typeof this.sessionSpec.tps)?this.sessionSpec.tps:20,[s,n]=(e+"x").split("x").map((t=>Number.parseFloat("0"+t))),i=1e3/Math.max(1/30,Math.min(60,s)),o=Math.max(1,n);let r=i,a=0;return o>1&&!Pa&&(r=i/o,a=Math.ceil(r*(o-1))),{msPerTick:r,multiplier:o,tick:i,delay:a}}simulate(t){if(!this.vm)return!0;try{let e=!0;if(this.networkQueue.length+this.vm.messages.size===0)e=this.vm.advanceTo(this.reflectorTime,t);else{const s=ot.begin("simulate");for(;e;){const s=this.networkQueue[0];if(!s)break;if(e=this.vm.advanceTo(s[0],t),!e)break;this.networkQueue.shift();const n=this.vm.scheduleExternalMessage(s);e=this.vm.advanceTo(n.time,t),this.cpuTime+=5}e&&(e=this.vm.advanceTo(this.reflectorTime,t)),this.cpuTime+=Math.max(.01,ot.end("simulate")-s)}ot.backlog(this.backlog);const s=this.lag,n=Math.max(200,.1*this.msPerTick),i=Math.max(2e3,.2*this.msPerTick);if("boolean"==typeof this.synced&&this.viewed&&(this.synced&&s>i||!this.synced&&s<n)){!this.synced?this.syncTimer||(this.syncTimer=setTimeout((()=>{delete this.syncTimer,this.connected&&this.lag<n&&this.applySyncChange(!0)}),200)):this.applySyncChange(!1)}return this.synced&&e&&this.cpuTime>5e3&&(this.triggeringCpuTime=this.cpuTime,this.cpuTime=0,this.isBeingAnimated()?setTimeout((()=>this.scheduleSnapshot()),Math.floor(2e3*Math.random())):this.scheduleSnapshot()),e}catch(t){return yt("simulate",t),this.connection.closeConnectionWithError("simulate",t),"error"}}stepSession(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=ot.stepSession(e.frameTime,!0);s&&console.log(s);const{backlog:n,latency:i,starvation:o,activity:r}=this;if("animation"===t){ot.animationFrame(e.frameTime,{backlog:n,starvation:o,latency:i,activity:r,users:this.users});const t=Date.now();if(this.lastAnimationEnd){const e=t-this.lastAnimationEnd;if(!0===this.animationGapCheck&&e>200&&(this.animationGapCheck=[],Ra.session&&console.log(`${this.id} animation has stopped (too long between steps)`)),!0!==this.animationGapCheck){const t=this.animationGapCheck;t.push(e),t.length>4&&t.shift(),4===t.length&&t.reduce(((t,e)=>t+e),0)<=400&&(this.animationGapCheck=!0,Ra.session&&console.log(`${this.id} animation has started`))}}this.lastAnimationEnd=t}if(!this.connected)return void(this.isInBackground()||this.checkForConnection(!0));if(!this.vm)return;let a;switch(t){case"animation":{const t=e.expectedSimFPS,s=Date.now(),n=Va.reduce(((t,e)=>t+e),0)/Va.length;if(a=this.simulate(s+Math.min(n,200)),!1===a){const e=0===t?0:1e3/t*4;this.backlog>e&&(a=this.simulate(s+200-n))}"error"!==a&&(Va.push(Date.now()-s),Va.length>4&&Va.shift());break}case"fastForward":case"background":a=this.simulate(Date.now()+e.budget);break;default:console.warn(t)}this.fastForwardHandler&&this.fastForwardHandler(a),"error"!==a&&(ot.begin("update"),this.processModelViewEvents("animation"===t),ot.end("update"),this.serviceRateLimitBuffer(),"animation"===t&&(e.view&&(ot.begin("render"),this.inViewRealm((()=>e.view.update(e.frameTime))),ot.end("render")),this.lastAnimationEnd=Date.now()))}applySyncChange(t){Ra.session&&console.log(this.id,`synced=${t}`),this.synced=t,Rt.showSyncWait(!t),this.vm.publishFromView(this.viewId,"synced",t)}inViewRealm(t){return Ft(this.vm,(()=>t(this.vm)))}processModelViewEvents(t){return this.vm?this.vm.processModelViewEvents(t):0}timeFromReflector(t,e,s){t<this.reflectorTime?("controller"!==e||Ra.ticks)&&console.warn(`time is ${this.reflectorTime}, ignoring time ${t} from ${e}`):("boolean"!=typeof this.synced&&(this.synced=!1),this.reflectorTime=t,this.extrapolatedTimeBase=Date.now()-t,this.vm&&ot.backlog(this.backlog),this.tickHook&&this.tickHook(t,s))}multiplyTick(t){this.localTicker&&globalThis.clearInterval(this.localTicker);const e=this.msPerTick,s=this.tickMultiplier;let n=1;this.localTicker=globalThis.setInterval((()=>{this.timeFromReflector(Math.round(t+n*e),"controller"),Ra.ticks&&console.log(this.id,"Controller generate TICK "+this.reflectorTime,n),++n>=s&&(globalThis.clearInterval(this.localTicker),this.localTicker=0)}),e)}startStepping(t){const e=s=>{this.leaving||(this.isOutOfSight()||t(s),window.requestAnimationFrame(e))};window.requestAnimationFrame(e)}setUpActivityChecks(){let t=null;if(this.isOutOfSight=()=>!(ka||"hidden"!==document.visibilityState&&t),this.isBeingAnimated=()=>{const t=!0===this.animationGapCheck,e=Date.now()-this.lastAnimationEnd<200;return t&&!e&&(this.animationGapCheck=[],Ra.session&&console.log(`${this.id} animation has stopped (too long since last step)`)),t&&e},this.isInBackground=()=>this.isOutOfSight()||!this.isBeingAnimated(),!ka){new IntersectionObserver(((e,s)=>t=e[0].isIntersecting)).observe(document.body)}const e=this.sessionSpec.autoSleep;let s;if(e){const t=1e3*e;let n=0,i=0;s=()=>{const e=Date.now();e-n<980||(n=e,this.isOutOfSight()?i?e-i>t&&(this.dormantDisconnect(),i=0):i=e:i=0)}}const n=()=>{this.leaving?i&&(clearInterval(i),i=null):this.connected&&this.vm&&(s&&s(),this.isBeingAnimated()||this.connection.keepAlive(Date.now()))};let i=setInterval(n,1e3);this.simulateIfNeeded=()=>{if(!this.isBeingAnimated()&&(n(),!this.fastForwardHandler&&this.connected)){let t=.9*this.msPerTick;e&&(t=Math.min(t,200));const s=this.synced?"background":"fastForward";this.stepSession(s,{budget:t})}}}toString(){return`Controller[${this.id}]`}[Symbol.toPrimitive](){return this.toString()}}class Fa{constructor(t){this.controller=t,this.socketLastSent=0,this.connectBlocked=!1,this.connectRestricted=!1,this.connectHasBeenCalled=!1,this.reconnectDelay=0,this.missingTickThreshold=1/0}get id(){return this.controller.id}setTick(t){this.missingTickThreshold=Math.min(3*t,45e3)}get connected(){return!(!this.socket||this.socket.readyState!==WebSocket.OPEN)}checkForConnection(t){this.socket||this.connectHasBeenCalled||this.connectBlocked||this.connectRestricted&&!t||this.connectToReflector()}connectToReflector(){if(this.socket||this.connectHasBeenCalled)return;this.connectHasBeenCalled=!0,this.connectBlocked=!1,this.connectRestricted=!1;let t=Ca(this.controller.sessionSpec.apiKey).reflector;const e={},s=this.controller.sessionSpec.token;if(s&&(e.token=s),r.reflector){const s=r.reflector.toUpperCase();"CF"===s||s.match(/^[A-Z]{3}$/)?(t=Ra.reflector?"wss://croquet.network/reflector/dev/":"wss://croquet.network/reflector/",3===s.length&&(e.colo=s)):r.reflector.match(/^[-a-z0-9]+$/i)?e.region=r.reflector:t=r.reflector}if(!t.match(/^wss?:/))throw Error("Cannot interpret reflector address "+t);t.endsWith("/")||(t+="/");const n=new URL(t+this.id);for(const[t,s]of Object.entries(e))n.searchParams.append(t,s);const i=new WebSocket(n);i.onopen=t=>{const e=this.socket;e&&(e.onopen=e.onmessage=e.onerror=e.onclose=null),this.socket=i,this.connectHasBeenCalled=!1,Ra.session&&console.log(this.id,this.socket.constructor.name,"connected to",this.socket.url),this.reconnectDelay=0,ot.connected(!0),this.controller.sendJoin()},i.onmessage=t=>{ot.addNetworkTraffic("reflector_in",t.data.length),i===this.socket&&this.receive(t.data)},i.onerror=t=>{Ra.session&&console.log(this.id,i.constructor.name,"connection error"),this.connectHasBeenCalled=!1,this.controller.clearSyncReceiptTimeout()},i.onclose=t=>{this.socketClosed(t.code,t.reason)}}socketClosed(t,e){this.controller.clearSyncReceiptTimeout();const s=1e3!==t&&t<4100,n=4110===t;n||1e3===t||this.reconnectDelay||setTimeout((()=>{this.connected||Rt.showMessage(`Connection closed: ${t} ${e}`,{level:s?"error":"fatal"})}),500),Ra.session&&console.log(this.id,`${this.socket?this.socket.constructor.name+" closed":"closed before opening,"} with code: ${t} ${e}`),ot.connected(!1),n?this.connectRestricted=!0:this.connectBlocked=!0,this.disconnected(),s&&(Ra.session&&console.log(this.id,`reconnecting in ${this.reconnectDelay} ms`),this.reconnectTimeout=globalThis.setTimeout((()=>{delete this.reconnectTimeout,this.connectToReflector()}),this.reconnectDelay),this.reconnectDelay=Math.min(3e4,Math.round((this.reconnectDelay+100)*(1+Math.random()))))}disconnected(){this.socket&&(this.socket=null,this.lastReceived=0,this.socketLastSent=0,this.stalledSince=0,this.connectHasBeenCalled=!1,this.controller.connectionInterrupted())}send(t){this.socketLastSent=Date.now(),this.socket.send(t),ot.addNetworkTraffic("reflector_out",t.length)}receive(t){this.lastReceived=Date.now();const{id:e,action:s,args:n}=JSON.parse(t);if(e)try{this.controller.receive(s,n)}catch(t){this.closeConnectionWithError("receive",t)}else if("PONG"===s){if(Ra.pong&&console.log("PONG after",Date.now()-n,"ms"),this.pongHook)try{this.pongHook(n)}catch(t){console.error(t)}}else console.warn("Unknown action",s)}dormantDisconnect(){this.connected&&(Ra.session&&console.log(this.id,"dormant; disconnecting from reflector"),this.closeConnection(4110,"Going dormant"))}closeConnectionWithError(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4e3;console.error(e),console.warn("closing socket"),s>=4100&&4110!==s&&(this.controller.leaving=()=>{}),this.closeConnection(s,"Error in "+t)}closeConnection(t,e){this.socket&&(this.socket.onclose=null,this.socket.close(t,e),this.socketClosed(t,e))}PULSE(t){this.connected&&(0===this.socket.bufferedAmount?(this.send(JSON.stringify({action:"PULSE"})),this.stalledSince=0):this.stalledSince&&t-this.stalledSince>500?console.log(`${this.id} Reflector connection stalled: ${this.socket.bufferedAmount} bytes unsent for ${t-this.stalledSince} ms`):this.stalledSince=Date.now())}keepAlive(t){0!==this.lastReceived&&(t-this.socketLastSent>25e3?this.PULSE(t):t-this.lastReceived>5e4?this.closeConnectionWithError("connection",Error("Reflector has gone away")):t-this.lastReceived>this.missingTickThreshold&&this.PULSE(t))}PING(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();this.connected&&this.send(JSON.stringify({action:"PING",args:t}))}}globalThis.setInterval((()=>{for(const t of Ka)t.connected&&t.vm&&t.connection.keepAlive(Date.now())}),100);const Na=Symbol("hash"),_a=Symbol("key"),ja=Symbol("url"),Qa=new Map;function Ea(t){return r.has("debug",t,!1)}function Ja(t){return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ua(t){return t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+3&-4,"=")}function Da(t,e){return e.replace(/[\s\S]/g,(e=>String.fromCharCode(e.charCodeAt(0)^t.charCodeAt(0))))}class Oa{static async store(t,e){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("object"==typeof t&&(console.warn("Deprecated: Croquet.Data.store(sessionId, data) called without sessionId"),e=t),cl.hasCurrent())throw Error("Croquet.Data.store() called from Model code");const{appId:n,persistentId:i,uploadEncrypted:o}=Ha(t),r=w.random(32).toString(hi),a=`apps/${n}/${i}/data/%HASH%`,l=await o({path:a,content:e,key:r,keep:s,debug:Ea("data"),what:"data"}),c=function(t){return t.replace(/.*\//,"")}(l);return new Oa(c,r,l)}static async fetch(t,e){if("object"==typeof t&&(console.warn("Deprecated: Croquet.Data.fetch(sessionId, handle) called without sessionId"),e=t),cl.hasCurrent())throw Error("Croquet.Data.fetch() called from Model code");const{downloadEncrypted:s}=Ha(t),n=e&&e[Na],i=e&&e[_a],o=e&&e[ja];if("string"!=typeof n||"string"!=typeof i||"string"!=typeof o)throw Error("Croquet.Data.fetch() called with invalid handle");return s({url:o,key:i,debug:Ea("data"),what:"data"})}static hash(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base64url";"function"==typeof t&&(t=Function.prototype.toString.call(t)),"string"==typeof t?t=(new TextEncoder).encode(t):t&&t.constructor===DataView?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t&&t.constructor===ArrayBuffer?t=new Uint8Array(t):ArrayBuffer.isView(t)||(t=(new TextEncoder).encode(y(t)));const s=v(w.create(t));switch(e){case"hex":return s.toString();case"base64":return s.toString(hi);case"base64url":return Ja(s.toString(hi));default:throw Error(`Croquet.Data: unknown hash output "${e}", expected "hex"/"base64"/"base64url"`)}}static fromId(t){const e=t.slice(0,1);let s,n,i,o;switch(e){case"0":s=t.slice(1,44),n=t.slice(44),i=`https://files.croquet.io/sessiondata/${s}`;break;case"1":s=t.slice(1,44),n=t.slice(44,87)+"=",o=t.slice(87),i=`https://files.croquet.io/apps/${o}/data/${s}`;break;case"2":s=t.slice(1,44),n=Ua(t.slice(44,87)),o=Da(n,atob(Ua(t.slice(87)))),i=`https://files.croquet.io/apps/${o}/data/${s}`;break;case"3":n=Ua(t.slice(1,44)),i=Da(n,atob(Ua(t.slice(44)))),s=i.slice(-43);break;default:throw Error(`Croquet.Data expected handle v0-v3 got v${e}`)}return new this(s,n,i)}static toId(t){if(!t)return"";const e=t[Na],s=t[_a],n=t[ja];if(n.slice(-43)!==e)throw Error("Croquet Data: malformed URL");return`3${Ja(s)}${Ja(btoa(Da(s,n)))}`}constructor(t,e,s){const n=Qa.get(t);if(n)return Ea("data")&&console.log(`Croquet.Data: using cached handle for ${t}`),n;if(s.slice(-43)!==t)throw Error("Croquet Data: malformed URL");Object.defineProperty(this,Na,{value:t}),Object.defineProperty(this,_a,{value:e}),Object.defineProperty(this,ja,{value:s}),Qa.set(t,this),Ea("data")&&console.log(`Croquet.Data: created new handle for ${t}`)}}const Ba={cls:Oa,write:t=>Oa.toId(t),read:t=>Oa.fromId(t)};let Aa=null,$a=null;class qa extends Error{}function tl(){if(!globalThis.CroquetViewMath){globalThis.CroquetMath.random=()=>Aa.random(),globalThis.CroquetViewMath={...Math};for(const[t,e]of Object.entries(globalThis.CroquetMath)){const s=Math[t];Math[t]=1===e.length?t=>Aa?e(t):s(t):(t,n)=>Aa?e(t,n):s(t,n)}}if(!globalThis.CroquetViewDate){const n=globalThis.Date;let i=!1;function o(t,e){return i||(i=!0,console.warn(new qa(`${t} used in Model code`))),e}function r(t,e,s,i,a,l,c){const d=this instanceof r,h=[t,e,s,i,a,l,c];if(h.length=arguments.length,Aa)switch(o(d?"new Date()":"Date()"),arguments.length){case 0:h.push(Aa.time);break;case 1:break;default:h[0]=n.UTC(...h),h.length=1}const u=new n(...h);return d?u:""+u}r.prototype=n.prototype,r.UTC=n.UTC,r.now=()=>Aa?o("Date.now()",Aa.time):n.now(),r.parse=function(){return Aa?o("Date.parse()",0):n.parse(...arguments)},globalThis.CroquetViewDate=n,globalThis.Date=r}}Object.defineProperty(qa.prototype,"name",{value:"CroquetWarning"});const el={};function sl(t,e){const{qPara:s,qArgs:n,qFn:i}=JSON.parse(atob(t.slice(1,-1))),o=JSON.stringify(s),r=el[o]||(el[o]=new Function(...s));return"number"==typeof i&&(n[i]=r),r.call(e,...n).bind(e)}function nl(t,e){if(Aa)throw Error("VirtualMachine confusion");if(!(t instanceof cl))throw Error("not a VM: "+t);const s=Aa;try{Aa=t,globalThis.CROQUETVM=t,e()}finally{Aa=s}}const il=["handleModelEventInModel","handleBundledEvents","publishFromModelOnly","handlePollForSnapshot","handleTuttiResult","handleTuttiDivergence","handleSnapshotVote","handlePersistVote","handleModelEventInView","noop"],ol={};for(let t=0;t<il.length;t++)ol[il[t]]=t;const rl=new WeakMap;function al(t){rl.set(t,null)}class ll{random(){throw Error("Math.random() cannot be used in Model.evaluate()")}}class cl{static current(){return Aa||console.warn("VirtualMachine.current() called from outside the vm!"),Aa}static hasCurrent(){return!!Aa}static evaluate(t){if(Aa)return t();tl();const e=Aa;try{return Aa=new ll,t()}finally{Aa=e}}constructor(t,e){tl(),$a={snapshot:r.has("debug","snapshot",!1),session:r.has("debug","session",!1)},al(this),nl(this,(()=>{zt(this,(()=>{if(this.modelsById={},this.modelsByName={},this.messages=new ci(((t,e)=>t.before(e))),this.subscriptions={},this.subscribers=new Map,this.views={},this._random=()=>{throw Error("You must not use random when applying state!")},this.id=t.id,this.time=0,this.seq=4294967280,this.externalTime=0,this.externalSeq=this.seq,this.futureSeq=0,this.lastSnapshotPoll=0,this.lastPersistencePoll=0,this.inPersistenceCoolOff=!1,this.persisted="",this.modelsId=0,this.controller=null,t.modelsById){const e=yl.newOrRecycled(this).readVM(t,"vm");let s=[];for(const t of Object.keys(e))t in this||"meta"===t?"messages"===t?s=e.messages:this[t]=e[t]:console.warn(`Ignoring property snapshot.${t}`);for(const t of s)this.messages.add(t.convertIfNeeded(this));for(const[t,e]of Object.entries(this.subscriptions))for(const s of e){const[e]=s.split(".");let n=this.subscribers.get(e);n||this.subscribers.set(e,n=new Set),n.add(t)}}else this._random=new p(t.id,{state:!0}),this.addSubscription(this,"__VM__","__peers__",this.generateJoinExit),e(this)}))}))}registerModel(t,e){if(Aa!==this)throw Error("You can only create models from model code!");return e||(e="M"+ ++this.modelsId),this.modelsById[e]=t,e}deregisterModel(t){if(Aa!==this)throw Error("You can only destroy models from model code!");const e=this.modelsById;delete this.modelsById[t];for(const[t,s]of Object.entries(this.modelsByName))e===s&&delete this.modelsByName[t];this.messages.removeMany((e=>e.hasReceiver(t)))}lookUpModel(t){if("_"===t)return this;const e=this.modelsById[t];if(e)return e;const[s,n,i]=t.match(/^([^#]+)#(.*)$/);return this.modelsById[n].lookUp(i)}get(t){return this.modelsByName[t]}set(t,e){if(Aa!==this)throw Error("You can only make a model well-known from model code!");this.modelsByName[t]=e}noop(){}generateJoinExit(t){let{entered:e,exited:s,count:n}=t;if(e.length===n){s=Object.keys(this.views);for(const t of s)this.views[t].extraConnections=0}if(0!==e.length&&0!==s.length){const t=e.filter((t=>s.includes(t)));if(0!==t.length&&(e=e.filter((e=>!t.includes(e))),s=s.filter((e=>!t.includes(e))),0===e.length&&0===s.length))return}for(const t of s)if(this.views[t]){if(this.views[t].extraConnections){this.views[t].extraConnections--,$a.session&&console.log(`${this.id} @${this.time}#${this.seq} view ${t} closed extra connection`);continue}delete this.views[t],this.publishFromModelOnly(this.id,"view-exit",t)}else console.error(`${this.id} @${this.time}#${this.seq} view ${t} exited without being present - this should not happen`),this.controller.sendLog(`view-exit-mismatch @${this.time}#${this.seq} ${t} left without being present`);for(const t of e)this.views[t]?($a.session&&console.log(`${this.id} @${this.time}#${this.seq} view ${t} opened another connection`),this.views[t].extraConnections=(this.views[t].extraConnections||0)+1):(this.views[t]={},this.publishFromModelOnly(this.id,"view-join",t));const i=Object.values(this.views).reduce(((t,e)=>t+1+(e.extraConnections||0)),0);n!==i&&(console.error(`@${this.time}#${this.seq} view count mismatch (model: ${i}, reflector: ${n}) - this should not happen`),this.controller.sendLog(`view-exit-mismatch @${this.time}#${this.seq} connections model: ${i} reflector: ${n}`))}scheduleExternalMessage(t){const e=ml.fromState(t,this);if(e.time<this.time)throw Error("past message from reflector "+t);const s=this.externalSeq+1>>>0;if(e.seq!==s)throw Error(`External message error. Expected message #${s} got #${e.seq}`);return this.externalTime=e.time,this.externalSeq=e.seq,e.seq=2*e.seq+1,this.verifyExternal(e),this.messages.add(e),e}verifyExternal(t){if("_"!==t.receiver)throw Error(`invalid receiver in external message: ${t}`);if(!(t.selector in ol))throw Error(`unexpected external message: ${t.selector}`)}futureSend(t,e,s,n){if(t.every)return this.futureRepeat(t.every,e,s,n);if(t<0)throw Error("attempt to send future message into the past");this.futureSeq=this.futureSeq+1>>>0;const i=new ml(this.time+t,2*this.futureSeq,e,s,n);return this.messages.add(i),i}cancelFuture(t,e){const s=this.messages;let n;if("time"in e){const{time:t,seq:i}=e;n=s.removeOne((e=>e.time===t&&e.seq===i))}else{const i=this.asQFunc(t,e,"cancelFuture message"),o=t.id;n=s.removeOne((t=>t.receiver===o&&t.selector===i||"_"===t.receiver&&"futureExecAndRepeat"===t.selector&&t.args[1]===o&&t.args[2]===i))}return void 0!==n}futureRepeat(t,e,s,n){this.futureSend(t,"_","futureExecAndRepeat",[t,e,s,n])}futureExecAndRepeat(t,e,s,n){const i=this.lookUpModel(e);if("function"==typeof i[s])try{i[s](...n)}catch(t){yt(`future message ${i}.${s}`,t)}else{const t=sl(s,i);try{t(...n)}catch(e){yt(`future message ${i} ${t}`,e)}}this.futureRepeat(t,e,s,n)}future(t,e,s,n){const i=this.asQFunc(t,s,"future message");if("string"==typeof i)return this.futureSend(e,t.id,i,n);const o=this;return new Proxy(t,{get(s,n){if("function"==typeof t[n])return function(){if(o.lookUpModel(t.id)!==t)throw Error("future send to unregistered model");for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return o.futureSend(e,t.id,n,i)};throw Error("Tried to call "+n+"() on future of "+Object.getPrototypeOf(t).constructor.name+" which is not a function")}})}advanceTo(t,e){if(Aa)throw Error("cannot advance time from model code");let s;for(;(s=this.messages.peek())&&s.time<=t;){const{time:t,seq:n}=s;if(t<this.time)throw Error("past message encountered: "+s);if(1&n&&(this.seq=this.seq+1>>>0,n/2>>>0!==this.seq))throw Error(`Sequence error: expected ${this.seq} got ${n/2>>>0} in ${s}`);if(this.messages.poll(),this.time=s.time,s.executeOn(this),globalThis.CroquetViewDate.now()>=e)return!1}return this.time=t,!0}asQFunc(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"subscription handler";if("string"==typeof e)return e;if("function"==typeof e){if(t[e.name]===e)return e.name;let n=t;for(;null!==n;){for(const[t,s]of Object.entries(Object.getOwnPropertyDescriptors(n)))if(s.value===e)return t;n=Object.getPrototypeOf(n)}ft(`${s} is not a method of ${t}: ${e}\n`,{only:"once"});const i=/^\(?([a-z][a-z0-9]*)?\)? *=> *this\.([a-z][a-z0-9]*) *\( *([a-z][a-z0-9]*)? *\) *$/i,o=e.toString().match(i);return!o||o[3]&&o[3]!==o[1]?function(t,e){"function"==typeof t&&(e=t,t={});const s=Object.keys(t).concat(["return "+e]),n=Object.values(t),i={qPara:s,qArgs:n},o=n.indexOf(e);return o>=0&&(n[o]=s[o],i.qFn=o),`{${btoa(JSON.stringify(i))}}`}(e):o[2]}return null}addSubscription(t,e,s,n){if(Aa!==this)throw Error("Cannot add a model subscription from outside model code");const i=this.asQFunc(t,n);if("string"!=typeof i)throw Error(`Subscription handler for "${s}" must be a method name`);if(i.indexOf(".")<0&&"function"!=typeof t[i]&&"{"!==i[0])throw Error(`Subscriber method for "${s}" not found: ${t}.${i}()`);const o=e+":"+s,r=t===this?"_":t.id,a=r+"."+i;if(this.subscriptions[o]){if(-1!==this.subscriptions[o].indexOf(a))throw Error(`${t}.${i} already subscribed to ${s}`)}else this.subscriptions[o]=[];this.subscriptions[o].push(a);let l=this.subscribers.get(r);l||this.subscribers.set(r,l=new Set),l.add(o)}removeSubscription(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"*";if(Aa!==this)throw Error("Cannot remove a model subscription from outside model code");const i=e+":"+s,o=this.subscriptions[i];if(o){const e=t.id+".";if("*"===n){for(let t=o.length-1;t>=0;t--)o[t].startsWith(e)&&o.splice(t,1);0===o.length&&delete this.subscriptions[i]}else{const r=this.asQFunc(t,n);if("string"!=typeof r)throw Error(`Invalid unsubscribe args for "${s}" in ${t}: ${n}`);const a=e+r,l=o.indexOf(a);if(-1!==l&&(o.splice(l,1),0===o.length&&delete this.subscriptions[i]),o.find((t=>t.startsWith(e))))return}const r=this.subscribers.get(t.id);r.delete(i),0===r.size&&this.subscribers.delete(t.id)}}removeAllSubscriptionsFor(t){const e=this.subscribers.get(t.id);if(e){const s=t.id+".";for(const t of e){const e=this.subscriptions[t];for(let t=e.length-1;t>=0;t--)e[t].startsWith(s)&&e.splice(t,1);0===e.length&&delete this.subscriptions[t]}this.subscribers.delete(t.id)}}publishFromModel(t,e,s){if(Aa!==this)throw Error("Cannot publish a model event from outside model code");const n=e.endsWith("#reflected");n&&(e=e.slice(0,e.length-"#reflected".length));const i=t+":"+e;this.handleModelEventInModel(i,s,n),this.handleModelEventInView(i,s)}publishFromModelOnly(t,e,s){if(Aa!==this)throw Error("Cannot publish a model event from outside model code");const n=t+":"+e;this.handleModelEventInModel(n,s)}publishFromView(t,e,s){if(Aa)throw Error("Cannot publish a view event from model code");const n=t+":"+e;this.handleViewEventInModel(n,s),this.handleViewEventInView(n,s)}handleBundledEvents(t){for(const e of t){const t=ml.fromState(e,this);this.verifyExternal(t),t.executeOn(this,!0)}}handleModelEventInModel(t,e){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Aa!==this)throw Error("handleModelEventInModel called from outside model code");if(s){if(!0!==this.controller.synced)return;const s=t+"#__vote",n=t+"#divergence",i=!!Vt.subscriptions[s],o=!!this.subscriptions[t],r=!!this.subscriptions[n];i&&r&&console.log(`divergence subscription for ${t} overridden by vote subscription`);const a=o?new ml(this.time,0,"_","handleModelEventInModel",[t,e]):null;let l;l=i?["handleModelEventInView",s]:["handleTuttiDivergence",n],Promise.resolve().then((()=>this.controller.sendTutti({time:this.time,topic:t,data:e,firstMessage:a,wantsVote:i,tallyTarget:l})))}else if(this.subscriptions[t])for(const s of this.subscriptions[t]){const[n,...i]=s.split("."),o=i.join("."),r=this.lookUpModel(n);if(r)if("{"!==o[0])if(o.indexOf(".")>=0){const s=o.indexOf("."),n=o.slice(0,s),i=o.slice(s+1);try{r.call(n,i,e)}catch(e){yt(`event ${t} ${r}.call(${JSON.stringify(n)}, ${JSON.stringify(i)})`,e)}}else if("function"==typeof r[o])try{r[o](e)}catch(e){yt(`event ${t} ${r}.${o}()`,e)}else yt(`event ${t} ${r}.${o}(): method not found`);else{const s=sl(o,r);try{s(e)}catch(e){yt(`event ${t} ${r} ${s}`,e)}}else ft(`event ${t} .${o}(): subscriber not found`)}}handleViewEventInModel(t,e){if(this.subscriptions[t]){const s=[t];void 0!==e&&s.push(e);const n=new ml(this.time,0,"_","handleModelEventInModel",s);this.controller.sendMessage(n)}}handleModelEventInView(t,e){Vt.handleEvent(t,e,(t=>function(t){if(!Aa)throw Error("VirtualMachine confusion");const e=Aa;try{Aa=null,t()}finally{Aa=e}}((()=>Ft(this,t,!0)))))}handleViewEventInView(t,e){Vt.handleEvent(t,e)}handleTuttiDivergence(t,e){if(this.subscriptions[t])this.handleModelEventInModel(t,e);else{const s=t.split(":").slice(-1)[0];console.warn(`uncaptured divergence in ${s}:`,e)}}processModelViewEvents(t){if(Aa)throw Error("cannot process view events in model code");return Ft(this,(()=>Vt.processFrameEvents(t,!!this.controller.synced)))}handlePollForSnapshot(){const t=this.time,e=t-this.lastSnapshotPoll;e<5e3?console.log(`rejecting snapshot poll ${e}ms after previous`):(this.lastSnapshotPoll=t,this.controller.handlePollForSnapshot(t))}handleTuttiResult(t){this.controller.handleTuttiResult(t)}handleSnapshotVote(t){this.controller.handleSnapshotVote(t)}handlePersistVote(t){this.controller.handlePersistVote(t)}snapshot(){return bl.newOrRecycled(this).snapshot(this,"_")}getSummaryHash(){return y((new fl).getHash(this))}persist(t,e){this.controller&&"no.appId"===this.controller.sessionSpec.appId&&console.warn("Croquet: appId should be provided in Session.join() to not overwrite another apps's persistent data");const s=ot.begin("snapshot"),n="function"==typeof e?e.call(t):e;if("object"!=typeof n)throw Error(`Croquet: persistSession() can only persist objects (got ${typeof n})`);const i=y(n),o=Oa.hash(i),r=ot.end("snapshot")-s,a=this.persisted===o,l=this.time;var c,d;if($a.snapshot&&console.log(`${this.id} persistent data @${l} collected, stringified and hashed in ${Math.ceil(r)}ms${a?" (unchanged, ignoring)":""}`),!a)if(c=this,d={persistTime:l,persistentString:i,persistentHash:o,ms:r},rl.set(c,d),this.persisted=o,this.inPersistenceCoolOff)$a.snapshot&&console.log(`${this.id} persistence poll postponed by cooloff`);else{const t=this.lastPersistencePoll?this.lastPersistencePoll+25e3-this.time:0;t>0?($a.snapshot&&console.log(`${this.id} postponing persistence poll by ${t}ms`),this.futureSend(t,"_","triggerPersistencePoll",[]),this.inPersistenceCoolOff=!0):this.triggerPersistencePoll()}}triggerPersistencePoll(){this.inPersistenceCoolOff=!1,this.lastPersistencePoll=this.controller?this.time:0;const t=(e=this,rl.get(e));var e;if(!t)return;const{persistTime:s,persistentString:n,persistentHash:i,ms:o}=t;if(al(this),this.controller&&this.controller.synced){$a.snapshot&&console.log(`${this.id} asking controller to poll for persistence @${s}`);const t=this.time;Promise.resolve().then((()=>this.controller.pollForPersist(t,s,n,i,o)))}}random(){if(Aa!==this)throw Error("synchronized random accessed from outside the model");return this._random()}randomID(){if(Aa!==this)throw Error("synchronized random accessed from outside the model");let t="";for(let e=0;e<4;e++)t+=(this._random.int32()>>>0).toString(16).padStart(8,"0");return t}toString(){return`VirtualMachine[${this.id}]`}[Symbol.toPrimitive](){return this.toString()}}function dl(t,e,s){let n;if("_"===t){const t=ol[e];"number"==typeof t&&(n=t.toString(36))}if(void 0===n&&(n=`${t}>${e}`),s.length>0){const t=gl.newOrRecycled();n+=JSON.stringify(t.encode(s))}return n}function hl(t,e){let s,n,i;if(1===t.length||"["===t[1]){const e=parseInt(t[0],36);s="_",n=il[e],i=t.slice(1)}else{const e=t.indexOf(">");let o=t.indexOf("[");-1===o&&(o=t.length),s=t.slice(0,e),n=t.slice(e+1,o),i=t.slice(o)}let o=[];if(i){o=Zl.newOrRecycled(e).decode(JSON.parse(i))}return{receiver:s,selector:n,args:o}}function ul(t,e){return(e-t|0)>=0}class ml{constructor(t,e,s,n,i){this.time=t,this.seq=e,this.receiver=s,this.selector=n,this.args=i}convertIfNeeded(t){if(this.payload){const{receiver:e,selector:s,args:n}=hl(this.payload,t);delete this.payload,this.receiver=e,this.selector=s,this.args=n}return this}before(t){return this.time!==t.time?this.time<t.time:this.isExternal()!==t.isExternal()?t.isExternal():this.isExternal()?ul(this.externalSeq,t.externalSeq):ul(this.internalSeq,t.internalSeq)}hasReceiver(t){return this.receiver===t}isExternal(){return 1&this.seq}get externalSeq(){return this.seq/2>>>0}set externalSeq(t){this.seq=2*t+1}get internalSeq(){return this.seq/2>>>0}set internalSeq(t){this.seq=2*t}asState(){return[this.time,this.seq,dl(this.receiver,this.selector,this.args)]}static fromState(t,e){const[s,n,i]=t,{receiver:o,selector:r,args:a}=hl(i,e);return new ml(s,n,o,r,a)}executeOn(t){const e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t=>t():e=>nl(t,(()=>zt(t,e))),{receiver:s,selector:n,args:i}=this,o=t.lookUpModel(s);if(o)if("{"===n[0]){const t=sl(n,o);e((()=>{try{t(...i)}catch(e){yt(`${this.shortString()} ${t}`,e)}}))}else n.indexOf(".")>=0?e((()=>{const t=n.indexOf("."),e=n.slice(0,t),s=n.slice(t+1);try{o.call(e,s,...i)}catch(t){yt(`${this.shortString()} ${o}.call(${JSON.stringify(e)}, ${JSON.stringify(s)})`,t)}})):"function"!=typeof o[n]?ft(`${this.shortString()} ${o}.${n}(): method not found`):e((()=>{try{o[n](...i)}catch(t){yt(`${this.shortString()} ${o}.${n}()`,t)}}));else ft(`${this.shortString()} ${n}(): receiver not found`)}shortString(){return(this.isExternal()?"External":"Future")+"Message"}toString(){const{receiver:t,selector:e,args:s}=this,n=this.isExternal(),i=n?this.externalSeq:this.internalSeq;return`${n?"External":"Future"}Message[${this.time}${":#"[+n]}${i} ${t}.${e}(${s.map(JSON.stringify).join(", ")})]`}[Symbol.toPrimitive](){return this.toString()}}const pl=(()=>{const t=new ArrayBuffer(8),e=new DataView(t);return t=>(e.setFloat64(0,t,!0),e.getInt32(0,!0)+e.getInt32(4,!0))})();class fl{constructor(){this.refs=new Map,this.todo=[],this.hashers=new Map,this.addHasher("Teatime:Message",ml),this.addHasher("Teatime:Data",Ba);for(const[t,e]of Gl.allClassTypes())this.addHasher(t,e)}addHasher(t,e){const{cls:s,write:n}=Object.getPrototypeOf(e)===Object.prototype?e:{cls:e,write:t=>({...t})};this.hashers.set(s,(t=>this.hashStructure(t,n(t))))}getHash(t){this.hashState={oC:0,mC:0,nanC:0,infC:0,zC:0,nC:0,nH:0,sC:0,sL:0,fC:0};for(const[e,s]of Object.entries(t))if("controller"!==e&&"meta"!==e)if("_random"===e)this.hash(s.state(),!1);else if("messages"===e){const t=s.asArray();(this.hashState.fC=t.length)&&this.hash(t,!1)}else this.hashEntry(e,s);return this.hashDeferred(),this.hashState}hashDeferred(){for(;this.todo.length>0;){const{key:t,value:e}=this.todo.shift();this.hashEntry(t,e,!1)}}hash(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof t){case"number":return void(Number.isNaN(t)?this.hashState.nanC++:Number.isFinite(t)?0===t?this.hashState.zC++:(this.hashState.nC++,this.hashState.nH+=pl(t)):this.hashState.infC++);case"string":return this.hashState.sC++,void(this.hashState.sL+=t.length);case"boolean":case"undefined":return;default:if(this.refs.has(t))return;switch(Object.prototype.toString.call(t).slice(8,-1)){case"Array":return void this.hashArray(t,e);case"ArrayBuffer":return void this.hashIntArray(new Uint8Array(t),!1);case"Set":case"Map":return void this.hashStructure(t,[...t]);case"DataView":return void this.hashIntArray(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),!1);case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":return void this.hashIntArray(t,!1);case"Float32Array":case"Float64Array":return void this.hashArray(t,!1);case"Object":if(t instanceof Gl)this.hashModel(t);else if(t.constructor===Object)this.hashObject(t,e);else{const e=this.hashers.get(t.constructor);e&&e(t)}}}}hashModel(t){this.hashState.mC++,this.refs.set(t,!0);for(const[e,s]of Object.entries(t))"__realm"!==e&&void 0!==s&&this.hashEntry(e,s)}hashObject(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.hashState.oC++,this.refs.set(t,!0);for(const[s,n]of Object.entries(t))void 0!==n&&this.hashEntry(s,n,e)}hashArray(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.refs.set(t,!0);for(let s=0;s<t.length;s++)this.hashEntry(s,t[s],e)}hashIntArray(t){this.refs.set(t,!0);for(let e=0;e<t.length;e++){const s=t[e];0===s?this.hashState.zC++:(this.hashState.nC++,this.hashState.nH+=s)}}hashStructure(t,e){void 0!==e&&(this.refs.set(t,!0),this.hash(e,!1))}hashEntry(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];"$"!==t[0]&&(s&&"object"==typeof e?this.todo.push({key:t,value:e}):this.hash(e))}}class bl{static newOrRecycled(t){let e=this.reusableInstance;return e?(e.vm=t,e.nextRef=1,e.refs=new Map,e.todo=[]):e=this.reusableInstance=new this(t),e}static get reusableInstance(){return this[this.name+"-instance"]}static set reusableInstance(t){this[this.name+"-instance"]=t}static resetInstance(){this.reusableInstance=null}constructor(t){this.vm=t,this.nextRef=1,this.refs=new Map,this.todo=[],this.writers=new Map,this.addWriter("Teatime:Message",ml),this.addWriter("Teatime:Data",Ba);for(const[t,e]of Gl.allClassTypes())this.addWriter(t,e);this.okayToIgnore={};for(const t of Gl.allClasses())if(Object.prototype.hasOwnProperty.call(t,"okayToIgnore")){const e=t.okayToIgnore();if(!Array.isArray(e))throw new Error("okayToIgnore() must return an array");for(const t of e){if("$"!==t[0])throw Error(`okayToIgnore: ignored prop "${t}" must start with '$'`);this.okayToIgnore[t]=!0}}}addWriter(t,e){const{cls:s,write:n}=Object.getPrototypeOf(e)===Object.prototype?e:{cls:e,write:t=>({...t})};this.writers.set(s,((e,s)=>this.writeAs(t,e,n(e),s)))}snapshot(t){const e={_random:t._random.state(),messages:this.write(t.messages.asArray(),"vm.messages"),subscribers:void 0,controller:void 0};for(const[s,n]of Object.entries(t))s in e||this.writeInto(e,s,n,`vm.${s}`);return this.writeDeferred(),e}writeDeferred(){for(;this.todo.length>0;){const{state:t,key:e,value:s,path:n}=this.todo.shift();this.writeInto(t,e,s,n,!1)}}write(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(typeof t){case"number":return Object.is(t,-0)?{$class:"NegZero"}:Number.isSafeInteger(t)?t:Number.isNaN(t)?{$class:"NaN"}:Number.isFinite(t)?this.writeFloat(t):{$class:"Infinity",$value:Math.sign(t)};case"string":case"boolean":return t;case"undefined":return{$class:"Undefined"};default:{if(this.refs.has(t))return this.writeRef(t);const n=Object.prototype.toString.call(t).slice(8,-1);switch(n){case"Array":return this.writeArray(t,e,s);case"ArrayBuffer":return this.writeArrayBuffer(t);case"Set":return this.writeAs(n,t,[...t],e);case"Map":return this.writeAs(n,t,[...t].flat(),e);case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":return this.writeTypedArray(n,t);case"Object":{if(t instanceof Gl)return this.writeModel(t,e);if(t.constructor===Object||"function"!=typeof t.constructor)return this.writeObject(t,e,s);const n=this.writers.get(t.constructor);if(n)return n(t,e);throw console.error(`Croquet: unknown class at ${e}:`,t),Error(`Croquet: class not registered in Model.types(): ${t.constructor.name}`)}case"Null":return t;default:throw console.error(`Croquet: unsupported property at ${e}:`,t),Error(`Croquet: serialization of ${n}s is not supported`)}}}}writeModel(t,e){const s={};this.refs.set(t,s);try{s.$model=Gl.classToID(t.constructor)}catch(s){throw console.error(`unregistered model class at ${e}:`,t),s}for(const n of Object.keys(t).sort()){if("__realm"===n)continue;const i=t[n];this.writeInto(s,n,i,e)}return s}writeObject(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n={};this.refs.set(t,n);for(const i of Object.keys(t).sort()){const o=t[i];this.writeInto(n,i,o,e,s)}return n}writeArray(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=[];this.refs.set(t,n);for(let i=0;i<t.length;i++)this.writeInto(n,i,t[i],e,s);return n}writeArrayBuffer(t){const e={$class:"ArrayBuffer",$value:Xl(t)};return this.refs.set(t,e),e}writeTypedArray(t,e){const s={$class:t,$value:[this.writeArrayBuffer(e.buffer),e.byteOffset,"DataView"===t?e.byteLength:e.length]};return this.refs.set(e,s),s}writeFloat(t){return t}writeAs(t,e,s,n){if(void 0===s)return s;const i={$class:t};this.refs.set(e,i);const o=this.write(s,n,!1);return"object"!=typeof o||o.$class||Array.isArray(o)?i.$value=o:Object.assign(i,o),i}writeRef(t){const e=this.refs.get(t);if("object"!=typeof e)throw Error("Non-object in refs: "+t);Array.isArray(e)&&(e.toJSON=function(){return{$id:this.$id,$class:"Array",$value:[...this]}});return{$ref:e.$id||(e.$id=this.nextRef++)}}writeInto(t,e,s,n){let i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if("$"===e[0])return void(this.okayToIgnore[e]||(ft(`snapshot: ignoring property ${e} (declare as okayToIgnore to suppress warning)`,{only:"once"}),this.okayToIgnore[e]=!0));if(i&&"object"==typeof s)return void this.todo.push({state:t,key:e,value:s,path:n});const o=n+("string"==typeof e&&e.match(/^[_a-z][_a-z0-9]*$/i)?`.${e}`:`[${JSON.stringify(e)}]`),r=this.write(s,o);void 0!==r&&(t[e]=r)}}class yl{static newOrRecycled(t){let e=this.reusableInstance;return e?(e.vm=t,e.refs=new Map,e.todo=[],e.unresolved=[]):e=this.reusableInstance=new this(t),e}static get reusableInstance(){return this[this.name+"-instance"]}static set reusableInstance(t){this[this.name+"-instance"]=t}static resetInstance(){this.reusableInstance=null}constructor(t){this.vm=t,this.refs=new Map,this.todo=[],this.unresolved=[],this.readers=new Map,this.addReader("Teatime:Message",ml),this.addReader("Teatime:Data",Ba),this.readers.set("Undefined",(()=>{})),this.readers.set("NaN",(()=>NaN)),this.readers.set("Infinity",(t=>t*(1/0))),this.readers.set("NegZero",(()=>-0)),this.readers.set("ArrayBuffer",(t=>function(t){const e=globalThis.atob(t),s=e.length,n=new Uint8Array(s);for(let t=0;t<s;t++)n[t]=e.charCodeAt(t);return n.buffer}(t))),this.readers.set("DataView",(t=>new DataView(...t))),this.readers.set("Int8Array",(t=>new Int8Array(...t))),this.readers.set("Uint8Array",(t=>new Uint8Array(...t))),this.readers.set("Uint8ClampedArray",(t=>new Uint8ClampedArray(...t))),this.readers.set("Int16Array",(t=>new Int16Array(...t))),this.readers.set("Uint16Array",(t=>new Uint16Array(...t))),this.readers.set("Int32Array",(t=>new Int32Array(...t))),this.readers.set("Uint32Array",(t=>new Uint32Array(...t))),this.readers.set("Float32Array",(t=>new Float32Array(...t))),this.readers.set("Float64Array",(t=>new Float64Array(...t)));for(const[t,e]of Gl.allClassTypes())this.addReader(t,e)}addReader(t,e){const s="object"==typeof e?e.read:t=>Object.assign(Object.create(e.prototype),t);this.readers.set(t,s)}readVM(t,e){if("vm"!==e)throw Error("VirtualMachine must be root object");const s={_random:new p(null,{state:t._random})};for(const[e,n]of Object.entries(t))s[e]||this.readInto(s,e,n,`vm.${e}`);return this.readDeferred(),this.resolveRefs(),s}readDeferred(){for(;this.todo.length>0;){const{object:t,key:e,value:s,path:n}=this.todo.shift();this.readInto(t,e,s,n,!1)}}resolveRefs(){for(const{object:t,key:e,ref:s,path:n}of this.unresolved){if(!this.refs.has(s))throw Error(`Unresolved ref: ${s} at ${n}[${JSON.stringify(e)}]`);t[e]=this.refs.get(s)}}read(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(typeof t){case"number":case"string":case"boolean":return t;default:{const n=Object.prototype.toString.call(t).slice(8,-1);switch(n){case"Array":return this.readArray(t,e,s);case"Null":return null;case"Object":{const{$class:n,$model:i,$ref:o}=t;if(o)throw Error("refs should have been handled in readInto()");return i?this.readModel(t,e):n?this.readAs(n,t,e):this.readObject(Object,t,e,s)}default:throw Error(`Don't know how to deserialize ${n} at ${e}`)}}}}readModel(t,e){const s=Gl.instantiateClassID(t.$model,t.id);t.$id&&this.refs.set(t.$id,s);for(const[n,i]of Object.entries(t))"id"!==n&&"$"!==n[0]&&this.readInto(s,n,i,e);return s}readObject(t,e,s){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=new t;e.$id&&this.refs.set(e.$id,i);for(const[t,o]of Object.entries(e))"$"!==t[0]&&this.readInto(i,t,o,s,n);return i}readArray(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=[];t.$id&&this.refs.set(t.$id,n);for(let i=0;i<t.length;i++)void 0!==t[i]&&this.readInto(n,i,t[i],e,s);return n}readAsArray(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=t.$value;return t.$id&&(n.$id=t.$id),this.readArray(n,e,s)}readAsSet(t,e){const s=new Set;t.$id&&this.refs.set(t.$id,s);const n=this.read(t.$value,e,!1);for(const t of n)s.add(t);return s}readAsMap(t,e){const s=new Map;t.$id&&this.refs.set(t.$id,s);const n=this.read(t.$value,e,!1);for(let t=0;t<n.length;t+=2)s.set(n[t],n[t+1]);return s}readAsClass(t,e,s){let n={};const i=new Map;if("$value"in e)n=this.read(e.$value,s,!1);else for(const[t,o]of Object.entries(e)){if("$"===t[0])continue;const e=o&&o.$ref;e?this.refs.has(e)?n[t]=this.refs.get(e):(n[t]="<unresolved>",i.set(e,t)):this.readInto(n,t,o,s,!1)}const o=this.readers.get(t)(n,s);o||"Undefined"===t||"NaN"===t||"NegZero"===t||console.warn(`Reading "${t}" returned ${o} at ${s}`),e.$id&&this.refs.set(e.$id,o);for(const[t,e]of i.entries())this.unresolved.push({object:o,key:e,ref:t,path:s});return o}readAs(t,e,s){switch(t){case"Array":return this.readAsArray(e,s);case"Set":return this.readAsSet(e,s);case"Map":return this.readAsMap(e,s);default:return this.readAsClass(t,e,s)}}readRef(t,e,s,n){if(!s||!s.$ref)return!1;const i=s.$ref;return this.refs.has(i)?t[e]=this.refs.get(i):(t[e]="<unresolved>",this.unresolved.push({object:t,key:e,ref:i,path:n})),!0}readInto(t,e,s,n){let i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this.readRef(t,e,s,n))return;if(i&&"object"==typeof s)return void this.todo.push({object:t,key:e,value:s,path:n});const o=n+("string"==typeof e&&e.match(/^[_a-z][_a-z0-9]*$/i)?`.${e}`:`[${JSON.stringify(e)}]`);t[e]=this.read(s,o)}}class gl extends bl{encode(t){const e=this.writeArray(t,"args");return this.writeDeferred(),e}writeModel(t){return{$ref:t.id}}}class Zl extends yl{decode(t){const e=this.readArray(t,"args");return this.readDeferred(),this.resolveRefs(),e}resolveRefs(){for(const{object:t,key:e,ref:s,path:n}of this.unresolved)if(this.refs.has(s))t[e]=this.refs.get(s);else{const i=this.vm.lookUpModel(s);if(!i)throw Error(`Unresolved ref: ${s} at ${n}[${JSON.stringify(e)}]`);t[e]=i}}}function wl(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Set;const i=Object.values(t).filter((t=>{const e=Object.prototype.toString.call(t).slice(8,-1);return("Object"===e||"Array"===e)&&!n.has(t)}));for(const t of i){n.add(t);const i=e+"."+t.constructor.name;if(s[i]){if(s[i]!==t.constructor)throw new Error("Class with name "+i+" already gathered, but new one has different identity")}else s[i]=t.constructor}for(const t of i)wl(t,e,s,n)}function Xl(t){const e=new Uint8Array(t),s=[];for(let t=0;t<e.byteLength;t+=4096){const n=e.subarray(t,t+4096);s.push(String.fromCharCode.apply(null,n))}return globalThis.btoa(s.join(""))}const vl=r.has("debug","classes",!1);let Ll=Symbol("SECRET");const xl=new WeakSet;class Gl{static create(t,e,s){if(!Tl(this))throw Error(`Model class "${this.name}" not registered`);const n=this,i=Ht(),o=new n(Ll);return Object.defineProperty(o,"__realm",{value:i}),Object.defineProperty(o,"id",{value:i.register(o),enumerable:!0}),xl.add(o),"string"==typeof e&&(console.warn(`Croquet: Model.create(..., "${e}") with a well-known name argument is deprecated!`),o.beWellKnownAs(e),e=void 0),s&&o.beWellKnownAs(s),o.init(t,e),xl.has(o)&&(xl.delete(o),Object.getPrototypeOf(n)!==Gl&&console.warn(`${o} did not call super.init(options)`)),o}static createNoInit(t){const e=Ht(),s=new this(Ll);return Object.defineProperty(s,"__realm",{value:e}),Object.defineProperty(s,"id",{value:t,enumerable:!0}),s}static allowConstructors(){Ll=void 0,console.warn("disabling error reporting for Model constructors")}static register(t){return t||(t=this.name,console.warn(`Deprecation warning: ${this.name}.register(classId) called without classId. See https://croquet.io/docs/croquet/Model.html#.register`)),yl.resetInstance(),bl.resetInstance(),gl.resetInstance(),Zl.resetInstance(),function(t,e){const s=S(t),n=R(`${e}:${s}`);P.push(n),W()&&n.then((t=>{T[t].what=`Class ${e}`}))}(this,t),function(t,e){const s=Sl[e];if(s&&s!==t)throw Error(`Registering model class ${t.name} failed, id "${e}" already used by ${s.name}`);Tl(t)?vl&&!s&&console.warn(`ignoring re-exported model class ${e}`):(vl&&console.log(`registering model class ${e}`),t[kl]=e);Sl[e]=t}(this,t),Gl.lastRegistered=this,this}static wellKnownModel(t){if(!cl.hasCurrent())throw Error("static Model.wellKnownModel() called from outside model");return cl.current().get(t)}static evaluate(t){return cl.evaluate(t)}static types(){return{}}static okayToIgnore(){return[]}static classToID(t){return function(t){if(Tl(t))return t[kl];const e=t.name||"ClassName";throw Error(`Model class not registered, did you call ${e}.register("${e}")?`)}(t)}static classFromID(t){return Cl(t)}static allClasses(){return Wl()}static allClassTypes(){return function(){const t={};for(const e of Wl())Object.assign(t,e.types());return Object.entries(t)}()}static instantiateClassID(t,e){return Cl(t).createNoInit(e)}constructor(t){if(t!==Ll)throw Error(`You must create ${this} using create() not "new"!`)}init(t){xl.delete(this)}destroy(){Ht().unsubscribeAll(this),Ht().deregister(this)}publish(t,e,s){this.__realm||this.__realmError(),this.__realm.publish(e,s,t)}subscribe(t,e,s){return this.__realm||this.__realmError(),this.__realm.subscribe(this,t,e,s)}unsubscribe(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";this.__realm||this.__realmError(),this.__realm.unsubscribe(this,t,e,s)}unsubscribeAll(){this.__realm||this.__realmError(),this.__realm.unsubscribeAll(this)}__realmError(){if(!this.id)throw Error(`${this} has no ID, did you call super.init(options)?`)}future(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;this.__realm||this.__realmError();for(var s=arguments.length,n=new Array(s>2?s-2:0),i=2;i<s;i++)n[i-2]=arguments[i];return this.__realm.future(this,t,e,n)}cancelFuture(t){return this.__realm||this.__realmError(),this.__realm.cancelFuture(this,t)}random(){return Ht().random()}now(){return Ht().now()}beWellKnownAs(t){Ht().vm.set(t,this)}getModel(t){return this.__realm.vm.lookUpModel(t)}wellKnownModel(t){return this.__realm.vm.get(t)}modelOnly(t){if(cl.current()===this.__realm.vm)return!0;const e=Error(t||`${this}.modelOnly() called from outside a model!`);throw yt("view code",e),e}get sessionId(){return this.__realm.vm.id}get viewCount(){return Object.keys(this.__realm.vm.views).length}persistSession(t){if(this!==this.wellKnownModel("modelRoot"))throw Error("persistSession() must only be called on the root model");this.__realm.vm.persist(this,t)}[Symbol.toPrimitive](){const t=this.constructor[kl]||this.constructor.name;return t.includes("Model")?t:`${t}[Model]`}}const Sl={},kl=Symbol("CLASS_ID");function Wl(){return Object.values(Sl)}function Tl(t){return Object.prototype.hasOwnProperty.call(t,kl)}function Cl(t){if(Sl[t])return Sl[t];throw Error(`Model class "${t}" in snapshot, but not registered?`)}Gl[kl]="Croquet.Model",Sl["Croquet.Model"]=Gl;class Rl{static displayStatus(t,e){return bt(t,e)}static displayWarning(t,e){return ft(t,e)}static displayError(t,e){return function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t&&Rt.showMessage(t,{...e,level:"error"})}(t,e)}constructor(t){"object"==typeof t&&"__realm"in t||console.warn("Croquet: argument to View constructor needs to be a Model");let e=Ht("");e&&e.isViewRealm()||(e=Ft(t.__realm.vm,(()=>Ht()),!0)),Object.defineProperty(this,"realm",{value:e}),Object.defineProperty(this,"id",{value:e.register(this),configurable:!0})}detach(){this.unsubscribeAll(),this.realm.deregister(this),Object.defineProperty(this,"id",{value:""})}reattach(){Object.defineProperty(this,"id",{value:this.realm.register(this)})}publish(t,e,s){this.realm.publish(e,s,t)}subscribe(t,e,s){"string"==typeof s&&(s=this[s]);const n=s;(s=n.bind(this)).unbound=n;const{event:i,handling:o}=e.event?e:{event:e};this.realm.subscribe(i,this.id,s,t,o)}unsubscribe(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;"string"==typeof s&&(s=this[s]),this.realm.unsubscribe(e,this.id,s,t)}unsubscribeAll(){this.realm.unsubscribeAll(this.id)}future(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.realm.future(this,t)}random(){return Ht().random()}now(){return this.realm.now()}externalNow(){return this.realm.externalNow()}extrapolatedNow(){return this.realm.extrapolatedNow()}update(t){}wellKnownModel(t){return this.realm.vm.get(t)}get sessionId(){return this.realm.vm.id}get session(){return this.realm.vm.controller.session}get viewId(){return this.realm.vm.controller.viewId}[Symbol.toPrimitive](){const t=this.constructor.name;return t.includes("View")?t:`${t}[View]`}}const Pl=new class{constructor(){this.ready=!1,this.isInIframe=window.top!==window,this.subscriptions={},this.enumerator=null}setReceiver(t){this.receiver=t,this.ready=!0}setIframeEnumerator(t){this.enumerator=t}on(t,e){if(!this.receiver)throw Error("setReceiver() has not been called");if("string"==typeof e&&(e=this.receiver[e]),!e)throw Error("Messenger.on: the second argument must be a method name or a function");if(this.subscriptions[t]){if(this.findIndex(this.subscriptions[t],e)>=0)throw Error(`${e} is already subscribed`)}else this.subscriptions[t]=[];this.subscriptions[t].push(e),this.listener||(this.listener=t=>this.receive(t),window.addEventListener("message",this.listener))}detach(){this.listener&&(window.removeEventListener("message",this.listener),this.listener=null),this.stopPublishingPointerMove(),this.receiver=null,this.subscriptions={},this.enumerator=null,this.ready=!1}removeSubscription(t,e){"string"==typeof e&&(e=this.receiver[e]);const s=this.subscriptions[t];if(s){const n=this.findIndex(s,e);s.splice(n,1),0===s.length&&delete this.subscriptions[t]}}removeAllSubscriptions(){this.subscriptions={}}receive(t){const{event:e,data:s}=t.data,n=t.source;this.handleEvent(e,s,n)}handleEvent(t,e,s){const n=this.subscriptions[t];n&&n.forEach((t=>{t.call(this.receiver,e,s)}))}send(t,e,s){if(this.isInIframe)return void window.top.postMessage({event:t,data:e},"*");if(s)return void s.postMessage({event:t,data:e},"*");if(!this.enumerator)return;this.enumerator().forEach((s=>{s.contentWindow.postMessage({event:t,data:e},"*")}))}findIndex(t,e){const s=e.name;return t.findIndex((t=>{const n=t.name;return s||n?s===n:e===t}))}startPublishingPointerMove(){this._moveHandler||(this._moveHandler=t=>this.send("pointerPosition",{x:t.clientX,y:t.clientY,type:t.type}),window.document.addEventListener("pointermove",this._moveHandler,!0))}stopPublishingPointerMove(){this._moveHandler&&(window.document.removeEventListener("pointermove",this._moveHandler,!0),this._moveHandler=null)}},Vl="node"===e.CROQUET_PLATFORM;let Yl=60;class Ml{static async join(t){try{return await this.join_impl(t)}catch(t){throw Rt.showMessage(t.message,{level:"fatal"}),t}}static async join_impl(t){if("object"!=typeof t)throw Error("Croquet: please use new Session.join( {apiKey, ...} ) API. See https://croquet.io/docs/croquet/Session.html#.join");t.appId||(t.appId="no.appId"),t.name||(t.name=Rt.autoSession(),t.password||(t.password=Rt.autoPassword())),t.model||(t.model=Gl.lastRegistered),t.view||(t.view=Rl);for(const[m,p]of Object.entries(t))p instanceof Promise&&(t[m]=await p);function e(t,e){return t===e||t.prototype instanceof e}if("string"!=typeof t.apiKey)throw Error("Croquet: no apiKey provided in Session.join()!");if(t.apiKey.length>128)throw Error("Croquet: apiKey > 128 characters in Session.join()!");if("string"!=typeof t.name)throw Error("Croquet: no session name provided in Session.join()!");if(t.name.length>128)throw Error("Croquet: session name > 128 characters in Session.join()!");const s=t.model;if("function"!=typeof s||!e(s,Gl))throw Error("Croquet: bad model class in Session.join()");const n=t.view||Rl;if("function"!=typeof n||!e(n,Rl))throw Error("Croquet: bad view class in Session.join()");if("string"!=typeof t.appId)throw Error("Croquet: no appId provided in Session.join()");if(!t.appId.length>128)throw Error("Croquet: appId > 128 characters in Session.join()");if(!t.appId.match(/^[a-z](-?[a-z0-9_])*(\.[a-z0-9_](-?[a-z0-9_])*)+$/i))throw Error("Croquet: malformed appId in Session.join()");if("string"!=typeof t.password||!t.password)throw Error("Croquet: no password provided in Session.join()");const i=r.reflector||t.reflector;if(i&&(i.includes("://")||i.match(/^[-a-z0-9]+$/i)?r.reflector=i:console.warn(`Croquet: Not a valid websocket url, ignoring reflector "${i}"`)),Vl&&"manual"!==t.step)throw Error("stepping must be manual in a Node.js app");if("rejoinLimit"in t){if("number"!=typeof t.rejoinLimit||t.rejoinLimit<0||t.rejoinLimit>6e4)throw Error("rejoinLimit range: 0-60000")}else t.rejoinLimit=1e3;if("eventRateLimit"in t){if("number"!=typeof t.eventRateLimit||t.eventRateLimit<1||t.eventRateLimit>60)throw Error("eventRateLimit range: 1-60")}else t.eventRateLimit=20;if(t.heraldUrl){if(t.heraldUrl.length>256)throw Error("heraldUrl can only be 256 characters");if(!t.heraldUrl.startsWith("https://"))throw Error("heraldUrl needs to be https")}if(t.hashOverride){if(43!==t.hashOverride.length)throw Error("hashOverride must be 43 characters");if(-1!==t.hashOverride.search(/[^-_a-zA-Z0-9]/))throw Error("hashOverride must be base64url encoded")}if(t.debug){function f(t){return"string"==typeof t&&(t=t.split(",")),t?Array.isArray(t)?t:[t]:[]}r.debug=[...f(t.debug),...f(r.debug)].join(",")}if("autoSleep"in t){const b=t.autoSleep,g=typeof b;if("number"===g){if(b<0)throw Error("an autoSleep value must be >= 0")}else{if("boolean"!==g)throw Error("autoSleep must be numeric or boolean");t.autoSleep=b?10:0}}else t.autoSleep=10;if(t.flags){let Z=t.flags;"string"==typeof Z&&(Z=Z.split(",")),Z=Z?Array.isArray(Z)?Z:[Z]:[],Z=Z.filter((t=>"object"!=typeof t)),Z.length?(t.flags={},Z.forEach((e=>t.flags[e]=!0))):t.flags=null}"expectedSimFPS"in t&&(Yl=Math.min(t.expectedSimFPS,120));const o=["name","password","apiKey","appId","tps","autoSleep","heraldUrl","rejoinLimit","eventRateLimit","optionsFromUrl","viewIdDebugSuffix","hashOverride","flags"];!function(){if(Object.isFrozen(Il))return;Kl(Il),function(t){const e=JSON.stringify(t,((t,e)=>"function"==typeof e?S(e):e));if("{}"===e)return;const s=JSON.parse(e),n=R(y(s));P.push(n),W()&&n.then((t=>{T[t].what="Croquet Constants"}))}(Il)}();const a=new za,l=JSON.parse(JSON.stringify({...t.options})),c={id:"",persistentId:"",versionId:"",model:null,view:null,step(t){a.stepSession("animation",{frameTime:t,view:c.view,expectedSimFPS:Yl})},leave:()=>Ml.leave(c.id),get latency(){return a.latency},get latencies(){return a.latencies}},d={options:l,initFn:(t,e)=>s.create(t,e,"modelRoot"),rebootModelView:u};for(const[w,X]of Object.entries(t))o.includes(w)&&(d[w]=X);t.progressReporter&&(d.progressReporter=t.progressReporter),await a.initFromSessionSpec(d);let h=!1;return await u(),"manual"!==t.step&&a.startStepping(c.step),c;async function u(){!function(){c.model=null,c.view&&(r.has("debug","session",!1)&&console.log(c.id,"detaching root view"),c.view.detach(),""!==c.view.id&&console.warn(`Croquet: ${c.view} did not call super.detach()`),c.view=null);Rt.clearSessionMoniker(),Pl.ready&&Pl.detach()}(),a.leaving?a.leaving(!0):h||(h=!0,await a.establishSession(d),h=!1,c.model=a.vm.get("modelRoot"),c.id=a.id,c.persistentId=a.persistentId,c.versionId=a.versionId,a.session=c,Rt.makeSessionWidgets(c.id),a.inViewRealm((()=>{r.has("debug","session",!1)&&console.log(c.id,"creating root view"),c.view=new n(c.model)})))}}static async leave(t){const e=function(t){for(const e of Ka)if(e.id===t)return e;return null}(t);if(!e)return!1;e.reconnectTimeout&&(clearTimeout(e.reconnectTimeout),delete e.reconnectTimeout);const s=new Promise((t=>e.leaving=t)),n=e.connection;return!!n.connected&&(n.closeConnection(1e3),s)}static thisSession(){const t=cl.current();return t?t.id:""}}const Il={};function Kl(t){if(!Object.isFrozen(t)){Object.freeze(t);for(const e of Object.values(t))!e||"object"!=typeof e&&"function"!=typeof e||Kl(e)}}exports.App=Rt,exports.Constants=Il,exports.Data=Oa,exports.Messenger=Pl,exports.Model=Gl,exports.Session=Ml,exports.View=Rl,exports.gatherInternalClassTypes=function(t,e){const s={};return wl({root:t},e,s,new Set),s},exports.startSession=function(){return Rt.showMessage("Croquet.startSession() is deprecated, please use Croquet.Session.join()",{level:"warning",only:"once"}),Ml.join(...arguments)};



/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_Avatar": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Avatar),
/* harmony export */   "AM_Player": () => (/* reexport safe */ _src_Player__WEBPACK_IMPORTED_MODULE_6__.AM_Player),
/* harmony export */   "AM_Predictive": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Predictive),
/* harmony export */   "AM_Smoothed": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Smoothed),
/* harmony export */   "AM_Spatial": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.AM_Spatial),
/* harmony export */   "Actor": () => (/* reexport safe */ _src_Actor__WEBPACK_IMPORTED_MODULE_1__.Actor),
/* harmony export */   "ActorManager": () => (/* reexport safe */ _src_Actor__WEBPACK_IMPORTED_MODULE_1__.ActorManager),
/* harmony export */   "CachedObject": () => (/* reexport safe */ _src_ObjectCache__WEBPACK_IMPORTED_MODULE_4__.CachedObject),
/* harmony export */   "ClearObjectCache": () => (/* reexport safe */ _src_ObjectCache__WEBPACK_IMPORTED_MODULE_4__.ClearObjectCache),
/* harmony export */   "FocusManager": () => (/* reexport safe */ _src_Focus__WEBPACK_IMPORTED_MODULE_2__.FocusManager),
/* harmony export */   "GetModelService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.GetModelService),
/* harmony export */   "GetPawn": () => (/* reexport safe */ _src_Pawn__WEBPACK_IMPORTED_MODULE_5__.GetPawn),
/* harmony export */   "GetViewService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.GetViewService),
/* harmony export */   "InputManager": () => (/* reexport safe */ _src_Input__WEBPACK_IMPORTED_MODULE_12__.InputManager),
/* harmony export */   "IsLoaded": () => (/* reexport safe */ _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__.IsLoaded),
/* harmony export */   "KeyDown": () => (/* reexport safe */ _src_Input__WEBPACK_IMPORTED_MODULE_12__.KeyDown),
/* harmony export */   "LoadFont": () => (/* reexport safe */ _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__.LoadFont),
/* harmony export */   "LoadImage": () => (/* reexport safe */ _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__.LoadImage),
/* harmony export */   "ModelRoot": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ModelRoot),
/* harmony export */   "ModelService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ModelService),
/* harmony export */   "PM_Avatar": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Avatar),
/* harmony export */   "PM_Camera": () => (/* reexport safe */ _src_Render__WEBPACK_IMPORTED_MODULE_7__.PM_Camera),
/* harmony export */   "PM_Driver": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Driver),
/* harmony export */   "PM_Focusable": () => (/* reexport safe */ _src_Focus__WEBPACK_IMPORTED_MODULE_2__.PM_Focusable),
/* harmony export */   "PM_Player": () => (/* reexport safe */ _src_Player__WEBPACK_IMPORTED_MODULE_6__.PM_Player),
/* harmony export */   "PM_Predictive": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Predictive),
/* harmony export */   "PM_Smoothed": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Smoothed),
/* harmony export */   "PM_Spatial": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.PM_Spatial),
/* harmony export */   "PM_Visible": () => (/* reexport safe */ _src_Render__WEBPACK_IMPORTED_MODULE_7__.PM_Visible),
/* harmony export */   "Pawn": () => (/* reexport safe */ _src_Pawn__WEBPACK_IMPORTED_MODULE_5__.Pawn),
/* harmony export */   "PawnManager": () => (/* reexport safe */ _src_Pawn__WEBPACK_IMPORTED_MODULE_5__.PawnManager),
/* harmony export */   "PerlinNoise": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.PerlinNoise),
/* harmony export */   "PlayerManager": () => (/* reexport safe */ _src_Player__WEBPACK_IMPORTED_MODULE_6__.PlayerManager),
/* harmony export */   "PriorityQueue": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.PriorityQueue),
/* harmony export */   "RegisterMixin": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.RegisterMixin),
/* harmony export */   "RenderManager": () => (/* reexport safe */ _src_Render__WEBPACK_IMPORTED_MODULE_7__.RenderManager),
/* harmony export */   "Shuffle": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.Shuffle),
/* harmony export */   "StartWorldcore": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.StartWorldcore),
/* harmony export */   "TAU": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.TAU),
/* harmony export */   "TO_DEG": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.TO_DEG),
/* harmony export */   "TO_RAD": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.TO_RAD),
/* harmony export */   "TwoWayMap": () => (/* reexport safe */ _src_Utilities__WEBPACK_IMPORTED_MODULE_9__.TwoWayMap),
/* harmony export */   "ViewRoot": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ViewRoot),
/* harmony export */   "ViewService": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.ViewService),
/* harmony export */   "WorldcoreModel": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.WorldcoreModel),
/* harmony export */   "WorldcoreView": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.WorldcoreView),
/* harmony export */   "clampRad": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.clampRad),
/* harmony export */   "gaussian": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.gaussian),
/* harmony export */   "m2_identity": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m2_identity),
/* harmony export */   "m2_rotation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m2_rotation),
/* harmony export */   "m2_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m2_zero),
/* harmony export */   "m4_determinant": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_determinant),
/* harmony export */   "m4_getRotation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_getRotation),
/* harmony export */   "m4_getTranslation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_getTranslation),
/* harmony export */   "m4_identity": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_identity),
/* harmony export */   "m4_invert": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_invert),
/* harmony export */   "m4_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_multiply),
/* harmony export */   "m4_perspective": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_perspective),
/* harmony export */   "m4_rotation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotation),
/* harmony export */   "m4_rotationQ": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationQ),
/* harmony export */   "m4_rotationX": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationX),
/* harmony export */   "m4_rotationY": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationY),
/* harmony export */   "m4_rotationZ": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_rotationZ),
/* harmony export */   "m4_scale": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_scale),
/* harmony export */   "m4_scaleRotationTranslation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_scaleRotationTranslation),
/* harmony export */   "m4_toNormal4": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_toNormal4),
/* harmony export */   "m4_translation": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_translation),
/* harmony export */   "m4_transpose": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_transpose),
/* harmony export */   "m4_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.m4_zero),
/* harmony export */   "mix": () => (/* reexport safe */ _src_Mixins__WEBPACK_IMPORTED_MODULE_3__.mix),
/* harmony export */   "q_axisAngle": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_axisAngle),
/* harmony export */   "q_conjugate": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_conjugate),
/* harmony export */   "q_dot": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_dot),
/* harmony export */   "q_equals": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_equals),
/* harmony export */   "q_euler": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_euler),
/* harmony export */   "q_identity": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_identity),
/* harmony export */   "q_invert": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_invert),
/* harmony export */   "q_isZero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_isZero),
/* harmony export */   "q_lookAt": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_lookAt),
/* harmony export */   "q_magnitude": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_magnitude),
/* harmony export */   "q_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_multiply),
/* harmony export */   "q_normalize": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_normalize),
/* harmony export */   "q_pitch": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_pitch),
/* harmony export */   "q_roll": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_roll),
/* harmony export */   "q_slerp": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_slerp),
/* harmony export */   "q_yaw": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.q_yaw),
/* harmony export */   "rayTriangleIntersect": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.rayTriangleIntersect),
/* harmony export */   "sphericalRandom": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.sphericalRandom),
/* harmony export */   "toDeg": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.toDeg),
/* harmony export */   "toRad": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.toRad),
/* harmony export */   "v2_abs": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_abs),
/* harmony export */   "v2_add": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_add),
/* harmony export */   "v2_angle": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_angle),
/* harmony export */   "v2_ceil": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_ceil),
/* harmony export */   "v2_divide": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_divide),
/* harmony export */   "v2_dot": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_dot),
/* harmony export */   "v2_equals": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_equals),
/* harmony export */   "v2_floor": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_floor),
/* harmony export */   "v2_inverse": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_inverse),
/* harmony export */   "v2_isZero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_isZero),
/* harmony export */   "v2_lerp": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_lerp),
/* harmony export */   "v2_magnitude": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_magnitude),
/* harmony export */   "v2_manhattan": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_manhattan),
/* harmony export */   "v2_max": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_max),
/* harmony export */   "v2_min": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_min),
/* harmony export */   "v2_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_multiply),
/* harmony export */   "v2_normalize": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_normalize),
/* harmony export */   "v2_random": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_random),
/* harmony export */   "v2_rotate": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_rotate),
/* harmony export */   "v2_scale": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_scale),
/* harmony export */   "v2_sqrMag": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_sqrMag),
/* harmony export */   "v2_sub": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_sub),
/* harmony export */   "v2_transform": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_transform),
/* harmony export */   "v2_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v2_zero),
/* harmony export */   "v3_abs": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_abs),
/* harmony export */   "v3_add": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_add),
/* harmony export */   "v3_angle": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_angle),
/* harmony export */   "v3_ceil": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_ceil),
/* harmony export */   "v3_cross": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_cross),
/* harmony export */   "v3_divide": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_divide),
/* harmony export */   "v3_dot": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_dot),
/* harmony export */   "v3_equals": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_equals),
/* harmony export */   "v3_floor": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_floor),
/* harmony export */   "v3_inverse": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_inverse),
/* harmony export */   "v3_isZero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_isZero),
/* harmony export */   "v3_lerp": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_lerp),
/* harmony export */   "v3_magnitude": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_magnitude),
/* harmony export */   "v3_manhattan": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_manhattan),
/* harmony export */   "v3_max": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_max),
/* harmony export */   "v3_min": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_min),
/* harmony export */   "v3_multiply": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_multiply),
/* harmony export */   "v3_normalize": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_normalize),
/* harmony export */   "v3_random": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_random),
/* harmony export */   "v3_rotate": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotate),
/* harmony export */   "v3_rotateX": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotateX),
/* harmony export */   "v3_rotateY": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotateY),
/* harmony export */   "v3_rotateZ": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_rotateZ),
/* harmony export */   "v3_scale": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_scale),
/* harmony export */   "v3_sqrMag": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_sqrMag),
/* harmony export */   "v3_sub": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_sub),
/* harmony export */   "v3_transform": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_transform),
/* harmony export */   "v3_zero": () => (/* reexport safe */ _src_Vector__WEBPACK_IMPORTED_MODULE_10__.v3_zero),
/* harmony export */   "viewRoot": () => (/* reexport safe */ _src_Root__WEBPACK_IMPORTED_MODULE_8__.viewRoot)
/* harmony export */ });
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/croquet */ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js");
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Actor */ "./node_modules/@croquet/worldcore-kernel/src/Actor.js");
/* harmony import */ var _src_Focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Focus */ "./node_modules/@croquet/worldcore-kernel/src/Focus.js");
/* harmony import */ var _src_Mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Mixins */ "./node_modules/@croquet/worldcore-kernel/src/Mixins.js");
/* harmony import */ var _src_ObjectCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ObjectCache */ "./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js");
/* harmony import */ var _src_Pawn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Pawn */ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js");
/* harmony import */ var _src_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Player */ "./node_modules/@croquet/worldcore-kernel/src/Player.js");
/* harmony import */ var _src_Render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Render */ "./node_modules/@croquet/worldcore-kernel/src/Render.js");
/* harmony import */ var _src_Root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");
/* harmony import */ var _src_Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Utilities */ "./node_modules/@croquet/worldcore-kernel/src/Utilities.js");
/* harmony import */ var _src_Vector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/Vector */ "./node_modules/@croquet/worldcore-kernel/src/Vector.js");
/* harmony import */ var _src_ViewAssetCache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/ViewAssetCache */ "./node_modules/@croquet/worldcore-kernel/src/ViewAssetCache.js");
/* harmony import */ var _src_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/Input */ "./node_modules/@croquet/worldcore-kernel/src/Input.js");
















/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Actor.js":
/*!*************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Actor.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Actor": () => (/* binding */ Actor),
/* harmony export */   "ActorManager": () => (/* binding */ ActorManager)
/* harmony export */ });
/* harmony import */ var _Pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pawn */ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");



//------------------------------------------------------------------------------------------
//-- ActorManager --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class ActorManager extends _Root__WEBPACK_IMPORTED_MODULE_1__.ModelService {
    init(name) {
        super.init(name || 'ActorManager');
        this.actors = new Map();
    }

    add(actor) {
        this.actors.set(actor.id, actor);
    }

    has(id) {
        return this.actors.has(id);
    }

    get(id) {
        return this.actors.get(id);
    }

    delete(actor) {
        this.actors.delete(actor.id);
    }

}
ActorManager.register("ActorManager");

//------------------------------------------------------------------------------------------
//-- Actor ---------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class Actor extends _Root__WEBPACK_IMPORTED_MODULE_1__.WorldcoreModel {
    get pawn() {return null;}
    get doomed() {return this._doomed} // About to be destroyed. This is used to prevent creating new future messages.
    get parent() { return this._parent; }


    init(options) {
        super.init();
        this.listen("parentSet", this.onParent);
        this.listen("_set", this.set);
        this.set(options);
        this.service('ActorManager').add(this);
        this.publish("actor", "createActor", this);
    }

    destroy() {
        new Set(this.children).forEach(child => child.destroy());
        this.set({parent: null});
        this._doomed = true; // About to be destroyed. This is used to prevent creating new future messages.
        this.say("destroyActor");
        this.service('ActorManager').delete(this);
        super.destroy();
    }

    set(options = {}) {
        const sorted = Object.entries(options).sort((a,b) => { return b[0] < a[0] ? 1 : -1 } );
        for (const option of sorted) {
            const name = option[0];
            const setEvent = name + "Set";
            const n = "_" + option[0];
            const v = option[1];
            const o = this[n];
            this[n] = v;
            this.say(setEvent, {v, o}); // Publish a local message whenever a property changes with its old and new value.
        }
    }

    addChild(child) {
        if (!this.children) this.children = new Set();
        this.children.add(child);
    }

    removeChild(child) {
        if (this.children) this.children.delete(child);
    }

    onParent(d) {
        if (d.o) d.o.removeChild(this);
        if (d.v) d.v.addChild(this);
    }

    say(event, data) {
        this.publish(this.id, event, data);
    }

    listen(event, callback) {
        this.subscribe(this.id, event, callback);
    }

    ignore(event) {
        this.unsubscribe(this.id, event);
    }

    actorFromId(id) {
        return this.service("ActorManager").get(id);
    }

}
Actor.register("Actor");



/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Focus.js":
/*!*************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Focus.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusManager": () => (/* binding */ FocusManager),
/* harmony export */   "PM_Focusable": () => (/* binding */ PM_Focusable)
/* harmony export */ });
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");


//------------------------------------------------------------------------------------------
//-- FocusManager -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Maintains a list of focus sets. Only one pawn can be focused per set.

class FocusManager extends _Root__WEBPACK_IMPORTED_MODULE_0__.ViewService {

    constructor(name) {
        super(name ||'FocusManager');
        this.sets = [];
    }

}

//------------------------------------------------------------------------------------------
//-- Focusable -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// The pawn interface to the focus manager. Adds methods to set and remove focus.

const PM_Focusable = superclass => class extends superclass {

    constructor(...args) {
        super(...args);
    }

    destroy() {
        super.destroy();
        this.blurAll();
    }

    hasFocus(set = 0) {
        const fm = this.service("FocusManager");
        return fm.sets[set] === this;
    }

    focus(set = 0) {
        const fm = this.service("FocusManager");
        const old = fm.sets[set];
        if (old === this) return; // Already has focus
        if (old) {
            fm.sets[set] = null;
            old.onBlur(set);
        }
        fm.sets[set] = this;
        this.onFocus(set);
    }

    blur(set = 0) {
        const fm = this.service("FocusManager");
        const old = fm.sets[set];
        if (old !== this) return; // Doesn't have focus
        fm.sets[set] = null;
        this.onBlur(set);
    }

    blurAll() {
        const fm = this.service("FocusManager");
        if(!fm) return;
        fm.sets.forEach(set =>  this.blur(set));
    }

    onFocus(set) {}
    onBlur(set) {}

};

/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Input.js":
/*!*************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Input.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputManager": () => (/* binding */ InputManager),
/* harmony export */   "KeyDown": () => (/* binding */ KeyDown)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./node_modules/@croquet/worldcore-kernel/src/Vector.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");



// Need to add doubletap

const DOUBLE_DURATION = 300; // milliseconds
const TRIPLE_DURATION = 600; // milliseconds

const TAP_DURATION = 300;   // milliseconds
const TAP_DISTANCE = 10;     // pixels

const SWIPE_DURATION = 300;   // milliseconds
const SWIPE_DISTANCE = 50;     // pixels

const keys = new Set();
const chordNames = new Map();
const upChordKeys = new Map();
const downChordKeys = new Map();

// Returns true if the key is pressed. Includes entries for mouse buttons.
function KeyDown(key) {
    return keys.has(key);
}

//Returns true if the combination of keys is pressed/unpressed.
// export function ChordDown(name) {
//     const chord = chordNames.get(name);
//     if (!chord) return false;
//     const down = chord.down;
//     const up = chord.up;
//     let all = true;
//     down.forEach(d => {all &= KeyDown(d);});
//     up.forEach(u => {all &= !KeyDown(u);});
//     return all;
// }

//----------------------------------------------------------------------------------------------------
// Input
//
// Catches all user input events and transforms them into Croquet events.
// We don't want other systems to install their own listeners because they may not get cleaned up properly on disconnect/reconnect.
// Supports adding chord events to report when multiple buttons are pressed simultaneously.
//----------------------------------------------------------------------------------------------------

class InputManager extends _Root__WEBPACK_IMPORTED_MODULE_1__.ViewService {
    constructor(name) {
        super(name || "InputManager");

        this.listeners = [];

        this.presses = new Map();
        this.lastDown = {};
        this.penultimateDown = {};

        document.body.style.touchAction = "none";
        this.addAllListeners();

        this.synthesizedModifierKeys = new Map();
    }

    destroy() {
        super.destroy();
        if (this.inPointerLock) document.exitPointerLock();
        if (this.inFullscreen) document.exitFullscreen();
        this.removeAllListeners();
    }

    addListener(element, type, callback) {
        element.addEventListener(type, callback, {passive: false});
        this.listeners.push({element, type, callback});
    }

    removeListener(type) {
        const remainingListeners = this.listeners.filter(listener => listener.type !== type);
        this.listeners.forEach(listener => {
            if (listener.type === type) listener.element.removeEventListener(listener.type, listener.callback, {passive: false});
        });
        this.listeners = remainingListeners;
    }

    removeAllListeners() {
        this.listeners.forEach(listener => listener.element.removeEventListener(listener.type, listener.callback, {passive: false}));
        this.listeners = [];
    }

    // adds all the default input manager listeners
    addAllListeners() {
        this.addListener(document, 'contextmenu', e => e.preventDefault());
        this.addListener(window, 'resize', e => this.onResize(e));
        this.addListener(window, 'focus', e => this.onFocus(e));
        this.addListener(window, 'blur', e => this.onBlur(e));
        this.addListener(window, 'deviceorientation', e => this.onOrientation(e));
        this.addListener(document, 'click', e => this.onClick(e));
        this.addListener(document, 'pointerlockchange', e => this.onPointerLock(e));
        this.addListener(document, 'pointerdown', e => this.onPointerDown(e));
        this.addListener(document, 'pointerup', e => this.onPointerUp(e));
        this.addListener(document, 'pointercancel', e => this.onPointerUp(e));
        this.addListener(document, 'pointermove', e => this.onPointerMove(e));
        this.addListener(document, 'wheel', e => this.onWheel(e));
        this.addListener(document,'keydown', e => this.onKeyDown(e));
        this.addListener(document,'keyup', e => this.onKeyUp(e));
    }

    // If you want the input handler to report a chord event, you need to add the chord and give it an event name.
    addChord(name, down = [], up = []) {
        chordNames.set(name, {down, up});
        down.forEach(d => {
            if (!downChordKeys.has(d)) downChordKeys.set(d, new Set());
            downChordKeys.get(d).add(name);
        });
        up.forEach(u => {
            if (!upChordKeys.has(u)) upChordKeys.set(u, new Set());
            upChordKeys.get(u).add(name);
        });
    }

    onChordDown(key) {
        const downs = [];
        const ups = [];

        if (downChordKeys.has(key)) {
            downChordKeys.get(key).forEach( name => {
                if (this.chordTest(name)) downs.push(name);
            });
        }

        if (upChordKeys.has(key)) {
            upChordKeys.get(key).forEach( name => {
                if (!this.chordTest(name)) ups.push(name);
            });
        }

        ups.forEach(name => {
            if (!KeyDown(name)) return;
            keys.delete(name);
            this.publish("input", name + "Up");
        });

        downs.forEach(name => {
            if (KeyDown(name)) return;
            keys.add(name);
            this.publish("input", name + "Down");
        });

    }

    onChordUp(key) {
        const downs = [];
        const ups = [];

        if (downChordKeys.has(key)) {
            downChordKeys.get(key).forEach( name => {
                if (!this.chordTest(name)) ups.push(name);
            });
        }

        if (upChordKeys.has(key)) {
            upChordKeys.get(key).forEach( name => {
                if (this.chordTest(name)) downs.push(name);
            });
        }

        ups.forEach(name => {
            if (!KeyDown(name)) return;
            keys.delete(name);
            this.publish("input", name + "Up");
        });

        downs.forEach(name => {
            if (KeyDown(name)) return;
            keys.add(name);
            this.publish("input", name + "Down");
        });

    }

    chordTest(name) {
        const chord = chordNames.get(name);
        if (!chord) return false;
        const down = chord.down;
        const up = chord.up;
        let all = true;
        down.forEach(d => {all &= KeyDown(d);});
        up.forEach(u => {all &= !KeyDown(u);});
        return all;
    }

    get inFullscreen() {
        return document.fullscreenElement;
    }

    get canFullscreen() {
        return document.documentElement.requestFullscreen;
    }

    enterFullscreen() {
        if (this.inFullscreen) return;
        if (!this.canFullscreen) return;
        document.documentElement.requestFullscreen();
    }

    exitFullscreen() {
        if (!this.inFullscreen) return;
        document.exitFullscreen();
    }

    get inPointerLock() {
        return document.pointerLockElement || document.mozPointerLockElement;
    }

    get canPointerLock() {
        return document.documentElement.requestPointerLock || document.documentElement.mozRequestPointerLock;
    }

    modifierKeysFrom(event) {
        let {altKey, ctrlKey, metaKey, shiftKey} = event;
        altKey = !!(altKey || this.synthesizedModifierKeys.get("altKey"));
        ctrlKey = !!(ctrlKey || this.synthesizedModifierKeys.get("ctrlKey"));
        metaKey = !!(metaKey || this.synthesizedModifierKeys.get("metaKey"));
        shiftKey = !!(shiftKey || this.synthesizedModifierKeys.get("shiftKey"));
        return {altKey, ctrlKey, metaKey, shiftKey};
    }

    setModifierKeys(obj) {
        for (let k in obj) {
            this.synthesizedModifierKeys.set(k, !!obj[k])
        }
    }

    modifierEqual(e1, e2) {
        return !!e1.altKey === !!e2.altKey && !!e1.ctrlKey === !!e2.ctrlKey && !!e1.metaKey === !!e2.metaKey && !!e1.shiftKey === !!e2.shiftKey;
    }

    enterPointerLock() {
        if (this.inPointerLock) return;
        if (!this.canPointerLock) return;
        document.documentElement.requestPointerLock = this.canPointerLock;
        document.documentElement.requestPointerLock();
    }

    exitPointerLock() {
        if (!this.inPointerLock) return;
        document.exitPointerLock();
    }

    onPointerLock(event) {
        this.publish("input", "pointerLock", this.inPointerLock);
    }

    onResize(event) {
        // Delay actual resize event to address iOS posting of resize before page layout finishes.
        // (Also it kind of looks better .... )
        this.publish("input", "beforeResize");
        this.future(500).futureResize();
    }

    futureResize() {
        this.publish("input", "resize", [window.innerWidth, window.innerHeight]);
    }

    onFocus(event) {
        this.publish("input", "focus");
    }

    onBlur(event) {
        this.publish("input", "blur");
    }

    // publishes  both keyDown + arg and "xDown" where "x" is the key

    onKeyDown(event) {
        const key = event.key;
        let modKeys = this.modifierKeysFrom(event);
        keys.add(key);
        if (event.repeat) {
            this.publish("input", key + "Repeat", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            this.publish("input", "keyRepeat", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            // This can generate a lot of events! Don't subscribe to in model.
        } else {
            this.publish("input", key + "Down", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            this.publish("input", "keyDown", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
            this.onChordDown(key);
        }
    }

    // publish both keyUp + arg and "xUp" where "x" is the key
    onKeyUp(event) {
        const key = event.key;
        let modKeys = this.modifierKeysFrom(event);
        if (!KeyDown(key)) return;
        this.publish("input", key + "Up", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, ...modKeys});
        this.publish("input", "keyUp", {key, shift: modKeys.shiftKey, alt: modKeys.altKey, ctrl: modKeys.ctrlKey, meta: modKeys.metaKey, modKeys});
        keys.delete(key);
        this.onChordUp(key);
    }

    onClick(event) {
        let modKeys = this.modifierKeysFrom(event);
        window.focus();
        this.publish("input", "click", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
    }

    onPointerDown(event) {
        let modKeys = this.modifierKeysFrom(event);
        this.presses.set(event.pointerId, {id: event.pointerId, time: event.timeStamp, start: [event.clientX, event.clientY], ...modKeys, xy: [event.clientX, event.clientY]});
        this.publish("input", "pointerDown", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
        if (event.button === this.lastDown.button && event.timeStamp - this.lastDown.time < DOUBLE_DURATION && this.modifierEqual(event, this.lastDown)) {
            if (event.button === this.penultimateDown.button && event.timeStamp - this.penultimateDown.time < TRIPLE_DURATION) {
                this.publish("input", "tripleDown", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            } else {
                this.publish("input", "doubleDown", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            }
        }
        this.penultimateDown = this.lastDown;
        this.lastDown = {id: event.pointerId, button: event.button, buttons: event.buttons, ...modKeys, time: event.timeStamp};
        this.zoomStart();
    }

    onPointerUp(event) {
        const press = this.presses.get(event.pointerId);
        let modKeys = this.modifierKeysFrom(event);
        if (press) {
            press.xy = [event.clientX, event.clientY];
            const duration = event.timeStamp - press.time;
            const dx = event.clientX - press.start[0];
            const dy = event.clientY - press.start[1];
            const ax = Math.abs(dx);
            const ay = Math.abs(dy);
            if (duration < TAP_DURATION && ax < TAP_DISTANCE && ay < TAP_DISTANCE) {
                this.publish("input", "tap", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            }
            if (duration < SWIPE_DURATION && ax > SWIPE_DISTANCE) {
                this.publish("input", "swipeX", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, distance: dx, ...modKeys});
            }
            if (duration < SWIPE_DURATION && ay > SWIPE_DISTANCE) {
                this.publish("input", "swipeY", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, distance: dy, ...modKeys});
            }
        }

        this.presses.delete(event.pointerId);
        this.publish("input", "pointerUp", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
        this.zoomEnd();
    }

    onPointerMove(event) {
        const press = this.presses.get(event.pointerId);
        let modKeys = this.modifierKeysFrom(event);
        if (press) {
            press.xy = [event.clientX, event.clientY];
            const duration = event.timeStamp - press.time;
            const dx = event.clientX - press.start[0];
            const dy = event.clientY - press.start[1];
            const ax = Math.abs(dx);
            const ay = Math.abs(dy);
            if (duration > TAP_DURATION || ax > TAP_DISTANCE || ay > TAP_DISTANCE) { // Only publish pressed move events that aren't taps
                this.publish("input", "pointerMove", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
                this.publish("input", "pointerDelta", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.movementX, event.movementY]});
            }
        } else {
            this.publish("input", "pointerMove", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.clientX, event.clientY]});
            this.publish("input", "pointerDelta", {id: event.pointerId, type: event.pointerType, button: event.button, buttons: event.buttons, ...modKeys, xy: [event.movementX, event.movementY]});
        }
        this.zoomUpdate();
    }

    zoomStart() {
        if (this.presses.size !== 2) return;

        const values = Array.from(this.presses.values());
        const press0 = values[0];
        const press1 = values[1];
        const mid = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_scale)((0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_add)(press0.xy, press1.xy), 0.5);

        this.publish("input", "zoomStart", {mid, zoom: 1, dial: 0});
    }

    zoomEnd() {
        if (this.presses.size !== 1) return;
        this.publish("input", "zoomEnd");
    }

    zoomUpdate() {
        if (this.presses.size < 2) return;

        const values = Array.from(this.presses.values());
        const press0 = values[0];
        const press1 = values[1];
        const mid = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_scale)((0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_add)(press0.xy, press1.xy), 0.5);

        const delta0 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_sub)(press1.start, press0.start);
        const delta1 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_sub)(press1.xy, press0.xy);
        const gap0 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_magnitude)(delta0);
        const gap1 = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.v2_magnitude)(delta1);

        let zoom = 1;
        if (gap0 > 0) zoom = gap1 / gap0;

        const angle0 = Math.atan2(delta0[0], delta0[1]);
        const angle1 = Math.atan2(delta1[0], delta1[1]);
        let dial = (angle1 - angle0 + _Vector__WEBPACK_IMPORTED_MODULE_0__.TAU) % _Vector__WEBPACK_IMPORTED_MODULE_0__.TAU;
        if (dial > Math.PI) dial -= _Vector__WEBPACK_IMPORTED_MODULE_0__.TAU;

        this.publish("input", "zoomUpdate", {mid, zoom, dial});
    }

    onWheel(event) {
        let modKeys = this.modifierKeysFrom(event);
        event.preventDefault();
        const y = event.deltaY;
        this.publish("input", "wheel", {deltaY: y, ...modKeys, xy: [event.clientX, event.clientY]});
    }

    onOrientation(event) {
        const alpha = event.alpha; // yaw
        const beta = event.beta; // Pitch if in portrait,
        const gamma = event.gamma;
        const pitch = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.toRad)(beta);
        const yaw = (0,_Vector__WEBPACK_IMPORTED_MODULE_0__.toRad)(alpha);

        // For landscape mode depends on phone orientation ...
        // const pitch = gamma;
        // const yaw = alpha; // 90 off
        this.publish("input", "orientation", {pitch, yaw});
    }

}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Mixins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Mixins.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_Avatar": () => (/* binding */ AM_Avatar),
/* harmony export */   "AM_Predictive": () => (/* binding */ AM_Predictive),
/* harmony export */   "AM_Smoothed": () => (/* binding */ AM_Smoothed),
/* harmony export */   "AM_Spatial": () => (/* binding */ AM_Spatial),
/* harmony export */   "PM_Avatar": () => (/* binding */ PM_Avatar),
/* harmony export */   "PM_Driver": () => (/* binding */ PM_Driver),
/* harmony export */   "PM_Predictive": () => (/* binding */ PM_Predictive),
/* harmony export */   "PM_Smoothed": () => (/* binding */ PM_Smoothed),
/* harmony export */   "PM_Spatial": () => (/* binding */ PM_Spatial),
/* harmony export */   "RegisterMixin": () => (/* binding */ RegisterMixin),
/* harmony export */   "mix": () => (/* binding */ mix)
/* harmony export */ });
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/croquet */ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js");
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector */ "./node_modules/@croquet/worldcore-kernel/src/Vector.js");


// import { Constants } from "@croquet/worldcore-kernel";
// import { GetPawn } from "./Pawn";


// Mixin
//
// This contains support for mixins that can be added to Views and Models. You need to
// define View and Model mixins slightly differently, but they otherwise use the same
// syntax.
//
// This approach is based on:
//
// https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
// https://github.com/justinfagnani/mixwith.js


// -- View Mixins --
//
// Mixins are defined as functions that transform a class into an extended version
// of itself. The "mix" and "with" operators are semantic suger to make the construction
// of the composite class look nice.
//
// Since you don't know what class a mixin will be added to, you should generally set them
// up so they don't require arguments to their constructors and merely pass any parameter
// they receive straight through.


// -- Example --
//
// class Alpha {
//     constructor() {
//        }
// }
//
// const Beta = superclass => class extends superclass {
//     constructor(...args) {
//         super(...args);
//        }
// };
//
// const Gamma = superclass => class extends superclass {
//     constructor(...args) {
//         super(...args);
//        }
// };
//
// class Delta extends mix(Alpha).with(Beta, Gamma) {
//     constructor() {
//         super();
//     }
// }


// -- Model Mixins --
//
// Model mixins work just like View Mixins, but you need to define an init function instead
// of a constructor. Also you need to call RegisterMixin after you define them so they get
// added to the hash of the model code.


// -- Example --
//
// const ModelBeta = superclass => class extends superclass {
//     init(...args) {
//         super.init(...args);
//     }
// };
// RegisterMixin(ModelBeta);


//-- Inheritance --
//
// Mixins can "inherit" from other mixins by including the parent function in the child's extension
// definition:
//
// const ChildMixin = superclass => class extends ParentMixin(superclass) {};

//------------------------------------------------------------------------------------------
//-- Mixin ---------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_REGISTRY = [];
_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_USAGE = [];

const mix = superclass => new MixinFactory(superclass);
const RegisterMixin = mixin => _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_REGISTRY.push(mixin);

class MixinFactory  {
    constructor(superclass) {
        this.superclass = superclass;
    }

    with(...mixins) {
        _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Constants.WC_MIXIN_USAGE.push(mixins);
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}

//------------------------------------------------------------------------------------------
//-- Spatial -------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Spatial actors have a translation, rotation and scale in 3D space.
//
// They don't have any view-side smoothing, so the pawn will change its transform to exactly
// match the transform of the actor.

//-- Actor ---------------------------------------------------------------------------------

const AM_Spatial = superclass => class extends superclass {

    init(options) {
        super.init(options);
        this.listen("scaleSet", this.localChanged);
        this.listen("rotationSet", this.localChanged);
        this.listen("translationSet", this.localChanged);
    }

    localChanged() {
        this.$local = null;
        this.say("localChanged");
        this.globalChanged();
    }

    globalChanged() {
        this.$global = null;
        this.say("globalChanged");
        if (this.children) this.children.forEach(child => child.globalChanged());
    }

    get local() {
        if (!this.$local) this.$local = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_scaleRotationTranslation)(this.scale, this.rotation, this.translation);
        return [...this.$local];
    }

    get global() {
        if (this.$global) return [...this.$global];
        if (this.parent) {
            this.$global = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_multiply)(this.local, this.parent.global);
        } else {
            this.$global = this.local;
        }
        return [...this.$global];
    }

    get translation() { return this._translation?[...this._translation] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_zero)() };
    set translation(v) { this.set({translation: v}) };

    get rotation() { return this._rotation?[...this._rotation] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_identity)() };
    set rotation(q) { this.set({rotation: q}) };

    get scale() { return this._scale?[...this._scale] : [1,1,1] };
    set scale(v) { this.set({scale: v}) };
}
RegisterMixin(AM_Spatial);


//-- Pawn ----------------------------------------------------------------------------------

const PM_Spatial = superclass => class extends superclass {

constructor(...args) {
    super(...args);
    this.listenOnce("globalChanged", this.onGlobalChanged);
}

onGlobalChanged() { this.say("viewGlobalChanged"); }

get scale() { return this.actor.scale; }
get translation() { return this.actor.translation; }
get rotation() { return this.actor.rotation; }
get local() { return this.actor.local; }
get global() { return this.actor.global; }
get lookGlobal() { return this.global; } // Allows objects to have an offset camera position

};

//------------------------------------------------------------------------------------------
//-- Smoothed ------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Smoothed actors generate interpolation information when they get movement commands. Their
// pawns use this to reposition themselves on every frame update.
//
// Setting translation/rotation/scale will pop the pawn to the new value. If you want the transition
// to be interpolated, use moveTo, rotateTo, or scaleTo instead.

//-- Actor ---------------------------------------------------------------------------------

const AM_Smoothed = superclass => class extends AM_Spatial(superclass) {

    init(...args) {
        super.init(...args);
        this.listen("_scaleTo", this.scaleTo);
        this.listen("_rotateTo", this.rotateTo);
        this.listen("_translateTo", this.translateTo);
        this.listen("_positionTo", this.positionTo);
    }

    scaleTo(v) {
        this._scale = v;
        this.$local = null;
        this.$global = null;
        this.say("scaleTo", v);
    }

    rotateTo(q) {
        this._rotation = q;
        this.$local = null;
        this.$global = null;
        this.say("rotateTo", q);
    }

    translateTo(v) {
        this._translation = v;
        this.$local = null;
        this.$global = null;
        this.say("translateTo", v);
    }

    positionTo(data) {
        this._translation = data.v;
        this._rotation = data.q;
        this.$local = null;
        this.$global = null;
        this.say("rotateTo", data.q);
        this.say("translateTo", data.v);

    }

    moveTo(v) { this.translateTo(v)}

};
RegisterMixin(AM_Smoothed);

//-- Pawn ----------------------------------------------------------------------------------

// Tug is a value between 0 and 1 that controls the weighting between the two
// transforms. The closer tug is to 1, the more closely the pawn will track the actor,
// but the more vulnerable the pawn is to latency/stutters in the simulation.

// When the difference between actor and pawn scale/rotation/translation drops below an epsilon,
// interpolation is paused

const PM_Smoothed = superclass => class extends PM_Spatial(superclass) {

    constructor(...args) {
        super(...args);
        this.tug = 0.2;

        this._scale = this.actor.scale;
        this._rotation = this.actor.rotation;
        this._translation = this.actor.translation;
        this._global = this.actor.global;

        this.listenOnce("scaleSet", this.onScaleSet);
        this.listenOnce("rotationSet", this.onRotationSet);
        this.listenOnce("translationSet", this.onTranslationSet);

        this.listenOnce("scaleTo", this.onScaleTo);
        this.listenOnce("rotateTo", this.onRotateTo);
        this.listenOnce("translateTo", this.onTranslateTo);
    }

    set tug(t) {this._tug = t}
    get tug() { return this._tug; }

    set localOffset(m4) {
        this._localOffset = m4;
        this._local = null;
        this._global = null;
    }
    get localOffset() { return this._localOffset; }

    get scale() { return this._scale; }
    get rotation() { return this._rotation; }
    get translation() { return this._translation; }

    onLocalChanged(){
        this._local = null;
        this.onGlobalChanged();
    }

    onGlobalChanged(){
        this._global = null;
    }

    scaleTo(v, throttle) {
        this.say("_scaleTo", v, throttle)
    }

    rotateTo(q, throttle) {
        this.say("_rotateTo", q, throttle)
    }

    translateTo(v, throttle) {
        this.say("_translateTo", v, throttle)
    }

    positionTo(v, q, throttle) {
        this.say("_positionTo", {v,q}, throttle)
    }

    onScaleSet() {
        this._scale = this.actor.scale;
        this.onLocalChanged();
    }

    onRotationSet() {
        this._rotation = this.actor.rotation;
        this.onLocalChanged();
    }

    onTranslationSet() {
        this._translation = this.actor.translation;
        this.onLocalChanged();
    }

    onScaleTo(q) { this.isScaling = true; }
    onRotateTo(q) { this.isRotating = true; }
    onTranslateTo(v) { this.isTranslating = true; }

    get local() {
        if (this._local) return this. _local;
        if (this._localOffset) {
            this._local = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_multiply)(this._localOffset, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_scaleRotationTranslation)(this._scale, this._rotation, this._translation));
            return this._local;
        }
        this._local = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_scaleRotationTranslation)(this._scale, this._rotation, this._translation);
        return this._local;
    }

    get global() {
        if (this._global) return this._global;
        if (this.parent && this.parent.global) {
            this._global = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_multiply)(this.local, this.parent.global);
        } else {
            this._global = this.local;
        }
        return this._global;
    }

    update(time, delta) {
        super.update(time, delta);

        let tug = this.tug;
        if (delta) tug = Math.min(1, tug * delta / 15);

        if (this.isScaling) {
            if ((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_equals)(this._scale, this.actor.scale, .0001)) {
                this._scale = this.actor.scale;
                this.isScaling = false;
            } else {
                this._scale = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_lerp)(this._scale, this.actor.scale, tug);
            }
            this.onLocalChanged();
        }

        if (this.isRotating) {
            if ((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_equals)(this._rotation, this.actor.rotation, 0.000001)) {
                this._rotation = this.actor.rotation;
                this.isRotating = false;
            } else {
                this._rotation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_slerp)(this._rotation, this.actor.rotation, tug);
            }
            this.onLocalChanged();
        }

        if (this.isTranslating) {
            if ((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_equals)(this._translation, this.actor.translation, .0001)) {
                this._translation = this.actor.translation;
                this.isTranslating = false;
            } else {
                this._translation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_lerp)(this._translation, this.actor.translation, tug);
            }
            this.onLocalChanged();
        }

        if (!this._global) {
            this.say("viewGlobalChanged");
            if (this.children) this.children.forEach(child => child.onGlobalChanged()); // If our global changes, so do the globals of our children
        }


    }

}

//------------------------------------------------------------------------------------------
//-- PM_SmoothedDriver ---------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// This version of PM_Smoothed  sets the transform values instantly on the local pawn and only implements smoothing on other clients.

// export const PM_SmoothedDriver = superclass => class extends PM_Smoothed(superclass) {

//     constructor(...args) {
//         super(...args);
//         this.throttle = 100; //ms
//         this.ignore("scaleSet");
//         this.ignore("rotationSet");
//         this.ignore("translationSet");
//         this.ignore("positionSet");
//         }

//         positionTo(v, q, throttle) {
//             throttle = throttle || this.throttle;
//             this._translation = v;
//             this._rotation = q;
//             this.isTranslating = false;
//             this.isRotating = false;
//             this.onLocalChanged();
//             super.positionTo(v, q, throttle);
//         }

//         scaleTo(v, throttle) {
//             throttle = throttle || this.throttle;
//             this._scale = v;
//             this.isScaling = false;
//             this.onLocalChanged();
//             super.scaleTo(v, throttle);
//         }

//         rotateTo(q, throttle) {
//             throttle = throttle || this.throttle;
//             this._rotation = q;
//             this.isRotating = false;
//             this.onLocalChanged();
//             super.rotateTo(q, throttle);
//         }

//         translateTo(v, throttle)  {
//             throttle = throttle || this.throttle;
//             this._translation = v;
//             this.isTranslating = false;
//             this.onLocalChanged();
//             super.translateTo(v, throttle);

//         }

//     }

//------------------------------------------------------------------------------------------
//-- PM_Driver -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// You can add this to a PM_Smoothed pawn to make it more responsive to direct user input.
// Transform values are set instantly on the local pawn and smoothing only happens on remote instances.

    const PM_Driver = superclass => class extends superclass {

        constructor(...args) {
            super(...args);
            this.throttle = 100; //ms
            }

            positionTo(v, q, throttle) {
                throttle = throttle || this.throttle;
                this._translation = v;
                this._rotation = q;
                this.isTranslating = false;
                this.isRotating = false;
                this.onLocalChanged();
                super.positionTo(v, q, throttle);
            }

            scaleTo(v, throttle) {
                throttle = throttle || this.throttle;
                this._scale = v;
                this.isScaling = false;
                this.onLocalChanged();
                super.scaleTo(v, throttle);
            }

            rotateTo(q, throttle) {
                throttle = throttle || this.throttle;
                this._rotation = q;
                this.isRotating = false;
                this.onLocalChanged();
                super.rotateTo(q, throttle);
            }

            translateTo(v, throttle)  {
                throttle = throttle || this.throttle;
                this._translation = v;
                this.isTranslating = false;
                this.onLocalChanged();
                super.translateTo(v, throttle);
            }

        }

//------------------------------------------------------------------------------------------
//-- Predictive ----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Predictive actors maintain a primary view-side scale/rotation/translation that you can drive directly
// from player inputs so they responds quickly to player input. On every frame this
// transform is averaged with the official model-side values.
//
// If you're using them, you'll probably want to set:
//      * Session tps to 60 with no cheat beats
//      * AM_Predictive tick frequency to <16
//
// This will create the smoothest/fastest response.

//-- Actor ---------------------------------------------------------------------------------

const AM_Predictive = superclass => class extends AM_Smoothed(superclass) {

    get spin() { return this._spin?[...this._spin] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_identity)() }
    get velocity() { return this._velocity?[...this._velocity] : (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_zero)() }
    get tickStep() {return this._tickStep || 15}

    init(...args) {
        super.init(...args);
        this.future(0).tick(0);
    }

    tick(delta) {
        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_isZero)(this.spin)) {
            this.rotateTo((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_normalize)((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_slerp)(this.rotation, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_multiply)(this.rotation, this.spin), delta)));
        };
        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_isZero)(this.velocity)) {
            const relative = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_scale)(this.velocity, delta);
            const move = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_transform)(relative, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_rotationQ)(this.rotation));
            this.moveTo((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_add)(this.translation, move));
        }
        if (!this.doomed) this.future(this.tickStep).tick(this.tickStep);
    }

};
RegisterMixin(AM_Predictive);

//-- Pawn ----------------------------------------------------------------------------------

const PM_Predictive = superclass => class extends PM_Smoothed(superclass) {

    constructor(...args) {
        super(...args);
        this.spin = this.actor.spin;
        this.velocity = this.actor.velocity;
    }

    moveTo(v, throttle) {this.translateTo(v,throttle); }

    setVelocity(v, throttle) {
        this.set({velocity: v}, throttle)
    }

    setSpin(q, throttle) {
        this.set({spin: q}, throttle)
    }

    update(time, delta) {

        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_isZero)(this.spin)) {
            this._rotation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_normalize)((0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_slerp)(this._rotation, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.q_multiply)(this._rotation, this.spin), delta));
            this.onLocalChanged();
        }

        if (!(0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_isZero)(this.velocity))  {
            const relative = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_scale)(this.velocity, delta);
            const move = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_transform)(relative, (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.m4_rotationQ)(this.rotation));
            this._translation = (0,_Vector__WEBPACK_IMPORTED_MODULE_2__.v3_add)(this._translation, move);
            this.onLocalChanged();
        }
        super.update(time, delta);

    }

};

// Old name for Predictive objects

const AM_Avatar = AM_Predictive;
const PM_Avatar = PM_Predictive;


//------------------------------------------------------------------------------------------
//-- MouselookAvatar -----------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// MouselookAvatar is an extension of the normal avatar with a look direction that can be driven
// by mouse or other continous xy inputs. The avatar internally stores pitch and yaw information
// that can be used for animation if necessary. Both pitch and yaw are smoothed in the pawn.

// //-- Actor ---------------------------------------------------------------------------------

// export const AM_MouselookAvatar = superclass => class extends AM_Avatar(superclass) {

//     init(...args) {
//         this.listen("avatarLookTo", this.onLookTo);
//         super.init(...args);
//         this.set({rotation: q_euler(0, this.lookYaw, 0)});
//     }

//     get lookPitch() { return this._lookPitch || 0 };
//     get lookYaw() { return this._lookYaw || 0 };

//     onLookTo(e) {
//         this.set({lookPitch: e[0], lookYaw: e[1]});
//         this.rotateTo(q_euler(0, this.lookYaw, 0));
//     }

// }
// RegisterMixin(AM_MouselookAvatar);

// //-- Pawn ---------------------------------------------------------------------------------

// export const PM_MouselookAvatar = superclass => class extends PM_Avatar(superclass) {

//     constructor(...args) {
//         super(...args);

//         this._lookPitch = this.actor.lookPitch;
//         this._lookYaw = this.actor.lookYaw;

//         this.lookThrottle = 50;  // MS between throttled lookTo events
//         this.lastlookTime = this.time;

//         this.lookOffset = [0,0,0]; // Vector displacing the camera from the avatar origin.
//     }

//     get lookPitch() { return this._lookPitch}
//     get lookYaw() { return this._lookYaw}

//     lookTo(pitch, yaw) {
//         this.setLookAngles(pitch, yaw);
//         this.lastLookTime = this.time;
//         this.lastLookCache = null;
//         this.say("avatarLookTo", [pitch, yaw]);
//         this.say("lookGlobalChanged");
//     }

//     throttledLookTo(pitch, yaw) {
//         pitch = Math.min(Math.PI/2, Math.max(-Math.PI/2, pitch));
//         yaw = clampRad(yaw);
//         if (this.time < this.lastLookTime + this.lookThrottle) {
//             this.setLookAngles(pitch, yaw);
//             this.lastLookCache = {pitch, yaw};
//         } else {
//             this.lookTo(pitch,yaw);
//         }
//     }

//     setLookAngles(pitch, yaw) {
//         this._lookPitch = pitch;
//         this._lookYaw = yaw;
//         this._rotation = q_euler(0, yaw, 0);
//     }

//     get lookGlobal() {
//         const pitchRotation = q_axisAngle([1,0,0], this.lookPitch);
//         const yawRotation = q_axisAngle([0,1,0], this.lookYaw);

//         const modelLocal =  m4_scaleRotationTranslation(this.scale, yawRotation, this.translation)
//         let modelGlobal = modelLocal;
//         if (this.parent) modelGlobal = m4_multiply(modelLocal, this.parent.global);


//         const m0 = m4_translation(this.lookOffset);
//         const m1 = m4_rotationQ(pitchRotation);
//         const m2 = m4_multiply(m1, m0);
//         return m4_multiply(m2, modelGlobal);
//     }

//     update(time, delta) {
//         super.update(time, delta);

//         if (this.lastLookCache && this.time > this.lastLookTime + this.lookThrottle) {
//             this.lookTo(this.lastLookCache.pitch, this.lastLookCache.yaw);
//         }

//     }

// }




/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachedObject": () => (/* binding */ CachedObject),
/* harmony export */   "ClearObjectCache": () => (/* binding */ ClearObjectCache)
/* harmony export */ });
const objectCache = new Map();

function ClearObjectCache() {
    objectCache.forEach(value => value.destroy());
    objectCache.clear();
}

function CachedObject(name, generator) {
    if (objectCache.has(name)) return objectCache.get(name);
    const obj = generator();
    objectCache.set(name, obj);
    return obj;
}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js":
/*!************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Pawn.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPawn": () => (/* binding */ GetPawn),
/* harmony export */   "Pawn": () => (/* binding */ Pawn),
/* harmony export */   "PawnManager": () => (/* binding */ PawnManager)
/* harmony export */ });
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");
/* eslint-disable new-cap */


//------------------------------------------------------------------------------------------
//-- PawnManager ---------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

let pm; // Local pointer for pawns

class PawnManager extends _Root__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(name) {
        super(name || "PawnManager");
        pm = this;
        this.pawns = new Map();

        const actorManager = this.modelService("ActorManager");
        actorManager.actors.forEach(actor => this.spawnPawn(actor));

        for(const pawn of this.pawns.values()) { pawn.link() }; // recreate child links after all pawns are spawned

        this.subscribe("actor", "createActor", this.spawnPawn);
    }

    destroy() {
        const doomed = new Map(this.pawns);
        doomed.forEach(pawn => pawn.destroy());
        pm = null;
        super.destroy();
    }

    spawnPawn(actor) { if (actor.pawn) {
        const p = new actor.pawn(actor);
        p.link();}
    }

    add(pawn) {  this.pawns.set(pawn.actor.id, pawn); }
    has(id) { return this.pawns.has(id); }
    get(id) { return this.pawns.get(id); }
    delete(pawn) { this.pawns.delete(pawn.actor.id); }

    update(time, delta) {
        for(const pawn of this.pawns.values()) { if (!pawn.parent) pawn.fullUpdate(time, delta); };
    }
}

function GetPawn(actorId) { return pm.get(actorId); }

//------------------------------------------------------------------------------------------
//-- Pawn ----------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class Pawn extends _Root__WEBPACK_IMPORTED_MODULE_0__.WorldcoreView {

    constructor(actor) {
        super(actor);
        this._sayNext = {};
        this._sayCache = {};

        // this.sayLast = {};
        // this.sayCache ={};
        this._actor = actor;
        pm.add(this);
        this.link();

        this.listen("destroyActor", this.destroy);
        this.listen("parentSet", this.onParent);
    }

    link() { if(this.parent) this.parent.addChild(this); }

    get actor() {return this._actor};

    destroy() {
        this.doomed = true;
        pm.delete(this);
        this.detach(); // Calling View clean-up.
    }

    get parent() {
        if (this.actor.parent && !this._parent) this._parent = GetPawn(this.actor.parent.id);
        return this._parent;
    }

    get children() {
        return this._children;
    }

    addChild(child) {
        if (!this._children) this._children = new Set();
        this._children.add(child);
    }

    removeChild(child) {
        if (this._children) this._children.delete(child);
    }

    onParent(d) {
        if (d.o) {
            this._parent = null;
            GetPawn(d.o.id).removeChild(this);
        }
        if(this.parent) this.parent.addChild(this);
    }

    say(event, data, throttle = 0) {
        if (this.time < this._sayNext[event]) {
            this._sayCache[event] = { data, throttle };
        } else {
            this._sayNext[event] = this.time + throttle;
            this._sayCache[event] = null;
            this.publish(this.actor.id, event, data);
        }
    }

    // say(event, data, throttle = 0) {
    //     if (this.time < (this.sayLast[event] || 0) + throttle) {
    //         const expire = this.time + throttle;
    //         this.sayCache[event] = {data, expire};
    //     } else {
    //         this.sayLast[event] = this.time;
    //         this.publish(this.actor.id, event, data);
    //         this.sayCache[event] = null;
    //     }
    // }


    listen(event, callback) {
        this.subscribe(this.actor.id, event, callback);
    }

    listenImmediate(event, callback) {
        this.subscribe(this.actor.id,{event, handling: "immediate"}, callback);
    }

    ignore(event) {
        this.unsubscribe(this.actor.id, event);
    }

    listenOnce(event, callback) {
        this.subscribe(this.actor.id, {event, handling: "oncePerFrame"}, callback);
    }

    set(options, throttle = 0) {
        this.say("_set", options, throttle);
    }

    preUpdate(time, delta) {} // Called immediately before the main update
    update(time, delta) {}
    postUpdate(time, delta){} // Called immediately after the main update.

    fullUpdate(time, delta) {
        this.preUpdate(time, delta);
        this.update(time, delta);
        this.postUpdate(time, delta);

        for (const event in this._sayCache) { // Flushes expired cached events from throttled says
            const cache = this._sayCache[event];
            if (cache && time > this._sayNext[event]) {
                const { data, throttle } = cache;
                this._sayNext[event] = time + throttle;
                this._sayCache[event] = null;
                this.publish(this.actor.id, event, data);
            }
        }

        if (this.children) this.children.forEach(child => child.fullUpdate(time, delta));
    }

    // fullUpdate(time, delta) {
    //     this.preUpdate(time, delta);
    //     this.update(time, delta);
    //     this.postUpdate(time, delta);

    //     for (const event in this.sayCache) { // Flushes expired cached events from throttled says
    //         const cache = this.sayCache[event];
    //         // console.log(cache);
    //         if (cache) {
    //             console.log("flush");
    //             this.sayLast[event] = this.time;
    //             this.publish(this.actor.id, event, cache.data);
    //             this.sayCache[event] = null;
    //             // console.log(this.sayCache[event]);
    //         }
    //     }

    //     if (this.children) this.children.forEach(child => child.fullUpdate(time, delta));
    // }


}




/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Player.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Player.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_Player": () => (/* binding */ AM_Player),
/* harmony export */   "PM_Player": () => (/* binding */ PM_Player),
/* harmony export */   "PlayerManager": () => (/* binding */ PlayerManager)
/* harmony export */ });
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor */ "./node_modules/@croquet/worldcore-kernel/src/Actor.js");
/* harmony import */ var _Mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mixins */ "./node_modules/@croquet/worldcore-kernel/src/Mixins.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");




//------------------------------------------------------------------------------------------
//-- PlayerManager -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Maintains a list of players connected to the session. Your player manager should override the
// createPlayer() method.

class PlayerManager extends _Root__WEBPACK_IMPORTED_MODULE_2__.ModelService {

    init(name) {
        super.init(name ||'PlayerManager');
        this.players = new Map();
        this.subscribe(this.sessionId, "view-join", this.onJoin);
        this.subscribe(this.sessionId, "view-exit", this.onExit);
    }

    onJoin(viewId) {
        if (this.players.has(viewId)) console.warn("PlayerManager received duplicate view-join for viewId " + viewId);
        const player = this.createPlayer({playerId: viewId});
        if (!player) return;
        this.players.set(viewId, player);
        this.publish("playerManager", "create", player);
    }

    // This method can be overridden to create your specific actor type. Note that if you want to pass additional options
    // you need to add them to the existing options object.

    createPlayer(options) {
        return null;
    }

    destroyPlayer(player) {
        this.publish("playerManager", "destroy", player);
        player.destroy();
    }

    onExit(viewId) {
        const player = this.player(viewId);
        if (!player) return;
        this.destroyPlayer(player);
        this.players.delete(viewId);
    }

    get count() { return this.players.size }
    player(viewId) { return this.players.get(viewId) }

}
PlayerManager.register("PlayerManager");


//------------------------------------------------------------------------------------------
//-- Player --------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// A player actor is automatically created whenever a player joins. You should specify the player
// actor class in the playerActor method of your PlayerManager. The playerId is the viewId
// of the view that spawned the player actor.

//-- Actor ---------------------------------------------------------------------------------

const AM_Player = superclass => class extends superclass {

    get playerId() { return this._playerId }

};
(0,_Mixins__WEBPACK_IMPORTED_MODULE_1__.RegisterMixin)(AM_Player);

//-- Pawn ----------------------------------------------------------------------------------

const PM_Player = superclass => class extends superclass {

    // Returns true if this pawn or any of its parents is owned by the local player.

    get isMyPlayerPawn() {
        let p = this;
        do {
            if (p.actor && p.actor.playerId === p.viewId) return true;
            p = p.parent;
        } while (p);
        return false;
    }

};


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Render.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Render.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PM_Camera": () => (/* binding */ PM_Camera),
/* harmony export */   "PM_Visible": () => (/* binding */ PM_Visible),
/* harmony export */   "RenderManager": () => (/* binding */ RenderManager)
/* harmony export */ });
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root */ "./node_modules/@croquet/worldcore-kernel/src/Root.js");



//------------------------------------------------------------------------------------------
//-- PM_Visible  ---------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

const PM_Visible = superclass => class extends superclass {

    destroy() {
        super.destroy();
        const render = this.service("RenderManager");
        for (const layerName in render.layers) {
            const layer = render.layers[layerName];
            if (layer.has(this)) render.dirtyLayer(layerName);
            render.layers[layerName].delete(this);
        }
    }

    addToLayers(...names) {
        const render = this.service("RenderManager");
        names.forEach(name => {
            if (!render.layers[name]) render.layers[name] = new Set();
            render.layers[name].add(this);
            render.dirtyLayer(name);
        });
    }

    removeFromLayers(...names) {
        const render = this.service("RenderManager");
        names.forEach(name => {
            if (!render.layers[name]) return;
            render.layers[name].delete(this);
            if (render.layers[name].size === 0) {
                delete render.layers[name];
            }
            render.dirtyLayer(name);
        });
    }

    layers() {
        let result = [];
        const render = this.service("RenderManager");
        for (const layerName in render.layers) {
            const layer = render.layers[layerName];
            if (layer.has(this)) result.push(layerName);
        }
        return result;
    }        
};

//------------------------------------------------------------------------------------------
//-- PM_Camera -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

const PM_Camera = superclass => class extends superclass {};

//------------------------------------------------------------------------------------------
//-- RenderManager -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class RenderManager extends _Root__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(options = {}, name) {
        super(name);
        this.registerViewName("RenderManager"); // Alternate generic name
        this.layers = {};
    }

    dirtyLayer(name) {} // Renderer can use this to trigger a rebuild of renderer-specific layer data;

}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Root.js":
/*!************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Root.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetModelService": () => (/* binding */ GetModelService),
/* harmony export */   "GetViewService": () => (/* binding */ GetViewService),
/* harmony export */   "ModelRoot": () => (/* binding */ ModelRoot),
/* harmony export */   "ModelService": () => (/* binding */ ModelService),
/* harmony export */   "StartWorldcore": () => (/* binding */ StartWorldcore),
/* harmony export */   "ViewRoot": () => (/* binding */ ViewRoot),
/* harmony export */   "ViewService": () => (/* binding */ ViewService),
/* harmony export */   "WorldcoreModel": () => (/* binding */ WorldcoreModel),
/* harmony export */   "WorldcoreView": () => (/* binding */ WorldcoreView),
/* harmony export */   "viewRoot": () => (/* binding */ viewRoot)
/* harmony export */ });
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/croquet */ "./node_modules/@croquet/croquet/cjs/croquet-croquet.js");
/* harmony import */ var _croquet_croquet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_croquet_croquet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actor */ "./node_modules/@croquet/worldcore-kernel/src/Actor.js");
/* harmony import */ var _Pawn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pawn */ "./node_modules/@croquet/worldcore-kernel/src/Pawn.js");
/* harmony import */ var _ObjectCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectCache */ "./node_modules/@croquet/worldcore-kernel/src/ObjectCache.js");





//------------------------------------------------------------------------------------------
//-- WorldcoreModel ------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Extends the model base class with Worldcore-specific methods.

class WorldcoreModel extends _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Model {

    service(name) { return this.wellKnownModel(name) }

}
WorldcoreModel.register("WorldcoreModel");

//------------------------------------------------------------------------------------------
//-- ModelRoot -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class ModelRoot extends WorldcoreModel {

    static modelServices() { return []; }

    init() {
        super.init();
        this.beWellKnownAs("ModelRoot");
        this.services = new Set();
        this.services.add(_Actor__WEBPACK_IMPORTED_MODULE_1__.ActorManager.create());
        this.constructor.modelServices().forEach( service => {
            let options;
            if (service.service) { // Process extended service object
                options = service.options;
                service = service.service;
            }
            this.services.add(service.create(options));
        });

    }

}
ModelRoot.register("ModelRoot");

//------------------------------------------------------------------------------------------
//-- ModelService --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// A model service is a named singleton that's created by the root model. Do not instantiate
// model services directly.

class ModelService extends WorldcoreModel {

    static async asyncStart() {}

    init(name, options = {}) {
        super.init();
        this.name = name;
        if (!name) console.error("All services must have public names!");
        else if (this.wellKnownModel(name)) console.error("Duplicate service!");
        else this.beWellKnownAs(name);
    }

}
ModelService.register('ModelService');

function GetModelService(name) { return viewRoot.wellKnownModel(name) }

//------------------------------------------------------------------------------------------
//-- WorldcoreView -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Extends the view base class with Worldcore-specific methods.

class WorldcoreView extends _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.View {

    service(name) { return viewServices.get(name) }
    modelService(name) { return this.wellKnownModel(name) }
    get time() {return time1}
    get delta()  {return time1 - time0}

}

//------------------------------------------------------------------------------------------
//-- ViewRoot ------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// viewRoot is a special public global variable that stores the viewRoot.

let viewRoot;
let time0 = 0;
let time1 = 0;
const viewServices = new Map();
let pawnManager;

class ViewRoot extends WorldcoreView {

    static viewServices() { return []; }

    constructor(model) {
        super(model);
        this.model = model;
        viewRoot = this;
        time0 = 0;
        time1 = 0;
        viewServices.clear();
        (0,_ObjectCache__WEBPACK_IMPORTED_MODULE_3__.ClearObjectCache)();
        this.constructor.viewServices().forEach( service => {
            let options;
            let name = service.name; // either the class name, or the name property;
            if (service.service) { // Process extended service object
                options = service.options;
                service = service.service;
            }
            new service(options, name);
        });
        pawnManager = new _Pawn__WEBPACK_IMPORTED_MODULE_2__.PawnManager();
    }

    detach() {
        [...viewServices.values()].reverse().forEach(s => s.destroy());
        viewServices.clear();
        super.detach();
    }

    update(time) {
        time0 = time1;
        time1 = time;
        const delta = time1 - time0;
        let done = new Set();

        pawnManager.update(time, delta); // Pawns update before other services
        viewServices.forEach(s => {
            if (done.has(s)) {return;}
            if (s === pawnManager) return;
            done.add(s);
            if (s.update) s.update(time, delta);
        });
    }

}

//------------------------------------------------------------------------------------------
//-- ViewService ---------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class ViewService extends WorldcoreView {

    static async asyncStart() {}

    constructor(name) {
        super(viewRoot.model);
        this.model = viewRoot.model;
        this.registerViewName(name);
    }

    registerViewName(name) {
        if (!name) console.error("All services must have public names!");
        else if (viewServices.has(name)) console.error("Duplicate service!");
        else viewServices.set(name, this);
    }

    destroy() {
        this.detach();
        viewServices.delete(this.name);
    }

}

function GetViewService(name) { return viewServices.get(name) }

//------------------------------------------------------------------------------------------
//-- StartWorldcore ------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

async function StartWorldcore(options) {

    await Promise.all(options.model.modelServices().map(service => {
        if (service.service) service = service.service;
        return service.asyncStart();
    }));

    await Promise.all(options.view.viewServices().map(service => {
        if (service.service) service = service.service;
        return service.asyncStart();
    }));

    const session = await _croquet_croquet__WEBPACK_IMPORTED_MODULE_0__.Session.join(options);

    return session;
}


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Utilities.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Utilities.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerlinNoise": () => (/* binding */ PerlinNoise),
/* harmony export */   "PriorityQueue": () => (/* binding */ PriorityQueue),
/* harmony export */   "Shuffle": () => (/* binding */ Shuffle),
/* harmony export */   "TwoWayMap": () => (/* binding */ TwoWayMap)
/* harmony export */ });
//------------------------------------------------------------------------------------------
//-- PriorityQueue -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Implements a basic priority queue.

// If you wanted to set up a queue that sorted on key/value pairs it would look like this:
// const q = new PriorityQueue((a, b) => a.key < b.key);

const defaultComparator = (a, b) => a < b;

class PriorityQueue {

    constructor(comparator = defaultComparator) {
        this.items = [];
        this.comparator = comparator;
    }

    get isEmpty() { return (this.items.length === 0); }
    get count() { return this.items.length; }
    get top() { return this.items[0]; }

    clear() { this.items.length = 0; }

    push(item) {
        let n = this.items.length;
        while (n > 0 && !this.comparator(this.items[n >> 1], item)) {
            this.items[n] = this.items[n >> 1];
            n >>= 1;
        }
        this.items[n] = item;
    }

    pop() {
        const top = this.items[0];
        const last = this.items.pop();
        if (this.items.length > 0) {
            this.items[0] = last;
            this.heapify(0);
        }
        return top;
    }

    traverse(callback) {
        this.items.forEach(callback);
    }

    heapify(n) {
        let m = n;
        const left = n << 1;
        const right = left + 1;
        if (left < this.items.length && this.comparator(this.items[left], this.items[m])) m = left;
        if (right < this.items.length && this.comparator(this.items[right], this.items[m])) m = right;
        if (m === n) return;
        const swap = this.items[n];
        this.items[n] = this.items[m];
        this.items[m] = swap;
        this.heapify(m);
    }
}

//------------------------------------------------------------------------------------------
//-- PerlinNoise -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class PerlinNoise  {
    constructor() {
        this.generate();
    }

    generate() {
        this.hashTable = this.generateHashTable();
    }

    generateHashTable() {
        const permutation = [];
        for (let n = 0; n < 256; n++) permutation.push({key: Math.random(), value: n});
        permutation.sort((a, b) => a.key - b.key);
        const table = permutation.map(a => a.value);
        const table2 = table.concat(table);
        return table2;
    }

    signedNoise2D(x,y) {
        return this.noise2D(x,y) - 0.5;
    }

    noise2D(x,y) {
        const table = this.hashTable;
        const xInt= Math.floor(x);
        const yInt = Math.floor(y);
        const xf = x - xInt;
        const yf = y - yInt;
        const u = this.fade(xf);
        const v = this.fade(yf);
        const xi = xInt & 0xff;
        const yi = yInt & 0xff;
        const aa = table[table[xi   ] + yi];
        const ab = table[table[xi+1 ] + yi];
        const ba = table[table[xi   ] + yi+1];
        const bb = table[table[xi+1 ] + yi+1];

        const aaGrad = this.grad(aa, xf, yf);
        const abGrad = this.grad(ab, xf-1, yf);
        const baGrad = this.grad(ba, xf, yf-1);
        const bbGrad = this.grad(bb, xf-1, yf-1);

        const lerp0 = this.lerp(aaGrad, abGrad, u);
        const lerp1 = this.lerp(baGrad, bbGrad, u);

        return (this.lerp(lerp0, lerp1, v) + 1) / 2;
    }

    lerp(a, b, t) {
        return a + t * (b - a);
    }

    fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }

    grad(hash, x, y) {
        switch (hash&0x3) {
            case 0: return x + y;
            case 1: return x - y;
            case 2: return -x + y;
            case 3: return -x - y;
            default: return 0;
        }
    }

}


//------------------------------------------------------------------------------------------
//-- TwoWayMap -----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Holds a reverse map that maps values back onto keys

class TwoWayMap {
    constructor(map = new Map()) {
        this.map = map;
        this.rev = new Map();
        this.map.forEach((value, key) => { this.rev.set(value, key)})
    }

    clear() {
        this.map.clear();
        this.rev.clear();
    }

    set(key, value) {
        this.map.set(key, value);
        this.rev.set(value, key);
    }

    delete(key) {
        if (!this.map.has(key)) return;
        const value = this.map.get(key);
        this.map.delete(key);
        this.rev.delete(value);
    }

    get(key) { return this.map.get(key)}
    revGet(value) { return this.rev.get(value)}
    has(key) {return this.map.has(key)}
    revHas(value) {return this.rev.has(value)}

    forEach(callback) {this.map.forEach(callback)}
    revForEach(callback) {this.rev.forEach(callback)}
}

//------------------------------------------------------------------------------------------
//-- Shuffle -------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Returns an array of the specified length filled with random indices from 0 to length-1.
// Each index appears only once.

function Shuffle(length) {
    const out = new Array(length);
    for (let n = 0; n < length; n++) out[n] = n;
    let n = length;
    while(n) {
        const pick = Math.floor(Math.random() * n--);
        const swap = out[n];
        out[n] = out[pick];
        out[pick] = swap;
    }
    return out;
}


// shuffle(deck) {
//     let size = deck.length;
//     while (size) {
//         const pick = Math.floor(Math.random() * size--);
//         const swap = deck[size];
//         deck[size] = deck[pick];
//         deck[pick] = swap;
//     }
// }


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/Vector.js":
/*!**************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/Vector.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAU": () => (/* binding */ TAU),
/* harmony export */   "TO_DEG": () => (/* binding */ TO_DEG),
/* harmony export */   "TO_RAD": () => (/* binding */ TO_RAD),
/* harmony export */   "clampRad": () => (/* binding */ clampRad),
/* harmony export */   "gaussian": () => (/* binding */ gaussian),
/* harmony export */   "m2_identity": () => (/* binding */ m2_identity),
/* harmony export */   "m2_rotation": () => (/* binding */ m2_rotation),
/* harmony export */   "m2_zero": () => (/* binding */ m2_zero),
/* harmony export */   "m4_determinant": () => (/* binding */ m4_determinant),
/* harmony export */   "m4_getRotation": () => (/* binding */ m4_getRotation),
/* harmony export */   "m4_getTranslation": () => (/* binding */ m4_getTranslation),
/* harmony export */   "m4_identity": () => (/* binding */ m4_identity),
/* harmony export */   "m4_invert": () => (/* binding */ m4_invert),
/* harmony export */   "m4_multiply": () => (/* binding */ m4_multiply),
/* harmony export */   "m4_perspective": () => (/* binding */ m4_perspective),
/* harmony export */   "m4_rotation": () => (/* binding */ m4_rotation),
/* harmony export */   "m4_rotationQ": () => (/* binding */ m4_rotationQ),
/* harmony export */   "m4_rotationX": () => (/* binding */ m4_rotationX),
/* harmony export */   "m4_rotationY": () => (/* binding */ m4_rotationY),
/* harmony export */   "m4_rotationZ": () => (/* binding */ m4_rotationZ),
/* harmony export */   "m4_scale": () => (/* binding */ m4_scale),
/* harmony export */   "m4_scaleRotationTranslation": () => (/* binding */ m4_scaleRotationTranslation),
/* harmony export */   "m4_toNormal4": () => (/* binding */ m4_toNormal4),
/* harmony export */   "m4_translation": () => (/* binding */ m4_translation),
/* harmony export */   "m4_transpose": () => (/* binding */ m4_transpose),
/* harmony export */   "m4_zero": () => (/* binding */ m4_zero),
/* harmony export */   "q_axisAngle": () => (/* binding */ q_axisAngle),
/* harmony export */   "q_conjugate": () => (/* binding */ q_conjugate),
/* harmony export */   "q_dot": () => (/* binding */ q_dot),
/* harmony export */   "q_equals": () => (/* binding */ q_equals),
/* harmony export */   "q_euler": () => (/* binding */ q_euler),
/* harmony export */   "q_identity": () => (/* binding */ q_identity),
/* harmony export */   "q_invert": () => (/* binding */ q_invert),
/* harmony export */   "q_isZero": () => (/* binding */ q_isZero),
/* harmony export */   "q_lookAt": () => (/* binding */ q_lookAt),
/* harmony export */   "q_magnitude": () => (/* binding */ q_magnitude),
/* harmony export */   "q_multiply": () => (/* binding */ q_multiply),
/* harmony export */   "q_normalize": () => (/* binding */ q_normalize),
/* harmony export */   "q_pitch": () => (/* binding */ q_pitch),
/* harmony export */   "q_roll": () => (/* binding */ q_roll),
/* harmony export */   "q_slerp": () => (/* binding */ q_slerp),
/* harmony export */   "q_yaw": () => (/* binding */ q_yaw),
/* harmony export */   "rayTriangleIntersect": () => (/* binding */ rayTriangleIntersect),
/* harmony export */   "sphericalRandom": () => (/* binding */ sphericalRandom),
/* harmony export */   "toDeg": () => (/* binding */ toDeg),
/* harmony export */   "toRad": () => (/* binding */ toRad),
/* harmony export */   "v2_abs": () => (/* binding */ v2_abs),
/* harmony export */   "v2_add": () => (/* binding */ v2_add),
/* harmony export */   "v2_angle": () => (/* binding */ v2_angle),
/* harmony export */   "v2_ceil": () => (/* binding */ v2_ceil),
/* harmony export */   "v2_divide": () => (/* binding */ v2_divide),
/* harmony export */   "v2_dot": () => (/* binding */ v2_dot),
/* harmony export */   "v2_equals": () => (/* binding */ v2_equals),
/* harmony export */   "v2_floor": () => (/* binding */ v2_floor),
/* harmony export */   "v2_inverse": () => (/* binding */ v2_inverse),
/* harmony export */   "v2_isZero": () => (/* binding */ v2_isZero),
/* harmony export */   "v2_lerp": () => (/* binding */ v2_lerp),
/* harmony export */   "v2_magnitude": () => (/* binding */ v2_magnitude),
/* harmony export */   "v2_manhattan": () => (/* binding */ v2_manhattan),
/* harmony export */   "v2_max": () => (/* binding */ v2_max),
/* harmony export */   "v2_min": () => (/* binding */ v2_min),
/* harmony export */   "v2_multiply": () => (/* binding */ v2_multiply),
/* harmony export */   "v2_normalize": () => (/* binding */ v2_normalize),
/* harmony export */   "v2_random": () => (/* binding */ v2_random),
/* harmony export */   "v2_rotate": () => (/* binding */ v2_rotate),
/* harmony export */   "v2_scale": () => (/* binding */ v2_scale),
/* harmony export */   "v2_sqrMag": () => (/* binding */ v2_sqrMag),
/* harmony export */   "v2_sub": () => (/* binding */ v2_sub),
/* harmony export */   "v2_transform": () => (/* binding */ v2_transform),
/* harmony export */   "v2_zero": () => (/* binding */ v2_zero),
/* harmony export */   "v3_abs": () => (/* binding */ v3_abs),
/* harmony export */   "v3_add": () => (/* binding */ v3_add),
/* harmony export */   "v3_angle": () => (/* binding */ v3_angle),
/* harmony export */   "v3_ceil": () => (/* binding */ v3_ceil),
/* harmony export */   "v3_cross": () => (/* binding */ v3_cross),
/* harmony export */   "v3_divide": () => (/* binding */ v3_divide),
/* harmony export */   "v3_dot": () => (/* binding */ v3_dot),
/* harmony export */   "v3_equals": () => (/* binding */ v3_equals),
/* harmony export */   "v3_floor": () => (/* binding */ v3_floor),
/* harmony export */   "v3_inverse": () => (/* binding */ v3_inverse),
/* harmony export */   "v3_isZero": () => (/* binding */ v3_isZero),
/* harmony export */   "v3_lerp": () => (/* binding */ v3_lerp),
/* harmony export */   "v3_magnitude": () => (/* binding */ v3_magnitude),
/* harmony export */   "v3_manhattan": () => (/* binding */ v3_manhattan),
/* harmony export */   "v3_max": () => (/* binding */ v3_max),
/* harmony export */   "v3_min": () => (/* binding */ v3_min),
/* harmony export */   "v3_multiply": () => (/* binding */ v3_multiply),
/* harmony export */   "v3_normalize": () => (/* binding */ v3_normalize),
/* harmony export */   "v3_random": () => (/* binding */ v3_random),
/* harmony export */   "v3_rotate": () => (/* binding */ v3_rotate),
/* harmony export */   "v3_rotateX": () => (/* binding */ v3_rotateX),
/* harmony export */   "v3_rotateY": () => (/* binding */ v3_rotateY),
/* harmony export */   "v3_rotateZ": () => (/* binding */ v3_rotateZ),
/* harmony export */   "v3_scale": () => (/* binding */ v3_scale),
/* harmony export */   "v3_sqrMag": () => (/* binding */ v3_sqrMag),
/* harmony export */   "v3_sub": () => (/* binding */ v3_sub),
/* harmony export */   "v3_transform": () => (/* binding */ v3_transform),
/* harmony export */   "v3_zero": () => (/* binding */ v3_zero)
/* harmony export */ });
// Vector and matrix math
//

//--------------------------------------------------------------------------------
//-- Math Utilities --------------------------------------------------------------
//--------------------------------------------------------------------------------

const TO_RAD = Math.PI / 180;
const TO_DEG = 1 / TO_RAD;
const TAU = Math.PI * 2;

function toRad(x) { return x * TO_RAD; }
function toDeg(x) { return x * TO_DEG; }

function clampRad(x) {
    while (x < 0) x += TAU;
    return x % TAU;
}

function gaussian(count, step = 1, standardDeviation = 1) {
    const sd = 2 * standardDeviation * standardDeviation;
    const a = 1/Math.sqrt(Math.PI * sd);
    const b = 1/sd;
    const out = [a];
    for (let i = 1; i < count; i++) {
        const x = step * i;
        out.push(a * Math.E ** -(b * x * x));
    }
    return out;
}

function rayTriangleIntersect(start, aim, triangle) {
    const epsilon = 0.00001;
    const v0 = triangle[0];
    const v1 = triangle[1];
    const v2 = triangle[2];
    const edge1 = v3_sub(v1,v0);
    const edge2 = v3_sub(v2,v0);
    const h = v3_cross(aim, edge2);
    const a = v3_dot(edge1, h);
    if (a > -epsilon && a < epsilon) return null; // Aim is parallel to triangle
    const f = 1/a;
    const s = v3_sub(start,v0);
    const u = f * v3_dot(s,h);
    if (u < 0 || u > 1) return null;
    const q = v3_cross(s, edge1);
    const v = f * v3_dot(aim, q);
    if (v < 0 || u+v > 1) return null;
    const t = f * v3_dot(edge2, q);
    if (t < epsilon || t > 1/epsilon) return null;
    return v3_add(start, v3_scale(aim, t));
}

// returns [xyz] on surface of sphere with values -1 > p > 1
function sphericalRandom() {
    const u = Math.random();
    const v = Math.random();
    const root = 2 * Math.sqrt(u - u * u);
    const angle = TAU * v;
    return [root * Math.cos(angle), root * Math.sin(angle), 1-2*u];
}

//--------------------------------------------------------------------------------
//-- 2 Vectors -------------------------------------------------------------------
//--------------------------------------------------------------------------------

function v2_zero() {
    return [0,0];
}

// export function v2_unit() {
//     return [1,0];
// }

function v2_random() {
    const a = Math.random() * 2 * Math.PI;
    return [Math.cos(a), Math.sin(a)];
}

function v2_magnitude(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

function v2_sqrMag(v) { // Squared magnitude
    return (v[0] * v[0] + v[1] * v[1]);
}

function v2_normalize(v) {
    const m = 1/v2_magnitude(v);
    return [v[0]*m, v[1]*m];
}

function v2_abs(v) {
    return [Math.abs(v[0]), Math.abs(v[1])];
}

function v2_ceil(v) {
    return [Math.ceil(v[0]), Math.ceil(v[1])];
}

function v2_floor(v) {
    return [Math.floor(v[0]), Math.floor(v[1])];
}

function v2_inverse(v) {
    return [1/v[0], 1/v[1]];
}

function v2_scale(v,s) {
    return [v[0] * s, v[1] * s];
}

function v2_multiply(a,b) {
    return [a[0] * b[0], a[1] * b[1]];
}

function v2_divide(a,b) {
    return [a[0] / b[0], a[1] / b[1]];
}

// Clockwise in radians
// export function v2_rotate(v,a,c) {
//     const sinA = Math.sin(a);
//     const cosA = Math.cos(a);
//     if (c) {
//         const vc = v2_sub(v, c);
//         return v2_add(c, [cosA*vc[0] - sinA*vc[1], sinA*vc[0] + cosA*vc[1]]);
//     }
//     return [cosA*v[0] - sinA*v[1], sinA*v[0] + cosA*v[1]];
// }

function v2_rotate(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [cosA*v[0] - sinA*v[1], sinA*v[0] + cosA*v[1]];
}

function v2_add(a,b) {
    return [a[0] + b[0], a[1] + b[1]];
}

function v2_sub(a,b) {
    return [a[0] - b[0], a[1] - b[1]];
}

function v2_dot(a,b) {
    return a[0] * b[0] + a[1] * b[1];
}

function v2_min(a,b) {
    return [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
}

function v2_max(a,b) {
    return [Math.max(a[0], b[0]), Math.max(a[1], b[1])];
}

function v2_angle(a,b) {
    return Math.acos(Math.min(1,(Math.max(-1, v2_dot(v2_normalize(a), v2_normalize(b))))));
}

function v2_lerp(a,b,t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

function v2_equals(a,b,e = 0) { // e is an epsilon
    if (e) return (e > Math.abs(a[0]-b[0]) && e > Math.abs(a[1]-b[1]));
    return (a[0] === b[0] && a[1] === b[1]);
}

function v2_isZero(v) {
    return v[0] === 0 && v[1] === 0;
}

function v2_manhattan(a, b) {
    return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
}

function v2_transform(v, m) {
    const x = v[0], y = v[1];
    return ([
        m[0] * x + m[2] * y,
        m[1] * x + m[3] * y
    ]);
}

//--------------------------------------------------------------------------------
//-- 3 Vectors -------------------------------------------------------------------
//--------------------------------------------------------------------------------

function v3_zero() {
    return [0,0,0];
}

// export function v3_unit() {
//     return [1,1,1];
// }

// export function v3_random() {
//     const a = Math.random() * 2 * Math.PI;
//     const b = Math.acos(2 * Math.random() - 1);
//     return v3_rotateZ(v3_rotateY(v3_unit(),b),a);
// }

function v3_random() {
    const u = Math.random();
    const v = Math.random();
    const root = 2 * Math.sqrt(u - u * u);
    const angle = TAU * v;
    return [root * Math.cos(angle), root * Math.sin(angle), 1-2*u];
}

function v3_magnitude(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function v3_sqrMag(v) { // Squared magnitude
    return (v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function v3_normalize(v) {
    const m = 1/v3_magnitude(v);
    return [v[0]*m, v[1]*m, v[2]*m];
}

function v3_inverse(v) {
    return [1/v[0], 1/v[1], 1/v[2]];
}

function v3_abs(v) {
    return [Math.abs(v[0]), Math.v3_abs(v[1]), Math.abs(v[2])];
}

function v3_ceil(v) {
    return [Math.ceil(v[0]), Math.v3_ceil(v[1]), Math.ceil(v[2])];
}

function v3_floor(v) {
    return [Math.floor(v[0]), Math.floor(v[1]), Math.floor(v[2])];
}

function v3_scale(v,s) {
    return [v[0] * s, v[1] * s, v[2] * s];
}

// export function v3_opposite(v) {
//     return [v[0] * -1, v[1] * -1, v[2] * -1];
// }

function v3_multiply(a,b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}

function v3_divide(a,b) {
    return [a[0] / b[0], a[1] / b[1], a[2] / b[2]];
}

// Clockwise in radians looking along axis.
function v3_rotateX(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [v[0], cosA*v[1] - sinA*v[2], sinA*v[1] + cosA*v[2]];
}

function v3_rotateY(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [sinA*v[2] + cosA*v[0], v[1], cosA*v[2] - sinA*v[0]];
}

function v3_rotateZ(v,a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [cosA*v[0] - sinA*v[1], sinA*v[0] + cosA*v[1], v[2]];
}

function v3_add(a,b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function v3_sub(a,b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function v3_dot(a,b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function v3_cross(a,b) {
    const a0 = a[0], a1 = a[1], a2 = a[2];
    const b0 = b[0], b1 = b[1], b2 = b[2];
    return [a1 * b2 - a2 * b1, a2 * b0 - a0 * b2, a0 * b1 - a1 * b0];
}

function v3_min(a,b) {
    return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2])];
}

function v3_max(a,b) {
    return [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])];
}

// Returns manhattan disances between a and b
function v3_manhattan(a, b) {
    return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]) + Math.abs(a[2]-b[2]);
}

function v3_angle(a,b) {
    return Math.acos(Math.min(1,(Math.max(-1, v3_dot(v3_normalize(a), v3_normalize(b))))));
}

function v3_lerp(a,b,t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function v3_transform(v, m) {
    const x = v[0], y = v[1], z = v[2];
    const w = m[3] * x + m[7] * y + m[11] * z + m[15];
    return [
        (m[0] * x + m[4] * y + m[8] * z + m[12]) / w,
        (m[1] * x + m[5] * y + m[9] * z + m[13]) / w,
        (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
    ];
}

function v3_rotate(v, q) {
    const qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    const x = v[0], y = v[1], z = v[2];
    let uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    let uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    return [x + uvx + uuvx, y + uvy + uuvy, z + uvz + uuvz];
}

function v3_equals(a,b,e = 0) { // e is an epsilon
    if (e) return (e > Math.abs(a[0]-b[0]) && e > Math.abs(a[1]-b[1]) && e > Math.abs(a[2]-b[2]));
    return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]);
}

function v3_isZero(v) {
    return v[0] === 0 && v[1] === 0 && v[2] === 0;
}

//--------------------------------------------------------------------------------
//-- 4 Vectors -------------------------------------------------------------------
//--------------------------------------------------------------------------------

// export function v4_zero() {
//     return [0,0,0,0];
// }

// // export function v4_unit() {
// //     return [1,0,0,0];
// // }

// export function v4_magnitude(v) {
//     return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2] + v[3] * v[3]);
// }

// export function v4_sqrMag(v) { // Squared magnitude
//     return (v[0] * v[0] + v[1] * v[1] + v[2] * v[2] + v[3] * v[3]);
// }

// export function v4_normalize(v) {
//     const m = 1/v4_magnitude(v);
//     return [v[0]*m, v[1]*m, v[2]*m, v[3]*m];
// }

// export function v4_inverse(v) {
//     return [1/v[0], 1/v[1], 1/v[2], 1/v[3]];
// }

// export function v4_ceil(v) {
//     return [Math.ceil(v[0]), Math.v3_ceil(v[1]), Math.v3_ceil(v[2]), Math.v3_ceil(v[3])];
// }

// export function v4_floor(v) {
//     return [Math.floor(v[0]), Math.floor(v[1]), Math.floor(v[2]), Math.floor(v[3])];
// }

// export function v4_scale(v,s) {
//     return [v[0] * s, v[1] * s, v[2] * s, v[3] * s];
// }

// export function v4_multiply(a,b) {
//     return [a[0] * b[0], a[1] * b[1], a[2] * b[2], a[3] * b[3]];
// }

// export function v4_add(a,b) {
//     return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
// }

// export function v4_sub(a,b) {
//     return [a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3]];
// }

// export function v4_dot(a,b) {
//     return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]  + a[3] * b[3];
// }

// export function v4_min(a,b) {
//     return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2]), Math.min(a[3], b[3])];
// }

// export function v4_max(a,b) {
//     return [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])];
// }

// export function v4_transform(v, m) {
//         const x = v[0], y = v[1], z = v[2], w = v[3];
//         return [
//             m[0] * x + m[4] * y + m[8] * z + m[12] * w,
//             m[1] * x + m[5] * y + m[9] * z + m[13] * w,
//             m[2] * x + m[6] * y + m[10] * z + m[14] * w,
//             m[3] * x + m[7] * y + m[11] * z + m[15] * w,
//         ];
//       }

// export function v4_equals(a,b,e = 0) { // e is an epsilon
//     if (e) return (e > Math.abs(a[0]-b[0]) && e > Math.abs(a[1]-b[1]) && e > Math.abs(a[2]-b[2]) && e > Math.abs(a[3]-b[3]));
//     return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]);
// }

//--------------------------------------------------------------------------------
//-- 2x2 Matrices ----------------------------------------------------------------
//--------------------------------------------------------------------------------

function m2_zero() {
    return [
        0,0,
        0,0
    ];
}

function m2_identity() {
    return [
        1,0,
        0,1
    ];
}

// Clockwise in radians
function m2_rotation(angle) {
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);
    return [
        cosA, -sinA,
        sinA,cosA
    ];
}

//--------------------------------------------------------------------------------
//-- 3x3 Matrices ----------------------------------------------------------------
//--------------------------------------------------------------------------------

// export function m3_zero() {
//     return [
//         0,0,0,
//         0,0,0,
//         0,0,0
//     ];
// }

// export function m3_identity() {
//     return [
//         1,0,0,
//         0,1,0,
//         0,0,1
//     ];
// }

// export function m3_transpose(m) {
//     return [
//         m[0], m[3], m[6],
//         m[1], m[4], m[7],
//         m[2], m[5], m[8]
//     ];
// }

// export function m3_invert(m) {
//     const a00 = m[0], a01 = m[1], a02 = m[2];
//     const a10 = m[3], a11 = m[4], a12 = m[5];
//     const a20 = m[6], a21 = m[7], a22 = m[8];

//     const b00 = a11 * a22 - a21 * a12;
//     const b10 = a01 * a22 - a21 * a02;
//     const b20 = a01 * a12 - a11 * a02;

//     const b01 = a10 * a22 - a20 * a12;
//     const b11 = a00 * a22 - a20 * a02;
//     const b21 = a00 * a12 - a10 * a02;

//     const b02 = a10 * a21 - a20 * a11;
//     const b12 = a00 * a21 - a20 * a01;
//     const b22 = a00 * a11 - a10 * a01;

//     // // Calculate the determinant
//     const d = a00 * b00 + a01 * -b01 + a02 * b02;

//     return [
//         b00/d, -b10/d, b20/d,
//         -b01/d, b11/d, -b21/d,
//         b02/d, -b12/d, b22/d
//     ];
// }

// export function m3_multiply(a, b) {
//     const a00 = a[0], a01 = a[1], a02 = a[2];
//     const a10 = a[3], a11 = a[4], a12 = a[5];
//     const a20 = a[6], a21 = a[7], a22 = a[8];

//     const b00 = b[0], b01 = b[1], b02 = b[2];
//     const b10 = b[3], b11 = b[4], b12 = b[5];
//     const b20 = b[6], b21 = b[7], b22 = b[8];

//     return [
//         b00 * a00 + b01 * a10 + b02 * a20,
//         b00 * a01 + b01 * a11 + b02 * a21,
//         b00 * a02 + b01 * a12 + b02 * a22,

//         b10 * a00 + b11 * a10 + b12 * a20,
//         b10 * a01 + b11 * a11 + b12 * a21,
//         b10 * a02 + b11 * a12 + b12 * a22,

//         b20 * a00 + b21 * a10 + b22 * a20,
//         b20 * a01 + b21 * a11 + b22 * a21,
//         b20 * a02 + b21 * a12 + b22 * a22
//     ];
//   }



// export function m3_normalFromMat4(out, a) {
//     let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
//     let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
//     let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
//     let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

//     let b00 = a00 * a11 - a01 * a10;
//     let b01 = a00 * a12 - a02 * a10;
//     let b02 = a00 * a13 - a03 * a10;
//     let b03 = a01 * a12 - a02 * a11;
//     let b04 = a01 * a13 - a03 * a11;
//     let b05 = a02 * a13 - a03 * a12;
//     let b06 = a20 * a31 - a21 * a30;
//     let b07 = a20 * a32 - a22 * a30;
//     let b08 = a20 * a33 - a23 * a30;
//     let b09 = a21 * a32 - a22 * a31;
//     let b10 = a21 * a33 - a23 * a31;
//     let b11 = a22 * a33 - a23 * a32;

//     // Calculate the determinant
//     let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

//     if (!det) {
//       return null;
//     }
//     det = 1.0 / det;

//     out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
//     out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
//     out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

//     out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
//     out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
//     out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

//     out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
//     out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
//     out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

//     return out;
//   }


//--------------------------------------------------------------------------------
//-- 4x4 Matrices ----------------------------------------------------------------
//--------------------------------------------------------------------------------

function m4_zero() {
    return [
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0
    ];
}

function m4_identity() {
    return [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1
    ];
}

function m4_translation(v) {
    return [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        v[0],v[1],v[2],1
    ];
}

function m4_getTranslation(m) {
    return [m[12], m[13], m[14]];
}

// Accepts a scalar or a 3 vector
function m4_scale(s) {
    if (s instanceof Array) {
        return [
            s[0],0,0,0,
            0,s[1],0,0,
            0,0,s[2],0,
            0,0,0,1
        ];
    }
    return [
        s,0,0,0,
        0,s,0,0,
        0,0,s,0,
        0,0,0,1
    ];
}

// Clockwise in radians looking along axis.
function m4_rotation(axis, angle) {
    const n = v3_normalize(axis);
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);
    const minusCosA = 1-cosA;
    return [
        n[0] * n[0] * minusCosA + cosA,
        n[1] * n[0] * minusCosA + n[2] * sinA,
        n[2] * n[0] * minusCosA - n[1] * sinA,
        0,

        n[0] * n[1] * minusCosA - n[2] * sinA,
        n[1] * n[1] * minusCosA + cosA,
        n[2] * n[1] * minusCosA + n[0] * sinA,
        0,

        n[0] * n[2] * minusCosA + n[1] * sinA,
        n[1] * n[2] * minusCosA - n[0] * sinA,
        n[2] * n[2] * minusCosA + cosA,
        0,

        0,
        0,
        0,
        1
    ];
}

function m4_rotationX(a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [
        1,0,0,0,
        0,cosA,sinA,0,
        0,-sinA,cosA,0,
        0,0,0,1
    ];
}

function m4_rotationY(a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [
        cosA,0,-sinA,0,
        0,1,0,0,
        sinA,0,cosA,0,
        0,0,0,1
    ];
}

function m4_rotationZ(a) {
    const sinA = Math.sin(a);
    const cosA = Math.cos(a);
    return [
        cosA,sinA,0,0,
        -sinA,cosA,0,0,
        0,0,1,0,
        0,0,0,1
    ];
}

// Creates a rotation matrix from a quaternion
function m4_rotationQ(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;

    const xx = x * x2;
    const yx = y * x2;
    const yy = y * y2;
    const zx = z * x2;
    const zy = z * y2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;

    return [
        1 - yy - zz,
        yx + wz,
        zx - wy,
        0,

        yx - wz,
        1 - xx - zz,
        zy + wx,
        0,

        zx + wy,
        zy - wx,
        1 - xx - yy,
        0,

        0,
        0,
        0,
        1
    ];
}

// Extracts the rotation component and returns it as a quaternion

function m4_getRotation(m) {
    const trace = m[0] + m[5] + m[10];
    let s = 0;
    const q = [0,0,0,0];

    if (trace > 0) {
      s = Math.sqrt(trace + 1.0) * 2;
      q[3] = 0.25 * s;
      q[0] = (m[6] - m[9]) / s;
      q[1] = (m[8] - m[2]) / s;
      q[2] = (m[1] - m[4]) / s;
    } else if ((m[0] > m[5]) && (m[0] > m[10])) {
      s = Math.sqrt(1.0 + m[0] - m[5] - m[10]) * 2;
      q[3] = (m[6] - m[9]) / s;
      q[0] = 0.25 * s;
      q[1] = (m[1] + m[4]) / s;
      q[2] = (m[8] + m[2]) / s;
    } else if (m[5] > m[10]) {
      s = Math.sqrt(1.0 + m[5] - m[0] - m[10]) * 2;
      q[3] = (m[8] - m[2]) / s;
      q[0] = (m[1] + m[4]) / s;
      q[1] = 0.25 * s;
      q[2] = (m[6] + m[9]) / s;
    } else {
      s = Math.sqrt(1.0 + m[10] - m[0] - m[5]) * 2;
      q[3] = (m[1] - m[4]) / s;
      q[0] = (m[8] + m[2]) / s;
      q[1] = (m[6] + m[9]) / s;
      q[2] = 0.25 * s;
    }

    return q;
  }

// Applied in that order. Scale can be either a 3-vector or a scaler. Rotation is a quaternion.
function m4_scaleRotationTranslation(s, q, v) {

  const x = q[0], y = q[1], z = q[2], w = q[3];
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2;
  const yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  let sx = 1, sy = 1, sz = 1;
  if (s instanceof Array) {
    sx = s[0]; sy = s[1]; sz = s[2];
  } else {
    sx = s; sy = s; sz = s;
  }
  return [
    (1 - (yy + zz)) * sx,
    (xy + wz) * sx,
    (xz - wy) * sx,
    0,

    (xy - wz) * sy,
    (1 - (xx + zz)) * sy,
    (yz + wx) * sy,
    0,

    (xz + wy) * sz,
    (yz - wx) * sz,
    (1 - (xx + yy)) * sz,
    0,

    v[0],
    v[1],
    v[2],
    1
  ];


}

// FOV is vertical field of view in radians
function m4_perspective(fov, aspect, near, far) {
    const f = 1.0 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, (2 * far * near) * nf, 0
    ];

  }

function m4_transpose(m) {
    return [
        m[0], m[4], m[8], m[12],
        m[1], m[5], m[9], m[13],
        m[2], m[6], m[10], m[14],
        m[3], m[7], m[11], m[15]
    ];
}

function m4_determinant(m) {

    const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
    const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
    const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
    const a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];

    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;

    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

function m4_invert(m) {

    const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
    const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
    const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
    const a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];

    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;

    const d =  b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    return [
        (a11 * b11 - a12 * b10 + a13 * b09) / d,
        (a02 * b10 - a01 * b11 - a03 * b09) / d,
        (a31 * b05 - a32 * b04 + a33 * b03) / d,
        (a22 * b04 - a21 * b05 - a23 * b03) / d,

        (a12 * b08 - a10 * b11 - a13 * b07) / d,
        (a00 * b11 - a02 * b08 + a03 * b07) / d,
        (a32 * b02 - a30 * b05 - a33 * b01) / d,
        (a20 * b05 - a22 * b02 + a23 * b01) / d,

        (a10 * b10 - a11 * b08 + a13 * b06) / d,
        (a01 * b08 - a00 * b10 - a03 * b06) / d,
        (a30 * b04 - a31 * b02 + a33 * b00) / d,
        (a21 * b02 - a20 * b04 - a23 * b00) / d,

        (a11 * b07 - a10 * b09 - a12 * b06) / d,
        (a00 * b09 - a01 * b07 + a02 * b06) / d,
        (a31 * b01 - a30 * b03 - a32 * b00) / d,
        (a20 * b03 - a21 * b01 + a22 * b00) / d
    ];
}

// A is applied before b
function m4_multiply(a,b) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    const b00 = b[0], b01 = b[1], b02 = b[2], b03 = b[3];
    const b10 = b[4], b11 = b[5], b12 = b[6], b13 = b[7];
    const b20 = b[8], b21 = b[9], b22 = b[10], b23 = b[11];
    const b30 = b[12], b31 = b[13], b32 = b[14], b33 = b[15];

    // Cache only the current line of the second matrix

    return [
        a00*b00 + a01*b10 + a02*b20 + a03*b30,
        a00*b01 + a01*b11 + a02*b21 + a03*b31,
        a00*b02 + a01*b12 + a02*b22 + a03*b32,
        a00*b03 + a01*b13 + a02*b23 + a03*b33,

        a10*b00 + a11*b10 + a12*b20 + a13*b30,
        a10*b01 + a11*b11 + a12*b21 + a13*b31,
        a10*b02 + a11*b12 + a12*b22 + a13*b32,
        a10*b03 + a11*b13 + a12*b23 + a13*b33,

        a20*b00 + a21*b10 + a22*b20 + a23*b30,
        a20*b01 + a21*b11 + a22*b21 + a23*b31,
        a20*b02 + a21*b12 + a22*b22 + a23*b32,
        a20*b03 + a21*b13 + a22*b23 + a23*b33,

        a30*b00 + a31*b10 + a32*b20 + a33*b30,
        a30*b01 + a31*b11 + a32*b21 + a33*b31,
        a30*b02 + a31*b12 + a32*b22 + a33*b32,
        a30*b03 + a31*b13 + a32*b23 + a33*b33,

    ];
}

// Extracts the scaling/rotation components and performs an inverse/transpose operation to generate a 4x4 normal transform matrix.
function m4_toNormal4(m) {
    const a00 = m[0], a01 = m[1], a02 = m[2];
    const a10 = m[4], a11 = m[5], a12 = m[6];
    const a20 = m[8], a21 = m[9], a22 = m[10];

    const b00 = a11 * a22 - a21 * a12;
    const b10 = a01 * a22 - a21 * a02;
    const b20 = a01 * a12 - a11 * a02;

    const b01 = a10 * a22 - a20 * a12;
    const b11 = a00 * a22 - a20 * a02;
    const b21 = a00 * a12 - a10 * a02;

    const b02 = a10 * a21 - a20 * a11;
    const b12 = a00 * a21 - a20 * a01;
    const b22 = a00 * a11 - a10 * a01;

    // // Calculate the determinant
    const d = a00 * b00 + a01 * -b01 + a02 * b02;

    return [
        b00/d, -b01/d, b02/d, 0,
        -b10/d, b11/d, -b12/d, 0,
        b20/d, -b21/d, b22/d, 0,
        0, 0, 0, 1
    ];
}

// Extracts the scaling/rotation components and performs an inverse/transpose operation to generate a 3x3 normal transform matrix.
// export function m4_toNormal3(m) {
//     const a00 = m[0], a01 = m[1], a02 = m[2];
//     const a10 = m[4], a11 = m[5], a12 = m[6];
//     const a20 = m[8], a21 = m[9], a22 = m[10];

//     const b00 = a11 * a22 - a21 * a12;
//     const b10 = a01 * a22 - a21 * a02;
//     const b20 = a01 * a12 - a11 * a02;

//     const b01 = a10 * a22 - a20 * a12;
//     const b11 = a00 * a22 - a20 * a02;
//     const b21 = a00 * a12 - a10 * a02;

//     const b02 = a10 * a21 - a20 * a11;
//     const b12 = a00 * a21 - a20 * a01;
//     const b22 = a00 * a11 - a10 * a01;

//     // // Calculate the determinant
//     const d = a00 * b00 + a01 * -b01 + a02 * b02;

//     return [
//         b00/d, -b01/d, b02/d,
//         -b10/d, b11/d, -b12/d,
//         b20/d, -b21/d, b22/d
//     ];
// }

// generate ground plane matrix - no rotation out of the x/z plane
// export function m4_grounded(m) {
//     const g = [0,1,0] // the up vector
//     var x = [m[0], m[1], m[2]];
//     var z = v3_cross(x, g);
//     z[1] = 0;
//     z = v3_normalize(z);
//     x = v3_cross(g, z);
//     x[1] = 0;
//     x = v3_normalize(x)
//     return [x[0], x[1], x[2], 0,
//             0, 1, 0, 0,
//             z[0], z[1], z[2],0,
//             0, 0, 0, 1];

// }

// // this is faster if we can assume that x and z projections in y-plane are perpendicular
// export function m4_fastGrounded(m) {
//     var x = v3_normalize([m[0], 0, m[2]]);
//     var z = v3_normalize([m[8], 0, m[10]]);
//     return [x[0], x[1], x[2], 0,
//             0, 1, 0, 0,
//             z[0], z[1], z[2], 0,
//             0, 0, 0, 1];
// }
//--------------------------------------------------------------------------------
//-- Quaternions -----------------------------------------------------------------
//--------------------------------------------------------------------------------

function q_identity() {
    return [0,0,0,1];
}

function q_magnitude(q) {
    return Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
}

function q_normalize(q) {
    const m = 1/q_magnitude(q);
    return [q[0]*m, q[1]*m, q[2]*m, q[3]*m];
}

// If the quaternion is normalized, this is also its inverse.
function q_conjugate(q) {
    return [-q[0], -q[1], -q[2], q[3]];
}

function q_invert(q) { return q_conjugate(q) }

// Clockwise in radians looking along axis.
// Axis should be normalized
function q_axisAngle(axis, angle) {
    const half = angle * 0.5;
    const sinH = Math.sin(half);
    const cosH = Math.cos(half);
    return [sinH * axis[0], sinH * axis[1], sinH * axis[2], cosH];
}

// Given a forward vector and an up vector, generates the quaternion that will rotate
// the forward vector to look at the target.
function q_lookAt(f, u, t) {
    const epsilon = 0.00001;
    const dot = v3_dot(f,t);
    if (Math.abs(dot+1) < epsilon) return q_axisAngle(u, Math.PI)
    if (Math.abs(dot-1) < epsilon) return q_identity();
    const angle = Math.acos(dot);
    const axis = v3_normalize(v3_cross(f,t));
    return q_axisAngle(axis, angle);
}

// Creates a quaternion from the given Euler angles.
function q_euler(x, y ,z) {
    x *= 0.5
    y *= 0.5
    z *= 0.5
    const sinX = Math.sin(x);
    const cosX = Math.cos(x);
    const sinY = Math.sin(y);
    const cosY = Math.cos(y);
    const sinZ = Math.sin(z);
    const cosZ = Math.cos(z);

    return [
        sinX * cosY * cosZ - cosX * sinY * sinZ,
        cosX * sinY * cosZ + sinX * cosY * sinZ,
        cosX * cosY * sinZ - sinX * sinY * cosZ,
        cosX * cosY * cosZ + sinX * sinY * sinZ
    ];

}

// Returns the equivalent Euler angle around the x axis
function q_pitch(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    return Math.atan2(2*x*w - 2*y*z, 1 - 2*x*x - 2*z*z);
}

// Returns the equivalent Euler angle around the y axis
function q_yaw(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    return Math.atan2(2*y*w - 2*x*z, 1 - 2*y*y - 2*z*z);
}

// Returns the equivalent Euler angle around the z axis
function q_roll(q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    return Math.asin(2*x*y + 2*z*w);
}

// export function q_scale(q,s) {
//     return [q[0] * s, q[1] * s, q[2] * s, q[3] * s, q[4] * s];
// }

// export function q_add(a,b) {
//     return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
// }

function q_dot(a,b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]  + a[3] * b[3];
}

// A is applied before b
function q_multiply(a, b) {
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    const bx = b[0], by = b[1], bz = b[2], bw = b[3];
    return [
        bx * aw + by * az - bz * ay + bw * ax,
        by * aw - bx * az + bw * ay + bz * ax,
        bz * aw + bw * az + bx * ay - by * ax,
        bw * aw - bz * az - by * ay - bx * ax
    ];
}

function q_slerp(a,b,t) {
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = b[0], by = b[1], bz = b[2], bw = b[3];

    let omega, cosom, sinom, scale0, scale1;

    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }

    if ( (1.0 - cosom) > 0.00001 ) {
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        scale0 = 1.0 - t;
        scale1 = t;
    }

    const c0 = scale0 * ax + scale1 * bx;
    const c1 = scale0 * ay + scale1 * by;
    const c2 = scale0 * az + scale1 * bz;
    const c3 = scale0 * aw + scale1 * bw;

    return [c0,c1,c2,c3];
}

function q_equals(a,b,e = 0) { // e is an epsilon
    if (e) return Math.abs(q_dot(a,b)) + e >= 1;
    return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]);
}

function q_isZero(q) {
    return q[0] === 0 && q[1] === 0 && q[2] === 0;
}




//--------------------------------------------------------------------------------
//-- Dual Quaternions ------------------------------------------------------------
//--------------------------------------------------------------------------------

// export function q2_identity() {
//     return [0,0,0,1,0,0,0,0];
// }

// export function q2_magnitude(q) {
//     return Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
// }

// export function q2_rotation(q) {
//     return [...q,0,0,0,0];
// }

// export function q2_translation(t) {
//     return [0,0,0,1,...v3_scale(t,0.5),0];
// }

// export function q2_axisAngle(axis, angle) {
//     return q2_rotation(q_axisAngle(axis,angle));
// }

// export function q2_rotationTranslation(q,t) {
//     const ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5;
//     const bx = q[0], by = q[1], bz = q[2], bw = q[3];
//     return [bx,by,bz,bw, ax*bw+ay*bz-az*by, ay*bw+az*bx-ax*bz, az*bw+ax*by-ay*bx, -ax*bx-ay*by-az*bz];
// }

// export function q2_axisAngleTranslation(axis, angle, t) {
//     return q2_rotationTranslation(q_axisAngle(axis,angle), t);
// }

// export function q2_normalize(q2) {
//     const m = 1/q2_magnitude(q2);
//     const a0 = q2[0] * m, a1 = q2[1] * m, a2 = q2[2] * m, a3 = q2[3] * m;
//     const b0 = q2[4],  b1 = q2[5], b2 = q2[6], b3 = q2[7];
//     const dot = (a0 * b0) + (a1 * b1) + (a2 * b2) + (a3 * b3);
//     return [a0, a1, a2, a3, (b0-(a0*dot))*m, (b1-(a1*dot))*m, (b2-(a2*dot))*m, (b3-(a3*dot))*m];

// }


// export function q2_multiply(a, b) {
//     const ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3];
//     const ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7];
//     const bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
//     const bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7];
//     return [
//         bx0 * aw0 + bw0 * ax0 + by0 * az0 - bz0 * ay0,
//         by0 * aw0 + bw0 * ay0 + bz0 * ax0 - bx0 * az0,
//         bz0 * aw0 + bw0 * az0 + bx0 * ay0 - by0 * ax0,
//         bw0 * aw0 - bx0 * ax0 - by0 * ay0 - bz0 * az0,

//         bx0 * aw1 + bw0 * ax1 + by0 * az1 - bz0 * ay1 + bx1 * aw0 + bw1 * ax0 + by1 * az0 - bz1 * ay0,
//         by0 * aw1 + bw0 * ay1 + bz0 * ax1 - bx0 * az1 + by1 * aw0 + bw1 * ay0 + bz1 * ax0 - bx1 * az0,
//         bz0 * aw1 + bw0 * az1 + bx0 * ay1 - by0 * ax1 + bz1 * aw0 + bw1 * az0 + bx1 * ay0 - by1 * ax0,
//         bw0 * aw1 - bx0 * ax1 - by0 * ay1 - bz0 * az1 + bw1 * aw0 - bx1 * ax0 - by1 * ay0 - bz1 * az0
//     ];
//   }


/***/ }),

/***/ "./node_modules/@croquet/worldcore-kernel/src/ViewAssetCache.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@croquet/worldcore-kernel/src/ViewAssetCache.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsLoaded": () => (/* binding */ IsLoaded),
/* harmony export */   "LoadFont": () => (/* binding */ LoadFont),
/* harmony export */   "LoadImage": () => (/* binding */ LoadImage)
/* harmony export */ });
//----------------------------------------------------------------------------------------------------
// View Asset Cache
//
// Stores view assets that are loaded by URL. When you load an asset you can supply a callback that will be
// triggered when it finishes loading. (If the asset is already loaded, the callback is ignored.)
//----------------------------------------------------------------------------------------------------

const assetCache = new Map();
let assetID = 0;

function IsLoaded(url) {
    const entry = assetCache.get(url);
    return (entry && entry.isLoaded);
}

function LoadFont(url, onLoad) {
    let entry;
    if (assetCache.has(url)) {
        entry = assetCache.get(url);
    } else {
        const name = "font" + assetID++;
        entry = {
            name,
            element: new FontFace(name, "url(" + url + ")"),
            isLoaded: false,
            callbacks: []
        };
        assetCache.set(url, entry);
        entry.element.load().then(
            () => {
                document.fonts.add(entry.element);
                entry.isLoaded = true;
                entry.callbacks.forEach(callback => callback());
                entry.callbacks = [];
            },
            () => console.log("Font " + url + " not found!")
        );
    }
    if (onLoad && !entry.isLoaded) entry.callbacks.push(onLoad);
    return entry.name;
}

function LoadImage(url, onLoad) {
    let entry;
    if (assetCache.has(url)) {
        entry = assetCache.get(url);
        if (onLoad && !entry.isLoaded) {
            entry.callbacks.push(onLoad);
            return null;
        }
        return entry.element;
    }

    entry = {
        element: new Image(),
        isLoaded: false,
        callbacks: []
    };
    assetCache.set(url, entry);

    entry.element.onload = () => {
        entry.isLoaded = true;
        entry.callbacks.forEach(callback => callback(entry.element));
        entry.callbacks = [];
    };

    entry.element.onerror = () => console.log("Image " + url + " not found!");
    entry.element.src = url;

    if (onLoad && !entry.isLoaded) entry.callbacks.push(onLoad);
    return null;
}



/***/ })

}]);