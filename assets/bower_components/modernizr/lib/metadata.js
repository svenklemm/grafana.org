function metadata(t){var e=[];return file.walkSync(viewRoot,function(t,n,i){i.forEach(function(n){if(".DS_Store"!==n){var i,r=fs.readFileSync(t+"/"+n,"utf8"),o=/\/\*\!([\s\S]*)\!\*\//m,s=r.match(o),a=/\/\*\sDOC([\s\S]*?)\*\//m,l=r.match(a),u=/define\((\[[^\]]*\]),/,c=r.match(u);if(s&&s[1])try{i=JSON.parse(s[1])}catch(d){throw new Error("Error Parsing Metadata: "+n+"\nInput: `"+s[1]+"`")}else i={};var f=null;l&&l[1]&&(f=marked(l[1].trim())),i.doc=f;var h,p=[];if(!c||!c[1])throw new Error("Couldn't find the define for `"+n+"`");try{h=JSON.parse(c[1].replace(/'/g,'"'))}catch(d){throw new Error("Couldn't parse dependencies for `"+n+"`:\n`"+c[1]+"\n`")}h.forEach(function(t){"Modernizr"!==t&&p.push(t)}),i.deps=p;var g=__dirname.replace(/lib$/,"");i.path="./"+(t+"/"+n).replace(g,"").replace(/\\/g,"/"),i.amdPath=i.path.replace(/^\.\/feature\-detects/,"test").replace(/\.js$/i,""),i.name||(i.name=i.amdPath);var m=[];i.polyfills&&i.polyfills.length&&i.polyfills.forEach(function(t){if(!polyfills[t])throw new Error(i.name+": Polyfill not found in `"+n+"`: "+t);m.push(polyfills[t])}),i.polyfills=m,i.async||(i.async=!1),i.notes||(i.notes=[]),i.warnings||(i.warnings=[]),i.caniuse||(i.caniuse=null),!i.cssclass&&i.property?i.cssclass=i.property:i.cssclass=null,!i.doc&&i.docs&&(i.doc=i.docs,delete i.docs),i.tags||(i.tags=[]),i.authors||(i.authors=[]),i.knownBugs||(i.knownBugs=[]),e.push(i)}})}),t&&"function"==typeof t?t(e):e}var fs=require("fs"),file=require("file"),marked=require("marked"),polyfills=require("./polyfills.json"),viewRoot=fs.realpathSync(__dirname+"/../feature-detects");module.exports=metadata;