import React from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlineStar, AiFillStar, AiOutlineShareAlt } from "react-icons/ai";
import { useNavigate } from 'react-router-dom/dist';
export const L_r_button=({data,Where_to})=>{
return (
 <li className="button">

<Button  variant='primary' className="button-left" onClick={()=>window.open(Where_to,"_blank")} >{data}</Button>
 </li>

)
} 
