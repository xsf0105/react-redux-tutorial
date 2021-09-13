// import * as types from '../constants/ActionTypes'

// export default function fetchHome() {
//     return (dispatch: Function) => new Promise(() => {
//         dispatch(receivehome('ajax-success-call'))
//     })
// }

// function receivehome(homes: string) {
//     return {
//         type: types.GET_V1_SONG,
//         homes,
//     }
// }

/**
 * 有关于 mock 数据！！！
 * 接口请求地址必须与 ./scripts/server.js 中接口地址保持一致
 */
// import cFetch from "../../utils/cFetch";
import { GET_V1_SONG } from "../../app/constants/ActionTypes";

export default function fetchHome (dispatch) {
  return new Promise((resolve, reject) => {
    const result = {
      "name": "video demo",
      "url":
        "https://vd3.bdstatic.com/mda-jm2rx0iqe5w3c0pa/hd/mda-jm2rx0iqe5w3c0pa.mp4"
    };

    dispatch({ type: GET_V1_SONG, result});
    resolve(result)
  })
  // return new Promise((resolve, reject)=>{
  //   cFetch("/v1/main/list", { method: "POST" })
  //     .then((result) => {
  //       // store the result to redux
  //       dispatch({ type: GET_V1_SONG, result });
  //       // export result to outside
  //       resolve(result||{success: "ok"})
  //     })
  //     .catch(()=>{
  //       reject();
  //     })
  // });
};
