const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const Question = require('../models/question')
const Answer = require('../models/answer')

const dateToString = (inp) => {
    return new Date(inp).toDateString()
}

const getUser = async (userID) => {
    try {
        const user = await User.findById(userID)
        return { ...user._doc, password: null }
    }
    catch (err) {
        throw err
    }
}

const getQuestion = async (questionID) => {
    try {
        const question = await Question.findById(questionID)
        return {
            ...question._doc, creator: getUser.bind(this, question._doc.creator), createdAt: dateToString.bind(this, question._doc.createdAt),
            updatedAt: dateToString.bind(this, question._doc.updatedAt)
        }

    }
    catch (err) {
        throw err
    }
}

const getQuestions = async (userID) => {
    try {
        const questions = await Question.find({ creator: userID })
        return questions.map(question => (
            {
                ...question._doc, creator: question._doc.creator
            }
        ))
    }
    catch (err) {
        throw err
    }
}

const getAnswersByQuestion = async (questionID) => {
    try {
        const answers = await Answer.find({ question: questionID })
        return answers.map(answer => (
            {
                ...answer._doc, creator: getUser.bind(this, answer._doc.creator), createdAt: dateToString.bind(this, answer.createdAt),
                updatedAt: dateToString.bind(this, answer.updatedAt)
            }
        ))
    }
    catch (err) {
        throw err
    }
}


const formatResult = (res) => {
    return res.map(r => {
        return { ...r._doc }

    })
}


module.exports = {
    //Queries
    users: async () => {
        try {
            const users = await User.find()

            return formatResult(users).map(r => {
                return { ...r, password: null, questions: getQuestions.bind(this, r._id) }

            })
        } catch (error) {
            throw error
        }
    },
    questions: async () => {
        try {
            const questions = await Question.find()
            const fr = formatResult(questions)
            return fr.map(f => (
                {
                    ...f, creator: getUser.bind(this, f.creator), answers: getAnswersByQuestion.bind(this, f._id), createdAt: dateToString.bind(this, f.createdAt),
                    updatedAt: dateToString.bind(this, f.updatedAt)
                }
            ))
        } catch (error) {
            throw error
        }
    },
    answers: async () => {
        try {
            const answers = await Answer.find()
            const fr = formatResult(answers)
            return fr.map(f => (
                {
                    ...f, creator: getUser.bind(this, f.creator), question: getQuestion.bind(this, f.question), createdAt: dateToString.bind(this, f.createdAt),
                    updatedAt: dateToString.bind(this, f.updatedAt)
                }
            ))
        } catch (error) {
            throw error
        }
    }
    ,
    login: async (args) => {

        try {
            const user = await User.findOne({ email: args.UserData.email })
            if (!user) {
                throw new Error("USer not exist")
            }
            const isEqual = await bcrypt.compare(args.UserData.password, user.password)
            if (!isEqual) {
                throw new Error('Invalid Credentials')
            }
            const token = jwt.sign({ userID: user.id, email: user.email }, process.env.AUTH_KEY, {
                expiresIn: '1h'
            })

            return { userID: user.id, token: token, tokenExpiration: 1 }
        } catch (error) {
            throw error;
        }


    },

    //mutations
    signUp: async (args) => {
        try {
            const existingUser = await User.findOne({ email: args.UserData.email })
            if (existingUser) {
                throw new Error('User already exists.Try loggin in.')
            }
            const hashedPassword = await bcrypt.hash(args.UserData.password, 12)

            const newUser = new User({
                email: args.UserData.email,
                password: hashedPassword
            })

            const createdUser = await newUser.save()
            return createdUser._doc.email
        } catch (error) {
            throw error
        }
    },

    askQuestion: async (args, req) => {

        try {
            if (!req.isAuth) {
                throw new Error("Not Authorized")
            }
            const newQuestion = new Question({
                title: args.QuestionData.title,
                text: args.QuestionData.text,
                creator: req.userInfo.userID,
            })

            const added = await newQuestion.save()
            console.log(added)
            return "Added"
        } catch (error) {
            throw error
        }
    },

    answerQuestion: async (args, req) => {

        try {
            if (!req.isAuth) {
                throw new Error("Not Authorized")
            }
            const newAnswer = new Answer({
                text: args.AnswerData.text,
                creator: req.userInfo.userID,
                question: args.AnswerData.questionID
            })

            const added = await newAnswer.save()
            console.log(added)
            return "Added"
        } catch (error) {
            throw error
        }
    }
}
