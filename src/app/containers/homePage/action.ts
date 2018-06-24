/**
 * Created by Allan on 06/24/2018
 */
import cFetch from "../../utils/cFetch";
import { GET_V1_SONG } from "./actionTypes";

export const fetchList = () => (dispatch:any) => {
  // 此处接口地址必须与 scripts/server.js mock中地址一致
  return new Promise((resolve, reject)=>{
    cFetch("/v1/main/list", { method: "POST" })
      .then((result: any) => {
        // store the result to redux
        dispatch({ type: GET_V1_SONG, result });
        resolve(result||{success: "ok"})
      })
      .catch(()=>{
        reject();
      })
  });
};
