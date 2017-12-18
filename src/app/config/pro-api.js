/**
 * 线上环境的mock数据
 * 当前使用在线mock数据：http://www.mockhttp.cn
 */
const host = "http://www.mockhttp.cn/mock/api/";

const API = {
  login: host + "login",
  homePage: {
    list: host + ""
  },
  subPage: {
    list: host + ""
  }
};

export default API;
