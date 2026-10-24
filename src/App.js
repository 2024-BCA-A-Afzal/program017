
import React, { useReducer } from "react";
import { cartReducer, initialState } from "./reducer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="app">
      <header className="header">
        <h1>Shopping Cart</h1>
        <p>React useReducer Practical - Program 17</p>
        <span className="cart-badge">
          Cart Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </header>

      <main className="container">
        <ProductList products={products} dispatch={dispatch} />
        <Cart cart={cart} dispatch={dispatch} />
      </main>

      <footer>
        <p>Shopping Cart Application | Built with React useReducer</p>
      </footer>
    </div>
  );
}

export default App;
