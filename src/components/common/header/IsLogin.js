import React, {Component} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'
import {pick} from 'lodash'
import {removeStorage} from 'store/actions/usersActions'

class IsLogin extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout() {
    this.props.usersRemoveStorage()
  }
  render() {
    return (
      <Nav className='ml-auto' navbar>
        <NavItem>
          <Link to='/create-channel' className='nav-link'>
            Create Channel
          </Link>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {this.props.users.data.displayName}
          </DropdownToggle>
          <DropdownMenu right>
            <button type='button' className='dropdown-item' onClick={this.handleLogout}>
              Logout
            </button>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: pick(state.usersReducers, [
      'token',
      'data'
    ])
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    usersRemoveStorage: removeStorage
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(IsLogin)
