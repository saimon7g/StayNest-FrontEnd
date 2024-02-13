'use client'
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-content">
          {currentPage === 1 && (
            <div>
              <h2>Page 1</h2>
              <textarea
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></textarea>
              <textarea
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></textarea>
              <button onClick={nextPage}>Next</button>
            </div>
          )}
          {currentPage === 2 && (
            <div>
              <h2>Page 2</h2>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button onClick={previousPage}>Previous</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsButtonClicked(true); // Button clicked, change color to black
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className='button-primary' onClick={isModalOpen? closeModal:openModal} style={{ color: isButtonClicked ? 'black' : 'green' }}>
        Add
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;




