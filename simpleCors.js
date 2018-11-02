cors = cors({
  origin: function (origin, callback) {
    if (simpleCors.hosts.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}),app.use(simpleCors.routes, cors)
