/**
 * 本地开发环境的mock数据
 */
const server_host = "http://localhost:3001"; // script/server.js 中配置，代理到http://www.mockhttp.cn

const API = {
  ENTRY: {
    MESSAGE: server_host + "/calculator/v1/table/list"
  },
  HOME: {
    // MESSAGE:
  }
};

export default API;
