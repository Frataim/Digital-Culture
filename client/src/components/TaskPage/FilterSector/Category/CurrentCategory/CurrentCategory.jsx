import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filteredTask } from '../../../../../redux/actions/tasksAc'
import style from './style.module.css'

function CurrentCategory({ title, cancelButton, setFiltered, filtered }) {

  const [currentFilter, setCurrentFilter] = useState(false)


  useEffect(() => {
    if (!filtered) {
      setCurrentFilter(false)
    }
  }, [filtered])

  const dispatch = useDispatch()

  const filter = (e) => {
    dispatch(filteredTask(e.target.innerText))
    setCurrentFilter(!currentFilter)
    setFiltered(!filtered)
  }

  return (
    <div onClick={filter} className={currentFilter && filtered ? style.activeCategory : style.currentCategory}>{title}</div>
  )
}

export default CurrentCategory
