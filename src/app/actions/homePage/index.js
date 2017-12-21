/**
 * Created by Allan on 2017/12/23
 */
import { createAction } from "redux-actions";
import cFetch from "../../utils/cFetch";

import API from "../../config/api";
const { getList } = API.usersPreJob;

/**
 * 状态不需要共享就直接在组建内单独调用使用
 * param接口传参
 */
export const fetchList = params => dispatch => {
  return cFetch(
    getList,
    Object.assign(
      {
        method: "POST",
        body: params
      },
      process.env.NODE_ENV === "production" ? {} : { credentials: "omit" }
    )
  );
};
