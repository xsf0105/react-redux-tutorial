/**
 * @author xuyi 2018-09-05
 */
import cFetch from './cFetch';

const createAsyncActionType = type => ({
    pending: `${type}_pending`,
    accept: `${type}_accept`,
    reject: `${type}_reject`,
});

const createAsyncAction = (url, actionType,  method = 'GET', headers = {}) => (params = {}) => dispatch => {
    dispatch({ type: actionType.pending });
    cFetch(url, { method, headers, params })
    .then((result) => {
    // store the result to redux
        dispatch({ type: actionType.accept, payload: result });
        // return Promise.resolve(result);
    })
    .catch(() => {
        dispatch({ type: actionType.reject });
        // return Promise.reject();
    });
}

export { createAsyncActionType, createAsyncAction };
