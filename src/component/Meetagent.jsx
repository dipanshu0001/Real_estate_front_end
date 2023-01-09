import React,{memo} from 'react'
import {data} from '../databse/agentdata'
import Agentprofile from './Agentprofile'
import Slider from 'react-slick';
import '../css/Meetagent.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Recentlisting.css'

import Heading  from '../common_components/Heading';

const settings = {
  dots: true,
  infinite: true,
  // autoplay: true,
  // mobileFirst: true,
  speed: 500,
  // autoplaySpeed: 2000,
  // cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  className: 'slider',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
  ],


};
const Meetagent= () => {
  return (
    <div className="meet-agent-main">
      <Heading small="our Backbone" large="Meet our Agents"/>
      <div className="meet-agent-content">
      <Slider {...settings} >      {
        data.map((ele,index)=>(
           <Agentprofile {...ele} key={index}/>
        ))
      }
      </Slider>
      </div>
    </div>
  )
}

export default memo(Meetagent)