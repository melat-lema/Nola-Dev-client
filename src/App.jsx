import React, { createContext, useState, useEffect } from 'react'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import axios from './axiosConfig';
import Ask from './components/Ask/Ask';
import QuestionDetail from './components/questionDetail/QuestionDetail';
import Header from './components/Header/Header';
import Works from './components/HowITWorks';
import Err from './Err';
export const AppState= createContext()

function App() {
  const navigate= useNavigate() 
  const [user, setUser]= useState({})

  const token=localStorage.getItem('token')
  
  
  async function checkUser(){
    try {
      const {data}=await axios.get("/users/check",{
        headers: {
          Authorization: 'Bearer '+ token,
        },
      });
      // console.log(data)
      setUser(data)
      
    } catch (error) {
      console.log(error.message)
      navigate("/")
    }
  }
  useEffect(()=>{
    checkUser();
  }, [])
  return (
    <AppState.Provider value={{user, setUser}}>
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/ask' element={<Ask/>}/>
        <Route path='/question/:questionid' element={<QuestionDetail/>}/>
        <Route path="/how" element={<Works/>}/>
        <Route path="*" element={<Err/>}/>
      </Routes>
    </AppState.Provider>
  );
}

export default App;