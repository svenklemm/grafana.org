define(["./core","./var/concat","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/support","./data/var/data_priv","./data/var/data_user","./core/init","./data/accepts","./traversing","./selector","./event"],function(e,t,n,i,r,o,s,a){function c(t,n){return e.nodeName(t,"table")&&e.nodeName(11!==n.nodeType?n:n.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function l(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function u(e){var t=x.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function d(e,t){for(var n=0,i=e.length;i>n;n++)s.set(e[n],"globalEval",!t||s.get(t[n],"globalEval"))}function f(t,n){var i,r,o,c,l,u,d,f;if(1===n.nodeType){if(s.hasData(t)&&(c=s.access(t),l=s.set(n,c),f=c.events)){delete l.handle,l.events={};for(o in f)for(i=0,r=f[o].length;r>i;i++)e.event.add(n,o,f[o][i])}a.hasData(t)&&(u=a.access(t),d=e.extend({},u),a.set(n,d))}}function p(t,n){var i=t.getElementsByTagName?t.getElementsByTagName(n||"*"):t.querySelectorAll?t.querySelectorAll(n||"*"):[];return void 0===n||n&&e.nodeName(t,n)?e.merge([t],i):i}function h(e,t){var n=t.nodeName.toLowerCase();"input"===n&&r.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}var m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/<([\w:]+)/,v=/<|&#?\w+;/,y=/<(?:script|style|link)/i,b=/checked\s*(?:[^=]|=\s*.checked.)/i,_=/^$|\/(?:java|ecma)script/i,x=/^true\/(.*)/,w=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,A={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return A.optgroup=A.option,A.tbody=A.tfoot=A.colgroup=A.caption=A.thead,A.th=A.td,e.extend({clone:function(t,n,i){var r,s,a,c,l=t.cloneNode(!0),u=e.contains(t.ownerDocument,t);if(!(o.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||e.isXMLDoc(t)))for(c=p(l),a=p(t),r=0,s=a.length;s>r;r++)h(a[r],c[r]);if(n)if(i)for(a=a||p(t),c=c||p(l),r=0,s=a.length;s>r;r++)f(a[r],c[r]);else f(t,l);return c=p(l,"script"),c.length>0&&d(c,!u&&p(t,"script")),l},buildFragment:function(t,n,i,r){for(var o,s,a,c,l,u,f=n.createDocumentFragment(),h=[],y=0,b=t.length;b>y;y++)if(o=t[y],o||0===o)if("object"===e.type(o))e.merge(h,o.nodeType?[o]:o);else if(v.test(o)){for(s=s||f.appendChild(n.createElement("div")),a=(g.exec(o)||["",""])[1].toLowerCase(),c=A[a]||A._default,s.innerHTML=c[1]+o.replace(m,"<$1></$2>")+c[2],u=c[0];u--;)s=s.lastChild;e.merge(h,s.childNodes),s=f.firstChild,s.textContent=""}else h.push(n.createTextNode(o));for(f.textContent="",y=0;o=h[y++];)if((!r||-1===e.inArray(o,r))&&(l=e.contains(o.ownerDocument,o),s=p(f.appendChild(o),"script"),l&&d(s),i))for(u=0;o=s[u++];)_.test(o.type||"")&&i.push(o);return f},cleanData:function(t){for(var n,i,r,o,c=e.event.special,l=0;void 0!==(i=t[l]);l++){if(e.acceptData(i)&&(o=i[s.expando],o&&(n=s.cache[o]))){if(n.events)for(r in n.events)c[r]?e.event.remove(i,r):e.removeEvent(i,r,n.handle);s.cache[o]&&delete s.cache[o]}delete a.cache[i[a.expando]]}}}),e.fn.extend({text:function(t){return i(this,function(t){return void 0===t?e.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=c(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=c(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(t,n){for(var i,r=t?e.filter(t,this):this,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||e.cleanData(p(i)),i.parentNode&&(n&&e.contains(i.ownerDocument,i)&&d(p(i,"script")),i.parentNode.removeChild(i));return this},empty:function(){for(var t,n=0;null!=(t=this[n]);n++)1===t.nodeType&&(e.cleanData(p(t,!1)),t.textContent="");return this},clone:function(t,n){return t=null==t?!1:t,n=null==n?t:n,this.map(function(){return e.clone(this,t,n)})},html:function(t){return i(this,function(t){var n=this[0]||{},i=0,r=this.length;if(void 0===t&&1===n.nodeType)return n.innerHTML;if("string"==typeof t&&!y.test(t)&&!A[(g.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(m,"<$1></$2>");try{for(;r>i;i++)n=this[i]||{},1===n.nodeType&&(e.cleanData(p(n,!1)),n.innerHTML=t);n=0}catch(o){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(n){t=this.parentNode,e.cleanData(p(this)),t&&t.replaceChild(n,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(n,i){n=t.apply([],n);var r,a,c,d,f,h,m=0,g=this.length,v=this,y=g-1,x=n[0],A=e.isFunction(x);if(A||g>1&&"string"==typeof x&&!o.checkClone&&b.test(x))return this.each(function(e){var t=v.eq(e);A&&(n[0]=x.call(this,e,t.html())),t.domManip(n,i)});if(g&&(r=e.buildFragment(n,this[0].ownerDocument,!1,this),a=r.firstChild,1===r.childNodes.length&&(r=a),a)){for(c=e.map(p(r,"script"),l),d=c.length;g>m;m++)f=r,m!==y&&(f=e.clone(f,!0,!0),d&&e.merge(c,p(f,"script"))),i.call(this[m],f,m);if(d)for(h=c[c.length-1].ownerDocument,e.map(c,u),m=0;d>m;m++)f=c[m],_.test(f.type||"")&&!s.access(f,"globalEval")&&e.contains(h,f)&&(f.src?e._evalUrl&&e._evalUrl(f.src):e.globalEval(f.textContent.replace(w,"")))}return this}}),e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,i){e.fn[t]=function(t){for(var r,o=[],s=e(t),a=s.length-1,c=0;a>=c;c++)r=c===a?this:this.clone(!0),e(s[c])[i](r),n.apply(o,r.get());return this.pushStack(o)}}),e});