import React from "react";
import SocialLink from "./SocialLink";
import socialInfo from "../utils/socialInfo";
import getDateRange from "../utils/getDateRange";

function Footer() {

  return (

    <footer>
      <div className="footer__container">

        <div className="footer__copy-info">

          <span className="footer__daterange">
            &copy; {getDateRange(2022)}
          </span>

          <span>
            <a 
              href="https://aprilcopley.netlify.app"
              target='_blank' 
              rel='noopener noreferrer'
              className="footer__link clickable">
                April Copley
            </a>
          </span>

        </div>

        <div className="footer__links">

          {socialInfo.map((social, i) => (
            <SocialLink key={i} link={social.link} icon={<social.icon />}/>
          ))}

        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
