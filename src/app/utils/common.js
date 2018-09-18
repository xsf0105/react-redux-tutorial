/**
 * Created by Allan on 2017/09/13.
 * @class 公共的方法
 */

/**
 * 如果url中有多个相同的key，不会合并为数组
 * 如果有url编码，不会decode
 * @method getUrlParam
 * @param {String} key
 * @return {String} value
 */
export function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
