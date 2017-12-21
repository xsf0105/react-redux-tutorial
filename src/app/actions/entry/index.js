/**
 * Created by Allan on 2017/09/13.
 */
import { createAction } from "redux-actions";
import cFetch from "../../utils/cFetch";
import API from "../../config/api";
const { ENTRY } = API;

const getSomeMessageAction = createAction("COMMON_INFO"); // 创建 action

export const getSomeMessage = () => dispatch => {
  return cFetch(ENTRY.MESSAGE, { method: "GET" }).then(res => {
    console.log("请求获取点东西：", res);
    // 请求到的结果存到store中
    dispatch(getSomeMessageAction(res.result)); // dispatch一个action对象作为参数发送出去
  });
};
