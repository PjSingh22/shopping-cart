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
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
