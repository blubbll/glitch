[cors = cors({
  origin: function (origin, callback) {
    if (simpleCors.hosts.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}),app.options(simpleCors.routes, cors),app.use(simpleCors.routes, cors);]
