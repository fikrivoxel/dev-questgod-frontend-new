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

    // this.handleClick = this.handleClick.bind(this);
    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
    // this.handleTwitchRegistration = this.handleTwitchRegistration.bind(this);
    // this.state = {
    //   display: this.props.display
    // }
  }

  // handleClick() {
  //   if (!this.state.display) {
  //     document.addEventListener('click', this.handleOutsideClick, false);
  //   } else {
  //     document.removeEventListener('click', this.handleOutsideClick, false);
  //   }
  //   this.setState(prevState => ({
  //     display: !prevState.display
  //   }));
  // }

  // handleOutsideClick(e) {
  //   if (this.node.contains(e.target)) return
  //   this.handleClick();
  // }

  handleLogin(e) {
    e.preventDefault()
    window.open(TWITCH_AUTH, '_blank', 'toolbar=yes,scrollbars=yes, location=0,resizable=no,width=500,height=800')
  }

  // async handleTwitchRegistration(e) {
  //   e.preventDefault();
  //   return window.open('https://id.twitch.tv/oauth2/authorize?&client_id=r0je60ik0m7j51kvv9rbljqwlmreo7&redirect_uri=https://api.questgod.com/restapi_0/auth/registration/twitch&response_type=code&scope=user:read:email+analytics:read:extensions+channel:read:subscriptions+analytics:read:games+user:read:broadcast&state=user', '_blank', 'toolbar=yes,scrollbars=yes, location=0,resizable=no,width=500,height=800')
  // }
  render() {
    // const {handleEmailLogin, handleGoogleLogin, handleInputChange, handleClick, handleOutsideClick} = this.props;
    return (
      // <Nav className='ml-auto' navbar>
      //   <NavItem>
      //     <NavLink href='#' onClick={this.handleLogin}>
      //       Login
      //     </NavLink>
      //   </NavItem>
      //   <NavItem>
      //     <Link to='/registration' className='nav-link'>
      //       Sign Up
      //     </Link>
      //   </NavItem>
      // </Nav>

      <div className="header-login font-tahoma">
         <img className="img-login" src="/images/twitch-icon.png"/>

         <a href='#' className="btn btn-login" onClick={this.handleLogin}>LOGIN</a>
        
        {/* <Link to={'/registration'} className="btn btn-signup">SIGN UP</Link> */}
        {/* <button className="SignBtn SignBtn--twitch" onClick={this.handleLogin}>
         Connect Twitch.tv
        </button> */}

       
        {/* <div className="login-popup"
             style={{display: this.state.display ? 'block' : 'none'}}
             ref={node => {
               this.node = node
             }}>
                          <form onSubmit={handleEmailLogin}>
                          <button className="loginBtn loginBtn--twitch" onClick={this.handleLogin}>
              Login with Twitch.Tv
            </button>
              </form>
        </div> */}
      </div>

    )
  }
}

export default IsntLogin
