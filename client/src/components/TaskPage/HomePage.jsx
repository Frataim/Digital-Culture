import React from 'react'
import FilterSector from './FilterSector/FilterSector'
import style from './style.module.css'
import TaskList from './TaskList/TaskList'


function TaskPage() {
  return (
    <div className={style.homeContainer}>
      <FilterSector />
      <TaskList />
    </div>
  )
}

export default TaskPage
