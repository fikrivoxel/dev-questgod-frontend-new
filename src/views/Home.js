import React, {Component, Fragment} from 'react'
import Content from 'components/home/Content'
import Channel from 'components/home/Channel'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        <Channel />
      </Fragment>
    )
  }
}

export default Home
