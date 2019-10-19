import React from "react"
import Style from "./stack-icon.module.css";
import IconHTML5 from "../_svg/stack/html5.svg";
import IconScss from "../_svg/stack/scss.svg";
import IconJs from "../_svg/stack/javascript.svg";
import IconNodejs from "../_svg/stack/nodejs.svg";
import IconExpress from "../_svg/stack/express.svg";
import IconPug from "../_svg/stack/pug.svg";

function stackIcon(props) {
  const icon = {
    height: '32px',
    width: 'auto'
  };
  const icon2 = {
    width: '64px',
    height: 'auto'
  };
  return (
    <li>
      {props.name === "HTML5" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconHTML5 style={icon} alt="HTML5" />
        </span>
      )}
      {props.name === "SCSS" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconScss style={icon} alt="SCSS" />
        </span>
      )}
      {props.name === "Javascript" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconJs style={icon} alt="Javascript" />
        </span>
      )}
      {props.name === "Node.js" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconNodejs style={icon} alt="Node.js" />
        </span>
      )}
      {props.name === "Express" && (
        <span class={Style.div} style={icon}>
          <span class={Style.name}>{props.name}</span>
          <IconExpress style={icon2} alt="Express" />
        </span>
      )}
      {props.name === "Pug" && (
      <span class={Style.div} style={icon}>
        <span class={Style.name}>{props.name}</span>
        <IconPug style={icon} alt="Pug" />
      </span>
      )}
    </li>
  )
}
export default stackIcon