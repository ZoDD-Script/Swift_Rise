import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { close, logo, menu, user, whatsappIcon } from '../../assets'
import { navLinks, whatsapp } from '../../constants'

const NavBar = () => {
  const [toggle, settoggle] = useState(false)
  const [whatsappDropdown, setWhatsappDropdown] = useState(false);

  return (
    <nav>
      <a href="index.html">
        <img src={logo} alt="swiftrise" />
      </a>
      <div className="nav-links" id="navLinks">
        <ul>
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <Link to={nav.href} smooth={true} duration={500}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='swiftrise__navbar-navlinks__mobile'>
        <img 
          src={toggle? close : menu}
          alt="menu"
          className='swiftrise__navbar-navlinks__mobile-toggle'
          onClick={
            () => settoggle((prev) => !prev)
          }
        />

        <div className={`${toggle ? 'toggle__flex' : 'toggle__hidden'}`}
        >
          <ul className='swiftrise__navbar-navlinks__mobile-links'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <Link to={nav.href} smooth={true} duration={500} onClick={() => settoggle(false)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <div className='whatsapp__chat'>
        <img
          src={whatsappIcon} // Replace with your WhatsApp icon source
          alt="whatsapp"
          className='whatsapp__icon'
          onClick={() => setWhatsappDropdown((prev) => !prev)}
        />

        {whatsappDropdown && (
          <div className='whatsapp__dropdown-container'>
            <div className='whatsapp__dropdown-header'>
              <img src={close} alt="close" onClick={() => setWhatsappDropdown((prev) => !prev)} className='whatsapp__dropdown-close' />
              <h2 className='whatsapp__dropdown-heading'>Support</h2>
            </div>
            {whatsapp.map((wa) => (
              <div key={wa.id} className='whatsapp__dropdown-body'>
                <a onClick={() => setWhatsappDropdown((prev) => !prev)} href={`https://wa.me/${wa.number}?text=Hi...`} target='_blank' className='whatsapp__dropdown-body__customercare-container'>
                  <img src={user} alt="" className='whatsapp__dropdown-body__customercare-container__image' />
                  <div>
                    <p className='whatsapp__dropdown-body__customercare-container__title'>{wa.title}</p>
                    <p className='whatsapp__dropdown-body__customercare-container__name'>
                      {wa.name}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar