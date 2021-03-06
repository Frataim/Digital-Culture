import React from 'react'
import style from './style.module.css'
import logo from '../../image.png'
import one from '../../1.png'
import two from '../../2.png'
import three from '../../3.png'
import hot from '../../hot.png'
import ilya from '../../Ilya.jpg'
import sanya from '../../sanya.jpg'
import talgat from '../../Talgat.jpg'
import vanya from '../../Vanya.jpg'
import { useSelector } from 'react-redux'

function Greet() {
  const tasks = useSelector(store => store.tasks)
  return (
    <>
      {tasks && tasks.length > 0 &&
        <>
          <div className={style.greetContainer}>
            <div>
              <h1>Как программист поможет искусству?</h1>
              <h4 className={style.description}>
                Музеи, галереи и театры сегодня стремяться стать частью цифровой действительности, войти в новый век высоких технологий. Но им нужна твоя помощь, программист!
                </h4>
              <p className={style.description}>Помоги культурным учереждениям с реализацией действительно инновационных проектов и ворвись таким образом в мир искусства</p>
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
                <h2>{tasks[0].title}</h2>
                <p>{tasks[0].description}</p>
              </div>
            </div>
            <div className={style.hotTask}>
              <img src={two} className={style.hotImage} alt="" />
              <div className={style.hotDescription}>
                <h2>{tasks[1].title}</h2>
                <p>{tasks[1].description}</p>
              </div>
            </div>
            <div className={style.hotTask}>
              <div>
              </div>
              <img src={three} alt="" className={style.hotImage} />
              <div className={style.hotDescription}>
                <h2>{tasks[2].title}</h2>
                <p>{tasks[2].description}</p>
              </div>
            </div>
            <img className={style.bestHot} src={hot} alt="" />
          </div>
          <div className={style.separatorAbout}></div>
          <h2 className={style.workerHeader}>Разработчики приложения</h2>
          <div className={style.aboutContainer}>
            <div className={style.aboutBlock}>
              <img className={style.aboutImg} src={sanya} alt="" />
              <h4 className={style.aboutHeader}>Александр</h4>
              <p className={style.aboutProg}>Frontend-разработчик #senior </p>
              <p className={style.aboutDescription}>Что разум человека может постигнуть и во что он может поверить, того он способен достичь</p>
            </div>
            <div className={style.aboutBlock}>
              <img className={style.aboutImg} src={ilya} alt="" />
              <h4 className={style.aboutHeader}>Илья</h4>
              <p className={style.aboutProg}>Backend-разработчик #junior</p>
              <p className={style.aboutDescription}>Стремитесь не к успеху, а к ценностям, которые он дает</p>
            </div>
            <div className={style.aboutBlock}>
              <img className={style.aboutImg} src={talgat} alt="" />
              <h4 className={style.aboutHeader}>Талгат</h4>
              <p className={style.aboutProg}>Frontend-разработчик #junior</p>
              <p className={style.aboutDescription}>Сложнее всего начать действовать, все остальное зависит только от упорства.</p>
            </div>
            <div className={style.aboutBlock}>
              <img className={style.aboutImg} src={vanya} alt="" />
              <h4 className={style.aboutHeader}>Иван</h4>
              <p className={style.aboutProg}>Frontend-разработчик #junior</p>
              <p className={style.aboutDescription}>Жизнь - это то, что с тобой происходит, пока ты строишь планы.</p>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Greet
