import React from 'react'
import { Outlet } from 'react-router-dom'
import { navbarImage } from '../databse/nav-bar-database'
import Agenttemplate from './Agenttemplate'
import '../css/Listing.css'
import Navbar from './Navbar'


function Listings() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ height: "130px", margin: "0px" }}>
          {/* <Navbar islisting={true} /> */}
        </div>

        <div className="listings">
          <div>
            <center><h1>Listing</h1></center>
            <div className="details">

              {/* gere can add serach in future versions */}
              {
                navbarImage.map((ele, index) => (
                  <div className="listing_details">
                    <Agenttemplate agent={ele} isagent={true} is_blank={true} />

                  </div>
                ))
              }
              {/* </div> */}


            </div>

          </div>

          <div className="map">
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chitkara%20university+(My%20Business%20Name)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

          </div>

          {/* <Outlet/> */}
        </div>
      </div>

    </>

  )
}

export default Listings