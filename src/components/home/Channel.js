import React, {Component} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getLiveAllStreams, removeListStreams} from 'store/actions/streamsActions'
import List from 'components/home/channel/List'


class Channel extends Component {
  async componentDidMount() {
    await this.getAllStreams()
  }
  componentWillUnmount() {
    this.props.removeListStreams()
  }
  async getAllStreams() {
    try {
      await this.props.getLiveAllStreams()
    } catch (err) {
      console.log(err)
    }
  }
  get channelView() {
    return this.props.streams.map((stream, idx) => {
      return (
        <div className='col-3' key={idx}>
          <List stream={stream} />
        </div>
      )
    })
  }
  render() {
    return (
      <section className='home-channel container-fluid' id='home-channel'>
        <div className='row'>
          {this.channelView}
        </div>
      </section>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    streams: state.streamsReducers.list
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getLiveAllStreams,
    removeListStreams
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Channel)
