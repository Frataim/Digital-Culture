import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm'

export default function CommentList() {

  const {id} = useParams()
  const task_id = +id

  const comments = useSelector((state) => state.comments)
  console.log(comments);
  const user = useSelector((state) => state.user)
  const actualComments = []
  if(comments){
    const actualComments = comments.filter(el => el.task_id === task_id)
  }

  return (

    <>
      {actualComments !== [] && user && (
        <div>
          {
            user.role === 3 && (
              <CommentForm />
            )
          }
          <br/>
          {actualComments.map((el) => <Comment key={el.id} {...el} />)}
        </div>
      )
    }
    </>
  )
}

