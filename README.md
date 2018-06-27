# React-app（使用过程碰到问题请随时提 issues）

This project was bootstrapped with Create React App.(注：该项目同样适合移动端)

* React+Redux+Fetch+es6+Ant Design 3.x
* TypeScript(推荐使用ts强制类型语言🚀)
* CSS Modules（推荐使用CSS Modules🚀），也同时支持LESS和css
* Webpack 3.x
* Mock（支持代理到远程mock，也支持mock本地数据）
* Eslint


## ScreenShots

![image](https://raw.githubusercontent.com/allan2coder/React-SPA/master/screenshot/login.png)

![image](https://raw.githubusercontent.com/allan2coder/React-SPA/master/screenshot/main.png)

![image](https://raw.githubusercontent.com/allan2coder/React-SPA/master/screenshot/redux_devTools.png)


## Development

* download this project and install dependencies

```
git clone https://github.com/allan2coder/React-SPA.git
cd React-SPA
npm install
```

* start the app

```
npm start   // npm run dev & npm run server
```


* build the app

```
npm run build
```

* publish to gh-pages

```
git subtree push --prefix=build origin gh-pages
```


## Why Redux

![image](https://raw.githubusercontent.com/allan2coder/React-SPA/master/screenshot/why-redux.jpg)

## ESLint
http://eslint.cn/docs/rules/indent

## Optimize
use `babel-plugin-import` to reduce the bundle size for antd significantly

Where to add babel-plugin-import
· babelrc
· babel-loader



## Code Standard：

#### 一、接口相关

* 接口地址统一存放 src/app/config
* cFetch 是基于 whatwg-fetch 的，在此基础上埋了一些方法，用于处理一些后端返回的东西。（数据层／业务层分离）
* state 状态存储：
  * 组建内部 state 就写内部;
  * 需要共享的 state 用 redux 存 store
  * 根据项目大小和复杂程度合理使用，大型项目使用redux比较方便后期维护

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

...

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        fetchInfoUrl
    }, dispatch)
});

...

componentWillMount() {
    this.props.actions.fetchInfoUrl();
}
```

* 请求接口配置文件在 `script/server.js` 中

```
//  mock数据入口
// 可以配合Mogodb, 开启服务后配置下面的host指向mock服务器的host
yield proxy(
    {
        host: 'http://localhost:2016/',
        match: /(\/路径含有的某个关键词\/)/
    }
 );
```

## Reference

* Ant Design of React [地址]https://ant.design/docs/react/introduce-cn
* Create-react-app [地址]https://github.com/facebookincubator/create-react-app
* How to perform common tasks [地址]https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#using-the-public-folder
