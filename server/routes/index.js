const express = require('express');
const router = express.Router();

const PostsController = require('../../server/controllers/PostsController');

module.exports = (router) => {
  router.get('/posts', PostsController.get_posts);
}
