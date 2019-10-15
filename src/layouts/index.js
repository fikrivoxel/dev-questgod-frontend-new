import React, {Component} from 'react'
import AuthLayout from 'layouts/AuthLayout'
import NormalLayout from 'layouts/NormalLayout'

class Layouts extends Component {
  layouts = {
    AuthLayout, NormalLayout
  }
  render() {
    let Layout = this.layouts[`${this.props.is}Layout`]
    return (
      <Layout>
        {this.props.children}
      </Layout>
    )
  }
}

export default Layouts
