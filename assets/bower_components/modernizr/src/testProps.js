define(["contains","mStyle","createElement","nativeTestProps","is","cssToDOM"],function(e,t,n,i,r,o){function a(a,s,c,l){function u(){f&&(delete t.style,delete t.modElem)}if(l=r(l,"undefined")?!1:l,!r(c,"undefined")){var d=i(a,c);if(!r(d,"undefined"))return d}for(var f,p,h,m,g,v=["modernizr","tspan"];!t.style;)f=!0,t.modElem=n(v.shift()),t.style=t.modElem.style;for(h=a.length,p=0;h>p;p++)if(m=a[p],g=t.style[m],e(m,"-")&&(m=o(m)),void 0!==t.style[m]){if(l||r(c,"undefined"))return u(),"pfx"==s?m:!0;try{t.style[m]=c}catch(y){}if(t.style[m]!=g)return u(),"pfx"==s?m:!0}return u(),!1}return a});