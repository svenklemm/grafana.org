Modernizr.addTest("details",function(){var e,t,n,r=document,d=r.createElement("details");return"open"in d?(t=r.body||function(){var t=r.documentElement;return e=!0,t.insertBefore(r.createElement("body"),t.firstElementChild||t.firstChild)}(),d.innerHTML="<summary>a</summary>b",d.style.display="block",t.appendChild(d),n=d.offsetHeight,d.open=!0,n=n!=d.offsetHeight,t.removeChild(d),e&&t.parentNode.removeChild(t),n):!1});