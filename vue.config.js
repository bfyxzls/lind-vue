module.exports = {
  devServer: {
      host: '0.0.0.0',
      port: 8888,
      proxy: {
          '/zhfw': {
              target: 'http://127.0.0.1:8080',
              ws: false
          },
         '/foo': {
              target: '<other_url>'
          },
          '/ws':
          {
              target: 'http://127.0.0.1:7072',
              ws: false
          }

      }
  },
chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  },
  // 打包时不生成.map文件 避免看到源码`
  productionSourceMap: false
}
