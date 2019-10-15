import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout-detail"
import articleStyles from "../stylesheets/article.module.css"
import infoTextStyles from "../stylesheets/info-text.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStream, faBars } from '@fortawesome/free-solid-svg-icons'

export default ({ data, pageContext: { previous, next } }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <article className={articleStyles.article}>
        <h3 className={articleStyles.article__title}>{post.frontmatter.title}</h3>
        <ul className={infoTextStyles.info}>
          <li className={infoTextStyles.info__item}><FontAwesomeIcon icon={faCalendarAlt} className={infoTextStyles.info__item__icon} />{post.frontmatter.date}</li>
          <li className={infoTextStyles.info__item}><FontAwesomeIcon icon={faStream} className={infoTextStyles.info__item__icon} />{post.timeToRead} minute read</li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className={articleStyles.article__post} />
      </article>
      <div className={articleStyles.buttons}>
        {previous && (
          <Link to={previous.frontmatter.slug} className={articleStyles.previous}>← {previous.frontmatter.title}</Link>
        )}
        <Link to="/articles/" className={articleStyles.list}><FontAwesomeIcon icon={faBars} className={infoTextStyles.info__item__icon} /> 목록</Link>
        {next && (
          <Link to={next.frontmatter.slug} className={articleStyles.next}>{next.frontmatter.title} →</Link>
        )}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`