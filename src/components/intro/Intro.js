import "./Intro.css"
import Me from '../../img/me.png'

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
					<div className="i-desc">
						I am extremely passionate for all things JavaScript. My main goal is to create stylish and modern web sites, platforms and online stores using React.js
					</div>
				</div>
			</div>
			<div className="i-right">
				<div className="i-bg"></div>
				<img src={Me} alt="" className="i-img" />
			</div>
		</div>
	)
}

export default Intro;
