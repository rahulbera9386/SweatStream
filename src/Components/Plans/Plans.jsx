import React from 'react'
import "./Plans.css"
import whiteTick from "../../assets/whiteTick.png"
import { plansData } from './../../data/plansData';

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap:"2rem"}}>
        <span className='stroke-text'>Ready To Start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>Now With Us</span>
      </div>
      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan,i)=>(
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature,i)=>(
                <div className="feature">
                  <img src={whiteTick} alt="#"/>
                <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
          <span>Some More Benifits--></span>
       
        </div>
        <button className='btn'>Join Now</button>
          </div>
        ))}
       
      </div>
    </div>

  )
}

export default Plans