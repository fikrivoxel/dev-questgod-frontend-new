import React, {Component} from 'react'
import {forEach} from 'lodash'

class Authentication extends Component {
  componentDidMount() {
    this.setStorage()
    window.close()
  }
  setStorage() {
    let queryStr = this.props.location.hash.replace(/^.{1}/g, '')
    let items = queryStr.split('&'), queryParams = {}
    forEach(items, item => {
      let [key, val] = item.split('=')
      queryParams[key] = val
    })
    if (queryParams.success) {
      let token = queryParams.token
      let isNew = queryParams.isNew
      let invite = queryParams.invite
      localStorage.setItem('token', token)
      if (isNew === 'true') localStorage.setItem('isNew', isNew)
      if (invite !== 'undefined' || invite !== 'false') localStorage.setItem('invite', invite)
    }
  }
  render() {
    return (
      <div className='auth'>

      </div>
    )
  }
}

export default Authentication
