Modernizr.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function t(){A.removeChild(n),n=null,r=null,d=null}var n=document.createElement("ruby"),r=document.createElement("rt"),d=document.createElement("rp"),A=document.documentElement,i="display",o="fontSize";return n.appendChild(d),n.appendChild(r),A.appendChild(n),"none"==e(d,i)||"ruby"==e(n,i)&&"ruby-text"==e(r,i)||"6pt"==e(d,o)&&"6pt"==e(r,o)?(t(),!0):(t(),!1)});