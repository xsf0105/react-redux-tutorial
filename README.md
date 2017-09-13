# React-app

- 增加`react-router` `thunk`
- 开启代理服务
- Mock接口与线上接口分离
- eslint预发检测
- 前端技术栈：React+Redux+Fetch+es6+Ant Design
- 请求接口预先“埋点”处理后端报错信息（封装了方法处理）

## Development
环境准备妥当之后，把项目clone下来，切换到对应分支。安装项目依赖：
(tips：如果使用阿里的私有npm包，需要使用'tnpm'来替换'npm'或'cnpm',目前web端没有使用阿里私有npm包，移动端使用了)
```
npm install
```
即可开始开发。
- 启动项目(mock也会同时开启)
```
npm run start
```
- 打包项目
```
npm run build
```

## Code Standard：

#### 一、接口相关
* 接口地址统一存放src/app/config
* 使用的是whatwg-fetch，然后在此基础上埋了一些方法，用于处理一些后端返回的东西。（数据层／业务层分离）
* 调用接口直接在js文件顶部引入公共方法：
组建内部state就写内部
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

需要共享的state用redux存store

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
* 请求方式有3种，配置的位置在script/server.js
1. 本地开发后执行build, commit到服务器，然后访问线上地址
2. Mock（目前统一的做法）
```
//  mock数据入口
// 可以配合Mogodb
yield proxy(
    {
        host: 'http://localhost:2016/',
        match: /(\/hrmregister\/)/
    }
 );
```

#### 二、书写规范
项目中使用了eslint，目前很多小伙伴没有在意上面的报错和警告。这个有待解决，不要留有任何bug和warning！！！
除此之外，有一些规范不能被检测到请大家书写时尽量保持规范

例如：
1、
```
error writing：
import {Layout} from 'antd';

Right writing
import { Layout } from 'antd';

Error writing:
//这里是注释

Right writing:
//  这里是注释
```

2、
代码行间距的间隔不要超过2行，一般就1行

3、
各自写的代码顶部标注自己的信息，如：
```
/**
 * Created by Allan on 2017/6/10.
 */
import React from 'react';
import { connect } from 'react-redux';
```

4、尽量删掉没用的代码，不要留着，保持代码干净整洁

5、缩进使用tab还是或空格没有严格要求，按个人习惯来，但是要统一，不要混用就行

待续。。。


## Reference
- 脚手架工具 create-react-app [地址](https://github.com/facebookincubator/create-react-app)