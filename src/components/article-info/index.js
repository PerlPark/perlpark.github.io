import React from "react"
import style from "./article-info.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStream, faTag } from '@fortawesome/free-solid-svg-icons'

function articleInfo(props) {
  return (
    <ul className={style.info}>
      <li className={style.info__item}>
        <FontAwesomeIcon icon={faCalendarAlt} size="1x" className={style.info__item__icon} />
        {props.date}
      </li>
      
      <li className={style.info__item}>
        <FontAwesomeIcon icon={faStream} size="1x" className={style.info__item__icon} />
        {props.timeToRead} minute read
      </li>

      {props.tags && (
        <li className={style.info__item}>
          <FontAwesomeIcon icon={faTag} size="1x" className={style.info__item__icon} />
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