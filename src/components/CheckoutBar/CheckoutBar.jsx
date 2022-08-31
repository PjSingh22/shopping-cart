const CheckoutBar = ({ total }) => (
  <div className='checkout-container'>
    <h2 className='total-price'>Total: {total}</h2>
    <button className='checkout-btn'>Checkout</button>
  </div>
);

export default CheckoutBar;