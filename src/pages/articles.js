import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import articlesStyles from "../stylesheets/articles.module.css"
import infoTextStyles from "../stylesheets/info-text.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStream, faTag } from '@fortawesome/free-solid-svg-icons'

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle pageTitle="Articles"  pageDescription="Lorem ipsum dolor sit amet, 💭" />
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
          <article key={node.id} className={articlesStyles.list__item}>
            <Link to={node.frontmatter.slug}>
              <h3 className={articlesStyles.list__item__title}>{node.frontmatter.title}</h3>
              <p className={articlesStyles.list__item__description}>{node.frontmatter.description}</p>
              <div>
                <ul className={infoTextStyles.info}>
                  <li className={infoTextStyles.info__item}><FontAwesomeIcon icon={faCalendarAlt} className={infoTextStyles.info__item__icon} />{node.frontmatter.date}</li>
                  <li className={infoTextStyles.info__item}><FontAwesomeIcon icon={faStream} className={infoTextStyles.info__item__icon} />{node.timeToRead} minute read</li>
                  <li className={infoTextStyles.info__item}><FontAwesomeIcon icon={faTag} className={infoTextStyles.info__item__icon} />{node.frontmatter.tags}</li>
                </ul>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "article"}}}) {
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
            img
            fig_caption
          }
          timeToRead
        }
      }
    }
  }
`