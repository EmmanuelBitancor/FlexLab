import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../assets/products.json';

function SkeletonCard() {
  return (
    <>
      <style>
        {`
          .wave-animation {
            position: relative;
            overflow: hidden;
            background: #e5e7eb;
          }
          .wave-animation::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            animation: wave 1.5s linear infinite;
          }
          @keyframes wave {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}
      </style>
      <div className="border rounded-lg p-4">
        <div className="w-full h-48 wave-animation rounded mb-4"></div>
        <div className="h-4 wave-animation rounded w-3/4 mb-2"></div>
        <div className="h-4 wave-animation rounded w-1/2 mb-2"></div>
        <div className="h-8 wave-animation rounded w-1/3"></div>
      </div>
    </>
  );
}

function ProductList({ addToCart }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading
          ? Array(products.length)
              .fill()
              .map((_, index) => <SkeletonCard key={index} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
      </div>
    </div>
  );
}

export default ProductList;