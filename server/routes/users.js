const { Router } = require('express');
const router = Router();
const passport = require('../passport/passport');

const userController = require('../controllers/users');

router.post('/signup', userController._signup);
router.post('/login', passport.authenticate('local'), userController._login);
router.get('/logout', userController._logout);
router.get('/', userController.get_user);
router.put('/:id', userController.update_user);


module.exports = router;