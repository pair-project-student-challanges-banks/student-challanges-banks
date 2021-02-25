const { User, Challange } = require('../models')

class UserControl{
    static dashboard(req,res) {
        res.render('dashboard')
    }

    static challanges(req,res) {
        res.render('challange')
    }

    static studentChallanges(req,res) {
        res.render('studentChallange')
    }
}

module.exports = UserControl