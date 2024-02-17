'use client';
import React from 'react';
import Image from 'next/image';
import { getPropertyByID } from '@/API/GuestAPI';
import { FaRegStar } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { CiShare1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Logo from '@/StaticImage/Meta_Inc._logo.jpg';
import Profile from '@/StaticImage/logo2.png';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useState } from 'react';
import {Button, Card} from 'flowbite-react';


import {MealSelectionForm} from '@/Components/GuestSide/MealSelectionForm.js';



export default function SingleProperty({ params }) {

    const id = params.propertyID;
    const [cart, setCart] = useState({ breakfast: [], lunch: [], dinner: [] });
    const updateCart = (updatedCart) => {
      setCart(updatedCart);
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const breakfast = [
      { id: 1, name: 'Meal 1', price: '$10', photo: 'meal1.jpg' },
      { id: 2, name: 'Meal 2', price: '$15', photo: 'meal2.jpg' },
      { id: 3, name: 'Meal 3', price: '$12', photo: 'meal3.jpg' },
    ];
    const lunch = [
      { id: 1, name: 'Meal 5', price: '$10', photo: 'meal1.jpg' },
      { id: 2, name: 'Meal 9', price: '$15', photo: 'meal2.jpg' },
      { id: 3, name: 'Meal 6', price: '$12', photo: 'meal3.jpg' },
    ];
    const dinner = [
      { id: 1, name: 'Meal 1', price: '$10', photo: 'meal1.jpg' },
      { id: 2, name: 'Meal 2', price: '$15', photo: 'meal2.jpg' },
      { id: 3, name: 'Meal 3', price: '$12', photo: 'meal3.jpg' },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    console.log(id);
    console.log("Hello from SingleProperty");

  return (
    
    <div className='flex flex-col items-around justify-center w-4/6 mx-auto'>
      <div className='my-6 '>
        <p className='text-3xl font-bold'>Adnan HomeStay</p>
      </div>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center justify-center'>
          <FaRegStar /> 
          <text className='font-bold ml-2'>5.0</text>
          <text className='font-bold ml-2 underline underline-offset-4 mx-4'>7 reviews</text>
          <GiRibbonMedal />
          <text className='text-slate-400'>Super Host</text>
          <text className='text-slate-400 underline underline-offset-4 ml-4'>Mohakhali Dhaka</text>
        </div>
        <div className='flex flex-row items-center justify-center'>
          <div></div>
          <CiShare1  className='mx-2'/><FaRegHeart className='mx-2'/>
        </div>
      </div>
      <div className='my-8'>
      <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={openModal} // Open the modal when clicked
                >
                    Add Meals
                </button>
      </div>
      {/* Render MealSelectionForm as a modal */}
      {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {/* Close button */}
                        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        {/* MealSelectionForm component */}
                        
                        <MealSelectionForm
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
              updateCart={updateCart} 
            />
                    </div>
                </div>
            )}
      <div className='grid grid-rows-2 grid-cols-4  gap-4'>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border'/>
        </div>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border'/>
        </div>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border'/>
        </div>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border'/>
        </div>
      </div>



      <div className='flex flex-row items-center justify-left mb-20'>
        <div className='flex flex-col items-around justify-center w-1/2'>
            <div className='flex flex-row items-around justify-center my-16'>
              <div className=''>
                <p className='text-3xl font-bold'>Entire rental unit hosted by Adnan</p>
                <p className=''>2 guests . 1 bedroom . 1 bed . 1 bath</p>
              </div>
              <div className='ml-auto'>
                <Image src={Profile} alt="profile" className='w-20 border rounded-full'/>
              </div>
            </div>
            <hr />
            <div className='mb-10'>
              <div className='my-4'>
                <p className='font-bold text-black'>Emenities :</p>
              </div>
              <div className='my-2 '>
                <p className='font-bold text-black'>Entire home</p>
                <p className="text-slate-400">You will have the apartment to yourself</p>
              </div>
              <div className='my-2 '>
                <p className='font-bold text-black'>Enhanced clean</p>
                <p className="text-slate-400">The host committed to StayNest cleaning process</p>
              </div>
              <div className='my-2 '>
                <p className='font-bold text-black'>Self check-in</p>
                <p className="text-slate-400">Check yourself in with keypad</p>
              </div>
              <hr />
            </div>
           
            <div className=''>
                <p className='font-medium'>
                  Description: blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                  blah blah blah blah blah blah blah blah blah blah 
                </p>
            </div>
        </div>
        <div className='flex flex-col items-around justify-center ml-auto w-2/6'>
          <div className='flex flex-row items-center justify-between w-full my-2'>
            <div className='flex font-bold '>
              <FaBangladeshiTakaSign className='mr-1'/> 700 / night
            </div>
            <div className='flex flex-row items-center justify-around '>
              <text className='font-bold ml-2 underline underline-offset-4 mx-4'>7 reviews</text>
              <FaRegStar /> 
              <text className='font-bold ml-2'>5.0</text>
            </div>
          </div>
          <div className='grid grid-rows-2 grid-cols-2 w-full border rounded-lg my-2'>
            <div className='row-span-1 col-span-1 border p-2'>
              <p className='font-bold'>Check in</p>
              <p className='font-medium text-slate-400'>01/01/2024</p>
            </div>
            <div className='row-span-1 col-span-1 border p-2'>
              <p className='font-bold'>Check out</p>
              <p className='font-medium text-slate-400'>07/01/2024</p>
            </div>
            <div className='row-span-1 col-span-2 border p-2'>
              <p className='font-bold'>Guests</p>
              <p className='font-medium text-slate-400'>2 guests</p>
            </div>
          </div>
          <div className='my-2'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 w-full">
              Reserve
            </button>
          </div>
          <div className='flex flex-row justify-center w-full my-2'>
            <button type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-4">
              Negotiate
            </button>
          </div>

        </div>
        


      </div>









    </div>
      
    

    
  )



}
