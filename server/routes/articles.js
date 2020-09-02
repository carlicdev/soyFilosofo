const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articles');

router.get('/', articlesCtrl.get_articles);
router.get('/:slug', articlesCtrl.get_single_article);
router.post('/', articlesCtrl.new_article);
router.delete('/:slug', articlesCtrl.delete_article);
router.put('/:slug', articlesCtrl.update_article);

module.exports = router;