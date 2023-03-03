import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { intialstate, reducer } from "../AddCart/productCart";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
 
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
   const [userProfile,setProfileUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, intialstate)
  
  // signup method firebase code 
  let createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)   
  }
  const updateUser = (userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
  }
  // signIn method firebase code 
  let signIn = (data) => {
   return signInWithEmailAndPassword(auth, data.email, data.password)
       
  }
  //  user are running here 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {    
      }
      setIsLoading(false)
    });
    return () => unSubscribe;
  })
  // logout code here 
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      // An error happened.
    });
  }
  
  useEffect(() => {
     axios.get(`http://localhost:5000/api/v1/getme/${user.email}`)
     .then(response=>{
       
         setProfileUser(response?.data?.user)
     })
     .catch(err=>{
      
     })
  },[user?.email])
   
  const values = {
   createUser,
   updateUser,
    user,
    setError,
    error,
    state,
    dispatch,
    isLoading,
    logOut,
    signIn,
    userProfile
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;