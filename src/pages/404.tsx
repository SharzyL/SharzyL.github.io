import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import "../style/index.sass"
import "../style/global.sass"
import "katex/dist/katex.min.css"
import Footer from "../components/footer";

const IndexPage = () => (
    <>
        <div id={"body"}>
            <nav/>
            <main id={"main-wrapper"}>

                <h1 id={"index-prompt"}>
                    404: <span style={{fontWeight: 300}}>Page not found</span>
                </h1>

                <div id={"site-entries-list"}>
                    <Link to={"/"}>Homepage</Link>
                </div>
            </main>
            <Footer/>
        </div>
    </>
)

export default IndexPage
