import React, {Component} from 'react'
import {isEmpty} from 'lodash'
import Products from 'components/channel/tabs/home/Products'

class Home extends Component {
  videoStyles = {
    width: '100%',
    height: '700px'
  }
  get productListMap() {
    return this.props.products.map((product, idx) => {
      return (
        <Products product={product} key={idx} id={idx} username={this.props.username} />
      )
    })
  }
  get products() {
    return !isEmpty(this.props.products) && (
      <div className='channel-products'>
        {this.productListMap}
      </div>
    )
  }
  render() {
    return (
      <div className='row pt-3'>
        <div className='col-9 position-relative'>
          <iframe src={`https://player.twitch.tv/?channel=${this.props.channels.channelUrl}`} frameBorder="0" allowFullScreen={true} style={this.videoStyles} title='video'/>
          {this.products}
        </div>
        <div className='col-3'>
          <iframe src={`https://www.twitch.tv/embed/${this.props.channels.channelUrl}/chat?darkpopout`} frameBorder="0"
                  style={this.videoStyles} title='chat'/>
        </div>
      </div>
    )
  }
}

export default Home
