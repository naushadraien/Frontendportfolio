import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
//here imported higher order component to use in the whole components like about, skills, etc
import { AppWrap, MotionWrap } from '../../wrapper';
import {images} from '../../constants'
import { urlFor, client } from '../../client';
import './About.scss';


const About = () => {
  //Creating a dynamic data from sanity
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data)=>setAbouts(data))
  }, []);
  
  return (

    <>
      <h2 className='head-text'> Who <span>I </span> am ?<span> <br /> I</span> am a</h2>
      <div className='app__profiles'>
        {/* Here is looping syntax for looping the above abouts array */}
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className='app__profile-item'
          key={index}
          >
            {/* Using the sanity urlFor for getting the images from the sanity database */}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:20 }}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10 }}>{about.description}</p>
          </motion.div>
        ))}

      </div>

    </>
  )
}

//Appwrap is also used here for using the Appwrap for the whole About component and here about is the id we are passing
//here MotionWrap is higher order component that will be used to show the animation
export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
  );