var myscript=document.createElement("script"),ref=document.getElementsByTagName("script")[0];myscript.src="http://caniuse.com/jsonp.php?callback=caniusecb",setTimeout(function(){ref.parentNode.insertBefore(myscript,ref)},100);var map={audio:"audio",borderimage:"border-image",borderradius:"border-radius",canvas:"canvas",canvastext:"canvas-text",cssanimations:"css-animation",boxshadow:"css-boxshadow",cssgradients:"css-gradients",opacity:"css-opacity",cssreflections:"css-reflections",textshadow:"css-textshadow",csstransitions:"css-transitions",hsla:"css3-colors",rgba:"css3-colors",draganddrop:"dragndrop",flexbox:"flexbox",fontface:"fontface",geolocation:"geolocation",hashchange:"hashchange",history:"history",indexeddb:"indexeddb",multiplebgs:"multibackgrounds",csscolumns:"multicolumn",localstorage:"namevalue-storage",applicationcache:"offline-apps",websqldatabase:"sql-storage",svg:"svg",touch:"touch",csstransforms:"transforms2d",csstransforms3d:"transforms3d",video:"video",webgl:"webgl",websockets:"websockets",webworkers:"webworkers",postmessage:"x-doc-messaging"};window.caniusecb=function(e){function t(e){if("y"==e||"a"==e)return!0;if("n"==e||"p"==e)return!1;throw"unknown return value from can i use"}function n(e){var n=t(e.ciuresult);return~TEST.audvid.indexOf(e.feature)&&(e.result=!!e.result),"a"==e.ciuresult?ok(!0,e.browser+e.version+": Caniuse reported partial support for "+e.ciufeature+". So.. Modernizr's "+e.result+" is good enough..."):("textshadow"==e.feature&&"firefox"==e.browser&&3==e.version&&0==n&&(n=e.fp=!0),void equal(e.result,n,e.browser+e.version+": Caniuse result for "+e.ciufeature+" matches Modernizr's "+(e.fp?"*false positive*":"result")+" for "+e.feature))}if(window.doo=e,window.JSONSelect){var r=e.data,i=uaparse(navigator.userAgent),o=JSONSelect.match(".agents .browser",e).indexOf(i.family),a=Object.keys(e.agents)[o];-1==navigator.userAgent.indexOf("PhantomJS")&&(module("caniuse.com data matches",{setup:function(){},teardown:function(){}}),test("we match caniuse data",function(){for(var e in Modernizr){var t=map[e];if(void 0!==t){var o=r[t];if(void 0===o)throw"unknown key of caniusedata";var u=o.stats[a],s=i.minor&&i.minor.toString().replace(/(\d)\d$/,"$1"),c=(i.major+"."+s).replace(/(9\.(6|5))/,"opera"==i.family?"9.5-9.6":"$1").replace(/(10\.(0|1))/,"opera"==i.family?"10.0-10.1":"$1"),l=u[c],f=u[i.major];if(l&&"u"!=l)l=l.replace(" x",""),n({feature:e,ciufeature:t,result:Modernizr[e],ciuresult:l,browser:a,version:c});else if(f){if("u"==f)continue;f=f.replace(" x",""),n({feature:e,ciufeature:t,result:Modernizr[e],ciuresult:f,browser:a,version:i.major})}}}}))}};