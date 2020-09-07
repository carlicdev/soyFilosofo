const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const postSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Escribe un mensaje']
    },
    created: {
        type: Date,
        default: Date.now
    },
    threadId: {
        type: ObjectId,
        ref: 'Thread'
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    likes: {
        type: Number,
        default: 0
    }
});

module.exports = model('Post', postSchema);