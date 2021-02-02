import * as React from "react"
import { Link } from "gatsby";

import "./navbar.component.sass"
import { brand_title } from "./brand";

const NavBar = ({}) => (
    <nav id={"nav-bar"}>
        <Link to={"/"} id={"nav-home"}>{brand_title}</Link>
        <span style={{flex: 1}}/>
        <Link to={"/blog"} className={"nav-item live-link"}>Blog</Link>
        <Link to={"/about"} className={"nav-item live-link"}>About</Link>
    </nav>
)

export default NavBar
