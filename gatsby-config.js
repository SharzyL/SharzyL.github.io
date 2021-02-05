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

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sharzy.in`,
        short_name: `sharzy`,
        start_url: `/`,
        background_color: `#11294d`,
        theme_color: `#74d7ff`,
        display: `standalone`,
        icon: `static/maskable_icon.png`,
        icon_options: {
            purpose: `any maskable`,
        }
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/posts/*`],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,

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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900
            },
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
    },

    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Roboto",
            file: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap",
          },
          {
            name: "Cascadia Code",
            file: "https://cdn.jsdelivr.net/npm/@fontsource/cascadia-code@4.1.0/index.min.css"
          },
          {
            name: "Inter",
            file: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap"
          }
        ],
      },
    }
  ],
}
