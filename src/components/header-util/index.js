import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function headerUtil() {
  return (
    <ul className="header__util">
      <li><a href="mailto:hello@jinjoo.me" rel="noopener noreferrer" target="_blank">hello@jinjoo.me</a></li>
      <li><a href="https://github.com/PerlPark" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /> perlpark</a></li>
    </ul>
  )
}
export default headerUtil