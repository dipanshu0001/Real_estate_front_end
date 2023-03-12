import React,{createContext,useContext,useState,useEffect} from 'react'
import {handlelogin_email,handlelogin_google,handleSingup_email,set_err} from '../Functions/Auth-Provider-Functions'
import { getAuth ,onAuthStateChanged} from 'firebase/auth';
import {app} from '../Functions/FireBase-config'

export const AuthContext = createContext(null);
function AccountProvider({children}) {
  const auth=getAuth(app);

  const [details,set_details]=useState({
    accessToken:"",
    displayName:"",
    profileUrl:"",
    email:"",
    islogged_in:false,
  })
  const checkAuth=()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        const uid=user.uid;

        set_details({accessToken: user.accessToken  ,
          displayName: user.displayName  || '',
          profileUrl: user.photoURL  || '',
          email: user.email ,
          isLoggedIn: true
      })
          
      }
      else{
        console.log("Not singed in till now ");
      }
    })
  }
  useEffect(() => {
    checkAuth();
  }, [])
  
  return (
    <AuthContext.Provider value={{handlelogin_email,handlelogin_google,handleSingup_email,set_err,details,set_details}}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuthData=()=>useContext(AuthContext)
export default AccountProvider