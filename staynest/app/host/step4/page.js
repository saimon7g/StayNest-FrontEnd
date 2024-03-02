'use client';
import React from "react";
import Link from "next/link";

import FileUpload from "@/Components/ImageUpload";
import { useState } from "react";
import { Step4GET, Step4PUT } from "@/API/Registration";
import { MdAttachMoney } from "react-icons/md";
import HostNavBar from "@/Components/HostSide/HostNavbar";
import Footer from "@/Components/Footer";

import RegistrationContext from "@/contexts/registrationContext";
import { MealForm} from '@/Components/HostSide/MealForm.js';
import { useEffect, useContext } from 'react';
import { Card, Button } from 'flowbite-react'; // Importing Card and Button from flowbite-react

const Step4 = () => {
    const { registrationId, setRegistrationId } = useContext(RegistrationContext);  // use the context
    const [negotiationAvailability, setNegotiationAvailability] = useState(false);
    const [showMealModal, setShowMealModal] = useState(false);
    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

    const [securityFeatures, setSecurityFeatures] = useState({
        "24/7 Security": false,
        "Security Camera": false
    });
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    // setRegistrationId(65);
    useEffect(() => {
        const fetchStep4Data = async () => {
            try {
                const response = await Step4GET(registrationId);
                if (response.status === 404) {
                    console.log("Empty data form");
                } else {
                    setNegotiationAvailability(response.data.negotiation_availability);
                    setPrice(response.data.price);
                    setDiscount(response.data.discounts.earlyBooking);
                    const securityFeatures = response.data.security_features.reduce((acc, feature) => {
                        acc[feature] = true;
                        return acc;
                    }, {});
                    setSecurityFeatures(securityFeatures);
                }
            } catch (error) {
                console.error('Error fetching step 4 data: ', error);
            }
        };

        if (registrationId) {
            fetchStep4Data();
        }
    }, [registrationId]);

    const handleNegotiationAvailabilityChange = (e) => {
        setNegotiationAvailability(e.target.checked);
    };

    const handleSecurityFeatureChange = (feature) => {
        setSecurityFeatures(prevState => ({
            ...prevState,
            [feature]: !prevState[feature]
        }));
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const data = {
                "negotiation_availability": negotiationAvailability,
                "price": parseFloat(price),
                "discounts": {
                    "earlyBooking": parseFloat(discount),
                    "weeklyStay": 15
                },
                "security_features": Object.keys(securityFeatures).filter(feature => securityFeatures[feature])
            }
            setRegistrationId(registrationId);
            await Step4PUT(data, registrationId);

        } catch (error) {
            console.error('Error submitting form data step6:', error);
        }
    };

    return (
        <div>
            <HostNavBar isSearchFormVisible={isSearchFormVisible} setIsSearchFormVisible={setIsSearchFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <div className="flex flex-col items-center justify-center">
            <div className="my-20">
                <Card className="p-6">
                    <h2 className="text-2xl font-bold">10. Decide if you want to negotiate</h2>
                    <div className="flex items-center justify-center mt-4">
                        <div className="mr-4">
                            <p className="text-xl font-bold">Enable negotiation with client</p>
                            <p className="text-lg text-gray-400 font-bold">Client can offer different price</p>
                        </div>
                        <MdAttachMoney className="text-4xl" />
                        <input type="checkbox" className="w-7 h-7 ml-4" checked={negotiationAvailability} onChange={handleNegotiationAvailabilityChange} />
                    </div>
                </Card>
            </div>

            <div className="my-20">
                <Card className="p-6">
                    <h2 className="text-2xl font-bold">11. Do you have any of these security features?</h2>
                    <div className="mt-4">
                        {Object.keys(securityFeatures).map((feature, index) => (
                            <div className="flex items-center justify-between" key={index}>
                                <p className="text-xl font-bold">{feature}</p>
                                <input type="checkbox" className="w-7 h-7 ml-4" checked={securityFeatures[feature]} onChange={() => handleSecurityFeatureChange(feature)} />
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <div className="my-20">
                <Card className="p-6">
                    <h2 className="text-2xl font-bold">Now, set your price</h2>
                    <p className="text-lg text-gray-400 font-bold">You can change it anytime.</p>
                    <textarea className="mt-4 w-full border-2 border-black rounded text-6xl" rows="1" cols="10" placeholder="Price" value={price} onChange={handlePriceChange} />
                </Card>
            </div>

            <div className="my-20">
                <Card className="p-6">
                    <h2 className="text-2xl font-bold">Feeling generous? Set a discount percentage.</h2>
                    <p className="text-lg text-gray-400 font-bold">You can change it anytime.</p>
                    <textarea className="mt-4 w-full border-2 border-black rounded text-6xl" rows="1" cols="10" placeholder="Discount %" value={discount} onChange={handleDiscountChange} />
                </Card>
            </div>

            <div className="my-20">
            <Link href="/host/step5">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"onClick={handleSubmit}>Offer meals</Button>
                </Link>
            </div>

            <div className="flex justify-between items-center mt-10">
                <Link href="/host/step3">
                    <Button className="border border-gray-400 rounded-lg p-2"onClick={() => setRegistrationId(registrationId)}>Prev</Button>
                </Link>
                <Link href="/host/step6">
                    <Button className="border border-gray-400 rounded-lg p-2" onClick={handleSubmit}>Next</Button>
                </Link>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Step4;
