/**
 * 本地开发环境的mock数据
 * 当前使用了在线mock数据：http://www.mockhttp.cn 
 */
const server_host = "http://localhost:3001/mock/api/"; // script/server.js 中配置，代理到http://www.mockhttp.cn

const API = {
  ENTRY: {
    MESSAGE: server_host + "songInfo"
  },
  HOME: {
    // MESSAGE:
  }
};

export default API;
