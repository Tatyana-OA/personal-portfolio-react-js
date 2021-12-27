import "./ProductList.css";
import Product from '../product/Product'
import {products} from '../../data'
const ProductList = () => {
  return (
    <div className="pl">
      <div className="l-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
	  <div className="pl-list">
		  {products.map(item => (
		  <Product
		 	key={item.id}
			img={item.img}
			link={item.link}
			title={item.title}
		  />
		  ))}
	  </div>
    </div>
  );
};

export default ProductList;
