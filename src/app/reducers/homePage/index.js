/**
 * Created by Allan on 2017/09/13.
 */
import { handleActions } from "redux-actions";

//定义reducer
const reducer = handleActions(
  {
    GET_List: (state, action) => {
      console.log(action);
      return { ...state, result: action.payload };
    }
  },
  {}
);

export default reducer;
