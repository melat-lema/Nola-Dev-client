import React from 'react'
import logo from "../images/Nolablack.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import classes from "./footer.module.css"
function Footer(){
  return (
    <div className={classes.footer_outer_container}>
      <div className={classes.footer_inner_container}>
        <div className={classes.logo_icon}>
          <div className={classes.logo__container}>
          
          <img src={logo} alt=""/>
        </div>
        <div className={classes.footer_icons}>
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        </div>
        <div className={classes.footer_data}>
          <div className={classes.footer_data_left}>
            <p>Useful Link</p>
            <ul>
              <li>How it works</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className={classes.footer_data_right}>
            <p>Contact Info</p>
            <ul>
              <li>Nola Networks</li>
              <li>melatlema@gmail.com</li>
            </ul>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Footer