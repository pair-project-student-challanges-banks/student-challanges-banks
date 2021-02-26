const express = require('express')
const app = express()
const PORT = 3000
const route = require('./routes/index')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(route)


app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
})