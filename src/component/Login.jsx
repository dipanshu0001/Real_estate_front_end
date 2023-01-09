import React from 'react'
import '../css/Login.css'
import { L_r_button } from './Buttons'
function Login() {
    return (
        <div className="box">
            <div className="container">
                <div className="d1">
                    <div>          <img src={require('../images/pic.jpg')} alt="" />
                    </div>


                    <div className="d2">
                        <div className="social">
                            <button id="myButton" className="btn1" href="">
                                <a className="link1" href="sigin.html" target="_blank"
                                >sign in</a
                                ></button
                            ><span>/</span>
                            <button id="myButton" className="btn1" href="">
                                <a className="link2" href="login.html">login</a>
                            </button>
                            <div>
                                <a href="https://www.facebook.com/" target="_blank"
                                ><i className="bi bi-facebook"></i
                                ></a>
                                <a
                                    href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"
                                    target="_blank"
                                ><i className="bi bi-google"></i
                                ></a>
                            </div>
                        </div>
                        <div className="social">
                            <div className="info">
                                <label for="name">Username:</label><br />
                                <input type="text" placeholder="username" /><br />
                            </div>
                            <div className="info">
                                <label for="name">password:</label><br />
                                <input type="text" placeholder="password" />
                            </div>
                        </div>
                        <div className="rem">
                            <input type="checkbox" value="" name="check" checked /><label
                                for="rem"
                            >remember me</label
                            >
                            <a className="link frgt" target="_blank" href="forget_password.html"
                            >forget password</a
                            >
                        </div>
                        <div className="submit">
                            <L_r_button className="subbtn" onclick="replace()" data="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login