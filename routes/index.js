const route = require('express').Router()
const UserRoute = require('./userRouter')
const LoginSign = require('./loginSign')

route.use('/', UserRoute)
route.use('/loginSign', LoginSign)

module.exports = route