import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          <div className="the-best-ad">
            <div></div>
            <span>the best Fitness Club in the town</span>
          </div>
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis atque repellat veritatis!
              </span>
            </div>
          </div>
          <div className="figures">
            <div>
              <span>110+</span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>+50</span>
              <span>Fitness Programs</span>
            </div>
            <div>
              <span>+978</span>
              <span>Members Joined</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <div className="heart-rate">
            <img src={heart} alt="#"/>
            
              <span>Heart rate</span>
              <span>116 bpm</span>
            
          </div>
          <img src={hero_image} className='hero-img' alt="hero"/>
          <img src={hero_image_back} className='hero-img-back' alt="hero"/>
          <div className="calories">
            <img src={Calories} alt="cal"/>
            <div>
              <span>Calories Burned</span>
              <span>220 Kcal</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero