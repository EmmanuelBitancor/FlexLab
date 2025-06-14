import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import loginImage from '../assets/login-image3.jpg'; // Adjust path to your local image

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/register');
    }, 500); // Match duration of fadeOut animation (0.5s)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Go Back to Home Page button */}
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center text-white hover:text-gray-200 z-20"
        title="Go back to Home Page"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="ml-2 text-sm font-medium">Go Back</span>
      </Link>
      <div
        className={`max-w-md w-full border border-gray-300 rounded-xl shadow-lg p-8 space-y-8 mr-0 md:mr-12 z-10 ${
          isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'
        }`}
      >
        <div>
          <h2 className="text-center text-3xl font-bold text-white">
            Welcome
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Sign in to your FlexLab account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 sm:text-sm bg-white bg-opacity-10 text-white placeholder-gray-300"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 sm:text-sm bg-white bg-opacity-10 text-white placeholder-gray-300"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-300 hover:text-gray-200 mt-6"
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-purple-300 hover:text-purple-200"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-200">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-medium text-purple-300 hover:text-purple-200"
            onClick={handleSignUpClick}
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;