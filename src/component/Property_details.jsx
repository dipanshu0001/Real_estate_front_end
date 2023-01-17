import React, { useState, useEffect } from 'react'
import "../css/Property_details.css"
import { BsThreeDotsVertical, BsTelephone, BsFillBookmarkFill, BsWindowSidebar } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { data } from '../databse/agentdata'
import { L_r_button } from './Buttons';


function Property_details({ detail_data }) {
    const [agent_data, setdata] = useState({})
    const [clicked, setClicked] = useState(false);
    const [form_data, set_data] = useState({
        email: "",
        phone: "",
        message: ""
    });
    const [tour_data, set_Tour_Data] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        comment: ""
    });
    // const index = () => {
    //     const k = Math.log10(data.length - 1)
    //     const val = Math.pow(10, k)
    //     const index = Math.floor(Math.random() * val)
    //     return index
    // }

    useEffect(() => {
        // const val = index()
        setdata(detail_data);
    }, [detail_data])

    const f = (e) => {
        e.preventDefault();
        console.log(form_data);
        set_data({
            email: "",
            phone: "",
            message: ""
        })

    }
    const change_tour = (e) => {
        e.preventDefault();
        console.log(tour_data);
        set_Tour_Data({
            name: "",
            email: "",
            phone: "",
            date: "",
            comment: ""
        })

    }
    return (
        <div className="property-details-main">
            <div className="left-main">
                <div className="details">
                    <h3>
                        <span>Property Overview</span></h3>
                    <p>
                        {detail_data.overview}
                    </p>
                </div>
                <div className="images-div">
                    {
                        detail_data.overview_img.map((image, index) => (
                            <div className="image" key={index}>
                                <img src={image} key={index} className="main-img" />
                            </div>
                        ))
                    }
                </div>
                <div className="range">
                    <span className="value">{detail_data.value}</span>
                    <ProgressBar variant='info' now={50} min={0} max={100} />
                    <div className="range-value">
                        <div className="low">
                            <h6>{detail_data.lowest}</h6>
                            <p>Lowest</p>
                        </div>
                        <div className="middle"><h5>Price range in the area</h5></div>
                        <div className="high">
                            <h6>{detail_data.highest}</h6>
                            <p>Highest</p>
                        </div>
                    </div>


                </div>
                <div className='nearby'>
                    <div className="n-1">
                        <h5 style={{ color: "#30ca71" }}>Restaurents</h5>
                        <ul>
                            {
                                detail_data.restaurent.map((ele, index) => (
                                    <li key={index}>
                                        <div className="details"><p>{ele.name}</p><span>({ele.distance})</span></div>
                                        <div className="star">
                                            {/* {

                                            for(let i=0;i<ele.star.length;i++){

                                            }
                                        } */}
                                            <span>star Rating</span>
                                        </div>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="n-1">
                        <h5 style={{ color: "#ff4764" }}>Education</h5>
                        <ul>
                            {
                                detail_data.education.map((ele, index) => (
                                    <li key={index}>
                                        <div className="details"><p>{ele.name}</p><span>({ele.distance})</span></div>
                                        <div className="star">
                                            {/* {

                                            for(let i=0;i<ele.star.length;i++){

                                            }
                                        } */}
                                            <span>star Rating</span>
                                        </div>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="n-1">
                        <h5 style={{ color: "#ffa80a" }}>Essential</h5>
                        <ul>
                            {
                                detail_data.essential.map((ele, index) => (
                                    <li key={index}>
                                        <div className="details"><p>{ele.name}</p><span>({ele.distance})</span></div>
                                        <div className="star">
                                            {/* {

                                            for(let i=0;i<ele.star.length;i++){

                                            }
                                        } */}
                                            <span>star Rating</span>
                                        </div>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="tour_form">
                    <center><h4>Sechdule Tour </h4></center>
                    <form className="form" onSubmit={change_tour}>
                        <div className="input_div">
                            <input placeholder="Full Name" className='input_areas' type="text" value={tour_data.name} onChange={(e) => (set_Tour_Data(prev => ({ ...prev, name: e.target.value })))} />
                            <input placeholder="Email Address" className='input_areas' type="email" value={tour_data.email} onChange={(e) => (set_Tour_Data(prev => ({ ...prev, email: e.target.value })))} />
                            <input placeholder="Phone number" type="number" className='input_areas' value={tour_data.phone} onChange={(e) => (set_Tour_Data(prev => ({ ...prev, phone: e.target.value })))} />
                            <input placeholder="Date" type="date" className='input_areas' value={tour_data.date} onChange={(e) => (set_Tour_Data(prev => ({ ...prev, date: e.target.value })))} />
                        </div>

                        <textarea rows="8" cols="5" className=" input_div textarea_div" placeholder="comments" value={tour_data.comment} onChange={(e) => (set_Tour_Data(prev => ({ ...prev, comment: e.target.value })))} />
                    </form>
                    <L_r_button data="Schedule Tour" />

                </div>
            </div>
            <div className="right-main">
                <div className="right_sticky">
                    <h3>Meet The Agent</h3>
                    <div className='agent-main'>
                        <div className="img">
                            <img src={agent_data.a_img} />
                        </div>
                        <div className="agent-name">
                            <p>{agent_data.Name}</p>
                        </div>
                        <div className="outer-drop-down" onClick={() => { setClicked(prev => !prev) }}>
                            <BsThreeDotsVertical style={{ margin: "auto", marginBottom: "5px" }} />
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
                    <form className="form" onSubmit={(e) => f(e)}>
                        <input className="input_areas" placeholder="Email Adress" value={form_data.email} onChange={(e) => (set_data(prev => ({ ...prev, email: e.target.value })))} />
                        <input className="input_areas" placeholder="Phone Number" value={form_data.phone} onChange={(e) => set_data(prev => ({ ...prev, phone: e.target.value }))} />
                        <textarea className="input_areas" placeholder="Enter Message" value={form_data.message} onChange={(e) => set_data(prev => { return { ...prev, message: e.target.value } })} />
                        <L_r_button data="Send Message" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Property_details