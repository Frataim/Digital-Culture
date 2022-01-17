import React from 'react'
import style from './style.module.css'
import sanya from '../../../../sanya.jpg'
import CommentList from '../../CommentList/CommentList'

function CurrentTask() {
  return (
    <div className={style.currentContainer}>
      <div>
        <div className={style.currentRole}>Помощь нужна</div>
        <div className={style.currentOwnerInfoCard}>

          <img className={style.currentOwnerImg} src={sanya} alt="" />
          <div className={style.currentOwnerInfo}>
            <div className={style.currentOwnerRole}>Заказчик</div>
            <div className={style.currentOwnerName}>Елизавета Мизёва</div>
            <div className={style.currentOwnerReviews}>0 отзывов</div>
          </div>
        </div>
      </div>
      <div>
        <div className={style.currentRole}>Задача</div>
        <div className={style.currentTaskContainer}>


          <div className={style.currentTaskHeader}>Привлечение президентского гранта</div>

          <div className={style.currentTaskInfoContainer}>
            <div className={style.currentTaskDeadline}>Дедлайн 6 марта 2022</div>
            <div className={style.currentTaskTime}>Открыто 44 минуты назад</div>
            <div className={style.currentTaskResponse}>0 откликов</div>
          </div>
          <div className={style.currentTaskCategoryContainer}>
            <div className={style.currentTaskCategory}>Фандрайзинг</div>
            <div className={style.currentTaskTag}>Доступ к образованию</div>
          </div>
          <div className={style.currentTaskSeparator}></div>
          <div className={style.currentTaskMainInfoContainer}>
            <div className={style.currentTaskMainHeader}>Суть задачи
            </div>
            <div className={style.currentTaskMainDescription}>
              Мы заинтересованы в сотрудничестве со специалистом по подготовке заявки на президентский грант. В 2021 году АНО выиграла грант для одного из наших проектов, в связи с этим мы планируем привлечь грант на развитие платформы.
              Сотрудничество с АНО “Платформа образовательных проектов”- это вклад в развитие первой в нашей стране интернет площадки, где школы и отдельные учителя могут заявить широкой аудитории о своих потребностях для улучшения образовательного процесса, а доноры (партнеры проектов) выбрать проекты, которые они поддержат, и отследить результаты их реализации.
            </div>
          </div>
          <div className={style.currentTaskSeparator}></div>
          <div className={style.currentTaskStatusLevels}>Этапы</div>
          <div className={style.currentTaskStatusContainer}>

            <div className={style.currentTaskLevels}>

              <div className={style.currentTaskLevel}>1 Публикация</div>
            </div>
            <div className={style.currentTaskLevels}>

              <div className={style.currentTaskLevel}>2 Поиск</div>
            </div>
            <div className={style.currentTaskLevels}>

              <div className={style.currentTaskLevel}>3 В работе</div>
            </div>
            <div className={style.currentTaskLevels}>

              <div className={style.currentTaskLevel}>4 Закрытие</div>
            </div>
            <div className={style.currentTaskLevels}>

              <div className={style.currentTaskLevel}>5 Отзывы</div>
            </div>

          </div>
      <br/>
      <CommentList />
        </div>
      </div>
    </div>
  )
}

export default CurrentTask
