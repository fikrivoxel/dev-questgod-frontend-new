import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import {TWITCH_AUTH} from 'globals.js'

class IsntLogin extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin(e) {
    e.preventDefault()
    window.open(TWITCH_AUTH, '_blank', 'toolbar=yes,scrollbars=yes, location=0,resizable=no,width=500,height=800')
  }
  render() {
    return (
      <Nav className='ml-auto' navbar>
        <NavItem>
          <NavLink href='#' onClick={this.handleLogin}>
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <Link to='/registration' className='nav-link'>
            Sign Up
          </Link>
        </NavItem>
      </Nav>
    )
  }
}

export default IsntLogin
