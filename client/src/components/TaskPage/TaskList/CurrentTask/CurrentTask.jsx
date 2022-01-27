import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import sanya from '../../../../sanya.jpg'

import CommentList from '../../CommentList/CommentList'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FeedbackList from '../../FeedbackList/FeebackList'
import Chat from '../../../Chat/Chat'
import { deleteTaskThunk } from '../../../../redux/actions/tasksAc'

function CurrentTask() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const [status, setStatus] = useState(1)
<<<<<<< HEAD

=======
  const user = useSelector((state) => state.user)
>>>>>>> 6bd576e20e79c0114bbfcf52a05662ffe72f1613
  const task = useSelector(state => state.tasks.find((el) => el.id === +id))
  useEffect(() => {
    if (task) {
      setStatus(task.status)
    }
  }, [task])

  const clickHandler = () => {
    dispatch(deleteTaskThunk(id))
    navigate('/')
  }

  return (
    <>
      {task &&

        (<div className={style.currentContainer}>
          <div>
            <div className={style.currentRole}>Помощь нужна</div>
            <div className={style.currentOwnerInfoCard}>

              <img className={style.currentOwnerImg} src={task.User.avatar} alt="" />
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
                <div className={style.currentTaskDeadline}>Дедлайн: {task.deadline.slice(0, 10)}</div>
                <div className={style.currentTaskTime}>Задание открыто: {task.createdAt.slice(0, 10)}</div>
                <div className={style.currentTaskResponse}>Отклики: {task.Comments.length}</div>
              </div>
              <div className={style.currentTaskCategoryContainer}>
                <div className={style.currentTaskCategory}>{task.category}</div>
                <div className={style.currentTaskTag}>
                <div className={style.tasksvg}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                  </svg>
                </div>
                  {task.Tags.map((el) => {
                  return <div className={style.tag}>{el.tag}</div>
                })}</div>
              </div>
              <div className={style.currentTaskSeparator}></div>
              <div className={style.currentTaskMainInfoContainer}>
                <div className={style.currentTaskMainHeader}>Суть задачи:
                </div>
                <div className={style.currentTaskMainDescription}>
                  {task.description}
                </div>
              </div>
              <div className={style.currentTaskSeparator}></div>
              <div className={style.currentTaskStatusLevels}>Этапы</div>
              <div className={style.currentTaskStatusContainer}>

                <div className={style.currentTaskLevels}>

                  <div className={status === 1 ? style.currentTaskLevelDone : style.currentTaskLevel}>1 Публикация</div>
                </div>
                <div className={style.currentTaskLevels}>

                  <div className={status === 1 ? style.currentTaskLevelDone : style.currentTaskLevel}>2 Поиск</div>
                </div>
                <div className={style.currentTaskLevels}>

                  <div className={status === 2 ? style.currentTaskLevelDone : style.currentTaskLevel}>3 В работе</div>
                </div>
                <div className={style.currentTaskLevels}>

                  <div className={status === 2 ? style.currentTaskLevelDone : style.currentTaskLevel}>4 Закрытие</div>
                </div>
                <div className={style.currentTaskLevels}>

                  <div className={status === 3 ? style.currentTaskLevelDone : style.currentTaskLevel}>5 Отзывы</div>
                </div>

              </div>
              <br />
              {status === 1 && (
                <CommentList />
              )}
              {status === 2 && (
                <Chat task={task} />
              )}
              {status === 3 && (
                <FeedbackList />
              )}
              {user !== null && task.owner === user.id && (
                <button onClick={clickHandler} className={style.btn}>Удалить задачу</button>
              )}
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default CurrentTask
