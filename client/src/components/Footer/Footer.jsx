import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

function Footer() {

  const base = [
    { title: 'Сделать сайт' },
    { title: 'Сделать сайт' },
    { title: 'Сделать сайт' },
    { title: 'Сделать сайт' },
  ]
  return (
    <>
      <div className={style.footerSeparator}></div>
      <div className={style.footer}>
        <div className={style.footerLogo}>
          <Link className={style.link} to={'/'}>DC</Link>
        </div>
        <div className={style.footerStat}>
          Всего проектов в работе: {base.length}
        </div>
        <div className={style.social}>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default Footer
