define(function(){var n=function(n){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;e.open("get","/",!0);try{e.responseType=n}catch(t){return!1}return"response"in e&&e.responseType==n};return n});