import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header"> 
    <div className="HeaderGroup">
    <Link to="/Bio">Bio</Link>
    <Link to="/Purpose">Purpose</Link>
    <Link to="/Contact"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header
