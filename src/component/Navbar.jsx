import React, { useEffect,useContext,useState,memo } from 'react'
import '../css/common.css'
import { FiFacebook } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'
import img from '../images/logo.png'
import { L_r_button } from './Buttons';
import { FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GoThreeBars } from "react-icons/go";
import Aside from './Aside';
import {sidebar_isclicked} from './Home'
import {Link,useNavigate} from "react-router-dom"
import Form from './Form'

function Navbar() {
  const navigate=useNavigate();

  // console.log(sticky)
  const{is_clicked,setClicked}=useContext(sidebar_isclicked);
  const [isSticky, setSticky] = useState(false)
  const [ishum, setHum] = useState(false)
  function myFunction() {
    let nav_bar = document.getElementsByClassName("bottom-navbar")[0];
    let navbar_main = document.getElementsByClassName("navbar-main")[0];
    let upper_bar = document.getElementsByClassName("upper-navbar")[0];
    // var sticky=nav_bar.offsetTop;

    if (window.pageYOffset > nav_bar.offsetTop) {
      nav_bar.classList.add("sticky")
      upper_bar.classList.add("hidden")
      navbar_main.classList.add("width")
      setSticky(true)
      // upper_bar.classList.add("hidden");
    }
    else {
      nav_bar.classList.remove("sticky")
      upper_bar.classList.remove("hidden")
      navbar_main.classList.remove("width")
      setSticky(false)
      // upper_bar.classList.remove("hidden");
    }
  }
  useEffect(() => {
    if (isSticky === false)
      window.onscroll = function () {
        myFunction()
      }
  }, [isSticky])
  const changeHum = () => {
    setHum(prev => !prev)
    setClicked(ishum)
  }

  return (
    <div className="navbar-main">
      <div className="upper-navbar">
        <div className="social-links">
          <a href="https://www.facebook.com/login/" target="_blank"><FiFacebook className="fb"   /></a>
          <a href="https://in.pinterest.com/login/" target="_blank"><FaPinterestP  className="pintrest" /></a>
          <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedinIn  className="linkedin"/></a>
          <a href="https://twitter.com/login?lang=en" target="_blank"><BsTwitter  className="twitter" /></a>
        </div>
        <div className="login-signup">
          <span>Login</span>
          <span>or</span>
          <span> Signup</span>
        </div>
        
        
      </div>
      <div className="ul-css bottom-navbar">
        <div className="logo">
          <img src={img} onClick={()=>navigate("/")} />
          
        </div>

        <li className={ishum ? "outer-logo" : "outer-logo"}>
          <div className="links">
            <li><Link to="/"><h6>Home Page</h6></Link></li>
            <li><Link to="/Blogs" target="_blank"><h6>Blog</h6></Link></li>
            <li><Link to="/Listings" target="_balnk"><h6>Listings</h6></Link></li>
            <li><Link to="/Agents" target="_blank"><h6>Agents</h6></Link></li>
            <li><Link to="/Agency"><h6>Agency</h6></Link></li>
          </div>
          <L_r_button data="Submit Listing+"Where_to="Form"/>
          {/* <button data="Submit Listing+" onClick={()=>navigate("Form")}>submit Listing</button> */}


        </li>
        <div className="mob_nav" onClick={changeHum}>
        {
          <GoThreeBars size={30} />
        }
      </div>
      </div>
      
    </div>
  )
}

export default memo(Navbar)