// app/controller/pageView.js
const path = require('path')
const fs = require('fs')
const Controller = require('egg').Controller;

class pageViewController extends Controller {
    async index() {
        const file = path.join(this.app.config.view.root, this.ctx.url+'.html');
        this.ctx.set('Content-Type', 'text/html');
        this.ctx.body = await fs.readFileSync(file);
        // this.ctx.body = this.app.config
      }
}



module.exports = pageViewController;