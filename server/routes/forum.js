const { Router } = require('express');
const router = Router();

const forumController = require('../controllers/forum');

// Categories
router.post('/new-category', forumController.new_category);
router.get('/categories', forumController.all_categories);
router.get('/categories/:slug', forumController.single_category);

// Threads
router.post('/new-thread', forumController.new_thread);
router.get('/threads', forumController.all_threads);
router.get('/threads/:slug', forumController.single_thread);

// Posts
router.post('/new-post', forumController.new_post);
router.get('/posts', forumController.all_posts);
router.get('/posts/:id', forumController.single_post);

module.exports = router;