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

        const result = Step2GET();
        console.log(result);














        // const regular_amenities_json = [];
        // for (let i = 0; i < regular_amenities.length; i++) {
        //     regular_amenities_json.push({ "name": regular_amenities[i] });
        // }
        // const standout_amenities_json = [];
        // for (let i = 0; i < standout_amenities.length; i++) {
        //     standout_amenities_json.push({ "name": standout_amenities[i] });
        // }
        // const photos_json = [];
        // for (let i = 0; i < uploadedFiles.length; i++) {
        //     // need to extract from formdata
        //     photos_json.push({ "url": uploadedFiles[i], "description": "Living Room" });

        // }

        // const data = {
        //     "regular_amenities": regular_amenities_json,
        //     "standout_amenities": standout_amenities_json,
        //     "photos": photos_json
        // }

        // const result = Step2PUT(data);
        // console.log(result);
    }


















    return (
        <div>
            <h1>Make your place stand out</h1>
            <div className="flex-1">
                <text className="text-2xl font-bold">4. Tell us what your place has to offer</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleRegularAmenities(e, "Wifi")} >
                        <FaWifi className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleRegularAmenities(e, "TV")} >
                        <PiTelevisionSimpleDuotone className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleRegularAmenities(e, "Kitchen")} >
                        <MdOutlineSoupKitchen className="text-6xl text-center" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleRegularAmenities(e, "Workspace")} >
                        <BsPersonWorkspace className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleRegularAmenities(e, "Parking")} >
                        <FaParking className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleRegularAmenities(e, "Air conditioning")} >
                        <TbAirConditioning className="text-6xl text-center" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleRegularAmenities(e, "Washing machine")} >
                        <GiWashingMachine className="text-6xl text-center" />
                    </div>
                </div>

            </div>

            <div className="flex-1">
                <text className="text-2xl font-bold">5. Do you have any stand out features?</text>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Pool")} >
                        <TbPool className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Hot tub")} >
                        <FaHotTub className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Barbecue")} >
                        <GiBarbecue className="text-6xl text-center" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Dining")} >
                        <MdOutlineDinnerDining className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Bonfire")} >
                        <IoMdBonfire className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5 " onClick={(e) => handleStandoutAmenities(e, "Fireplace")} >
                        <GiFireplace className="text-6xl text-center" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Piano")} >
                        <CgPiano className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Pool table")} >
                        <GiPoolTableCorner className="text-6xl text-center" />
                    </div>
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Gym")} >
                        <CgGym className="text-6xl text-center" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border-2 border-indigo-600 w-40 p-5" onClick={(e) => handleStandoutAmenities(e, "Beach")} >
                        <FaUmbrellaBeach className="text-6xl text-center" />
                    </div>
                </div>
            </div>





            <div className="flex-1">
                <text className="text-2xl font-bold">6.Add some Photos of your House</text>

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

            <div className="flex-1">
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
                <Link href="/host/step3">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Next
                    </button>
                </Link>
            </div>

        </div>
    );




};

export default Step2;
