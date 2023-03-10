import React, { useEffect,useContext,useState,memo } from 'react'
import Navbar from './Navbar';
import '../css/common.css'
// import { navbarImage } from '../databse/nav-bar-database'
import { CiRuler } from "react-icons/ci";
import { GiBathtub } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { Media, MediaContextProvider } from '../media/breakpoint';
import Mobilenavbar from './Mobilenavbar'
import DesktopNavbar from './DesktopNavbar';
import { AiOutlineStar, AiFillStar, AiOutlineShareAlt } from "react-icons/ai";
import { frwd_btn,bckd_btn} from '../common_components/Forwardarrow';
import '../css/Behindnavbar.css'





function Behindnavbar({navbarImage,details,is_details,id}) {
  // console.log(id);
//  const val=id!==undefined?id:0;
  const [index, setindex] = useState(id);
  const data = navbarImage[index];
  const inc = () => {
    setindex((index + 1) % navbarImage.length)
    console.log(index)
  } 
  const dec = () => {
    if (index === 0) {
      setindex(navbarImage.length - 1)
      // console.log(index)
    }
    else
      setindex((index - 1))
    // console.lof(index)
  }
  useEffect(() => {
  }, [index])
  
  // console.log(data)
  // console.log(typeof (imag))
  return (
    <div className="main">
      <div className="behind-main" >
        {/* <Navbar /> */}
        <div className="img-div">
          {/* <Navbar /> */}
          <div className="img">
            <div   className="main-img" >
              <img  src={data.img} />
            </div>
            { is_details!==true &&<div className="arrow">
              <MdOutlineArrowBackIosNew size={50} onClick={dec} />
              <MdOutlineArrowForwardIos size={50} onClick={inc} />
            </div>}
          </div>
        </div>
        <div style={{height:"100%"}}>
          <MediaContextProvider>
            <Media lessThan="lg">
              <Mobilenavbar data={data} details={details} />

            </Media>
            <Media greaterThan="lg">
              <DesktopNavbar data={data}  details={details}/>

            </Media>
          </MediaContextProvider>
          {/* <Navbar />  */}
        </div >
      </div>
    </div>
  )
}

export default memo( Behindnavbar)