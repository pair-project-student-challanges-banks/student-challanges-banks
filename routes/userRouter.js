const route = require('express').Router()
const UserController = require('../controllers/UserController')

route.get('/', UserController.dashboard)
route.get('/challanges', UserController.challanges)
route.get('/studentChallanges', UserController.studentChallanges)

module.exports = route