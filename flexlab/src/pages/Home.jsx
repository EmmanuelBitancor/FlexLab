import { Link } from 'react-router-dom';
import products from '../assets/products.json';

function Home() {
  // Select first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto p-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FlexLab</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Discover our curated collection of high-quality products designed to enhance your lifestyle.
          </p>
          <Link to="/products" className="btn btn-primary px-6 py-3 text-lg">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card w-74">
              <div className="w-full h-48 overflow-hidden rounded-md mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-gray-600 font-medium mt-1">
                ${product.price.toFixed(2)}
              </p>
              <Link
                to="/products"
                className="btn btn-primary mt-3 w-full text-center"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="btn btn-secondary px-10 py-5 text-lg">
            See All Products
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Shop with FlexLab?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                We source only the best products to ensure your satisfaction.
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Shipping
              </h3>
              <p className="text-gray-600">
                Get your orders delivered quickly and reliably.
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our team is here to assist you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-purple-600 text-white py-12">
        <div className="container mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Subscribe to receive exclusive offers and updates on our latest products.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
            />
            <button className="btn btn-primary rounded-l-none px-6">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;