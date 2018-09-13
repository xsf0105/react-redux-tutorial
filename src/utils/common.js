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
/**
 *  合并两个对象
 * 如果dest对应属性value为undefined，则不会更新
 * @method merge
 * @param {object} src
 * @param {object} dest
 * @return {object} merged object
 */
export function merge(src, dest) {
  const ret = {
    ...src
  };
  for (const key in dest) {
    if (dest[key] !== undefined) {
      ret[key] = dest[key];
    }
  }
  return ret;
}

export function getFirstX(str, num = 6) {
  return (str || "").length > num
    ? (str || "").slice(0, num - 1) + "..."
    : str || "";
}

export const getFieldValue = (data = {}) => {
  const { value = "" } = data;
  return typeof value === "object" ? value.key : value;
};

export const getFieldName = (data = {}) => {
  return data.fieldName || " ";
};

export const getDept = value => {
  const dept = getFieldValue(value);
  if (dept) {
    if (dept.length > 8) {
      return dept.substr(0, 7) + "...";
    } else {
      return dept;
    }
  } else {
    return "无";
  }
};

/*
  * 禁止弹窗后底层滚动
  * forbidScroll(true) 禁止；forbidScroll(false) 恢复
  * */
export const forbidScroll = isForbid => {
  if (isForbid) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
};

export const cache = {};
