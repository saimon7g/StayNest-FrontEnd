import React, { useState, useEffect } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { getNegotiationsOfGuest ,changeNegoStatus} from '@/API/Negotiations';
import Image from 'next/image';
import { Button,TextInput } from 'flowbite-react';
import PriceInput from '@/Components/PriceInput';
import { Badge } from 'flowbite-react';
import { Payment } from '../Payment';
import { reserveProperty } from '@/API/GuestAPI';
import { Spinner } from 'flowbite-react';

export function NegotiationList({ handleOptionClick, setSelectedNegotiationId }) {
    const [negotiations, setNegotiations] = useState(null);
    const [currentNegotiations, setCurrentNegotiations] = useState(null);
    const [filter, setFilter] = useState('All');
    const [openModal, setOpenModal] = useState(false);
    const handlePayment=()=> {
        setOpenModal(true);
    }
    const reserve = async (negotiation) => {
        try {
            negotiation['status'] = "approved"
            const response = await reserveProperty(negotiation);
            setOpenModal(false);
            if (response.status === 201) {
                alert('Booking successful');
            }
            else if (response.status === 200) {
                console.log('401-----')
                alert(response.message);
                console.log(response.message);
            }
            else {
                alert(response.message);
            }
            if(negotiation.negotiation_status=="Host Payment")
            {
                const response2 = await changeNegoStatus(negotiation.id, "Accepted By Host");
            }
            else 
            {
                const response2 = await changeNegoStatus(negotiation.id, "Accepted By Guest");
            }


            
        }
        catch (error) {
            console.log(error);
            return {"message":"System Error. Please try again later."}
        }
    };


    const fetchNegotiations = async () => {
        const response = await getNegotiationsOfGuest();
        if(response){
            setNegotiations(response);
            setCurrentNegotiations(response.filter(negotiation => negotiation.negotiation_status === "Host Proposed" ||negotiation.negotiation_status === "Guest Proposed" ));
        }
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
            const response = await changeNegoStatus(negotiationId,"Guest Payment");
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

        negotiations === null ? <divn className="flex justify-center items-center h-96">       <Spinner aria-label="Extra large spinner example" size="xl" />
        </divn> :
            <div className="flex flex-col">
                 <div className="flex justify-between mb-4">
                <div>
                
                <span className={`cursor-pointer mr-4 ${filter === 'Current' ? 'font-bold' : ''}`} onClick={() => setFilter('Current')}>Current</span>
,                
                    <span className={`cursor-pointer mr-4 ${filter === 'All' ? 'font-bold' : ''}`} onClick={() => setFilter('All')}>All</span>
                
                </div>
                {/* Add any additional filter options here */}
            </div>
                <h1 className="text-2xl font-bold mb-5">{filter} Negotiations</h1>
                <div className="flex flex-col">
                    {/* Display negotiations */}
                    {(filter=="All"? negotiations:currentNegotiations).map((negotiation, index) => (
                        <div key={index} className="flex items-center justify-between border-b-2 border-gray-100 p-5 hover:bg-gray-200" >
                            <>
                            <div className="flex items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                    {
                                        negotiation?.property_photo === null ? (<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                            <HiArrowSmRight className="text-3xl" /></div>): <Image src={negotiation?.property_photo} width={100} height={100} className="rounded-lg " alt='property' />
                                    }
                                   
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
                                            ) :  (negotiation.negotiation_status === "Host Payment" || negotiation.negotiation_status === "Guest Payment") ? (
                                                <Badge color="red" size="xs">
                                                    "Payment Pending"
                                                </Badge>
                                            ) : 
                                            (
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

                                {(negotiation.negotiation_status === "Host Payment" || negotiation.negotiation_status === "Guest Payment") && (
                                    <div>
                                     <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => handlePayment()}>
                                        Make Payment
                                    </Button>

                                    <Payment
                                    openModal={openModal}
                                    setOpenModal={setOpenModal}
                                    onPaymentComplete={reserve}
                                    negotiation={negotiation}
                                    />
                                    </div>
                                        
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
