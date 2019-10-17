import React, {Component, Fragment} from 'react'
import Content from 'components/home/Content'
import Channel from 'components/home/Channel'
import Header from 'components/common/Header'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header
                    primaryColor='rgba(0,0,0,.4)'
                    secondaryColor='rgba(0,0,0,.5)'
                    treeColor='#0F0F11'
                />
        <Content />
        <Channel />
      </Fragment>
    )
  }
}

export default Home
