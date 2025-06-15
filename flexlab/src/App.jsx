import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/main.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route for pages with Header and Footer */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen bg-gray-100">
              <Header cart={cart} />
              <main className="flex-grow pt-14 md:pt-14">
                {/* pt-14 ≈ 56px to offset fixed header */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductList addToCart={addToCart} />} />
                  <Route
                    path="/cart"
                    element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
        {/* Routes without Header and Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;