define(["contains","mStyle","createElement","nativeTestProps","is","cssToDOM"],function(n,t,e,r,i,u){function o(o,a,f,c){function s(){p&&(delete t.style,delete t.modElem)}if(c=i(c,"undefined")?!1:c,!i(f,"undefined")){var l=r(o,f);if(!i(l,"undefined"))return l}for(var p,h,d,v,g,_=["modernizr","tspan"];!t.style;)p=!0,t.modElem=e(_.shift()),t.style=t.modElem.style;for(d=o.length,h=0;d>h;h++)if(v=o[h],g=t.style[v],n(v,"-")&&(v=u(v)),void 0!==t.style[v]){if(c||i(f,"undefined"))return s(),"pfx"==a?v:!0;try{t.style[v]=f}catch(m){}if(t.style[v]!=g)return s(),"pfx"==a?v:!0}return s(),!1}return o});