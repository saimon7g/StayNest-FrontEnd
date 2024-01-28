'use client';
import React from "react";
import Link from "next/link";

import FileUpload from "@/Components/ImageUpload";
import { useState } from "react";
import { Step2PUT } from "@/API/Registration";
import { FaTree } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { HiMiniHomeModern } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa6";



const Step3 = () => {

    const [regular_amenities, setRegularAmenities] = React.useState([]);
    const [standout_amenities, setStandoutAmenities] = React.useState([]);
    const [uploadedFiles, setUploadedFiles] = React.useState([]);

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
            photos_json.push({ "url": uploadedFiles[i], "description": "Living Room" });

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
        <div className="flex flex-col items-center justify-center">
            <div className="mb-40">
                <div className="pb-10">
                    <text className="text-2xl font-bold ">7. Now, let's give your house a title</text>
                    <br></br>
                    <text className="text-bg text-gray-400 font-bold pl-10">Short titles work best. Have fun with it-you can always change it later.</text>
                </div>
                <div className="pl-10">
                    <textarea className="border-2 border-black rounded" rows="7" cols="60" placeholder="Type your text here..."></textarea>
                </div>
            </div>



            <div className="mb-40">
                <div className="pb-5">
                    <text className="text-2xl font-bold ">8. Next, let's describe your house</text>
                    <br></br>
                    <text className="text-bg text-gray-400 font-bold pb-15 pl-10">Choose upto 2 highlights. We'll use these to get your description started</text>
                </div>
                <div className="flex">
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2">
                        <div>
                            <FaTree className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Peaceful
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2">
                        <div>
                            <FaLightbulb className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Unique
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2">
                        <div>
                            <MdOutlineFamilyRestroom className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Family-friendly
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2">
                        <div>
                            <HiMiniHomeModern className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Stylish
                        </div>
                    </div>
                </div>


                <div className="flex">
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2">
                        <div>
                            <IoLocation className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Central
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2">
                        <div>
                            <FaPeopleArrows className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Spacious
                        </div>
                    </div>
                </div>
            </div>



            <div className="mb-40">
                <div className="pb-5">
                    <text className="text-2xl font-bold ">9. Create your description</text>
                    <br></br>
                    <text className="text-bg text-gray-400 font-bold pb-15 pl-10">Share what makes your place special</text>
                </div>
                <div className="pl-10">
                    <textarea className="border-2 border-black rounded" rows="10" cols="60" placeholder="Type your text here..."></textarea>
                </div>
            </div>

            <div className="flex flex-row-reverse w-5/6 mb-20">

                <div className="flex justify-between items-center">
                    <Link href="/host/step2">
                        <button className="border border-gray-400 rounded-lg p-2 m-2">
                            Prev
                        </button>
                    </Link>

                    {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>Next</button> */}

                    <div className="flex justify-between items-center" onClick={handleSubmit}>
                        <Link href="/host/step4">
                            <button className="border border-gray-400 rounded-lg p-2 m-2" >
                                Next
                            </button>
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    );




};

export default Step3;
