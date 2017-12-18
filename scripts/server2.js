const serve = require("koa-static");
const router = require("koa-router")();
const koa = require("koa");
const proxy = require("koa-proxy");
const app = new koa();

const querystring = require("querystring");

app.use(serve("build"));
app.use(router.routes());
app.use(router.allowedMethods());

// host填写你需要代理到的服务器（本地或线上） match表示匹配到具体的路径的关键词
app.use(function*(next) {
  // 调试接口方案1：mock数据入口
  console.log("mock start...");
  yield proxy({
    host: "http://www.mockhttp.cn/",
    match: /(\/mock\/)/
  });

  // 调试接口方案3，代理到自己服务器（由于经常发布暂时不使用）：
  // this.query.check_sum = 'aaaaa';
  // this.query.uid = 'aaaaa';
  // this.query.org_id = 'aaaaa';
  // this.query.user_id = 'aaaaa';
  // this.querystring = querystring.stringify(this.query);
});

var server = require("http").createServer(app.callback());
server.listen(8000, function() {
  console.log("Server running on port %s", server.address().port);
});
