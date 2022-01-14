import React from 'react'
import style from './style.module.css'

function Search() {
  return (
    <div className={style.inputContainer}>
      <input type="text" className={style.input} />
    </div>
  )
}

export default Search
