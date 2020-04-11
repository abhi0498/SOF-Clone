const mongoose = require('mongoose')
const Schema = mongoose.Schema


const answerSchema = new Schema({
    text: { type: String, required: true },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }
}, { timestamps: true })

module.exports = mongoose.model('Answer', answerSchema)