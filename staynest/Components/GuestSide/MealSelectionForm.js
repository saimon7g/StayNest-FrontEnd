'use client'

import React, { useState } from 'react';
import { Button, Card, List } from 'flowbite-react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

// Stepper component
const Stepper = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(Math.max(0, value - 1));
  };

  return (
    <div className="flex items-center">
      <button onClick={handleDecrement}>
        <FaChevronDown />
      </button>
      <p>{value}</p>
      <button onClick={handleIncrement}>
        <FaChevronUp />
      </button>
    </div>
  );
};

// Meal Selection Form Component
export  function MealSelectionForm ({ breakfast, lunch, dinner, updateCart })  {
 
const [selectedMeals, setSelectedMeals] = useState({});
const [selectedType, setSelectedType] = useState('Breakfast');
const [cart, setCart] = useState({ breakfast: [], lunch: [], dinner: [] });

const handleQuantityChange = (mealId, newValue) => {
    setSelectedMeals({ ...selectedMeals, [mealId]: Math.max(0, newValue) });
  };

  const handleMealTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleAddToCart = () => {
    console.log('Selected Meals:', selectedMeals);
    const selection=Object.entries(selectedMeals).map(([id, quantity]) => ({ id: parseInt(id), quantity }));
    
    let updatedCart = { ...cart };
    updatedCart[selectedType.toLowerCase()].push(selection);
    setCart(updatedCart);
    updateCart(updatedCart);
    setSelectedMeals({});
  };

  const handleConfirm = () => {
    console.log(JSON.stringify(cart));
  };

  return (
    <div className="container mx-auto mt-8 xl:w-9/10">
      <div className="flex justify-center mb-4">
        <Button className={`mr-4 ${selectedType === 'Breakfast' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealTypeChange('Breakfast')}>Breakfast</Button>
        <Button className={`mr-4 ${selectedType === 'Lunch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealTypeChange('Lunch')}>Lunch</Button>
        <Button className={`${selectedType === 'Dinner' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealTypeChange('Dinner')}>Dinner</Button>
      </div>
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <List className="w-96">
          {(selectedType === 'Breakfast' ? breakfast : selectedType === 'Lunch' ? lunch : dinner).map((meal) => (
            <List.Item key={meal.id}>
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <h4>{meal.name}</h4>
                    <p>{meal.price}</p>
                  </div>
                  <div>
                    <img src={meal.photo} alt={meal.name} className="w-24 h-24" />
                  </div>
                  <div>
                    <Stepper value={selectedMeals[meal.id] || 0} onChange={(newValue) => handleQuantityChange(meal.id, newValue)} />
                  </div>
                </div>
              </Card>
            </List.Item>
          ))}
        </List>
      </div>
      <div className="mt-4 flex justify-center">
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </div>
    </div>
  );
};

// // Example usage of MealSelectionForm
// const App = () => {
//   // Sample meal data
//   const breakfast = [
//     { id: 1, name: 'Meal 1', price: '$10', photo: 'meal1.jpg' },
//     { id: 2, name: 'Meal 2', price: '$15', photo: 'meal2.jpg' },
//     { id: 3, name: 'Meal 3', price: '$12', photo: 'meal3.jpg' },
//   ];
//   const lunch = [
//     { id: 1, name: 'Meal 5', price: '$10', photo: 'meal1.jpg' },
//     { id: 2, name: 'Meal 9', price: '$15', photo: 'meal2.jpg' },
//     { id: 3, name: 'Meal 6', price: '$12', photo: 'meal3.jpg' },
//   ];
//   const dinner = [
//     { id: 1, name: 'Meal 1', price: '$10', photo: 'meal1.jpg' },
//     { id: 2, name: 'Meal 2', price: '$15', photo: 'meal2.jpg' },
//     { id: 3, name: 'Meal 3', price: '$12', photo: 'meal3.jpg' },
//   ];

//   return <MealSelectionForm breakfast={breakfast} lunch={lunch} dinner={dinner} />;
// };


