import React from "react"
import style from "./pageTitle.module.css"
function pageTitle(props) {
  return (
    <div>
      <h1 className={style.title}>{props.pageTitle}</h1>
      <p className={style.description}>{props.pageDescription}</p>
    </div>
  )
}
export default pageTitle