import "./Product.css"

const Product = ({img, link, title}) => {
	return (
		<>
		<div className="p">
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
		</>
	)
}

export default Product;
