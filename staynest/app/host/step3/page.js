'use client';
import React from "react";
import Link from "next/link";

import FileUpload from "@/Components/ImageUpload";
import { useState } from "react";
import { Step3GET, Step3PUT } from "@/API/Registration";

import { FaTree } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { HiMiniHomeModern } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa6";
import { useEffect, useContext } from 'react';
import RegistrationContext from "@/contexts/registrationContext"; // Line 24setRegistrationId
import HostNavBar from "@/Components/HostSide/HostNavbar";
import Footer from "@/Components/Footer";

const Step3 = () => {
    const { registrationId, setRegistrationId } = useContext(RegistrationContext);  // use the context
    const [houseTitle, setHouseTitle] = React.useState('');
    const [highlights, setHighlights] = React.useState([]);
    const [description, setDescription] = React.useState('');
    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

    useEffect(() => {
        const fetchStep3Data = async () => {
            try {
                const response = await Step3GET(registrationId);
                if (response.status === 404) {
                    console.log("Empty data form");
                } else {
                    setHouseTitle(response.data.house_title);
                    setHighlights(response.data.highlights);
                    setDescription(response.data.description);
                }
            } catch (error) {
                console.error('Error fetching step 3 data: ', error);
            }
        };

        if (registrationId) {
            fetchStep3Data();        
        }
    }, [registrationId]);
 
    const handleTitleChange = (event) => {
        setHouseTitle(event.target.value);
    }
    
    const handleHighlightChange = (highlight) => {
        if (!highlights.includes(highlight)) {
            setHighlights([...highlights, highlight]);
        } else {
            setHighlights(highlights.filter(item => item !== highlight));
        }
    }
    
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = {
            "house_title": houseTitle,
            "highlights": highlights,
            "description": description,
        };
    
        if (registrationId) {
            await Step3PUT(data, registrationId);
            setRegistrationId(registrationId);
        } else {
            console.error('No registration ID found');
        }
    };

    return (
        <div>
            <HostNavBar isSearchFormVisible={isSearchFormVisible} setIsSearchFormVisible={setIsSearchFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <div className="flex flex-col items-center justify-center w-7/12">
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
                    <text className="text-bg text-gray-400 font-bold pb-15 pl-10">We'll use these hito get your description started</text>
                </div>
                <div className="flex">
                    <div className={`flex border-2 border-amber-500 rounded-full w-auto p-5 m-2 cursor-pointer ${highlights.includes("Peaceful") ? 'bg-amber-200' : 'hover:bg-amber-100'}`} onClick={() => handleHighlightChange("Peaceful")} title="Peaceful">
                        <div>
                            <FaTree className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Peaceful
                        </div>
                    </div>
                    <div className={`flex border-2 border-amber-500 rounded-full w-auto p-5 m-2 cursor-pointer ${highlights.includes("Unique") ? 'bg-amber-200' : 'hover:bg-amber-100'}`} onClick={() => handleHighlightChange("Unique")} title="Unique">

                        <div>
                            <FaLightbulb className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Unique
                        </div>
                    </div>
                    <div className={`flex border-2 border-amber-500 rounded-full w-auto p-5 m-2 cursor-pointer ${highlights.includes("Family-friendly") ? 'bg-amber-200' : 'hover:bg-amber-100'}`} onClick={() => handleHighlightChange("Family-friendly")} title="Family-friendly">
                        <div>
                            <MdOutlineFamilyRestroom className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Family-friendly
                        </div>
                    </div>
                    <div className={`flex border-2 border-amber-500 rounded-full w-auto p-5 m-2 cursor-pointer ${highlights.includes("Stylish") ? 'bg-amber-200' : 'hover:bg-amber-100'}`} onClick={() => handleHighlightChange("Stylish")} title="Stylish">

                        <div>
                            <HiMiniHomeModern className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Stylish
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className={`flex border-2 border-amber-500 rounded-full w-auto p-5 m-2 cursor-pointer ${highlights.includes("Central") ? 'bg-amber-200' : 'hover:bg-amber-100'}`} onClick={() => handleHighlightChange("Central")} title="Central">
                        <div>
                            <IoLocation className="text-2xl text-center" />
                        </div>
                        <div className="pl-2 font-bold">
                            Central
                        </div>
                    </div>
                    <div className={`flex border-2 border-amber-500 rounded-full w-auto p-5 m-2 cursor-pointer ${highlights.includes("Spacious") ? 'bg-amber-200' : 'hover:bg-amber-100'}`} onClick={() => handleHighlightChange("Spacious")} title="Spacious">
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

            <div className="flex flex-row justify-between w-5/6 mb-20">
                
                <Link href="/host/step2">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setRegistrationId(registrationId)}>
                        Prev
                    </button>
                </Link>
                
                <Link href="/host/step4">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={handleSubmit}>
                        Next
                    </button>
                </Link>
                    
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Step3;
