!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.phoenix_live_view=t():e.phoenix_live_view=t()}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var i;n.r(t);var r="http://www.w3.org/1999/xhtml",o="undefined"==typeof document?void 0:document;function a(e,t){var n=e.nodeName,i=t.nodeName;return n===i||!!(t.actualize&&n.charCodeAt(0)<91&&i.charCodeAt(0)>90)&&n===i.toUpperCase()}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var c={OPTION:function(e,t){var n=e.parentNode;if(n){var i=n.nodeName.toUpperCase();"OPTGROUP"===i&&(i=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==i||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var i=e.firstChild;if(i){var r=i.nodeValue;if(r==n||!n&&r==e.placeholder)return;i.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,i,r=-1,o=0,a=e.firstChild;a;)if("OPTGROUP"===(i=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===i){if(a.hasAttribute("selected")){r=o;break}o++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=r}}},s=1,l=3,d=8;function h(){}function f(e){return e.id}var v=function(e){return function(t,n,u){if(u||(u={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var v=n;(n=o.createElement("html")).innerHTML=v}else n=function(e){var t;return!i&&o.createRange&&(i=o.createRange()).selectNode(o.body),i&&i.createContextualFragment?t=i.createContextualFragment(e):(t=o.createElement("body")).innerHTML=e,t.childNodes[0]}(n);var p,m=u.getNodeKey||f,y=u.onBeforeNodeAdded||h,g=u.onNodeAdded||h,b=u.onBeforeElUpdated||h,k=u.onElUpdated||h,w=u.onBeforeNodeDiscarded||h,x=u.onNodeDiscarded||h,E=u.onBeforeElChildrenUpdated||h,A=!0===u.childrenOnly,S={};function L(e){p?p.push(e):p=[e]}function C(e,t,n){!1!==w(e)&&(t&&t.removeChild(e),x(e),function e(t,n){if(t.nodeType===s)for(var i=t.firstChild;i;){var r=void 0;n&&(r=m(i))?L(r):(x(i),i.firstChild&&e(i,n)),i=i.nextSibling}}(e,n))}function N(e){g(e);for(var t=e.firstChild;t;){var n=t.nextSibling,i=m(t);if(i){var r=S[i];r&&a(t,r)&&(t.parentNode.replaceChild(r,t),T(r,t))}N(t),t=n}}function T(i,r,u){var h,f=m(r);if(f&&delete S[f],!n.isSameNode||!n.isSameNode(t)){if(!u){if(!1===b(i,r))return;if(e(i,r),k(i),!1===E(i,r))return}if("TEXTAREA"!==i.nodeName){var v,p,g,w,x=r.firstChild,A=i.firstChild;e:for(;x;){for(g=x.nextSibling,v=m(x);A;){if(p=A.nextSibling,x.isSameNode&&x.isSameNode(A)){x=g,A=p;continue e}h=m(A);var _=A.nodeType,P=void 0;if(_===x.nodeType&&(_===s?(v?v!==h&&((w=S[v])?A.nextSibling===w?P=!1:(i.insertBefore(w,A),p=A.nextSibling,h?L(h):C(A,i,!0),A=w):P=!1):h&&(P=!1),(P=!1!==P&&a(A,x))&&T(A,x)):_!==l&&_!=d||(P=!0,A.nodeValue!==x.nodeValue&&(A.nodeValue=x.nodeValue))),P){x=g,A=p;continue e}h?L(h):C(A,i,!0),A=p}if(v&&(w=S[v])&&a(w,x))i.appendChild(w),T(w,x);else{var I=y(x);!1!==I&&(I&&(x=I),x.actualize&&(x=x.actualize(i.ownerDocument||o)),i.appendChild(x),N(x))}x=g,A=p}for(;A;)p=A.nextSibling,(h=m(A))?L(h):C(A,i,!0),A=p}var H=c[i.nodeName];H&&H(i,r)}}!function e(t){if(t.nodeType===s)for(var n=t.firstChild;n;){var i=m(n);i&&(S[i]=n),e(n),n=n.nextSibling}}(t);var _=t,P=_.nodeType,I=n.nodeType;if(!A)if(P===s)I===s?a(t,n)||(x(t),_=function(e,t){for(var n=e.firstChild;n;){var i=n.nextSibling;t.appendChild(n),n=i}return t}(t,function(e,t){return t&&t!==r?o.createElementNS(t,e):o.createElement(e)}(n.nodeName,n.namespaceURI))):_=n;else if(P===l||P===d){if(I===P)return _.nodeValue!==n.nodeValue&&(_.nodeValue=n.nodeValue),_;_=n}if(_===n)x(t);else if(T(_,n,A),p)for(var H=0,D=p.length;H<D;H++){var R=S[p[H]];R&&C(R,R.parentNode,!1)}return!A&&_!==t&&t.parentNode&&(_.actualize&&(_=_.actualize(t.ownerDocument||o)),t.parentNode.replaceChild(_,t)),_}}(function(e,t){var n,i,r,o,a,u=t.attributes;for(n=u.length-1;n>=0;--n)r=(i=u[n]).name,o=i.namespaceURI,a=i.value,o?(r=i.localName||r,e.getAttributeNS(o,r)!==a&&e.setAttributeNS(o,r,a)):e.getAttribute(r)!==a&&e.setAttribute(r,a);for(n=(u=e.attributes).length-1;n>=0;--n)!1!==(i=u[n]).specified&&(r=i.name,(o=i.namespaceURI)?(r=i.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r))});function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(i=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"debug",function(){return C}),n.d(t,"Rendered",function(){return D}),n.d(t,"LiveSocket",function(){return R}),n.d(t,"Browser",function(){return V}),n.d(t,"DOM",function(){return O}),n.d(t,"View",function(){return B});var k=[1e3,1e4],w="data-phx-view",x="[".concat(w,"]"),E=["text","textarea","number","email","password","search","tel","url"],A=1,S="phx-",L=function(e,t){return console.error&&console.error(e,t)},C=function(e,t,n,i){console.log("".concat(e.id," ").concat(t,": ").concat(n," - "),i)},N=function(e){return"function"==typeof e?e:function(){return e}},T=function(e){return JSON.parse(JSON.stringify(e))},_=function(e,t){do{if(e.matches("[".concat(t,"]")))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType&&!e.matches(x));return null},P=function(e){return null!==e&&"object"===b(e)&&!(e instanceof Array)},I=function(e,t){return e&&t(e)},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new FormData(e),i=new URLSearchParams,r=!0,o=!1,a=void 0;try{for(var u,c=n.entries()[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=g(u.value,2),l=s[0],d=s[1];i.append(l,d)}}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}for(var h in t)i.append(h,t[h]);return i.toString()},D={mergeDiff:function(e,t){return!t.c&&this.isNewFingerprint(t)?t:(function e(t,n){for(var i in n){var r=n[i],o=t[i];P(r)&&P(o)?(o.d&&!r.d&&delete o.d,e(o,r)):t[i]=r}}(e,t),e)},isNewFingerprint:function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).s},componentToString:function(e,t){var n=e[t]||L("no component for CID ".concat(t),e),i=document.createElement("template");i.innerHTML=this.toString(n,e);var r=i.content;return Array.from(r.childNodes).forEach(function(e){e.nodeType===Node.ELEMENT_NODE?e.setAttribute("data-phx-component",t):(""!==e.nodeValue.trim()&&L("only HTML element tags are allowed at the root of components.\n\n"+'got: "'.concat(e.nodeValue.trim(),'"\n\n')+"within:\n",i.innerHTML.trim()),e.remove())}),i.innerHTML},toString:function(e){var t={buffer:"",components:arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.c||{}};return this.toOutputBuffer(e,t),t.buffer},toOutputBuffer:function(e,t){if(e.d)return this.comprehensionToBuffer(e,t);var n=e.s;t.buffer+=n[0];for(var i=1;i<n.length;i++)this.dynamicToBuffer(e[i-1],t),t.buffer+=n[i]},comprehensionToBuffer:function(e,t){for(var n=e.d,i=e.s,r=0;r<n.length;r++){var o=n[r];t.buffer+=i[0];for(var a=1;a<i.length;a++)this.dynamicToBuffer(o[a-1],t),t.buffer+=i[a]}},dynamicToBuffer:function(e,t){"number"==typeof e?t.buffer+=this.componentToString(t.components,e):P(e)?this.toOutputBuffer(e,t):t.buffer+=e},pruneCIDs:function(e,t){return t.forEach(function(t){return delete e.c[t]}),e}},R=function(){function e(t,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(p(this,e),this.unloaded=!1,!n||"Object"===n.constructor.name)throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');this.socket=new n(t,r),this.bindingPrefix=r.bindingPrefix||S,this.opts=r,this.views={},this.params=N(r.params||{}),this.viewLogger=r.viewLogger,this.activeElement=null,this.prevActive=null,this.prevInput=null,this.prevValue=null,this.silenced=!1,this.root=null,this.main=null,this.linkRef=0,this.href=window.location.href,this.pendingLink=null,this.currentLocation=T(window.location),this.hooks=r.hooks||{},this.socket.onOpen(function(){i.isUnloaded()&&(i.destroyAllViews(),i.joinRootViews(),i.detectMainView()),i.unloaded=!1}),window.addEventListener("beforeunload",function(e){i.unloaded=!0}),this.bindTopLevelEvents()}return y(e,[{key:"getSocket",value:function(){return this.socket}},{key:"log",value:function(e,t,n){if(this.viewLogger){var i=g(n(),2),r=i[0],o=i[1];this.viewLogger(e,t,r,o)}}},{key:"connect",value:function(){var e=this;return["complete","loaded","interactive"].indexOf(document.readyState)>=0?(this.joinRootViews(),this.detectMainView()):document.addEventListener("DOMContentLoaded",function(){e.joinRootViews(),e.detectMainView()}),this.socket.connect()}},{key:"disconnect",value:function(){this.socket.disconnect()}},{key:"reloadWithJitter",value:function(){this.disconnect();var e=k[0],t=k[1],n=Math.floor(Math.random()*(t-e+1))+e;setTimeout(function(){return window.location.reload()},n)}},{key:"getHookCallbacks",value:function(e){return this.hooks[e]}},{key:"isUnloaded",value:function(){return this.unloaded}},{key:"getBindingPrefix",value:function(){return this.bindingPrefix}},{key:"binding",value:function(e){return"".concat(this.getBindingPrefix()).concat(e)}},{key:"channel",value:function(e,t){return this.socket.channel(e,t)}},{key:"joinRootViews",value:function(){var e=this;O.all(document,"".concat(x,":not([").concat("data-phx-parent-id","])"),function(t){var n=e.joinView(t,null,e.getHref());e.root=e.root||n})}},{key:"detectMainView",value:function(){var e=this;O.all(document,"".concat("[data-phx-main=true]"),function(t){var n=e.getViewByEl(t);n&&(e.main=n)})}},{key:"replaceMain",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.setPendingLink(e);this.main.showLoader(A);var r=this.main.el,o=this.main.id,a=this.main.isLoading();V.fetchPage(e,function(u,c){if(200!==u)return V.redirect(e);var s=document.createElement("div");s.innerHTML=c,t.joinView(s.firstChild,null,e,function(e){t.commitPendingLink(i)?(n&&n(),t.destroyViewById(o),r.replaceWith(e.el),t.main=e,a&&t.main.showLoader()):e.destroy()})})}},{key:"joinView",value:function(e,t,n,i){if(!this.getViewByEl(e)){var r=new B(e,this,t,n);return this.views[r.id]=r,r.join(i),r}}},{key:"owner",value:function(e,t){var n=this,i=I(e.closest(x),function(e){return n.getViewByEl(e)});i&&t(i)}},{key:"getViewByEl",value:function(e){return this.views[e.id]}},{key:"onViewError",value:function(e){this.dropActiveElement(e)}},{key:"destroyAllViews",value:function(){for(var e in this.views)this.destroyViewById(e)}},{key:"destroyViewByEl",value:function(e){return this.destroyViewById(e.id)}},{key:"destroyViewById",value:function(e){var t=this.views[e];t&&(delete this.views[t.id],this.root&&t.id===this.root.id&&(this.root=null),t.destroy())}},{key:"setActiveElement",value:function(e){var t=this;if(this.activeElement!==e){this.activeElement=e;var n=function(){e===t.activeElement&&(t.activeElement=null),e.removeEventListener("mouseup",t),e.removeEventListener("touchend",t)};e.addEventListener("mouseup",n),e.addEventListener("touchend",n)}}},{key:"getActiveElement",value:function(){return document.activeElement===document.body&&this.activeElement||document.activeElement}},{key:"dropActiveElement",value:function(e){this.prevActive&&e.ownsElement(this.prevActive)&&(this.prevActive=null)}},{key:"restorePreviouslyActiveFocus",value:function(){this.prevActive&&this.prevActive!==document.body&&this.prevActive.focus()}},{key:"blurActiveElement",value:function(){this.prevActive=this.getActiveElement(),this.prevActive!==document.body&&this.prevActive.blur()}},{key:"bindTopLevelEvents",value:function(){this.bindClicks(),this.bindNav(),this.bindForms(),this.bindTargetable({keyup:"keyup",keydown:"keydown"},function(e,t,n,i,r,o){n.pushKey(i,t,r,{altGraphKey:e.altGraphKey,altKey:e.altKey,charCode:e.charCode,code:e.code,ctrlKey:e.ctrlKey,key:e.key,keyCode:e.keyCode,keyIdentifier:e.keyIdentifier,keyLocation:e.keyLocation,location:e.location,metaKey:e.metaKey,repeat:e.repeat,shiftKey:e.shiftKey,which:e.which})}),this.bindTargetable({blur:"focusout",focus:"focusin"},function(e,t,n,i,r,o){o||n.pushEvent(t,i,r,{type:t})}),this.bindTargetable({blur:"blur",focus:"focus"},function(e,t,n,i,r,o){o&&"window"!==!o&&n.pushEvent(t,i,r,{type:e.type})})}},{key:"setPendingLink",value:function(e){this.linkRef++;this.linkRef;return this.pendingLink=e,this.linkRef}},{key:"commitPendingLink",value:function(e){return this.linkRef===e&&(this.href=this.pendingLink,this.pendingLink=null,!0)}},{key:"getHref",value:function(){return this.href}},{key:"hasPendingLink",value:function(){return!!this.pendingLink}},{key:"bindTargetable",value:function(e,t){var n=this,i=function(i){var r=e[i];n.on(r,function(e){var r=n.binding(i),o=n.binding("target"),a=e.target.getAttribute&&e.target.getAttribute(r);a&&!e.target.getAttribute(o)?n.owner(e.target,function(r){n.debounce(e.target,e,function(){return t(e,i,r,e.target,a,null)})}):O.all(document,"[".concat(r,"][").concat(o,"=window]"),function(o){var a=o.getAttribute(r);n.owner(o,function(r){n.debounce(o,e,function(){return t(e,i,r,o,a,"window")})})})})};for(var r in e)i(r)}},{key:"bindClicks",value:function(){var e=this;window.addEventListener("click",function(t){var n=e.binding("click"),i=_(t.target,n),r=i&&i.getAttribute(n);if(r){"#"===i.getAttribute("href")&&t.preventDefault();var o={altKey:t.altKey,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,x:t.x||t.clientX,y:t.y||t.clientY,pageX:t.pageX,pageY:t.pageY,screenX:t.screenX,screenY:t.screenY};e.owner(i,function(n){e.debounce(i,t,function(){return n.pushEvent("click",i,r,o)})})}},!1)}},{key:"bindNav",value:function(){var e=this;V.canPushState()&&(window.onpopstate=function(t){if(e.registerNewLocation(window.location)){var n=window.location.href;e.main.isConnected()?e.main.pushInternalLink(n):e.replaceMain(n)}},window.addEventListener("click",function(t){var n=_(t.target,"data-phx-live-link"),i=n&&n.getAttribute("data-phx-live-link");if(i){var r=n.href;t.preventDefault(),e.main.pushInternalLink(r,function(){V.pushState(i,{},r),e.registerNewLocation(window.location)})}},!1))}},{key:"registerNewLocation",value:function(e){var t=this.currentLocation;return t.pathname+t.search!==e.pathname+e.search&&(this.currentLocation=T(e),!0)}},{key:"bindForms",value:function(){var e=this;this.on("submit",function(t){var n=t.target.getAttribute(e.binding("submit"));n&&(t.preventDefault(),t.target.disabled=!0,e.owner(t.target,function(e){return e.submitForm(t.target,n)}))},!1);for(var t=["change","input"],n=0;n<t.length;n++){var i=t[n];this.on(i,function(t){var n=t.target,i=n.form&&n.form.getAttribute(e.binding("change"));if(i){var r=JSON.stringify(new FormData(n.form).getAll(n.name));e.prevInput===n&&e.prevValue===r||"number"===n.type&&n.validity&&n.validity.badInput||(e.prevInput=n,e.prevValue=r,e.owner(n,function(r){O.isTextualInput(n)?O.putPrivate(n,"phx-has-focused",!0):e.setActiveElement(n),e.debounce(n,t,function(){return r.pushInput(n,i,t)})}))}},!1)}}},{key:"debounce",value:function(e,t,n){O.debounce(e,t,this.binding("debounce"),this.binding("throttle"),n)}},{key:"silenceEvents",value:function(e){this.silenced=!0,e(),this.silenced=!1}},{key:"on",value:function(e,t){var n=this;window.addEventListener(e,function(e){n.silenced||t(e)})}}]),e}(),V={canPushState:function(){return void 0!==history.pushState},fetchPage:function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.timeout=3e4,n.setRequestHeader("content-type","text/html"),n.setRequestHeader("cache-control","max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"),n.setRequestHeader("x-requested-with","live-link"),n.onerror=function(){return t(400)},n.ontimeout=function(){return t(504)},n.onreadystatechange=function(){if(4===n.readyState)return"live-link"!==n.getResponseHeader("x-requested-with")?t(400):200!==n.status?t(n.status):void t(200,n.responseText)},n.send()},pushState:function(e,t,n){this.canPushState()?n!==window.location.href&&history[e+"State"](t,"",n):this.redirect(n)},setCookie:function(e,t){document.cookie="".concat(e,"=").concat(t)},getCookie:function(e){return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e,"s*=s*([^;]*).*$)|^.*$")),"$1")},redirect:function(e,t){t&&V.setCookie("__phoenix_flash__",t+"; max-age=60000; path=/"),window.location=e}},O={all:function(e,t,n){var i=Array.from(e.querySelectorAll(t));return n?i.forEach(n):i},findComponentNodeList:function(e,t){return this.all(e,"[".concat("data-phx-component",'="').concat(t,'"]'))},private:function(e,t){return e.phxPrivate&&e.phxPrivate[t]},deletePrivate:function(e,t){e.phxPrivate&&delete e.phxPrivate[t]},putPrivate:function(e,t,n){e.phxPrivate||(e.phxPrivate={}),e.phxPrivate[t]=n},copyPrivates:function(e,t){t.phxPrivate&&(e.phxPrivate=T(t.phxPrivate))},debounce:function(e,t,n,i,r){var o=this,a=e.getAttribute(n),u=e.getAttribute(i),c=a||u;switch(c){case null:return r();case"blur":if(this.private(e,"debounce-blur"))return;return e.addEventListener("blur",function(){return r()}),void this.putPrivate(e,"debounce-blur",c);default:var s=parseInt(c);if(isNaN(s))return L("invalid throttle/debounce value: ".concat(c));if(u&&"keydown"===t.type){var l=this.private(e,"debounce-prev-key");if(this.putPrivate(e,"debounce-prev-key",t.which),l!==t.which)return r()}if(this.private(e,"debounce-timer"))return;var d=function(t){u&&"phx-change"===t.type&&t.detail.triggeredBy.name===e.name||(clearTimeout(o.private(e,"debounce-timer")),o.deletePrivate(e,"debounce-timer"))};this.putPrivate(e,"debounce-timer",setTimeout(function(){e.form&&(e.form.removeEventListener("phx-change",d),e.form.removeEventListener("submit",d)),o.deletePrivate(e,"debounce-timer"),u||r()},s)),e.form&&(e.form.addEventListener("phx-change",d),e.form.addEventListener("submit",d)),u&&r()}},disableForm:function(e,t){var n="".concat(t).concat("disable-with");e.classList.add("phx-loading"),O.all(e,"[".concat(n,"]"),function(e){var t=e.getAttribute(n);e.setAttribute("".concat(n,"-restore"),e.innerText),e.innerText=t}),O.all(e,"button",function(e){e.setAttribute("data-phx-disabled",e.disabled),e.disabled=!0}),O.all(e,"input",function(e){e.setAttribute("data-phx-readonly",e.readOnly),e.readOnly=!0})},restoreDisabledForm:function(e,t){var n="".concat(t).concat("disable-with");e.classList.remove("phx-loading"),O.all(e,"[".concat(n,"]"),function(e){var t=e.getAttribute("".concat(n,"-restore"));t&&("INPUT"===e.nodeName?e.setAttribute("value",t):e.innerText=t,e.removeAttribute("".concat(n,"-restore")))}),O.all(e,"button",function(e){var t=e.getAttribute("data-phx-disabled");t&&(e.disabled="true"===t,e.removeAttribute("data-phx-disabled"))}),O.all(e,"input",function(e){var t=e.getAttribute("data-phx-readonly");t&&(e.readOnly="true"===t,e.removeAttribute("data-phx-readonly"))})},discardError:function(e,t){var n=t.getAttribute&&t.getAttribute("data-phx-error-for");if(n){var i=e.querySelector("#".concat(n));!n||this.private(i,"phx-has-focused")||this.private(i.form,"phx-has-submitted")||(t.style.display="none")}},isPhxChild:function(e){return e.getAttribute&&e.getAttribute("data-phx-parent-id")},patch:function(e,t,n,i,r){var o={added:[],updated:[],discarded:[],phxChildrenAdded:[]},a=e.liveSocket.getActiveElement(),u=a&&O.isTextualInput(a)?a:{},c=u.selectionStart,s=u.selectionEnd,l=e.liveSocket.binding("update"),d=g(this.buildDiffContainer(t,i,l,r),2),h=d[0],f=d[1];return v(f,h.outerHTML,{childrenOnly:!0,onBeforeNodeAdded:function(e){return O.discardError(f,e),e},onNodeAdded:function(t){O.isPhxChild(t)&&e.ownsElement(t)&&o.phxChildrenAdded.push(t),o.added.push(t)},onNodeDiscarded:function(e){o.discarded.push(e)},onBeforeNodeDiscarded:function(t){if(O.isPhxChild(t))return e.liveSocket.destroyViewByEl(t),!0},onBeforeElUpdated:function(e,t){if("ignore"===e.getAttribute(l))return O.mergeAttrs(e,t),o.updated.push({fromEl:e,toEl:e}),!1;if("number"===e.type&&e.validity&&e.validity.badInput)return!1;if(O.isPhxChild(t)){var n=e.getAttribute("data-phx-static");return O.mergeAttrs(e,t),e.setAttribute("data-phx-static",n),!1}return O.copyPrivates(t,e),O.discardError(f,t),O.isTextualInput(e)&&e===a?(O.mergeInputs(e,t),o.updated.push({fromEl:e,toEl:e}),!1):(o.updated.push({fromEl:e,toEl:t}),!0)}}),e.liveSocket.silenceEvents(function(){return O.restoreFocus(a,c,s)}),O.dispatchEvent(document,"phx:update"),o},dispatchEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(i)},cloneNode:function(e,t){var n=e.cloneNode();return n.innerHTML=t||e.innerHTML,n},buildDiffContainer:function(e,t,n,i){var r=this,o=e,a=null,u=function(e){return e.nodeType===Node.ELEMENT_NODE},c=function(e){return e.id||L("append/prepend children require IDs, got: ",e)};if("number"==typeof i){o=e.querySelector("[".concat("data-phx-component",'="').concat(i,'"]')).parentNode,a=this.cloneNode(o);var s=this.findComponentNodeList(a,i),l=s[0].previousSibling;s.forEach(function(e){return e.remove()});var d=l&&l.nextSibling;if(l&&d){var h=document.createElement("template");h.innerHTML=t,Array.from(h.content.childNodes).forEach(function(e){return a.insertBefore(e,d)})}else l?a.insertAdjacentHTML("beforeend",t):a.insertAdjacentHTML("afterbegin",t)}else a=this.cloneNode(e,t);return O.all(a,"[".concat(n,"=append],[").concat(n,"=prepend]"),function(t){var i=t.id||L("append/prepend requires an ID, got: ",t),o=e.querySelector("#".concat(i));if(o){var a=r.cloneNode(o),s=t.getAttribute(n),l=Array.from(t.childNodes).filter(u).map(c),d=Array.from(a.childNodes).filter(u).map(c);if(l.toString()!==d.toString())l.filter(function(e){return d.indexOf(e)>=0}).forEach(function(e){var n=t.querySelector("#".concat(e));a.querySelector("#".concat(e)).replaceWith(n)}),t.insertAdjacentHTML("append"===s?"afterbegin":"beforeend",a.innerHTML)}}),[a,o]},mergeAttrs:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=t.attributes,r=0,o=i.length;r<o;r++){var a=i[r].name;n.indexOf(a)<0&&e.setAttribute(a,t.getAttribute(a))}},mergeInputs:function(e,t){O.mergeAttrs(e,t,["value"]),t.readOnly?e.setAttribute("readonly",!0):e.removeAttribute("readonly")},restoreFocus:function(e,t,n){O.isTextualInput(e)&&((""===e.value||e.readOnly)&&e.blur(),e.focus(),(e.setSelectionRange&&"text"===e.type||"textarea"===e.type)&&e.setSelectionRange(t,n))},isTextualInput:function(e){return E.indexOf(e.type)>=0}},B=function(){function e(t,n,i,r){var o=this;p(this,e),this.liveSocket=n,this.parent=i,this.gracefullyClosed=!1,this.el=t,this.id=this.el.id,this.view=this.el.getAttribute(w),this.loaderTimer=null,this.pendingDiffs=[],this.href=r,this.joinedOnce=!1,this.viewHooks={},this.channel=this.liveSocket.channel("lv:".concat(this.id),function(){return{url:o.href||o.liveSocket.main.href,params:o.liveSocket.params(o.view),session:o.getSession(),static:o.getStatic()}}),this.showLoader(A),this.bindChannel()}return y(e,[{key:"isConnected",value:function(){return this.channel.canPush()}},{key:"getSession",value:function(){return this.el.getAttribute("data-phx-session")}},{key:"getStatic",value:function(){var e=this.el.getAttribute("data-phx-static");return""===e?null:e}},{key:"destroy",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};clearTimeout(this.loaderTimer);var n=function(){for(var n in t(),e.viewHooks)e.destroyHook(e.viewHooks[n])};this.hasGracefullyClosed()?(this.log("destroyed",function(){return["the server view has gracefully closed"]}),n()):(this.log("destroyed",function(){return["the child has been removed from the parent"]}),this.channel.leave().receive("ok",n).receive("error",n).receive("timeout",n))}},{key:"setContainerClasses",value:function(){var e;this.el.classList.remove("phx-connected","phx-disconnected","phx-error"),(e=this.el.classList).add.apply(e,arguments)}},{key:"isLoading",value:function(){return this.el.classList.contains("phx-disconnected")}},{key:"showLoader",value:function(e){var t=this;if(clearTimeout(this.loaderTimer),e)this.loaderTimer=setTimeout(function(){return t.showLoader()},e);else{for(var n in this.viewHooks)this.viewHooks[n].__trigger__("disconnected");this.setContainerClasses("phx-disconnected")}}},{key:"hideLoader",value:function(){for(var e in clearTimeout(this.loaderTimer),this.viewHooks)this.viewHooks[e].__trigger__("reconnected");this.setContainerClasses("phx-connected")}},{key:"log",value:function(e,t){this.liveSocket.log(this,e,t)}},{key:"onJoin",value:function(e){var t=e.rendered,n=e.live_redirect;this.log("join",function(){return["",JSON.stringify(t)]}),this.rendered=t,this.hideLoader();var i=O.patch(this,this.el,this.id,D.toString(this.rendered));if(i.added.push(this.el),O.all(this.el,"[".concat(this.binding("hook"),"]"),function(e){return i.added.push(e)}),this.triggerHooks(i),this.joinNewChildren(),n){var r=n.kind,o=n.to;V.pushState(r,{},o)}}},{key:"joinNewChildren",value:function(){var e=this;O.all(document,"".concat(x,"[").concat("data-phx-parent-id",'="').concat(this.id,'"]'),function(t){e.liveSocket.getViewByEl(t)||e.liveSocket.joinView(t,e)})}},{key:"update",value:function(e,t){if(!function(e){for(var t in e)return!1;return!0}(e)){if(this.liveSocket.hasPendingLink())return this.pendingDiffs.push({diff:e,cid:t});this.log("update",function(){return["",JSON.stringify(e)]}),this.rendered=D.mergeDiff(this.rendered,e);var n="number"==typeof t?D.componentToString(this.rendered.c,t):D.toString(this.rendered),i=O.patch(this,this.el,this.id,n,t);i.phxChildrenAdded.length>0&&this.joinNewChildren(),this.triggerHooks(i)}}},{key:"getHook",value:function(e){return this.viewHooks[j.elementID(e)]}},{key:"addHook",value:function(e){if(!j.elementID(e)&&e.getAttribute){var t=e.getAttribute(this.binding("hook"));if(!t||this.ownsElement(e)){var n=this.liveSocket.getHookCallbacks(t);if(n){var i=new j(this,e,n);this.viewHooks[j.elementID(i.el)]=i,i.__trigger__("mounted")}else null!==t&&L('unknown hook found for "'.concat(t,'"'),e)}}}},{key:"destroyHook",value:function(e){e.__trigger__("destroyed"),delete this.viewHooks[j.elementID(e.el)]}},{key:"triggerHooks",value:function(e){var t=this,n=[];e.updated.push({fromEl:this.el,toEl:this.el}),e.added.forEach(function(e){return t.addHook(e)}),e.updated.forEach(function(e){var n=e.fromEl,i=e.toEl,r=t.getHook(n),o=t.binding("hook");r&&i.getAttribute&&n.getAttribute(o)===i.getAttribute(o)?r.__trigger__("updated"):r&&(t.destroyHook(r),t.addHook(n))}),e.discarded.forEach(function(e){var i=t.componentID(e);"number"==typeof i&&-1===n.indexOf(i)&&n.push(i);var r=t.getHook(e);r&&t.destroyHook(r)}),this.maybePushComponentsDestroyed(n)}},{key:"applyPendingUpdates",value:function(){var e=this;this.pendingDiffs.forEach(function(t){var n=t.diff,i=t.cid;return e.update(n,i)}),this.pendingDiffs=[]}},{key:"bindChannel",value:function(){var e=this;this.channel.on("diff",function(t){return e.update(t)}),this.channel.on("redirect",function(t){var n=t.to,i=t.flash;return e.onRedirect({to:n,flash:i})}),this.channel.on("live_redirect",function(t){var n=t.to,i=t.kind;return e.onLiveRedirect({to:n,kind:i})}),this.channel.on("external_live_redirect",function(t){var n=t.to,i=t.kind;return e.onExternalLiveRedirect({to:n,kind:i})}),this.channel.on("session",function(t){var n=t.token;return e.el.setAttribute("data-phx-session",n)}),this.channel.onError(function(t){return e.onError(t)}),this.channel.onClose(function(){return e.onGracefulClose()})}},{key:"onGracefulClose",value:function(){this.gracefullyClosed=!0,this.liveSocket.destroyViewById(this.id)}},{key:"onExternalLiveRedirect",value:function(e){var t=this,n=e.to,i=e.kind,r=window.location.protocol+"//"+window.location.host+n;this.liveSocket.replaceMain(r,function(){V.pushState(i,{},n),t.liveSocket.registerNewLocation(window.location)})}},{key:"onLiveRedirect",value:function(e){var t=e.to,n=e.kind;this.href=t,V.pushState(n,{},t)}},{key:"onRedirect",value:function(e){var t=e.to,n=e.flash;V.redirect(t,n)}},{key:"hasGracefullyClosed",value:function(){return this.gracefullyClosed}},{key:"join",value:function(e){var t=this;this.parent&&(this.parent.channel.onClose(function(){return t.onGracefulClose()}),this.parent.channel.onError(function(){return t.liveSocket.destroyViewById(t.id)})),this.channel.join().receive("ok",function(n){t.joinedOnce||e&&e(t),t.joinedOnce=!0,t.onJoin(n)}).receive("error",function(e){return t.onJoinError(e)}).receive("timeout",function(){return t.onJoinError("timeout")})}},{key:"onJoinError",value:function(e){return"outdated"===e.reason?this.liveSocket.reloadWithJitter():((e.redirect||e.external_live_redirect)&&this.channel.leave(),e.redirect?this.onRedirect(e.redirect):e.external_live_redirect?this.onExternalLiveRedirect(e.external_live_redirect):(this.displayError(),void this.log("error",function(){return["unable to join",e]})))}},{key:"onError",value:function(e){this.log("error",function(){return["view crashed",e]}),this.liveSocket.onViewError(this),document.activeElement.blur(),this.liveSocket.isUnloaded()?this.showLoader(200):this.displayError()}},{key:"displayError",value:function(){this.showLoader(),this.setContainerClasses("phx-disconnected","phx-error")}},{key:"pushWithReply",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return"number"!=typeof t.cid&&delete t.cid,this.channel.push(e,t,3e4).receive("ok",function(e){e.diff&&n.update(e.diff,t.cid),e.redirect&&n.onRedirect(e.redirect),e.live_redirect&&n.onLiveRedirect(e.live_redirect),e.external_live_redirect&&n.onExternalLiveRedirect(e.external_live_redirect),i(e)})}},{key:"componentID",value:function(e){var t=e.getAttribute&&e.getAttribute("data-phx-component");return t?parseInt(t):null}},{key:"targetComponentID",value:function(e){var t=this;return I(e.closest("[".concat("data-phx-component","]")),function(e){return t.ownsElement(e)&&t.componentID(e)})}},{key:"pushEvent",value:function(e,t,n,i){for(var r=this.binding("value-"),o=0;o<t.attributes.length;o++){var a=t.attributes[o].name;a.startsWith(r)&&(i[a.replace(r,"")]=t.getAttribute(a))}void 0!==t.value&&(i.value=t.value,"INPUT"!==t.tagName||"checkbox"!==t.type||t.checked||delete i.value),this.pushWithReply("event",{type:e,event:n,value:i,cid:this.targetComponentID(t)})}},{key:"pushKey",value:function(e,t,n,i){void 0!==e.value&&(i.value=e.value),this.pushWithReply("event",{type:t,event:n,value:i,cid:this.targetComponentID(e)})}},{key:"pushInput",value:function(e,t,n){O.dispatchEvent(e.form,"phx-change",{triggeredBy:e}),this.pushWithReply("event",{type:"form",event:t,value:H(e.form,{_target:n.target.name}),cid:this.targetComponentID(e)})}},{key:"pushFormSubmit",value:function(e,t,n){this.pushWithReply("event",{type:"form",event:t,value:H(e),cid:this.targetComponentID(e)},n)}},{key:"pushInternalLink",value:function(e,t){var n=this;this.isLoading()||this.showLoader(A);var i=this.liveSocket.setPendingLink(e);this.pushWithReply("link",{url:e},function(r){r.link_redirect?n.liveSocket.replaceMain(e,t,i):n.liveSocket.commitPendingLink(i)&&(n.href=e,n.applyPendingUpdates(),n.hideLoader(),t&&t())}).receive("timeout",function(){return V.redirect(window.location.href)})}},{key:"maybePushComponentsDestroyed",value:function(e){var t=this,n=e.filter(function(e){return 0===O.findComponentNodeList(t.el,e).length});n.length>0&&this.pushWithReply("cids_destroyed",{cids:n},function(){t.rendered=D.pruneCIDs(t.rendered,n)})}},{key:"ownsElement",value:function(e){return e.getAttribute("data-phx-parent-id")===this.id||I(e.closest(x),function(e){return e.id})===this.id}},{key:"submitForm",value:function(e,t){var n=this,i=this.liveSocket.getBindingPrefix();O.putPrivate(e,"phx-has-submitted",!0),O.disableForm(e,i),this.liveSocket.blurActiveElement(this),this.pushFormSubmit(e,t,function(){O.restoreDisabledForm(e,i),n.liveSocket.restorePreviouslyActiveFocus()})}},{key:"binding",value:function(e){return this.liveSocket.binding(e)}}]),e}(),M=1,j=function(){function e(t,n,i){for(var r in p(this,e),this.__view=t,this.__callbacks=i,this.el=n,this.viewName=t.view,this.el.phxHookId=this.constructor.makeID(),this.__callbacks)this[r]=this.__callbacks[r]}return y(e,null,[{key:"makeID",value:function(){return M++}},{key:"elementID",value:function(e){return e.phxHookId}}]),y(e,[{key:"pushEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.__view.pushEvent("hook",this.el,e,t)}},{key:"__trigger__",value:function(e){var t=this.__callbacks[e];t&&t.call(this)}}]),e}();t.default=R},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){t.Phoenix||(t.Phoenix={}),e.exports=t.Phoenix.LiveView=n(0)}).call(this,n(1))}])});