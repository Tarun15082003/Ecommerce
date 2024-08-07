import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import "./AddProduct.css";
import AppContext from "../../store/app-context";

function AddProduct() {
  const { showAddProductForm, closeAddProductForm, handleAddProduct } =
    useContext(AppContext);
  const [productName, setProductName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddProduct(productName);
    setProductName("");
  }

  function handleProductNameChange(event) {
    const enteredName = event.target.value;
    setProductName(enteredName);
  }

  return (
    <Modal show={showAddProductForm} onClose={closeAddProductForm}>
      <div className="form-container">
        <div className="form-heading">Add Product</div>
        <form onSubmit={handleSubmit}>
          <div className="description">Enter Product Name</div>
          <div>
            <input
              className="form-input"
              value={productName}
              onChange={handleProductNameChange}
            ></input>
          </div>
          <div>
            <button type="submit" className="form-button">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
