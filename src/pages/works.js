import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <PageTitle pageTitle="Works"  pageDescription="Lorem ipsum dolor sit amet, 💭" />
      <p>Such wow. Very React.</p>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "work"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fileAbsolutePath
        }
      }
    }
  }
`