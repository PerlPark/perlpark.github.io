import React from "react"
import style from "./works-out-link.module.scss"
import IconGithub from "../_svg/github-brands.svg";
import IconExternal from "../_svg/external-link-alt-solid.svg";

function worksOutLink(props) {
  const icon = {
    maxWidth:'1em',
    maxHeight:'1em',
    verticalAlign:'middle',
    marginRight:'6px',
    marginBottom: '0.1rem'
  };
  return (
    <ul class={style.ul} style={{fontSize: "1em"}}>
      {props.github && (
        <li>
          <a href={props.github} rel="noopener noreferrer" target="_blank">
            <IconGithub style={icon} />Github Repository 보기
          </a>
        </li>
      )}
      {props.demo && (
        <li>
        <a href={props.demo} rel="noopener noreferrer" target="_blank">
          <IconExternal style={icon} />Demo 보기
        </a>
      </li>
      )}
    </ul>
  )
}
export default worksOutLink