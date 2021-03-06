import * as React from "react"
import { Link } from "gatsby"

import "../style/index.sass"
import SEO from "../components/seo"
import Footer from "../components/footer";

import { brand_title, brand_subtitle } from "../components/brand";

const IndexPage = () => (
    <>
        <SEO title={"Sharzy's Homepage"}/>
        <div id={"body"}>
            <main id={"main-wrapper"}>
                <div id={"brand"}>
                    <h1 id={"brand-title"}>
                        {brand_title}
                    </h1>
                    <h2 id={"brand-subtitle"}>
                        {brand_subtitle}
                    </h2>
                </div>

                <div id={"site-entries-list"}>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/musicbox"}>Music Box</Link>
                </div>
            </main>
            <Footer/>
        </div>
    </>
)

export default IndexPage
