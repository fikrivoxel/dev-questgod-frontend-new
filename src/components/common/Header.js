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
  // components = {
  //   IsLogin: <IsLogin />,
  //   IsntLogin: <IsntLogin/>
  // }
  state = {
    isOpen: false
  }
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);

    this.handleToggleOpen = this.handleToggleOpen.bind(this)
  }

  handleScroll() {
    if (window.scrollY < 50) {
      this.setState({bgColor: this.props.primaryColor})
    } else if (window.scrollY < 100) {
      this.setState({bgColor: this.props.secondaryColor});
    } else {
      this.setState({bgColor: this.props.treeColor});
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      // <Navbar color='dark' dark expand='md' fixed='top'>
      //   <div className="navbar-brand">
      //     <Link to={'/'}>
      //       <img src={'/images/quest-god-logo.png'} style={{width: '60%'}}/>
      //     </Link>
      //   </div>
      //   <NavbarToggler onClick={this.handleToggleOpen} />
      //   <Collapse isOpen={this.state.isOpen} navbar>
      //     {this.props.users.isLogin ? this.components.IsLogin : this.components.IsntLogin}
      //   </Collapse>
      // </Navbar>

      <Navbar id="navbar" style={{background: this.state.bgColor}}>
        <div className="navbar-brand">
          <Link to={'/'}>
            <img src={'/images/quest-god-logo.png'}/>
          </Link>
        </div>

        <div className="user-info">
          <Link className="link" to={'/create-channel'}>
            <span className="icon-flash"></span>
          </Link>
          <span className="icon-bell"></span>
          {this.props.users.isLogin ? 
            <IsLogin />
            :
            <IsntLogin />
          }
           {/* this.components.IsLogin : this.components.IsntLogin} */}
        </div>
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
