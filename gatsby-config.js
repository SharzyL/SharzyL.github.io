module.exports = {
  siteMetadata: {
    title: `Sharzy`,
    description: `21st century schizoid man`,
    author: `Sharzy L`,
    siteUrl: `https://sharzy.in/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    // `gatsby-plugins-offline`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/posts/*`],
      },
    },
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.filter(
                node => !node.frontmatter.permalink
              ).map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter { title date }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: `RSS feed of sharzy.in`,
          },
        ],
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<span>#</span>`
            }
          },
          {
            resolve: `gatsby-remark-img-process`
          }
        ]
      }
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: ({site, allSitePage}) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
            allSitePage.nodes.map(node => {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `weekly`,
                priority: 0.7,
              }
            })
      }
    }
  ],
}
