'use client';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

import RegistrationContext from "@/contexts/registrationContext"; // Line 24
import { useEffect,useContext } from 'react';
import { Step7GET,Step7PUT } from "@/API/Registration";


const Step7 = () => {
    const { registrationId, setRegistrationId} = useContext(RegistrationContext);  // use the context

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    useEffect(() => {
        console.log("useEffect step7")
        const fetchStep7Data = async () => {
            try {
                const response = await Step7GET(registrationId);
                if (response.status === 404) {
                    console.log("Empty data form");
                // Handle the case of an empty data form
             } else {
                console.log("response--page7 --",response);
                // Handle the response data as needed
             }
                // Handle the response data as needed
            } catch (error) {
                console.error('Error fetching step 7 data: ', error);
            }
        };

        if (registrationId) {
            console.log("registrationId--page7 --",registrationId);
            fetchStep7Data();        
        }
    }, [registrationId]);

    const handleSubmit = (event) => {
        console.log(startDate);
        console.log(endDate);

    };


    return (
        <div>
            {/* Date inputs using react-datepicker */}
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>


            {/* a button to  confirm the dates */}
            <div>
                <button onClick={handleSubmit}>Confirm</button>
            </div>

            {/* next button to go to the next page and prev button to go to the prev page */}
            <div className="flex justify-between items-center">
                <Link href="/host/step6">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Prev
                    </button>
                </Link>
                <Link href="/host/step7">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Step7;
