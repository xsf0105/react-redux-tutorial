/**
 * Created by Allan on 2017/09/13.
 */
import { handleActions } from "redux-actions";

//定义reducer
const reducer = handleActions(
  {
    COMMON_INFO: (state, action) => {
      return {
        ...state,
        result: action.payload
      };
    }
  },
  {
    // msg: "设置sote中默认的state"
  }
);

export default reducer;
