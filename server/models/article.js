const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please choose a title for your article']
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        ref: 'User',
        required: true
    },
    content: {
        type: String, 
        required: [true, 'Please type some content for your article']
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: Array
    },
    likes: {
        type: Number,
        default: 0
    }
});

articleSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = this.title.toLowerCase().replace(' ', '-');
    }
    if (this.content) {
        this.description = this.content.slice(0, 50);
    }
    next();
});

module.exports = model('Article', articleSchema);