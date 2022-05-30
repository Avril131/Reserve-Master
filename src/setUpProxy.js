const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
      createProxyMiddleware("/api", {
        target: "http://www.qxdw.org.cn:5772",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      })
    );
};
