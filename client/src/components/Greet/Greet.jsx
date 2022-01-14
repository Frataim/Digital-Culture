import React from 'react'
import style from './style.module.css'
import logo from '../../image.png'
import one from '../../1.png'
import two from '../../2.png'
import three from '../../3.png'
import hot from '../../hot.png'
function Greet() {
  return (
    <>
      <div className={style.greetContainer}>
        <div>
          <h1>Что такое волонтер?</h1>
          <h4 className={style.description}>
            Это платформа, на которой встречаются IT-специалисты и гражданские активисты.
            Специалисты помогают активистам решать задачи, чтобы те могли делать свою работу лучше.</h4>
          <p className={style.description}>Мы верим, что в людях есть большой потенциал создания коллективного блага. Мы знаем, что если создать соответствующие инструменты, то люди смогут реализовывать этот потенциал с взаимной выгодой.</p>
        </div>
        <div>
          <img className={style.img} src={logo} alt="" />
        </div>
      </div>
      <div className={style.separator}></div>
      <h3 className={style.hotHeader}>Проекты, которые нужно выполнить прямо сейчас!</h3>
      <div className={style.hotTasksContainer}>

        <div className={style.hotTask}>
          <img src={one} className={style.hotImage} alt="" />
          <div className={style.hotDescription}>
            <h2>Заголовок</h2>
            <p>Какое то описание</p>
          </div>
        </div>
        <div className={style.hotTask}>
          <img src={two} className={style.hotImage} alt="" />
          <div className={style.hotDescription}>
            <h2>Заголовок</h2>
            <p>Какое то описание</p>
          </div>
        </div>
        <div className={style.hotTask}>
          <div>
          </div>
          <img src={three} alt="" className={style.hotImage} />
          <div className={style.hotDescription}>
            <h2>Заголовок</h2>
            <p>Какое то описание</p>
          </div>
        </div>
        <img className={style.bestHot} src={hot} alt="" />
      </div>
    </>
  )
}

export default Greet
