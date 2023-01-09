import React from 'react'
import '../css/Signup.css'
import { L_r_button } from './Buttons'
// import '../common_components/buttons'
function SignUp() {
    return (
        <div className="box">

            <div className="container">

                <div className="d1">
                    <div>                    <img src={require('../images/welcome.jpg')} alt="" />
                    </div>
                    {/* <div /> */}
                    <div className="d2">
                        <div className="rgst">
                            <p data-text="Register">Register</p>
                        </div>
                        <div className="social">
                            <div className="user">
                                <div className="info">
                                    <label for="name">FirstName:</label><br />
                                    <input type="text" placeholder="username" /><br />
                                </div>
                                <div className="info">
                                    <label for="name">LastName:</label><br />
                                    <input type="text" placeholder="username" /><br />
                                </div>
                            </div>
                            <div className="email">
                                <label for="name">Email:</label><br />
                                <input type="email" placeholder="password" />
                            </div>
                            <div className="psswrd">
                                <div className="info">
                                    <label for="name"> set password:</label><br />
                                    <input type="text" placeholder="password" />
                                </div>
                                <div className="info" id="confirm">
                                    <label for="name"> confirm password again:</label><br />
                                    <input type="text" placeholder="password" />
                                </div>
                            </div>
                        </div>
                        <div className="rem">


                        </div>
                        <div className="submit">
                            <L_r_button data="Register" />
                        </div>
                    </div>




                </div>



            </div>
        </div>

    )
}

export default SignUp