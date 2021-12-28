import "./Product.css"

const Product = ({img, link, title, description, tech, repo}) => {

	return (
		<div className="p-wrap">

		<div className="p">
			<div>
			<div className="p-browser">
				<div className="p-circle"></div>
				<div className="p-circle"></div>
				<div className="p-circle"></div>
				<h3 className="p-title">{title}</h3>
			</div>
			<a href={link} target="_blank" rel="noreferrer">
				<img src={img} alt="" className="p-img" />

			</a>
			</div>

		</div>
		<div className="p-descr">
			{description}
			<a className="p-repo" href={repo} target="_blank" rel="noreferrer" ><h3>Visit GitHub Repository</h3> </a>
			</div>
			<div className="p-tech">
			
			<div className="tech-wrap">
		
				{tech && tech.map(t=> (<span className="tech-item"> {t} </span>))}
			</div>
		
			</div>
		</div>
	)
}

export default Product;
