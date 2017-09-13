var router = require('koa-router')();
var koa = require('koa');
var proxy = require('koa-proxy');
var app = koa();

app.use(router.allowedMethods());

app.use(proxy({
    host: 'http://30.2.224.69:2016/'
}));


app.listen(3001, function() {
  console.log('Server running on port %s', 3001);
});