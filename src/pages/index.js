import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import Info from "../components/article-info"
import articlesStyles from "../stylesheets/articles.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle pageTitle="Articles"  pageDescription="차곡차곡 정리한 생각 모음 💭" />
      <div className={articlesStyles.topics}>
        <h2 className={articlesStyles.topics__title}>Topics</h2>
        <ul className={articlesStyles.topics__list}>
          {data.allMarkdownRemark.distinct.map((value, index) => (
            <li key={index} className={articlesStyles.topics__list__item}>{value}</li>
          ))}
        </ul>
      </div>
      <section className={articlesStyles.list}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} className={`${articlesStyles.list__item} shadow-box`}>
            <Link to={node.frontmatter.slug}>
              <h3 className={articlesStyles.list__item__title}>{node.frontmatter.title}</h3>
              <p className={articlesStyles.list__item__description}>{node.frontmatter.description}</p>
              <Info date={node.frontmatter.date} timeToRead={node.timeToRead} tags={node.frontmatter.tags} />
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "article"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      distinct(field: frontmatter___tags)
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            tags
            slug
          }
          timeToRead
        }
      }
    }
  }
`