import React from 'react';
import {images} from '../constants'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
       {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                  // {//* this anchor tag directly take to the page when clicked on any of the above link */}
                  <a
                  href={`#${item}`}
                  key={item + index}
                  className='app__navigation-dot'
                   style={active === item ? { backgroundColor: '#313BAC'} : {}}
                   />
              ))}
              </div>
              )
            }

export default NavigationDots