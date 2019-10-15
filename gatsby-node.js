const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result_article = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "article"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  const articles = result_article.data.allMarkdownRemark.edges
  articles.forEach((post, index) => {
    const previous = index === 0 ? null : articles[index - 1].node
    const next = index === articles.length - 1 ? null : articles[index + 1].node
    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })
  })
}