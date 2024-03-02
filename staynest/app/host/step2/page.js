'use client';
import React from "react";

import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaParking } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";

import { TbPool } from "react-icons/tb";
import { FaHotTub } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { IoMdBonfire } from "react-icons/io";
import { GiFireplace } from "react-icons/gi";
import { CgPiano } from "react-icons/cg";
import { GiPoolTableCorner } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { FaUmbrellaBeach } from "react-icons/fa";

import FileUpload from "@/Components/ImageUpload";
import { useState } from "react";
import { Step2PUT } from "@/API/Registration";
import { Step2GET } from "@/API/Registration";
import { useEffect, useContext } from 'react';
import Link from "next/link";
import HostNavBar from "@/Components/HostSide/HostNavbar";
import Footer from "@/Components/Footer";

import RegistrationContext from "@/contexts/registrationContext";
const Step2 = () => {
    const { registrationId, setRegistrationId } = useContext(RegistrationContext);  // use the context

    const [regular_amenities, setRegularAmenities] = React.useState([]);
    const [standout_amenities, setStandoutAmenities] = React.useState([]);
    const [uploadedFiles, setUploadedFiles] = React.useState([]);
    //regular amenities
    const [wifi, setWifi] = useState(false);
    const [tv, setTv] = useState(false);
    const [kitchen, setKitchen] = useState(false);
    const [workplace, setWorkplace] = useState(false);
    const [parking, setParking] = useState(false);
    const [airConditioning, setAirConditioning] = useState(false);
    const [washingMachine, setWashingMachine] = useState(false);
    //standout amenities
    const [pool, setPool] = useState(false);
    const [hotTub, setHotTub] = useState(false);
    const [barbecue, setBarbecue] = useState(false);
    const [dining, setDining] = useState(false);
    const [bonFire, setBonFire] = useState(false);
    const [firePlace, setFirePlace] = useState(false);
    const [piano, setPiano] = useState(false);
    const [poolTable, setPoolTable] = useState(false);
    const [gym, setGym] = useState(false);
    const [beach, setBeach] = useState(false);

    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // State to manage login status


    useEffect(() => {
        console.log("useEffect step2")
        const fetchStep2Data = async () => {
            try {
                const response = await Step2GET(registrationId);
                console.log("step2get")
                // Check if response status is 404 (Not Found)
                if (response.status === 404) {
                    console.log("Empty data form");
                    // Handle the case of an empty data form
                } else {
                    console.log(response.data);

                    // Handle the response data as needed
                    setRegularAmenities(response.data.regular_amenities);
                    updateRegularAmenities(regular_amenities);
                    setStandoutAmenities(response.data.standout_amenities);
                    updateStandoutAmenities(standout_amenities);
                    setUploadedFiles(response.data.photos);
                }
                // Handle the response data as needed
            } catch (error) {
                console.error('Error fetching step 2 data: ', error);
            }
        };

        if (registrationId) {
            console.log("registrationId--page2 --", registrationId);
            fetchStep2Data();
        }
    }, [registrationId]);

    //regular
    const getRegularAmenities = () => {
        const trueAmenities = [];
        
        if (wifi) trueAmenities.push("Wifi");
        if (tv) trueAmenities.push("TV");
        if (kitchen) trueAmenities.push("Kitchen");
        if (workplace) trueAmenities.push("Workplace");
        if (parking) trueAmenities.push("Parking");
        if (airConditioning) trueAmenities.push("Air conditioning");
        if (washingMachine) trueAmenities.push("Washing machine");
        
        return trueAmenities;
    };
    const updateRegularAmenities = (amenitiesArray) => {
        amenitiesArray.forEach(amenity => {
            switch (amenity) {
                case "Wifi":
                    setWifi(true);
                    break;
                case "TV":
                    setTv(true);
                    break;
                case "Kitchen":
                    setKitchen(true);
                    break;
                case "Workspace":
                    setWorkplace(true);
                    break;
                case "Parking":
                    setParking(true);
                    break;
                case "Air conditioning":
                    setAirConditioning(true);
                    break;
                case "Washing machine":
                    setWashingMachine(true);
                    break;
                default:
                    break;
            }
        });
    };
    const handleRegularAmenities = () => {
        setRegularAmenities(getRegularAmenities());
    }

    
    const handleWifiClick = () => {
        setWifi(!wifi);
        handleRegularAmenities(); // Update regular amenities array
        console.log(regular_amenities);
    };
    
    const handleTvClick = () => {
        setTv(!tv);
        handleRegularAmenities(); // Update regular amenities array
    };
    
    const handleKitchenClick = () => {
        setKitchen(!kitchen);
        handleRegularAmenities(); // Update regular amenities array
    };
    
    const handleWorkplaceClick = () => {
        setWorkplace(!workplace);
        handleRegularAmenities(); // Update regular amenities array
    };
    
    const handleParkingClick = () => {
        setParking(!parking);
        handleRegularAmenities(); // Update regular amenities array
    };
    
    const handleAirConditioningClick = () => {
        setAirConditioning(!airConditioning);
        handleRegularAmenities(); // Update regular amenities array
    };
    
    const handleWashingMachineClick = () => {
        setWashingMachine(!washingMachine);
        handleRegularAmenities(); // Update regular amenities array
    };
    
    //standout
    const getStandoutAmenities = () => {
        const standoutAmenitiesArray = [];
        if (pool) standoutAmenitiesArray.push("Pool");
        if (hotTub) standoutAmenitiesArray.push("Hot tub");
        if (barbecue) standoutAmenitiesArray.push("Barbecue");
        if (dining) standoutAmenitiesArray.push("Dining");
        if (bonFire) standoutAmenitiesArray.push("Bonfire");
        if (firePlace) standoutAmenitiesArray.push("Fireplace");
        if (piano) standoutAmenitiesArray.push("Piano");
        if (poolTable) standoutAmenitiesArray.push("Pool table");
        if (gym) standoutAmenitiesArray.push("Gym");
        if (beach) standoutAmenitiesArray.push("Beach");
    
        return standoutAmenitiesArray;
    };
    const updateStandoutAmenities = (amenitiesArray) => {
        amenitiesArray.forEach(amenity => {
            switch (amenity) {
                case "Pool":
                    setPool(true);
                    break;
                case "Hot tub":
                    setHotTub(true);
                    break;
                case "Barbecue":
                    setBarbecue(true);
                    break;
                case "Dining":
                    setDining(true);
                    break;
                case "Bonfire":
                    setBonFire(true);
                    break;
                case "Fireplace":
                    setFirePlace(true);
                    break;
                case "Piano":
                    setPiano(true);
                    break;
                case "Pool table":
                    setPoolTable(true);
                    break;
                case "Gym":
                    setGym(true);
                    break;
                case "Beach":
                    setBeach(true);
                    break;
                default:
                    break;
            }
        });
    };
    const handleStandoutAmenities = () => {
        setStandoutAmenities(getStandoutAmenities());
    }
    
    const handlePoolClick = () => {
        setPool(!pool);
        handleStandoutAmenities(); // Update standout amenities array
        console.log(standout_amenities);
    };
    
    const handleHotTubClick = () => {
        setHotTub(!hotTub);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handleBarbecueClick = () => {
        setBarbecue(!barbecue);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handleDiningClick = () => {
        setDining(!dining);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handleBonFireClick = () => {
        setBonFire(!bonFire);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handleFirePlaceClick = () => {
        setFirePlace(!firePlace);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handlePianoClick = () => {
        setPiano(!piano);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handlePoolTableClick = () => {
        setPoolTable(!poolTable);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handleGymClick = () => {
        setGym(!gym);
        handleStandoutAmenities(); // Update standout amenities array
    };
    
    const handleBeachClick = () => {
        setBeach(!beach);
        handleStandoutAmenities(); // Update standout amenities array
    };


    const handleUpload = async (files) => {
        try {
            const formData = [];
            files.forEach((file) => {
                // change file into json format image base64
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    // console.log(reader.result);
                    uploadedFiles.push(reader.result);
                };
                reader.onerror = function (error) {
                    console.log('Error converting image to base64: ', error);
                };
            });

        } catch (error) {
            console.error('Error uploading files:         ', error);
        }
    };

    const handleSubmit = (event) => {
        // need to change regular aminities and standout aminities to json format

        // for loop to change regular aminities and standout aminities to json format

        const regular_amenities_json = [];
        for (let i = 0; i < regular_amenities.length; i++) {
            regular_amenities_json.push({ "name": regular_amenities[i] });
        }
        const standout_amenities_json = [];
        for (let i = 0; i < standout_amenities.length; i++) {
            standout_amenities_json.push({ "name": standout_amenities[i] });
        }
        const photos_json = [];
        for (let i = 0; i < uploadedFiles.length; i++) {
            // need to extract from formdata
            photos_json.push({ "image_data": uploadedFiles[i], "description": "Living Room" });
        }

        const data = {
            "regular_amenities": regular_amenities_json,
            "standout_amenities": standout_amenities_json,
            "photos": photos_json
        }

        const result = Step2PUT(data, registrationId);
        setRegistrationId(registrationId)
        console.log(result);
    }

















    return (
        <div>
            <HostNavBar isSearchFormVisible={isSearchFormVisible} setIsSearchFormVisible={setIsSearchFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div className="border-4 rounded shadow-2xl w-7/12 mx-auto my-20">
                {/* <h1>Make your place stand out</h1> */}
                <div className="flex flex-col justify-center items-center mb-48">
                    <div className="my-10">
                        <text className="text-2xl font-bold">4. Tell us what your place has to offer</text>
                        <br></br>
                        <text className="text-lg text-gray-400 font-bold pl-10">You can add more amenities later</text>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleWifiClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${wifi ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <FaWifi className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Wifi
                                </div>
                            </div>
                        </button>
                        <button onClick={handleTvClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${tv ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <PiTelevisionSimpleDuotone className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    TV
                                </div>
                            </div>
                        </button>
                        <button onClick={handleKitchenClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${kitchen ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <MdOutlineSoupKitchen className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Kitchen
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleWorkplaceClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${workplace ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <BsPersonWorkspace className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Workplace
                                </div>
                            </div>
                        </button>
                        <button onClick={handleParkingClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${parking ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <FaParking className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Parking
                                </div>
                            </div>
                        </button>
                        <button onClick={handleAirConditioningClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${airConditioning ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <TbAirConditioning className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Air conditioning
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleWashingMachineClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${washingMachine ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <GiWashingMachine className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Washing machine
                                </div>
                            </div>
                        </button>
                    </div>
                </div>


                <div className="flex flex-col justify-center items-center mb-48">
                    <div className="mb-16">
                        <text className="text-2xl font-bold">5. Do you have any stand out features?</text>
                        <br></br>
                        <text className="text-lg text-gray-400 font-bold pl-10">You can add more later</text>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handlePoolClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${pool? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'} `}>
                            <div className="flex">
                                <div >
                                    <TbPool className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Pool
                                </div>
                            </div>
                        </button>
                        <button onClick={handleHotTubClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${hotTub ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div >
                                    <FaHotTub className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Hot tub
                                </div>
                            </div>
                        </button>

                        <button onClick={handleBarbecueClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${barbecue ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div >
                                    <GiBarbecue className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Barbecue
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleDiningClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${dining ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <MdOutlineDinnerDining className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Dining
                                </div>
                            </div>
                        </button>

                        <button onClick={handleBonFireClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${bonFire ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <IoMdBonfire className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Bonfire
                                </div>
                            </div>
                        </button>

                        <button onClick={handleFirePlaceClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${firePlace ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <GiFireplace className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Fireplace
                                </div>
                            </div>
                        </button>

                    </div>
                    <div className="flex justify-center">
                        <button onClick={handlePianoClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${piano ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <CgPiano className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Piano
                                </div>
                            </div>
                        </button>

                        <button onClick={handlePoolTableClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${poolTable ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <GiPoolTableCorner className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Pool table
                                </div>
                            </div>
                        </button>

                        <button onClick={handleGymClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${gym ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <CgGym className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Gym
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleBeachClick} className={`flex border-2 border-amber-500 rounded-lg w-auto p-5 m-2 ${beach ? 'bg-amber-300 text-black' : 'hover:bg-amber-100 bg-white text-black'}`}>
                            <div className="flex">
                                <div>
                                    <FaUmbrellaBeach className="text-2xl text-center" />
                                </div>
                                <div className="pl-5 font-bold">
                                    Beach
                                </div>
                            </div>
                        </button>
                    </div>
                </div>





                <div className="flex flex-col items-center justify-center mb-16">
                    <div className="my-10">
                        <text className="text-2xl font-bold">6.Add some Photos of your House</text>
                        <br></br>
                        <text className="text-lg text-gray-400 font-bold pl-10">Upload 5 photos. You can add more later</text>
                    </div>
                    <div>
                        <h1>Multiple Photo Upload</h1>
                        <FileUpload onUpload={handleUpload} />
                        {uploadedFiles.length > 0 && (
                            <div>
                                <h2>Uploaded Files:</h2>
                                <ul>
                                    {uploadedFiles.map((file, index) => (
                                        <li key={index}>{file}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mb-16">
                    {/* next button  */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                        Next
                    </button>
                </div>

                {/* next button to go to the next page and prev button to go to the prev page */}
                <div className="flex justify-between items-center">
                    <Link href="/host/step1">
                        <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setRegistrationId(registrationId)}>
                            Prev
                        </button>
                    </Link>

                    {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>Next</button> */}

                    <div className="flex justify-between items-center" onClick={handleSubmit}>
                        <Link href="/host/step3">
                            <button className="border border-gray-400 rounded-lg p-2 m-2" >
                                Next
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );




};

export default Step2;
