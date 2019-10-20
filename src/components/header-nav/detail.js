import React from "react"
import { Link } from "gatsby"

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
  ? { className: "header__nav--active" }
  : null
}

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="header__nav--active" getProps={isPartiallyActive}>{props.children}</Link>
  </li>
)

function headerNav() {
  return (
    <ul>
      <ListLink to="/">Articles</ListLink>
      <ListLink to="/works/">Works</ListLink>
      {/* <ListLink to="/resume/">Resume</ListLink> */}
    </ul>
  )
}
export default headerNav