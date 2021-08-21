module.exports = (req, res) => {
    res.render('login', { userName: req.session.userName });
}