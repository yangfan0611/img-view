module.exports = {
  devServer: {
    port: 8099,
    proxy: {
      '/': {
        target: '', // 请求ip
        ws: false,
        changeOrigin: true
      }
    }
  },
  publicPath: './'
}