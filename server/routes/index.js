const Router = require('koa-router');
const router = new Router();
const PostsController = require('../../server/controllers/PostsController');


router.get('/posts', PostsController.get_posts);

module.exports = router;
