const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result_article = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "article"}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  result_article.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
  console.log(JSON.stringify(result_article, null, 4))
}