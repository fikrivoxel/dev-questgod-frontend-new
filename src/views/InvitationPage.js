import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isEmpty, isEqual} from 'lodash'
import Auth from 'api/Auth'
import Term from 'components/invitation/Term'
import Invite from 'components/invitation/Invite'

class InvitationPage extends Component {
  get invite() {
    return localStorage.getItem('invite')
  }
  get renderView() {
    if (!isEmpty(this.props.users.token)) {
      if (!isEmpty(this.invite))
        return <Term invitekey={this.props.match.params.invitationKey} history={this.props.history} token={this.props.users.token}/>
    }
    return <Invite invitekey={this.props.match.params.invitationKey}/>
  }
  async componentDidMount() {
    this.checkLocalStorage()
    await this.checkValidationKey()
  }
  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.users, this.props.users)) {
      this.checkLocalStorage()
    }
  }
  checkLocalStorage() {
    if (!isEmpty(this.props.users.token)) {
      if (isEmpty(this.invite)) return this.props.history.push('/')
    }
  }
  async checkValidationKey() {
    if (!isEmpty(this.props.users.token)) return
    try {
      let key = this.props.match.params.invitationKey
      await Auth.checkToken(key)
    } catch (err) {
      return this.props.history.push('/')
    }
  }
  render() {
    return (
      <div className='invitation container-fluid'>
        <div className='row'>
          <div className='col-12'>
            {this.renderView}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.usersReducers
  }
}

export default compose(
  connect(mapStateToProps)
)(InvitationPage)
