'use client';
import React from "react";
import Link from 'next/link';
import { useEffect, useContext } from "react";
import { Step1Post } from "@/API/Registration";
import { Step1GET } from "@/API/Registration";
import RegistrationContext from "@/contexts/registrationContext";
import { useState } from "react";

import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { MdOutlineCabin } from "react-icons/md";
import { FaCampground } from "react-icons/fa";
import { LuTowerControl } from "react-icons/lu";
import { MdHouseboat } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaLandmarkDome } from "react-icons/fa6";
import { MdOutlineCastle } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
import Map from "@/Components/HostSide/Map";


const Step1 = () => {
    const [propertyType, setPropertyType] = React.useState("House");
    const [propertySubType, setPropertySubType] = React.useState("Entire Room");
    const [locationName, setLocation] = React.useState("Dhaka");
    const [latlng, setLatlng] = React.useState({ lat: 23.8103, lng: 90.4125 });
    const [guests, setGuests] = React.useState("5");
    const [bedrooms, setBedrooms] = React.useState("4");
    const [beds, setBeds] = React.useState("3");
    const [bathrooms, setBathrooms] = React.useState("2");
    useEffect(() => {
        Step1GET();
        clearState();
    }, []);
    //--


    const clearState = () => {
        setPropertyType("");
        setPropertySubType("");
        setLocation("");
        setLatlng({ lat: 23.8103, lng: 90.4125 });
        setGuests("");
        setBedrooms("");
        setBeds("");
        setBathrooms("");
    }


    const handlePropertyType = (event, type) => {
        console.log(type);
        event.preventDefault();
        setPropertyType(type);
    };

    const handlePropertySubType = (event, subtype) => {
        console.log(subtype);
        setPropertySubType(subtype);
    };

    const handleLocation = (event) => {
        console.log(latlng);
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

    const handleSubmit = async (event) => {

        // console.log("submit");
        event.preventDefault();
        // use json object to store the data
        const result = {

            "property_type": propertyType,
            "property_sub_type": propertySubType,
            "location": {
                "latitude": latlng.lat,
                "longitude": latlng.lng,
                "name": locationName
            },
            "some_basics": {
                "number_of_guests": guests,
                "number_of_bedrooms": bedrooms,
                "number_of_beds": beds,
                "number_of_bathrooms": bathrooms
            }
        }
        const response = await Step1Post(result);
        console.log('RESponSE Data is here ');
        try {
            setRegistrationId(response.data.registration_id);  // set the context variable 
            console.log("registration id is set to ----- ", response.data.registration_id);
        } catch (error) {
            console.log("error SETTING registration id in context");
        }
        console.log("submit clicked");
    }




    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="pb-5">
                    <text className="text-2xl font-bold ">1. What type of place are you listing?</text>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2" onClick={(e) => handlePropertyType(e, "House")} >
                        <div >
                            <FaHouse className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            House
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Apartment")} >
                            <MdApartment className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Apartment
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Cabin")} >
                            <MdOutlineCabin className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Cabin
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Campground")} >
                            <FaCampground className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Campground
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Tower")} >
                            <LuTowerControl className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Tower
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Castle")} >
                            <MdOutlineCastle className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Castle
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Houseboat")} >
                            <MdHouseboat className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Houseboat
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Hotel")} >
                            <FaHotel className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Hotel
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div onClick={(e) => handlePropertyType(e, "Dome")} >
                            <FaLandmarkDome className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Dome
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="mb-16">
                    <text className="text-2xl font-bold">2. What type of place your guest will be staying?</text>
                </div>
                <div className="flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4"
                    onClick={(e) => handlePropertySubType(e, "Entire place")} >
                    <div className="w-96">
                        <text className="text-lg font-bold ">An entire place</text>
                        <br></br>
                        <text className="text-base text-gray-400 font-bold">Guests have the whole place to themselves</text>
                    </div>
                    <div className="ml-10">
                        <FaHome className="text-4xl text-center" />
                    </div>
                </div>

                <div className="flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4"
                    onClick={(e) => handlePropertySubType(e, "Private room")} >
                    <div className="w-96">
                        <text className="text-lg font-bold ">A room</text>
                        <br></br>
                        <text className="text-base text-gray-400 font-bold">Guests have their own room and access to a shared place</text>
                    </div>
                    <div className="ml-10">
                        <FaDoorClosed className="text-4xl text-center" />
                    </div>
                </div>
                <div className="flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4"
                    onClick={(e) => handlePropertySubType(e, "Shared room")} >
                    <div className="w-96">
                        <text className="text-lg font-bold ">A shared place</text>
                        <br></br>
                        <text className="text-base text-gray-400 font-bold">Guests sleep in an area that may be shared by others</text>
                    </div>
                    <div className="ml-10">
                        <MdAirlineSeatIndividualSuite className="text-4xl text-center" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-center">
                    <text className="text-2xl font-bold">3. Where's your place located?</text>
                </div>
                <div className="flex justify-center ">
                    <div className="w-6/12"><Map setLatlng={setLatlng} /></div>
                </div>
                <div className="flex justify-center">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={handleLocation}>Set Location</button>
                </div>

            </div>



            <div className="flex flex-col items-center justify-center" >
                <div>
                    <text className="text-2xl font-bold">4. How many guests can your place accommodate?</text>
                </div>
                <div className="flex items-center justify-between p-4 mb-4 w-96">
                    <div className="">
                        <text className="text-center">Guests</text>
                    </div>
                    <div className="ml-80">
                        <textarea value={guests} onChange={handleGuests} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 mb-4 w-96">
                    <div className="">
                        <text className="text-center">Bedrooms</text>
                    </div>
                    <div className="ml-80">
                        <textarea value={bedrooms} onChange={handleBedrooms} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 mb-4 w-96">
                    <div className="">
                        <text className="text-center">Beds</text>
                    </div>
                    <div className="ml-80">
                        <textarea value={beds} onChange={handleBeds} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 mb-4 w-96">
                    <div className="">
                        <text className="text-center">Bathrooms</text>
                    </div>
                    <div className="ml-80">
                        <textarea value={bathrooms} onChange={handleBathrooms} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>


            </div>

            {/* next button to go to the next page and prev button to go to the prev page */}
            <div className="flex justify-between items-center">
                <Link href="/host">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Prev
                    </button>
                </Link>

                {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>Next</button> */}

                <div className="flex justify-between items-center" onClick={handleSubmit}>
                    <Link href="/host/step2">
                        <button className="border border-gray-400 rounded-lg p-2 m-2" >
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Step1;
