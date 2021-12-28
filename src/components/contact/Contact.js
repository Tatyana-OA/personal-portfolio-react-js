import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Footer/Footer";

function Contact() {
	const formRef = useRef();
	const [done, setDone] = useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
		.sendForm(
		  "service_pfet4bv",
		  "template_vzmv742",
		  formRef.current,
		  "user_ASUFZV4633Wfp9UfdzYfX"
		)
		.then(
		  (result) => {
			console.log(result.text);
			setDone(true)
			e.target.reset()
		  },
		  (error) => {
			console.log(error.text);
		  }
		);
	}
  return (
	  <>
    <div className="c">
      <div className="c-bg"> </div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">
              Let's discuss your inquiry
            </h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +359 876 353 521
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                tatyanaolegasenova97@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
               Sofia, Bulgaria
              </div>
            </div>
          </div>
          <div className="c-right">
		  <p className="c-desc">
            <b>Are you interested in working with me?</b> Get in touch. I will be delighted to discuss your inquiries.
          </p>
		  <form ref={formRef} onSubmit={handleSubmit}>
			  <input type="text" placeholder="Name" name="user_name"/>
			  <input type="text" placeholder="Subject" name="user_subject"/>
			  <input type="text" placeholder="Email" name="user_email"/>
			  <textarea rows="5" placeholder="Message" name="user_message"/>
			  <button>Submit</button>
			  {done && <span className="email-thanks"> Thank you for your message! </span>}
		  </form>
		  </div>
        </div>

    </div>
	<Footer/>
	</>
  );
}

export default Contact;
