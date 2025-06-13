import { Link } from 'react-router-dom';

function Header({ cart }) {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-purple-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">FlexLab</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
          <li>
            <Link to="/cart" className="hover:underline">
              Cart ({cartItemCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;