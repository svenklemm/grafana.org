define(["../core","../var/indexOf","./var/rneedsContext","../selector"],function(t,e,n){function i(n,i,o){if(t.isFunction(i))return t.grep(n,function(t,e){return!!i.call(t,e,t)!==o});if(i.nodeType)return t.grep(n,function(t){return t===i!==o});if("string"==typeof i){if(r.test(i))return t.filter(i,n,o);i=t.filter(i,n)}return t.grep(n,function(t){return e.call(i,t)>-1!==o})}var r=/^.[^:#\[\.,]*$/;t.filter=function(e,n,i){var r=n[0];return i&&(e=":not("+e+")"),1===n.length&&1===r.nodeType?t.find.matchesSelector(r,e)?[r]:[]:t.find.matches(e,t.grep(n,function(t){return 1===t.nodeType}))},t.fn.extend({find:function(e){var n,i=this.length,r=[],o=this;if("string"!=typeof e)return this.pushStack(t(e).filter(function(){for(n=0;i>n;n++)if(t.contains(o[n],this))return!0}));for(n=0;i>n;n++)t.find(e,o[n],r);return r=this.pushStack(i>1?t.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&n.test(e)?t(e):e||[],!1).length}})});