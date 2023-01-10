import React,{useState,useContext,useEffect,memo} from 'react'
import '../css/Aside.css'
import {Link} from "react-router-dom"
// import {sidebar_isclicked} from './Home'
function Aside() {
  // const{is_clicked, setClicked}=useContext(sidebar_isclicked);
  // React.useEffect(()=>{},[is_clicked])
  return (
    <>

      <div className={"aside-main"}>
        <div className="menu-outer">
          {/* <span className="heading-mob">Menu</span>
          <i className="icon cross" onClick={()=>{
            setClicked(prev=>!prev)
          }}> </i> */}
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




      </div>
    </>



  )
}

export default memo(Aside)