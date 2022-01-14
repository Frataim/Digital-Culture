function checkUser(req, res, next) {
  console.log('>>>>>>middleware', req.session.user);
  if (req.session.user) {
    res.locals.user = req.session.user;
  }

  next();
}

module.exports = checkUser;
