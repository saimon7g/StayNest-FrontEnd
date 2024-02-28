'use client';
import React, { useState, useEffect } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { getPropertiesByHost } from '@/API/UserDashBoard'; // Assuming you have an API function to fetch properties by host
// import PropertyCard from './PropertyCard'; // Assuming you have a component to display individual property cards

export function MyListings({ handleOptionClick, setSelectedPropertyId }) {
    const [listings, setListings] = useState(null);

    const fetchListings = async () => {
        const response = await getPropertiesByHost(); // Fetch properties listed by the host
        setListings(response.data);
    };

    useEffect(() => {
        fetchListings();
    }, []);

    const clickHandler = (propertyId) => () => {
        handleOptionClick('ListingDetails');
        setSelectedPropertyId(propertyId);
    };

    return (
        listings === null ? <div>Loading...</div> :
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">My Listings</h1>
                <div className="flex flex-col">
                    {/* Display property listings */}
                    {listings.map((property, index) => (
                        <div key={index} className="border-b-2 border-gray-100 p-5 hover:bg-gray-200" onClick={clickHandler(property.id)}>
                            {/* <PropertyCard property={property} /> */}
                            <div className="flex items-center justify-end">
                                <button className="flex items-center text-blue-500" onClick={clickHandler(property.id)}>
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

export default MyListings;
