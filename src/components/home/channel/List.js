import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class List extends Component {
  render() {
    let {stream} = this.props
    let thumbnail = stream.TwitchStreams.data[0].thumbnail_url.replace('{width}', '500').replace('{height}', '272')
    return (
        <Card className="card-test">
            {/* <img className="icon-channel" src={`images/${streamType}-logo.png`} />           */}
            <CardImg className="video-yt" top src={thumbnail} alt="stream"/>
              <CardBody>
                <img className="avatar" src={stream.channel.displayPicture} width="100%"  />
                <Link to={`/channel/${stream.channel.userName}`} >                
                  <p className="title-content">{stream.TwitchStreams.data[0].title}</p>
                </Link>
                <p className="title-channel">By: CSL_GO</p>
                <p className="title-mode">Stream: Twitch</p>
            </CardBody>
        </Card>
    )
  }
}

export default List;
