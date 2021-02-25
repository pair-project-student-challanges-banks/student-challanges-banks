class LoginSign{
    static userLogin(req,res) {
        res.render('formlogin')
    }

    static postLogin(req,res) {
        // console.log(req.body);
    }

    static userRegister(req,res) {
        //masuk form register
        res.send('--- halaman user register ---')
    }

    static postUserRegister(req,res) {
        //submit ke database
        //balik lagi ke halaman login/register
        res.send('--- data user dipost ke db nih ---')
    }
}

module.exports = LoginSign