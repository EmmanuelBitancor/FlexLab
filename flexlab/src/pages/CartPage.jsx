import Cart from '../components/Cart';

function CartPage({ cart, updateQuantity, removeFromCart }) {
  return <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />;
}

export default CartPage;