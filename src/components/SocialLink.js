const SocialLink = ({ link, icon, label }) => {

  return (
    <a 
      href={link}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="footer__link clickable"
    >
      <i 
        className="footer__icon"
        aria-hidden="true"
        focusable="false"
      >
        {icon}
      </i>
    </a>
  )
}

export default SocialLink;
