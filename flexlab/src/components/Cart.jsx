import { Link } from 'react-router-dom';

function Cart() {
  const isLoggedIn = false; // Simulate non-logged-in state

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center animate-fadeIn">
        <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-md border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Login Required
          </h2>
          <p className="text-gray-600 mb-6">
            You are not logged in please login or create an account first to view your cart orders.
          </p>
          <div className="flex flex-col space-y-3">
            <Link
              to="/login"
              className="btn btn-primary text-center"
              aria-label="Go to login page"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-secondary text-center"
              aria-label="Go to register page"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center animate-fadeIn">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-md border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Cart
        </h2>
        <p className="text-gray-600 mb-6">
          Cart functionality is coming soon. Check back later for updates!
        </p>
        <Link
          to="/products"
          className="btn btn-primary text-center"
          aria-label="Continue shopping"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart