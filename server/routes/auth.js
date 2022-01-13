const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendStatus(200);
});

router.get('/users', async (req, res, next) => {
  console.log(User);
  const users = User.findAll();
  res.send(users);
});

module.exports = router;
