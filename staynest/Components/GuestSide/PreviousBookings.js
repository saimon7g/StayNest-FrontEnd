import React, { use, useState } from 'react';
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { getPreviousBookings } from '@/API/UserDashBoard';
import { useEffect } from 'react';

export function PreviousBookings({ handleOptionClick, setSelectedBookingId }) {
    const [previousBookings, setPreviousBookings] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const fetchPreviousBookings = async () => {
        const response = await getPreviousBookings();
        setPreviousBookings(response.data.previous_bookings);
    }
    useEffect(() => {
        fetchPreviousBookings();
    }
        , []);
    const clickHandler = (x) => () => {
        handleOptionClick('BookingDetails');
        setSelectedBooking(x);
        setSelectedBookingId(x);
    }

    return (
        previousBookings === null ? <div>Loading...</div> :
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">All Previous Bookings</h1>
                <div className="flex flex-col">
                    {/* Display previous bookings */}
                    {previousBookings.map((booking, index) => (
                        <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5 hover:bg-gray-200" onClick={clickHandler(booking.booking_id)}>
                            {/* on hoever change color */}
                            <div className="flex flex-row items-center" >
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <HiUser className="text-3xl text-gray-500" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold">{booking.property_name}</h3>
                                    <p className="text-gray-500">Check-in: {booking.check_in}</p>
                                    <p className="text-gray-500">Check-out: {booking.check_out}</p>
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
export default PreviousBookings;