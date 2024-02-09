'use client';
import React from "react";
import Link from "next/link";

import FileUpload from "@/Components/ImageUpload";
import { useState } from "react";
import { Step4GET,Step4PUT } from "@/API/Registration";
import { MdAttachMoney } from "react-icons/md";

import RegistrationContext from "@/contexts/registrationContext";
import { useEffect,useContext } from 'react';




const Step4 = () => {
    const { registrationId, setRegistrationId} = useContext(RegistrationContext);  // use the context
    const [negotiationAvailability, setNegotiationAvailability] = useState(false);
    const [securityFeatures, setSecurityFeatures] = useState({
        "24/7 Security": false,
        "Security Camera": false
    });
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");

    useEffect(() => {
        console.log("useEffect step4")
        const fetchStep4Data = async () => {
            try {
                const response = await Step4GET(registrationId);
                if (response.status === 404) {
                    console.log("Empty data form");
                // Handle the case of an empty data form
             } else {
                console.log("response--page4 --",response);
                // Handle the response data as needed
                setNegotiationAvailability(response.data.negotiation_availability);
                setPrice(response.data.price);
                setDiscount(response.data.discounts.earlyBooking);
                const securityFeatures = response.data.security_features.reduce((acc, feature) => {
                    acc[feature] = true;
                    return acc;
                }, {});
                setSecurityFeatures(securityFeatures);
                
             }
                // Handle the response data as needed
            } catch (error) {
                console.error('Error fetching step 4 data: ', error);
            }
        };

        if (registrationId) {
            console.log("registrationId--page4 --",registrationId);
            fetchStep4Data();        
        }
    }, [registrationId]);

    const handleNegotiationAvailabilityChange = (e) => {
        setNegotiationAvailability(e.target.checked);
        console.log("Negotiation availability: ", e.target.checked);
    };

    const handleSecurityFeatureChange = (feature) => {
        setSecurityFeatures(prevState => ({
            ...prevState,
            [feature]: !prevState[feature]
        }));
        console.log("Security features: ", securityFeatures);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
        console.log("Price: ", e.target.value);
    };

    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
        console.log("Discount: ", e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const data= {   
                "negotiation_availability": negotiationAvailability,
                "price": parseFloat(price),
                "discounts": {
                    "earlyBooking": parseFloat(discount),
                    "weeklyStay": 15 
                },
                "security_features": Object.keys(securityFeatures).filter(feature => securityFeatures[feature])
            }
            setRegistrationId(registrationId)
            await Step4PUT( data,registrationId);
           
        } catch (error) {
            console.error('Error submitting form data step6:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">

            <div className="my-20">
                <div className="pb-10">
                    <text className="text-2xl font-bold ">10. Decide if you want to negotiate</text>
                </div>
                <div className="flex items-center justify-center border-2 border-black rounded-lg p-6 ">
                    <div className="">
                        <text className="text-xl font-bold ">Enable negotiation with client</text>
                        <br></br>
                        <text className="text-lg text-gray-400 font-bold pl-10">Client can offer different price</text>
                    </div>
                    <div className="pl-10">
                        <MdAttachMoney className="text-4xl text-center" />
                    </div>

                    <div className="pl-8">
                    <input type="checkbox" className="w-7 h-7" checked={negotiationAvailability} onChange={handleNegotiationAvailabilityChange} >
                        </input>
                    </div>

                </div>
            </div>



            <div className="pl-20 my-20">
                <div className="pb-10">
                    <text className="text-2xl font-bold ">11. Do you have any of these security features?</text>
                </div>
                {Object.keys(securityFeatures).map((feature, index) => (
                    <div className="flex justify-between p-2 w-96" key={index}>
                        <div>
                            <text className="text-xl font-bold ">{feature}</text>
                        </div>
                        <div className="pl-8">
                            <input type="checkbox" className="w-7 h-7" checked={securityFeatures[feature]} onChange={() => handleSecurityFeatureChange(feature)} />
                        </div>
                    </div>
                ))}
                
            </div>


            <div className="my-20 border-2 border-black rounded-lg p-6">
                <div className="">
                    <text className="text-xl font-bold ">Now, set your price</text>
                    <br></br>
                    <text className="text-lg text-gray-400 font-bold pl-10">You can change it anytime.</text>
                </div>
                <div className="">
                    <textarea className="mr-24 mt-4 border-2 border-black rounded text-6xl" rows="1" cols="10" type="number" placeholder="Price" value={price} onChange={handlePriceChange} />

                </div>
            </div>
            <div className="my-20 border-2 border-black rounded-lg p-6">
                <div className="">
                    <text className="text-xl font-bold ">Feeling generous? Set a discount percentage.</text>
                    <br></br>
                    <text className="text-lg text-gray-400 font-bold pl-10">You can change it anytime.</text>
                </div>
                <div className="">
                    <textarea className="mt-4 border-2 border-black rounded text-6xl" rows="1" cols="10" type="number" placeholder="Discount %" value={discount} onChange={handleDiscountChange} />
                </div>
            </div>

            <div className="my-20 border-2 border-black rounded-lg p-6">
                <div className="">
                    <Link href="/host/step5">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" > Offer meals</button>
                    </Link>
                </div>
            </div>



            <div className="flex justify-between items-center">
                <Link href="/host/step3">
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setRegistrationId(registrationId)}>
                        Prev
                    </button>
                </Link>

                {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>Next</button> */}

                <div className="flex justify-between items-center">
                    <Link href="/host/step6">
                        <button className="border border-gray-400 rounded-lg p-2 m-2"onClick={handleSubmit} >
                            Next
                        </button>
                    </Link>
                </div>
            </div>











        </div>
    );




};

export default Step4;
