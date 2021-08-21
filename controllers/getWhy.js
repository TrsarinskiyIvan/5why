const FiveWhy = require('../models/FiveWhy');

module.exports = async (req, res) => {
    const why = await FiveWhy.findById(req.params.id).populate('user');
    res.render('why', { why, userName: req.session.userName });
}