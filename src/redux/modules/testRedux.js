/**
 * @author xuyi 2018-09-04
 */
import { createAction, handleActions } from "redux-actions";
import { createAsyncActionType, createAsyncAction } from "../../utils/request";

export const testActionType = "testaction";
export const fetchListAction = createAsyncActionType("fetchList");

const testRedux = handleActions(
  {
    // 同步
    [testActionType]: state => ({ ...state, msg: "hello world!" }),
    // 异步请求
    [fetchListAction.pending]: state => ({ ...state }),
    [fetchListAction.accept]: (state, action) => ({
      ...state,
      homeData: action.payload
    }),
    [fetchListAction.reject]: state => ({ ...state })
  },
  {
    msg: "",
    homeData: {}
  }
);

export default testRedux;

// 同步action
export const createTestAction = createAction(testActionType);

// 异步action
export const fetchList = createAsyncAction(
  "/v1/main/list",
  fetchListAction,
  "POST"
);
