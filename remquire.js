const remquire = async function(url, debug) {
    return await fetch(url)
        .then(function(t) {
            return t.text()
        }).then(function(s) {
          if (debug) console.log(`importing ${url}...`)
            eval(s);
            if (debug) console.log(`imported & ran ${url}`)
        });
}
