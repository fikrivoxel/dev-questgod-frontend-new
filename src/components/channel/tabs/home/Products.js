import React, {Component, Fragment} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import {Tooltip} from 'reactstrap'

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
       <Tag {...this.tagProps} className='channel-products-list' id={`Tooltip-${this.props.id}`}>
         <img src={this.props.product.productImage} alt={this.props.product.productImage} className='channel-products-img'/>
       </Tag>
       {
         isEmpty(this.props.users.token) && (
           <Tooltip placement='right' isOpen={this.state.toolTipOpen} target={`Tooltip-${this.props.id}`} toggle={this.toggleTooltip}>
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
