import React, { useState } from 'react';
//here react-icon is  Library to provide the icons in react
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {/* map() is for looping to show each navbar content */}
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            {/* this anchor tag directly take to the page when clicked on any of the above link */}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app_navbar-menu'>
        {/* Here onClick={(I am a callback function)=> setToggle(false)} */}
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {
          //here if toggle is true then run the following inside the ()
          toggle && (
            //motion for small screen devices and where 300 is 300px width when clicked on menu button in small screen
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              {/* for closing the menu button */}
              <HiX onClick={() => setToggle(false)} />
              <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  {/* this anchor tag directly take to the page when clicked on any of the above link */}
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar