import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user =useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //logged in
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      }else{
        //logged out
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app">
      {!user ? (<LoginScreen/>):(
      <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='About' element={<AboutScreen email='ab'/>}/>
      <Route path='login' element={<LoginScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>} />
      </Routes>
      )}
    </div>
  );
}

export default App;
