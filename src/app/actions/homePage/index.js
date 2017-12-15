/**
 * Created by Allan on 2017/09/13.
 */
// import { createAction } from 'redux-actions';
import cFetch from "../../utils/cFetch";

import API from "../../config/api";
const { homePage } = API;

// export const fetchList = createAction('GET_EMPLOYEE_COUNT');
// export const fetchList2 = (pages) => (dispatch) => {
//     return cFetch(homePage.list, Object.assign({
//         method: 'POST',
//     }, process.env.NODE_ENV === 'production' ? {} : { credentials: 'omit' }))
//     .then(res => {
//         console.log(res);
//         dispatch(queryEmployeeCount(res.result))
//     }).catch(e => {
//         console.log(e);
//     });
// };

export const fetchList = () => dispatch => {
  return cFetch(
    homePage.list,
    Object.assign(
      {
        method: "POST"
      },
      process.env.NODE_ENV === "production" ? {} : { credentials: "omit" }
    )
  );
  // .then(res => {
  //     dispatch(getCorpInfo(res.result))
  // }).catch(e => {
  //     console.log(e);
  // });
};
