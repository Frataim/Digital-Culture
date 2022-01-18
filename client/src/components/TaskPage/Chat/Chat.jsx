import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { upTaskThunk } from '../../../redux/actions/tasksAc'
import style from './style.module.css'


export default function Chat() {
  const user = useSelector((state) => state.user)
  const {id} = useParams()
  const task_id = +id
  const dispatch = useDispatch()
  const handleMatch = () => {
    dispatch(upTaskThunk(task_id))
  }
  return (
    <>
      {user && (
        <div className={style.mainContainer}>
          <div>
            Здесь будет чат между заказчиком {user.name} и исполнителем
          </div>
          { user.role === 2 && (
            <button type='button' onClick={handleMatch} className={style.btn}>
                  ПРИНЯТЬ РАБОТУ
            </button>
          )
          }
        </div>
      )}
    </>
  )
}

