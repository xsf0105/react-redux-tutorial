# React-SPA
[![node-image](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)
[![npm-image](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://img.shields.io/npm/v/npm.svg?style=flat-square)
[![download-image](https://img.shields.io/npm/dm/npm.svg?style=flat-square)](https://img.shields.io/npm/dm/npm.svg?style=flat-square)


## 特性

- React+Redux+Fetch+es6+Ant Design 3.x
- TypeScript🚀
- CSS Modules 🚀
- Webpack 3.x
- Mock
- Eslint

## 开始使用
检出仓库，安装依赖，按照以下命令启动项目:

```bash
> git clone https://github.com/allan2coder/React-SPA.git
> cd React-SPA
> yarn install or npm install
> yarn start or npm start
```

## 编译应用

```bash
yarn run build
or
npm run build
```

## 依赖

* [Ant Design of React ](https://ant.design/docs/react/introduce-cn)
* [Create-react-app ](https://github.com/facebookincubator/create-react-app)
* [How to perform common tasks ](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#using-the-public-folder)


## 许可证

MIT

## 文件夹说明

```
+-- build：编译之后文件所在的文件夹
+-- config：配置文件夹
+-- mock：mock数据所在文件夹，便于前后端分离开发
+-- public：公共资源所在文件夹
+-- scripts：脚本所在文件夹
+-- src：源文件所在文件夹
|   +-- assets：图片、字体等文件所在文件夹
|   +-- components：与业务无关的公共组件所在文件夹
|   +-- config：异步请求地址配置
|   +-- containers：页面布局文件所在文件夹，把应用按照整体布局提取出来放入此文件夹中
|   |   +-- footer：通用页脚所在文件夹
|   |   +-- header：通用页头所在文件夹
|   |   +-- index.jsx：应用布局入口文件
|   |   +-- index.less：样式文件
|   +-- pages：页面文件所在文件夹
|   |   +-- 其它文件夹放置各个页面的组件
|   |   +-- shared：页面之间公用的组件
|   +-- redux：redux所在文件夹，把各个页面组件的reducer通过combineReducers合并成一个大的reducer
|   |   +-- middleware：redux中间价所在文件夹
|   |   +-- modules：reducer所在文件夹
|   |   +-- store：store配置所在文件夹
|   +-- styles：公共样式所在文件夹
|   +-- utils：工具文件夹
|   |   +-- isPromise.js：判断是否为一个Promise对象
|   |   +-- cFetch.js：封装的异步请求函数
|   |   +-- common.js：公用的工具类函数
|   |   +-- origin.js：判断是否为online或者是pre
|   |   +-- promise-middleware.js：处理action的payload中包含Promise对象的中间件
|   |   +-- request.js：异步请求创建action和action type的工具集合
|   +-- index.js：项目入口文件
|   +-- routes.js：项目路由文件夹
+-- .babelrc：babel配置文件
+-- .eslintrc：eslint配置
+-- .gitignore：git忽略文件，会提交到git，全局生效
+-- abc.json
+-- git.log
+-- LICENSE：许可证
+-- package-lock.json
+-- package.json
+-- postcss.config.js
+-- pushdaliy.sh
+-- README.md
+-- tsconfig.json：ts配置文件
+-- yarn.lock
```