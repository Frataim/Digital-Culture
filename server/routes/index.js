const express = require('express');

const { User } = require('../db/models');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendStatus(200);
});

router.get('/test', async (req, res, next) => {
  try {
    const test = await User.findAll();
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
