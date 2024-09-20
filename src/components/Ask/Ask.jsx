import React,{useState, useContext, createContext} from 'react'
import LayOut from '../LayOut/LayOut'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import classes from './ask.module.css';
import { useRef } from 'react';
import axios from '../../axiosConfig';
import { useNavigate, useLocation } from 'react-router-dom';
import {AppState} from "../../App"
export const AskState= createContext()
function Ask(){
  const titleDom=useRef();
  const descriptionDom= useRef();
  // const location=useLocation()
  const [loading, setLoading]= useState({
    post: false
  })
  const [message, setMessage]= useState()
  const [datas, setData]= useState()
  const navigate= useNavigate()
  const {user}= useContext(AppState)
  

  async function handleSubmit(e) {
    e.preventDefault();
    
    const titleValue= titleDom.current.value;
    const descriptionValue= descriptionDom.current.value; 
    try {
      const {data}=await axios.post('/questions/all-questions',{
        title: titleValue,
        description: descriptionValue,
        userid: user.userid,
    });
      
      setLoading({...loading, post:true})
      // setMessage(data.msg)
      setData(data)

      navigate( "/home")
    } catch (error) {
      setLoading({...loading, post:false})
      console.log(error.message);
      setMessage(error.response.data.msg)
    }
  }
  return(
    <LayOut>
      <div className={classes.outer__container}>
        <div className={classes.steps__container}>
        <h1>Steps To Write A Good Question</h1>
        <hr/>
        <ul>
          <li><ArrowCircleRightIcon fontSize='10' style={{color: "purple", marginTop:"10px"}}/> Summarize your problems in a one-line-title</li>
          <li><ArrowCircleRightIcon fontSize='10' style={{color: "purple"}}/> Describe your problem in more detail</li>
          <li><ArrowCircleRightIcon fontSize='10' style={{color: "purple"}}/> Describe what you tried and what you expected to happen</li>
          <li><ArrowCircleRightIcon fontSize='10' style={{color: "purple"}}/> Review your question and post it in here</li>
        </ul>  
      </div>
      <div className={classes.form__container}>
        <h3>Post Your Question </h3>
        {
         loading.post? (<small style={{
          padding: "550px",
          textAlign: "center",
          color: "black",
          fontWeight: "bold",
        }}>
          {"Question posted sucessfully. Redirecting to home page..."}
          </small>):(
          <small style={{
            padding: "550px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
          }}>
            {message}
          </small>
        )
      }
        <form onSubmit={handleSubmit}>
          <input ref={titleDom} type='text' placeholder='Question title'/>
          <br/>
          <textarea ref={descriptionDom} placeholder='Question detail...'/>
          <button type='submit'>Post Question</button>
        </form>
      </div>
      </div>
    </LayOut>
    
  )
}

export default Ask 