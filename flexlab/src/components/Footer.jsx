function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 E-Shop. All rights reserved.</p>
        <div className="mt-3 flex justify-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;