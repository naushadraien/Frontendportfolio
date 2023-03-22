import React, {useState} from 'react'
import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  //using destructuring
  const {name, email, message} = formData;

  //where e is event
  const handleChangeInput = (e) =>{
    const {name, value} = e.target;
    //here ... is used for destructing of name and value
    setFormData({...formData, [name] : value});
  }
  const handleSUBMIT= ()=>{
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
    client.create(contact)
    .then(()=> {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }
  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:naushadraien5@gmail.com" className='p-text'>naushadraien5@gmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <a href="tel: +977 9741660391" className='p-text'>+977 9741660391</a>
          </div>
      </div>
      
      {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}  />
        </div>
       <div className="app__flex">
          <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}  />
        </div>
          <div>
            <textarea className='p-text' placeholder='Your Message To Me' name='message' value={message} onChange={handleChangeInput}/>
          </div>
          <button type='button' className='p-text' onClick={handleSUBMIT}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
       : <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
       </div> }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
    'app__whitebg'
  );