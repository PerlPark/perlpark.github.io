import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout-detail"
import Info from "../components/article-info"
import articleStyles from "../stylesheets/article.module.css"
import IconBars from "../components/_svg/bars-solid.svg";

export default ({ data, pageContext: { previous, next } }) => {
  const icon = {
    maxWidth:'1em',
    maxHeight:'1em',
    verticalAlign:'middle',
    marginRight:'6px',
    marginBottom: '0.1rem'
  };
  const post = data.markdownRemark
  return (
    <Layout>
      <article className={articleStyles.article}>
        <h3 className={articleStyles.article__title}>{post.frontmatter.title}</h3>
        <Info date={post.frontmatter.date} timeToRead={post.timeToRead} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} className={articleStyles.article__post} />
      </article>
      <div className={articleStyles.buttons}>
        {previous && (
          <Link to={previous.frontmatter.slug}>
            <div className={articleStyles.previous}>
              <span className={articleStyles.previous__small}>← 이전 게시물</span>
              <span className={articleStyles.previous__title}>{previous.frontmatter.title}</span>
            </div>
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.slug}>
            <div className={articleStyles.next}>
              <span className={articleStyles.previous__small}>다음 게시물 →</span>
              <span className={articleStyles.previous__title}>{next.frontmatter.title}</span>
            </div>
          </Link>
        )}
        <Link to='/' replace>
          <div className={articleStyles.list}>
            <span className={articleStyles.previous__title}><IconBars style={icon} /> 목록</span>
          </div>
        </Link>
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