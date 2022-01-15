import React from 'react'
// import { useSelector } from 'react-redux'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'


function Header() {
  // const user = useSelector ((state) => state.user)
  return (
    <div className={style.headerContainer}>
      <NavBar />
      <div className={style.logo}>#Free</div>
      <div className={style.logoContainer}>Digital Culture</div>
    </div>
  )
}

export default Header
