import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
// import { sidebar_isclicked } from './Home'
function See_details() {
  const{id}=useParams()
  return (
    <div>
      {/* <Navbar/> */}
      <h1>helllo</h1>
    </div>
  )
}
//  things to add in see details:->
//  1. navbar compelete 
//  2. details page behind nav bar same just changer kerna data
//  3. property over-view
//  4. price range bhi add ker dena hai of bi-house
//  5. features add kerna house mai kya kya hai
//  6. schedule Tour peh toh seedha route kerndege simple
//  7. similar listing deekha dio ager ho ske toh
//  8. Meet the agent wala component idher bhi lagana
export default See_details