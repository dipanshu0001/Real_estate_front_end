import React, { useState } from 'react'
import '../css/Login.css'
import { L_r_button } from './Buttons'
import { SlSocialGoogle } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi"
import { MdEmail } from "react-icons/md";

import Button from 'react-bootstrap/Button';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { AiOutlineUser, AiFillLock,AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';






function Login() {
    const [form_data, set_form] = useState({
        email: "",
        password: ""
    })
    const[isopen,setopen]=useState(false)

    const toggleeye=()=>{
        const password_type=document.getElementById('password');
        if(password_type.type=="password"){
            password_type.type="text"
            setopen(true)
        }
        else{
            password_type.type="password"
            setopen(false)
        }
    }
    return (
        <div className='login-outer'>
            <div className="login-main">
                <div className="login-content">
                    <div className="img-details">
                        <div className='main-img-div'>
                            <img src={require('../images/login_image.jpg')} />
                        </div>
                       <center className="create-account">
                       <a href="/Singup" >Create Account</a>
                       </center>


                    </div>
                    <div className="login-details">

                        <div classNamw="login-inner">
                            <div className="input-section no-line"><span>Login</span></div>
                            <div className='input-section'>
                                <label><MdEmail  /></label>
                                <input
                                    className='input'
                                    value={form_data.email}
                                    placeholder="Email"
                                    onChange={(e) => (set_form(prev => ({ ...prev, email: e.target.value })))}
                                >
                                </input>
                            </div>
                            <div className='input-section'>
                                <label><AiFillLock/></label>
                                <input
                                    className='input'
                                    type="password"
                                    value={form_data.password}
                                    placeholder="password"
                                    onChange={(e) => (set_form(prev => ({ ...prev, password: e.target.password })))}
                                    id="password"
                                />
                                {
                                    isopen?<AiFillEye className="eye" size={30}onClick={toggleeye}/>:< AiFillEyeInvisible className='eye'  size={30}onClick={toggleeye}/>
                                }
                            </div>
                            <div className='input-section checkbox'>
                                <input type="checkbox" className="checkbox-input" required />
                                <label>Remember me</label>

                            </div>
                            <Button as="a" variant="primary" style={{alignItems:"center"}}>
                                Login
                            </Button>
                        </div>
                        <div className="login-other">
                            <ul>
                                <li><span>or Login with</span></li>
                                <li>
                                    <li>
                                        <a href="https://www.facebook.com/login/" target="_blank">
                                            <Button variant="primary">
                                                <FiFacebook className="fb" />
                                            </Button>
                                        </a>
                                    </li>
                                   
                                    <li>
                                        <a href="https://twitter.com/login?lang=en" target="_blank">
                                            <Button variant="danger">
                                                <SlSocialGoogle className="twitter" />
                                            </Button>
                                        </a>
                                    </li>
                                </li>

                            </ul>

                        </div>




                    </div>

                </div>


            </div>
        </div>

    )
}

export default Login


 {/* <li>
                                        <a href="https://twitter.com/login?lang=en" target="_blank">
                                            <Button variant="primary">
                                                <BsTwitter className="twitter" />
                                            </Button>
                                        </a>
                                    </li> */}