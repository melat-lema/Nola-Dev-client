import React, { useState,useContext } from "react";
import classes from './header.module.css'
import {Link} from 'react-router-dom'
import logo from "../images/Nola.png"
import {AppState} from "../../App"
function Header(){
  const {user}= useContext(AppState)
  return(
   <section className={classes.header_outer_container}>
    <div className={classes.logo__container}>
      {/* {logo} */}
     <Link to="">
     <img src={logo} alt=""/>
     </Link>
    </div>
    <div className={classes.link__container}>
      <Link to="/home">Home</Link>
      <Link to="/how">How it works</Link>
      {
        user? (<Link to="/">Log Out</Link>):(<button>SIGN IN</button>)
      }
      
    </div>
   </section>
  )
}

export default Header