import * as React from "react"
import { graphql } from "gatsby"

import "katex/dist/katex.min.css"
import "../style/blog-post.sass"

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import SEO from "../components/seo"

export default ({ data }) => {
    const node = data.markdownRemark
    const title = <h1 id={"blog-post-title"} className={"h-centering inner-block"}
                      dangerouslySetInnerHTML={{ __html: node.frontmatter.title}}/>
    let subtitle = <></>
    let date = <></>

    if (node.frontmatter.subtitle) {
        subtitle = <h2 id={"blog-post-subtitle"} className={"h-centering inner-block"}
                       dangerouslySetInnerHTML={{__html: node.frontmatter.subtitle}}/>
    }
    if (node.fields.date) {
        date = (
            <p id={"blog-post-info"} className={"h-centering inner-block"}>
                Posted on <span id={"blog-post-date"}>{(new Date(node.fields.date)).toLocaleDateString()}</span>
            </p>
        )
    }
    return (
        <>
            <SEO title={node.frontmatter.title}/>
            <NavBar/>
            <article id={"blog-post"} className={"para-block"}>
                {title}
                {subtitle}
                {date}
                <div id={"blog-post-main"} className={"para-block"} dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
            <Footer/>
        </>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
      }
      fields {
        date
      }
    }
  }
`