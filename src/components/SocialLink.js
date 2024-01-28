import React from 'react'

const SocialLink = ({ link, icon }) => {

  // <a href="https://twitter.com/aprilcopley_dev" target='_blank' className="footer__link clickable">
  // <i className="footer__icon"><FaTwitter /></i>
  // </a>

  return (
    <a 
      href={link}
      target='_blank'
      className='footer__link clickable'
    >
      <i className='footer__icon'>{icon}</i>
    </a>
  )
}

export default SocialLink;
