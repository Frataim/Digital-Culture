import React from 'react'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'

function Header() {
  return (
    <div className={style.headerContainer}>
      <NavBar />
    </div>
  )
}

export default Header
