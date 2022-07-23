import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter,} from 'react-icons/fa'

import './Footer.css'


const Footer = () => {
const date = new Date().getFullYear();

    return (
        <footer class="footer">
        <div class="section-center">
          <div class="social-icons">
              <FaFacebook className='icon'/>
              <FaInstagram className='icon'/>
              <FaTwitter className='icon'/>
          </div>
          <p class="footer-text">
            &copy;{date} <span class="text-primary">Inter-wood</span>. all rights
            reserved
          </p>
        </div>
      </footer>
    )
}

export default Footer
