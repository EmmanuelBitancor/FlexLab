function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="btn btn-primary px-2"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="btn btn-primary px-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-danger ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="btn btn-primary mt-2">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;