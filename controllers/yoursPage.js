const FiveWhy = require('../models/FiveWhy');

module.exports = async (req, res) => {

    const list = await FiveWhy.find({ user: req.session.userId }).populate('user');

    res.render('yours', { userName: req.session.userName, list });
}