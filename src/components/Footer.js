import SocialLink from "./SocialLink";
import socialInfo from "../utils/socialInfo";
import getYear from "../utils/getYear";

function Footer() {

  return (

    <footer>
      <div className="footer__container">

        <div className="footer__copy-info">

          <span className="footer__year">
            &copy; {getYear()}
          </span>

          <span className="footer__portfolio">
            <a 
              href="https://aprilcopley.netlify.app"
              aria-label="Professional portfolio"
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__link clickable"
            >
              April Copley
            </a>
          </span>

        </div>

        <div className="footer__links">

          {socialInfo.map((social, i) => (
            <SocialLink 
              key={i} 
              link={social.link} 
              icon={<social.icon />} 
              label={social.label} 
            />
          ))}

        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
