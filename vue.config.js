module.exports = {
  devServer: {
    port: 8099,
    proxy: {
      '/': {
        target: 'https://easydoc.xyz/', // 请求ip
        ws: false,
        changeOrigin: true
      }
    }
  },
  publicPath: './'
}