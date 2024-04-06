import React from 'react'
import "./Join.css"


const Join = () => {
  return (
    <div className="join-container">
      <div className="join-l">
        <hr/>
        <div>
          <span className='stroke-text'>Ready To</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className='stroke-text'> With Us</span>
        </div>
      </div>
      <div className="join-r">
<form className='email-container'>
<input type="email" name="user_email" placeholder='Enter Your Email'/>
<button className='btn email-btn'>Join Now</button>
</form>
      </div>
    </div>
  )
}

export default Join