import "./About.css";
import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
		I am a highly driven individual who is passionate about technology, learning, reading and exploration.
        </p>
        <p className="a-desc">
          My main skills include:
        </p>
		<div className="skills-wrapp">
		<span className="skill-item"> ES6 (JavaScript) </span>
		<span className="skill-item"> React.js </span>
		<span className="skill-item"> Node.js </span>
		<span className="skill-item"> HTML </span>
		<span className="skill-item"> CSS </span>
		<span className="skill-item"> PHP for WordPress Development </span>
		</div>

      </div>
    </div>
  );
};

export default About;
