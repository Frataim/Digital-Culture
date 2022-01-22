const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { User, Rate, Role } = require('../db/models');

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

router.route('/edit/:id').patch(async (req, res) => {
  console.log('--->>>>id', req.params.id);
  const {
    name, email, resume, role,
  } = req.body;
  await User.update({
    name, email, resume, role,
  }, {
    where: { id: req.session.user.id },
  });
  const newUser = await User.findOne({ where: { id: req.params.id } });
  console.log(newUser);
  res.json(newUser);
});

router.route('/signup').post(async (req, res) => {
  console.log('------------------->', req.body);
  const {
    name, email, password, resume, role, avatar,
  } = req.body.formData;
  req.session.user = {};
  if (validateEmail(email) && password) {
    const hashPass = await bcrypt.hash(password, +process.env.SALT);
    try {
      const newUser = await User.create({
        name,
        email,
        password: hashPass,
        avatar: `http://localhost:3001/${avatar}`,
        resume,
        role: +role,
      });
      console.log('user created', newUser);
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        resume: newUser.resume,
        email: newUser.email,
        role: newUser.role,
        avatar: newUser.avatar,
      };
      console.log(req.session.user);
      return res.json({
        id: newUser.id,
        name: newUser.name,
        resume: newUser.resume,
        email: newUser.email,
        role: newUser.role,
        avatar: newUser.avatar,
      });
    } catch (error) {
      console.log('dfrgergregregerg', error);
      return res.sendStatus(405);
    }
  } else {
    return res.sendStatus(403);
  }
});
router.route('/signin').post(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body.signinForm;
  if (email && password) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      if (
        currentUser
        && (await bcrypt.compare(password, currentUser.password))
      ) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
          resume: currentUser.resume,
          email: currentUser.email,
          role: currentUser.role,
          avatar: currentUser.avatar,
        };
        return res.json({
          id: currentUser.id,
          name: currentUser.name,
          resume: currentUser.resume,
          email: currentUser.email,
          role: currentUser.role,
          avatar: currentUser.avatar,
        });
      }
      return res.sendStatus(401);
    } catch (err) {
      return res.sendStatus(401);
    }
  } else {
    return res.sendStatus(401);
  }
});

router.route('/check').get((req, res) => {
  if (req.session?.user) {
    return res.json({
      id: req.session.user.id,
      name: req.session.user.name,
      email: req.session.user.email,
      resume: req.session.user.resume,
      role: req.session.user.role,
      avatar: req.session.user.avatar,
    });
  }
  res.sendStatus(401);
});

router.route('/signout').get((req, res) => {
  console.log('signout', req.session.user);
  req.session.destroy();
  res.clearCookie('smth');
});

router.route('/').get(async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Rate,
        required: false,
      },
      {
        model: Role,
        required: false,
      },
    ],
  });
  res.json(users);
});

module.exports = router;
