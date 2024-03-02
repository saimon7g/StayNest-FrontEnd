'use client';
import React from "react";
import { useState } from "react";
// use nxt/link to link to other pages
import Link from 'next/link';

import RegistrationContext from "@/contexts/registrationContext";
import { useEffect,useContext } from 'react';
import { Step6GET,Step6PUT } from "@/API/Registration";
import HostNavBar from "@/Components/HostSide/HostNavbar";
import Footer from "@/Components/Footer";



const Step6 = () => {
    const { registrationId, setRegistrationId} = useContext(RegistrationContext);  // use the context
    const [state, setState] = useState({
        allow_paying_guests: false,
        mealPrice: 0,
        mealDescription: '',
    });

    // setRegistrationId(57);
    useEffect(() => {
        console.log("useEffect step6")
        const fetchStep6Data = async () => {
            try {
                const response = await Step6GET(registrationId);
                if (response.status === 404) {
                    console.log("Empty data form");
                // Handle the case of an empty data form
             } else {
                setState({ ...state, allow_paying_guests: response.data.allow_paying_guests });
                setRegistrationId(registrationId);
                console.log("response--page6 --",response);
                // Handle the response data as needed
                setState({ ...state, mealPrice: response.data.meal_price });
                setState({ ...state, mealDescription: response.data.description });
                
             }
                // Handle the response data as needed
            } catch (error) {
                console.error('Error fetching step 6 data: ', error);
            }
        };

        if (registrationId) {
            console.log("registrationId--page6 --",registrationId);
            fetchStep6Data();        
        }
    }, [registrationId]);

    const handleMealPriceChange = (e) => {
        setState({
            ...state,
            mealPrice: e.target.value,
        });
    };

    const handleMealDescriptionChange = (e) => {
        setState({
            ...state,
            mealDescription: e.target.value,
        });
    };
    const handleSubmit = async () => {
        try {
            setRegistrationId(registrationId)
            const response = await Step6PUT( {
                allow_paying_guests: state.allow_paying_guests,
                meal_price: state.mealPrice,
                description: state.mealDescription,
                'photo':'No photo uploaded',
            },registrationId);
            // console.log(response.data.message); // Assuming your API returns a message upon successful update
        } catch (error) {
            console.error('Error updating step 6 data: ', error);
        }
    };

    return (
        <div>
            <HostNavBar />
        <div className="flex flex-col justify-center items-center">
            {/* do you allow paying guest */}
            <div>
                <h1 className="text-2xl font-bold">Do you allow paying guests?</h1>
                {/* two option yes or no */}
                <div className="flex justify-between">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setState({ ...state, allow_paying_guests: true })}>Yes</button>
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setState({ ...state, allow_paying_guests: false })}>No</button>
                </div>
            </div>

            {/* if allow paying guest the give meal price and description */}
            {state.allow_paying_guests ? (
                <div>
                    <h1 className="text-2xl font-bold">Meal price</h1>
                    <input className="block m-0 m-auto border-2 border-black" type="number" value={state.mealPrice} onChange={handleMealPriceChange} />
                    <h1 className="text-2xl font-bold">Meal description</h1>
                    <textarea className="border-2 border-black" value={state.mealDescription} rows="10" cols="50"   onChange={handleMealDescriptionChange}  />
                </div>
            ) : null}

            {/* next button to go to next page  and prev button to go to prev page */}
            <div className="flex justify-between items-center">
                <Link href="/host/step4">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setRegistrationId(registrationId)}>Prev</button>
                </Link>
                <Link href="/host/step7">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={handleSubmit}>Next</button>
                </Link>
            </div>
        </div>
        <Footer />
        </div>
    );

















}

export default Step6;