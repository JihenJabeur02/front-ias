import React, { useState } from "react";

const RequestForm = () => {
  const [products, setProducts] = useState([{ productId: "", quantity: 1 }]);
  const [formData, setFormData] = useState({
    orderId: "",
    date: "",
    industryCode: "",
    industryIdRequester: "",
    industryIdFullFiller: "",
    commandDate: "",
    totalPrice: 0,
    paymentType: "",
  });

  const productOptions = [
    { id: "product1", name: "Product 1", price: 10 },
    { id: "product2", name: "Product 2", price: 20 },
    { id: "product3", name: "Product 3", price: 30 },
  ];

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle product changes
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  // Add a new product
  const addProduct = () => {
    setProducts((prev) => [...prev, { productId: "", quantity: 1 }]);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const selectedProduct = productOptions.find((p) => p.id === product.productId);
      return total + (selectedProduct ? selectedProduct.price * product.quantity : 0);
    }, 0);
  };

  const handleSubmit = () => {
    alert(`Request submitted!`);
    console.log("Form Data:", { ...formData, products });
  };

  return (
    <div className="request-form-container">
      <header className="form-header">
        <h2>Request</h2>
        <div className="order-info">
          <div className="form-group-inline">
            <label htmlFor="orderId">Order ID:</label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              value={formData.orderId}
              onChange={handleFormChange}
              placeholder="Enter Order ID"
            />
          </div>
          <div className="form-group-inline">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleFormChange}
            />
          </div>
        </div>
      </header>

      <form className="request-form">
        {/* Industry Details */}
        <div className="form-group">
          <label>Industry Code (Requester):</label>
          <input
            type="text"
            name="industryCode"
            value={formData.industryCode}
            onChange={handleFormChange}
            placeholder="Enter industry code"
          />
        </div>
        <div className="form-group">
          <label>Industry ID (Requester):</label>
          <input
            type="text"
            name="industryIdRequester"
            value={formData.industryIdRequester}
            onChange={handleFormChange}
            placeholder="Enter requester ID"
          />
        </div>
        <div className="form-group">
          <label>Industry ID (FullFiller):</label>
          <input
            type="text"
            name="industryIdFullFiller"
            value={formData.industryIdFullFiller}
            onChange={handleFormChange}
            placeholder="Enter fullfiller ID"
          />
        </div>

        {/* Products */}
        <div className="products-section">
          <h3>Products</h3>
          {products.map((product, index) => (
            <div key={index} className="product-row">
              <select
                value={product.productId}
                onChange={(e) => handleProductChange(index, "productId", e.target.value)}
              >
                <option value="">Select Product</option>
                {productOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name} - ${option.price}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={product.quantity}
                min="1"
                onChange={(e) => handleProductChange(index, "quantity", parseInt(e.target.value))}
              />
            </div>
          ))}
          <button type="button" onClick={addProduct} className="add-product-btn">
            + Add Another Product
          </button>
        </div>

        {/* Command Date */}
        <div className="form-group">
          <label>Command Date:</label>
          <input
            type="date"
            name="commandDate"
            value={formData.commandDate}
            onChange={handleFormChange}
          />
        </div>

        {/* Total Price */}
        <div className="form-group">
          <label>Total Price:</label>
          <input
            type="text"
            value={`$${calculateTotalPrice()}`}
            readOnly
            className="readonly"
          />
        </div>

        {/* Payment Type */}
        <div className="form-group">
          <label>Payment Type:</label>
          <div className="payment-types">
            {["Credit", "Debit", "Cash"].map((type) => (
              <button
                key={type}
                type="button"
                className={`payment-btn ${formData.paymentType === type.toLowerCase() ? "selected" : ""}`}
                onClick={() => setFormData({ ...formData, paymentType: type.toLowerCase() })}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="buttons">
          <button type="button">Send Request</button>
          <button type="button">Archived Request</button>
          <button type="button">Register Request</button>
        </div>
      </form>

      <footer>
        <button className="contact-button">Contact Us</button>
      </footer>

      <style>
        {`
          .request-form-container {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #4caf50;
            margin-bottom: 20px;
            padding-bottom: 10px;
          }

          .form-header h2 {
            color: #4caf50;
            margin: 0;
          }

          .form-group {
            margin-bottom: 20px;
          }

          label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }

          input,
          select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 5px;
          }

          input.readonly {
            background-color: #eaeaea;
            cursor: not-allowed;
          }

          .products-section {
            margin-bottom: 20px;
          }

          .product-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
          }

          .add-product-btn {
            display: inline-block;
            background-color: #383938;
            color: white;
            padding: 1px 4px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }

          .add-product-btn:hover {
            background-color: #838483;
          }

          .order-info {
            display: flex;
            gap: 20px;
          }

          .form-group-inline {
            display: flex;
            flex-direction: column;
          }

          .form-group-inline input {
            width: 200px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-top: 5px;
          }

          .payment-types {
            display: flex;
            gap: 10px;
          }

          .payment-btn {
            width: 150px;
            height: 50px;
            flex: 1;
            padding: 10px;
            border: 1px solid #ffffff;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            font-weight: bold;
          }

          .payment-btn:hover {
            background-color: #ffffff;
          }

          .payment-btn.selected {
            background-color: #4caf50;
            color: rgb(255, 255, 255);
            border-color: #4caf50;
          }

          .form-actions {
            text-align: center;
          }

          .buttons {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
          }

          footer {
            margin-top: 20px;
            text-align: center;
          }

          .contact-button {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }

          .contact-button:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </div>
  );
};

export default RequestForm;
