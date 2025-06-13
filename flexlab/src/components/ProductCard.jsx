function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="w-full h-48 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="btn btn-primary mt-2 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;