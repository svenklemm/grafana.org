/*! http://mths.be/placeholder v2.0.9 by @mathias */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t){var n={},r=/^jQuery\d+$/;return e.each(t.attributes,function(e,t){t.specified&&!r.test(t.name)&&(n[t.name]=t.value)}),n}function n(t,n){var r=this,o=e(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().nextAll('input[type="password"]:first').show().attr("id",o.removeAttr("id").data("placeholder-id")),t===!0)return o[0].value=n;o.focus()}else r.value="",o.removeClass("placeholder"),r==i()&&r.select()}function r(){var r,i=this,o=e(i),a=this.id;if(""===i.value){if("password"===i.type){if(!o.data("placeholder-textinput")){try{r=o.clone().attr({type:"text"})}catch(u){r=e("<input>").attr(e.extend(t(this),{type:"text"}))}r.removeAttr("name").data({"placeholder-password":o,"placeholder-id":a}).bind("focus.placeholder",n),o.data({"placeholder-textinput":r,"placeholder-id":a}).before(r)}o=o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}function i(){try{return document.activeElement}catch(e){}}var o,a,u="[object OperaMini]"==Object.prototype.toString.call(window.operamini),c="placeholder"in document.createElement("input")&&!u,s="placeholder"in document.createElement("textarea")&&!u,l=e.valHooks,f=e.propHooks;c&&s?(a=e.fn.placeholder=function(){return this},a.input=a.textarea=!0):(a=e.fn.placeholder=function(){var e=this;return e.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":r}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=c,a.textarea=s,o={get:function(t){var n=e(t),r=n.data("placeholder-password");return r?r[0].value:n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":t.value},set:function(t,o){var a=e(t),u=a.data("placeholder-password");return u?u[0].value=o:a.data("placeholder-enabled")?(""===o?(t.value=o,t!=i()&&r.call(t)):a.hasClass("placeholder")?n.call(t,!0,o)||(t.value=o):t.value=o,a):t.value=o}},c||(l.input=o,f.value=o),s||(l.textarea=o,f.value=o),e(function(){e(document).delegate("form","submit.placeholder",function(){var t=e(".placeholder",this).each(n);setTimeout(function(){t.each(r)},10)})}),e(window).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})}))});