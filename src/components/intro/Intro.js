import "./Intro.css"
import Me from '../../img/me.png'
import Award from "../../img/award.png";
import CV from "../../files/CV.pdf";

const Intro = () => {
	return (
		<div className="i">
			<div className="i-left">
				<div className="i-left-wrapper">
					<h2 className="i-intro">Hello, My name is</h2>
					<h1 className="i-name">Tatyana Asenova</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">React.js</div>
							<div className="i-title-item">Node.js</div>
							<div className="i-title-item">WordPress PHP</div>
							<div className="i-title-item">Content Creation</div>
							<div className="i-title-item">Copywriting</div>
						</div>
					</div>
					<p className="i-desc">
						A tech-savvy developer, extremely passionate about JavaScript and React.js. With over 5 years of experience as the CEO of a WordPress Web Agency and a desire to create stunning and innovative web products.
					</p>
					<div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
		  <a href={CV} target="_blank" rel="noreferrer">
            <h4 className="a-award-title">View My Resume</h4>
			</a>
          </div>
        </div>
				</div>

				<svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
			</div>
			<div className="i-right">
				<div className="i-bg"></div>
				<img src={Me} alt="" className="i-img" />
			</div>
		</div>
	)
}

export default Intro;
