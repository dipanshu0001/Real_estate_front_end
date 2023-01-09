import React, { useState, useEffect,memo } from 'react'
import '../css/Agenttemplate.css'
import '../css/TopListingTemp.css'
// import { data } from '../databse/agentdata'
import { L_r_button } from './Buttons'
import { BsThreeDotsVertical, BsTelephone, BsFillBookmarkFill } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { CiRuler } from "react-icons/ci";
import { GiBathtub } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import Badge from 'react-bootstrap/Badge';
import {  GrFavorite} from "react-icons/gr";



function Agenttemplate({ agent,isagent }) {
  const [clicked,setClicked] = useState(false);
  return (
    <div className={isagent?"agent-outer":"top-list-outer"}>
      <div className={isagent?"agent-main":"top-list-main"}>
        {
        !isagent
        ?(<div id="top-list-bg-img-outer"><img src={agent.bck_img} className="top-list-bg-img"/></div>)
        :(<div className="bckimg">
          <a href="#">
            <img src={agent.bck_img} />
          </a>
          <div className="pending">
            {agent.pending && <Badge bg="danger" className="p_btn">
              Pending
            </Badge>}
            {agent.sale && <Badge bg="success" className="p_btn">
              on Sale
            </Badge>}
          </div>
        </div>)
        }
        
        <div className={isagent?"content":"top-list-content"}>
          <div className="agent-div">
            <div className="agent-img">
              <img src={agent.a_img} />
            </div>
            <div className="agent-detail-button">
              <div className="agent-detail">
                <span className="small-heading">{agent.Name}</span>
                <span className="grey-text">{agent.date}</span>
              </div>
              <div className="outer-drop-down" onClick={() => { setClicked(prev => !prev) }}>
                <BsThreeDotsVertical  />
                {
                  clicked && (<div className="drop-down">
                    <ul>
                      <li className="agent-d blue"><a> < BsTelephone /><span className='small-icon-drop'>call Agent</span></a></li>
                      <hr />
                      <li className="agent-d blue"><a><BiMessageAltDetail /><span className='small-icon-drop'>Send Message</span></a></li>
                      <hr />
                      <li className="agent-d blue"><a><BsFillBookmarkFill /><span className='small-icon-drop'>Book Listing</span></a></li>
                    </ul>
                  </div>)
                }

              </div>
            </div>
          </div>

          <h4 className="location x-small-heading">{agent.location}</h4>
          {/* location details */}
          <span className="price">
            <h5 className='blue-text'>{agent.price}</h5>
            <h6 className='grey-text'>/month</h6>
            </span>
          {/* price details */}
          <p className="text">{agent.text}</p>
          {/* text details */}
          {/* beds details */}
          <div className="other-detail">
            <span className="details-extra"><span><BiBed /></span><span>{agent.bed}</span></span>
            <span className="details-extra"><span><GiBathtub /></span><span>{agent.bath}</span></span>
            <span className="details-extra"><span><CiRuler /></span><span>{agent.size}</span></span>
          </div>
          {!isagent&&(<div className="button-footer">
          <L_r_button data="view Details" Where_to={`Top_listing_detail/${agent.id}`}/>
          {/* <i></i> */}
        </div>)}
        </div>
        {
        isagent&&(
        <div className="button-footer">
          <L_r_button data="view Details" Where_to={`Top_listing_detail/${agent.id}`}/>
          {/* <i></i> */}
        </div>)
        }

      </div>
     </div>
  )
}

export default memo(Agenttemplate)