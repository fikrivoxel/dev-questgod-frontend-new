import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Navbar,
  NavbarToggler,
  Collapse
} from 'reactstrap'
import {pick, isEmpty} from 'lodash'
import IsLogin from 'components/common/header/IsLogin'
import IsntLogin from 'components/common/header/IsntLogin'

class Header extends Component {
  components = {
    IsLogin: <IsLogin />,
    IsntLogin: <IsntLogin/>
  }
  state = {
    isOpen: false
  }
  constructor(props) {
    super(props)
    this.handleToggleOpen = this.handleToggleOpen.bind(this)
  }
  handleToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <Navbar color='dark' dark expand='md' fixed='top'>
        <Link to='/' className='navbar-brand'>
          Logo
        </Link>
        <NavbarToggler onClick={this.handleToggleOpen} />
        <Collapse isOpen={this.state.isOpen} navbar>
          {this.props.users.isLogin ? this.components.IsLogin : this.components.IsntLogin}
        </Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: {
      ...pick(state.usersReducers, [
        'token',
        'data'
      ]),
      get isLogin() {
        return !isEmpty(state.usersReducers.token)
      }
    }
  }
}

export default compose(
  connect(mapStateToProps)
)(Header)
