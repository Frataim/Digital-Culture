const express = require('express');

const {
  Task, User, Comment, Tag, Status, TaskTag,
} = require('../db/models');

const router = express.Router();

router.route('/').get(async (req, res) => {
  const tasks = await Task.findAll({
    include: [{
      model: User,
      required: false,
    },
    {
      model: Comment,
      required: false,
    },
    {
      model: Tag,
      required: false,
    },
    {
      model: Status,
      required: false,
    },
    ],
  });
  res.json(tasks);
});

router.route('/').patch(async (req, res) => {
  const { task_id, user_id } = req.body;
  console.log('PATCH ------------> id', task_id, user_id);
  const currentTask = await Task.findByPk(task_id);
  const status = currentTask.status + 1;
  if (status === 2) {
    const updatedTask = await Task.update(
      {
        status,
        worker: user_id,
      },
      { where: { id: task_id } },
    );
    console.log(updatedTask);
  }
  if (status === 3) {
    const updatedTask = await Task.update(
      {
        status,
        isDone: true,
      },
      { where: { id: task_id } },
    );
    console.log(updatedTask);
  }
  res.sendStatus(200);
});

router.route('/').post(async (req, res) => {
  const {
    title, description, deadline,
  } = req.body.task;
  let { tags } = req.body.task;
  tags = tags.split(',').map((el) => el.trim());
  console.log('task ------------ >', title, description, deadline, tags);
  const newTask = await Task.create({
    title,
    category: 1,
    description,
    deadline,
    isDone: false,
    status: 1,
    owner: req.session.user.id,
    worker: null,
  });
  for (let i = 0; i < tags.length; i++) {
    const tagToPush = await Tag.create({ tag: tags[i] });
    await TaskTag.create({ tag_id: tagToPush.id, task_id: newTask.id });
  }
  console.log(newTask);
  res.json(newTask);

  // if (req.session?.user) {
  //   const {
  //     title, category, deadline,
  //   } = req.body.data;
  //   const newTask = await Task.create({
  //     title,
  //     category,
  //     deadline,
  //     isDone: false,
  //     user_owner: req.session.user,
  //     user_worker: null,
  //   });
  //   return res.json(newTask);
  // }
  // res.sendStatus(401);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ where: { id } });
  res.json(task);
});

module.exports = router;
