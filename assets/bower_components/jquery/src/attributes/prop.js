define(["../core","../core/access","./support"],function(t,e,n){var r=/^(?:input|select|textarea|button)$/i;t.fn.extend({prop:function(n,r){return e(this,t.prop,n,r,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[t.propFix[e]||e]})}}),t.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!t.isXMLDoc(e),a&&(n=t.propFix[n]||n,o=t.propHooks[n]),void 0!==r?o&&"set"in o&&void 0!==(i=o.set(e,r,n))?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||r.test(t.nodeName)||t.href?t.tabIndex:-1}}}}),n.optSelected||(t.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this})});