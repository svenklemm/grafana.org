define(["Modernizr","docElement","isSVG"],function(e,t,n){function i(i){var r=t.className,o=e._config.classPrefix||"";if(n&&(r=r.baseVal),e._config.enableJSClass){var a=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");r=r.replace(a,"$1"+o+"js$2")}e._config.enableClasses&&(r+=" "+o+i.join(" "+o),n?t.className.baseVal=r:t.className=r)}return i});