import React, { Component } from 'react';
import Slider from 'react-slick';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Content extends Component {
  // constructor(props) {
  //   super(props)
  //   this.handleClickDown = this.handleClickDown.bind(this)
  // }
  // handleClickDown() {
  //   window.scroll({
  //     top: document.getElementById('featured-channel').offsetTop,
  //     behavior: 'smooth'
  //   })
  // }
  state = {
    activeSlide: 0
  }

  videos = [
    'https://player.twitch.tv/?channel=esl_csgo',
    'https://player.twitch.tv/?channel=twotaptony',
    'https://player.twitch.tv/?channel=esl_csgo',
    'https://player.twitch.tv/?channel=jennajulien',
  ]
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: false,
      focusOnSelect: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: '50px',
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      afterChange: (current) => {
        this.setState({
          activeSlide: current
        })
        console.log(this.state.activeSlide)
      }
      // responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         arrows: false,
      //         centerMode: true,
      //         centerPadding: '40px',
      //         slidesToShow: 3
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         arrows: false,
      //         centerMode: true,
      //         centerPadding: '40px',
      //         slidesToShow: 3
      //       }
      //     }
      //   ]
    }
    return (
      <section id="featured-content">
        <div className="content">
          <h2>HIGHLIGHTED GOD</h2>
          <div className="slider">
            <Slider {...settings}>
              {this.videos.map((video, index) => {
                if (index == this.state.activeSlide) {
                  console.log('autoplay')
                  return (
                    <div className="videoWrapper" >
                      <iframe preload="auto" src={`${video}&autoplay=false`} frameborder="0" allowfullscreen="true"  ></iframe>
                    </div>
                  )
                }
                return (
                  <div className="videoWrapper" >
                    <iframe preload="auto" src={`${video}&autoplay=false`} frameborder="0" allowfullscreen="true"  ></iframe>
                  </div>
                )
              })}

            </Slider>

          </div>
        </div>
        <AnchorLink href="#featured-channel">
          <div class="arrow"></div>
        </AnchorLink>
      </section>
    )
  }
}

export default Content
