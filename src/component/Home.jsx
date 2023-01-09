import React, { createContext, useState } from 'react';
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

function Home() {
  const [is_clicked, setClicked] = useState(true)

  return (
    <>
    <sidebar_isclicked.Provider value={ {is_clicked:is_clicked, setClicked:setClicked} }>
        <Behindnavbar />
        {<Aside />}
      </sidebar_isclicked.Provider>
            <Categories />
      <Recentlisting />
      <Toplisting/>
      <Meetagent/>
      <Testimonial/>
      
    </>
  )
}

export default Home