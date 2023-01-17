import React from 'react'
import { Outlet } from 'react-router-dom'
import { navbarImage } from '../databse/nav-bar-database'
import Agenttemplate from './Agenttemplate'


function Listings() {
  return (
    <div>
      {
        navbarImage.map((ele,index)=>(<Agenttemplate agent={ele} isagent={true} is_blank={true}/>))
      }
      <Outlet/>
    </div>
  )
}

export default Listings