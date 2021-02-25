const auth = require('../middlewares/auth')
const route = require('express').Router()
const LoginSign = require('../controllers/loginSignController')

route.get('/userLogin', LoginSign.userLogin)
route.post('/userLogin', LoginSign.postLogin)
route.get('/userRegister', LoginSign.userRegister)

module.exports = route