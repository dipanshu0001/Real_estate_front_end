import React, { memo } from 'react'
import '../css/Mobilenavbar.css'
import { navbarImage } from '../databse/nav-bar-database'
import { CiRuler } from "react-icons/ci";
import { GiBathtub } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { Media, MediaContextProvider } from '../media/breakpoint';
import { L_r_button } from './Buttons';
import { AiOutlineStar, AiFillStar, AiOutlineShareAlt } from "react-icons/ai";

function Mobilenavbar({ data,details }) {
    const[isfav,setfav]=React.useState(data.fav);
    return (
        <div className="mobile_navbar">
            <div className="mob-lisiting-css" >
                <div className="mob-list-m">
                    <div className="mob-l-price mob-m-details">
                        <div className="mob-m-head">{data.location}</div>
                        <div className="mob-m-extra">Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy like Aldus PageMaker including
                            versions of Lorem Ipsum.</div>
                    </div>
                </div>
                <div className="mob-list-r">
                    <div className="mob-r-social">
                        <div><AiOutlineShareAlt size={20} className="share"/></div>
                        {isfav === false ?(<div onClick={() => setfav(prev=>!prev)}> <AiOutlineStar  size={20} className="star"/></div>) : (<div onClick={()=>setfav(prev=>!prev)} ><AiFillStar size={30} className="star active-star"/></div>)}
                       <div><BsCalendar3 size={20} values="get Scheduling" className="calender"/></div> 

                    </div>
                    <div className="mob-r-type">
                        <span className="mob-r-flex" ><span>Type</span><span>{data.type}</span></span>
                        <span className="mob-r-flex" ><span>View</span><span>{data.view}</span></span>
                        <span className="mob-r-flex" ><span>Lot size</span><span>{data.lot_size}</span></span>
                        <span className="mob-r-flex" ><span>Condition</span><span>{data.condition}</span></span>
                    </div>
                </div>
                <div className="mob-list-l">
                    <div className="mob-l-price">
                        <div className="mob-for-sale">
                            <span className="grey-text">FOR SALE</span>
                            <span>{data.price}</span>
                        </div>
                        <div className="mob-mortage">
                            <span className="grey-text">EST.MORTAGE</span>
                            <span className="mob-mortage-value grey-text">{data.EST_MORTAGE}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mob-l-details">
            <L_r_button
            data= {details} className="btn"  Where_to={`See_details/${data.id}`}/>
            </div>

        </div>
    )
}

export default memo(Mobilenavbar)
{/* <div className="mob-m-size">
                            <span className="mob-Beds"><BiBed size={30} /> <span className="grey-text">BEDS</span> <span>{data.Beds}</span></span>
                            <span className="mob-Baths"><GiBathtub size={30} /> <span className="grey-text">Baths</span> <span>{data.Baths}</span></span>
                            <span className="mob-SQFT"><CiRuler size={30} /> <span className="grey-text">SQFT</span><span>{data.SQFT}</span></span>
                        </div> */}