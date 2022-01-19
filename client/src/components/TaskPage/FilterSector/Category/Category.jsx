
import React from 'react'
import style from './style.module.css'

function Category() {

  const category = [
    { title: 'История' },
    { title: 'Наука' },
    { title: 'Спорт' },
  ]


  return (
    <>
      <div className={style.categorySeparator}></div>
      <h2 className={style.categoryHeader}>Выберите категорию</h2>
      <div className={style.categoryContainer}>
        {category.map((el) => {
          return <div className={style.currentCategory}>{el.title}</div>
        })}
      </div>
    </>
  )
}

export default Category
