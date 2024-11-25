'use client';
import React, { useState, useEffect } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { getMyListings } from '@/API/UserDashBoard'; 
import Image from 'next/image';
import { Spinner } from 'flowbite-react';





export function MyListings({ handleOptionClick, setSelectedPropertyId }) {
    const [listings, setListings] = useState(null);
    const fetchListings = async () => {
        const response = await getMyListings(); // Fetch properties listed by the host\
        console.log(" yeeeeeeeeeee listingggggggggg ",response);
        setListings(response);
    };

    useEffect(() => {
        fetchListings();
    }, []);

    const clickHandler = (propertyId) => () => {
        handleOptionClick('ListingDetails');
        setSelectedPropertyId(propertyId);
    };

    return (
        listings === null ? <div className="flex justify-center items-center h-96">       <Spinner aria-label="Extra large spinner example" size="xl" /> </div> :
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">My Listings</h1>
                <div className="flex flex-col">
                    {/* Display property listings */}
                    {listings.map((property, index) => (
                        <div key={index} className="border-b-2 border-gray-100 p-5 hover:bg-gray-200" onClick={clickHandler(property.property_id)}>
                            {/* <PropertyCard property={property} /> */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                   <Image src={property.photo} width={100} height={100} className="rounded-lg " alt='property' />
                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold">{property.name}</h2>
                                        <p className="text-sm">{property.location_name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm">{property.online_type}</p>
                                </div>
                            </div>

                            
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
