'use client'

import React, { useState } from 'react';
import { Button, Card, List, Modal } from 'flowbite-react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Datepicker } from 'flowbite-react';
import { formatDate } from '../utills';

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
export function MealSelectionForm({ breakfast, lunch, dinner, updateCart, openModal, setOpenModal }) {

  const [selectedMeals, setSelectedMeals] = useState({});
  const [selectedType, setSelectedType] = useState('Breakfast');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cart, setCart] = useState({ breakfast: [], lunch: [], dinner: [] });

  const handleQuantityChange = (mealId, newValue) => {
    setSelectedMeals({ ...selectedMeals, [mealId]: Math.max(0, newValue) });
    console.log(selectedMeals);
  };

  const handleMealTypeChange = (type) => {
    setSelectedType(type);
    setSelectedMeals({});
  };

  const handleAddToCart = () => {
    console.log('Selected Meals:', selectedMeals);
    const selection = Object.entries(selectedMeals).map(([id, quantity]) => ({ id: parseInt(id), quantity, date: formatDate(selectedDate) , meal_name: (selectedType === 'Breakfast' ? breakfast : selectedType === 'Lunch' ? lunch : dinner).find((meal) => meal.id === parseInt(id)).name, price: (selectedType === 'Breakfast' ? breakfast : selectedType === 'Lunch' ? lunch : dinner).find((meal) => meal.id === parseInt(id)).price }));

    let updatedCart = { ...cart };
    updatedCart[selectedType.toLowerCase()].push(selection);
    setCart(updatedCart);
    updateCart(updatedCart);
    setSelectedMeals({});
  };

  const handleConfirm = () => {
    setOpenModal(false);
    // console.log(JSON.stringify(cart));
  };

  const print = () => {

  }


  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

      <Datepicker value={selectedDate.toLocaleDateString()}
       onChange={setSelectedDate} />
      <Modal.Header className="flex justify-center">
        <div>  </div>
        <div className="flex justify-center">
          <Button className={`mr-4 ${selectedType === 'Breakfast' ? 'bg-blue-500 text-white' : 'bg-gray-400'}`} onClick={() => handleMealTypeChange('Breakfast')}>Breakfast</Button>
          <Button className={`mr-4 ${selectedType === 'Lunch' ? 'bg-blue-500 text-white' : 'bg-gray-400'}`} onClick={() => handleMealTypeChange('Lunch')}>Lunch</Button>
          <Button className={`${selectedType === 'Dinner' ? 'bg-blue-500 text-white' : 'bg-gray-400'}`} onClick={() => handleMealTypeChange('Dinner')}>Dinner</Button>
        </div>
      </Modal.Header>
      <Modal.Body>

        {/* <Button className="bg-blue-500 text-white" onClick={() => print()}>Print</Button> */}


        <div className="container mx-auto mt-8 xl:w-9/10">

          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <List className="w-96">
              {(selectedType === 'Breakfast' ? breakfast : selectedType === 'Lunch' ? lunch : dinner).map((meal) => (
                <List.Item key={meal.id}>
                  <div className="flex items-center justify-between">
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

                  </div>



                </List.Item>
              ))}
            </List>
          </div>

        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-center">
        <div className="mt-4 flex justify-center space-x-4"> {/* Added space-x-4 class for horizontal spacing */}
          <Button onClick={handleAddToCart}>Add to Cart</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </div>
      </Modal.Footer>
    </Modal>

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


