import * as React from "react"
import { graphql } from "gatsby"

import "katex/dist/katex.min.css"
import "../style/global.sass"
import "../style/blog-post.sass"
import "../style/syntax-highlighting.sass"

import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <>
            <NavBar/>
            <article id={"blog-post"}>
                <h1 id={"blog-post-title"}>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`