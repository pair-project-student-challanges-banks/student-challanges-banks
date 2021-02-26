const { User, Challange, StudentChallange } = require('../models')

class UserControl{
    static dashboard(req,res) {
        User.findAll({where: {role: 'student'}})
        .then(student => {
            res.render('dashboard', { student })    
        })
        .catch(err => {res.send(err)})
    }

    static challanges(req,res) {
        Challange.findAll()
        .then(challange => {
            res.render('challangeStudent', { challange })
        })
        .catch(err => {res.send(err)})
    }

    static studentChallanges(req,res) {
        // let students = User.findAll()
        // let challanges = Challange.findAll()
        // Promise.all([students, challanges])
        // .then(values => {
        //     res.render('studentChallange', { student: values[0], challange: values[1] })
        // })
        // .catch(err => {res.send(err)})
    }


    // login sebagai guru
    static challangesToStudent(req, res) {
        Challange.findAll()
        .then(challange => {
            res.render('challangeTeacher', { challange })
        })
        .catch(err => {res.send(err)})
    }

    static teacherAddChallange(req, res) {
        res.render('teacherAddChallange')
    }

    static teacherPostChallange(req, res) {
        let data = req.body
        Challange.create(data)
        .then(() => {
            res.redirect('/challangesToStudent')
        })
        .catch(err => {res.send(err)})
    }

    static deleteChallange(req, res) {
        let id = +req.params.id
        Challange.destroy({where: {id:id}})
        .then(() => {
            res.redirect('/challangesToStudent')
        })
        .catch(err => {res.send(err)})
    }

    static detailChallange(req, res) {
        let id = +req.params.id
        Challange.findAll({where: {id:id}, include: [{model: User, where: {role: 'student'}}]})
        .then(challange => {
            res.render('detailChallange', { challange: challange[0] })
        })
        .catch(err => {res.send(err)})
    }




    //studentChallanges
    static studentChallange(req, res) {
        User.findAll({where: {role: 'student'}, include: [{model: Challange}]})
        .then(users => {
            res.render('studentChallangeByTeacher', { users })
        })
        .catch(err => {res.send(err)})
    }

    static uploadByTeacher(req, res) {
        let challanges = Challange.findAll()
        let users = User.findAll({where: {role:'student'}})
        Promise.all([users, challanges])
        .then(values => {
            res.render('uploadByTeacher', { users: values[0], challanges: values[1] })
        })
        .catch(err => {res.send(err)})
    }

    static postUploadByTeacher(req, res) {
        let data = req.body 
        StudentChallange.create(data)
        .then(() => {res.redirect('/studentChallanges')})
        .catch(err => {res.send(err)})
    }
}

module.exports = UserControl