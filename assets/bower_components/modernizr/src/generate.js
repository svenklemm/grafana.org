define(["lodash"],function(e){return function(n){n||(n={}),n.options=n.options||[],n["feature-detects"]=n["feature-detects"]||[];var t=e.contains(n.options,"setClasses");n.options=e.without(n.options,"setClasses");var r='require(["ModernizrProto", "Modernizr", "testRunner"';return t&&(r+=', "setClasses", "classes"'),e.includes(n.options,"html5printshiv")&&(n.options=e.without(n.options,"html5shiv")),e.forEach(n.options,function(e){r+=', "'+e+'"'}),e.forEach(n["feature-detects"],function(e){e=0===e.indexOf("test/")?e:"test/"+e,r+=', "'+e+'"'}),r+="], function( ModernizrProto, Modernizr, testRunner",t&&(r+=", setClasses, classes"),r+=") {\n  // Run each test\n  testRunner();\n\n",t&&(r+='  // Remove the "no-js" class if it exists\n  setClasses(classes);\n\n'),r+="  delete ModernizrProto.addTest;\n",r+="  delete ModernizrProto.addAsyncTest;\n\n",r+="  // Run the things that are supposed to run after the tests\n  for (var i = 0; i < Modernizr._q.length; i++) {\n    Modernizr._q[i]();\n  }\n\n",r+="  // Leak Modernizr namespace\n  window.Modernizr = Modernizr;\n\n});"}});