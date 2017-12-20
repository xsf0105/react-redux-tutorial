/**
 * Created by Allan on 2017/09/13.
 */
import { createAction } from "redux-actions";
import cFetch from "../../utils/cFetch";
import API from "../../config/api";
const { HOME } = API;

const getUserInfoAction = createAction("GET_USERINFO"); // 创建 action

export const getUserInfo = () => dispatch => {
  return cFetch(HOME.USERINFO, { method: "GET" }).then(res => {
    console.log("用户信息：", res);
    // 请求到的内容存到store中
    dispatch(getUserInfoAction(res.result)); // dispatch一个action对象作为参数发送出去
  });
};
