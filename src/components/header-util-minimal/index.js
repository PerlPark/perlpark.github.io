import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function headerUtil() {
  return (
    <ul className="header__util">
      <li><a href="mailto:hello@jinjoo.me" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a></li>
      <li><a href="https://github.com/PerlPark" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
    </ul>
  )
}
export default headerUtil