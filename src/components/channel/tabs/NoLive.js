import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

class NoLive extends Component {
  render() {
    return (
      <div className="col-md-12">
        <Row>
          <Col md="12">
          <img className="offline mt-12" alt="stream-offline" style={{width:"100%", marginLeft: "auto", marginRight: "auto"}} src="https://images.movegraph.com/images/uploads/20180412185915/MG_Art_B3_BONO-Purple.jpg"/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NoLive
