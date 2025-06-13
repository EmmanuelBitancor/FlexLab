import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to FlexLab</h1>
      <p className="text-lg mb-6">Discover our amazing collection of products!</p>
      <Link to="/products" className="btn btn-primary">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;