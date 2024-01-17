import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { close, logo, menu } from '../../assets'
import { navLinks } from '../../constants'

const NavBar = () => {
  const [toggle, settoggle] = useState(false)

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
    </nav>
  )
}

export default NavBar