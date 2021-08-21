const FiveWhy = require('../models/FiveWhy');

module.exports = async (req, res) => {

    let why = req.body;
    why.user = req.session.userId;

    await FiveWhy.create(why);

    res.redirect('/');
}