import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Nav from "../components/header-nav/detail"
import Util from "../components/header-util"
import UtilMini from "../components/header-util-minimal"
import Footer from "../components/footer"
import "../stylesheets/layout.scss"
import "../stylesheets/layout-detail.scss"
import "../components/sticky.js"

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
      <header className="header detail sticky">
        <div className="header__logo">
          <Link to="/">
            <span className="header__logo__big">{data.site.siteMetadata.title_big}</span>
          </Link>
        </div>
        <nav className="header__nav">
          <Nav />
        </nav>
        <UtilMini />
      </header>
      
      <header className="header detail">
      <div className="header__logo">
          <Link to="/">
            <span className="header__logo__small">{data.site.siteMetadata.title_small}</span>
            <span className="header__logo__big">{data.site.siteMetadata.title_big}</span>
          </Link>
        </div>
        <nav className="header__nav">
          <Nav />
        </nav>
        <Util />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}