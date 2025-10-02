import React , { useContext, useState, useEffect }from 'react'
import { useRef } from 'react'
import LayOut from '../LayOut/LayOut'
import {AppState} from "../../App"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../../axiosConfig'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import classes from "./Detail.module.css"
import Answer from './Answers'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function QuestionList({Question}){
  const {user}= useContext(AppState)
  const userid=user.userid;
  
  const {title, description}= Question
  // const answerDom=useRef();
 
  const [datass, setDatas]= useState()
  const{questionid}=useParams()
  const [ans, setAns]=useState()
  const [answer, setAnswer]=useState("")
  useEffect(() => {
    axios.get(`answers/specific/${questionid}`)
      .then((res)=>{
        console.log(res.data)
        setDatas(res.data) 

       })
       .catch((err)=>{
        console.log(err.message)})
        
  }, [userid]);
  
  const clearFields = () => {
    setAnswer('');
    
}
async function handleSubmit(e){
  e.preventDefault();

    // const answerValue= answerDom.current.value;
    
    try {
      
      const {data}=await axios.post("/answers/all-answers",{
        answer,
        userid: user.userid,
        questionid,
    }) .then((res)=>{
      console.log(res.data)
      setAns(res.data)  
      // alert('posted sucessfully')

     }).then((e)=>clearFields())
     .catch((err)=>{
      console.log(err)   
    }
    )
    
  }
  catch(err){
    console.log(err)
    // (error)
  }
}

  return(
      <div className={classes.outer__container}>
          <div className={classes.upper_inner_container}>
            <h1>QUESTION</h1>
            <div className={classes.title__container}>
            <ArrowCircleRightIcon  style={{color: "lightblue",fontSize:'20px', marginTop:"10px"}}/> 
            <h2>{title}</h2>
            </div>
            
            <p>{description}</p>
          </div>
          <div className={classes.lower_inner_container}>
            <hr/>
            <h1>Answer From The Community</h1>
            <hr/>
            <div className={` ${datass?.length? classes.form__container: ' ' }`}>
            {
            ans?.map((items)=>{
              return <Answer Answer={items}/>
            }
              
            )
          }
            {
            datass?.map((items)=>{
              return <Answer Answer={items}/>
                     
            })
            
          } 
          
            </div>
            <br/>
            <form onSubmit={handleSubmit}>
              <textarea onChange={(e)=>{setAnswer(e.target.value)}} value={answer}placeholder='Your answer...'/><br/>
              <button type='submit'>Post Answer</button>
            </form>
            
          </div>
        </div>
    
  )
}

export default QuestionList