module.exports = (req, res) => {
    res.render('add', { userName: req.session.userName });
}