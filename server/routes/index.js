const express = require('express');

const {
  User, Role, Task, Status, Feedback, Tag, Rate, Comment, Chat,
} = require('../db/models');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendStatus(200);
});

router.post('/upload', async (req, res, next) => {
  console.log(req.files);
  if (!req.files) {
    return res.status(500).send({ msg: 'file is not found' });
  }
  // accessing the file
  const myFile = req.files.file;
  console.log('FILE---->', myFile);
  // mv() method places the file inside public directory

  myFile.mv(`${__dirname}/../public/${myFile.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: 'Error occured' });
    }

    // returing the response with file path and name

    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
});

// FEEDBACK

router.post('/feedback', async (req, res, next) => {
  const {
    feedback, task_id, currentUser, stars,
  } = req.body;
  const user_id = +currentUser;
  const star = +stars;
  const newFeedback = await Feedback.create({ feedback, task_id, user_id: req.session.user.id });
  const newRating = await Rate.create({ rate: star, user_id });
  console.log('RATING', newRating);

  res.json({
    id: newFeedback.id,
    feedback: newFeedback.feedback,
    task_id: newFeedback.task_id,
    user_id: newFeedback.user_id,
  });
});

router.get('/feedback', async (req, res, next) => {
  const feedback = await Feedback.findAll({
    include: [
      {
        model: User,
      },
    ],
  });
  res.json(feedback);
});

// COMMENTS

router.post('/comment', async (req, res, next) => {
  const { comment, task_id } = req.body;
  const newComment = await Comment.create({ comment, task_id, user_id: req.session.user.id });
  res.json({
    id: newComment.id,
    comment: newComment.comment,
    task_id: newComment.task_id,
    user_id: newComment.user_id,
  });
});

router.get('/comment', async (req, res, next) => {
  const comments = await Comment.findAll({
    include: [
      {
        model: User,
      },
    ],
  });
  res.json(comments);
});

// ДАЛЕЕ -- ТЕСТЫ, потом удалим

router.get('/msgs', async (req, res, next) => {
  const msgs = await Chat.findAll({ model: User });
  console.log('это мсгы');
  res.json(msgs);
});

router.get('/testRoles', async (req, res, next) => {
  try {
    const test = await User.findAll({
      include: [
        {
          model: Role,
          where: { role: 'owner' },
        },
      ],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testStatuses', async (req, res, next) => {
  try {
    const test = await Task.findAll({
      include: [
        {
          model: Status,
          where: { status: 'open' },
        },
      ],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testTaskWorker', async (req, res, next) => {
  try {
    const test = await Task.findAll({
      include: [
        {
          model: User,
          where: { id: 1 },
        },
      ],
    });
    res.json(test);
  } catch (error) {
    console.log(error);
  }
});

router.get('/testTaskOwner', async (req, res, next) => {
  try {
    const test = await User.findAll({
      include: [
        {
          model: Task,
          where: { owner: 1 },
        },
      ],
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
