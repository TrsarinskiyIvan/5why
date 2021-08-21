const FiveWhy = require('../models/FiveWhy');

module.exports = async (req, res) => {

    const list = await FiveWhy.find({}).sort({ date: -1 }).populate('user');

    res.render('home', { list, userName: req.session.userName });

}