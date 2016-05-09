!function(e){String.prototype.trim===e&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===e&&(Array.prototype.reduce=function(t){if(void 0===this||null===this)throw new TypeError;var n,r=Object(this),i=r.length>>>0,o=0;if("function"!=typeof t)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in r){n=r[o++];break}if(++o>=i)throw new TypeError}for(;i>o;)o in r&&(n=t.call(e,n,r[o],o,r)),o++;return n})}();var Zepto=function(){function e(e){return null==e?String(e):X[Z.call(e)]||"object"}function t(t){return"function"==e(t)}function n(e){return null!=e&&e==e.window}function r(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}function i(t){return"object"==e(t)}function o(e){return i(e)&&!n(e)&&e.__proto__==Object.prototype}function a(e){return e instanceof Array}function u(e){return"number"==typeof e.length}function s(e){return M.call(e,function(e){return null!=e})}function c(e){return e.length>0?T.fn.concat.apply([],e):e}function l(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(e){return e in O?O[e]:O[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function d(e,t){return"number"!=typeof t||D[l(e)]?t:t+"px"}function p(e){var t,n;return z[e]||(t=N.createElement(e),N.body.appendChild(t),n=R(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==n&&(n="block"),z[e]=n),z[e]}function h(e){return"children"in e?j.call(e.children):T.map(e.childNodes,function(e){return 1==e.nodeType?e:void 0})}function v(e,t,n){for(A in t)n&&(o(t[A])||a(t[A]))?(o(t[A])&&!o(e[A])&&(e[A]={}),a(t[A])&&!a(e[A])&&(e[A]=[]),v(e[A],t[A],n)):t[A]!==_&&(e[A]=t[A])}function g(e,t){return t===_?T(e):T(e).filter(t)}function m(e,n,r,i){return t(n)?n.call(e,r,i):n}function y(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function b(e,t){var n=e.className,r=n&&n.baseVal!==_;return t===_?r?n.baseVal:n:void(r?n.baseVal=t:e.className=t)}function w(e){var t;try{return e?"true"==e||("false"==e?!1:"null"==e?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?T.parseJSON(e):e:t):e}catch(n){return e}}function x(e,t){t(e);for(var n in e.childNodes)x(e.childNodes[n],t)}var _,A,T,E,C,k,S=[],j=S.slice,M=S.filter,N=window.document,z={},O={},R=N.defaultView.getComputedStyle,D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},B=/^\s*<(\w+|!)[^>]*>/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,I=/^(?:body|html)$/i,P=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],F=N.createElement("table"),H=N.createElement("tr"),W={tr:N.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:H,th:H,"*":N.createElement("div")},U=/complete|loaded|interactive/,$=/^\.([\w-]+)$/,Q=/^#([\w-]*)$/,V=/^[\w-]+$/,X={},Z=X.toString,Y={},G=N.createElement("div");return Y.matches=function(e,t){if(!e||1!==e.nodeType)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,o=!i;return o&&(i=G).appendChild(e),r=~Y.qsa(i,t).indexOf(e),o&&G.removeChild(e),r},C=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},k=function(e){return M.call(e,function(t,n){return e.indexOf(t)==n})},Y.fragment=function(e,t,n){e.replace&&(e=e.replace(L,"<$1></$2>")),t===_&&(t=B.test(e)&&RegExp.$1),t in W||(t="*");var r,i,a=W[t];return a.innerHTML=""+e,i=T.each(j.call(a.childNodes),function(){a.removeChild(this)}),o(n)&&(r=T(i),T.each(n,function(e,t){P.indexOf(e)>-1?r[e](t):r.attr(e,t)})),i},Y.Z=function(e,t){return e=e||[],e.__proto__=T.fn,e.selector=t||"",e},Y.isZ=function(e){return e instanceof Y.Z},Y.init=function(e,n){if(e){if(t(e))return T(N).ready(e);if(Y.isZ(e))return e;var r;if(a(e))r=s(e);else if(i(e))r=[o(e)?T.extend({},e):e],e=null;else if(B.test(e))r=Y.fragment(e.trim(),RegExp.$1,n),e=null;else{if(n!==_)return T(n).find(e);r=Y.qsa(N,e)}return Y.Z(r,e)}return Y.Z()},T=function(e,t){return Y.init(e,t)},T.extend=function(e){var t,n=j.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach(function(n){v(e,n,t)}),e},Y.qsa=function(e,t){var n;return r(e)&&Q.test(t)?(n=e.getElementById(RegExp.$1))?[n]:[]:1!==e.nodeType&&9!==e.nodeType?[]:j.call($.test(t)?e.getElementsByClassName(RegExp.$1):V.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},T.contains=function(e,t){return e!==t&&e.contains(t)},T.type=e,T.isFunction=t,T.isWindow=n,T.isArray=a,T.isPlainObject=o,T.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},T.inArray=function(e,t,n){return S.indexOf.call(t,e,n)},T.camelCase=C,T.trim=function(e){return e.trim()},T.uuid=0,T.support={},T.expr={},T.map=function(e,t){var n,r,i,o=[];if(u(e))for(r=0;r<e.length;r++)n=t(e[r],r),null!=n&&o.push(n);else for(i in e)n=t(e[i],i),null!=n&&o.push(n);return c(o)},T.each=function(e,t){var n,r;if(u(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},T.grep=function(e,t){return M.call(e,t)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){X["[object "+t+"]"]=t.toLowerCase()}),T.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(e){return T(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return T(j.apply(this,arguments))},ready:function(e){return U.test(N.readyState)?e(T):N.addEventListener("DOMContentLoaded",function(){e(T)},!1),this},get:function(e){return e===_?j.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(e){return S.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return t(e)?this.not(this.not(e)):T(M.call(this,function(t){return Y.matches(t,e)}))},add:function(e,t){return T(k(this.concat(T(e,t))))},is:function(e){return this.length>0&&Y.matches(this[0],e)},not:function(e){var n=[];if(t(e)&&e.call!==_)this.each(function(t){e.call(this,t)||n.push(this)});else{var r="string"==typeof e?this.filter(e):u(e)&&t(e.item)?j.call(e):T(e);this.forEach(function(e){r.indexOf(e)<0&&n.push(e)})}return T(n)},has:function(e){return this.filter(function(){return i(e)?T.contains(this,e):T(this).find(e).size()})},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!i(e)?e:T(e)},last:function(){var e=this[this.length-1];return e&&!i(e)?e:T(e)},find:function(e){var t,n=this;return t="object"==typeof e?T(e).filter(function(){var e=this;return S.some.call(n,function(t){return T.contains(t,e)})}):1==this.length?T(Y.qsa(this[0],e)):this.map(function(){return Y.qsa(this,e)})},closest:function(e,t){var n=this[0],i=!1;for("object"==typeof e&&(i=T(e));n&&!(i?i.indexOf(n)>=0:Y.matches(n,e));)n=n!==t&&!r(n)&&n.parentNode;return T(n)},parents:function(e){for(var t=[],n=this;n.length>0;)n=T.map(n,function(e){return(e=e.parentNode)&&!r(e)&&t.indexOf(e)<0?(t.push(e),e):void 0});return g(t,e)},parent:function(e){return g(k(this.pluck("parentNode")),e)},children:function(e){return g(this.map(function(){return h(this)}),e)},contents:function(){return this.map(function(){return j.call(this.childNodes)})},siblings:function(e){return g(this.map(function(e,t){return M.call(h(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return T.map(this,function(t){return t[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==R(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var n=t(e);if(this[0]&&!n)var r=T(e).get(0),i=r.parentNode||this.length>1;return this.each(function(t){T(this).wrapAll(n?e.call(this,t):i?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){T(this[0]).before(e=T(e));for(var t;(t=e.children()).length;)e=t.first();T(e).append(this)}return this},wrapInner:function(e){var n=t(e);return this.each(function(t){var r=T(this),i=r.contents(),o=n?e.call(this,t):e;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=T(this);(e===_?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(e){return T(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return T(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return e===_?this.length>0?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;T(this).empty().append(m(this,e,t,n))})},text:function(e){return e===_?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e})},attr:function(e,t){var n;return"string"==typeof e&&t===_?0==this.length||1!==this[0].nodeType?_:"value"==e&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n:this.each(function(n){if(1===this.nodeType)if(i(e))for(A in e)y(this,A,e[A]);else y(this,e,m(this,t,n,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){1===this.nodeType&&y(this,e)})},prop:function(e,t){return t===_?this[0]&&this[0][e]:this.each(function(n){this[e]=m(this,t,n,this[e])})},data:function(e,t){var n=this.attr("data-"+l(e),t);return null!==n?w(n):_},val:function(e){return e===_?this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(e){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=m(this,e,t,this.value)})},offset:function(e){if(e)return this.each(function(t){var n=T(this),r=m(this,e,t,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,n){if(arguments.length<2&&"string"==typeof t)return this[0]&&(this[0].style[C(t)]||R(this[0],"").getPropertyValue(t));var r="";if("string"==e(t))n||0===n?r=l(t)+":"+d(t,n):this.each(function(){this.style.removeProperty(l(t))});else for(A in t)t[A]||0===t[A]?r+=l(A)+":"+d(A,t[A])+";":this.each(function(){this.style.removeProperty(l(A))});return this.each(function(){this.style.cssText+=";"+r})},index:function(e){return e?this.indexOf(T(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return S.some.call(this,function(e){return this.test(b(e))},f(e))},addClass:function(e){return this.each(function(t){E=[];var n=b(this),r=m(this,e,t,n);r.split(/\s+/g).forEach(function(e){T(this).hasClass(e)||E.push(e)},this),E.length&&b(this,n+(n?" ":"")+E.join(" "))})},removeClass:function(e){return this.each(function(t){return e===_?b(this,""):(E=b(this),m(this,e,t,E).split(/\s+/g).forEach(function(e){E=E.replace(f(e)," ")}),void b(this,E.trim()))})},toggleClass:function(e,t){return this.each(function(n){var r=T(this),i=m(this,e,n,b(this));i.split(/\s+/g).forEach(function(e){(t===_?!r.hasClass(e):t)?r.addClass(e):r.removeClass(e)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var e=this[0],t=this.offsetParent(),n=this.offset(),r=I.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(T(e).css("margin-top"))||0,n.left-=parseFloat(T(e).css("margin-left"))||0,r.top+=parseFloat(T(t[0]).css("border-top-width"))||0,r.left+=parseFloat(T(t[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||N.body;e&&!I.test(e.nodeName)&&"static"==T(e).css("position");)e=e.offsetParent;return e})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(e){T.fn[e]=function(t){var i,o=this[0],a=e.replace(/./,function(e){return e[0].toUpperCase()});return t===_?n(o)?o["inner"+a]:r(o)?o.documentElement["offset"+a]:(i=this.offset())&&i[e]:this.each(function(n){o=T(this),o.css(e,m(this,t,n,o[e]()))})}}),q.forEach(function(t,n){var r=n%2;T.fn[t]=function(){var t,i,o=T.map(arguments,function(n){return t=e(n),"object"==t||"array"==t||null==n?n:Y.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(e,t){i=r?t:t.parentNode,t=0==n?t.nextSibling:1==n?t.firstChild:2==n?t:null,o.forEach(function(e){if(a)e=e.cloneNode(!0);else if(!i)return T(e).remove();x(i.insertBefore(e,t),function(e){null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src||window.eval.call(window,e.innerHTML)})})})},T.fn[r?t+"To":"insert"+(n?"Before":"After")]=function(e){return T(e)[t](this),this}}),Y.Z.prototype=T.fn,Y.uniq=k,Y.deserializeValue=w,T.zepto=Y,T}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/WebKit\/([\d.]+)/),i=e.match(/(Android)\s+([\d.]+)/),o=e.match(/(iPad).*OS\s([\d_]+)/),a=!o&&e.match(/(iPhone\sOS)\s([\d_]+)/),u=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),s=u&&e.match(/TouchPad/),c=e.match(/Kindle\/([\d.]+)/),l=e.match(/Silk\/([\d._]+)/),f=e.match(/(BlackBerry).*Version\/([\d.]+)/),d=e.match(/(BB10).*Version\/([\d.]+)/),p=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),h=e.match(/PlayBook/),v=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),g=e.match(/Firefox\/([\d.]+)/);(n.webkit=!!r)&&(n.version=r[1]),i&&(t.android=!0,t.version=i[2]),a&&(t.ios=t.iphone=!0,t.version=a[2].replace(/_/g,".")),o&&(t.ios=t.ipad=!0,t.version=o[2].replace(/_/g,".")),u&&(t.webos=!0,t.version=u[2]),s&&(t.touchpad=!0),f&&(t.blackberry=!0,t.version=f[2]),d&&(t.bb10=!0,t.version=d[2]),p&&(t.rimtabletos=!0,t.version=p[2]),h&&(n.playbook=!0),c&&(t.kindle=!0,t.version=c[1]),l&&(n.silk=!0,n.version=l[1]),!l&&t.android&&e.match(/Kindle Fire/)&&(n.silk=!0),v&&(n.chrome=!0,n.version=v[1]),g&&(n.firefox=!0,n.version=g[1]),t.tablet=!!(o||h||i&&!e.match(/Mobile/)||g&&e.match(/Tablet/)),t.phone=!(t.tablet||!(i||a||u||f||d||v&&e.match(/Android/)||v&&e.match(/CriOS\/([\d.]+)/)||g&&e.match(/Mobile/)))}t.call(e,navigator.userAgent),e.__detect=t}(Zepto),function(e){function t(e){return e._zid||(e._zid=p++)}function n(e,n,o,a){if(n=r(n),n.ns)var u=i(n.ns);return(d[t(e)]||[]).filter(function(e){return e&&(!n.e||e.e==n.e)&&(!n.ns||u.test(e.ns))&&(!o||t(e.fn)===t(o))&&(!a||e.sel==a)})}function r(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function i(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function o(t,n,r){"string"!=e.type(t)?e.each(t,r):t.split(/\s/).forEach(function(e){r(e,n)})}function a(e,t){return e.del&&("focus"==e.e||"blur"==e.e)||!!t}function u(e){return v[e]||e}function s(n,i,s,c,l,f){var p=t(n),h=d[p]||(d[p]=[]);o(i,s,function(t,i){var o=r(t);o.fn=i,o.sel=c,o.e in v&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=l&&l(i,t);var s=o.del||i;o.proxy=function(e){var t=s.apply(n,[e].concat(e.data));return t===!1&&(e.preventDefault(),e.stopPropagation()),t},o.i=h.length,h.push(o),n.addEventListener(u(o.e),o.proxy,a(o,f))})}function c(e,r,i,s,c){var l=t(e);o(r||"",i,function(t,r){n(e,t,r,s).forEach(function(t){delete d[l][t.i],e.removeEventListener(u(t.e),t.proxy,a(t,c))})})}function l(t){var n,r={originalEvent:t};for(n in t)y.test(n)||void 0===t[n]||(r[n]=t[n]);return e.each(b,function(e,n){r[e]=function(){return this[n]=g,t[e].apply(t,arguments)},r[n]=m}),r}function f(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var d=(e.zepto.qsa,{}),p=1,h={},v={mouseenter:"mouseover",mouseleave:"mouseout"};h.click=h.mousedown=h.mouseup=h.mousemove="MouseEvents",e.event={add:s,remove:c},e.proxy=function(n,r){if(e.isFunction(n)){var i=function(){return n.apply(r,arguments)};return i._zid=t(n),i}if("string"==typeof r)return e.proxy(n[r],n);throw new TypeError("expected function")},e.fn.bind=function(e,t){return this.each(function(){s(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){c(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,r){s(this,e,t,null,function(e,t){return function(){var n=e.apply(r,arguments);return c(r,t,e),n}})})};var g=function(){return!0},m=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,r){return this.each(function(i,o){s(o,n,r,t,function(n){return function(r){var i,a=e(r.target).closest(t,o).get(0);return a?(i=e.extend(l(r),{currentTarget:a,liveFired:o}),n.apply(a,[i].concat([].slice.call(arguments,1)))):void 0}})})},e.fn.undelegate=function(e,t,n){return this.each(function(){c(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r){return!n||e.isFunction(n)?this.bind(t,n||r):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return!n||e.isFunction(n)?this.unbind(t,n||r):this.undelegate(n,t,r)},e.fn.trigger=function(t,n){return("string"==typeof t||e.isPlainObject(t))&&(t=e.Event(t)),f(t),t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,r){var i,o;return this.each(function(a,u){i=l("string"==typeof t?e.Event(t):t),i.data=r,i.target=u,e.each(n(u,t.type||t),function(e,t){return o=t.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){"string"!=typeof e&&(t=e,e=t.type);var n=document.createEvent(h[e]||"Events"),r=!0;if(t)for(var i in t)"bubbles"==i?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(e){function t(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.defaultPrevented}function n(e,n,r,i){return e.global?t(n||y,r,i):void 0}function r(t){t.global&&0===e.active++&&n(t,null,"ajaxStart")}function i(t){t.global&&!--e.active&&n(t,null,"ajaxStop")}function o(e,t){var r=t.context;return t.beforeSend.call(r,e,t)===!1||n(t,r,"ajaxBeforeSend",[e,t])===!1?!1:void n(t,r,"ajaxSend",[e,t])}function a(e,t,r){var i=r.context,o="success";r.success.call(i,e,o,t),n(r,i,"ajaxSuccess",[t,r,e]),s(o,t,r)}function u(e,t,r,i){var o=i.context;i.error.call(o,r,t,e),n(i,o,"ajaxError",[r,i,e]),s(t,r,i)}function s(e,t,r){var o=r.context;r.complete.call(o,t,e),n(r,o,"ajaxComplete",[t,r]),i(r)}function c(){}function l(e){return e&&(e=e.split(";",2)[0]),e&&(e==A?"html":e==_?"json":w.test(e)?"script":x.test(e)&&"xml")||"text"}function f(e,t){return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function d(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=f(t.url,t.data))}function p(t,n,r,i){var o=!e.isFunction(n);return{url:t,data:o?n:void 0,success:o?e.isFunction(r)?r:void 0:n,dataType:o?i||r:r}}function h(t,n,r,i){var o,a=e.isArray(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a?"":n)+"]"),!i&&a?t.add(u.name,u.value):"array"==o||!r&&"object"==o?h(t,u,r,n):t.add(n,u)})}var v,g,m=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,_="application/json",A="text/html",T=/^\s*$/;e.active=0,e.ajaxJSONP=function(t){if(!("type"in t))return e.ajax(t);var n,r="jsonp"+ ++m,i=y.createElement("script"),s=function(){clearTimeout(n),e(i).remove(),delete window[r]},l=function(e){s(),e&&"timeout"!=e||(window[r]=c),u(null,e||"abort",f,t)},f={abort:l};return o(f,t)===!1?(l("abort"),!1):(window[r]=function(e){s(),a(e,f,t)},i.onerror=function(){l("error")},i.src=t.url.replace(/=\?/,"="+r),e("head").append(i),t.timeout>0&&(n=setTimeout(function(){l("timeout")},t.timeout)),f)},e.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:_,xml:"application/xml, text/xml",html:A,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},e.ajax=function(t){var n=e.extend({},t||{});for(v in e.ajaxSettings)void 0===n[v]&&(n[v]=e.ajaxSettings[v]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),d(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var i=n.dataType,s=/=\?/.test(n.url);if("jsonp"==i||s)return s||(n.url=f(n.url,"callback=?")),e.ajaxJSONP(n);var p,h=n.accepts[i],m={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(m["X-Requested-With"]="XMLHttpRequest"),h&&(m.Accept=h,h.indexOf(",")>-1&&(h=h.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(h)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(m["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=e.extend(m,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(p);var t,r=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){i=i||l(b.getResponseHeader("content-type")),t=b.responseText;try{"script"==i?(1,eval)(t):"xml"==i?t=b.responseXML:"json"==i&&(t=T.test(t)?null:e.parseJSON(t))}catch(o){r=o}r?u(r,"parsererror",b,n):a(t,b,n)}else u(null,b.status?"error":"abort",b,n)}};var w="async"in n?n.async:!0;b.open(n.type,n.url,w);for(g in n.headers)b.setRequestHeader(g,n.headers[g]);return o(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(p=setTimeout(function(){b.onreadystatechange=c,b.abort(),u(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},e.get=function(t,n,r,i){return e.ajax(p.apply(null,arguments))},e.post=function(t,n,r,i){var o=p.apply(null,arguments);return o.type="POST",e.ajax(o)},e.getJSON=function(t,n,r){var i=p.apply(null,arguments);return i.dataType="json",e.ajax(i)},e.fn.load=function(t,n,r){if(!this.length)return this;var i,o=this,a=t.split(/\s/),u=p(t,n,r),s=u.success;return a.length>1&&(u.url=a[0],i=a[1]),u.success=function(t){o.html(i?e("<div>").html(t.replace(b,"")).find(i):t),s&&s.apply(o,arguments)},e.ajax(u),this};var E=encodeURIComponent;e.param=function(e,t){var n=[];return n.add=function(e,t){this.push(E(e)+"="+E(t))},h(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t,n=[];return e(Array.prototype.slice.call(this.get(0).elements)).each(function(){t=e(this);var r=t.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:t.attr("name"),value:t.val()})}),n},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(e,t){function n(e){return r(e.replace(/([a-z])([A-Z])/,"$1-$2"))}function r(e){return e.toLowerCase()}function i(e){return o?o+e:r(e)}var o,a,u,s,c,l,f,d,p="",h={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},v=window.document,g=v.createElement("div"),m=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};e.each(h,function(e,n){return g.style[e+"TransitionProperty"]!==t?(p="-"+r(e)+"-",o=n,!1):void 0}),a=p+"transform",y[u=p+"transition-property"]=y[s=p+"transition-duration"]=y[c=p+"transition-timing-function"]=y[l=p+"animation-name"]=y[f=p+"animation-duration"]=y[d=p+"animation-timing-function"]="",e.fx={off:o===t&&g.style.transitionProperty===t,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},e.fn.animate=function(t,n,r,i){return e.isPlainObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:e.fx.speeds[n]||e.fx.speeds._default)/1e3),this.anim(t,n,r,i)},e.fn.anim=function(r,i,o,p){var h,v,g,b={},w="",x=this,_=e.fx.transitionEnd;if(i===t&&(i=.4),e.fx.off&&(i=0),"string"==typeof r)b[l]=r,b[f]=i+"s",b[d]=o||"linear",_=e.fx.animationEnd;else{v=[];for(h in r)m.test(h)?w+=h+"("+r[h]+") ":(b[h]=r[h],v.push(n(h)));w&&(b[a]=w,v.push(a)),i>0&&"object"==typeof r&&(b[u]=v.join(", "),b[s]=i+"s",b[c]=o||"linear")}return g=function(t){if("undefined"!=typeof t){if(t.target!==t.currentTarget)return;e(t.target).unbind(_,g)}e(this).css(y),p&&p.call(this)},i>0&&this.bind(_,g),this.size()&&this.get(0).clientLeft,this.css(b),0>=i&&setTimeout(function(){x.each(function(){g.call(this)})},0),this},g=null}(Zepto),function(e,t){function n(n,r,i,o,a){"function"!=typeof r||a||(a=r,r=t);var u={opacity:i};return o&&(u.scale=o,n.css(e.fx.cssPrefix+"transform-origin","0 0")),n.animate(u,r,null,a)}function r(t,r,i,o){return n(t,r,0,i,function(){a.call(e(this)),o&&o.call(this)})}var i=window.document,o=(i.documentElement,e.fn.show),a=e.fn.hide,u=e.fn.toggle;e.fn.show=function(e,r){return o.call(this),e===t?e=0:this.css("opacity",0),n(this,e,1,"1,1",r)},e.fn.hide=function(e,n){return e===t?a.call(this):r(this,e,"0,0",n)},e.fn.toggle=function(n,r){return n===t||"boolean"==typeof n?u.call(this,n):this.each(function(){var t=e(this);t["none"==t.css("display")?"show":"hide"](n,r)})},e.fn.fadeTo=function(e,t,r){return n(this,e,t,null,r)},e.fn.fadeIn=function(e,t){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(e,n,t)},e.fn.fadeOut=function(e,t){return r(this,e,null,t)},e.fn.fadeToggle=function(t,n){return this.each(function(){var r=e(this);r[0==r.css("opacity")||"none"==r.css("display")?"fadeIn":"fadeOut"](t,n)})}}(Zepto),function(e){var t,n=[];e.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",t&&clearTimeout(t),t=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(e){function t(t,r){var s=t[u],c=s&&i[s];if(void 0===r)return c||n(t);if(c){if(r in c)return c[r];var l=a(r);if(l in c)return c[l]}return o.call(e(t),r)}function n(t,n,o){var s=t[u]||(t[u]=++e.uuid),c=i[s]||(i[s]=r(t));return void 0!==n&&(c[a(n)]=o),c}function r(t){var n={};return e.each(t.attributes,function(t,r){0==r.name.indexOf("data-")&&(n[a(r.name.replace("data-",""))]=e.zepto.deserializeValue(r.value))}),n}var i={},o=e.fn.data,a=e.camelCase,u=e.expando="Zepto"+ +new Date;e.fn.data=function(r,i){return void 0===i?e.isPlainObject(r)?this.each(function(t,i){e.each(r,function(e,t){n(i,e,t)})}):0==this.length?void 0:t(this[0],r):this.each(function(){n(this,r,i)})},e.fn.removeData=function(t){return"string"==typeof t&&(t=t.split(/\s+/)),this.each(function(){var n=this[u],r=n&&i[n];r&&e.each(t,function(){delete r[a(this)]})})}}(Zepto),function(e){function t(t){return t=e(t),!(!t.width()&&!t.height())&&"none"!==t.css("display")}function n(e,t){e=e.replace(/=#\]/g,'="#"]');var n,r,i=u.exec(e);if(i&&i[2]in a&&(n=a[i[2]],r=i[3],e=i[1],r)){var o=Number(r);r=isNaN(o)?r.replace(/^["']|["']$/g,""):o}return t(e,n,r)}var r=e.zepto,i=r.qsa,o=r.matches,a=e.expr[":"]={visible:function(){return t(this)?this:void 0},hidden:function(){return t(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(e){return 0===e?this:void 0},last:function(e,t){return e===t.length-1?this:void 0},eq:function(e,t,n){return e===n?this:void 0},contains:function(t,n,r){return e(this).text().indexOf(r)>-1?this:void 0},has:function(e,t,n){return r.qsa(this,n).length?this:void 0}},u=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),s=/^\s*>/,c="Zepto"+ +new Date;r.qsa=function(t,o){return n(o,function(n,a,u){try{var l;!n&&a?n="*":s.test(n)&&(l=e(t).addClass(c),n="."+c+" "+n);var f=i(t,n)}catch(d){throw console.error("error performing selector: %o",o),d}finally{l&&l.removeClass(c)}return a?r.uniq(e.map(f,function(e,t){return a.call(e,t,f,u)})):f})},r.matches=function(e,t){return n(t,function(t,n,r){return(!t||o(e,t))&&(!n||n.call(e,null,r)===e)})}}(Zepto),function(e){e.fn.end=function(){return this.prevObject||e()},e.fn.andSelf=function(){return this.add(this.prevObject||e())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(t){var n=e.fn[t];e.fn[t]=function(){var e=n.apply(this,arguments);return e.prevObject=this,e}})}(Zepto),function(e){function t(e){return"tagName"in e?e:e.parentNode}function n(e,t,n,r){var i=Math.abs(e-t),o=Math.abs(n-r);return i>=o?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function r(){c=null,l.last&&(l.el.trigger("longTap"),l={})}function i(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),u&&clearTimeout(u),s&&clearTimeout(s),c&&clearTimeout(c),a=u=s=c=null,l={}}var a,u,s,c,l={},f=750;e(document).ready(function(){var d,p;e(document.body).bind("touchstart",function(n){d=Date.now(),p=d-(l.last||d),l.el=e(t(n.touches[0].target)),a&&clearTimeout(a),l.x1=n.touches[0].pageX,l.y1=n.touches[0].pageY,p>0&&250>=p&&(l.isDoubleTap=!0),l.last=d,c=setTimeout(r,f)}).bind("touchmove",function(e){i(),l.x2=e.touches[0].pageX,l.y2=e.touches[0].pageY,Math.abs(l.x1-l.x2)>10&&e.preventDefault()}).bind("touchend",function(t){i(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?s=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+n(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(u=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=o,l.el.trigger(t),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):a=setTimeout(function(){a=null,l.el.trigger("singleTap"),l={}},250)},0))}).bind("touchcancel",o),e(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}(Zepto),this.Zepto&&!function(e){var t,n;return t=function(e,t,n,r,i){var o,a;return e?(a=e[n](),o={width:["left","right"],height:["top","bottom"]},o[n].forEach(function(t){return a+=parseInt(e.css("padding-"+t),10),r&&(a+=parseInt(e.css("border-"+t+"-width"),10)),i?a+=parseInt(e.css("margin-"+t),10):void 0}),a):null},["width","height"].forEach(function(n){var r,i,o,a,u;return r=n.replace(/./,function(e){return e[0].toUpperCase()}),(i=e.fn)[a="inner"+r]||(i[a]=function(e){return t(this,r,n,!1,e)}),(o=e.fn)[u="outer"+r]||(o[u]=function(e){return t(this,r,n,!0,e)})}),(n=e.fn).detach||(n.detach=function(e){var t,n;return n=this,null!=e&&(n=n.filter(e)),t=n.clone(!0),n.remove(),t})}(Zepto);