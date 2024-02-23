'use client';
import React from "react";
import Link from 'next/link';
import { useEffect, useContext } from "react";
import { Step1Post } from "@/API/Registration";
import { Step1GET } from "@/API/Registration";
import RegistrationContext from "@/contexts/registrationContext";
import { useState } from "react";
import { Button } from 'flowbite-react';
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
    const { registrationId, setRegistrationId} = useContext(RegistrationContext);  // use the context

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
                "selected_location": "Dhaka",
                "latitude": latlng.lat,
                "longitude": latlng.lng,
               
            },
            "some_basics": {
                "number_of_guests": guests,
                "number_of_bedrooms": bedrooms,
                "number_of_beds": beds,
                "number_of_bathrooms": bathrooms
            }
        }
        const response = await Step1Post(result);
        console.log('Response Data:', response.data);
        
        try {
            setRegistrationId(response.data.registration_id);
            console.log("Registration ID is set to:", response.data.registration_id);
        } catch (error) {
            console.error("Error setting registration ID in context:", error);
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
                    <div onClick={(e) => handlePropertyType(e, "House")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="House" ? 'text-white bg-black' : 'text-black bg-white'}`} >
                        <div >
                            <FaHouse className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            House
                        </div>
                    </div>
                    <div  onClick={(e) => handlePropertyType(e, "Apartment")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Apartment" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div>
                            <MdApartment className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Apartment
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Cabin")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Cabin" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <MdOutlineCabin className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Cabin
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div onClick={(e) => handlePropertyType(e, "Campground")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Campground" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <FaCampground className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Campground
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Tower")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Tower" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <LuTowerControl className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Tower
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Castle")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Castle" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <MdOutlineCastle className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Castle
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div onClick={(e) => handlePropertyType(e, "Houseboat")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Houseboat" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <MdHouseboat className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Houseboat
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Hotel")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Hotel" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <FaHotel className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Hotel
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Dome")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black ${propertyType=="Dome" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
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
                <div className="flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4 hover:text-white hover:bg-black"
                    onClick={(e) => handlePropertySubType(e, "Entire place")} >
                    <div className="w-96 ">
                        <text className="text-lg font-bold ">An entire place</text>
                        <br></br>
                        <text className="text-base text-gray-400 font-bold">Guests have the whole place to themselves</text>
                    </div>
                    <div className="ml-10">
                        <FaHome className="text-4xl text-center" />
                    </div>
                </div>

                <div className="flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4 hover:text-white hover:bg-black"
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
                <div className="flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4 hover:text-white hover:bg-black"
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
                    <div className="ml-auto">
                        <textarea value={guests} onChange={handleGuests} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 mb-4 w-96">
                    <div className="">
                        <text className="text-center">Bedrooms</text>
                    </div>
                    <div className="ml-auto">
                        <textarea value={bedrooms} onChange={handleBedrooms} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 mb-4 w-96">
                    <div className="">
                        <text className="text-center">Beds</text>
                    </div>
                    <div className="ml-auto">
                        <textarea value={beds} onChange={handleBeds} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 mb-4 w-96">
                    <div className="">
                        <text className="text-center">Bathrooms</text>
                    </div>
                    <div className="ml-auto">
                        <textarea value={bathrooms} onChange={handleBathrooms} rows="1" cols="2" className=" bg-slate-200"></textarea>
                    </div>
                </div>


            </div>

            {/* next button to go to the next page and prev button to go to the prev page */}
            <div className="flex justify-between items-center">
                <Link href="/host">
                    <Button color="light" className="border border-gray-400 rounded-lg p-2 ml-96">
                        Prev
                    </Button>
                </Link>

                <div className="flex justify-between items-center" onClick={handleSubmit}>
                    <Link href="/host/step2">
                        <Button color="blue" className="border border-gray-400 rounded-lg p-2 mr-96 my-20">
                            Next
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Step1;
