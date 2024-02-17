'use client';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { reserveProperty } from '@/API/GuestAPI';
import { useEffect, useState } from 'react';


export default function ReservationSummary({ reservation }) {
    const [reservationData,setReservationData] = useState({});
    const params = useSearchParams();
    const parsedData = JSON.parse(params.get('query'));
    // console.log(parsedData);
    // useeffect to get response data
    

    const fetchData = async () => {
        const data = await reserveProperty(parsedData);
        setReservationData(data);
        console.log(reservationData);

    }
    useEffect(() => {
        if (parsedData) {
            fetchData();
        }
    }, []);





    const handlePayment = () => {
        // Add your payment handling logic here
        console.log('Payment initiated');
    };

    return (
        <div>
            {/* const response = {
            "status": "success",
            "message": "Reservation and meal booking successful",
            "reservation_id": "abcd1234",
            "booking_dates": {
                "check_in_date": "2024-01-12",
                "check_out_date": "2024-01-15"
            },
            "pricing": {
                "reservation_price": 300.0,
                "staying_price_per_night": 100.0,
                "number_of_nights": 3,
                "number_of_persons": 2,
                "total_staying_price": 300.0,
                "meals": {
                    "breakfast": {
                        "selected": true,
                        "options": ["Continental", "Full English"],
                        "quantity": 2,
                        "price_per_meal": 10.0
                    },
                    "lunch": {
                        "selected": false,
                        "options": [],
                        "quantity": 0,
                        "price_per_meal": 0.0
                    },
                    "dinner": {
                        "selected": true,
                        "options": ["Italian", "BBQ"],
                        "quantity": 2,
                        "price_per_meal": 15.0
                    }
                },
                "total_meals_price": 50.0
            } */}

            <h1>Reservation Summary</h1>
            <p>Reservation ID: {reservationData.reservation_id }</p>
            
            <p>Check-out: {reservationData.booking_dates.check_out_date}</p>
            <p>Number of nights: {reservationData.pricing.number_of_nights}</p>
            <p>Number of persons: {reservationData.pricing.number_of_persons}</p>
            <p>Total staying price: {reservationData.pricing.total_staying_price}</p>
            <p>Total meals price: {reservationData.pricing.total_meals_price}</p>
            <p>Total price: {reservationData.pricing.reservation_price}</p>
            <p>Breakfast: {reservationData.pricing.meals.breakfast.selected ? 'Yes' : 'No'}</p>
            <p>Lunch: {reservationData.pricing.meals.lunch.selected ? 'Yes' : 'No'}</p>
            <p>Dinner: {reservationData.pricing.meals.dinner.selected ? 'Yes' : 'No'}</p>
            <p>Payment status: {reservationData.status}</p>
            <p>Message: {reservationData.message}</p>  


            <button className="bg-green-500 text-white p-3 rounded-lg" onClick={handlePayment}>
                Make Payment</button>
        </div>
    );
};
