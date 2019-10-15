import React, {Component} from 'react'

class Home extends Component {
  videoStyles = {
    width: '100%',
    height: '700px'
  }
  render() {
    return (
      <div className='row pt-3'>
        <div className='col-9'>
          <iframe src={`https://player.twitch.tv/?channel=${this.props.channels.channelUrl}`} frameBorder="0"
                  allowFullScreen={true} style={this.videoStyles} title='video'/>
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
