/**
 * 线上环境和本地开发环境使用不同接口地址
 */
if (process.env.NODE_ENV === "production") {
  module.exports = require("./pro-api.js");
} else {
  module.exports = require("./dip-api.js");
}
