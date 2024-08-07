import { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import AppContext from "../../store/app-context";

function CartItem({ id, name, image, quantity }) {
  const { handleIncreaseQuantity, handleDecreaseQuantity } =
    useContext(AppContext);
  return (
    <div key={id} className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name}></img>
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty: {quantity}</div>
          <div>
            <button
              className="cart-item-buttons qty-button qty-plus-button"
              onClick={() => handleIncreaseQuantity(id)}
            >
              +
            </button>
            <button
              className="cart-item-buttons qty-button"
              onClick={() => handleDecreaseQuantity(id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const { showCart, closeCart, cartItems } = useContext(AppContext);
  return (
    <Modal show={showCart} onClose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
            />
          ))
        ) : (
          <div className="empty_cart">Cart is Empty</div>
        )}
        <div className="cart-buttons">
          <button className="cart-item-buttons close-cart" onClick={closeCart}>
            Close
          </button>
          {cartItems.length > 0 && (
            <button className="cart-item-buttons" onClick={closeCart}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
