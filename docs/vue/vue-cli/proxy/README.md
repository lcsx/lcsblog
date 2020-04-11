# 跨域

### 开发环境的跨域
#### 在vue.config.js中增加proxy
``` js
module.exports = {
  // 选项...
  publicPath: './', //发布路径,用相对路径，不然会报错
  lintOnSave: false, //是否开启eslint校验
  devServer: {
    proxy: { //配置代理，解决跨域请求后台数据的问题
      '/api': {
        target: 'http://127.0.0.1:8081', //后台接口
        ws: true, //是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api':'/'
        }
      }
    }
  }
}
```

### 后端来设置Cors
[#后端设置Cros](../../../python/flaskRestful)

