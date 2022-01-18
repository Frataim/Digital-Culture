import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Feedback from './Feedback/Feedback';
import FeedbackForm from './FeedbackForm/FeedbackForm'

export default function FeedbackList() {

  const {id} = useParams()
  const task_id = +id
  const feedbacks = useSelector((state) => state.feedbacks)
  const actualFeedbacks = feedbacks.filter(el => el.task_id === task_id)

  return (
    <div>
      <FeedbackForm />
      <br/>
        {actualFeedbacks.map((el) => <Feedback key={el.id} {...el} />)}
    </div>
  )
}

