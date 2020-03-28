import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './style.css'

const Header = ( ) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      padding: `8px`,
      color: `white`
    }}
  >

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/tags'>Tags</Link></li>
      <li><Link to='/teams'>Teams</Link></li>
    </ul>

  </header>
)

export default Header
