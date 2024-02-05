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
import { useEffect } from 'react';
import Link from "next/link";



const Step2 = () => {

    const [regular_amenities, setRegularAmenities] = React.useState([]);
    const [standout_amenities, setStandoutAmenities] = React.useState([]);
    const [uploadedFiles, setUploadedFiles] = React.useState([]);

    useEffect(() => {
        Step2GET();
    }, []);


    const handleRegularAmenities = (event, type) => {
        console.log(type);
        event.preventDefault();
        setRegularAmenities([...regular_amenities, type]);
    }
    const handleStandoutAmenities = (event, type) => {
        console.log(type);
        event.preventDefault();
        setStandoutAmenities([...standout_amenities, type]);
    }


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

        const result = Step2PUT(data);
        console.log(result);
    }


















    return (
        <div>
            <h1>Make your place stand out</h1>
            <div className="flex flex-col justify-center items-center mb-48">
                <div className="my-10">
                    <text className="text-2xl font-bold">4. Tell us what your place has to offer</text>
                    <br></br>
                    <text className="text-lg text-gray-400 font-bold pl-10">You can add more amenities later</text>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleRegularAmenities(e, "Wifi")} >
                            <FaWifi className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            wifi
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleRegularAmenities(e, "TV")} >
                            <PiTelevisionSimpleDuotone className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            TV
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleRegularAmenities(e, "Kitchen")} >
                            <MdOutlineSoupKitchen className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Kitchen
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleRegularAmenities(e, "Workspace")} >
                            <BsPersonWorkspace className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Workspace
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleRegularAmenities(e, "Parking")} >
                            <FaParking className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Parking
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleRegularAmenities(e, "Air conditioning")} >
                            <TbAirConditioning className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Air conditioning
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleRegularAmenities(e, "Washing machine")} >
                            <GiWashingMachine className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Washing machine
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center mb-48">
                <div className="mb-16">
                    <text className="text-2xl font-bold">5. Do you have any stand out features?</text>
                    <br></br>
                    <text className="text-lg text-gray-400 font-bold pl-10">You can add more later</text>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Pool")} >
                            <TbPool className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Pool
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Hot tub")} >
                            <FaHotTub className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Hot tub
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Barbecue")} >
                            <GiBarbecue className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Barbecue
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Dining")} >
                            <MdOutlineDinnerDining className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Dining
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Bonfire")} >
                            <IoMdBonfire className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Bonfire
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Fireplace")} >
                            <GiFireplace className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Fireplace
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Piano")} >
                            <CgPiano className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Piano
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Pool table")} >
                            <GiPoolTableCorner className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Pool table
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Gym")} >
                            <CgGym className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Gym
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex border-2 border-stone-600 rounded-lg w-auto p-5 m-2 w-48">
                        <div onClick={(e) => handleStandoutAmenities(e, "Beach")} >
                            <FaUmbrellaBeach className="text-2xl text-center" />
                        </div>
                        <div className="pl-5 font-bold">
                            Beach
                        </div>
                    </div>
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
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
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
    );




};

export default Step2;
