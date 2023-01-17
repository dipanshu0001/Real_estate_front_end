import React,{memo} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/TopListingTemp.css'
import '../css/common.css'
import {data} from '../databse/agentdata';
import {navbarImage} from "../databse/nav-bar-database"
import Agenttemplate from './Agenttemplate';
import Heading from '../common_components/Heading';
const settingses = 
{
  dots: true,
  infinite: true,
  speed: 1000,
  arrows:false,
  autoplay:true,
  mobilefirst:true,
  autoplaySpeed:4500,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  className: 'sliders',
}

function Toplisting() {
  // console.log(data);
  return (
    <div className="toplisting-main">
      <Heading small="Treding" large="Our Top Listing"/>


      <Slider {...settingses}>
        {navbarImage.map((ele,index)=>(<Agenttemplate agent={ele} key={index} isagent={false}/>))}
      </Slider>

    </div>
  )
}

export default memo(Toplisting)