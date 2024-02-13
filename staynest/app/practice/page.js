'use client'
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mealType, setMealType] = useState('');
  const [mealName, setMealName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  const [dinnerMenu, setDinnerMenu] = useState([]);

  const handleMealType = (type) => {
    setMealType(type);
    console.log('Meal Type:', type);
  };

  const handleSubmit = () => {
    const newMeal = {
      name: mealName,
      price: price,
      description: description
    };
    console.log('New Meal:', newMeal);
    if (mealType === 'Breakfast') {
      setBreakfastMenu([...breakfastMenu, newMeal]);
    } else if (mealType === 'Lunch') {
      setLunchMenu([...lunchMenu, newMeal]);
    } else if (mealType === 'Dinner') {
      setDinnerMenu([...dinnerMenu, newMeal]);
    }
    setMealName('');
    setPrice('');
    setDescription('');
  };

  const handleConfirm = () => {
    // Handle confirming the selections
    console.log('Breakfast Menu:', breakfastMenu);
    console.log('Lunch Menu:', lunchMenu);
    console.log('Dinner Menu:', dinnerMenu);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-content">
          <div>
            <h2>Select Meal Type</h2>
            <div className="flex">
              <button className={`mr-4 ${mealType === 'Breakfast' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Breakfast')}>Breakfast</button>
              <button className={`mr-4 ${mealType === 'Lunch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Lunch')}>Lunch</button>
              <button className={`${mealType === 'Dinner' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Dinner')}>Dinner</button>
            </div>
          </div>
          {mealType && (
            <div>
              <h2>Add Meal</h2>
              <input type="text" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)} className="mt-2 p-2 border" />
              <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-2 p-2 border" />
              <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-2 p-2 border"></textarea>
              <button onClick={handleSubmit} className="mt-2 bg-green-500 text-white px-4 py-2">Add</button>
            </div>
          )}
          <div>
            <button onClick={handleConfirm} className="mt-4 bg-blue-500 text-white px-4 py-2">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2">Add Meal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
