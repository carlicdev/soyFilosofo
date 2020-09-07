const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const threadSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Incluye un titulo']
    },
    slug: {
        type: String,
        required: true
    },
    categoryId: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: Number,
        default: 1
    },
    likes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number, 
        default: 0
    }
});

threadSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = this.title.toLowerCase().replace(/ /g, '-');
    }
    next();
});

module.exports = model('Thread', threadSchema);