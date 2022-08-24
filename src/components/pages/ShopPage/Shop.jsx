import thor from '../../../images/gladiator-helmet.jpg';
import grandmaster from '../../../images/grandmaster-drip.jpg';
import hela from '../../../images/hela-outfit.webp';
import loki from '../../../images/loki-garment.jpg';
import './shop.css'
const Shop = () => {
  return (
    <div id='shop-container'>
      <div className='title-container'>
        <p className="shop-header header">Drip</p>
      </div>
      <div className="shop-items">
        <div className="shop-item">
          <img className='item-img' src={thor} alt="gladiator helmet" />
          <p className='item-title'>Gladiator Helmet</p>
          <p className='item-price'>$1000</p>
          <button className='shop-btn'>Add To Cart</button>
        </div>
        <div className="shop-item">
          <img className='item-img' src={grandmaster} alt="gladiator helmet" />
          <p className='item-title'>Grandmaster Garments</p>
          <p className='item-price'>$6969</p>
          <button className='shop-btn'>Add To Cart</button>
        </div>
        <div className="shop-item">
          <img className='item-img' src={hela} alt="gladiator helmet" />
          <p className='item-title'>Godess of Death Gear</p>
          <p className='item-price'>$9000</p>
          <button className='shop-btn'>Add To Cart</button>
        </div>
        <div className="shop-item">
          <img className='item-img' src={loki} alt="gladiator helmet" />
          <p className='item-title'>God of Mischief outfit</p>
          <p className='item-price'>$5000</p>
          <button className='shop-btn'>Add To Cart</button>
        </div>
      </div>
      
    </div>
  );
}

export default Shop;