import React, {Component} from 'react'
import Auth from 'api/Auth'

class Term extends Component {
  constructor(props) {
    super(props)
    this.handleClickRefuse = this.handleClickRefuse.bind(this)
    this.handleClickAccept = this.handleClickAccept.bind(this)
  }
  handleClickRefuse() {
    localStorage.removeItem('isNew')
    localStorage.removeItem('invite')
    this.props.history.push('/')
  }
  async handleClickAccept() {
    try {
      await Auth.claimKey(this.props.invitekey, this.props.token)
    } catch (err) {
      console.log(err)
    }
    this.props.history.push('/')
  }
  render() {
    return (
      <div className='card mt-3'>
        <div className='card-header'>
          Term
        </div>
        <div className='card-body'>
          <button type='button' className='btn btn-primary'>
            Accept
          </button>
          <button type='button' className='btn btn-danger'>
            Refuse
          </button>
        </div>
      </div>
    )
  }
}

export default Term
