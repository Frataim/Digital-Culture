const express = require('express');

const {
  User, Role, Task, Status, Feedback, Tag, Rate,
} = require('../db/models');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendStatus(200);
});

router.get('/testRoles', async (req, res, next) => {
  try {
    const test = await User.findAll({
      include: [{
        model: Role,
        where: { role: 'owner' },
      }],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testStatuses', async (req, res, next) => {
  try {
    const test = await Task.findAll({
      include: [{
        model: Status,
        where: { status: 'open' },
      }],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testTaskWorker', async (req, res, next) => {
  try {
    const test = await Task.findAll({
      include: [{
        model: User,
        where: { id: 1 },
      }],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testTaskOwner', async (req, res, next) => {
  try {
    const test = await User.findAll({
      include: [{
        model: Task,
        where: { owner: 1 },
      }],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testComment', async (req, res, next) => {
  try {
    const test = await Feedback.findAll({
      include: [
        {
          model: User,
          where: { id: 1 },
        },
        {
          model: Task,
          where: { id: 1 },
        },
      ],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testTags', async (req, res, next) => {
  try {
    const test = await Tag.findAll({
      include: [
        {
          model: Task,
        },
      ],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testRate', async (req, res, next) => {
  try {
    const test = await Rate.findAll({
      include: [
        {
          model: User,
          id: 2,
        },
      ],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
