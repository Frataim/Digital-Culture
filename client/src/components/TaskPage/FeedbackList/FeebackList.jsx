import React from 'react'
import { useSelector } from 'react-redux'
import Feedback from './Feedback/Feedback';
import FeedbackForm from './FeedbackForm/FeedbackForm'

export default function FeedbackList() {

  const task_id = 1

  const feedbacks = useSelector((state) => state.feedbacks)

  console.log(feedbacks);

  return (
    <div>
      <FeedbackForm />
      <br/>
        {feedbacks.map((el) => <Feedback key={el.id} {...el} />)}
    </div>
  )
}

