import React from "react"
import pageTitleStyles from "../stylesheets/pageTitle.module.css"
function pageTitle(props) {
  return (
    <div>
      <h1 className={pageTitleStyles.title}>{props.pageTitle}</h1>
      <p className={pageTitleStyles.description}>{props.pageDescription}</p>
    </div>
  )
}
export default pageTitle