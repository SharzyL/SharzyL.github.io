import * as React from "react"
import {graphql, Link} from "gatsby"

import "../style/global.sass"
import "../style/blog-index.sass"
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default ({data}) => {
    return (
        <>
            <NavBar/>
            <main id={"blog-index"}>
                {data.allMarkdownRemark.nodes.filter(
                    node => !node.frontmatter.permalink
                ).map(node => (
                    <div key={node.id} className={"blog-index-item"}>
                        <h2>
                            <Link to={node.fields.slug} className={"blog-index-item-title"} dangerouslySetInnerHTML={{__html: node.frontmatter.title}}/>
                        </h2>
                        <p className={"blog-index-item-excerpt"} dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                    </div>
                ))}
            </main>
            <Footer/>
        </>
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
        subtitle
        permalink
      }
      excerpt(truncate:true)
    }
    totalCount
  }
}
`
