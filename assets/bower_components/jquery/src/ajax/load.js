define(["../core","../core/parseHTML","../ajax","../traversing","../manipulation","../selector","../event/alias"],function(e){var t=e.fn.load;e.fn.load=function(n,i,r){if("string"!=typeof n&&t)return t.apply(this,arguments);var o,s,a,c=this,l=n.indexOf(" ");return l>=0&&(o=e.trim(n.slice(l)),n=n.slice(0,l)),e.isFunction(i)?(r=i,i=void 0):i&&"object"==typeof i&&(s="POST"),c.length>0&&e.ajax({url:n,type:s,dataType:"html",data:i}).done(function(t){a=arguments,c.html(o?e("<div>").append(e.parseHTML(t)).find(o):t)}).complete(r&&function(e,t){c.each(r,a||[e.responseText,t,e])}),this}});