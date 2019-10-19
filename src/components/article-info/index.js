import React from "react"
import style from "./article-info.module.scss"
import IconCalendar from "../_svg/calendar-alt-solid.svg";
import IconStream from "../_svg/stream-solid.svg";
import IconTag from "../_svg/tag-solid.svg";

function articleInfo(props) {
  const icon = {
    maxWidth:'1em',
    maxHeight:'1em',
    verticalAlign:'middle',
    marginRight:'6px',
    marginBottom: '0.1rem'
  };
  return (
    <ul className={style.info} style={{fontSize: "0.75em"}}>
      {props.date && (
        <li className={style.info__item__date}>
          <IconCalendar style={icon} />
          {props.date}
        </li>
      )}
      {props.timeToRead && (
        <li className={style.info__item__timeToRead}>
          <IconStream style={icon} />
          {props.timeToRead} minute read
        </li>
      )}
      {props.tags && (
        <li className={style.info__item__tags}>
          <IconTag style={icon} />
          <ul>
            {props.tags.map((tag) =>
              <li key={tag} className={style.info__item__tags__item}>{tag}</li>
            )}
          </ul>
        </li>
      )}
      {props.startDate && props.endDate && (
        <li className={style.info__item__date}>
          <IconCalendar style={icon} />
          {props.startDate} ~ {props.endDate}
        </li>
      )}
    </ul>
  )
}
export default articleInfo