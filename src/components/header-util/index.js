import React from "react"
import IconGithub from "../_svg/github-brands.svg";

function headerUtil() {
  const icon = {
    maxWidth:'1em',
    maxHeight:'1em',
    verticalAlign:'middle',
    marginRight:'0.1em'
  };
  return (
    <ul className="header__util">
      <li><a href="mailto:hello@jinjoo.me" rel="noopener noreferrer" target="_blank">hello@jinjoo.me</a></li>
      <li><a href="https://github.com/PerlPark" rel="noopener noreferrer" target="_blank"><IconGithub style={icon} /> perlpark</a></li>
    </ul>
  )
}
export default headerUtil