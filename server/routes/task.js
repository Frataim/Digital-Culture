const express = require('express');

const { Task } = require('../db/models');

const router = express.Router();

router.route('/').get(async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  if (req.session?.user) {
    const {
      title, category, deadline, user_owner, user_worker,
    } = req.body.data;
    const newTask = await Task.create({
      title,
      category,
      deadline,
      isDone: false,
      user_owner: req.session.user,
      user_worker: null,
    });
    return res.json(newTask);
  }
  res.sendStatus(401);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ where: { id } });
  res.json(task);
});

module.exports = router;
