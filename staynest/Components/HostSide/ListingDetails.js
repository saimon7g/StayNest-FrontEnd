'use client';
import { useState, useEffect } from "react";
import { getMyListingDetailsForHost } from "@/API/HostDashBoard";
import Image from 'next/image';


export function ListingDetails({ propertyId, handleOptionClick }) {

    const [listingDetails, setListingDetails] = useState(null);
    useEffect(() => {
        // Fetch data for selected option
        async function fetchData() {
            const data = await getMyListingDetailsForHost(propertyId);
            console.log(data);
            if (data) {
                setListingDetails(data);
            }
        }
        fetchData();
    }, [propertyId]);

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1>Some Basics</h1>
                <p>Number of Guests: {listingDetails?.some_basics?.number_of_guests}</p>
                <p>Number of Bedrooms: {listingDetails?.some_basics?.number_of_bedrooms}</p>
                <p>Number of Beds: {listingDetails?.some_basics?.number_of_beds}</p>
                <p>Number of Bathrooms: {listingDetails?.some_basics?.number_of_bathrooms}</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">Location</h1>
                <p>Location Name: {listingDetails?.location?.selected_location}</p>
                <p>House Name: {listingDetails?.location?.house_name}</p>
                <p>Area Details: {listingDetails?.location?.area_details}</p>
                <p> Holding Number: {listingDetails?.location?.holding_number}</p>
                <p> Flat Number: {listingDetails?.location?.flat_number}</p>
                <p> Road Number: {listingDetails?.location?.road_number}</p>
            </div>

            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">Amenities</h1>
                <div>
                    <h2>Regular Amenities</h2>
                    {listingDetails?.step2?.regular_amenities.map((amenity, index) => (
                        <p key={index}>{amenity.name}</p>
                    ))}
                </div>
                <div>
                    <h2>Standout Amenities</h2>
                    {listingDetails?.step2?.standout_amenities.map((amenity, index) => (
                        <p key={index}>{amenity.name}</p>
                    ))}
                </div>
                <div>
                    <h2>Photos</h2>
                    {listingDetails?.step2?.photos.map((photo, index) => (
                        <Image src={photo.image_data} width={100} height={100} className="rounded-lg " alt='property' />
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">House Title</h1>
                <p>{listingDetails?.step3?.house_title}</p>
                <h1 className="text-2xl font-bold mb-5">Highlights</h1>
                {listingDetails?.step3?.highlights.map((highlight, index) => (
                    <p key={index}>{highlight}</p>
                ))}
                <h1 className="text-2xl font-bold mb-5">Description</h1>
                <p>{listingDetails?.step3?.description}</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">Price</h1>
                <p>Price: {listingDetails?.step4?.price}</p>
                <p>Weekly Stay Discount: {listingDetails?.step4?.discounts?.weeklyStay}</p>
                <p>Early Booking Discount: {listingDetails?.step4?.discounts?.earlyBooking}</p>
                <h1 className="text-2xl font-bold mb-5">Security Features</h1>
                {listingDetails?.step4?.security_features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                ))}
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">Meals</h1>
                <div>
                    <h2>Breakfast</h2>
                    {listingDetails?.step5?.breakfast.map((meal, index) => (
                        <p key={index}>{meal.name}</p>
                    ))}
                </div>
                <div>
                    <h2>Lunch</h2>
                    {listingDetails?.step5?.lunch.map((meal, index) => (
                        <p key={index}>{meal.name}</p>
                    ))}
                </div>
                <div>
                    <h2>Dinner</h2>
                    {listingDetails?.step5?.dinner.map((meal, index) => (
                        <p key={index}>{meal.name}</p>
                    ))}
                </div>
                <h1 className="text-2xl font-bold mb-5">Paying Guest</h1>
                <p>{listingDetails?.paying_guest?.description}</p>
                <p>{listingDetails?.paying_guest?.meal_price}</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">Selected Dates</h1>
                {listingDetails?.step7?.selected_dates.map((date, index) => (
                    <p key={index}>{date.start_date} - {date.end_date}</p>
                ))}
            </div>


        </div>
    );




}

export default ListingDetails;