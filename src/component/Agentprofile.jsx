import React from 'react'
import {L_r_button} from './Buttons';
import '../css/Agentprofile.css'
function Agentprofile({a_img,Name,text,id}) {
  // console.log(text);
  return (
    <div className="agent-outer">
      <div className="agent-inner">
        <div className="img_folder">  
          <img src={a_img} className="agent_profile"/>
          <h5>{Name}</h5>
        </div>
        <div className="details-folder">
          <p>{text}</p>
        </div>
        <L_r_button data="view" Where_to={`Agent_details/${id}`}/>

      </div>

    </div>
  )
}

export default Agentprofile