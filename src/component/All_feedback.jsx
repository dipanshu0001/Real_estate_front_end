import React from 'react'
import { Feedback_data } from '../databse/Feedback_data'
import Feedback from './Feedback'
import "../css/All_feedback.css"
import { BiLike } from 'react-icons/bi'
import { L_r_button } from './Buttons'
function All_feedback() {
  // const[isliked,setLiked]=React.useState(0)
  return (
    <div className="All_feedback_main">
      <center><h1>ALL Feedback</h1></center>
      <div className="internal_feedback">
      {
        Feedback_data.map((item, index) => {
          return (<Feedback key={index} {...item}/>)
        })

      }
      </div>
      <L_r_button data="Back" Where_to={-1}/>


    </div>
  )
}

export default All_feedback