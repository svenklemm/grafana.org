!function(e,t,n,i){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.4.7",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a",function(i){var r=n(this).closest("["+t.attr_name()+"]"),o=t.attr_name()+"="+r.attr(t.attr_name()),s=r.data(t.attr_name(!0)+"-init"),a=n("#"+this.href.split("#")[1]),c=e("> dd",r),u=c.children("."+s.content_class),l=u.filter("."+s.active_class);return i.preventDefault(),r.attr(t.attr_name())&&(u=u.add("["+o+"] dd > ."+s.content_class),c=c.add("["+o+"] dd")),s.toggleable&&a.is(l)?(a.parent("dd").toggleClass(s.active_class,!1),a.toggleClass(s.active_class,!1),s.callback(a),a.triggerHandler("toggled",[r]),void r.triggerHandler("toggled",[a])):(s.multi_expand||(u.removeClass(s.active_class),c.removeClass(s.active_class)),a.addClass(s.active_class).parent().addClass(s.active_class),s.callback(a),a.triggerHandler("toggled",[r]),void r.triggerHandler("toggled",[a]))})},off:function(){},reflow:function(){}}}(jQuery,window,window.document);