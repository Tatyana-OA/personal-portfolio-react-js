import "./Footer.css";
import { FaGithub, FaLinkedin, FaPenFancy } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="f">
      <div className="contact-wrap">
        <div className="contact-item">
			<a href="https://www.linkedin.com/in/tatyana-asenova-76a1341b2/" className="f-link" target="_blank" rel="noreferrer">
          <FaLinkedin />
          LinkedIn
		  </a>
        </div>
        <div className="contact-item">
		<a href="https://github.com/Tatyana-OA" className="f-link" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
		  </a>
        </div>
        <div className="contact-item">
		<a href="mailto:tatyanaolegasenova97@gmail.com" className="f-link" target="_blank" rel="noreferrer">
          <FaPenFancy /> tatyanaolegasenova97@gmail.com
		  </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
