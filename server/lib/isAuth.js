const isAuth = (req, res , next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(400)
        return;
    }
}

module.exports = isAuth;