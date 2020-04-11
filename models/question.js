const mongoose = require('mongoose')
const Schema = mongoose.Schema


const questionSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Question', questionSchema)