import * as React from "react"
import { Link } from "gatsby"

import "../style/index.sass"

import SEO from "../components/seo"
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const IndexPage = () => (
    <>
        <SEO title={"Musicbox"}/>
        <div id={"body"}>
            <NavBar/>
            <main id={"main-wrapper"}>
                <div id={"brand"}>
                    <h1 id={"brand-title"} style={{color: 'var(--color-brand)'}}>
                        Under construction
                    </h1>
                    <h2 id={"brand-subtitle"}>
                        Sharzy has no idea on it yet.
                    </h2>
                </div>
                <div id={"site-entries-list"}>
                    <Link to={"/"}>Homepage</Link>
                </div>
            </main>
            <Footer/>
        </div>
    </>
)

export default IndexPage
