import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Feedback from './Feedback/Feedback';
import FeedbackForm from './FeedbackForm/FeedbackForm'

export default function FeedbackList() {
  const {id} = useParams()
  const task_id = +id
  const feedbacks = useSelector((state) => state.feedbacks)
  const user = useSelector((state) => state.user)
  const [actualFeedbacks, setActualFeedbacks] = useState([])

  useEffect(() => {
    setActualFeedbacks(feedbacks.filter(el => el.task_id === task_id).reverse())
  }, [feedbacks])


  return (
    <>
      {user && feedbacks && (
        <div>
          {user !== null && (
            <FeedbackForm />
          )}
          <br/>
            {actualFeedbacks.map((el) => <Feedback key={el.id} {...el} />)}
        </div>
      )}
    </>
  )
}

