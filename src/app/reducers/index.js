/**
 * Created by Allan on 2017/09/13.
 * 所有组件请求接口需要在这里注册
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import homePage from "./homePage/";
import subPage from "./subPage/";
// import * as userInfo from './containers/userInfoPage/reducer';

export default combineReducers({
  routing: routerReducer,
  homePage,
  subPage
});
