/**
 * Created by Allan on 2017/12/23.
 * 所有组件请求接口需要在这里注册
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
// 其他页面的reducer也按下面导入combine
import * as homeReducer from './../containers/homePage/reducer.ts';

// 需要放到store的state注册到这里
export default combineReducers({
  routing: routerReducer,
  ...homeReducer
});
