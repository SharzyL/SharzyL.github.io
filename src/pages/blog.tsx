import * as React from "react"
import {graphql, Link} from "gatsby"

import "../style/blog-index.sass"
import SEO from "../components/seo"
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default ({data}) => {
    const render_node = (node, idx) => {
        const title = (
            <h2 className={"h-centering inner-block"}>
                <Link to={node.fields.slug} className={"blog-index-item-title live-link"}
                      dangerouslySetInnerHTML={{__html: node.frontmatter.title}}/>
            </h2>
        )
        const excerpt = <p className={"blog-index-item-excerpt inner-block"}
                           dangerouslySetInnerHTML={{__html: node.excerpt}}/>
        let subtitle = <></>
        let date = <></>
        if (node.frontmatter.subtitle) {
            subtitle = <p className={"blog-index-item-subtitle h-centering inner-block"} dangerouslySetInnerHTML={{__html: node.frontmatter.subtitle}}/>
        }
        if (node.fields.date) {
            date = (
                <p id={"blog-index-item-info"} className={"h-centering inner-block"}>
                    Posted on <span className={"blog-index-item-date"}>{(new Date(node.fields.date)).toDateString()}</span>
                </p>
            )
        }
        return (
            <>
                <SEO title={"Sharzy's blog"}/>
                <div key={node.id} className={"blog-index-item"}>
                    {title}
                    {subtitle}
                    {excerpt}
                    {date}
                </div>
            </>
        )
    }
    return (
        <>
            <NavBar/>
            <main id={"blog-index"}>
                {data.allMarkdownRemark.nodes
                    .filter( node => !node.frontmatter.permalink )
                    .map(render_node)
                }
            </main>
            <Footer/>
        </>
    )
}

export const query = graphql`
query {
  allMarkdownRemark (
    sort: {fields: fields___date, order: DESC},
  ){
    nodes {
      id
      fields { slug date }
      frontmatter { title subtitle permalink }
      excerpt (truncate:true)
    }
    totalCount
  }
}
`
