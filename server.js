if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const GraphQLHTTP = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')



const Schema = require('./graphql/schema')
const Resolvers = require('./graphql/resolvers')
const isAuth = require('./middleware/isAuth')
const app = express()


mongoose
    .connect(`mongodb+srv://abhi:${process.env.MONGO_PASS}@vue-ll7ec.mongodb.net/sf-clone?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to Mongo"))
    .catch(err => console.log(err));


app.use(isAuth)
app.use(cors())
app.use(express.json())

app.use('/graphql', GraphQLHTTP({
    schema: Schema,
    rootValue: Resolvers,
    graphiql: true

}))

app.use(express.static('public'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}\n Open on http://localhost:${PORT}`)
})