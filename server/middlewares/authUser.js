function authUser(req, res, next) {
  if (req.session.user) {
    return res.redirect('/signin');
  }
  next();
}

module.exports = authUser;
