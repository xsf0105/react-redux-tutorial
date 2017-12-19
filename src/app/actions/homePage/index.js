/**
 * Created by Allan on 2017/09/13.
 */
// import { createAction } from "redux-actions"; // 在sotre中存state需要创建
import cFetch from "../../utils/cFetch";
import API from "../../config/api";
const { HOME } = API;

// 创建 action
// const getUserInfo = createAction("GET_USERINFO");

export const getUserInfo = () => dispatch => {
  return cFetch(
    HOME.USERINFO,
    Object.assign(
      {
        method: "GET"
      },
      process.env.NODE_ENV === "production" ? {} : { credentials: "omit" }
    )
  ).then(res => {
    console.log("用户信息：", res);
  });
};
