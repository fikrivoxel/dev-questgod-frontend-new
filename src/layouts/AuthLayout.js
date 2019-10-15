import React, {Component, Fragment} from 'react'

class AuthLayout extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default AuthLayout
