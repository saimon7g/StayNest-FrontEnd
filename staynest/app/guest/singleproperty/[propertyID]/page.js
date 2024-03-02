'use client';
import React from 'react';
import Image from 'next/image';
import { getPropertyByIDd, getMealOption } from '@/API/GuestAPI';
import { FaRegStar } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { CiShare1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { reserveProperty } from '@/API/GuestAPI';
import { useState, useEffect } from 'react';
import { MealSelectionForm } from '@/Components/GuestSide/MealSelectionForm';
import { Button, Card, Modal } from 'flowbite-react';
import { Datepicker } from 'flowbite-react';
import { formatDate } from '@/Components/utills';
import { Label, Radio } from 'flowbite-react';
import DatePicker from "react-datepicker";
import { subDays } from 'date-fns';
import { NegotiationModal } from '@/Components/GuestSide/NegotiateModal';
import { loggedInCheck } from '@/API/auth';


export default function SingleProperty({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState({ breakfast: [], lunch: [], dinner: [] });
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [property, setProperty] = useState({});
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [booking_options, setBookingOptions] = useState('stay');
  const [negotiateModal, setNegotiateModal] = useState(false);
  const [guestPrice, setGuestPrice] = useState(0);
  const [bookingSummary, setBookingSummary] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const id = params.propertyID;
  const router = useRouter();




  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const rating = () => {
    if (!property || !property.reviews || !property.reviews.length) {
      return null; // or any other default value you prefer
    }

    let total_rating = 0;
    for (let i = 0; i < property.reviews.length; i++) {
      total_rating += property.reviews[i].rating || 0; // Handle if rating is null or undefined
    }
    return total_rating / property.reviews.length;
  };

  const hostRating = () => {
    if (!property || !property.host || !property.host.reviews || !property.host.reviews.length) {
      return null; // or any other default value you prefer
    }
    let total_rating = 0;
    for (let i = 0; i < property.host.reviews.length; i++) {
      total_rating += property.host.reviews[i].rating || 0; // Handle if rating is null or undefined
    }
    return total_rating / property.host.reviews.length;
  };

  const dateIntervals = () => {
    let list = [];
    property.availability.forEach(e => {
      list.push({
        start: subDays(new Date(e.start_date), 1),
        end: new Date(e.end_date)
      })
    });
    return list;
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPropertyByIDd(id);
        setProperty(response);
      } catch (error) {
        console.error(error);
      }
      try {
        const mealresponse = await getMealOption(id);
        setBreakfast(mealresponse.breakfast);
        setLunch(mealresponse.lunch);
        setDinner(mealresponse.dinner);

        let flag=loggedInCheck();
    setLoggedIn(flag);
      }
      catch (error) {
        console.error(error);
      }
    }

    

    fetchData();
  }, []);

  const handleReserve = async () => {
    let flag=loggedInCheck();
    if (!flag) {
      alert('Please login to continue');
      return;
    }
    const data = {
      property_id: id,
      guest_id: 5,
      host_id: property.host.host_id,
      booking_type: booking_options,
      start_date: formatDate(checkInDate),
      end_date: formatDate(checkOutDate),
      base_price: property.price,
      platform_fee: 0.05 * property.price,
      tax: 0.1 * property.price,
      number_of_guests: numberOfGuests,
      breakfast: cart.breakfast[0],
      lunch: cart.lunch[0],
      dinner: cart.dinner[0],
      total_price: property.price * (checkOutDate - checkInDate) + 0.05 * property.price + 0.1 * property.price,
    };
    const queryString = JSON.stringify(data);
    // Redirect to the next page with response data
    router.push(`/guest/summary/?query=${queryString}`);
  };



  const negotiatleModalDataPreparation = () => {
    checkInDate.setHours(0, 0, 0, 0);
    checkOutDate.setHours(0, 0, 0, 0);
    const days = Math.ceil(checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    //console.log('days -- ',days);
    const data = {
      booking_details: {
        property_id: id,
        guest_id: 3,
        host_id: property.host.host_id,
        booking_type: booking_options,
        start_date: formatDate(checkInDate),
        end_date: formatDate(checkOutDate),
        base_price: property.price,
        platform_fee: 0.05 * property.price,
        tax: 0.1 * property.price,
        number_of_guests: numberOfGuests,
        total_price: property.price * days + 0.05 * property.price + 0.1 * property.price,
        status: "negotiation",
        default_price: property.price * days + 0.05 * property.price + 0.1 * property.price,
        guest_price: guestPrice,
        host_price: null,
        negotiation_status: "offeredbyguest",
      },
      meals: {
        breakfast: cart.breakfast[0],
        lunch: cart.lunch[0],
        dinner: cart.dinner[0],
      }
    };

    setBookingSummary(data);
  };

  const print = () => {
    // console.log(breakfast);
    // console.log(lunch);
    // console.log(dinner);
    // console.log(cart);
    // console.log(negotiateModal);
    console.log(bookingSummary);
  }



  return (

    <div className='flex flex-col items-around justify-center w-4/6 mx-auto'>
      <div className='my-6 '>
        {property && property.name && (<p className='text-3xl font-bold'>{property.name}</p>)}
      </div>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center justify-center'>
          <FaRegStar />
          {property && property.reviews && (<text className='font-bold ml-2'>{rating()}</text>)}
          {property && property.reviews && (<text className='font-bold ml-2 underline underline-offset-4 mx-4'>{property.reviews.length} reviews</text>)}
          <GiRibbonMedal />
          {property && property.host && property.host.super_host && (<text className='text-slate-400'>Super Host</text>)}
          {property && property.host && !property.host.super_host && (<text className='text-slate-400'>Normal Host</text>)}
          {property && property.location && (<text className='text-slate-400 underline underline-offset-4 ml-4'>{property.location}</text>)}
        </div>
        <div className='flex flex-row items-center justify-center'>
          <CiShare1 className='mx-2' /><FaRegHeart className='mx-2' />
        </div>
      </div>
      <div className='my-8'>

        <Button className='bg-blue-500 text-white' onClick={() => print()}>Print</Button>
        {breakfast && lunch && dinner && (
          <>
            <Button onClick={() => setOpenModal(true)}>Add meal</Button>
            <MealSelectionForm
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
              updateCart={updateCart}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </>
        )}

      </div>
      <div className='grid grid-rows-1 grid-cols-6 gap-2'>
        {property && property.photos && property.photos.map((photo, index) => (
          <div className='row-span-1 col-span-2'>
            <Image src={photo.image_data} alt="logo" width={0} height={0} className='border w-full object-cover' />
          </div>

        ))}
      </div>

      {/* left right card */}
      <div className='flex flex-row items-center justify-left mb-20'>
        {/*left card*/}
        <div className='flex flex-col items-around justify-center w-1/2'>
          <div className='flex flex-row items-around justify-center my-16'>
            <div className=''>
              {property && property.property_type && (
                <p className='text-3xl font-bold'>{property.property_type} hosted by {property.host && property.host.name}</p>
              )}

              {property && property.some_basics && (
                <p className=''>
                  {property.some_basics.number_of_guests} guests . {property.some_basics.number_of_bedrooms} bedrooms .
                  {property.some_basics.number_of_beds} bed . {property.some_basics.number_of_bathrooms} bath
                </p>
              )}
            </div>
            <div className='ml-auto'>
              {property && property.host && property.host.profile_pic && (
                <Image src={property.host.profile_pic} alt="profile" width={20} height={20} className='w-20 border rounded-full' />
              )
              }
            </div>
          </div>
          <hr />
          <div className='mb-10 '>
            {property && property.property_sub_type && (
              <div className='flex justify-center items-center my-4 w-3/4 py-4 border-4 border-black rounded-lg font-bold text-black hover:bg-slate-200 '>
                {property.property_sub_type}
              </div>
            )}
            {property && property.highlights && property.highlights.map((h) => (
              <div className='flex justify-center items-center w-3/4 my-4 py-4 border-4 border-black rounded-lg font-bold text-black hover:bg-slate-200'>
                {h}
              </div>
            ))}
            <hr />
          </div>

          <div className=''>
            <p className='font-bold '>Property description: </p>
            <p className='font-medium '>
              {property && property.description && property.description}
            </p>
          </div>
        </div>
        {/*right floating card*/}
        <div className='flex flex-col items-around justify-center border-4 p-4 ml-auto w-auto mt-16 shadow-xl'>
          <div className='flex flex-row items-center justify-between w-full my-2'>
            {property && property.price && (
              <div className='flex font-bold '>
                <FaBangladeshiTakaSign className='mr-1' /> {property.price} / night
              </div>
            )}
            <div className='flex flex-row items-center justify-around '>
              {property && property.reviews && (<text className='font-bold ml-2 mx-4'>{property.reviews.length} reviews</text>)}
              <FaRegStar />
              {property && property.reviews && (<text className='font-bold ml-2'>{rating()}</text>)}
            </div>
          </div>
          <div className='border-2 rounded-lg '>
            <fieldset className="flex max-w-md flex-col gap-4 p-4 ">
              <legend className="mb-4">Choose your booking option</legend>
              {property && property.booking_options && property.booking_options.stay && (
                <div className="flex items-center gap-2">
                  <Radio name="bookingOption" onClick={() => setBookingOptions('stay')} defaultChecked />
                  <Label>Stay</Label>
                </div>
              )}
              {property && property.booking_options && property.booking_options.stay_with_meal && (
                <div className="flex items-center gap-2">
                  <Radio name="bookingOption" onClick={() => setBookingOptions('stay_with_meal')} />
                  <Label>Stay with meal</Label>
                </div>
              )}
              {property && property.booking_options && property.booking_options.paying_guest && (
                <div className="flex items-center gap-2">
                  <Radio name="bookingOption" onClick={() => setBookingOptions('paying_guest')} />
                  <Label>Paying guest</Label>
                </div>
              )}
            </fieldset>
          </div>
          <div className='grid grid-rows-2 grid-cols-2 w-full border rounded-lg my-2'>
            <div className='row-span-1 col-span-1 border p-2'>
              <p className='font-bold'>Check in</p>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                minDate={new Date()}
                includeDateIntervals={property && property.availability && dateIntervals()}
              />
            </div>
            <div className='row-span-1 col-span-1 border p-2'>
              <p className='font-bold'>Check out</p>
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                minDate={checkInDate}
                includeDateIntervals={property && property.availability && dateIntervals()}
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
            <button type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-4" onClick={() => { setNegotiateModal(true); negotiatleModalDataPreparation(); }}>
              Negotiate
            </button>

            {negotiateModal && <NegotiationModal reservationData={bookingSummary} openModal={negotiateModal} setOpenModal={setNegotiateModal} />}

          </div>
        </div>
      </div>
      <hr />
      <div className='grid grid-rows-1 grid-cols-2 gap-2 my-20'>
        <div className='row-span-1 col-span-1'>
          <p className='font-bold'>Regular amenities</p>
          {property && property.regular_amenities && property.regular_amenities.map((a) => (
            <div className='flex justify-center items-center w-3/4 my-4 py-4 border-4 border-black rounded-lg font-bold bg-black text-white '>
              {a}
            </div>
          ))}
        </div>
        <div className='row-span-1 col-span-1'>
          <p className='font-bold'>Standout amenities</p>
          {property && property.standout_amenities && property.standout_amenities.map((a) => (
            <div className='flex justify-center items-center w-3/4 my-4 py-4 border-4 border-black rounded-lg font-bold bg-black text-white '>
              {a}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className='font-bold text-2xl'>
          Reviews:
        </p>
      </div>
      <hr />
      <div className='grid grid-rows-1 grid-cols-2 gap-2 my-20'>
        {property && property.reviews && property.reviews.map((r) => (
          <div className='row-span-1 col-span-1'>
            <p className='font-bold'>{r.reviewer_name}</p>
            <p className='text-slate-400'>{r.date}</p>
            <p>{r.review}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className='my-20'>
        <div className='flex mb-4'>
          {property && property.host && property.host.profile_pic && (<Image src={property.host.profile_pic} alt="profile" width={20} height={20} className='w-20 border rounded-full' />)}
          {property && property.host && (<p className='ml-4 text-3xl'>Hosted by {property.host.name}</p>)}
        </div>
        <div className='flex flex-row justify-between w-1/2'>
          <div className='flex'>
            <GiRibbonMedal />
            {property && property.host && property.host.super_host && (<text className='font-bold'>Super Host</text>)}
            {property && property.host && !property.host.super_host && (<text className='font-bold'>Normal Host</text>)}
            <FaRegStar className='ml-4' />
            {property && property.reviews && (<text className='font-bold ml-2'>{hostRating()}</text>)}
            {property && property.host && property.host.reviews && (<text className='font-bold ml-4 mx-4'>{property.host.reviews.length} reviews</text>)}
          </div>
        </div>
        <div className='my-2'>
          {property && property.host && property.host.response_rate && (<text className='text-slate-400 ml-4 mx-4'>response rate {property.host.response_rate}</text>)}
        </div>
        <div className='my-2'>
          {property && property.host && property.host.response_time && (<text className='text-slate-400 ml-4 mx-4'>response rate {property.host.response_time}</text>)}
        </div>
      </div>
    </div>
  );
}

