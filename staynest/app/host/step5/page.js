'use client';
import React, { useState } from 'react';
import { Button, Card, Textarea, TextInput,List,Table } from 'flowbite-react';
import { FaPlus } from 'react-icons/fa';
import Link from "next/link";
import FileUpload from "@/Components/ImageUpload";
import { Step5GET, Step5PUT } from "@/API/Registration";
import { useEffect,useContext } from 'react';
import RegistrationContext from "@/contexts/registrationContext";
import HostNavBar from "@/Components/HostSide/HostNavbar";
import Footer from "@/Components/Footer";



const Modal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mealType, setMealType] = useState('Breakfast');
  const [mealName, setMealName] = useState('');
  const [price, setPrice] = useState('');
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  const [dinnerMenu, setDinnerMenu] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { registrationId, setRegistrationId} = useContext(RegistrationContext); 

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  useEffect(() => {
    console.log("useEffect step5")
    const fetchStep5Data = async () => {
        try {
            const response = await Step5GET(registrationId);
            console.log("step5get")
            // Check if response status is 404 (Not Found)
            if (response.status === 404) {
                console.log("Empty data form");
            // Handle the case of an empty data form
         } else {
            console.log(response.data);
            
            // Handle the response data as needed
            
            // setRegularAmenities(response.data.regular_amenities);
            // setStandoutAmenities(response.data.standout_amenities);
            // setUploadedFiles(response.data.photos);
            
         }
            // Handle the response data as needed
        } catch (error) {
            console.error('Error fetching step 2 data: ', error);
        }
    };

    if (registrationId) {
        console.log("registrationId--page2 --",registrationId);
        fetchStep5Data();        
    }
}, [registrationId]);
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
      photo: 'image',
      description:'meal description dummy'
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

  const handleConfirm =async () => {
    // Handle confirming the selections
    
    onClose();
    const meal={
        breakfast:breakfastMenu,
        lunch:lunchMenu,
        dinner:dinnerMenu
    }
    try {
        setRegistrationId(registrationId);
        await Step5PUT(meal,registrationId);
    } catch (error) {
        console.error('Error submitting form data step5:', error);
    }
    };
    

  

  return (
    <div className='min-h-full'>
      <HostNavBar isLoginFormVisible={isLoginFormVisible} setIsLoginFormVisible={setIsLoginFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    <div className={`modal ${isOpen ? 'flex justify-center items-center' : 'hidden'} min-h-full mb-96`}>
      <div className="modal-overlay"></div>
      <div className="modal-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
      <div style={{ width: '25%' }}></div>

      <div className="modal-content" style={{ width: '75%' }}>
        
          <div>
            <h2>Select Meal Type</h2>
            <div className="flex my-10">
              <Button className={`mr-4 ${mealType === 'Breakfast' ? 'bg-teal-700 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Breakfast')}>Breakfast</Button>
              <Button className={`mr-4 ${mealType === 'Lunch' ? 'bg-teal-700 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Lunch')}>Lunch</Button>
              <Button className={`${mealType === 'Dinner' ? 'bg-teal-700 text-white' : 'bg-gray-200'}`} onClick={() => handleMealType('Dinner')}>Dinner</Button>
            </div>
          </div>
          {mealType && (
            <div>
              <TextInput type="text" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)} className="mt-2 p-2 border" />
              <TextInput type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-2 p-2 border" />
                            
              <div class="flex items-center justify-center w-full my-10">
                  <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <div>
                            {selectedFiles.map((file, index) => (
                              <div key={index}>{file.name}</div>
                            ))}
                          </div>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" multiple class="mt-6 hidden" onChange={handleFileChange}/>

                  </label>
              </div> 

              <div className="flex justify-center">
                    <Button onClick={handleSubmit} className="mt-1 mr-4 bg-blue-300 text-white px-4 py-0.1"><FaPlus/></Button>
              </div>
            </div>
          )}
          
          <div class='flex justify-between'>
            <Link href="/host/step4">
                <Button color="gray"  className="mt-4 ml-20 px-3 py-1"onClick={() => setRegistrationId(registrationId)}>Prev</Button>
            </Link>
            <Link href="/host/step6">
                <Button color="blue" onClick={handleConfirm}  className="mt-4 mr-20 px-3 py-1">Next</Button>
            </Link>
          </div>
          
         
        </div>
        <div style={{ width: '10%' }}></div>

        <div className="modal-content" style={{ width: '30%' }}>
          <div>
            <h2>Selected Meals</h2>
            <div>
              <h3>Breakfast</h3>
              <div className="overflow-x-auto">
                <Table>
                  <Table.Body className="divide-y">
                    {breakfastMenu.map((meal, index) => (
                      <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {meal.name}
                        </Table.Cell>
                        <Table.Cell>{meal.price}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            </div>
            <div>
              <h3>Lunch</h3>
              <div className="overflow-x-auto">
                <Table>
                  <Table.Body className="divide-y">
                    {lunchMenu.map((meal, index) => (
                      <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {meal.name}
                        </Table.Cell>
                        <Table.Cell>{meal.price}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>             
            </div>
            <div>
              <h3>Dinner</h3>
              <div className="overflow-x-auto">
                <Table>
                  <Table.Body className="divide-y">
                    {dinnerMenu.map((meal, index) => (
                      <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {meal.name}
                        </Table.Cell>
                        <Table.Cell>{meal.price}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
          </div>
      </div>
     
    </div>
    <Footer/>
  </div>
  );
};  

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 hidden ">Add Meal</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
