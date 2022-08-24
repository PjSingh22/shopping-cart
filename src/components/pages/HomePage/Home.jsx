import Shop from "../ShopPage/Shop";
import { Link } from "react-router-dom";

import './home.css';
const Home = () => {
  return (
    <div id='home-container'>
      <div className='home-header '>
        <p>About</p>
      </div>
      <div className="home-info">
        <p>Welcome to Valhalla drip, where you can find the finest drip to wear when you are defeating your foes and once you die valorantly in battle you will be the coziest person to ender Valhalla. Shop our finest in season wears today! </p>
      </div>
      <Link to='/shop' className="shop-btn">Get Dripped</Link>
    </div>
  );
};


export default Home;