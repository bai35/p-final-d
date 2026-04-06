import '../styles/Products.css';
import { useState } from 'react';

function Products() {
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: 'Bond Pintura Latex',
      price: 12.50,
      image: 'https://via.placeholder.com/150x200/4169E1/ffffff?text=Bond'
    },
    {
      id: 2,
      name: 'Taladro Inalámbrico',
      price: 45.99,
      image: 'https://via.placeholder.com/150x200/FF6347/ffffff?text=Taladro'
    },
    {
      id: 3,
      name: 'Caja de Herramientas',
      price: 28.75,
      image: 'https://via.placeholder.com/150x200/DAA520/ffffff?text=Caja'
    }
  ];

  const handleAddCart = (productId) => {
    console.log(`Agregado al carrito: ${productId} x${quantity}`);
  };

  return (
    <section className="products-section">
      <h2>Productos más Vendidos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <div className="product-controls">
                <input 
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="quantity-input"
                />
                <button 
                  className="add-cart-btn"
                  onClick={() => handleAddCart(product.id)}
                >
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
