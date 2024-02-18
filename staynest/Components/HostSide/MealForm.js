import React, { useState } from 'react';
import { Button, Card, Textarea, TextInput, List, Table, Modal } from 'flowbite-react';
import { FaPlus } from 'react-icons/fa';

export function MealForm({ isOpen, onClose }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [mealType, setMealType] = useState('Breakfast');
    const [mealName, setMealName] = useState('');
    const [price, setPrice] = useState('');
    const [breakfastMenu, setBreakfastMenu] = useState([]);
    const [lunchMenu, setLunchMenu] = useState([]);
    const [dinnerMenu, setDinnerMenu] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    };

    const handleMealType = (type) => {
        setMealType(type);
        console.log('Meal Type:', type);
    };

    const handleSubmit = () => {
        const newMeal = {
            name: mealName,
            price: price,
            image: selectedFiles
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
    };

    const handleConfirm = () => {
        // Handle confirming the selections
        console.log('Breakfast Menu:', breakfastMenu);
        console.log('Lunch Menu:', lunchMenu);
        console.log('Dinner Menu:', dinnerMenu);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Modal.Header>
                <h2>Select Meal Type</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="flex">
                    <Button className={`mr-4 ${mealType === 'Breakfast' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Breakfast')}>Breakfast</Button>
                    <Button className={`mr-4 ${mealType === 'Lunch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Lunch')}>Lunch</Button>
                    <Button className={`${mealType === 'Dinner' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Dinner')}>Dinner</Button>
                </div>
                {mealType && (
                    <div>
                        <TextInput type="text" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)} className="mt-2 p-2 border" />
                        <TextInput type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-2 p-2 border" />

                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">

                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <div>
                                        {selectedFiles.map((file, index) => (
                                            <div key={index}>{file.name}</div>
                                        ))}
                                    </div>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" multiple className="mt-6 hidden" onChange={handleFileChange} />

                            </label>
                        </div>

                        <div className="flex justify-end">
                            <Button onClick={handleSubmit} className="mt-1 mr-4 bg-blue-300 text-white px-4 py-0.1"><FaPlus /></Button>
                        </div>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <div className='flex justify-center'>
                    <Button onClick={handleConfirm} className="mt-4 mr-4 bg-green-500 text-white px-3 py-1">Confirm</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default MealForm;
