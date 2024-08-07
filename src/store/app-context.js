import { createContext } from "react";

const AppContext = createContext({
  showCar: false,
  showAddProductForm: false,
  cartItems: [],
  products: [],
  openCart: () => {},
  closeCart: () => {},
  handleAddToCart: () => {},
  handleIncreaseQuantity: () => {},
  handleDecreaseQuantity: () => {},
  openAddProductForm: () => {},
  closeAddProductForm: () => {},
  handleAddProduct: () => {},
});

export default AppContext;
