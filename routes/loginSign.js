const auth = require('../middlewares/auth')
const route = require('express').Router()
const LoginSign = require('../controllers/loginSignController')

route.get('/userLogin', LoginSign.userLogin)
route.post('/userLogin', LoginSign.postLogin)
route.get('/userRegister', LoginSign.userRegister)
route.post('/userRegister', LoginSign.postUserRegister)
route.get('/userLogout', LoginSign.userLogout)

module.exports = route