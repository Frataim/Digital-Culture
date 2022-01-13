const express = require('express');

const app = express();
const indexRouter = require('./routes/index'); // вот так прописываем роуты
const authRouter = require('./routes/auth'); // вот так прописываем роуты

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter); // а вот так перенаправляем ручку на роут
app.use('/api/auth', authRouter); // а вот так перенаправляем ручку на роут

app.listen(PORT, () => console.log('server started at port: ', PORT));
