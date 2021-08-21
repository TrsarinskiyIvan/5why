module.exports = (req, res) => {
    res.render('analitics', { userName: req.session.userName });
}