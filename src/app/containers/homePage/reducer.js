import { GET_V1_SONG } from "./actionTypes"


export function homeReducer(state={}, action) {
    switch (action.type) {
      case GET_V1_SONG:
        return action.result.result;
      default:
        return state;
    }
}