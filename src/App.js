import { useState } from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/HomePage/Home';
import Cart from './components/pages/CartPage/Cart';
import Shop from './components/pages/ShopPage/Shop';
// create a home page
// create a shopping page that lists all items for sale
// create a cart page that lists all items in the cart
// use this component for routing

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(cart.length);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
