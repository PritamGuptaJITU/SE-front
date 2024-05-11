import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';

interface Product {
  id: number;
  name: string;
  price: number;

}

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product?: Product) => {
    setSelectedProduct(product || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Grocery Store Admin Panel</h1>
      <button onClick={() => openModal()}>Add Product</button>
      <ProductList openModal={openModal} />
      {isModalOpen && (
        <ProductModal closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
