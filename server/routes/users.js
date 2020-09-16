const { Router } = require('express');
const router = Router();
const passport = require('../passport/passport');

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v1: uuid } = require('uuid');

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function(req, file, cb) {
            cb(null, `${req.user._id}/${uuid()}.jpeg`)
        }
    })
});


const userController = require('../controllers/users');
const isAuth = require('../lib/isAuth');

router.post('/signup', userController._signup);
router.post('/login', passport.authenticate('local'), userController._login);
router.get('/logout', userController._logout);
router.get('/', userController.get_user);
router.put('/update/:id', userController.update_user);
router.get('/user-data/:id', isAuth, userController.get_user_data);
router.post('/profile-image', isAuth, upload.single('file'), userController.new_profile_image);


module.exports = router;