!function(){function e(){Modernizr.addTest("blobworkers",!1),t()}function t(){o&&u.revokeObjectURL(o),i&&i.terminate(),s&&clearTimeout(s)}try{var n,r,i,o,s,a=window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder||window.BlobBuilder,u=window.MozURL||window.webkitURL||window.MSURL||window.OURL||window.URL,c="Modernizr",l="this.onmessage=function(e){postMessage(e.data)}";try{n=new Blob([l],{type:"text/javascript"})}catch(f){}n||(r=new a,r.append(l),n=r.getBlob()),o=u.createObjectURL(n),i=new Worker(o),i.onmessage=function(e){Modernizr.addTest("blobworkers",c===e.data),t()},i.onerror=e,s=setTimeout(e,200),i.postMessage(c)}catch(f){e()}}();