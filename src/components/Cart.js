
import React from "react";

function Cart({ cart, dispatch }) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="section">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty. Add some products!</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>
                  ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
                </p>
                <strong>
                  Subtotal: ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="cart-actions">
                <button
                  className="quantity-btn"
                  onClick={() =>
                    dispatch({ type: "DECREASE", id: item.id })
                  }
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  -
                </button>

                <span className="quantity">{item.quantity}</span>

                <button
                  className="quantity-btn"
                  onClick={() =>
                    dispatch({ type: "INCREASE", id: item.id })
                  }
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE", id: item.id })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h3>Total Items: {totalItems}</h3>
        <h2>
          Total Price: ₹{totalPrice.toLocaleString("en-IN")}
        </h2>
      </div>
    </section>
  );
}

export default Cart;
