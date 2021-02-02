import * as React from "react"
import { Link } from "gatsby"

import "../style/index.sass"
import "../style/global.sass"
import Footer from "../components/footer";
import { brand_title, brand_subtitle } from "../components/brand";

const IndexPage = () => (
    <>
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
                    <Link to={"/"}>Music Box</Link>
                </div>
            </main>
            <Footer/>
        </div>
    </>
)

export default IndexPage
