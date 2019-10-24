import React, {Component, Fragment} from 'react'
import List from 'components/home/channel/List'
import {
  Row,
  Col,
  Container
} from 'reactstrap';


class Channel extends Component {
  get channelView() {
    return this.props.streams.map((stream, idx) => {
      return (
        
        
        <div className='col-md-3' key={idx}>
          <List stream={stream} />
        </div>
       
      )
    })
  }
  render() {
    console.log()
    return (
      <Fragment>
      {/* <section className='home-channel container-fluid' id='home-channel'>
        <div className='row'>
        {this.channelView}          
        </div>
      </section> */}

      <section id="featured-channel">
            <div className="heading">
                <h3>Recommended Channel</h3>
                <form>
                    {/* <input type="search" value="" placeholder="Search..." />
                    <input type="submit" className="icon-search" /> */}
                    <input className="search" type="search" placeholder="Search something here ..." required/>	
                    <input className="button" type="submit" value="Search" />		
                </form>
            </div>

            <div className="content">
                <Row>
                {this.channelView}
                </Row>
            </div>
        </section>
      </Fragment>
    )
  }
}



export default Channel;
