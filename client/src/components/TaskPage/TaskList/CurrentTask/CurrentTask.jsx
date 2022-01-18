import React from 'react'
import style from './style.module.css'
import sanya from '../../../../sanya.jpg'

import CommentList from '../../CommentList/CommentList'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Chat from '../../Chat/Chat'
import FeedbackList from '../../FeedbackList/FeebackList'

function CurrentTask() {
  const { id } = useParams()
  const task = useSelector(store => store.tasks.find((el) => el.id === +id))
  console.log('----------------------->', task);
  return (
    <>
    {task &&
    
    (<div className={style.currentContainer}>
      <div>
        <div className={style.currentRole}>Помощь нужна</div>
        <div className={style.currentOwnerInfoCard}>

          <img className={style.currentOwnerImg} src={sanya} alt="" />
          <div className={style.currentOwnerInfo}>
            <div className={style.currentOwnerRole}>Заказчик</div>
            <div className={style.currentOwnerName}>{task.User.name}</div>
            <div className={style.currentOwnerReviews}>Отзывы: 2</div>
          </div>
        </div>
      </div>
      <div>
        <div className={style.currentRole}>Задача</div>
        <div className={style.currentTaskContainer}>


          <div className={style.currentTaskHeader}>{task.title}</div>

          <div className={style.currentTaskInfoContainer}>
            <div className={style.currentTaskDeadline}>{task.deadline.slice(0, 10)}</div>
            <div className={style.currentTaskTime}>Открыто 44 минуты назад</div>
            <div className={style.currentTaskResponse}>Отклики: {task.Comments.length}</div>
          </div>
          <div className={style.currentTaskCategoryContainer}>
            <div className={style.currentTaskCategory}>Фандрайзинг</div>
            <div className={style.currentTaskTag}>{task.Tags.map((el) => {
              return <div className={style.tag}>{el.tag}</div>
            })}</div>
          </div>
          <div className={style.currentTaskSeparator}></div>
          <div className={style.currentTaskMainInfoContainer}>
            <div className={style.currentTaskMainHeader}>Суть задачи
            </div>
            <div className={style.currentTaskMainDescription}>
              {task.description}
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
          <br />
          {task.status === 1 && (
            <CommentList />
          )}
          {task.status === 2 && (
            <Chat />
          )}
          {task.status === 3 && (
            <FeedbackList />
          )}
        </div>
      </div>
    </div>)
    }
    </>
  )
}

export default CurrentTask
