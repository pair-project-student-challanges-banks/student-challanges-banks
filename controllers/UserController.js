const { User, Challange, StudentChallange } = require('../models')

class UserControl{
    static dashboard(req,res) {
        User.findAll()
        .then(student => {
            res.render('dashboard', { student })    
        })
        .catch(err => {res.send(err)})
    }

    static challanges(req,res) {
        Challange.findAll()
        .then(challange => {
            res.render('challange', { challange })
        })
        .catch(err => {res.send(err)})
    }

    static studentChallanges(req,res) {
        let students = User.findAll()
        let challanges = Challange.findAll()
        Promise.all([students, challanges])
        .then(values => {
            res.render('studentChallange', { student: values[0], challange: values[1] })
        })
        .catch(err => {res.send(err)})
    }
}

module.exports = UserControl