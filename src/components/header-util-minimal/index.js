import React from "react"
import IconEnvelope from "../_svg/envelope-solid.svg";
import IconGithub from "../_svg/github-brands.svg";

function headerUtil() {
  const icon = {
    maxWidth:'1em',
    maxHeight:'1em'
  };
  return (
    <ul className="header__util">
      <li><a href="mailto:hello@jinjoo.me" rel="noopener noreferrer" target="_blank"><IconEnvelope style={icon} /></a></li>
      <li><a href="https://github.com/PerlPark" rel="noopener noreferrer" target="_blank"><IconGithub style={icon} /></a></li>
    </ul>
  )
}
export default headerUtil