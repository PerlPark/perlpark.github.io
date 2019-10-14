/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* 페이지 타이틀 */
  siteMetadata: { 
    title: `Front-end Developer PerlPark`,
    title_small: `Front-end Developer`,
    title_big: `PerlPark 👩‍💻`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/works`,
        name: `works`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
