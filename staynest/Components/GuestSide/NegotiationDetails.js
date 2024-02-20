'use client';
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Card } from 'flowbite-react';
import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft } from "react-icons/fa";
import { getNegotiationDetails } from '@/API/UserDashBoard';
import { offerAcceptedByGuest } from "@/API/Negotiations";
import { offerRejectedByGuest } from "@/API/Negotiations";

export function NegotiationDetails({ negotiationId, handleOptionClick }) {

    const [negotiationDetails, setNegotiationDetails] = useState(null);
    const [guestSideOffer, setGuestSideOffer] = useState(null);
    const [hostSideOffer, setHostSideOffer] = useState(null);


    const fetchNegotiationDetails = async () => {
        const response = await getNegotiationDetails(negotiationId);
        setNegotiationDetails(response.data);
        setGuestSideOffer(response.data.negotiation_details.guest_price);
        setHostSideOffer(response.data.negotiation_details.host_price);
    };

    const goBack = () => {
        handleOptionClick('Negotiation');
    }
    useEffect(() => {
        fetchNegotiationDetails();
    }
        , [negotiationId]);

    const acceptOffer = () => {

        // accept booking price offered by host
        const data = {
            negotiation_id: negotiationId,
            accepeted_price: negotiationDetails.negotiation_details.host_price,
            negotiation_status: "acceptedbyguest"
        };
        // send data to server
        offerAcceptedByGuest(data);


    }
    const rejectOffer = () => {
        // reject offer
        const data = {
            negotiation_id: negotiationId,
            negotiation_status: "rejectedbyguest"
        };
        // send data to server
        offerRejectedByGuest(data);
    }




    //     "data": {
    //         "negotiation_id": "<negotiation id>",
    //         "negotiation_status": "pending",
    //         "host": {
    //             "host_id": 123456,
    //             "host_name": "John Doe",
    //             "host_email": "sjbgnfsdjksdjkg@gmail.com",
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
    //             "booking_type": "Stay with Meals",
    //             "start_date": "2024-01-12",
    //             "end_date": "2024-01-15",
    //             "staying_price": 300,
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
    //         },
    //         "negotiation_details": {
    //             "default_price": 300,
    //             "guest_price": 250,
    //             "host_price": 200,
    //             "negotiation_status": "offeredbyguest",
    //         }
    //     }
    // };

    return (

        negotiationDetails ? (
            <div className="flex flex-col">
                <div className="flex flex-row items-center">
                    <button className="flex items-center text-blue-500" onClick={goBack}>
                        <FaArrowCircleLeft className="text-3xl" />
                    </button>
                </div>

                <div className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                    <div className="flex flex-row items-center">

                        <div className="ml-5">
                            <h3 className="text-lg font-bold">Host: {negotiationDetails.host.host_name}</h3>
                            <p className="text-gray-500">Host Email: {negotiationDetails.host.host_email}</p>
                            <p className="text-gray-500">Host Phone: {negotiationDetails.host.host_phone}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                    <div className="flex flex-row items-center">

                        <div className="ml-5">
                            <h3 className="text-lg font-bold">Property: {negotiationDetails.propert_details.property_name}</h3>
                            <p className="text-gray-500">Property Type: {negotiationDetails.propert_details.property_type}</p>
                            <p className="text-gray-500">Property Sub Type: {negotiationDetails.propert_details.property_sub_type}</p>
                            <p className="text-gray-500">Location: {negotiationDetails.propert_details.address}</p>
                            <p className="text-gray-500">Number of Guests: {negotiationDetails.propert_details.number_of_guests}</p>
                            <p className="text-gray-500">Number of Bedrooms: {negotiationDetails.propert_details.number_of_bedrooms}</p>
                            <p className="text-gray-500">Number of Beds: {negotiationDetails.propert_details.number_of_beds}</p>
                            <p className="text-gray-500">Number of Bathrooms: {negotiationDetails.propert_details.number_of_bathrooms}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                    <div className="flex flex-row items-center">

                        <div className="ml-5">
                            <h3 className="text-lg font-bold">Booking Details</h3>
                            <p className="text-gray-500">Booking Type: {negotiationDetails.booking_details.booking_type}</p>
                            <p className="text-gray-500">Start Date: {negotiationDetails.booking_details.start_date}</p>
                            <p className="text-gray-500">End Date: {negotiationDetails.booking_details.end_date}</p>
                            <p className="text-gray-500">Staying Price: {negotiationDetails.booking_details.staying_price}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                    <div className="flex flex-row items-center">

                        <div className="ml-5">
                            <h3 className="text-lg font-bold">Meals</h3>
                            <p className="text-gray-500">Breakfast: {negotiationDetails.meals.breakfast.map((meal, index) => (
                                <p key={index}>{meal.name} - {meal.quantity} - {meal.date} - {meal.price}</p>
                            ))}</p>
                            <p className="text-gray-500">Lunch: {negotiationDetails.meals.lunch.map((meal, index) => (
                                <p key={index}>{meal.name} - {meal.quantity} - {meal.date} - {meal.price}</p>
                            ))}</p>
                            <p className="text-gray-500">Dinner: {negotiationDetails.meals.dinner.map((meal, index) => (
                                <p key={index}>{meal.name} - {meal.quantity} - {meal.date} - {meal.price}</p>
                            ))}</p>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                    <div className="flex flex-row items-center">
                        <div className="ml-5">
                            <h2 className="text-lg font-bold">Negotiation Details</h2>
                            <h4 className="text-lg">Negotiation Status: {negotiationDetails.negotiation_status}</h4>
                            {
                                (function () {
                                    if (negotiationDetails.negotiation_details.negotiation_status === "offeredbyguest") {
                                        return (
                                            <>
                                                <h4 className="text-lg">Regular Price: {negotiationDetails.negotiation_details.default_price}</h4>
                                                <h4 className="text-lg">Guest Offer: {guestSideOffer}</h4>
                                                <h4 className="text-lg"> Still No Offer from Host</h4>
                                            </>
                                        );
                                    } else if (negotiationDetails.negotiation_details.negotiation_status === "offeredbyhost") {
                                        return (
                                            <>
                                                <h4 className="text-lg">Regular Price: {negotiationDetails.negotiation_details.default_price}</h4>
                                                <h4 className="text-lg">Guest Offer: {guestSideOffer}</h4>
                                                <h4 className="text-lg">Host Offer: {hostSideOffer}</h4>
                                                {/* two button to accept or reject offer */}
                                                <button className="bg-green-500 text-white p-2 rounded-lg" onClick={acceptOffer}>Accept</button>
                                                <button className="bg-red-500 text-white p-2 rounded-lg" onClick={rejectOffer}>Reject</button>
                                            </>
                                        );
                                    } else if (negotiationDetails.negotiation_details.negotiation_status === "acceptedbyhost") {
                                        return (
                                            <>
                                                <h4 className="text-lg">Regular Price: {negotiationDetails.negotiation_details.default_price}</h4>
                                                <h4 className="text-lg">Guest Offer: {guestSideOffer}</h4>
                                                <h4 className="text-lg">Negotiation Accepted by Host</h4>
                                            </>
                                        );
                                    } else if (negotiationDetails.negotiation_details.negotiation_status === "rejectedbyhost") {
                                        return (
                                            <>
                                                <h4 className="text-lg">Regular Price: {negotiationDetails.negotiation_details.default_price}</h4>
                                                <h4 className="text-lg">Guest Offer: {guestSideOffer}</h4>
                                                <h4 className="text-lg">Negotiation Rejected by Host</h4>
                                            </>
                                        );
                                    } else if (negotiationDetails.negotiation_details.negotiation_status === "acceptedbyguest") {
                                        return (
                                            <>
                                                <h4 className="text-lg">Regular Price: {negotiationDetails.negotiation_details.default_price}</h4>
                                                <h4 className="text-lg">Host Offer: {hostSideOffer}</h4>
                                                <h4 className="text-lg">Negotiation Accepted by Guest</h4>
                                            </>
                                        );
                                    } else if (negotiationDetails.negotiation_details.negotiation_status === "rejectedbyguest") {
                                        return (
                                            <>
                                                <h4 className="text-lg">Regular Price: {negotiationDetails.negotiation_details.default_price}</h4>
                                                <h4 className="text-lg">Host Offer: {hostSideOffer}</h4>
                                                <h4 className="text-lg">Negotiation Rejected by Guest</h4>
                                            </>
                                        );
                                    } else {
                                        return (
                                            <div className="flex flex-col items-center">
                                                <p>Nothing to show</p>
                                            </div>
                                        );
                                    }
                                })()
                            }
                        </div>
                    </div>
                </div>



            </div>
        ) : (
            <div>Loading...</div>
        )
    );




}

export default NegotiationDetails;