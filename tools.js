var es5 = 
    void 0!==Object.create&&
    void 0!==Object.freeze&&
    void 0!==Array.isArray&&
    void 0!==Array.prototype.some&&
    void 0!==Array.prototype.forEach&&
    void 0!==Date.prototype.toISOString&&
    void 0!==Function.prototype.bind&&
    void 0!==JSON.parse;

var es6=(
    void 0!==Array.from&&
    void 0!==Array.of&&
    void 0!==Math.acosh&&
    void 0!==Math.hypot&&
    void 0!==Math.imul&&
    void 0!==Number.isInteger&&
    void 0!==Number.isNaN&&
    void 0!==Number.EPSILON&&
    void 0!==Object.assign&&
    void 0!==Promise&&
    void 0!==Proxy&&
    void 0!==Map&&
    void 0!==Set&&
    void 0!==WeakMap&&
    void 0!==WeakSet&&
    void 0!==Symbol);

var b ={
ie: /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent),
opera: typeof window.opr !== "undefined",
chrome: window.chrome && typeof window.opr === "undefined",
ichrome: window.navigator.userAgent.match("CriOS")||false,
safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
firefox: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
mobile:  this.ichrome || window.isMobile.any || false
}
