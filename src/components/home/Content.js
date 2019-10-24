import React, { Component } from 'react';
import Slider from 'react-slick';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Content extends Component {
  state = {
    activeSlide: 0,
  }

  videos = [
    'https://player.twitch.tv/?channel=esl_csgo',
    'https://player.twitch.tv/?channel=twotaptony',
    'https://player.twitch.tv/?channel=esl_csgo',
    'https://player.twitch.tv/?channel=jennajulien',
    'https://player.twitch.tv/?channel=esl_csgo',
    'https://player.twitch.tv/?channel=twotaptony',
    'https://player.twitch.tv/?channel=esl_csgo',
    'https://player.twitch.tv/?channel=jennajulien',
  ] 

  get streamLength(){
    return this.props.streams.length
  }

  get slideToShow(){
    // if(this.streamLength === 3){
    //   return 2
    // }
    // if(this.streamLength < 3 && this.streamLength >= 2){
    //   return 2 //2
    // }
    // if(this.streamLength === 1 && this.streamLength > 0){
    //   return 1
    // }
    return 3
  }

  get infinite(){
    // if(this.streamLength === 3) {
    //   return true
    // }
    // if(this.streamLength < 3 && this.streamLength >= 2){
    //   return true
    // }
    // if(this.streamLength === 1 && this.streamLength > 0){
    //   return true
    // }
    return true
  }

  settings = {
    dots: true ,
    arrows: true,
    infinite: this.infinite,
    autoplay: this.streamLength == 3 ? false : false,
    focusOnSelect: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
    speed: 1000,
    slidesToShow: this.slideToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    afterChange: (current) => {
      this.setState({
        activeSlide: current
      })
    }
  }

  get classValidation(){
    // if(this.streamLength === 3){
    //   return "slider slider-3"
    // }
    // if(this.streamLength < 3 && this.streamLength >= 2){
    //   return "slider slider-2"
    // }
    // if(this.streamLength === 1 && this.streamLength > 0){
    //   return "slider slider-1"
    // }
    return "slider"
  }
 
  render() {
    return (
      <section id="featured-content">
        <div className="content">
          <h2 className="title">HIGHLIGHTED GOD</h2>
          <div className={this.classValidation}>
            <Slider {...this.settings}>
            {this.videos.map((video, index) => {
                  return (
                    <div className="videoWrapper" >
                        <iframe  preload="auto" src={`${video}&autoplay=false`} frameborder="0"  allowfullscreen="true"  ></iframe>
                    </div>
                  )
              })}
              
              {/* {this.props.streams.map((video, index) => {
                return (
                  <div className="videoWrapper" >
                    <iframe preload="auto" src={`https://player.twitch.tv/?channel=${video.twitchUsername}&autoplay=false`} frameborder="0" allowfullscreen="true"></iframe>
                  </div>
                )
              })} */}
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
