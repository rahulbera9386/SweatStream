import React from 'react'
import "./Footer.css"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <div className="footer">
      <hr/>
      <div className="social-links">
      <img src={github} alt="github"/>
<img src={instagram} alt="instagram"/>
<img src={linkedin} alt="linkedin"/>
      </div>
      <div className="footer-content">
      <p>Made with love by <span>&#x1F496;</span> Rahul Bera</p>
      </div>
    </div>
  )
}

export default Footer