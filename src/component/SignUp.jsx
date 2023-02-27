import React,{useState} from 'react'
import '../css/Signup.css'
import '../css/Login.css'
import { L_r_button } from './Buttons'
import { SlSocialGoogle } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { AiOutlineUser, AiFillLock,AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';


function SignUp() {

    const [form_data, set_form] = useState({
        email: "",
        password: "",
        confirm_password:"",
        name:""
    })
    const[isopen,setopen]=useState(false)
    const[isopenconfirm,setopenconfirm]=useState(false)

    const toggleeye=(e)=>{
        console.log(e);
        const password_type=document.getElementById(e);
        if(password_type.type=="password"){
            password_type.type="text"
            if(e=="password")
            setopen(true)
            else setopenconfirm(true)
        }
        else{
            password_type.type="password"
            if(e=="password")
            setopen(false)
            else setopenconfirm(false)
        }
    }
    return (
        <div className='login-outer'>
        <div className="login-main">
            <div className="login-content">
                <div className="img-details">
                    <div className='main-img-div'>
                        <img src={require('../images/signup-image.jpg')} />
                    </div>
                    <center className="create-account">
                       <a href="/Login" >I am already a member</a>
                       </center>


                </div>
                <div className="login-details">

                    <div classNamw="login-inner">
                        <div className="input-section no-line"><span>Singup</span></div>
                        <div className='input-section'>
                            <label><AiOutlineUser /></label>
                            <input
                                className='input'
                                type="text"
                                required
                                value={form_data.name}
                                placeholder="Your Name"
                                onChange={(e) => (set_form(prev => ({ ...prev, name: e.target.value })))}
                            >
                            </input>
                        </div>
                        <div className='input-section'>
                            <label><MdEmail /></label>
                            <input
                                className='input'
                                type="email"
                                value={form_data.email}
                                placeholder="Email"
                                onChange={(e) => (set_form(prev => ({ ...prev, email: e.target.value })))}
                                required
                            >
                            </input>
                        </div>
                        <div className='input-section'>
                            <label><AiFillLock /></label>
                            <input
                                className='input'
                                type="password"
                                value={form_data.password}
                                placeholder="Password"
                                onChange={(e) => (set_form(prev => ({ ...prev, password: e.target.password })))}
                                id="password"
                                required
                            />
                            {
                                isopen?<AiFillEye className="eye" size={30}onClick={()=>{toggleeye("password")}}/>:< AiFillEyeInvisible className='eye'  size={30}onClick={()=>{toggleeye("password")}}/>
                            }
                        </div>
                        <div className='input-section'>
                            <label><CiLock /></label>
                            <input
                                className='input'
                                type="password"
                                value={form_data.confirm_password}
                                placeholder="Renter Password"
                                onChange={(e) => (set_form(prev => ({ ...prev, confirm_password: e.target.password })))}
                                id="confirm_password"
                                required
                            />
                            {
                                isopenconfirm?<AiFillEye className="eye" size={30}onClick={()=>{toggleeye("confirm_password")}}/>:< AiFillEyeInvisible className='eye'  size={30}onClick={()=>{toggleeye("confirm_password")}}/>
                            }
                        </div>
                        <div className='input-section checkbox'>
                            <input type="checkbox" className="checkbox-input" required />
                            <label style={{wordSpacing:"-.1em"}}>I agree to all <a href="#" className='create-account'>Terms and Services</a></label>

                        </div>
                        <Button as="a" variant="primary" style={{alignItems:"center"}}>
                            Login
                        </Button>
                    </div>
                    {/* <div className="login-other">
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

                    </div> */}




                </div>

            </div>


        </div>
    </div>

    )
}

export default SignUp