import React from 'react'

import './cta.css'
import Button from '../../constants/button/Button'

const CTA = () => {
  return (
    <section className="cta">
      <h1>Join us in This Journey to Redefine Elevation Solutions, <br />
        Where Your Success is our Success.
      </h1>
      <Button text='CONTACT US' style="hero-btn" />
    </section>
  )
}

export default CTA