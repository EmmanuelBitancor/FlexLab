import { Link } from 'react-router-dom';

function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1); // Prevent negative or invalid quantities
    updateQuantity(id, quantity);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            to="/products"
            className="btn btn-primary px-6 py-3 text-lg hover:bg-purple-700 transition-colors"
            aria-label="Shop now to add items to your cart"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-48 h-48 overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow ml-0 sm:ml-6 mt-4 sm:mt-0">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mt-1">
                    ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="btn btn-primary px-3 py-1 text-lg hover:purple-700 transition-colors disabled:opacity-50"
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-16 text-center border rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      min="1"
                      aria-label={`Quantity of ${item.name}`}
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="btn btn-primary px-3 py-1 text-lg hover:purple-700 transition-colors"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger ml-4 px-4 py-1 hover:bg-red-700 transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-2xl font-bold text-gray-800">
              Total: ${total.toFixed(2)}
            </p>
            <button
              className="btn btn-primary mt-4 px-6 py-3 text-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              disabled={total === 0}
              aria-label="Proceed to checkout"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;