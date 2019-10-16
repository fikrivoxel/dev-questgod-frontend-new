import React, {Component} from 'react'
import CreateForm from 'components/create-channel/Form'

class CreateChannel extends Component {

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

export default CreateChannel
