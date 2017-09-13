/**
 * Created by JESSICA on 2017/6/11.
 * 待入职reducers
 */
import { handleActions } from 'redux-actions'

//定义reducer
const reducer = handleActions({
    GET_PRE_JOB_LIST: (state, action) => ({...state, preJobList: action.payload}),
    GENERATE_QR_CODE_URL: (state, action) => ({...state, qrCodeUrl: action.payload}),
}, {});

export default reducer;
