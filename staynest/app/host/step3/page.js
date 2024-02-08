'use client';
import React from "react";
import Link from "next/link";

import FileUpload from "@/Components/ImageUpload";
import { useState } from "react";
import { Step3PUT } from "@/API/Registration";

import { FaTree } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { HiMiniHomeModern } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa6";
import { useEffect,useContext } from 'react';
import RegistrationContext from "@/contexts/registrationContext"; // Line 24




const Step3 = () => {
    const { registrationId, setRegistrationId } = useContext(RegistrationContext);  // use the context
    const [houseTitle, setHouseTitle] = React.useState('');
    const [highlights, setHighlights] = React.useState([]);
    const [description, setDescription] = React.useState('');
    
    const handleTitleChange = (event) => {
        setHouseTitle(event.target.value);
        console.log("Title: ", event.target.value);
    }
    
    const handleHighlightChange = (highlight) => {
        // Check if the highlight already exists in the array
        if (!highlights.includes(highlight)) {
            console.log("Adding highlight: ", highlight);
            setHighlights([...highlights, highlight]);
        }
    }
    
    const handleDescriptionChange = (event) => {

        setDescription(event.target.value);
        console.log("Description: ", event.target.value);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Prepare data to send to the server
        const data = {
            houseTitle: houseTitle,
            highlights: highlights,
            description: description,
        };
    
        // Send the data to the server
        if (registrationId) {
            await Step3PUT(data, registrationId);
        }
        else {
            console.error('No registration ID found');
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-40">
                <div className="pb-10">
                    <text className="text-2xl font-bold ">7. Now, let's give your house a title</text>
                    <br></br>
                    <text className="text-bg text-gray-400 font-bold pl-10">Short titles work best. Have fun with it-you can always change it later.</text>
                </div>
                <div className="pl-10">
                    <textarea className="border-2 border-black rounded" rows="7" cols="60" placeholder="Type your text here..." value={houseTitle} onChange={(e) => handleTitleChange(e)}></textarea>

                </div>
            </div>



            <div className="mb-40">
                <div className="pb-5">
                    <text className="text-2xl font-bold ">8. Next, let's describe your house</text>
                    <br></br>
                    <text className="text-bg text-gray-400 font-bold pb-15 pl-10">Choose upto 2 highlights. We'll use these to get your description started</text>
                </div>
                <div className="flex">
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2" onClick={() => handleHighlightChange("Peaceful")}>
                        <div>
                            <FaTree className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Peaceful
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2" onClick={() => handleHighlightChange("Unique")}>

                        <div>
                            <FaLightbulb className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Unique
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2" onClick={() => handleHighlightChange("Family-friendly")}>
                        <div>
                            <MdOutlineFamilyRestroom className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Family-friendly
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2" onClick={() => handleHighlightChange("Stylish")}>

                        <div>
                            <HiMiniHomeModern className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Stylish
                        </div>
                    </div>
                </div>


                <div className="flex">
                <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2" onClick={() => handleHighlightChange("Central")}>
                        <div>
                            <IoLocation className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Central
                        </div>
                    </div>
                    <div className="flex border-2 border-stone-600 rounded-full w-auto p-5 m-2" onClick={() => handleHighlightChange("Spacious")}>
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
                    <textarea className="border-2 border-black rounded" rows="10" cols="60" placeholder="Type your text here..." value={description} onChange={(e) => handleDescriptionChange(e)}></textarea>                
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
