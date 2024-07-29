import "./Product.css";

function Product({ id, name, image, onAddToCart }) {
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
        onClick={() => onAddToCart(id, name, image)}
      >
        Add to cart
      </button>
    </div>
  );
}

export function Products({ products, onAddToCart }) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          image={product.image}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;
