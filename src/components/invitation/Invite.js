import React, {Component} from 'react'
import {TWITCH_AUTH} from 'globals.js'

class Invite extends Component {
  constructor(props) {
    super(props)
    this.handleClickSignup = this.handleClickSignup.bind(this)
  }
  handleClickSignup() {
    window.open(`${TWITCH_AUTH}|${this.props.inviteKey}`, '_blank', 'toolbar=yes,scrollbars=yes, location=0,resizable=no,width=500,height=800')
  }
  render() {
    return (
      <div className='card mt-3'>
        <div className='card-header'>
          Invite
        </div>
        <div className='card-body'>
          <button type='button' className='btn btn-primary' onClick={this.handleClickSignup}>
            Sign Up With Key
          </button>
        </div>
      </div>
    )
  }
}

export default Invite
