let path = require('path')
// config/config.default.js
module.exports = appInfo => ({
  keys:'my-cookie-secret-key',
  static:{
    prefix:'/',
  },
  view: {
    // 如果还有其他模板引擎，需要合并多个目录
    root: path.join(appInfo.baseDir, 'app/view'),
  },
  // 访问 页面不存在的时候，重定向到404页面
  notfound: {
    pageUrl: '/404.html',
  }
});
