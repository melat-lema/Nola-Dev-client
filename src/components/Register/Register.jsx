import React, { useState } from "react"
import { useRef } from "react"
import LayOut from "../LayOut/LayOut"
import classes from "./register.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "../../axiosConfig"
import { IconButton } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Register(){
  const usernameDom= useRef();
  const firstnameDom= useRef();
  const lastnameDom= useRef();
  const emailDom=useRef();
  const passwordDom= useRef();
  const [message, setMessage]= useState()
  const navigate= useNavigate()
  const [values, setValues] =useState({
    password: "",
    showPassword: false,
});

const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
};

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
    setValues({
        ...values,
        [prop]: event.target.value,
    });
};
  async function handleSubmit(e) {
    e.preventDefault();
    
    const usernameValue= usernameDom.current.value;
    const firstValue= firstnameDom.current.value;
    const lastValue= lastnameDom.current.value;
    const emailValue= emailDom.current.value;
    const passwordValue= values.password;
    
    try {
      const {data}=await axios.post('/users/register',{
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passwordValue,
      });
      navigate("/")
    } catch (error) {
      console.log(error.response);
      setMessage(error.response.data.msg)
    }
  }
  return(
    <LayOut>
      <div className={classes.outer__container}>
        <div className={classes.left__container}>
        {
         message && (
          <small style={{
            padding: "5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
          }}>
            {message}
          </small>
        )
      }
          <h3>Join the network</h3>
          <p>Already have an account?<Link to="/">Sign in</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <input ref={usernameDom}type="text" placeholder="User-name"/>
            </div>
            <section className={classes.flex__container}>
              <input ref={firstnameDom}type="text" placeholder="First-name"/>
              <input ref={lastnameDom} type="text" placeholder="Last-name"/>
            </section>
            <div>
            <input ref={emailDom} type="email" placeholder="Email Address"/>
            </div>
            <div>
            <input type={
                    values.showPassword
                        ? "text"
                        : "password"
                }
                onChange={handlePasswordChange("password")}
                value={values.password} placeholder="Password"/>
                 <div className={classes.visible__container}>{
                   
                   <div
                       onClick={
                           handleClickShowPassword
                       }
                       onMouseDown={
                           handleMouseDownPassword
                       }
                   >
                       {values.showPassword ? (
                           <VisibilityIcon  />
                       ) : (
                           <VisibilityOffIcon />
                       )}
                  </div>
              
           }</div>
            </div>
            <span>I agree to the <Link to="">terms of service</Link></span>
            <button type="submit">Agree and Join</button>
            <Link to="">Already have an account?</Link>
          </form>
        </div>
        <div className={classes.right__container}>
        <h3>About</h3>
        <h1>Nola-Dev Networks</h1>
        <div>
           <p>No matter what stage of life you are in, whether you're just starting elementary school or being promoted to CEO of a fortune 500 company. You have much to offer to those who are trying to follow in your footsteps. </p>
            <p>Wheather you are willing to share yout knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
        </div>
             <button>HOW IT WORKS </button>
      </div>
      </div>
      
    </LayOut>
  )
}

export default Register