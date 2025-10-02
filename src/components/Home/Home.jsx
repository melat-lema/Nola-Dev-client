import React, { useContext, useState, useEffect } from 'react'
import LayOut from '../LayOut/LayOut'
import {AppState} from "../../App"
import { Link , useLocation} from 'react-router-dom'
import axios from '../../axiosConfig'
import HomeList from './HomeList'
import classes from "./home.module.css"

function Home(){
  const {user}= useContext(AppState)
  const [datas, setData] = useState();
  useEffect(() => {
    axios.get("/questions/all")
      .then((res)=>{
        console.log(res.data)
        setData(res.data)      
       })
       .catch((err)=>{
        console.log(err)})
  }, []);
  
  
  return(
    <LayOut>
      <div className={classes.outer__container}>
        <div className={classes.inner__container}>
          <Link to="/ask"><button>Ask Question</button></Link>
          <h3>Wellcome: {user.username}</h3>
        </div>
        <div>
          {
            datas?.map((items)=>{
             return  <HomeList Questions={items}/>
            })
          }
        </div>
      </div>
    </LayOut>
  )
}

export default Home