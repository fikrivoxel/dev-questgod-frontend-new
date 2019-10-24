import React, { Component, Fragment } from 'react'
import { isEmpty } from 'lodash'
import Products from 'components/channel/tabs/home/Products'
import {
  Row,
  Col,
  Container, Card, CardImg, CardBody
} from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Product from './Product';


class Home extends Component {
  // videoStyles = {
  //   width: '100%',
  //   height: '700px'
  // }
  get productListMap() {
    return this.props.products.map((product, idx) => {
      return (
        <Products
          product={product}
          key={idx}
          id={idx}
          username={this.props.username}
        />
      )
    })
  }

  get productGridMap() {
    return this.props.products.map((product, idx) => {
      return (
        <Fragment>

          <Card className="card-product col-md-2">
            <p className="title-command">{product.command} {product.status}</p>
            <CardImg className="img-product" top src={product.productImage} alt="stream" />
            <p className="title-content-product">{product.name}</p>
            <p className="title-price-product">Price: ${product.price}</p>
          </Card>

          <Card className="card-product col-md-2">
            <p className="title-command">{product.command} {product.status}</p>
            <CardImg className="img-product" top src={product.productImage} alt="stream" />
            <p className="title-content-product">{product.name}</p>
            <p className="title-price-product">Price: ${product.price}</p>
          </Card>

          <Card className="card-product col-md-2">
            <p className="title-command">{product.command} {product.status}</p>
            <CardImg className="img-product" top src={product.productImage} alt="stream" />
            <p className="title-content-product">{product.name}</p>
            <p className="title-price-product">Price: ${product.price}</p>
          </Card>

          <Card className="card-product col-md-2">
            <p className="title-command">{product.command} {product.status}</p>
            <CardImg className="img-product" top src={product.productImage} alt="stream" />
            <p className="title-content-product">{product.name}</p>
            <p className="title-price-product">Price: ${product.price}</p>
          </Card>

          <Card className="card-product col-md-2">
            <p className="title-command">{product.command} {product.status}</p>
            <CardImg className="img-product" top src={product.productImage} alt="stream" />
            <p className="title-content-product">{product.name}</p>
            <p className="title-price-product">Price: ${product.price}</p>
          </Card>

        </Fragment>
      )
    })
  }

  get products() {
    return !isEmpty(this.props.products) && (
      <div>
        {this.productListMap}
      </div>

    )
  }
  render() {
    console.log('Streams', this.props.streams)
    console.log('Channel', this.props.channels)
    console.log('Product', this.props.products)
    return (
      <Fragment>
        <section id="channel-home">
          <section id="stream-view">

            <Row className="stream-video mt-4">
              <Col md="9" className="stream">
                <iframe src={`https://player.twitch.tv/?channel=${this.props.channels.channelUrl}`} frameBorder="0" allowFullScreen={true} style={this.videoStyles} title='video' />
                <NotificationContainer />
                <div className="stream-product">
                  {this.products}
                </div>
                <div className="stream-info">
                  <div className="game-logo">
                    <img className="img-logo" src={this.props.channels.displayPicture} />
                    <h2 className="title-logo">{this.props.streams.TwitchStreams.title}</h2>
                    <p className="category-logo">{this.props.streams.TwitchStreams.type}</p>
                  </div>
                </div>
              </Col>

              <Col md="3" className="chat">
                <div>
                  <iframe src={`https://www.twitch.tv/embed/${this.props.channels.channelUrl}/chat?darkpopout`} frameBorder="0"
                    style={this.videoStyles} title='chat' />
                </div>
              </Col>
            </Row>

            <Row>
              <Col md="9">
                <h3 className="heading-product">Product</h3>
                {this.productGridMap}
              </Col>

              <Col md="3">

              </Col>
            </Row>


          </section>
        </section>

      </Fragment>
    )
  }
}

export default Home
