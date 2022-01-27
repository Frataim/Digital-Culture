// require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

const checkUser = require('./middlewares/checkUser');
const indexRouter = require('./routes/index'); // вот так прописываем роуты
const authRouter = require('./routes/auth'); // вот так прописываем роуты
const taskRouter = require('./routes/task');

const PORT = 3001;

const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'smth', // ключ куки
  secret: 'secret', // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
  httpOnly: true, // нельзя изменить куки с фронта
};

app.use(express.static('public'));
app.use(fileUpload());
app.use(session(sessionConfig));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3000', 'ws://localhost:3001'], credentials: true }));
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use(checkUser);

app.use('/', indexRouter); // а вот так перенаправляем ручку на роут
app.use('/users', authRouter); // а вот так перенаправляем ручку на роут
app.use('/tasks', taskRouter);

// app.listen(PORT, () => console.log('Server started at port: ', PORT));
module.exports = { app };
