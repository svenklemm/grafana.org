define(["./core","./core/init","./manipulation","./traversing"],function(t){return t.fn.extend({wrapAll:function(n){var e;return t.isFunction(n)?this.each(function(e){t(this).wrapAll(n.call(this,e))}):(this[0]&&(e=t(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this)},wrapInner:function(n){return t.isFunction(n)?this.each(function(e){t(this).wrapInner(n.call(this,e))}):this.each(function(){var e=t(this),r=e.contents();r.length?r.wrapAll(n):e.append(n)})},wrap:function(n){var e=t.isFunction(n);return this.each(function(r){t(this).wrapAll(e?n.call(this,r):n)})},unwrap:function(){return this.parent().each(function(){t.nodeName(this,"body")||t(this).replaceWith(this.childNodes)}).end()}}),t});