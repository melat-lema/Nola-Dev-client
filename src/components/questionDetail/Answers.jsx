import React,{useContext,useState,useEffect} from 'react'
import {AppState} from "../../App"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from '../../axiosConfig';
import classes from './Detail.module.css'
import { useParams } from 'react-router-dom';
function Answer({Answer, flex}){
  const{ answer, username}= Answer
  const {user}= useContext(AppState)
  
  
  return(
    <div >
      
            <div className={classes.wrap__container}>
              <div className={classes.data__container}>
                 
                 <AccountCircleIcon style={{fontSize:"40px", color: "balck"}}/>
                 <h6>{username}</h6>
              </div>
              <div className={classes.title__container}>
                {answer}
              </div>
              
             </div>
             <hr/>
            
          
    </div>
  )
}
export default Answer