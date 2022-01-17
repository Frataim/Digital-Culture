import React from 'react'
import style from './style.module.css'

function CurrentTask() {
  return (
    <div className={style.currentContainer}>
      <div className={style.currentOwnerInfoCard}>
        <img className={style.currentOwnerImg} src="" alt="" />
        <div className={style.currentOwnerInfo}>
          <div className={style.currentOwnerRole}></div>
          <div className={style.currentOwnerName}></div>
          <div className={style.currentOwnerReviews}></div>
        </div>
      </div>
      <div className={style.currentTaskContainer}>
        <div className={style.currentTaskHeader}></div>
        <div className={style.currentTaskInfoContainer}>
          <div className={style.currentTaskDeadline}></div>
          <div className={style.currentTaskTime}></div>
          <div className={style.currentTaskResponse}></div>
        </div>
        <div className={style.currentTaskCategoryContainer}>
          <div className={style.currentTaskCategory}></div>
          <div className={style.currentTaskTag}></div>
        </div>
        <div className={style.currentTaskSeparator}></div>
        <div className={style.currentTaskMainInfoContainer}>
          <div className={style.currentTaskMainHeader}>Привлечение президентского гранта
          </div>
          <div className={style.currentTaskMainDescription}>
            Мы заинтересованы в сотрудничестве со специалистом по подготовке заявки на президентский грант. В 2021 году АНО выиграла грант для одного из наших проектов, в связи с этим мы планируем привлечь грант на развитие платформы.
            Сотрудничество с АНО “Платформа образовательных проектов”- это вклад в развитие первой в нашей стране интернет площадки, где школы и отдельные учителя могут заявить широкой аудитории о своих потребностях для улучшения образовательного процесса, а доноры (партнеры проектов) выбрать проекты, которые они поддержат, и отследить результаты их реализации.
          </div>
        </div>
        <div className={style.currentTaskSeparator}></div>
        <div className={style.currentTaskStatusContainer}>
          <div className={style.currentTaskStatusLevels}></div>
          <div className={style.currentTaskStatus}>
            <div className={style.currentTaskLevel}>
              <div className={style.currentTaskLevelNumber}></div>
              <div className={style.currentTaskLevel}></div>
            </div>
            <div className={style.currentTaskLevel}>
              <div className={style.currentTaskLevelNumber}></div>
              <div className={style.currentTaskLevel}></div>
            </div>
            <div className={style.currentTaskLevel}>
              <div className={style.currentTaskLevelNumber}></div>
              <div className={style.currentTaskLevel}></div>
            </div>
            <div className={style.currentTaskLevel}>
              <div className={style.currentTaskLevelNumber}></div>
              <div className={style.currentTaskLevel}></div>
            </div>
            <div className={style.currentTaskLevel}>
              <div className={style.currentTaskLevelNumber}></div>
              <div className={style.currentTaskLevel}></div>
            </div>
          </div>
        </div>
        <div className={style.currentTaskSeparator}></div>
      </div>
    </div>
  )
}

export default CurrentTask
