import React from 'react'
import Feedback from './Feedback'
import '../css/Testimonial.css'
import Heading from '../common_components/Heading'
import { Feedback_data } from '../databse/Feedback_data.js';
function Testimonial() {
  return (
    <div className="Testi-main">

      <Heading small="Testimonial" large="What Are People Saying" />
      <div className="Testi-content">
          {
            Feedback_data.map((ele, index) => (
              <Feedback {...ele} key={index} />
            ))
          }
      </div>

    </div>
  )
}

export default Testimonial