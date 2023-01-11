import React, { useEffect, useContext, useState, memo } from 'react'
import '../css/common.css'
import { FiFacebook } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'
import '../css/Aside.css'
import img from '../images/logo.png'
import { L_r_button } from './Buttons';
import { FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import CloseButton from 'react-bootstrap/CloseButton';

import { GoThreeBars } from "react-icons/go";
import Aside from './Aside';
// import {sidebar_isclicked} from './Home'
import { Link, useNavigate } from "react-router-dom"
import Form from './Form'

function Navbar() {
  const navigate = useNavigate();
  const [ is_clicked, setClicked ] = useState(true);
  const [isSticky, setSticky] = useState(false)
  // const [ishum, setHum] = useState(false)
  // useEffect(() => {
  // }, [is_clicked])
  
  function myFunction() {
    let nav_bar = document.getElementsByClassName("bottom-navbar")[0];
    let navbar_main = document.getElementsByClassName("navbar-main")[0];
    let upper_bar = document.getElementsByClassName("upper-navbar")[0];
    // const height=100px;
    // var sticky=nav_bar.offsetTop;
    // console.log(window.scrollY)

    if (window.scrollY >100 ) {
      nav_bar.classList.add("sticky")
      upper_bar.classList.add("hidden")
      navbar_main.classList.add("width")
      setSticky(true)
      // console.log("ehjfksjdkfjsdf")
      // upper_bar.classList.add("hidden");
    }
    else {
      nav_bar.classList.remove("sticky")
      upper_bar.classList.remove("hidden")
      navbar_main.classList.remove("width")
      setSticky(false)
      // console.log("ehjfksjdkfjsdf")
      // upper_bar.classList.remove("hidden");
    }
  }
  useEffect(() => {
    // if (isSticky === false)
      window.addEventListener('scroll',myFunction)
      // console.log("helo from navbar ")
  }, [isSticky])
  const changeHum = () => {
    // setHum(prev => !prev)
    // setClicked(ishum)
    console.log("helo");
    setClicked(prev=>!prev)
     
  }

  return (
    <div className="navbar-main">
      <div className="upper-navbar">
        <div className="social-links">
          <a href="https://www.facebook.com/login/" target="_blank"><FiFacebook className="fb" /></a>
          <a href="https://in.pinterest.com/login/" target="_blank"><FaPinterestP className="pintrest" /></a>
          <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedinIn className="linkedin" /></a>
          <a href="https://twitter.com/login?lang=en" target="_blank"><BsTwitter className="twitter" /></a>
        </div>
        <div className="login-signup">
          <span>Login</span>
          <span>or</span>
          <span> Signup</span>
        </div>


      </div>
      <div className="ul-css bottom-navbar">
        <div className="logo">
          <img src={img} onClick={() => navigate("/")} />

        </div>

        <li className={"outer-logo"}>
          <div className="links">
            <li><Link to="/"><h6>Home Page</h6></Link></li>
            <li><Link to="/Blogs" target="_blank"><h6>Blog</h6></Link></li>
            <li><Link to="/Listings" target="_balnk"><h6>Listings</h6></Link></li>
            <li><Link to="/Agents" target="_blank"><h6>Agents</h6></Link></li>
            <li><Link to="/Agency"><h6>Agency</h6></Link></li>
          </div>
          <L_r_button data="Submit Listing+" Where_to="Form" />
          {/* <button data="Submit Listing+" onClick={()=>navigate("Form")}>submit Listing</button> */}


        </li>
        <div className="mob_nav" onClick={changeHum}>
          {
            <GoThreeBars size={30} />
          }
        </div>
        
      </div>
      {
        (<div className={is_clicked?"aside-main":"aside-main open"}>
        <div className="menu-outer" >
          <span className="heading-mob">Menu</span>
          <i className="icon cross" onClick={()=>setClicked(prev=>!prev)} > </i>
          
        </div>
        <div className="aside-scroll">
          <ul>
            <li className="heading-mob">Pages</li>
            <li>
              <Link to="/">
              <i className="icon home"></i>
              Home Page
              </Link>
            </li>
            <li>
            <Link to="/Blogs" target="_blank">
              <i className="icon blog"></i>
              Blogs
              </Link>
            </li>
            <li>
            <Link to="/Listing" target="_blank">
              <i className="icon pages"></i>
              Listings
              </Link>
            </li>
            <li>
            <Link to="/Agents">
              <i className="icon listing"></i>
              Agents
              </Link>
            </li>
            <li>
            <Link to="/Agency" target="_blank">
              <i className="icon agent"></i>
              Agency
              </Link>
            </li>
            <li className="heading-mob"> Get Social</li>
            <li>
            <a href="https://www.facebook.com/login/" target="_blank">
              <i className="icon facebook"></i>
              Facebook
              </a>
            </li>
            <li>
              <a href="https://in.pinterest.com/login/" target="_blank">
              <i className="icon pintrest"></i>
              Pintrest
              </a>
            </li>
            <li>
            <a  href="https://www.linkedin.com/feed/" target="_blank">
              <i className="icon linkedin"></i>
              LinkedIn
              </a>
            </li>
            <li>
            <a href="https://twitter.com/login?lang=en" target="_blank">
              <i className="icon twitter"></i>
              Twitter
              </a>
            </li>
          </ul>

        </div>




      </div>)}

    </div>
  )
}

export default memo(Navbar)