/*! For license information please see 6.e1dcd450.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[6],{244:function(e,t,n){"use strict";n.r(t),function(e,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i="undefined"!==typeof e&&"[object global]"==={}.toString.call(e);function a(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function u(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function c(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function s(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,o=t||n;if(!o)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(c(o))return"https://vimeo.com/".concat(o);if(s(o))return o.replace("http:","https:");if(t)throw new TypeError("\u201c".concat(t,"\u201d is not a valid video id."));throw new TypeError("\u201c".concat(o,"\u201d is not a vimeo.com url."))}var f="undefined"!==typeof Array.prototype.indexOf,d="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;if(!i&&(!f||!d))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var h="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(r(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(r(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(r(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(r(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!==typeof self?self:"undefined"!==typeof window?window:h);var v=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,o,r;r=function(){var e,t,o,r=Object.prototype.toString,i="undefined"!=typeof n?function(e){return n(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(y){e=function(e,t,n){return e[t]=n,e}}function a(e,n){o.add(e,n),t||(t=i(o.drain))}function u(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var o,r;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=u(o))?r.call(o,n.resolve,n.reject):n.resolve(o)}catch(y){n.reject(y)}}function l(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?a((function(){var o=new h(n);try{t.call(e,(function(){l.apply(o,arguments)}),(function(){f.apply(o,arguments)}))}catch(y){f.call(o,y)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(c,n))}catch(y){f.call(new h(n),y)}}}function f(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(c,t))}function d(e,t,n,o){for(var r=0;r<t.length;r++)!function(r){e.resolve(t[r]).then((function(e){n(r,e)}),o)}(r)}function h(e){this.def=e,this.triggered=!1}function v(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new v(this);this.then=function(e,n){var o={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return o.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");o.resolve=e,o.reject=t})),t.chain.push(o),0!==t.state&&a(c,t),o.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){l.call(t,e)}),(function(e){f.call(t,e)}))}catch(y){f.call(t,y)}}o=function(){var e,n,o;function r(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){o=new r(t,i),n?n.next=o:e=o,n=o,o=void 0},drain:function(){var o=e;for(e=n=t=void 0;o;)o.fn.call(o.self),o=o.next}}}();var m=e({},"constructor",p,!1);return p.prototype=m,e(m,"__NPO__",0,!1),e(p,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var r=e.length,i=Array(r),a=0;d(t,e,(function(e,t){i[e]=t,++a===r&&n(i)}),o)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");d(t,e,(function(e,t){n(t)}),o)}))})),p},(o=h)[t="Promise"]=o[t]||r(),e.exports&&(e.exports=o[t])})),p=new WeakMap;function m(e,t,n){var o=p.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),p.set(e.element,o)}function y(e,t){return(p.get(e.element)||{})[t]||[]}function g(e,t,n){var o=p.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],p.set(e.element,o),!0;var r=o[t].indexOf(n);return-1!==r&&o[t].splice(r,1),p.set(e.element,o),o[t]&&0===o[t].length}function w(e,t){var n=p.get(e);p.set(t,n),p.delete(e)}var b=["autopause","autoplay","background","byline","color","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","title","transparent","url","width"];function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b.reduce((function(t,n){var o=e.getAttribute("data-vimeo-".concat(n));return(o||""===o)&&(t[n]=""===o?1:o),t}),t)}function T(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(o,r){if(!s(e))throw new TypeError("\u201c".concat(e,"\u201d is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e),"&domain=").concat(window.location.hostname);for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return T(t,n),void r(new Error("\u201c".concat(e,"\u201d is not embeddable.")));o(t)}catch(i){r(i)}else r(new Error("\u201c".concat(e,"\u201d is not embeddable.")));else r(new Error("\u201c".concat(e,"\u201d was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}function _(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function M(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));r>=8&&r<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function j(e,t){var n,o=[];if((t=_(t)).event){if("error"===t.event)y(e,t.data.method).forEach((function(n){var o=new Error(t.data.message);o.name=t.data.name,n.reject(o),g(e,t.data.method,n)}));o=y(e,"event:".concat(t.event)),n=t.data}else if(t.method){var r=function(e,t){var n=y(e,t);if(n.length<1)return!1;var o=n.shift();return g(e,t,o),o}(e,t.method);r&&(o.push(r),n=t.value)}o.forEach((function(t){try{if("function"===typeof t)return void t.call(e,n);t.resolve(n)}catch(o){}}))}var I=new WeakMap,P=new WeakMap,A=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!==typeof document&&"string"===typeof t&&(t=document.getElementById(t)),!u(t))throw new TypeError("You must pass either a valid element or a valid id.");var i=t.ownerDocument.defaultView;if("IFRAME"!==t.nodeName){var a=t.querySelector("iframe");a&&(t=a)}if("IFRAME"===t.nodeName&&!s(t.getAttribute("src")||""))throw new Error("The player element passed isn\u2019t a Vimeo embed.");if(I.has(t))return I.get(t);this.element=t,this.origin="*";var c=new v((function(e,o){var a=function(t){if(s(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=_(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();j(n,r)}};if(i.addEventListener?i.addEventListener("message",a,!1):i.attachEvent&&i.attachEvent("onmessage",a),"IFRAME"!==n.element.nodeName){var u=k(t,r);E(l(u),u,t).then((function(e){var o=T(e,t);return n.element=o,n._originalElement=t,w(t,o),I.set(n.element,n),e})).catch(o)}}));return P.set(this,c),I.set(this.element,this),"IFRAME"===this.element.nodeName&&M(this,"ping"),this}var t,n,i;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new v((function(o,r){return t.ready().then((function(){m(t,e,{resolve:o,reject:r}),M(t,e,n)})).catch(r)}))}},{key:"get",value:function(e){var t=this;return new v((function(n,o){return e=a(e,"get"),t.ready().then((function(){m(t,e,{resolve:n,reject:o}),M(t,e)})).catch(o)}))}},{key:"set",value:function(e,t){var n=this;return new v((function(o,r){if(e=a(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){m(n,e,{resolve:o,reject:r}),M(n,e,t)})).catch(r)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!==typeof t)throw new TypeError("The callback must be a function.");0===y(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),m(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!==typeof t)throw new TypeError("The callback must be a function.");g(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=P.get(this)||new v((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return v.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new v((function(t){P.delete(e),I.delete(e.element),e._originalElement&&(I.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&r(t.prototype,n),i&&r(t,i),e}();i||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=k(e);E(l(t),t,e).then((function(t){return T(t,e)})).catch(n)}catch(o){n(o)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(s(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),o=0;o<n.length;o++)if(n[o].contentWindow===t.source){n[o].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}}()),t.default=A}.call(this,n(50),n(245).setImmediate)},245:function(e,t,n){(function(e){var o="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(246),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(50))},246:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,r=1,i={},a=!1,u=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){l(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&l(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),o=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){l(e.data)},o=function(t){e.port2.postMessage(t)}}():u&&"onreadystatechange"in u.createElement("script")?function(){var e=u.documentElement;o=function(t){var n=u.createElement("script");n.onreadystatechange=function(){l(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():o=function(e){setTimeout(l,0,e)},c.setImmediate=function(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return i[r]=a,o(r),r++},c.clearImmediate=s}function s(e){delete i[e]}function l(e){if(a)setTimeout(l,0,e);else{var t=i[e];if(t){a=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{s(e),a=!1}}}}}("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n(50),n(95))}}]);
//# sourceMappingURL=6.e1dcd450.chunk.js.map