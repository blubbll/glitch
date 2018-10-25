//error wrapper for fetch
const fetch = function(url, options) {
    var promise = require('node-fetch')(url, options).then(function(response) {
        return response;
    }).catch(error => console.error(`fetch error: ${error}`));
    return promise;
}
//String ReplaceAll
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
//String minify
String.prototype.minify=function(){var e=this;return e=(e=(e=(e=(e=(e=e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,""))
   .replace(/ {2,}/g," ")).replace(/ ([{:}]) /g,"$1")).replace(/([;,]) /g,"$1")).replace(/([{:}]) /g,"$1")).replace(/ !/g,"!")};
