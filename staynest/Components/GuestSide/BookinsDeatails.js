'use client';
import { Card } from 'flowbite-react';
import { getBookingDetails } from '@/API/UserDashBoard';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft } from "react-icons/fa";
import { cancelBooking } from '@/API/UserDashBoard';



export function BookingDetails({ bookingId, handleOptionClick }) {

    const [fullDeatils, setDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const fetchBookingDetails = async () => {
        const data = await getBookingDetails(bookingId);
        setDetails(data);
    };

    useEffect(() => {
        fetchBookingDetails();
    }, [bookingId]);

    const goBack = () => {
        handleOptionClick('MyBookings');
    }

    const handleCancelBooking = () => {

        // Call the API to cancel the booking
        // If successful, close the modal and display a success message
        // If failed, display an error message
        setIsModalOpen(false);
        const data = {
            "booking_id": bookingId
        };
        cancelBooking(data);


    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const cancelBooking = async () => {
        // Call the API to cancel the booking
        // If successful, close the modal and display a success message
        // If failed, display an error message
        setIsModalOpen(true);
    }





    return (
        // constantdata = {
        //     "status": "success",
        //     "message": "Booking confirmation details retrieved successfully",
        //     "data": {
        //         "guest_id": 21314235,
        //         "host": {
        //             "host_id": 123456,
        //             "host_name": "John Doe",
        //             "host_email": "sadgdsgsdfg@gmail.com",
        //             "host_phone": "1234567890",
        //         },
        //         "propert_details": {
        //             "property_id": 123456,
        //             "property_name": "Aloha",
        //             "property_type": "Villa",
        //             "property_sub_type": "Entire Villa",
        //             "image_data": "sfgsgsdgdfsgsdgsdg",
        //             "address": "123, Aloha Street, Aloha, Aloha",
        //             "number_of_guests": 4,
        //             "number_of_bedrooms": 2,
        //             "number_of_beds": 3,
        //             "number_of_bathrooms": 2,
        //         },
        //         "booking_details": {
        //             "booking_id": "<booking id>",
        //             "booking_type": "Stay with Meals",
        //             "start_date": "2024-01-12",
        //             "end_date": "2024-01-15",
        //             "staying_price": 300,
        //             "booking_status": "upcoming",
        //         },
        //         "meals": {
        //             "breakfast": [
        //                 { "name": "Continental", "quantity": 2, "date": "2024-01-12", "price": 10 },
        //                 { "name": "Full English", "quantity": 2, "date": "2024-01-12", "price": 10 },
        //             ],
        //             "lunch": [
        //                 { "name": "Italian", "quantity": 2, "date": "2024-01-13", "price": 10 },
        //                 { "name": "BBQ", "quantity": 2, "date": "2024-01-13", "price": 10 }
        //             ],
        //             "dinner": [
        //                 { "name": "Italian", "quantity": 2, "date": "2024-01-13", "price": 10 },
        //                 { "name": "BBQ", "quantity": 2, "date": "2024-01-13", "price": 10 }
        //             ]
        //         }
        //     }
        // };









        fullDeatils ? (

            <div>
                <FaArrowCircleLeft onClick={goBack} className="text-2xl cursor-pointer" />

                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">{fullDeatils.data.propert_details.property_name}</h2>
                    <p className="text-gray-500">Property Type: {fullDeatils.data.propert_details.property_type}</p>
                    <p className="text-gray-500">More Precisely: {fullDeatils.data.propert_details.property_sub_type}</p>
                    <p className="text-gray-500">Location: {fullDeatils.data.propert_details.address}</p>
                    <p className="text-gray-500">Number of Guests: {fullDeatils.data.propert_details.number_of_guests}</p>
                    <p className="text-gray-500">Number of Bedrooms: {fullDeatils.data.propert_details.number_of_bedrooms}</p>
                    <p className="text-gray-500">Number of Beds: {fullDeatils.data.propert_details.number_of_beds}</p>
                    <p className="text-gray-500">Number of Bathrooms: {fullDeatils.data.propert_details.number_of_bathrooms}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">Booking Details</h2>
                    <p className="text-gray-500">Booking Type: {fullDeatils.data.booking_details.booking_type}</p>
                    <p className="text-gray-500">Start Date: {fullDeatils.data.booking_details.start_date}</p>
                    <p className="text-gray-500">End Date: {fullDeatils.data.booking_details.end_date}</p>
                    <p className="text-gray-500">Staying Price: {fullDeatils.data.booking_details.staying_price}</p>
                    <p className="text-gray-500">Booking Status: {fullDeatils.data.booking_details.booking_status}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">Host Details</h2>
                    <p className="text-gray-500">Host Name: {fullDeatils.data.host.host_name}</p>
                    <p className="text-gray-500">Host Email: {fullDeatils.data.host.host_email}</p>
                    <p className="text-gray-500">Host Phone: {fullDeatils.data.host.host_phone}</p>
                </div>


                {/* 3 rd needs to be same size and centeraligned */}

                <div className="flex flex-row items-center justify-center">

                    {/* card length needs to be static */}
                    <Card className="w-1/6">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-semibold">Breakfast</h2>
                            {fullDeatils.data.meals.breakfast.length > 0 ? (
                                fullDeatils.data.meals.breakfast.map((meal, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <p className="text-gray-500">Item: {meal.item}</p>
                                        <p className="text-gray-500">Quantity: {meal.quantity}</p>
                                        <p className="text-gray-500">Date: {meal.date}</p>
                                    </div>
                                ))
                            ) : (
                                // If no breakfast meals exist, display a message
                                <div className="flex flex-col items-center">
                                    <p className="text-gray-500">No Breakfast</p>
                                </div>
                            )}
                        </div>
                    </Card>

                    <Card className="w-1/6">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-semibold">Lunch</h2>
                            {fullDeatils.data.meals.lunch.length > 0 ? (
                                fullDeatils.data.meals.lunch.map((meal, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <p className="text-gray-500">Item: {meal.item}</p>
                                        <p className="text-gray-500">Quantity: {meal.quantity}</p>
                                        <p className="text-gray-500">Date: {meal.date}</p>
                                    </div>
                                ))
                            ) : (
                                // If no lunch meals exist, display a message
                                <div className="flex flex-col items-center">
                                    <p className="text-gray-500">No Lunch</p>
                                </div>
                            )}
                        </div>
                    </Card>
                    <Card className="w-1/6">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-semibold">Dinner</h2>
                            {fullDeatils.data.meals.dinner.length > 0 ? (
                                fullDeatils.data.meals.dinner.map((meal, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <p className="text-gray-500">Item: {meal.item}</p>
                                        <p className="text-gray-500">Quantity: {meal.quantity}</p>
                                        <p className="text-gray-500">Date: {meal.date}</p>
                                    </div>
                                ))
                            ) : (
                                // If no dinner meals exist, display a message
                                <div className="flex flex-col items-center">
                                    <p className="text-gray-500">No Dinner</p>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>










                {/* 

                <div className="flex flex-row items-center justify-center">
            {fullDetails.data.booking_details.booking_status === 'upcoming' && (
                <button className="bg-blue-500 text-white p-2 rounded-lg mt-5" onClick={handleCancelBooking}>
                    Cancel Booking
                </button>
            )}
            
            {/* Modal */}
                {/* {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
                        <p>Are you sure you want to cancel this booking?</p>
                        <div className="flex justify-end mt-4">
                            <button className="bg-gray-500 text-white px-4 py-2 rounded mr-4" onClick={closeModal}>Close</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleCancelBooking}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div> */}

















                <div className="flex flex-row items-center justify-center">
                    {fullDeatils.data.booking_details.booking_status === 'upcoming' && (
                        <button className="bg-blue-500 text-white p-2 rounded-lg mt-5" onClick={cancelBooking}>
                            Cancel Booking
                        </button>
                    )}


                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                            <div className="bg-white p-8 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
                                <p>Are you sure you want to cancel this booking?</p>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded mr-4" onClick={closeModal}>Close</button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleCancelBooking}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>


        ) : (
            <div>Loading...</div>
        )

    );
}

export default BookingDetails;