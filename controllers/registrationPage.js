module.exports = (req, res) => {
    res.render('registration', { userName: req.session.userName });
}