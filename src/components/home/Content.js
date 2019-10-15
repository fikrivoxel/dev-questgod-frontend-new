import React, {Component} from 'react'

class Content extends Component {
  constructor(props) {
    super(props)
    this.handleClickDown = this.handleClickDown.bind(this)
  }
  handleClickDown() {
    window.scroll({
      top: document.getElementById('home-channel').offsetTop,
      behavior: 'smooth'
    })
  }
  render() {
    return (
      <section className='home-content'>
        <div className='home-button-down'>
          <button type='button' className='btn-home-down' onClick={this.handleClickDown}>
            To Bottom
          </button>
        </div>
      </section>
    )
  }
}

export default Content
