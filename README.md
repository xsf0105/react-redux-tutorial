# React-app（使用过程碰到问题请随时提 issues）

The live demo can be found in [https://allan2coder.github.io/React-SPA/#/](https://allan2coder.github.io/React-SPA/#/) (注：该项目同样适合移动端)

* 包含`redux` `ant design` `react-router` `thunk`
* 开启代理服务
* Mock 接口与线上接口分离
* eslint 预发检测
* 前端技术栈：React+Redux+Fetch+es6+Ant Design
* 请求接口预先“埋点”处理后端报错信息（封装了方法处理）

## Development

* 环境准备妥当之后，把项目 clone 下来，切换到对应分支。安装项目依赖：

```
npm install
```

即可开始开发。

* 启动项目(mock 也会同时开启,这里还没开启)

```
npm start
```

* 打包项目

```
npm run build
```

## Why Redux

![image](https://raw.githubusercontent.com/allan2coder/awesome-react/master/static/why-redux.jpg)

## Mock(默认关闭，需要可以自行开启，在 script/server.js 文件中)

```
app.use(function *(next) {
    console.log('mock start...');
    yield proxy({
        host: 'http://localhost:2016/', // 本地（也可以远程）开启mongodb的ip
        match:
    });
});
```

## Code Standard：

#### 一、接口相关

* 接口地址统一存放 src/app/config
* 使用的是 whatwg-fetch，然后在此基础上埋了一些方法，用于处理一些后端返回的东西。（数据层／业务层分离）
* state 状态存储：
  * 组建内部 state 就写内部;
  * 需要共享的 state 用 redux 存 store

```
import cFetch from '../../utils/cFetch';
cFetch(‘url’, { method: 'POST', body: formData })
    .then(res => {
    // write code
    })
```

Or

```
import { fetchInfoUrl } from '../../actions/yourPath/';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        fetchInfoUrl
    }, dispatch)
});

componentWillMount() {
    this.props.actions.fetchInfoUrl();
}
```

* 请求方式有 2 种，配置的位置在 script/server.js

1. 本地开发后执行 build, commit 到服务器，然后访问线上地址
2. Mock（目前统一的做法）

```
//  mock数据入口
// 可以配合Mogodb
yield proxy(
    {
        host: 'http://localhost:2016/',
        match: /(\/路径需要匹配的关键词\/)/
    }
 );
```

## Reference

* Ant Design of React [地址](https://ant.design/docs/react/introduce-cn)
* 脚手架工具 create-react-app [地址](https://github.com/facebookincubator/create-react-app)
