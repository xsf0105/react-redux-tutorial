/**
 * @author xuyi 2018-09-05
 */
import cFetch from './cFetch';

const createAsyncActionType = type => ({
    pending: `${type}_pending`,
    accept: `${type}_accept`,
    reject: `${type}_reject`,
});

const createAsyncAction = (url, actionType,  method = 'GET', headers = {}) => (params = {}, reject = (err) => null) => dispatch => {
    dispatch({ type: actionType.pending });
    return cFetch(url, { method, headers, params }).then((result) => {
        dispatch({ type: actionType.accept, payload: result });
        return Promise.resolve(result);
    }).catch((errs) => {
        dispatch({ type: actionType.reject });
        reject(errs);
    });
}

export { createAsyncActionType, createAsyncAction };
