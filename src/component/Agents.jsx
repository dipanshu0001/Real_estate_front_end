import React from 'react'
import { navbarImage } from '../databse/nav-bar-database'
import Agentprofile from './Agentprofile'

function Agents() {
  return (
    <div className="Agents-outer">
      <div className='main'>
        <div className='profile-div'>
          {
            navbarImage.map((ele,index)=>(<Agentprofile {...ele}/>))
          }
        </div>
        <div className="recent-list">
          <div className="main">

          </div>
          <div>
            <h1>Popular By Categories</h1>
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default Agents