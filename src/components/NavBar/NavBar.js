import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ cartCount }) {
  return <nav>

    <Link to="/" className='link'><h1 className='title'>Valhalla Drip</h1></Link>
    <ul>
      <li><Link to="/shop" className='link'>Shop</Link></li>
      <li>
        <Link to="/cart" className='link'>Cart</Link>
        { cartCount > 0 ? <span className='cart-count'>{ cartCount }</span> : null }
      </li>
    </ul>
  </nav>
}