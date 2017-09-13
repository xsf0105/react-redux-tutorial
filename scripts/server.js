const serve = require('koa-static');
const router = require('koa-router')();
const koa = require('koa');
const proxy = require('koa-proxy');
const app = new koa();

const querystring = require("querystring");

app.use(serve('build'));
app.use(router.routes());
app.use(router.allowedMethods());

app.use(function *(next) {
    // 调试接口方案1：mock数据入口
    // console.log('mock start...');
    // yield proxy({
    //     host: 'http://localhost:2016/',
    //     match: /(\/hrmregister\/)/
    // });
    
    // 调试接口方案2，代理到线上：
    // yield proxy(
    //     {
    //         host: 'http://11.161.81.109:7001',
    //         match: /\/hrmregister\//,
    //     }
    // );

    // 调试接口方案3，代理到自己服务器（由于经常发布暂时不使用）：
    // this.query.check_sum = 'CjP0k92EpgzUCDd1wgOTrqpPpzwyCzkWOvM9JQPhhH6%2Bibx7WZiglw%3D%3D';
    // this.query.uid = 'wR%2F%2Bij6JYnw%3D';
    // this.query.org_id = '1hPMvn8a8T8%3D';
    // this.query.user_id = 'wIjDHzjTBdM%3D';
    // this.querystring = querystring.stringify(this.query);

});

var server = require('http').createServer(app.callback());
server.listen(8000, function() {
    console.log('Server running on port %s', server.address().port);
});