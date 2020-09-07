const { Schema, model, isValidObjectId } = require('mongoose');
const { ObjectId } = Schema.Types;

const categorySchema = new Schema({
    title: {
        type: String,
        required: [true, 'Incluye un titulo para la categoria']
    },
    created: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    }
});

module.exports = model('Category', categorySchema);