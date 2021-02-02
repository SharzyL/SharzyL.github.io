/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const dateInFilenameRegex = /^(\d{4}-\d{2}-\d{2})/

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = node.frontmatter.permalink || createFilePath({node, getNode, basePath: `pages`})
        const matchedDateStr = path.parse(node.fileAbsolutePath).name.match(dateInFilenameRegex)
        const nodeDate = matchedDateStr && new Date(matchedDateStr[0])
        createNodeField({
            node,
            name: `date`,
            value: nodeDate,
        })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}