"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.homeData = homeData;

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 初始化所有数据
function setInitState() {
    var data = JSON.parse((0, _stringify2.default)({
        msg: "test"
    }));
    return data;
} /**
   * Created by Allan on 06/24/2018
   */
function homeData(state, action) {
    if (state === void 0) {
        state = setInitState();
    }
    switch (action.type) {
        case _actionTypes.GET_V1_SONG:
            return action.result;
        default:
            return state;
    }
}