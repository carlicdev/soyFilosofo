const User = require('../models/user');

// Error handler
const errorHandler = err => {
    let errors = 
    {username: '', firstname: '', lastname:'', email: '', password: ''};

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).map(({properties}) => {
            errors[properties.path] = properties.message
        });
    };

    return errors;
};

// register
exports._signup = async (req, res) => {
    const email = await User.findOne({email: req.body.email});
    const user = await User.findOne({username: req.body.username});
    if (user || email) {
        let error = {username: '', email: ''}
        if (user) error.username = 'El alias ya existe';
        if (email) error.email = 'El email ya esta registrado';
        res.status(200).json({error})
    } else if (req.body.password !== req.body.confirmPassword) {
        res.status(200).json({error: {password: 'Las contraseñas no coinciden'}})
    } else {
        try {
            await new User(req.body).save();
            res.status(201).json({msg: 'registered'});
        } catch (err) {
            const error = errorHandler(err);
            res.status(200).json({error})
        }
    }
};

// login
exports._login = async (req, res) => {
    res.status(200).json({
        username: req.user.username
    });
};

// logout
exports._logout = (req, res) => {
    req.session.destroy();
    req.logout();
};

// user
exports.get_user = (req, res) => {
    req.user ? 
        res.json({user: req.user.username})
        :
        res.json({user: null})
};

// update user
exports.update_user = (req, res) => {
    res.send('user: update')
};