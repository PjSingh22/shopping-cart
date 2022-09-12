import CheckoutBar from '../../CheckoutBar/CheckoutBar';
import './cart.css';

const Cart = ({ cart, total, incrementAmount, decrementAmount, removeFromCart }) => {

  return (
    <div id='cart-container'>
      <div className='title-container'>
        <p className="shop-header header">Cart</p>
      </div>
      <div className='cart_checkout'>

      {cart.length === 0 ? (
        <p className='empty-cart-msg'>Cart is empty, cart is sad.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className='cart-item' key={item.id}>
                <img className='item-img' src={item.img} alt={item.title} />
                <div className='info-actions'>
                  <p className='item-title'>{item.name}</p>
                  <p className='item-price'>{item.price}</p>
                  <div className='buttons'>
                    <div className='action-btns'>
                      <button className='shop-btn btn' onClick={() => removeFromCart(item)}>Remove</button>
                      <div className='amount-btns'>
                        <button className='amount-btn btn' onClick={() => decrementAmount(item)}>-</button>
                        <p className='total-items'>{item.quantity}</p>
                        <button className='amount-btn btn' onClick={() => incrementAmount(item)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CheckoutBar total={total} />
        </>
      )}
      </div>
    </div>
  );
}

export default Cart;