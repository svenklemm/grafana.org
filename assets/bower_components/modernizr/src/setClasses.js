define(["Modernizr","docElement","isSVG"],function(t,e,n){function i(i){var r=e.className,o=t._config.classPrefix||"";if(n&&(r=r.baseVal),t._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");r=r.replace(s,"$1"+o+"js$2")}t._config.enableClasses&&(r+=" "+o+i.join(" "+o),n?e.className.baseVal=r:e.className=r)}return i});