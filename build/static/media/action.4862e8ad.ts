"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchList = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _cFetch = require("../../utils/cFetch");

var _cFetch2 = _interopRequireDefault(_cFetch);

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Allan on 06/24/2018
 */
var fetchList = exports.fetchList = function fetchList() {
    return function (dispatch) {
        // 此处接口地址必须与 scripts/server.js mock中地址一致
        return new _promise2.default(function (resolve, reject) {
            (0, _cFetch2.default)("/v1/main/list", { method: "POST" }).then(function (result) {
                // store the result to redux
                dispatch({ type: _actionTypes.GET_V1_SONG, result: result });
                resolve(result || { success: "ok" });
            }).catch(function () {
                reject();
            });
        });
    };
};