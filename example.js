'use strict'

const tracer = require('dd-trace').init({
  logInjection: true,
  hostname: 'docker-desktop',
  port: 8126
});

var app = require('express')()
var pino = require('express-pino-logger')()

app.use(pino)

app.get('/', function (req, res) {
  req.log.info('something else')
  res.send('hello world')
})

app.get('/err', function (req, res) {
  req.log.error('!ERROR')
  res.send('hello error')
})

app.listen(3000)