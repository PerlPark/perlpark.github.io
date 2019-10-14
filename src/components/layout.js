import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import layoutStyles from "./stylesheets/layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, margin: `0 1em` }}>
    <Link to={props.to}>{props.children}</Link>
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
      <header className={layoutStyles.header}>
        <div className={layoutStyles.header__logo}>
          <Link to="/">
            <span className={layoutStyles.header__logo__small}>{data.site.siteMetadata.title_small}</span>
            <span className={layoutStyles.header__logo__big}>{data.site.siteMetadata.title_big}</span>
          </Link>
        </div>
        <nav className={layoutStyles.header__nav}>
          <ul>
            <ListLink to="/works/">Works</ListLink>
            <ListLink to="/articles/">Articles</ListLink>
            <ListLink to="/resume/">Resume</ListLink>
          </ul>
        </nav>
        <div className={layoutStyles.header__animation}>
          <div className={layoutStyles.header__animation__wave}></div>
          <div className={layoutStyles.header__animation__wave}></div>
          <div className={layoutStyles.header__animation__wave}></div>
          <div className={layoutStyles.header__animation__wave}></div>
        </div>
      </header>
      <main className={layoutStyles.main}>
        {children}
      </main>
      <footer>
        © design and developed by Perlpark
      </footer>
    </div>
  )
}