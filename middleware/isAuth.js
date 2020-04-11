const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization')
    if (!authHeader) {
        req.isAuth = false
        return next()
    }
    const token = authHeader.split(' ')[1]
    if (!token || token === '') {
        req.isAuth = false
        return next()
    }
    let dec;
    try {
        dec = jwt.verify(token, process.env.AUTH_KEY)

    } catch (error) {
        console.log(err)
        req.isAuth = false
        return next()
    }
    if (!dec) {
        req.isAuth = false
        return next()

    }
    req.isAuth = true
    req.userInfo = {
        userID: dec.userID, email: dec.email
    }
    return next()
}