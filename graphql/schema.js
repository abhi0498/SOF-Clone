const { buildSchema } = require('graphql')


module.exports = buildSchema(`
type User{
    _id:ID!
    email:String!
    password:String!
    questions: [Question!]
}
type AuthData{
    userID:ID!
    token:String!
    tokenExpiration:Int!
}
type Question{
    _id:ID!
    title:String!
    text:String!
    creator:User!
    answers:[Answer!]
    createdAt:String!
    updatedAt:String!
}
type Answer{
    _id:ID!
    text:String!
    creator:User!
    question:Question!
    createdAt:String!
    updatedAt:String!
}


input UserData{
    email:String!
    password:String!
}
input QuestionData{
    title:String!
    text:String!
}
input AnswerData{
    text:String!
    questionID:ID!
}


type RootQuery{
    users:[User!]
    questions:[Question!]
    answers: [Answer]
    login(UserData:UserData): AuthData!
}

type RootMutation{
    signUp(UserData:UserData!): String!
    askQuestion(QuestionData:QuestionData!): String!
    answerQuestion(AnswerData:AnswerData): String!
}


schema{
    query: RootQuery
    mutation: RootMutation
  }
`)