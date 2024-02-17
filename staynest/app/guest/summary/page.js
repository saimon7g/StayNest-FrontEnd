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
        const fetchData = async () => {
            if (parsedData) {
                const data = await reserveProperty(parsedData);
                setReservationData(data);
            }
        };

        fetchData();
    }, [parsedData]);

    const handlePayment = () => {
        console.log('Payment initiated');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-200 mx-auto p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="pr-4 border-r border-gray-400">
                        <h1 className="text-4xl font-bold mb-4">Reservation Summary</h1>
                        {reservationData && (
                            <>
                                <p>Reservation ID: {reservationData.reservation_id}</p>
                                <p>Check-out: {reservationData.booking_dates && reservationData.booking_dates.check_out_date}</p>
                                <p>Number of nights: {reservationData.pricing && reservationData.pricing.number_of_nights}</p>
                                <p>Number of persons: {reservationData.pricing && reservationData.pricing.number_of_persons}</p>
                                <p>Total staying price: {reservationData.pricing && reservationData.pricing.total_staying_price}</p>
                                <p>Total meals price: {reservationData.pricing && reservationData.pricing.total_meals_price}</p>
                                <p>Total price: {reservationData.pricing && reservationData.pricing.reservation_price}</p>
                            </>
                        )}
                    </div>
                    <div className="pl-4">
                        {reservationData && (
                            <>
                                <p>Breakfast: {reservationData.pricing && reservationData.pricing.meals.breakfast.selected ? 'Yes' : 'No'}</p>
                                <p>Lunch: {reservationData.pricing && reservationData.pricing.meals.lunch.selected ? 'Yes' : 'No'}</p>
                                <p>Dinner: {reservationData.pricing && reservationData.pricing.meals.dinner.selected ? 'Yes' : 'No'}</p>
                                <p>Payment status: {reservationData.status}</p>
                                <p>Message: {reservationData.message}</p>
                            </>
                        )}
                        <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenModal(true)}>
                            Make Payment
                        </Button>
                        <Payment openModal={openModal} setOpenModel={setOpenModal} onPaymentComplete={handlePaymentComplete} />
                    </div>
                </div>
            </Card>
        </div>
    );
}
