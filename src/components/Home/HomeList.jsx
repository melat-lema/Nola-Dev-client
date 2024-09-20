import React,{useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {AppState} from "../../App"
import classes from "./home.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from '../../axiosConfig';
function HomeList({Questions}){
  const {user}= useContext(AppState)
  const {title, description, questionid, username}=Questions
  const [answer, setAnswer]=useState()
  // useEffect(() => {
  //   axios.get("/questions/name",{
  //     userid: Questions.userid,
  //   }) 
  //     .then((res)=>{
  //       console.log(res.data)
  //       setAnswer(res.data) 

  //      })
  //      .catch((err)=>{
  //       console.log(err.message)})
        
  // }, []);
  
  return(
    <div className={classes.list__container}>
      <Link to={`/question/${questionid}`}>
               <hr/>
              <div className={classes.flexy__container}>
              <div className={classes.data__container}>
                 
                 <AccountCircleIcon style={{fontSize:"90px", color: "lightblue"}}/>
                 <h6>{username}</h6>
              </div>
              <div className={classes.title__container}>
                {title}
              </div>
              <div className={classes.arrow__container}>
                <ArrowForwardIosIcon style={{fontSize: "50px"}}/>
              </div>
              </div>
             
             
    </Link>
    </div>
  )
}

export default HomeList