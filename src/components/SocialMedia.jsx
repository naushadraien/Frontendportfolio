import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedin, FaFacebookF, FaGithub} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/naushad-raien-98b069239" target='_blank' rel="noreferrer">
            <FaLinkedin/>
            </a>
        </div>
        <div>
          <a href="https://www.facebook.com/naushad78692" target='_blank' rel="noreferrer">
            <FaFacebookF/>
            </a>
        </div>
        <div>
          <a href="https://github.com/naushadraien" target='_blank' rel="noreferrer">
            <FaGithub/>
            </a>
        </div>
        <div>
          <a href="https://www.instagram.com/haq.naushad" target='_blank' rel="noreferrer">
            <BsInstagram/>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia