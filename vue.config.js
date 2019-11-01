module.exports = {
  devServer: {
    port: 8099,
    proxy: {
      '/': {
        target: 'http://test.idata3d.com:9090', // 请求ip
        ws: false,
        changeOrigin: true
      }
    }
  },
  publicPath: './'
}