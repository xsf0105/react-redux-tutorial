# React-app（使用过程碰到问题请随时提 issues）

## Live Demo

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
npm i
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
* 调用接口直接在 js 文件顶部引入公共方法：组建内部 state 就写内部

```
import cFetch from '../../utils/cFetch';
cFetch(‘url’, { method: 'POST', body: formData })
    .then(res => {
	// write code
    }).catch(() => {
        // write code
    })
```

Or

需要共享的 state 用 redux 存 store

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

* 请求方式有 3 种，配置的位置在 script/server.js

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

#### 二、结构

├── README.md
├── config #环境配置，以后的一些环境配置都可以放这里
├── build #压缩打包后的目录
├── package.json
├── src
│ ├── common #公用部分
│ │ ├── common.js #公用 js、
│ │ ├── common.scss #公用 scss
│ │ ├── reset.scss #reset scss
│ │ └── size.scss #自适应 scss
│ └── app #单个项目的文件夹
│ ├── index.js #reducer
│ ├── routes.js #路由
│ ├── actions #action 放这里
│ │ ├──homePage
│ │ │ └── index.js
│ │ ├── subPage
│ │ │ └── index.js
│ ├── components #公用组建
│ │ ├── NotFoundPage.js
│ │ └── NotFoundPage.scss
│ ├── config # api 接口存放位置
│ │ ├── api.js  
│ │ ├── dip-api.js # mock 接口地址
│ │ └── pro-api.js # 真实接口地址
│ ├── container # 单个页面存放
│ │ └── home
│ │ ├── about.scss
│ │ └── app.scss
│ ├── reducers #reducer
│ │ └── homePage
│ │ └── index.jsx
│ └── utils #封装的方法
│ └── common
└── pushdaily.sh #shell 命令脚本，用于云构建（云端没有配置的用不到，可以忽略/删掉）

## Reference

* Ant Design of React [地址](https://ant.design/docs/react/introduce-cn)
* 脚手架工具 create-react-app [地址](https://github.com/facebookincubator/create-react-app)
