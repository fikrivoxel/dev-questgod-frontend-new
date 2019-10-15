import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class List extends Component {
  render() {
    let {stream} = this.props
    let thumbnail = stream.TwitchStreams.data[0].thumbnail_url.replace('{width}', '500').replace('{height}', '272')
    return (
      <div className='card'>
        <img src={thumbnail} className='card-img-top' alt='stream'/>
        <div className='card-body'>
          <Link to={`/channel/${stream.channel.userName}`} className="h5 card-title d-block mb-0">
            {stream.TwitchStreams.data[0].title}
          </Link>
        </div>
      </div>
    )
  }
}

export default List
