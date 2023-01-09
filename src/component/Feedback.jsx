import React from 'react'
import '../css/Feedback.css'
import { AiFillStar } from "react-icons/ai";

function Feedback({ breif_des, description, name, img, post }) {
    return (
        // <div className="feedback_main">
        <div className="feedback_content">
            {/* <div className="feedback_content_middle"> */}
                <div className="feedback">

                    <p>{breif_des}</p>
                    <p>{description}</p>
                    <div className="small-triangle"></div>
                </div>
                <div className="details">
                    <div className="div">
                        {/* <div> */}
                            <img src={img} />
                        {/* </div> */}
                    </div>

                    <div className="personal-details">
                        <h5>{name}</h5>
                        <span>{post}</span>
                    </div>
                </div>

            {/* </div> */}
        </div>

        // </div>
    )
}

export default Feedback