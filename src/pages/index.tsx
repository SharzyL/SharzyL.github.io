import * as React from "react"
import { Link } from "gatsby"

import "../style/index.sass"
import "../style/global.sass"
import Footer from "../components/footer";

const IndexPage = () => (
    <>
        <div id={"body"}>
            <nav/>
            <main id={"main-wrapper"}>
                <div id={"brand"}>
                    <h1 id={"brand-title"}>
                        Sharzy
                    </h1>
                    <h2 id={"brand-subtitle"}>
                        21<sup>st</sup> century schizoid man
                    </h2>
                </div>

                <div id={"site-entries-list"}>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/"}>About</Link>
                    <Link to={"/"}>Music Box</Link>
                </div>
            </main>
            <Footer/>
        </div>
    </>
)

export default IndexPage
