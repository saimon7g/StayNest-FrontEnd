'use client';
import React from 'react';
import Image from 'next/image';
import { getPropertyByIDd, getMealOption } from '@/API/GuestAPI';
import { FaRegStar } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { CiShare1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Logo from '@/StaticImage/Meta_Inc._logo.jpg';
import Profile from '@/StaticImage/logo2.png';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { reserveProperty } from '@/API/GuestAPI';
import { useState,useEffect } from 'react';
import { MealSelectionForm } from '@/Components/GuestSide/MealSelectionForm';
import { Button,Card,Modal } from 'flowbite-react';
import { Datepicker } from 'flowbite-react';
import { formatDate } from '@/Components/utills';

export default function SingleProperty({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState({ breakfast: [], lunch: [], dinner: [] });
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [property, setProperty] = useState({});
  const [meals, setMeals] = useState({ breakfast: [], lunch: [], dinner: [] });
  const router = useRouter()
  const breakfast = [
        { id: 1, name: 'Khichuri', price: '100', photo: 'meal1.jpg' },
       
        
      ];
      const lunch = [
        { id: 1, name: 'Kalavuna', price: '300', photo: 'meal1.jpg' },
        { id: 2, name: 'Morog Polao', price: '250', photo: 'meal2.jpg' },
       
      ];
      const dinner = [
        { id: 1, name: 'Kalavuna', price: '300', photo: 'meal1.jpg' },
        { id: 2, name: 'Morog Polao', price: '250', photo: 'meal2.jpg' },
        
      ];
    
  // Function to update the cart
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    console.log('Updated Cart:', updatedCart);
  };
  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };


  const id = params.propertyID;
  console.log(id);
  console.log("Hello from SingleProperty");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPropertyByIDd(id);
        setProperty(response);
        //console.log(response);
        console.log('host ',response.host);
        console.log('property host',property.host);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, []);
useEffect(() => {
  async function fetchData() {
    try {
      const response = await getMealOption(id);
      setMeals(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
}, []);

  // useEffect(() => {
  //   console.log('property.host', property.host);
  // }, [property]);

 
  const handleReserve = async () => {
    let total_meals_price=500;
    let total_staying_price=1500*numberOfGuests;
    cart.breakfast.forEach((meal) => {
      total_meals_price += 150;
    });
    let differenceInMs = checkOutDate.getTime() - checkInDate.getTime();

    // Convert milliseconds to days
    let millisecondsPerDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    let number_of_days = Math.floor(differenceInMs / millisecondsPerDay) + 1;
    

    const data = {
      property_id: id,
      property_name: property.name,
      
      number_of_persons: numberOfGuests,
      number_of_persons: numberOfGuests,
      numer_of_nights:'3',
      total_staying_price: total_staying_price,
      total_meals_price: total_meals_price,
      total_price: total_staying_price+total_meals_price,
      host_id: 3,
      guest_id: 5,
      start_date:formatDate(checkInDate),
      end_date: formatDate(checkOutDate),

     
    };

    const queryString = JSON.stringify(data);
    // Redirect to the next page with response data
    router.push(`/guest/summary/?query=${queryString}`);
  };



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
          <CiShare1 className='mx-2' /><FaRegHeart className='mx-2' />
        </div>
      </div>
      <div className='my-8'>
        {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
          Meals option
        </button> */}
        <Button onClick={() => setOpenModal(true)}>Add meal</Button>
        <MealSelectionForm
           breakfast={breakfast} 
           lunch={lunch} 
           dinner={dinner} 
           updateCart={updateCart}
           openModal={openModal}
           setOpenModal={setOpenModal} />
        
      </div>
      {/* <div className='grid grid-rows-2 grid-cols-4  gap-4'>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border' />
        </div>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border' />
        </div>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border' />
        </div>
        <div className='row-span-1 col-span-2'>
          <Image src={Logo} alt="logo" className='w-auto h-auto border' />
        </div>
      </div> */}
     
     {property&& property.photos && property.photos.map((photo, index) => (
  <Image
    key={index}
    src={photo.image_data}
    width={400}
    height={240}
    alt={`StayNest Photo ${index + 1}`}
  />
))}
      



      <div className='flex flex-row items-center justify-left mb-20'>
        <div className='flex flex-col items-around justify-center w-1/2'>
          <div className='flex flex-row items-around justify-center my-16'>
          <div className=''>
  {property&&property.name && (
    <p className='text-3xl font-bold'>{property.name} hosted by {property.host && property.host.host_name}</p>
  )}
  
  {property&&property.some_basics && (
    <p className=''>
      {property.some_basics.number_of_guests} guests . {property.some_basics.number_of_bedrooms} bedrooms . 
      {property.some_basics.number_of_beds} bed . {property.some_basics.number_of_bathrooms} bath
    </p>
  )}
</div>
            <div className='ml-auto'>
              <Image src={Profile} alt="profile" className='w-20 border rounded-full' />
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
          {property&&property.description && property.description}
        </p>
          </div>
        </div>
        <div className='flex flex-col items-around justify-center ml-auto w-2/6'>
          <div className='flex flex-row items-center justify-between w-full my-2'>
            <div className='flex font-bold '>
              <FaBangladeshiTakaSign className='mr-1' /> 700 / night
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
        <Datepicker
          value={checkInDate}
          onChange={handleCheckInDateChange}
        />
      </div>
      <div className='row-span-1 col-span-1 border p-2'>
        <p className='font-bold'>Check out</p>
        <Datepicker
          value={checkOutDate}
          onChange={handleCheckOutDateChange}
        />
      </div>
      <div className='row-span-1 col-span-2 border p-2'>
        <p className='font-bold'>Guests</p>
        <input
          type='number'
          value={numberOfGuests}
          onChange={handleNumberOfGuestsChange}
          min={1}
          max={10} // Adjust maximum number of guests as needed
        />
      </div>
    </div>
          <div className='my-2'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 w-full" onClick={() => handleReserve()}>
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
