module.exports = {
  devServer: {
    port: 7070,
    open: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8989",
        changeOrigin: true,
        pathRewrite: {
          "^/api/": "/"
        }
      }
    }
  }
};
