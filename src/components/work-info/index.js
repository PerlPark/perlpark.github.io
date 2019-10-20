import React from "react"
import style from "./work-info.module.scss"
import IconCalendar from "../_svg/calendar-alt-solid.svg";
import IconCheck from "../_svg/check-solid.svg";

function workInfo(props) {
  const icon = {
    maxWidth:'1em',
    maxHeight:'1em',
    verticalAlign:'middle',
    marginRight:'6px',
    marginBottom: '0.1rem'
  };
  return (
    <ul className={style.info} style={{fontSize: "0.75em"}}>
      {props.startDate && props.endDate && (
        <li>
          <IconCalendar style={icon} />
          {props.startDate} ~ {props.endDate}
        </li>
      )}
      {props.browser && (
        <li>
          <IconCheck style={icon} />
          {props.browser}
        </li>
      )}
    </ul>
  )
}
export default workInfo