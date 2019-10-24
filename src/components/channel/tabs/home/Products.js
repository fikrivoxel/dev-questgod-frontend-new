import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { Button, Tooltip } from 'reactstrap'
import {
  Row,
  Col,
  Container, Card, CardImg, CardBody
} from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props)
    this.toggleTooltip = this.toggleTooltip.bind(this)
  }
  get tag() {
    if (!isEmpty(this.props.users.token)) {
      if (
        this.props.users.data.userName !== this.props.username
      ) {
        return 'button'
      }
    }
    return 'span'
  }
  get tagProps() {
    let props = {}
    if (!isEmpty(this.props.users.token)) {
      if (
        this.props.users.data.userName !== this.props.username
      ) {
        props.onClick = this.handleClickProduct.bind(this)
      }
    }
    return props
  }
  
  handleClickProduct() {

  }
  state = {
    toolTipOpen: false
  }
  toggleTooltip() {
    this.setState({
      toolTipOpen: !this.state.toolTipOpen
    })
  }
  render() {
    let Tag = this.tag
    return (
      <Fragment>
        
          {/* <Button {...this.tagProps} id={`Tooltip-${this.props.id}`}>
            <img src={this.props.product.productImage} alt={this.props.product.productImage} className="item btn" />
         </Button> */}

         <Card {...this.tagProps} id={`Tooltip-${this.props.id}`} className="card-product-side">
            {/* <Tag> */}
            {/* <p className="title-command-side">{this.props.product.command}</p> */}
            <CardImg className="img-product-side" top src="https://placeimg.com/640/480/any" alt="stream" />
            <CardBody style={{padding: "0em"}}>
              <p className="title-content-product-side">{this.props.product.name}</p>
              <p className="title-price-product-side">${this.props.product.price}</p>
            </CardBody>
            {/* </Tag> */}
          </Card>


          {
            ( isEmpty(this.props.users) || isEmpty(this.props.users.token)) && (
              <Tooltip className="tooltipe" placement='right' isOpen={this.state.toolTipOpen} target={`Tooltip-${this.props.id}`} toggle={this.toggleTooltip}>
                Silahkan login telebih dahulu
              </Tooltip>
            )
          }
          {
            (this.props.users.data.userName === this.props.username) && (
              <Tooltip placement='right' isOpen={this.state.toolTipOpen} target={`Tooltip-${this.props.id}`} toggle={this.toggleTooltip}>
                Anda tidak bisa membeli product anda sendiri
           </Tooltip>
            )
          }

      </Fragment>
        )
    }

}

const mapStateToProps = function (state) {
  return {
    users: state.usersReducers
  }
}

export default compose(
  connect(mapStateToProps)
)(Products)
