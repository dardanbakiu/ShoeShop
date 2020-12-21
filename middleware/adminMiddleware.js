const adminMiddleware = (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('/')
    }
    else {
        next()
    }
}

module.exports = adminMiddleware