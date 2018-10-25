//keepAlive
app.get([`/ping?`], function(req, res) {
    res.status(200).json("alive");
});
setInterval(() => {
    fetch(`http://${process.env.PROJECT_DOMAIN}.glitch.me/ping`).then((res) => {
        res.json().then((data) => {
            console.log(`status: ${res.status}, data: ${data}`);
        });
    });
}, 4 * (60000));
