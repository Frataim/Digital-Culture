
import React from 'react'
import Category from './Category/Category'
import Search from './Search/Search'
import style from './style.module.css'

function FilterSector() {
  return (
    <div className={style.filterSectorContainer}>
      <Search />
      <Category />
    </div>
  )
}

export default FilterSector
