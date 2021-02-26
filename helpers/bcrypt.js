let bcrypt = require('bcryptjs');

let hashing = (password) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash
}

let compared = (input, passDB) => {
    return bcrypt.compareSync(input, passDB)
}

module.exports = {
    hashing,
    compared
}