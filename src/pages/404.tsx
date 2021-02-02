import * as React from "react"
import { Link } from "gatsby"

import "../style/index.sass"
import "../style/global.sass"
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const IndexPage = () => (
    <>
        <div id={"body"}>
            <NavBar/>
            <main id={"main-wrapper"}>
                <div id={"brand"}>
                    <h1 id={"brand-title"} style={{color: 'var(--color-brand)'}}>
                        404
                    </h1>
                    <h2 id={"brand-subtitle"}>
                        Oblivious page here…
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
