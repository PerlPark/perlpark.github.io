import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
export default ({ data }) => {
  return (
    <Layout>
      <PageTitle pageTitle="Articles"  pageDescription="Lorem ipsum dolor sit amet, 💭" />
      <p>{data.allMarkdownRemark.totalCount}</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.description}</p>
            <p>{node.frontmatter.date}</p>
            <p>{node.frontmatter.tags}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "article"}}}) {
      totalCount
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
          fileAbsolutePath
        }
      }
    }
  }
`