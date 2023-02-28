import '../css/App.css';
import Home from './Home'
import Blogs from './Blogs'
import Listing from './Listings'
import Agents from './Agents'
// import Agency from './Agency'
import See_details from './See_details'
import { Routes, Route, Switch } from "react-router-dom"
import Listings from './Listings';
import Form from './Form';
import Display_categories from './Display_categories'
import Agent_details from './Agent_detail'
// import Top_listing_detail from './Top_listing_detail'
import Not_found from './Not_found'
import All_feedback from './All_feedback';
import ToplistingTemplate from './ToplistingTemplate';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Footer from './Footer';
import WithNavbar from './WithNavbar';
import WithoutNavbar from './WithoutNavbar';


function App() {
  // React.useEffect(()=>{console.log(is_clicked)},[is_clicked])
  return (
    <>


      <Routes>
        <Route element={<WithoutNavbar />}>
          <Route path="/Login" element={<Login />} />
          {/* <Route path="*" element={<Not_found />} /> */}
          <Route path="/Singup" element={<SignUp />} />
        </Route>
        <Route element={<WithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<ToplistingTemplate />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Listing" element={<Listing />} >
            {/* <Route path="/"  */}
            {/* Route */}
            <Route path="*" element={<Not_found />} />
          </Route>
          {/* <Route path="/Agency" element={<Agency/>}/> */}
          <Route path="/Form" element={<Form />} />
          <Route path="/categories/:category" element={<Display_categories />} />
          <Route path="/See_details/:id" element={<See_details />} />
          {/* <Route path="Listing/See_details/:id" element={<See_details/>}/> */}
          <Route path="/Agent_details/:id" element={<Agent_details />} />
          {/* <Route path="/Top_listing_detail/:id" element={<Top_listing_detail/>}/> */}
          <Route path="/All_feedback/" element={<All_feedback />} />

        </Route>



      </Routes>
      <Footer />
    </>


  )
}

export default App
