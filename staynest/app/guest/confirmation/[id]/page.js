'use client';
import { use, useState } from 'react';
import { HiArrowSmRight, HiUser, HiPencilAlt, HiCollection, HiChatAlt2, HiCheckCircle, HiCog, HiCheck } from 'react-icons/hi';
import { Sidebar, Avatar } from 'flowbite-react';
import { getBookingDetails } from '@/API/UserDashBoard';
import { useEffect } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft } from "react-icons/fa";
import { Card } from 'flowbite-react';
import { getPropertyByIDd } from '@/API/GuestAPI';
import { getHostByID } from '@/API/GuestAPI';

export function Confirmation({ params }) {

    const reservationID = params.id;

    const [bookingDetails, setBookingDetails] = useState({});
    const [propertyDetails, setPropertyDetails] = useState({});
    const [hostDetails, setHostDetails] = useState({});

    const fetchBookingDetails = async () => {
        const data = await getBookingDetails(reservationID);
        if (data) {
            console.log("result from getBookingDetails component", data);
            setBookingDetails(data);
            const property_id = data.property_id;
            const host_id = data.host_id;

            const propertyData = await getPropertyByIDd(property_id);
            if (propertyData) {
                console.log("result from getPropertyByIDd component", propertyData);
                setPropertyDetails(propertyData);
            }
            const hostData = await getHostByID(host_id);
            if (hostData) {
                console.log("result from getHostByID component", hostData);
                setHostDetails(hostData);
            }
        }
    }

    useEffect(() => {
        fetchBookingDetails();
    }
        , []);


    return (


        // property_details:
        // availability:
        // booking_options:{ payin_guest: true, stay_with_meal: true , stay : true}
        // description:
        // highlights: []
        // host: { details: "", host_id: 1, }
        // location: ""
        // name: ""
        // photos: [{ image_data: "", title: "" }, { image_data: "", title: "" }]
        // price: ""
        // property_sub_type: ""
        // property_type: ""
        // regular_amenities: ["wifi", "parking", "pool"]
        // reviews: [{ review: "", rating: 5, guest_id: 1, property_id: 1, created_at: "", updated_at: "" }]
        // special_amenities: ["gym", "spa", "sauna"]
        <div>
            {propertyDetails && (

                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">{propertyDetails.name}</h2>
                    <p className="text-gray-500">Property Type: {propertyDetails.property_type}</p>
                    <p className="text-gray-500">More Precisely: {propertyDetails.property_sub_type}</p>
                    <p className="text-gray-500">Location: {propertyDetails.location}</p>
                    <p className="text-gray-500"> Description: {propertyDetails.description}</p>
                    <div className="flex flex-row items-center justify-center">
                        <text className="text-gray-500">Highlights: </text>
                        {propertyDetails.highlights && propertyDetails.highlights.length > 0 ? (

                            propertyDetails.highlights.map((highlight, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <p className="text-gray-500"> {highlight}, </p>
                                </div>
                            ))
                        ) : (
                            // If no highlights exist, display a message
                            <div className="flex flex-col items-center">
                                <p className="text-gray-500">No Highlights</p>
                            </div>
                        )}

                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <text className="text-gray-500">Regular Amenities: </text>
                        {propertyDetails.regular_amenities && propertyDetails.regular_amenities.length > 0 ? (
                            propertyDetails.regular_amenities.map((amenity, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <p className="text-gray-500"> {amenity}, </p>
                                </div>
                            ))
                        ) : (
                            // If no regular amenities exist, display a message
                            <div className="flex flex-col items-center">
                                <p className="text-gray-500">No Regular Amenities</p>
                            </div>

                        )}
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <text className="text-gray-500">Special Amenities: </text>
                        {propertyDetails.special_amenities && propertyDetails.special_amenities.length > 0 ? (
                            propertyDetails.special_amenities.map((amenity, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <p className="text-gray-500"> {amenity}, </p>
                                </div>
                            ))
                        ) : (
                            // If no special amenities exist, display a message
                            <div className="flex flex-col items-center">
                                <p className="text-gray-500">No Special Amenities</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {propertyDetails && (
                <div className="flex flex-col items-center">

                    {/* 
    
    // bookingDetails:
            // base_price:
            // booking_type:
            // breakfast: []
            // lunch: []
            // dinner : []
            // created at:
            // end_date:
            // guest_id:
            // host_id:
            // id:
            // number_of_guests:
            // platform_fee:
            // property_id:
            // property_name:
            // property_photo:
            // start_date:
            // status:
            // tax:
            // updated_at: */}
                    <h2 className="text-2xl font-semibold">Booking Details</h2>
                    <p className="text-gray-500">Booking Type: {bookingDetails.booking_type}</p>
                    <p className="text-gray-500">Start Date: {bookingDetails.start_date}</p>
                    <p className="text-gray-500">End Date: {bookingDetails.end_date}</p>
                    <p className="text-gray-500">Staying Price: {bookingDetails.base_price}</p>
                    <p className="text-gray-500">Booking Status: {bookingDetails.status}</p>
                    <p className="text-gray-500">Number of Guests: {bookingDetails.number_of_guests}</p>

                </div>)
            }
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold">Host Details</h2>
                {hostDetails && (
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Host Name: {hostDetails.name}</p>
                        <p className="text-gray-500">Host Email: {hostDetails.email}</p>
                        <p className="text-gray-500">Host Phone: {hostDetails.phone}</p>
                    </div>
                )}


                {/* 3 rd needs to be same size and centeraligned */}

                <div className="flex flex-row items-center justify-center">

                    {/* card length needs to be static */}
                    <Card className="w-1/6">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-semibold">Breakfast</h2>
                            {bookingDetails && bookingDetails.breakfast && bookingDetails.breakfast.length > 0 ? (
                                bookingDetails.breakfast.map((meal, index) => (
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
                            {bookingDetails && bookingDetails.lunch && bookingDetails.lunch.length > 0 ? (
                                bookingDetails.lunch.map((meal, index) => (
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
                            {bookingDetails && bookingDetails.dinner && bookingDetails.dinner.length > 0 ? (
                                bookingDetails.dinner.map((meal, index) => (
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
            </div>

        </div>
    );
}

export default Confirmation;