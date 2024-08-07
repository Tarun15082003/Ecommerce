import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import AppContextProvider from "./store/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Header></Header>
      <Products></Products>
      <Cart></Cart>
      <AddProduct></AddProduct>
    </AppContextProvider>
  );
}

export default App;
