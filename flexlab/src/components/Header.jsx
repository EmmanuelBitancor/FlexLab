import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHome, FaTshirt, FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsProfileDropdownOpen(false); // Close profile dropdown when main menu toggles
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">FlexLab</Link>
        
        {/* Dropdown button with hamburger/close icon for mobile */}
        <div className="relative">
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleDropdown}
            aria-label="Toggle dropdown"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isDropdownOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

          {/* Navigation links with icons, text for mobile dropdown, and tooltips for desktop */}
          <ul className={`
            md:flex md:space-x-4 md:items-center
            ${isDropdownOpen ? 'flex' : 'hidden'} 
            flex-col md:flex-row absolute md:static top-14 right-0 w-48 md:w-auto 
            bg-black md:bg-transparent shadow-lg md:shadow-none 
            p-4 md:p-0 rounded-lg md:rounded-none z-50
          `}>
            <li className="py-2 md:py-0">
              <div className="relative group">
                <Link 
                  to="/" 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center space-x-2 md:space-x-0 justify-start md:justify-center w-full md:w-8 md:h-8 rounded-md hover:scale-110 transition-transform duration-200"
                  aria-label="Home"
                >
                  <FaHome className="w-10 h-5 text-white" />
                  <span className="md:hidden text-white">Home</span>
                </Link>
                <span className="md:absolute hidden md:group-hover:block bg-gray-800 text-white text-xs font-medium rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 z-50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  Home
                </span>
              </div>
            </li>
            <li className="py-2 md:py-0">
              <div className="relative group">
                <Link 
                  to="/products" 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center space-x-2 md:space-x-0 justify-start md:justify-center w-full md:w-8 md:h-8 rounded-md hover:scale-110 transition-transform duration-200"
                  aria-label="Products"
                >
                  <FaTshirt className="w-10 h-5 text-white" />
                  <span className="md:hidden text-white">Products</span>
                </Link>
                <span className="md:absolute hidden md:group-hover:block bg-gray-800 text-white text-xs font-medium rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 z-50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  Products
                </span>
              </div>
            </li>
            <li className="py-2 md:py-0">
              <div className="relative group">
                <Link 
                  to="/cart" 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center space-x-2 md:space-x-0 justify-start md:justify-center w-full md:w-8 md:h-8 rounded-md hover:scale-110 transition-transform duration-200"
                  aria-label="Cart"
                >
                  <FaShoppingCart className="w-10 h-5 text-white" />
                  <span className="md:hidden text-white">Cart</span>
                </Link>
                <span className="md:absolute hidden md:group-hover:block bg-gray-800 text-white text-xs font-medium rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 z-50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  Cart
                </span>
              </div>
            </li>
            <li className="py-2 md:py-0 relative">
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 md:space-x-0 justify-start md:justify-center w-full md:w-8 md:h-8 rounded-md hover:scale-110 transition-transform duration-200"
                  aria-label="Profile"
                >
                  <FaUser className="w-10 h-5 text-white" />
                  <span className="md:hidden text-white">Profile</span>
                </button>
                {/* Profile Dropdown */}
                <ul className={`
                  ${isProfileDropdownOpen ? 'flex' : 'hidden'} 
                  flex-col absolute top-full right-0 w-48 md:w-32 
                  bg-black shadow-lg p-4 rounded-lg z-[60]
                  md:bg-black md:shadow-lg md:p-2 md:rounded-lg
                `}>
                  <li className="py-2">
                    <Link 
                      to="/login" 
                      className="flex items-center space-x-2 text-white hover:text-gray-200"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsProfileDropdownOpen(false);
                      }}
                    >
                      <span>Login</span>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link 
                      to="/signup" 
                      className="flex items-center space-x-2 text-white hover:text-gray-200"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsProfileDropdownOpen(false);
                      }}
                    >
                      <span>Sign Up</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;