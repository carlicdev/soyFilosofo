const { Router } = require('express');
const router = Router();

const userController = require('../controllers/users');

router.post('/signup', userController._signup);
router.post('/login', userController._login);
router.get('/logout', userController._logout);
router.get('/:id', userController.get_user);
router.put('/:id', userController.update_user);


module.exports = router;