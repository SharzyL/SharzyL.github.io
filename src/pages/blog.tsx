import * as React from "react"
import {graphql, Link} from "gatsby"

export default ({data}) => {
    data.allMarkdownRemark.nodes.map(node => {
        console.log(node)
    })
    return (
        <div>
            {data.allMarkdownRemark.nodes.map(node => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <h2>{node.frontmatter.title}{" "}</h2>
                    </Link>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </div>
    )
}
export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
      excerpt
    }
    totalCount
  }
}
`
