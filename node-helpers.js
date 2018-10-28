//error wrapper for fetch (node.js will fail on umhandled promise fails in the future, so this will be needed)
fetch = function(url, options) {
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

//promise overwrite
Promise.prototype.then = (oldThen=>{
    return function then(_successHandler, _rejectHandler){
        /* your logic here; 
        remember: both successHandler and rejectHandler can be non-functions */
        return oldThen.call(this, null, console.log('promise error'));
    }
})(Promise.prototype.then);
class SubPromise extends Promise {
    constructor(executor) {
        super(function(_resolve, _reject) {
           /* your code goes here */
           return executor(null, console.log('promise error'));
        });
    }

    then(success, reject) {
        return super.then(null, console.log('promise error'));
    }
}
window.Promise = SubPromise;
