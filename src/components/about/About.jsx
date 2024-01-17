import React from 'react'
import './about.css'
import { about } from '../../assets'
import Button from '../../constants/button/Button'

const About = () => {
  return (
    <section className="about-us" id='about-us'>
      <h1 className='about'>
        About Us
      </h1>
      <div className="row">
        <div className="about-col">
          <h1>Welcome to Swiftrise</h1>
          <p>
            As a dynamic subsidiary of the renowned Precise Lighting, we bring a fusion of expertise and innovation in the vertical transportation sector. Our commitment transcends beyond selling products; we aim to revolutionize your experience with cutting-edge technology and unparalleled customer service. <br /> Leveraging over a decade of Precise Lighting's industry leadership, Swiftrise blends quality with reliability. Our spectrum ranges from sleek standard models to bespoke, architecturally stunning lift and escalator solutions. <br /> We understand that every client is unique. Our catalogue is a testament to our diverse and adaptive product range, designed to meet specific needs and exceed expectations.
          </p>
          <Button text='EXPLORE NOW' style="hero-btn red-btn" />
        </div>
        <div className="about-col">
          <img src={about} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About