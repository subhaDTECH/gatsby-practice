import * as React from "react"
import { Link } from "gatsby"


const myStyle={
  
    
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-evenly`,
    backgroundColor:`blue`,
    width:`100%`,
    color:`white`
  
}
const linkstyle={
  fontSize: `var(--font-sm)`,
  textDecoration: `none`,
  display:`flex`,
  color:`white`

}
const Header = ({ siteTitle }) => (
  <header
    style={{
      margin:`0`,
      padding:`0`,
      display: `flex`,
      height:`120px`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div style={{width:"30%" , backgroundColor:"blue",color:"white", textAlign:"center"}}>
     Navbar
    </div>
     <div style={myStyle}>


     <Link 
    style={linkstyle}
    to="/">
      Home
    </Link>
     <Link 
    style={linkstyle}
    to="/about">
    About
    </Link>

   <Link 
     style={linkstyle}
    to="/service">
       Service
    </Link>

    <Link 
    style={linkstyle}
    to="/contact">
      contact
    </Link>
     </div>
    
  </header>
)

export default Header
