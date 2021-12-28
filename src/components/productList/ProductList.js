import "./ProductList.css";
import Product from '../product/Product'
import {products} from '../../data'
const ProductList = () => {
  return (
    <div className="pl">
      <div className="l-texts">
        <h1 className="pl-title">React.js Projects</h1>
        <p className="pl-desc">
         Check out my latest react.js projects including various additional libraries and features.
        </p>
      </div>
	  <div className="pl-list">
		  {products.map(item => (
		  <Product
		 	key={item.id}
			img={item.img}
			link={item.link}
			title={item.title}
			description={item.description}
			tech={item.tech}
			repo = {item.repo}
		  />
		  ))}
	  </div>
    </div>
  );
};

export default ProductList;
