import React, {Component} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {has} from 'lodash'
import {getChannelData, removeDataChannels} from 'store/actions/channelsActions'
import {getLiveStreamsByChannels, removeDataStreams} from 'store/actions/streamsActions'
import {getProductsByStream, removeListProducts} from 'store/actions/productsActions'
import Info from 'components/channel/Info'
import Tabs from 'components/channel/Tabs'

class Channel extends Component {
  state = {
    isLoading: false
  }
  async componentDidMount() {
    this.setIsLoading(true)
    await this.getChannel()
    await this.getLiveChannels()
    await this.getProducts()
    this.setIsLoading(false)
  }
  componentWillUnmount() {
    this.props.removeDataChannels()
    this.props.removeDataStreams()
    this.props.removeListProducts()
  }
  async getChannel() {
    try {
      let username = this.props.match.params.channelUsername
      await this.props.getChannelData(username)
    } catch (err) {
      this.setIsLoading(false)
      this.props.history.push('/')
    }
  }
  async getLiveChannels() {
    let username = this.props.match.params.channelUsername
    await this.props.getLiveStreamsByChannels(username)
  }
  async getProducts() {
    if (!has(this.props.streams, 'QGStreams')) return
    let {QGStreams} = this.props.streams
    await this.props.getProductsByStream(QGStreams._id)
  }
  setIsLoading(bol) {
    this.setState({
      isLoading: bol
    })
  }
  render() {
    if (this.state.isLoading) return (
      <div className='channel container-fluid'>
        Loading...
      </div>
    )
    return (
      <div className='channel container-fluid'>
        <Info channels={this.props.channels}/>
        <Tabs streams={this.props.streams} products={this.props.products} channels={this.props.channels} username={this.props.match.params.channelUsername} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    channels: state.channelsReducers.data,
    streams: state.streamsReducers.data,
    products: state.productsReducers.list
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getChannelData,
    removeDataChannels,
    getLiveStreamsByChannels,
    removeDataStreams,
    getProductsByStream,
    removeListProducts
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Channel)
