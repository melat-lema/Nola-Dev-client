import React, { useContext, useState, useEffect }from 'react'
import LayOut from '../LayOut/LayOut'
import {AppState} from "../../App"
import { Link , useLocation,useParams} from 'react-router-dom'
import axios from '../../axiosConfig'
import Loader from '../Loader/Loader'
import QuestionList from './QuestionList'


function QuestionDetail(){
  const {questionid}=useParams()
  const[isLoading, setIsLoading]= useState(false)
  const [datas, setData] = useState([]);
  // const location =useLoacation()
  useEffect(() => {
    axios.get(`/questions/allin/${questionid}`)
      .then((res)=>{
        console.log(res.data)
        setData(res.data)  
        setIsLoading(false)    
       })
       .catch((err)=>{
        console.log(err)
        setIsLoading(false)    
      }
      )
  }, []);
  return(
    <LayOut>
      {isLoading? (<Loader/>):(<QuestionList 
       Question={datas} flex={true}/>
      )}  
    </LayOut>
  )
}
export default QuestionDetail