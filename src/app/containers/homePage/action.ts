/**
 * 有关于 mock 数据！！！
 * 接口请求地址必须与 ./scripts/server.js 中接口地址保持一致
 */
import cFetch from "../../utils/cFetch";
import { GET_V1_SONG } from "./actionTypes";

export const fetchList = () => (dispatch:any) => {
  return new Promise((resolve, reject)=>{
    cFetch("/v1/main/list", { method: "POST" })
      .then((result: any) => {
        // store the result to redux
        dispatch({ type: GET_V1_SONG, result });
        // export result to outside
        resolve(result||{success: "ok"})
      })
      .catch(()=>{
        reject();
      })
  });
};
