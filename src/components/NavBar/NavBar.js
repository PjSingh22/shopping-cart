import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return <nav>

    <Link to="/" className='link'><h1 className='title'>Valhalla Drip</h1></Link>
    <ul>
      <li><Link to="/shop" className='link'>Shop</Link></li>
      <li><Link to="/cart" className='link'>Cart</Link></li>
    </ul>
  </nav>
}