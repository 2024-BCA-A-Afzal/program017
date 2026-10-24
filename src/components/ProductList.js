
import React from "react";

function ProductList({ products, dispatch }) {
  return (
    <section className="section">
      <h2>Available Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p className="price">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <button
              onClick={() =>
                dispatch({ type: "ADD", product })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
