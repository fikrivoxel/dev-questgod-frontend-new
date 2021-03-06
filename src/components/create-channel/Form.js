import React, {Component} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setDataInfluencer} from 'store/actions/usersActions'
import Channels from 'api/Channels'

class Form extends Component {
  get channelName() {
    return document.getElementById('channel-input').value
  }
  constructor(props) {
    super(props)
    this.handleSubmitCreate = this.handleSubmitCreate.bind(this)
  }
  async handleSubmitCreate(e) {
    e.preventDefault()
    try {
      await Channels.createChannel(
        this.props.users.token,
        this.channelName,
        this.props.users.data.userName
      )
      this.props.setDataInfluencer(true)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <form action='#' className='card mt-3' onSubmit={this.handleSubmitCreate}>
        <div className='card-header'>
          Create Channel
        </div>
        <div className='card-body'>
          <div className='form-group row mb-0'>
            <label htmlFor='channel-input' className='col-form-label col-2'>
              Channel
            </label>
            <div className='col-10'>
              <input type="text" className='form-control' id='channel-input'/>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-primary'>
            Create
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.usersReducers
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({setDataInfluencer}, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Form)
