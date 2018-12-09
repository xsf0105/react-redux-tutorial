/**
 * Created by Allan on 06/24/2018 
 */
import { GET_V1_SONG } from "./actionTypes"


export function homeData(state={}, action: any) {
    switch (action.type) {
      case GET_V1_SONG:
        return action.result.result;
      default:
        return state;
    }
}