import React, { useState, useEffect } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { getNegotiationsOfHost, offerHostPrice, changeNegoStatus } from '@/API/Negotiations';
import Image from 'next/image';
import { Button, TextInput,Badge } from 'flowbite-react';
import PriceInput from './PriceInput';

export function NegotiationList({ handleOptionClick, setSelectedNegotiationId }) {
    const [negotiations, setNegotiations] = useState(null);
    const [currentNegotiations, setCurrentNegotiations] = useState(null);
    const [filter, setFilter] = useState('All');

    const fetchNegotiations = async () => {
        const response = await getNegotiationsOfHost();
        setNegotiations(response);
        setCurrentNegotiations(response.filter(negotiation => negotiation.negotiation_status === "Host Proposed" || negotiation.negotiation_status === "Guest Proposed"));

    };

    useEffect(() => {
        fetchNegotiations();
    }, []);

    const clickHandler = (negotiationId) => () => {
        handleOptionClick('NegotiationDetails');
        setSelectedNegotiationId(negotiationId);
    };
    const setHostPrice = async (price, negotiation_id) => {
        console.log('Price ', price, negotiation_id);
        if (price <= 0) {
            return;
        }
        try {
            const response = await offerHostPrice(price, negotiation_id);
            console.log('Response', response);
            if (response.status === 200) {
                fetchNegotiations();
            }

        } catch (error) {
            console.log(error);
        }



    }
    const handleAccept = async (negotiationId) => {
        try {
            const response = await changeNegoStatus(negotiationId, "Accepted By Host");
            console.log('Response', response);
            if (response.status === 200) {
                fetchNegotiations();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleReject = async (negotiationId) => {
        try {
            const response = await changeNegoStatus(negotiationId, "Rejected By Host");
            console.log('Response', response);
            if (response.status === 200) {
                fetchNegotiations();
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        negotiations === null ? <div>Loading...</div> :
            <div className="flex flex-col">
                <div>

                    <span className={`cursor-pointer mr-4 ${filter === 'Current' ? 'font-bold' : ''}`} onClick={() => setFilter('Current')}>Current</span>
                    ,
                    <span className={`cursor-pointer mr-4 ${filter === 'All' ? 'font-bold' : ''}`} onClick={() => setFilter('All')}>All</span>

                </div>
                <h1 className="text-2xl font-bold mb-5">{filter} Negotiations</h1>
                <div className="flex flex-col">
                    {/* Display negotiations */}
                    {(filter == "All" ? negotiations : currentNegotiations).map((negotiation, index) => (
                        <div key={index} className="flex items-center justify-between border-b-2 border-gray-100 p-5 hover:bg-gray-200" >
                            <>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                        {
                                            negotiation.property_photo === null ? <HiArrowSmRight size={30} /> : <Image src={negotiation.property_photo} width={100} height={100} className="rounded-lg " alt='property' />
                                        }

                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-lg font-bold">{negotiation.property_name}</h3>
                                        <p className="text-gray-500">Check-in: {negotiation.start_date}</p>
                                        <p className="text-gray-500">Check-out: {negotiation.end_date}</p>
                                        <p className="text-gray-500">Type: {negotiation.booking_type}</p>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className="flex items-start ml-5 border-l-2 pl-5">
                                    <div>
                                        <p className='text-grey-500'>Status: 
                                        {
                                            (negotiation.negotiation_status === "Host Proposed" || negotiation.negotiation_status === "Guest Proposed") ? (
                                                <Badge color="purple" size="xs">
                                                    {negotiation.negotiation_status}
                                                </Badge>
                                            ) : (negotiation.negotiation_status === "Accepted By Host" || negotiation.negotiation_status === "Accepted By Guest") ? (
                                                <Badge color="green" size="xs">
                                                    {negotiation.negotiation_status}
                                                </Badge>
                                            ) : (negotiation.negotiation_status === "Rejected By Host" || negotiation.negotiation_status === "Rejected By Guest") ? (
                                                <Badge color="red" size="xs">
                                                    {negotiation.negotiation_status}
                                                </Badge>
                                            ) : (
                                                <Badge color="blue" size="xs">
                                                    {negotiation.negotiation_status}
                                                </Badge>
                                            )
                                        }
                                        </p>

                                        <p className='text-grey-500'>System Price: {negotiation.default_price}</p>
                                        <p className='text-grey-500'>Guest Price: {negotiation.guest_price}</p>
                                        <p className='text-grey-500'>Host Price: {negotiation.host_price}</p>
                                        <div className='flex items-center'>
                                            {negotiation.host_price === null && (
                                                <PriceInput
                                                    placeholder="0"
                                                    buttonText={"Offer New Price"}
                                                    negotiationId={negotiation.id}
                                                    handlePrice={setHostPrice}


                                                />
                                            )}

                                        </div>
                                    </div>

                                </div>
                            </>
                            <>
                                <div className="flex items-center p-2">
                                    {negotiation.negotiation_status === "Guest Proposed" && (
                                        <>
                                            <Button className="flex items-center bg-red-500 ml-2" onClick={() => handleReject(negotiation.id)}>
                                                Reject
                                            </Button>
                                            <Button className="flex items-center bg-green-500 ml-2" onClick={() => handleAccept(negotiation.id)}>
                                                Accept
                                            </Button>
                                        </>
                                    )}

                                </div>
                            </>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default NegotiationList;
