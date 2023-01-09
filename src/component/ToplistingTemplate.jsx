import React from 'react'

function ToplistingTemplate() {
  return (
    <div>

<div className="agent-main">
        <div className="bckimg">
        </div>
        <div className='content'>
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

          <span className="location x-small-heading">{agent.location}</span>
          {/* location details */}
          <span className="price small-heading blue_nohover">{agent.price}<span className='grey-text'>/month</span></span>
          {/* price details */}
          <span className="text">{agent.text}</span>
          {/* text details */}
          {/* beds details */}
          <div className="other-detail">
            <span className="details-extra"><span><BiBed /></span><span>{agent.bed}</span></span>
            <span className="details-extra"><span><GiBathtub /></span><span>{agent.bath}</span></span>
            <span className="details-extra"><span><CiRuler /></span><span>{agent.size}</span></span>
          </div>
        </div>
        <div className="button-footer">
          <L_r_button data="view Details" />
          {/* <i></i> */}
        </div>

      </div>
    </div>
  )
}

export default ToplistingTemplate