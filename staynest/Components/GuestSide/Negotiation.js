import React, { useState } from 'react';
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { getNegotiations } from '@/API/Negotiations';
import { useEffect } from 'react';
import { Spinner } from 'flowbite-react';

export function Negotiation({ handleOptionClick, setSelectedNegotiationId }) {
    const [negotiations, setNegotiations] = useState(null);
    const [selectedNegotiation, setSelectedNegotiation] = useState(null);

    const fetchNegotiations = async () => {
        const response = await getNegotiations();
        setNegotiations(response.data.negotiations);
    };

    useEffect(() => {
        fetchNegotiations();
    }, []);

    const clickHandler = (x) => () => {
        handleOptionClick('NegotiationDetails');
        setSelectedNegotiation(x);
        setSelectedNegotiationId(x);
    }

    return (
        negotiations === null ? <div className="flex justify-center items-center h-96">       <Spinner aria-label="Extra large spinner example" size="xl" />
        </div> :
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">All Negotiations</h1>
                <div className="flex flex-col">
                    {/* Display negotiations */}
                    {negotiations.map((negotiation, index) => (
                        <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5 hover:bg-gray-200" onClick={clickHandler(negotiation.negotiation_id)}>
                            {/* on hoever change color */}
                            <div className="flex flex-row items-center" >
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <HiUser className="text-3xl text-gray-500" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold">{negotiation.property_name}</h3>
                                    <p className="text-gray-500">Check-in: {negotiation.check_in}</p>
                                    <p className="text-gray-500">Check-out: {negotiation.check_out}</p>
                                    <p className="text-gray-500">Type: {negotiation.booking_type}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <button className="flex items-center text-blue-500">
                                    Details
                                    <HiArrowSmRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Negotiation;