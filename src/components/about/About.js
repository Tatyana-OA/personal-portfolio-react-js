import "./About.css";
import MeSide from "../../img/Me_side.jpg";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={MeSide}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
		I am a <strong>highly driven individual </strong>who is passionate about <strong>technology, learning</strong>, reading and exploration.
		</p>
		<p className="a-sub">
			I have been actiely practicing <strong>JavaScript, HTML and CSS for over 2 years now </strong>with my main focus being on establishing <strong>deeper React.js knowledge.</strong> </p>
		<p className="a-sub">
		I have <strong>5 years of experience as lead project manager and CEO of a WordPress Web Agency</strong>, with some of that experience including <strong>custom WordPress coding using PHP, JavaScript, HTML and CSS</strong>.
		</p>
        <p className="a-desc">
          Main tech skills:
        </p>
		<div className="skills-wrapp">
		<span className="skill-item"> ES6 (JavaScript) </span>
		<span className="skill-item"> React.js </span>
		<span className="skill-item"> Node.js </span>
		<span className="skill-item"> HTML </span>
		<span className="skill-item"> CSS </span>
		<span className="skill-item"> PHP for WordPress Development </span>
		
		</div>
		<p className="a-desc">
          Main non-tech skills:
        </p>
		<div className="skills-wrapp">
		<span className="skill-item"> Content Creation</span>
		<span className="skill-item"> Copywriting </span>
		<span className="skill-item"> Project management </span>
		<span className="skill-item"> Team work </span>
		<span className="skill-item"> Leadership </span>
		
		</div>

      </div>
    </div>
  );
};

export default About;
