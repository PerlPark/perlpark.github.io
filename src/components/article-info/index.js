import React from "react"
import style from "./article-info.module.scss"
// import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStream, faTag } from '@fortawesome/free-solid-svg-icons'
// config.autoAddCss = false;

function articleInfo(props) {
  return (
    <ul className={style.info}>
      <li className={style.info__item}>
        <FontAwesomeIcon icon={faCalendarAlt} className={style.info__item__icon} />
        {props.date}
      </li>
      
      <li className={style.info__item}>
        <FontAwesomeIcon icon={faStream} className={style.info__item__icon} />
        {props.timeToRead} minute read
      </li>

      {props.tags && (
        <li className={style.info__item}>
          <FontAwesomeIcon icon={faTag} className={style.info__item__icon} />
          <ul className={style.info__item__tags}>
            {props.tags.map((tag) =>
              <li key={tag} className={style.info__item__tags__item}>{tag}</li>
            )}
          </ul>
        </li>
      )}
    </ul>
  )
}
export default articleInfo