'use client';
import React from "react";
import Link from 'next/link';
import { useEffect, useContext } from "react";
import { Step1Post } from "@/API/Registration";
import { Step1GET } from "@/API/Registration";
import RegistrationContext from "@/contexts/registrationContext";
import { useState } from "react";
import HostNavBar from "@/Components/HostSide/HostNavbar";
import Footer from "@/Components/Footer";

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
import { Avatar, Button, Dropdown, } from 'flowbite-react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";

const Step1 = () => {
    const { registrationId, setRegistrationId } = useContext(RegistrationContext);  // use the context
    const [propertyType, setPropertyType] = React.useState("");
    const [propertySubType, setPropertySubType] = React.useState("");
    const [cityName, setCityName] = React.useState("");
    const [houseName, setHouseName] = React.useState("");
    const [holdingNumber, setHoldingNumber] = React.useState("");
    const [flatNumber, setFlatNumber] = React.useState("");
    const [roadNumber, setRoadNumber] = React.useState("");
    const [areaName, setAreaName] = React.useState("");
    const [latlng, setLatlng] = React.useState({ lat: 23.8103, lng: 90.4125 });
    const [guests, setGuests] = React.useState("");
    const [bedrooms, setBedrooms] = React.useState("");
    const [beds, setBeds] = React.useState("");
    const [bathrooms, setBathrooms] = React.useState("");
    const [specialType, setSpecialType] = React.useState("");
    const [services, setServices] = useState({
        stay: false,
        stay_with_meal: false,
        paying_guest: false
    });

    const searchParams = useSearchParams();

    useEffect(() => {
        const parseServicesFromQuery = () => {
            const queryParams = searchParams.get('services'); // Get the query parameters
            const queryParamsArray = queryParams.split(','); // Split query parameters into an array

            const updatedServices = {
                stay: queryParamsArray.includes('stay'),
                stay_with_meal: queryParamsArray.includes('stay_with_meal'),
                paying_guest: queryParamsArray.includes('paying_guest')
            };
            console.log(updatedServices);
            // Set the updated services state
            setServices(updatedServices);
        };

        // Call the function to parse services from query when the component mounts
        parseServicesFromQuery();
    }, [searchParams]);

    useEffect(() => {
        Step1GET();
        clearState();
    }, []);
    //--


    const clearState = () => {
        setPropertyType("");
        setPropertySubType("");
        setLatlng({ lat: 23.8103, lng: 90.4125 });
        setCityName("");
        setHouseName("");
        setHoldingNumber("");
        setFlatNumber("");
        setRoadNumber("");
        setAreaName("");
        setGuests("");
        setBedrooms("");
        setBeds("");
        setBathrooms("");
        setSpecialType("");

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

    const handleSpecialType = (event, type) => {
        console.log(type);

        setSpecialType(type);

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        {
            if (propertyType === "") {
                alert("Please select property type");
                return;
            }
            if (propertySubType === "") {
                alert("Please select property sub type");
                return;
            }
            if (cityName === "") {
                alert("Please enter city name");
                return;
            }
            if (houseName === "") {
                alert("Please enter house name");
                return;
            }
            if (areaName === "") {
                alert("Please enter area name");
                return;
            }
            if (latlng.lat === 23.8103 && latlng.lng === 90.4125) {
                alert("Please select location on map");
                return;
            }
            if (guests === "") {
                alert("Please enter number of guests");
                return;
            }
            if (bedrooms === "") {
                alert("Please enter number of bedrooms");
                return;
            }
            if (beds === "") {
                alert("Please enter number of beds");
                return;
            }
            if (bathrooms === "") {
                alert("Please enter number of bathrooms");
                return;
            }
            if (specialType === "") {
                alert("Please select special type");
                return;
            }
        }
        const result = {
            "property_type": propertyType,
            "property_sub_type": propertySubType,
            "online_type": specialType,
            "stay": services.stay,
            "stay_with_meal": services.stay_with_meal,
            "paying_guest": services.paying_guest,
            "location": {
                "latitude": latlng.lat,
                "longitude": latlng.lng,
                "selected_location": cityName,
                "house_name": houseName,
                "holding_number": holdingNumber,
                "flat_number": flatNumber,
                "road_number": roadNumber,
                "area_details": areaName,
            },
            "some_basics": {
                "number_of_guests": guests,
                "number_of_bedrooms": bedrooms,
                "number_of_beds": beds,
                "number_of_bathrooms": bathrooms
            },

        }
        const response = await Step1Post(result);
        console.log('Response Data:', response.data);

        try {
            setRegistrationId(response.data.registration_id);
            console.log("Registration ID is set to:", response.data.registration_id);
            const router = useRouter();
            router.push('/host/step2');
            // router push to next page

        } catch (error) {
            console.error("Error setting registration ID in context:", error);
        }

        console.log("submit clicked");
    }




    return (
        <div>
            <HostNavBar />
            <div className="flex flex-col items-center justify-center">
                <div className="pb-5">
                    <text className="text-2xl font-bold ">1. What type of place are you listing?</text>
                </div>
                <div className="flex justify-center">
                    <div onClick={(e) => handlePropertyType(e, "House")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "House" ? 'text-white bg-black' : 'text-black bg-white'}`} >
                        <div >
                            <FaHouse className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            House
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Apartment")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Apartment" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div>
                            <MdApartment className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Apartment
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Cabin")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Cabin" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <MdOutlineCabin className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Cabin
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div onClick={(e) => handlePropertyType(e, "Campground")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Campground" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <FaCampground className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Campground
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Tower")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Tower" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <LuTowerControl className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Tower
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Castle")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Castle" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <MdOutlineCastle className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Castle
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div onClick={(e) => handlePropertyType(e, "Houseboat")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Houseboat" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <MdHouseboat className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Houseboat
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Hotel")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Hotel" ? 'text-white bg-black' : 'text-black bg-white'}`}>
                        <div >
                            <FaHotel className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Hotel
                        </div>
                    </div>
                    <div onClick={(e) => handlePropertyType(e, "Dome")} className={`flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 hover:text-white hover:bg-black 
                    ${propertyType == "Dome" ? 'text-white bg-black' : 'text-black bg-white'}`}>
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
                <div className={`flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4 hover:text-white hover:bg-black
                ${propertySubType == "Entire place" ? 'text-white bg-black' : 'text-black bg-white'}`}
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

                <div className={`flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4 hover:text-white hover:bg-black
                ${propertySubType == "Private room" ? 'text-white bg-black' : 'text-black bg-white'}`}
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
                <div className={`flex items-center justify-between border-2 border-black rounded-lg p-6 mb-4 hover:text-white hover:bg-black
                ${propertySubType == "Shared room" ? 'text-white bg-black' : 'text-black bg-white'}`}
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
                <div className="flex justify-center">

                    {/* const [cityName, setCityName] = React.useState("Dhaka"); mandatory 
                    const [houseName, setHouseName] = React.useState(""); mandatory
                    const [holdingNumber, setHoldingNumber] = React.useState("");
                    const [flatNumber, setFlatNumber] = React.useState("");
                    const [roadNumber, setRoadNumber] = React.useState("");
                    const [areaName, setAreaName] = React.useState("");  mandatory                       */}

                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-between p-4 mb-4 w-96">
                            <div className="">
                                {/* city with red star * meaning mandatory */}
                                <text className="text-center">City <text className="text-red-500">*</text></text>
                            </div>
                            <div className="ml-auto">
                                {/* mandatory */}
                                <textarea value={cityName} onChange={(e) => setCityName(e.target.value)} rows="1" cols="10" className=" bg-slate-200"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 mb-4 w-96">
                            <div className="">
                                <text className="text-center">House Name<text className="text-red-500">*</text></text>
                            </div>
                            <div className="ml-auto">
                                <textarea value={houseName} onChange={(e) => setHouseName(e.target.value)} rows="1" cols="10" className=" bg-slate-200"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 mb-4 w-96">
                            <div className="">
                                <text className="text-center">Holding Number</text>
                            </div>
                            <div className="ml-auto">
                                <textarea value={holdingNumber} onChange={(e) => setHoldingNumber(e.target.value)} rows="1" cols="10" className=" bg-slate-200"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 mb-4 w-96">
                            <div className="">
                                <text className="text-center">Flat Number</text>
                            </div>
                            <div className="ml-auto">
                                <textarea value={flatNumber} onChange={(e) => setFlatNumber(e.target.value)} rows="1" cols="10" className=" bg-slate-200"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 mb-4 w-96">
                            <div className="">
                                <text className="text-center">Road Number</text>
                            </div>
                            <div className="ml-auto">
                                <textarea value={roadNumber} onChange={(e) => setRoadNumber(e.target.value)} rows="1" cols="10" className=" bg-slate-200"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 mb-4 w-96">
                            <div className="">
                                <text className="text-center">Area Details <text className="text-red-500">*</text></text>
                            </div>
                            <div className="ml-auto">
                                <textarea value={areaName} onChange={(e) => setAreaName(e.target.value)} rows="1" cols="10" className=" bg-slate-200"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center">
                    <text className="text-2xl font-bold">Set Location on Map<text className="text-red-500">*</text></text>
                </div>

                <div className="flex justify-center ">

                    <div className="w-6/12"><Map setLatlng={setLatlng} /></div>
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
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <h2>Add Special type</h2>
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Select Special Type</span>
                    </Dropdown.Header>
                    <Dropdown.Item onClick={(e) => handleSpecialType(e, "Standard")}>Standard</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => handleSpecialType(e, "Premium")}>Premium</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => handleSpecialType(e, "Luxury")}    >Luxury</Dropdown.Item>

                </Dropdown>
                {/* show selected special type */}
                <div className="flex justify-center">
                    <text className="text-2xl font-bold">Selected Special Type: {specialType}</text>
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
                    <Button color="blue" className="border border-gray-400 rounded-lg p-2 mr-96 my-20">
                        Next
                    </Button>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Step1;
