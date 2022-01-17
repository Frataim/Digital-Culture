import React from 'react'
import { useSelector } from 'react-redux'
import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm'

export default function CommentList() {

  const task_id = 1

  const comments = useSelector((state) => state.comments)
  const actualComments = comments.filter(el => el.task_id === task_id)

  return (
    <div>
      <CommentForm />
      <br/>
      {actualComments.map((el) => <Comment key={el.id} {...el} />)}
    </div>
  )
}

