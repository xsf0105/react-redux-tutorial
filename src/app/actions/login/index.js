/**
 * Created by Allan on 2017/12/20.
 */
import cFetch from "../../utils/cFetch";
import API from "../../config/api";
const { LOGIN } = API;

export const loginUser = () => dispatch => {
  return cFetch(
    LOGIN,
    Object.assign(
      {
        method: "GET"
      },
      process.env.NODE_ENV === "production" ? {} : { credentials: "omit" }
    )
  );
};
