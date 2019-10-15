import React, {Component} from 'react'

class Info extends Component {
  stylesImg = {
    marginLeft: 'auto',
    width: '60px',
    height: '60px',
    borderRadius: '50%'
  }
  render() {
    return (
      <div className='row pt-3'>
        <div className='col-12'>
          <div className='card mb-3'>
            <img src={this.props.channels.channelBanner} alt={this.props.channels.channelName} className='card-img-top'/>
            <div className='card-body'>
              <div className='card-title d-flex align-items-center mb-0'>
                <h3 className='mb-0'>
                  {this.props.channels.channelName}
                </h3>
                <img src={this.props.channels.displayPicture} alt={this.props.channels.channelName} style={this.stylesImg}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Info
