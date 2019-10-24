import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ImageUploader from 'react-images-upload';

class Info extends Component {
  // stylesImg = {
  //   marginLeft: 'auto',
  //   width: '60px',
  //   height: '60px',
  //   borderRadius: '50%'
  // }
  render() {
    return (
      <section id="channel-info">
        <div className="channel-banner">
          <img src={this.props.channels.channelBanner} />
        </div>

        <div className="channel-heading mt-4">
          <Row>
            {/* <Col md="12" className="first-column">
              <div className="logo-wrapper">
                <img src={this.props.channels.displayPicture} />
                <ImageUploader
                  withIcon={false}
                  buttonText='Upload'
                  onChange={this.props.channels.channelBanner}
                  imgExtension={['.jpg', '.png']}
                  maxFileSize={256000}
                />
              </div>
            </Col> */}

            <Col md="12" className="last-column">
              <div className="logo-wrapper">
                <img src={this.props.channels.displayPicture} />
                <ImageUploader
                  withIcon={false}
                  buttonText='Upload'
                  onChange={this.props.channels.channelBanner}
                  imgExtension={['.jpg', '.png']}
                  maxFileSize={256000}
                />
              </div>
              <h2 className="mb-0">{this.props.channels.channelName}</h2>
              <span className="username">@{this.props.channels.userName}</span>
              <button className="subscribe">
                SUBSCRIBE <span className="follow-count">{this.props.channels.followers}</span>
              </button>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}

export default Info
