import React, { useState } from 'react';
import '../styles/pmodal.css';
import axios from 'axios'; // Import axios for making HTTP requests

interface Props {
  closeModal: () => void;
}

const ProductModal: React.FC<Props> = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://192.168.0.110:3000/addsample`, { name, price });
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting form: ', error);
      // Handle error if needed
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
         
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
