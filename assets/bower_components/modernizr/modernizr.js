/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(C.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&b[i]!==n)return"pfx"==t?i:!0}return!1}function u(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+k.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(i,t):(i=(e+" "+E.join(r+" ")+r).split(" "),u(i,t,n))}function l(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)j[n[r]]=!!(n[r]in x);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,i,o,a=0,s=e.length;s>a;a++)x.setAttribute("type",i=e[a]),r="text"!==x.type,r&&(x.value=_,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&x.style.WebkitAppearance!==n?(g.appendChild(x),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?x.checkValidity&&x.checkValidity()===!1:x.value!=_)),N[e[a]]=!!r;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,p="2.8.3",h={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),_=":)",w={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",k=T.split(" "),E=T.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},A={},N={},j={},M=[],D=M.slice,F=function(e,n,r,i){var o,a,s,u,c=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:v+(r+1),c.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),c.id=v,(l?c:f).innerHTML+=o,f.appendChild(c),l||(f.style.background="",f.style.overflow="hidden",u=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(c,e),l?c.parentNode.removeChild(c):(f.parentNode.removeChild(f),g.style.overflow=u),!!a},O=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},z=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;d=o(L,"undefined")||o(L.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(D.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(D.call(arguments)))};return r}),A.flexbox=function(){return c("flexWrap")},A.flexboxlegacy=function(){return c("boxDirection")},A.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},A.canvastext=function(){return!(!h.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},A.webgl=function(){return!!e.WebGLRenderingContext},A.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!e.postMessage},A.websqldatabase=function(){return!!e.openDatabase},A.indexedDB=function(){return!!c("indexedDB",e)},A.hashchange=function(){return z("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},A.history=function(){return!(!e.history||!history.pushState)},A.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},A.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},A.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},A.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},A.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},A.backgroundsize=function(){return c("backgroundSize")},A.borderimage=function(){return c("borderImage")},A.borderradius=function(){return c("borderRadius")},A.boxshadow=function(){return c("boxShadow")},A.textshadow=function(){return""===t.createElement("div").style.textShadow},A.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},A.cssanimations=function(){return c("animationName")},A.csscolumns=function(){return c("columnCount")},A.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},A.cssreflections=function(){return c("boxReflect")},A.csstransforms=function(){return!!c("transform")},A.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},A.csstransitions=function(){return c("transition")},A.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},A.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',_,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},A.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},A.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},A.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},A.webworkers=function(){return!!e.Worker},A.applicationcache=function(){return!!e.applicationCache},A.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},A.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},A.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(S.svg,"animate")))},A.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(S.svg,"clipPath")))};for(var q in A)d(A,q)&&(f=q.toLowerCase(),h[f]=A[q](),M.push((h[f]?"":"no-")+f));return h.input||l(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[m]];return t||(t={},g++,e[m]=g,v[g]=t),t}function o(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function u(e){e||(e=t);var r=i(e);return!y.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(e,r),e}var c,l,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,l=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:l,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};e.html5=y,u(t)}(this,t),h._version=p,h._prefixes=C,h._domPrefixes=E,h._cssomPrefixes=k,h.mq=O,h.hasEvent=z,h.testProp=function(e){return s([e])},h.testAllProps=c,h.testStyles=F,h.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+M.join(" "):""),h}(this,this.document);