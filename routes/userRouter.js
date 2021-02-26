const route = require('express').Router()
const UserController = require('../controllers/UserController')
const auth = require('../middlewares/auth')

route.get('/', auth, UserController.dashboard)
route.get('/challanges', auth, UserController.challanges)
// route.get('/studentChallanges', auth, UserController.studentChallanges)

route.get('/challangesToStudent', auth, UserController.challangesToStudent)
route.get('/challangesToStudent/add', auth, UserController.teacherAddChallange)
route.post('/challangesToStudent/add', auth, UserController.teacherPostChallange)

route.get('/studentChallanges', auth, UserController.studentChallange)
route.get('/studentChallanges/upload', auth, UserController.uploadByTeacher)
route.post('/studentChallanges/upload', auth, UserController.postUploadByTeacher)

route.get('/challangesToStudent/detail/:id', auth, UserController.detailChallange) //detail
route.get('/challangesToStudent/delete/:id', auth, UserController.deleteChallange) //delet

module.exports = route