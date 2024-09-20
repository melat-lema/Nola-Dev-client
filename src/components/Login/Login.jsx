import React, {useState} from "react"
import { useRef } from "react"
import LayOut from "../LayOut/LayOut"
import classes from "./login.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "../../axiosConfig"
import { IconButton } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';

function Login(){
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
    
    const emailValue= emailDom.current.value;
    const passwordValue= values.password;
    
    try {
      const {data}=await axios.post('/users/login',{
        email: emailValue,
        password: passwordValue,
      });
      localStorage.setItem('token', data.token)
      navigate("/home")
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
          <h3>Login to your account</h3>
          <p>Don't have an account?<Link to="/register">Create a new account?</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div>
            <input ref={emailDom} type="email" placeholder="Email Address"/>
            </div>
            <div className={classes.disp__container}>
              <div>
            <input type={
                    values.showPassword
                        ? "text"
                        : "password"
                }
                onChange={handlePasswordChange("password")}
                value={values.password}
                 placeholder="Password"/>
                 </div>
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
            <div><Link to="">Forget password?</Link></div>
            <button>Login</button>
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

export default Login