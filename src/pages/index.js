import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => (
  <Layout>
    <div style={{ color: `teal` }}>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  </Layout> 
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`