import '../css/App.css';
import React, { createContext, useState } from 'react';
// import { Routes, Route,BrowserRouter as Router } from "react-router-dom"
import Meetagent from './Meetagent';
import Agentprofile from './Agentprofile';
import Behindnavbar from './Behindnavbar';
import Agenttemplate from './Agenttemplate';
import Footer from './Footer';
import Navbar from './Navbar';
import Ownblog from './Ownblog';
import Recentlisting from './Recentlisting';
import Testimonal from './Testimonal';
import Toplisting from './Toplisting';
import Aside from './Aside';
import Categories from './Categories';
import SignUp from './SignUp';
import Login from './Login';
import Testimonial from './Testimonial';


export const sidebar_isclicked = createContext(null);
function App() {
  const [is_clicked, setClicked] = React.useState(true)
  // React.useEffect(()=>{console.log(is_clicked)},[is_clicked])
  return (
    <>
      <sidebar_isclicked.Provider value={ {is_clicked:is_clicked, setClicked:setClicked} }>
        <Behindnavbar />
        {<Aside />}
      </sidebar_isclicked.Provider>
      {/* <div className="aside-overlay aside-trigger"> </div> */}
      <Categories />
      <Recentlisting />
      <Toplisting/>
      <Meetagent/>
      <Testimonial/>
      {/* <Testimonial/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <Agenttemplate/> */}



    </>



    // </Router>


  )
}

export default App;
