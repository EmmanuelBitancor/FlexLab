import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="product-card">
        <div className="w-full h-48 overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="btn btn-primary mt-2 w-full"
        >
          Add to Cart
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Login Required
            </h3>
            <p className="text-gray-600 mb-6">
              You are not logged in, please login first or create an account.
            </p>
            <div className="flex flex-col space-y-3">
              <Link
                to="/login"
                className="btn btn-primary text-center"
                onClick={closeModal}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-secondary text-center"
                onClick={closeModal}
              >
                Create Account
              </Link>
              <button
                onClick={closeModal}
                className="btn btn-danger text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;