import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-purple-800 text-white p-4 fixed top-0 left-0 w-full z-50">
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

          {/* Navigation links */}
          <ul className={`
            md:flex md:space-x-4 md:items-center
            ${isDropdownOpen ? 'flex' : 'hidden'} 
            flex-col md:flex-row absolute md:static top-14 right-0 w-48 md:w-auto 
            bg-purple-800 md:bg-transparent shadow-lg md:shadow-none 
            p-4 md:p-0 rounded-lg md:rounded-none z-50
          `}>
            <li className="py-2 md:py-0">
              <Link 
                to="/" 
                onClick={() => setIsDropdownOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link 
                to="/products" 
                onClick={() => setIsDropdownOpen(false)}
              >
                Products
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link 
                to="/cart" 
                onClick={() => setIsDropdownOpen(false)}
              >
                Cart
              </Link>
            </li>
            <li className="py-2 md:py-0 mt-2 md:mt-0">
              <Link 
                to="/login" 
               className="border-2 border-white rounded-xl px-5 py-1 block"
                onClick={() => setIsDropdownOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;