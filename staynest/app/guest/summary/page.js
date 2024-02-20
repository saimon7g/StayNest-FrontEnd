'use client'
import { useSearchParams } from 'next/navigation';
import { reserveProperty } from '@/API/GuestAPI';
import { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';
import {Payment} from '@/Components/Payment';

export default function ReservationSummary({ reservation }) {
    const [reservationData, setReservationData] = useState({});
    const params = useSearchParams();
    const parsedData = JSON.parse(params.get('query'));
    const [openModal, setOpenModal] = useState(false);

    const handlePaymentComplete = () => {
        console.log('Payment completed');
    }
    



    useEffect(() => {
        const fetchData =() => {
            if (parsedData) {
                
                setReservationData(parsedData);
            }
        };

        fetchData();
    }, [parsedData]);

    const handlePayment =async () => {
        const response = await reserveProperty(parsedData);
        if (response.status /100===2 ) {
            setOpenModal(true);
            alert('Booking successful');
        }
        else {
            alert('Booking failed');
        }
       
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-200 mx-auto p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="pr-4 border-r border-gray-400">
                        <h1 className="text-4xl font-bold mb-4">Reservation Summary</h1>
                    
                        {reservationData && (
                            <>
                                <p>Check-In: {reservationData.start_date}</p>
                                <p>Check-Out: {reservationData.end_date}</p>

                                <p>Number of nights: {parsedData.number_of_nights}</p>
                                <p>Number of persons: {reservationData.number_of_persons}</p>
                                <p>Total staying price: {reservationData.total_staying_price}</p>
                                
                            </>
                        )}
                    </div>
                    <div className="pl-4">
                        {reservationData && (
                            <>
                               <p>Total meals price: {reservationData.total_meals_price}</p>
                                <p>Total price: {reservationData.total_price}</p>
                            </>
                        )}
                        <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => handlePayment()}>
                            Make Payment
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
