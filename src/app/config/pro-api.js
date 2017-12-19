/**
 * 线上环境
 */
const server_host = "http://192.68.2.2:3001/mock/api/";

const API = {
  LOGIN: server_host + "",
  HOME: {
    USERINFO: server_host + "userInfo"
  }
};

export default API;
