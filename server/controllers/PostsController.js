const Router = require('koa-router');
const router = new Router();

module.exports.get_posts = (ctx, next) => {
  ctx.body = "This is POSTS";
}
