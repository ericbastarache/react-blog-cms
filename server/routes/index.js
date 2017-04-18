const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/PostsController');
const AuthController = require('../controllers/AuthController');

//Post routes
router.get('/posts', PostsController.get_posts);
router.get('/posts/:id', PostsController.get_post);
router.get('/posts/create', PostsController.create_post);
router.get('/posts/update/:id', PostsController.update_post);

//Authentication routes
router.get('/auth', AuthController.get_user);

module.exports = router;
