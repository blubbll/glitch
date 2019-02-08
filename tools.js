! function(e) {
    var n = /iPhone/i,
        t = /iPod/i,
        r = /iPad/i,
        a = /\bAndroid(?:.+)Mobile\b/i,
        p = /Android/i,
        l = /\bAndroid(?:.+)SD4930UR\b/i,
        b = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
        f = /Windows Phone/i,
        u = /\bWindows(?:.+)ARM\b/i,
        c = /BlackBerry/i,
        s = /BB10/i,
        v = /Opera Mini/i,
        h = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        w = /\Mobile(?:.+)Firefox\b/i;

    function m(e, i) {
        return e.test(i)
    }

    function i(e) {
        var i = e || ("undefined" != typeof navigator ? navigator.userAgent : ""),
            o = i.split("[FBAN");
        void 0 !== o[1] && (i = o[0]), void 0 !== (o = i.split("Twitter"))[1] && (i = o[0]);
        var d = {
            apple: {
                phone: m(n, i) && !m(f, i),
                ipod: m(t, i),
                tablet: !m(n, i) && m(r, i) && !m(f, i),
                device: (m(n, i) || m(t, i) || m(r, i)) && !m(f, i)
            },
            amazon: {
                phone: m(l, i),
                tablet: !m(l, i) && m(b, i),
                device: m(l, i) || m(b, i)
            },
            android: {
                phone: !m(f, i) && m(l, i) || !m(f, i) && m(a, i),
                tablet: !m(f, i) && !m(l, i) && !m(a, i) && (m(b, i) || m(p, i)),
                device: !m(f, i) && (m(l, i) || m(b, i) || m(a, i) || m(p, i))
            },
            windows: {
                phone: m(f, i),
                tablet: m(u, i),
                device: m(f, i) || m(u, i)
            },
            other: {
                blackberry: m(c, i),
                blackberry10: m(s, i),
                opera: m(v, i),
                firefox: m(w, i),
                chrome: m(h, i),
                device: m(c, i) || m(s, i) || m(v, i) || m(w, i) || m(h, i)
            }
        };
        return d.any = d.apple.device || d.android.device || d.windows.device || d.other.device, d.phone = d.apple.phone || d.android.phone || d.windows.phone, d.tablet = d.apple.tablet || d.android.tablet || d.windows.tablet, d
    }
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = i : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = i() : "function" == typeof define && define.amd ? define([], e.isMobile = i()) : e.isMobile = i()
}(this);

try{function dummy(){}new dummy,window.es4=!0}catch(n){window.es4=!1};
var es5 = 
    void 0!==Object.create&&
    void 0!==Object.freeze&&
    void 0!==Array.isArray&&
    void 0!==Array.prototype.some&&
    void 0!==Array.prototype.forEach&&
    void 0!==Date.prototype.toISOString&&
    void 0!==Function.prototype.bind&&
    void 0!==JSON.parse;
var es6=
    void 0!==Array.from&&
    void 0!==Array.of&&
    void 0!==Math.acosh&&
    void 0!==Math.hypot&&
    void 0!==Math.imul&&
    void 0!==Number.isInteger&&
    void 0!==Number.isNaN&&
    void 0!==Number.EPSILON&&
    void 0!==Object.assign&&
    void 0!==window.Promise&&
    void 0!==window.Proxy&&
    void 0!==window.Map&&
    void 0!==window.Set&&
    void 0!==window.WeakMap&&
    void 0!==window.WeakSet&&
    void 0!==window.Symbol;

var es7=
    void 0!==window.ResizeObserver&&
    void 0!==window.MutationObserver;

var b = {
    ie: /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent),
    opera: typeof window.opr !== "undefined",
    chrome: window.chrome && typeof window.opr === "undefined",
    ichrome: window.navigator.userAgent.match("CriOS") || false,
    safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    firefox: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    mobile: this.ichrome || window.isMobile.any || false
}

window.flexbox = function() {
    var t = "flex",
        e = "-webkit-".concat(t),
        l = document.createElement("b");
    try {
        return l.style.display = e, l.style.display = t, !(l.style.display !== t && l.style.display !== e)
    } catch (t) {
        return !1
    }
}();
