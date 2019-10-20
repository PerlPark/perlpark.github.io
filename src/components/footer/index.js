import React from "react"
import style from "./footer.module.scss"

function footer() {
  return (
    <footer className={style.footer}>
      © designed and developed by Perlpark / Icons © <a href="https://fontawesome.com/license" rel="noopener noreferrer" target="_blank">Font Awesome</a>
    </footer>
  )
}
export default footer