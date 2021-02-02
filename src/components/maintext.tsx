import * as React from "react"
import { Link } from "gatsby";

import "./maintext.component.sass"

const NavBar = ({}) => (
    <nav id={"nav-bar"}>
        <Link to={"/"} id={"nav-home"}>Sharzy</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/about"}>About</Link>
    </nav>
)

export default NavBar
