const serve = require("koa-static");
const router = require("koa-router")();
const koa = require("koa");
const proxy = require("koa-proxy");
const cors = require("koa-cors");
const app = new koa();

app.use(cors());
app.use(serve("build"));
app.use(router.routes());
app.use(router.allowedMethods());

// host填写你需要代理到的服务器（本地或线上） match表示匹配到具体的路径的关键词
app.use(function*(next) {
  console.log("mock start...");
  yield proxy({
    host: "http://www.mockhttp.cn",
    match: /(\/api\/)/
  });
});

var server = require("http").createServer(app.callback());
server.listen(3001, function() {
  console.log("Server running on port %s", server.address().port);
});
