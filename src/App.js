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

  const checkCart = (itemInfo) => {
    const findDuplicate = cart.find(item => item.id === itemInfo.id);
      if(findDuplicate) {
        findDuplicate.quantity += 1;
      } else {
        // add total and cart count when created delete method
        setCart([...cart, itemInfo]);
      }
  }

  const addToCart = (e) => {
    const item = e.target.parentElement.parentElement;
    if (item.classList.contains('shop-item')) { 
      const itemInfo = {
        id: Number(item.querySelector('.item-id').innerText),
        img: item.querySelector('.item-img').src,
        name: item.querySelector('.item-title').textContent,
        price: item.querySelector('.item-price').textContent,
        quantity: 1
      }
      checkCart(itemInfo);
    } else {
      return;
    }
  }
  return (
    <>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>
    </>
  );
}

export default App;
