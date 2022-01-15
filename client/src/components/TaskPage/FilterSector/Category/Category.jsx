import React from 'react'

function Category() {

  const category = [
    { title: 'История' },
    { title: 'Наука' },
    { title: 'Спорт' },
  ]


  return (
    <div>
      {category.map((el) => {
        return <div>{el.title}</div>
      })}
    </div>
  )
}

export default Category
