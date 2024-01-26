'use client';
import React from "react";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { MdOutlineCabin } from "react-icons/md";
import { FaCampground } from "react-icons/fa";
import { LuTowerControl } from "react-icons/lu";
import { MdHouseboat } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaLandmarkDome } from "react-icons/fa6";
import { MdOutlineCastle } from "react-icons/md";




const Step1 = () => {
    const [propertyType, setPropertyType] = React.useState("");
    const [propertySubType, setPropertySubType] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [guests, setGuests] = React.useState("");
    const [bedrooms, setBedrooms] = React.useState("");
    const [beds, setBeds] = React.useState("");
    const [bathrooms, setBathrooms] = React.useState("");

    const handlePropertyType = (event, type) => {
        event.preventDefault();
        setPropertyType(type);
    };

    const handlePropertySubType = (event, subtype) => {
        setPropertySubType(subtype);
    };
    const handleFormSubmit = (event, location) => {
    
        setLocation(location);
    }

    const handleGuests = (event) => {
        setGuests(event.target.value);
    }
    const handleBedrooms = (event) => {
        setBedrooms(event.target.value);
    }
    const handleBeds = (event) => {
        setBeds(event.target.value);
    }
    const handleBathrooms = (event) => {
        setBathrooms(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(propertyType, propertySubType, location, guests, bedrooms, beds, bathrooms);
    }




    return (
        <div>
            <div>
                <text className="text-2xl font-bold">1. What type of place are you listing?</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "House")} >
                        <FaHouse className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Apartment")} >
                        <MdApartment className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Cabin")} >
                        <MdOutlineCabin className="text-6xl text-center" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Campground")} >
                        <FaCampground className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Tower")} >
                        <LuTowerControl className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Castle")} >
                        <MdOutlineCastle className="text-6xl text-center" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Houseboat")} >
                        <MdHouseboat className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Hotel")} >
                        <FaHotel className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handlePropertyType(e, "Dome")} >
                        <FaLandmarkDome className="text-6xl text-center" />
                    </div>
                </div>
            </div>
            <div>
                <text className="text-2xl font-bold">2. What type of place your guest will be staying?</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={() => handlePropertySubType("Entire place")} >
                        <text className="text-center">Entire place</text>
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={() => handlePropertySubType("Private room")} >
                        <text className="text-center">Private room</text>
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={() => handlePropertySubType("Shared room")} >
                        <text className="text-center">Shared room</text>
                    </div>
                </div>
            </div>

            {/* location selection using google map */}
            <div>
                <text className="text-2xl font-bold">3. Where is your place located?</text>
                {/* a form to collect location data */}
                <form >
                    <input type="text" placeholder="location" />
                    <button type="submit">Submit</button>
                </form>
                    

               


            </div>
            <div>
                <text className="text-2xl font-bold">4. How many guests can your place accommodate?</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5">
                        <text className="text-center">Guests</text>
                        {/* scroll bar to add or remove number of guest */}
                        <input type="range" min="1" max="10" value={guests} onChange={handleGuests} />
                        
                    </div>
                </div>

                <text className="text-center">number of bedrooms</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5">
                        <text className="text-center">Bedrooms</text>
                    </div>
                </div>

                <text className="text-center">number of beds</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5">
                        <text className="text-center">Beds</text>
                    </div>
                </div>

                <text className="text-center">number of bathrooms</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5">
                        <text className="text-center">Bathrooms</text>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Step1;
