import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../stylesheets/layout.scss"
import animation from "../stylesheets/animation.module.css"
import Util from "../components/header-util"

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="header__nav--active">{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title_small
            title_big
          }
        }
      }
    `
  )
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <span className="header__logo__small">{data.site.siteMetadata.title_small}</span>
            <span className="header__logo__big">{data.site.siteMetadata.title_big}</span>
          </Link>
        </div>
        <nav className="header__nav">
          <ul>
            <ListLink to="/works/">Works</ListLink>
            <ListLink to="/articles/">Articles</ListLink>
            <ListLink to="/resume/">Resume</ListLink>
          </ul>
        </nav>
        <Util />
        <div className={animation.header__animation}>
          <div className={animation.header__animation__wave}></div>
          <div className={animation.header__animation__wave}></div>
          <div className={animation.header__animation__wave}></div>
          <div className={animation.header__animation__wave}></div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        © designed and developed by Perlpark
      </footer>
    </div>
  )
}