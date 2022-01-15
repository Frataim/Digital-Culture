import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import sanya from '../../../../sanya.jpg'


function Task() {

  const kek = 1


  return (
    <div className={style.taskContainer}>
      <div className={style.ownerContainer}>
        <img className={style.ownerImg} src={sanya} alt=''></img>
        <p className={style.taskAboutOwner}>Иван Иванов</p>

      </div>
      <div className={style.taskHeader}>Создание сайта для инвалидов</div>
      <div className={style.taskAbout}>
        <div className={style.taskDeadline}>Дедлайн 20 января 2022</div>
        <div className={style.taskBorn}>Задача добавлена 15 января</div>
        <div className={style.taskFeedBack}>0 откликов</div>
      </div>
      <Link to={`/tasks/${kek}`}>
        <div className={style.taskDescription}>
          нужно сделать нормальный шаблон для сайта вордпресс и установить его на сайт настроить меню сайта и шаблон сайта сделать страницы с название которых о нас новости контакты главная все это надо редактировать а как я не знаю как это по порядку ставить и вообще это будет бесплатный сайт для инвалидов первой и второй группы там будет немного музыки фото и номера тел администрации куда обращатся в трудную минуту кто может действительно помочь я сам инвалид 2 группы сам через все это прошел и их понимаю если кто может помогите пожалуйста сайт есть но его надо редактировать ставить нормальный шаблон и страницы которые я выше указывал а как я не знаю вот мой сайт dima-petrov.ru щас он выглядит отвратительно
        </div>

      </Link>
      <div className={style.taskSeparator}></div>
      <div className={style.taskTagContainer}>
        <div className={style.taskCategory}>WordPress</div>
        <div className={style.taskTag}>Борьба с инвалидами</div>
      </div>
    </div>
  )
}

export default Task
