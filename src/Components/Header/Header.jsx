import React, { useState } from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"



const Header = () => {

const mobile=window.innerWidth<=768?true:false;
const [menuOpened,setMenuOpened]=useState(false);

  return (
    <div className="header">
      <img src={logo} alt="logo" className='logo'/>
    {menuOpened===false && mobile===true?
    (
      <div style={{backgroundColor:"var(--appColor)",padding:".5rem",borderRadius:"5px"}}>
  
   <img src={Bars} alt="#" style={{width:"1.5rem",height:"1.5rem"}} onClick={()=>setMenuOpened(true)}/>
   </div>):
   (
<ul className='header-menu'>
  

      <li onClick={()=>setMenuOpened(false)}>Home</li>
      <li onClick={()=>setMenuOpened(false)}>Plans</li>
      <li onClick={()=>setMenuOpened(false)}>Testimonials</li>
      <li onClick={()=>setMenuOpened(false)}>Programs</li>
      <li onClick={()=>setMenuOpened(false)}>Why Us</li>
      {/* <li><Link to="hero" onClick={()=>setMenuOpened(false)}>Home</Link></li>
      <li><Link to="plans" onClick={()=>setMenuOpened(false)}>Plans</Link></li>
      <li><Link to="testimonials" onClick={()=>setMenuOpened(false)}>Testimonials</Link></li>
      <li><Link to="plans" onClick={()=>setMenuOpened(false)}>Programs</Link></li>
      <li><Link to="whyus" onClick={()=>setMenuOpened(false)}>Why Us</Link></li> */}
    </ul>
  )
  }
    
    
    </div>
  )
}

export default Header