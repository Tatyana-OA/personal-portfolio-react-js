import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";

function Contact() {
	const formRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
	}
  return (
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
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
		  <form ref={formRef} onSubmit={handleSubmit}>
			  <input type="text" placeholder="Name" name="user_name"/>
			  <input type="text" placeholder="Subject" name="user_subject"/>
			  <input type="text" placeholder="Email" name="user_email"/>
			  <textarea rows="5" placeholder="Message" name="user_message"/>
			  <button>Submit</button>
		  </form>
		  </div>
        </div>
    
    </div>
  );
}

export default Contact;
