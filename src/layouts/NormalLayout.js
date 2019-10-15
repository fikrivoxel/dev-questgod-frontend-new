import React, {Component, Fragment} from 'react'
import Header from 'components/common/Header'

class NormalLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='root-content'>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default NormalLayout
