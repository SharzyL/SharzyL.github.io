import * as React from "react"
import { graphql } from "gatsby"

import "katex/dist/katex.min.css"
import "../style/blog-post.sass"

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import SEO from "../components/seo"

const makeToc = (headings) => {
    const makeOneToc = ({depth, value}) => {
        const headerID = value.toLowerCase()
            .split(' ').join('-')
            .replace(/[!?.,]/g, '')
        const jumpToToc = () => {
            const jumpLen = document.getElementById(headerID).getBoundingClientRect().top
            window.scrollBy({
                top: jumpLen - 15,
                left: 0,
                behavior: 'smooth'
            })
        }
        return <div
            key={headerID}
            className={`post-toc-item post-toc-item-h${depth}`}
            onClick={jumpToToc}>{value}</div>
    }
    return headings
        .filter((heading) => heading.depth <= 4)
        .map(makeOneToc)
}

export default ({ data }) => {
    const node = data.markdownRemark
    const title = <h1 id={"blog-post-title"} className={"h-centering inner-block"}
                      style={{
                          color: "var(--color-brand)"
                      }}
                      dangerouslySetInnerHTML={{ __html: node.frontmatter.title}}/>
    let subtitle = <></>
    let date = <></>
    let toc = <></>

    if (node.frontmatter.subtitle) {
        subtitle = <h2 id={"blog-post-subtitle"} className={"h-centering inner-block"}
                       style={{
                           color: "var(--color-base)",
                           fontSize: "var(--fontsize-h3)"
                       }}
                       dangerouslySetInnerHTML={{__html: node.frontmatter.subtitle}}/>
    }
    if (node.fields.date) {
        date = (
            <p id={"blog-post-info"}
               style={{
                   color: "var(--color-base)"
               }}
               className={"h-centering inner-block"}
            >
                Posted on <span id={"blog-post-date"} style={{color: "var(--color-brand-dark"}}>
                    {(new Date(node.fields.date)).toLocaleDateString()}
                </span>
            </p>
        )
    }
    if (node.headings.length) {
        toc = (
            <div id={"blog-post-toc-container"}
                 style={{
                     position: "absolute",
                     top: 0,
                     height: "100%",
                     left: "calc((100vw + var(--metric-stretchout-width)) / 2 + var(--metric-unit-spacing))",
                 }}>
                <div id={"blog-post-toc"}
                     style={{
                         top: "var(--metric-unit-spacing)",
                         position: "sticky",
                     }}>
                    <p style={{
                        fontSize: "var(--fontsize-h6)"
                    }}>Contents</p>
                    {makeToc(node.headings)}
                </div>
            </div>
        )
    }

    // When articles with alternative language is added, lang should be changed
    return (
        <>
            <SEO title={node.frontmatter.title} description={node.excerpt}/>
            <NavBar/>
            <article id={"blog-post"} className={"para-block"} lang={"zh"}
                     style={{
                         color: "var(--color-base)",
                         position: "relative",
                         width: "100%"
             }}>
                {title}
                {subtitle}
                {date}
                <div id={"blog-post-main"} style={{position: "relative"}}>
                    {toc}
                    <div id={"blog-post-content"} className={"para-block"}
                         dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
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
      headings {
        depth
        value
      }
      excerpt(truncate:true)
    }
  }
`