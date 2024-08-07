import { useContext } from "react";
import "./Product.css";
import AppContext from "../../store/app-context";

function Product({ id, name, image }) {
  const { handleAddToCart } = useContext(AppContext);
  return (
    <div key={id} className="product">
      <img
        src={require(`../../assets/${image}`)}
        alt={name}
        className="product-img"
      />
      <div className="prduct-name">{name}</div>
      <button
        className="product-btn"
        onClick={() => handleAddToCart(id, name, image)}
      >
        Add to cart
      </button>
    </div>
  );
}

export function Products() {
  const { products } = useContext(AppContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product id={product.id} name={product.name} image={product.image} />
      ))}
    </div>
  );
}

export default Products;
