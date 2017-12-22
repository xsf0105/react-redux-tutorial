/**
 * 线上环境
 */
const server_host = "http://localhost:3001/mock/api/"; // script/server.js 中配置，代理到http://www.mockhttp.cn

const API = {
  ENTRY: {
    MESSAGE: server_host + "getSomeMessage"
  },
  HOME: {
    // MESSAGE:
  }
};

export default API;
