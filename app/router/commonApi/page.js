// app/router/news.js
module.exports = app => {
    app.router.get('/index', app.controller.pageView.index);
  };
