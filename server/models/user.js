const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Elige un Alias']
    },
    firstname: {
        type: String,
        required: [true, 'Incluye tu nombre']
    },
    lastname: {
        type: String,
        required: [true, 'Incluye tu apellido']
    },
    email: {
        type: String, 
        required: [true, 'Incluye un email válido']
    },
    password: {
        type: String,
        required: [true, 'Incluye una contraseña']
    },
    created: {
        type: Date,
        default: Date.now
    },
    posts: {
        type: Number,
        default: 0
    },
    profileImageUrl: {
        type: String
    } 
});

// Handle password
userSchema.methods = {

    // Check password
    checkPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
    },

    // Hash password
    hashPassword: function(password) {
        return bcrypt.hashSync(password, 10);
    }
};

userSchema.pre('save', function(next) {
    if(!this.password) {
        next();
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
});

module.exports = model('User', userSchema);