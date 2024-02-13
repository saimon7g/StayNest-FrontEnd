'use client';
import React, { useState } from 'react';
import { Button, Card, Textarea, TextInput, List } from 'flowbite-react';
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
      <TextInput type="number" value={value} onChange={(e) => onChange(parseInt(e.target.value))} className="w-14 text-center" />
      <button onClick={handleIncrement}>
        <FaChevronUp />
      </button>
    </div>
  );
};

// Meal Selection Form Component
const MealSelectionForm = ({ meals }) => {
  const [selectedMeals, setSelectedMeals] = useState({});

  const handleQuantityChange = (mealId, newValue) => {
    setSelectedMeals({ ...selectedMeals, [mealId]: Math.max(0, newValue) });
  };

  const handleAddToCart = () => {
    // Implement your logic to add selected meals to cart
    console.log('Selected Meals:', selectedMeals);
  };

  return (
    <div>
      <List>
        {meals.map((meal) => (
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
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

// Example usage of MealSelectionForm
const App = () => {
  // Sample meal data
  const meals = [
    { id: 1, name: 'Meal 1', price: '$10', photo: 'meal1.jpg' },
    { id: 2, name: 'Meal 2', price: '$15', photo: 'meal2.jpg' },
    { id: 3, name: 'Meal 3', price: '$12', photo: 'meal3.jpg' },
  ];

  return (
    <div className="container mx-auto mt-8 xl:w-9/10">
      <MealSelectionForm meals={meals} />
    </div>
  );
};

export default App;
