import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import Info from "../components/article-info"
import Stack from "../components/stack-icon"
import WorksOutLink from "../components/works-out-link"
import Style from "../stylesheets/works.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle pageTitle="Works"  pageDescription="Lorem ipsum dolor sit amet, 🌟" />
      <section>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
          <img src={node.frontmatter.img.publicURL} className={`${Style.image} shadow-box`} alt={""} />
          <div className={Style.article}>
            <div className={Style.left}>
              <p className={Style.category}>{node.frontmatter.category}</p>
              <h3 className={Style.title}>{node.frontmatter.title}</h3>
              <Info startDate={node.frontmatter.startDate} endDate={node.frontmatter.endDate} />
              <ul className={Style.stacks}>
                {node.frontmatter.stack.map((element) => (
                  <Stack name={element} />
                ))}
              </ul>
            </div>
            <div className={Style.right}>
              <p className={Style.description}>{node.frontmatter.description}</p>
              <WorksOutLink github={node.frontmatter.github} demo={node.frontmatter.demo} />
            </div>
          </div>
          </article>
        ))}
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "work"}}}, sort: {fields: fileAbsolutePath, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            startDate
            endDate
            stack
            description
            img {
              publicURL
            }
            github
            demo
          }
        }
      }
    }
  }
`