import { GET_V1_SONG } from "../constants/ActionTypes";

const initialState = {
  text: '',
}

export default function HomeState(state = initialState, action) {
    switch (action.type) {
      case GET_V1_SONG:
        return action;
        default:
        return state;
    }
}