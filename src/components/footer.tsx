import * as React from "react"
import { Link } from "gatsby";

import "./footer.component.sass"

const Footer = ({}) => (
    <footer>
        <p>
            Designed by <a href={"https://github.com/SharzyL"}>Sharzy</a>.
            Powered by <a href={"https://www.gatsbyjs.com/"}>Gatsby</a>.
            Hosted on <a href={"https://github.io"}>Github Pages</a>.
        </p>
        <p>
            Content on this site is licensed under <a href={"https://creativecommons.org/licenses/by/4.0/"}>CC BY 4.0</a> unless specified.
        </p>
        <p>
            Subscribe this site via <Link to={"/feed.xml"}>RSS</Link>.
        </p>
    </footer>
)

export default Footer
