
import React from 'react'
import Category from './Category/Category'
import Search from './Search/Search'
import style from './style.module.css'

function FilterSector() {
  return (
    <div className={style.filterSectorContainer}>
      <h2 className={style.filterHeader}>Найти задачу</h2>
      <Search />
      <Category />
    </div>
  )
}

export default FilterSector
