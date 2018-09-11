/**
 * @author xuyi 2018-09-05
 */
import { handleActions } from "redux-actions";
import cFetch from "./cFetch";

// 正在做异步请求还未响应的action
const isRequestAction = {};

// const asyncHandleActions = (...actions, initState) => {
//     if (actions && Array.isArray(actions)) {
//         const len = actions.length;
//         const reducers = [];
//         for (let i = 0; i < len ; i ++) {
//             if (typeof ) {
//                 //
//             }
//         }
//     }
//     return new Error('new error');
// }

/**
 * 根据method方法获取请求参数
 * @param {*} method 请求的方法，分别为"GET","POST","PUT","DELETE","HEADER","OPTION"
 * @param {*} param 请求的参数为Object
 */
const getRequestParams = (method, param) => {
  switch (method) {
    case "POST":
    case "DELETE":
    case "PUT":
      return { body: param };
    case "HEADER":
    case "OPTION":
    case "GET":
    default:
      return { params: param };
  }
};

/**
 * 创建是否可以重复请求的异步请求
 * @param {*} url 请求url
 * @param {*} dispatch store中的dispatch
 * @param {*} actionType 异步请求的action type
 * @param {*} params 异步请求的参数
 * @param {*} repeat 是否可以重复请求
 * @param {*} rj 请求异常的回调
 */
const createAsyncRequest = (
  url,
  dispatch,
  actionType,
  params = null,
  repeat = true,
  rj = err => null
) => {
  const { type, pending, accept, reject } = actionType;
  const flag = repeat || (!repeat && !isRequestAction[type]);
  flag && dispatch({ type: pending });
  !repeat ? (isRequestAction[type] = true) : null;
  if (flag) {
    return cFetch(url, params)
      .then(result => {
        dispatch({ type: accept, payload: result });
        !repeat ? (isRequestAction[type] = false) : null;
        return Promise.resolve(result);
      })
      .catch(errs => {
        dispatch({ type: reject });
        !repeat ? (isRequestAction[type] = false) : null;
        rj && rj(errs);
        return Promise.reject(errs);
      });
  }
};

/**
 * 创建异步请求的action type
 * @param {*} actionType 异步请求的action type
 */
const createAsyncActionType = actionType => {
  return {
    type: actionType,
    pending: `${actionType}_pending`,
    accept: `${actionType}_accept`,
    reject: `${actionType}_reject`
  };
};

/**
 * 创建异步请求action的公共函数
 * @param {*} url 异步请求的url
 * @param {*} actionType 异步请求的action type，需通过createAsyncActionType函数创建
 * @param {*} method 异步请求的方法，分别为"GET","POST","PUT","DELETE","HEADER","OPTION"，默认值为"GET"
 * @param {*} repeat 是否可以重复请求，true为可以重复请求，false为不能重复请求
 * @param {*} headers 请求时发送的头部信息，默认值为{}
 */
const createAsyncAction = (
  url,
  actionType,
  method = "GET",
  repeat = true,
  headers = {}
) => (params = null, rj = err => null) => dispatch => {
  const { type, pending, accept, reject } = actionType;
  const param = params ? getRequestParams(method, params) : null;
  return createAsyncRequest(
    url,
    dispatch,
    actionType,
    { method, headers, ...param },
    repeat,
    rj
  );
};

/**
 * 创建相关异步action的方法
 * @param {*} actions 异步action数组
 * @param {*} relatedActionType 异步action开始请求、全部成功或者某个请求失败dispatch的action type
 */
const createRelatedAsyncAction = (actions, relatedActionType) => (
  params = [],
  rjs = []
) => dispatch => {
  let actionList = [];
  const promiseList = [];
  if (actions && Array.isArray(actions)) {
    actionList = actions;
  } else if (typeof actions === "object") {
    actionList = [actions];
  } else {
    return Promise.reject();
  }
  dispatch({ type: relatedActionType.pending });
  const len = actionList.length;
  for (let i = 0; i < len; i++) {
    const { url, actionType, method = "GET", headers = {} } = actionList[i];
    const { type, pending, accept, reject } = actionType;
    const param =
      params && params[i] ? getRequestParams(method, params[i]) : null;
    dispatch({ type: pending });
    const promise = createAsyncRequest(
      url,
      dispatch,
      actionType,
      {
        method,
        headers,
        ...param
      },
      true,
      rjs ? rjs[i] : null
    );
    promiseList.push(promise);
  }
  return Promise.all(promiseList)
    .then(() => {
      dispatch({ type: relatedActionType.accept });
      return Promise.resolve();
    })
    .catch(e => {
      dispatch({ type: relatedActionType.reject });
      console.error(e);
      return Promise.reject();
    });
};

export { createAsyncActionType, createAsyncAction, createRelatedAsyncAction };
