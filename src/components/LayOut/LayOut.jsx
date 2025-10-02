import React from "react"
import Footer from "../Footer/footer"
import Header from "../Header/Header"

function LayOut({children}){
  return(
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default LayOut