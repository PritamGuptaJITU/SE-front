import React, { useState, useEffect } from 'react';
import '../styles/list.css';
import axios from 'axios'; // Import axios for making HTTP requests

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  openModal: (product?: Product) => void;
}

const ProductList: React.FC<Props> = ({ openModal }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://192.168.0.110:3000/getsample`);
      console.log(response.data); // Log the fetched products
      setProducts(response.data); // Set the fetched products in state
    } catch (error) {
      console.error('Error fetching products: ', error);
      // Handle error if needed
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => openModal(product)}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
