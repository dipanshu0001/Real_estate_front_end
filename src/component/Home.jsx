import React, { createContext, useState, lazy, Suspense } from 'react';
import Meetagent from './Meetagent';
import Agentprofile from './Agentprofile';
import Footer from './Footer';
import { navbarImage } from '../databse/nav-bar-database'
const Behindnavbar = lazy(() => import('./Behindnavbar'));

const Recentlisting = lazy(() => import('./Recentlisting'));
const Testimonial = lazy(() => import('./Testimonial'));
const Toplisting = lazy(() => import('./Toplisting'));
const Categories = lazy(() => import('./Categories'));
// import SignUp from './SignUp';
// import Login from './Login';





// export const sidebar_isclicked = createContext(null);

function Home() {
  // const [is_clicked, setClicked] = useState(true)

  return (
    <>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Behindnavbar navbarImage={navbarImage} details="See details" is_details={false} />
        <Categories />
        <Recentlisting />
        <Toplisting />
        <Meetagent />
        <Testimonial />
      </Suspense>
      {/* </sidebar_isclicked.Provider> */}

    </>
  )
}

export default Home