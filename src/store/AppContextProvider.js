import React, { useState } from "react";
import AppContext from "./app-context";
import productsData from "../data/products.json";

const AppContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showAddProductForm, setshowAddProductForm] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(productsData);

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }

  function handleAddToCart(productId, productName, productImage) {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (productInCartIndex === -1) {
      const cartItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setCartItems((state) => [...state, cartItem]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productInCartIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  }

  function handleIncreaseQuantity(productId) {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    const updatedCartItems = [...cartItems];
    updatedCartItems[productInCartIndex].quantity += 1;
    setCartItems(updatedCartItems);
  }

  function handleDecreaseQuantity(productId) {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    let updatedCartItems = [...cartItems];
    updatedCartItems[productInCartIndex].quantity -= 1;
    if (updatedCartItems[productInCartIndex].quantity === 0) {
      updatedCartItems = updatedCartItems.filter(
        (item, index) => index !== productInCartIndex
      );
    }
    setCartItems(updatedCartItems);
  }

  function openAddProductForm() {
    setshowAddProductForm(true);
  }

  function closeAddProductForm() {
    setshowAddProductForm(false);
  }

  function handleAddProduct(productName) {
    const product = {
      id: products.length + 1,
      name: productName,
      image: "default_product.png",
    };
    setProducts((state) => [...state, product]);
    closeAddProductForm();
  }

  const appContextValue = {
    showCart,
    showAddProductForm,
    cartItems,
    products,
    openCart,
    closeCart,
    handleAddToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    openAddProductForm,
    closeAddProductForm,
    handleAddProduct,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
