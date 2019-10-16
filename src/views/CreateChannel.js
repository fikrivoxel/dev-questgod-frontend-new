import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isEqual} from 'lodash'
import CreateForm from 'components/create-channel/Form'

class CreateChannel extends Component {
  componentDidMount() {
    this.checkInfluencers()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!isEqual(prevProps.users, this.props.users)) {
      this.checkInfluencers()
    }
  }
  checkInfluencers() {
    if (this.props.users.data.influencer) {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div className='create-channel container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <CreateForm />
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
)(CreateChannel)
