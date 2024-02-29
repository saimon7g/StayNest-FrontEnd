import React, { useState, useEffect } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { getNegotiationsOfHost ,changeNegoStatus} from '@/API/Negotiations';
import Image from 'next/image';
import { Button,TextInput } from 'flowbite-react';
import PriceInput from '@/Components/PriceInput';

export function NegotiationList({ handleOptionClick, setSelectedNegotiationId }) {
    const [negotiations, setNegotiations] = useState(null);

    const fetchNegotiations = async () => {
        const response = await getNegotiationsOfHost();
        setNegotiations(response);
    };

    useEffect(() => {
        fetchNegotiations();
    }, []);

    const clickHandler = (negotiationId) => () => {
        handleOptionClick('NegotiationDetails');
        setSelectedNegotiationId(negotiationId);
    };
    const setHostPrice =async (price,negotiation_id) => {
        console.log('Price ',price,negotiation_id);
        if(price <=0){
            return;
        }
        try{
            const response = await offerHostPrice(price,negotiation_id);
            console.log('Response',response);
            if(response.status === 200){
                fetchNegotiations();
            }

        }catch(error){
            console.log(error);
        }

        
        
    }
    const handleAccept = async (negotiationId) => {
        try {
            const response = await changeNegoStatus(negotiationId,"Accepted By Guest");
            console.log('Response',response);
            if(response.status === 200){
                fetchNegotiations();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleReject = async (negotiationId) => {
        try {
            const response = await changeNegoStatus(negotiationId,"Rejected By Guest");
            console.log('Response',response);
            if(response.status === 200){
                fetchNegotiations();
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        negotiations === null ? <div>Loading...</div> :
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">All Negotiations</h1>
                <div className="flex flex-col">
                    {/* Display negotiations */}
                    {negotiations.map((negotiation, index) => (
                        <div key={index} className="flex items-center justify-between border-b-2 border-gray-100 p-5 hover:bg-gray-200" >
                            <>
                            <div className="flex items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <Image src={negotiation.property_photo} width={100} height={100} className="rounded-lg " alt='property' />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold">{negotiation.property_name}</h3>
                                    <p className="text-gray-500">Check-in: {negotiation.check_in_date}</p>
                                    <p className="text-gray-500">Check-out: {negotiation.check_out_date}</p>
                                    <p className="text-gray-500">Type: {negotiation.booking_type}</p>
                                    <p className="text-gray-500">Negotiation Id {negotiation.id}</p>
                                </div>
                            </div>
                            </>
                            <>
                            <div className="flex items-start ml-5 border-l-2 pl-5">
                                <div>
                                    <p className='text-grey-500'>Negotiation Status: {negotiation.negotiation_status}</p>
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
                            {negotiation.negotiation_status === "Host Proposed" && (
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
