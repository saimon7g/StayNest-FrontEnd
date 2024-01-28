'use client';
import React from "react";
import Link from 'next/link';
import { useEffect } from "react";
import { Step1Post } from "@/API/Registration";
import { Step1GET } from "@/API/Registration";

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








const Step1 = () => {
    const [propertyType, setPropertyType] = React.useState("House");
    const [propertySubType, setPropertySubType] = React.useState("Entire Room");
    const [locationName, setLocation] = React.useState("Dhaka");
    const [latitute, setLatitute] = React.useState("12345");
    const [longitute, setLongitute] = React.useState("09876");
    const [guests, setGuests] = React.useState("5");
    const [bedrooms, setBedrooms] = React.useState("4");
    const [beds, setBeds] = React.useState("3");
    const [bathrooms, setBathrooms] = React.useState("2");

    // const receivedVariable = useRouter().query;
    // console.log("received variable");
    // console.log(receivedVariable);

    useEffect(() => {
        Step1GET();
        clearState();

    }, []);

    const clearState = () => {
        setPropertyType("");
        setPropertySubType("");
        setLocation("");
        setLatitute("");
        setLongitute("");
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

    const handleLocationName = (event) => {
        setLocation(event.target.value);
    }
    const handleLatitude = (event) => {
        setLatitute(event.target.value);
    }
    const handleLongitude = (event) => {
        setLongitute(event.target.value);
    }
    const handleLocationClick = (event) => {
        event.preventDefault();
        console.log(locationName);
        console.log(latitute);
        console.log(longitute);
        // console.log("location  submit clicked");
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

        // console.log("submit");
        event.preventDefault();
        // use json object to store the data
        const result = {
            "user": 3,
            "property_type": propertyType,
            "property_sub_type": propertySubType,
            "location": {
                "latitude": latitute,
                "longitude": longitute,
                "selected_location": locationName
            },
            "some_basics": {
                "number_of_guests": guests,
                "number_of_bedrooms": bedrooms,
                "number_of_beds": beds,
                "number_of_bathrooms": bathrooms
            }
        }

        console.log(result);
       const resul = Step1Post(result);
        // console.log("submit clicked");
    }




    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="pb-5">
                    <text className="text-2xl font-bold ">1. What type of place are you listing?</text>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "House")} >
                            <FaHouse className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Apartment")} >
                            <MdApartment className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Cabin")} >
                            <MdOutlineCabin className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Campground")} >
                            <FaCampground className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Tower")} >
                            <LuTowerControl className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Castle")} >
                            <MdOutlineCastle className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Houseboat")} >
                            <MdHouseboat className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Hotel")} >
                            <FaHotel className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2">
                        <div  onClick={(e) => handlePropertyType(e, "Dome")} >
                            <FaLandmarkDome className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                                house
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

            {/* location selection using google map */}
            <div>
                <text className="text-2xl font-bold">3. Where is your place located?</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5">
                        <text className="text-center">Location</text>
                        <input type="text" value={locationName} onChange={handleLocationName} className="w-30" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5">
                        <text className="text-center">Latitude</text>
                        <input type="text" value={latitute} onChange={handleLatitude} className="w-30" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5">
                        <text className="text-center">Longitude</text>
                        <input type="text" value={longitute} onChange={handleLongitude} className="w-30" />
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLocationClick}>Submit</button>
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

                <Link href="/host/step2">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={handleSubmit}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Step1;
