import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout-detail"
import Info from "../components/article-info"
import articleStyles from "../stylesheets/article.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default ({ data, pageContext: { previous, next } }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <article className={articleStyles.article}>
        <h3 className={articleStyles.article__title}>{post.frontmatter.title}</h3>
        <Info date={post.frontmatter.date} timeToRead={post.timeToRead} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} className={articleStyles.article__post} />
      </article>
      <div className={articleStyles.buttons}>
        <div>
        {previous && (
          <Link to={previous.frontmatter.slug}>
            <div className={articleStyles.previous}>
              <span className={articleStyles.previous__small}>← 이전 게시물</span>
              <span className={articleStyles.previous__title}>{previous.frontmatter.title}</span>
            </div>
          </Link>
        )}
        </div>
        <Link to="/articles/">
          <div className={articleStyles.list}>
            <FontAwesomeIcon icon={faBars} /> 목록
          </div>
        </Link>
        <div>
        {next && (
          <Link to={next.frontmatter.slug}>
            <div className={articleStyles.next}>
              <span className={articleStyles.previous__small}>다음 게시물 →</span>
              <span className={articleStyles.previous__title}>{next.frontmatter.title}</span>
            </div>
          </Link>
        )}
        </div>
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