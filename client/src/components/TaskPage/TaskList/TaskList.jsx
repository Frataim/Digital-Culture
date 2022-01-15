import React from 'react'

function TaskList({ flag }) {
  const base = [
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
  ]


  return (
    <div>
      {base.map((el) => {
        return <div>{el.title}</div>
      })}
    </div>
  )
}

export default TaskList
