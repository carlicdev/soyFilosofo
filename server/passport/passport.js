const passport = require('passport');
const  User = require('../models/user');
const LocalStrategy = require('./localStrategy');

passport.serializeUser((user, done) => {
    console.log('serializing');
    done(null, {_id: user._id});
});

passport.deserializeUser( async (id, done) => {
    console.log('deserializing')
    await User.findOne({_id: id}, (err, user) => {
        err ? console.error(err) : done(null, user);
    });
});

passport.use(LocalStrategy);

module.exports = passport;