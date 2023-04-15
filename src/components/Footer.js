import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {

  return (

    <footer>
      <div className="footer__container">
        <div className="footer__copy-info">
          <span>&copy; 2022–2023 </span>
          <span><a href="https://aprilcopley.netlify.app" target='_blank' className="footer__link clickable">April Copley</a></span>
        </div>

        <div className="footer__links">

          <a href="https://twitter.com/aprilcopley_dev" target='_blank' className="footer__link clickable">
            <i className="footer__icon"><FaTwitter /></i>
          </a>

          <a href="https://github.com/acopperlily" target='_blank' className="footer__link clickable">
            <i className="footer__icon"><FaGithub /></i>
          </a>

          <a href="https://www.linkedin.com/in/april-copley/" target='_blank' className="footer__link clickable">
            <i className="footer__icon"><FaLinkedin /></i>
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;