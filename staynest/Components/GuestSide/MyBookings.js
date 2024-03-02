import React, { useState } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { FaHome } from "react-icons/fa";

import { getUpcomingBookingsForGuest } from '@/API/UserDashBoard';
import { useEffect } from 'react';
import Image from 'next/image';

export function MyBookings({ handleOptionClick, setSelectedBookingId }) {
    const [upcomingBookings, setUpcomingBookings] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {

        const fetchUpcomingBookings = async () => {
            const response = await getUpcomingBookingsForGuest();
            if (response){
                console.log("result from getUpcomingBookingsForGuest component", response);
                setUpcomingBookings(response);
            }
        }
        fetchUpcomingBookings();

    }, []);

    const clickHandler = (x) => () => {
        handleOptionClick('BookingDetails');
        setSelectedBooking(x);
        setSelectedBookingId(x);
    }


    // [
    //     {
    //         "start_date": "2024-03-03",
    //         "end_date": "2024-03-04",
    //         "booking_type": "paying_guest",
    //         "property_name": "ABC Home",
    //         "property_photo": null
    //     },
    //     {
    //         "start_date": "2024-03-04",
    //         "end_date": "2024-03-29",
    //         "booking_type": "stay_with_meal",
    //         "property_name": "ABC Home",
    //         "property_photo": null
    //     }
    // ]



    return (

        upcomingBookings === null ? <div>Loading...</div> :
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">All Upcoming Bookings</h1>
                <div className="flex flex-col">
                    {/* Display upcoming bookings */}
                    {upcomingBookings.map((booking, index) => (
                        <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5 hover:bg-gray-200" onClick={clickHandler(booking.id)}>
                            {/* on hoever change color */}
                            <div className="flex flex-row items-center" >
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                   {/* if booking.property_photo is null then show default image */}
                                    {booking.property_photo === null ? <FaHome className="text-3xl text-gray-500" /> : <Image src={booking.property_photo} alt="property" width={100} height={100} />}


                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold">{booking.property_name}</h3>
                                    <p className="text-gray-500">Check-in: {booking.start_date}</p>
                                    <p className="text-gray-500">Check-out: {booking.end_date}</p>
                                    <p className="text-gray-500">Type: {booking.booking_type}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <button className="flex items-center text-blue-500">
                                    Details
                                    <HiArrowSmRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
    );
}
export default MyBookings;
