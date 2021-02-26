const auth = (req,res,next) => {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/loginSign/userLogin')
    }
}

module.exports = auth