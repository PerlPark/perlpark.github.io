import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle pageTitle="Works"  pageDescription="Lorem ipsum dolor sit amet, 🌟" />
      <section>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
          <img src={node.frontmatter.img.publicURL} className={`shadow-box`} />
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.startDate} ~ {node.frontmatter.endDate}</p>
            <ul>
              {node.frontmatter.stack.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
            <div>
              <p>{node.frontmatter.description}</p>
              {node.frontmatter.github && (
                <a href={node.frontmatter.github} rel="noopener noreferrer" target="_blank">Github Repository 보기</a>
              )}
              {node.frontmatter.demo && (
                <a href={node.frontmatter.demo} rel="noopener noreferrer" target="_blank">Demo 보기</a>
              )}
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