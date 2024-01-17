import React from 'react'

import './footer.css'
import { facebook, instagram, linkedin, twitter } from '../../assets'

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <h4>Choose Swiftrise, Choose Excellence</h4>
        <p>Our collaborative approach means shared growth, increased visibility, and mutual success. <br /> Join us in this journey to redefine elevation solutions, where your success is our success!</p>
        <div className="icons">
          <img className="fa fa-facebook" src={facebook} alt='facebook_logo' />
          <img className="fa fa-twitter" src={twitter} alt='twitter_logo' />
          <img className="fa fa-instagram" src={linkedin} alt='linkedin_logo' />
          <img className="fa fa-linkedin" src={instagram} alt='instagram_logo' />
        </div>
        <p>Made with react by ZoDDScript</p>
      </section>
    </footer>
  )
}

export default Footer