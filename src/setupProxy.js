const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: process.env.REACT_APP_BASE_URL, // API 서버 주소
      changeOrigin: true,
    }),
  );
};