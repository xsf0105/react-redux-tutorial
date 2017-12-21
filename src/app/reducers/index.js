/**
 * Created by Allan on 2017/12/23.
 * 所有组件请求接口需要在这里注册
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import entry from "./entry/";
// import homePage from "./homePage/";
// import * as userInfo from './containers/userInfoPage/reducer';

// 需要放到store的state注册到这里
export default combineReducers({
  routing: routerReducer,
  entry
  // homePage,
});
