import "./Header.css";

export function Header({ openCart, openAddProductForm }) {
  return (
    <div className="header">
      <h1 className="header-left">My React Store</h1>
      <span className="header-right">
        <button className="header-btn" onClick={openAddProductForm}>
          Add Product
        </button>
        <button className="header-btn" onClick={openCart}>
          Cart
        </button>
      </span>
    </div>
  );
}

export default Header;
