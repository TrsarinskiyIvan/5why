const bcrypt = require('bcrypt');

const User = require('../models/User');

module.exports = async (req, res) => {

    const { name, password } = req.body;

    const user = await User.findOne({ name });

    if (user && user.isActive) {
        if (bcrypt.compareSync(password, user.password)) {
            req.session.userId = user._id;
            req.session.userName = user.name;
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    } else {
        res.redirect('/registration');
    }
}