/**
 * Created by Allan on 2017/09/13.
 */
// import { createAction } from 'redux-actions';
import cFetch from "../../utils/cFetch";
// import cookie from "js-cookie";
import API from "../../config/api";
const { login } = API;

export const loginUser = () => dispatch => {
  return cFetch(
    login,
    Object.assign(
      {
        method: "GET"
      },
      process.env.NODE_ENV === "production" ? {} : { credentials: "omit" }
    )
  );
  // .then(response => {
  //   cookie.set("access_token", response.access_token);
  // });
};
