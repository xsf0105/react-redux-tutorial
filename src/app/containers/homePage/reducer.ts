/**
 * Created by Allan on 06/24/2018 
 */
import { GET_V1_SONG } from "./actionTypes"
import { HomeState } from "./type"

// 初始化所有数据
function setInitState() {
    const data = JSON.parse(JSON.stringify({    
      msg: "test"
    }));
    return data;
}

export function homeData(state: HomeState = setInitState(), action: any) {
    switch (action.type) {
      case GET_V1_SONG:
        return action.result;
      default:
        return state;
    }
}