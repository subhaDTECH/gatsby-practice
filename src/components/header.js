import * as React from "react"
import { Link } from "gatsby"
import { myStyle, linkstyle, titleStyle, myHeader, HeadNav } from "../components/myheader.module.css";

const Header = ({ siteTitle }) => (
  <header className={myHeader}>
    <div className={HeadNav}>
      <h2 className={titleStyle}>Gatsby</h2>
    </div>
    <div className={myStyle}>


      <Link
        className={linkstyle}
        to="/">
        Home
      </Link>
      <Link
        className={linkstyle}
        to="/about">
        About
      </Link>

      <Link
        className={linkstyle}
        to="/service">
        Service
      </Link>

      <Link
        className={linkstyle}
        to="/partner">
        Partner
      </Link>

      <Link
        className={linkstyle}
        to="/contact">
        Contact
      </Link>
    </div>

  </header>
)

export default Header
