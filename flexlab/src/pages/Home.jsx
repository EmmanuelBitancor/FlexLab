import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import products from '../assets/products.json';
import image1 from '../assets/hero1.png';
import image2 from '../assets/hero2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import bgImage from '../assets/img4.png';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef(null);
  const featuredProducts = products.slice(0, 4);
  const heroImages = [image1, image2, image3, image4, image5];
  const text = "Welcome to FlexLab";
  const characters = text.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsHeroVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      if (isHeroVisible) {
        setAnimationKey((prevKey) => prevKey + 1);
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {}, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isHeroVisible]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="loader w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 animate-fadeIn pt-[60px] sm:pt-0">
      <section
        ref={heroRef}
        className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <style>
          {`
            .typing-container {
              display: inline-flex;
              position: relative;
              white-space: nowrap;
              max-width: 100%;
              visibility: visible;
            }
            .typing-character {
              display: inline-block;
              opacity: 0;
              animation: typeLetter 0.1s ease-in forwards;
              visibility: visible;
              min-width: 0.2em;
            }
            .typing-character.space {
              min-width: 0.5em;
            }
            @keyframes typeLetter {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .typing-cursor::after {
              content: '|';
              position: absolute;
              right: -0.5rem;
              top: 0;
              color: transparent;
              font-weight: bold;
              animation: blink 0.6s step-end infinite;
              visibility: visible;
            }
            @keyframes blink {
              50% { opacity: 0; }
            }
            .fade-in {
              animation: fadeIn 1s ease-in-out 0.5s forwards;
              opacity: 0;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .image-swap {
              animation: imageFade 1s ease-in-out;
            }
            @keyframes imageFade {
              0% { opacity: 0; transform: scale(0.95); }
              100% { opacity: 1; transform: scale(1); }
            }
            .hero-image-container {
              width: 400px;
              height: 400px;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .hero-image {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
            }
            /* Responsive background image and hero section */
            @media (max-width: 640px) {
              .typing-container {
                max-width: 90vw;
              }
              .typing-character {
                font-size: 1.25rem;
              }
              section[style*="background-image"] {
                background-size: cover;
                background-position: 60% center; /* Slight offset for better mobile focus */
              }
              .hero-image-container {
                width: 150px;
                height: 150px;
              }
            }
            @media (min-width: 640px) {
              .hero-image-container {
                width: 250px;
                height: 250px;
              }
              .typing-character {
                font-size: 1.75rem;
              }
              section[style*="background-image"] {
                background-size: cover;
                background-position: center;
              }
            }
            @media (min-width: 768px) {
              .hero-image-container {
                width: 350px;
                height: 350px;
              }
              .typing-character {
                font-size: 2.5rem;
              }
              section[style*="background-image"] {
                background-size: cover;
                background-position: center;
              }
            }
            @media (min-width: 1024px) {
              .typing-character {
                font-size: 3rem;
              }
              section[style*="background-image"] {
                background-size: cover;
                background-position: center;
              }
              .hero-image-container {
                width: 500px;
                height: 500px;
              }
            }
            /* Individual character delays */
            ${characters.map((_, index) => `
              .typing-character:nth-child(${index + 1}) {
                animation-delay: ${index * 0.1}s;
              }
            `).join('')}
          `}
        </style>
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 justify-center relative z-10 pt-6 sm:pt-0">
          <div className="md:w-1/2 text-left text-black mb-4 sm:mb-6 md:mb-0 pr-0 sm:pr-2 md:pr-4">
            <div className="typing-container">
              <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold mb-2 sm:mb-4" key={`typing-${animationKey}`}>
                {characters.map((char, index) => (
                  <span
                    key={`${char}-${index}-${animationKey}`}
                    className={`typing-character ${char === ' ' ? 'space' : ''} ${index === characters.length - 1 ? 'typing-cursor' : ''}`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-xl sm:max-w-2xl fade-in">
              Discover our curated collection of high-quality products<br/>designed to enhance your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/products"
                className="btn btn-primary px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-md bg-purple-600 text-white hover:bg-purple-700 transition w-full sm:w-auto"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="btn btn-secondary px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 hero-image-container">
            <img
              src={heroImages[currentImageIndex]}
              alt={`Hero Image ${currentImageIndex + 1}`}
              className="hero-image rounded-lg image-swap"
              key={currentImageIndex}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          Featured Products
        </h2>
        <div className="overflow-hidden relative">
          <style>
            {`
              .carousel {
                display: flex;
                animation: slide 16s linear infinite;
              }
              @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .carousel:hover {
                animation-play-state: paused;
              }
              .product-card {
                min-width: 100%;
                flex-shrink: 0;
                padding: 0 0.75rem;
              }
              @media (min-width: 640px) {
                .product-card {
                  min-width: 50%;
                }
              }
              @media (min-width: 768px) {
                .product-card {
                  min-width: 25%;
                }
              }
            `}
          </style>
          <div className="carousel">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div key={`skeleton-${index}`} className="product-card">
                    <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-md animate-pulse mb-3"></div>
                    <div className="h-5 bg-gray-300 rounded-full w-3/4 mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded-full w-1/2 mb-3 animate-pulse"></div>
                    <div className="h-10 bg-blue-300 rounded-md animate-pulse"></div>
                  </div>
                ))
              : [
                  ...featuredProducts,
                  ...featuredProducts,
                ].map((product, index) => (
                  <div key={`${product.id}-${index}`} className="product-card">
                    <div className="w-full h-40 sm:h-48 overflow-hidden rounded-md mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-medium mt-1 text-sm sm:text-base">
                      ${product.price.toFixed(2)}
                    </p>
                    <Link
                      to="/products"
                      className="btn btn-primary mt-3 w-full text-center px-4 py-2 text-sm sm:text-base bg-purple-600 text-white hover:bg-purple-700 rounded-md transition"
                    >
                      View Product
                    </Link>
                  </div>
                ))}
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link to="/products" className="btn btn-secondary px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
            See All Products
          </Link>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            Why Shop with FlexLab?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-purple-600"
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We source only the best products to ensure your satisfaction.
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-purple-600"
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Fast Shipping
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Get your orders delivered quickly and reliably.
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-purple-600"
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our team is here to assist you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 max-w-md sm:max-w-xl mx-auto">
            Subscribe to receive exclusive offers and updates on our latest products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
            <button className="btn btn-primary rounded-b-md sm:rounded-r-md sm:rounded-b-none px-4 sm:px-6 py-2 text-base sm:text-lg bg-purple-600 text-white hover:bg-purple-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;