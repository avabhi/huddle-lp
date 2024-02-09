import React from 'react'
import logo from '../logo2.svg'
import locationLogo from '../icon-location.svg'
import emailLogo from '../icon-email.svg'
import phoneLogo from '../icon-phone.svg'
import Contact from './Contact'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot'>
        <div>
        <img className='footer-logo' src={logo} alt="logo" />
        </div>
        <div className='footer-content'>
            <div className='footer-topic'>
                <div className='contact'>
                <div className='menu'>
                   <Contact src={locationLogo}/>
                   <Contact src={emailLogo}/>
                     <Contact src={phoneLogo}/>
                     </div>
                     <div className='menu'>
                    <p>Banglore Hsr Layout</p>
                    <p>vabhinav368@gmail.com</p>
                    <p>+91-8376953799</p>
                    </div>
                </div>
            </div>
            <div className='menu'>
                <p>About Us</p>
                <p>What we do</p>
                <p>FAQ</p>
            </div>
            <div className='menu'>
                <p>Career</p>
                <p>Blog</p>
                <p>About us</p>
            </div>
            <div className='icons-logo'>
                <div><i className="fa-brands fa-facebook"></i></div>
                <div><i className="fa-brands fa-square-twitter"></i></div>
                <div><i className="fa-brands fa-instagram"></i></div>
            </div>
        </div>
        <div className='copyright'>@ Copyright 2024 huddle</div>
        </div>
    </div>
  )
}

export default Footer