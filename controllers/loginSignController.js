const { User } = require('../models')
const { compared } = require('../helpers/bcrypt')

class LoginSign{
    static userLogin(req,res) {
        res.render('formlogin')
    }

    static postLogin(req,res) {
        let data = req.body
        console.log(data);
        User.findOne({where:{username: data.username}})
        .then(user => {
            let correctPass = compared(data.password, user.password)

            if (user && correctPass) {
                req.session.userId = user.id
                res.redirect(`/?role=${user.role}`)
            } else {
                res.render('failedlog')
            }
        })
        .catch(err => {res.send(err)})
    }

    static userRegister(req,res) {
        //masuk form register
        res.render('formregister')
    }

    static postUserRegister(req,res) {
        let data = req.body
        User.create(data)
        .then(() => {res.redirect('/loginSign/userLogin')})
        .catch(err => {res.send(err)})
    }

    static userLogout(req, res) {
        req.session.destroy(err => {
            if (err) res.render('failedlog')
            else res.redirect('/')
        })
    }
}

module.exports = LoginSign