import React from 'react'
import { navbarImage } from '../databse/nav-bar-database'
import Agentprofile from './Agentprofile'
import Behindnavbar from './Behindnavbar'
import '../css/Agents.css'
import backgroundImage from '../images/agent-bg.jpg'

function Agents() {
  return (
    <div className="agents-outer">
      <div className='img-outer'>
        <div className="img-div" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>


        </div>
        <div className="content">
          <span>Agent Archive</span>

        </div>

      </div>


      <div className='main'>
        <div className='profile-div'>
          {
            navbarImage.map((ele, index) => (<Agentprofile {...ele} />))
          }
        </div>
        <div className="recent-list">
          <div className="main">
            <h2>Recent Listings</h2>
            {
              navbarImage.map(
                (ele, index) => (
                  <div key={index} className="detail-div">
                    <div className="img">
                      <img src={ele.bck_img}/>
                    </div>
                    <div className="other-details">
                      <a href={`See_details/${ele.id}`}>{ele.location}</a>
                      <a>{ele.EST_MORTAGE}</a>
                    </div>
                  </div>
                ))
            }

          </div>
            {/* <div>
              <h2>Popular By Categories</h2>

            </div> */}

        </div>

      </div>



    </div>
    // <h1>hello</h1>
  )
}

export default Agents