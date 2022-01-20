import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'


function Header() {
  // const user = useSelector ((state) => state.user)
  return (
    <div className={style.headerContainer}>
      <NavBar />
      <Link className={style.link} to={'/'}><div className={style.logo}>#Free</div></Link>
      <div className={style.logoContainer}>Digital Culture</div>
    </div>
  )
}

export default Header
