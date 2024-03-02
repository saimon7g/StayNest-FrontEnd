'use client'
import { useSearchParams } from 'next/navigation';
import { reserveProperty } from '@/API/GuestAPI';
import { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';
import {Payment} from '@/Components/Payment';


export default function ReservationSummary({ reservation }) {

    // const reservation={
    //     "property_id": 123,
    //     "guest_id": 456,
    //     "host_id": 789,
    //     "booking_type": "stay_with_meal",
    //     "start_date": "2024-02-22",
    //     "end_date": "2024-02-24",
    //     "base_price": 1000.00,
    //     "platform_fee": 50.00,
    //     "tax": 25.00,
    //     "number_of_guests": 2,
    //     "breakfast": [
    //       {
            
    //         "meal_name": "Continental Breakfast",
    //         "quantity": 2,
    //         "date": "2024-02-22",
    //         "price": 10.00
    //       },
    //       { 
    //         "meal_name": "Pasta",
    //         "quantity": 2,
    //         "date": "2024-02-22",
    //         "price": 15.00
    //       }
    //     ],
    //     "lunch": [
    //         {
              
    //           "meal_name": "Continental Breakfast",
    //           "quantity": 2,
    //           "date": "2024-02-22",
    //           "price": 10.00
    //         },
    //         { 
    //           "meal_name": "Pasta",
    //           "quantity": 2,
    //           "date": "2024-02-22",
    //           "price": 15.00
    //         }
    //       ],
    //       "dinner": [
    //         {
              
    //           "meal_name": "Continental Breakfast",
    //           "quantity": 2,
    //           "date": "2024-02-22",
    //           "price": 10.00
    //         },
    //         { 
    //           "meal_name": "Pasta",
    //           "quantity": 2,
    //           "date": "2024-02-22",
    //           "price": 15.00
    //         }
    //       ]
    //   };



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

        try{
            console.log('hnadling payment' );

            const response = await reserveProperty(parsedData);
            if (response.status ===201 ) {
                setOpenModal(true);
                alert('Booking successful');
            }
            else if (response.status === 401) {
                console.log('401-----')
                alert(response.message );
                console.log(response.message);  
            }


            else {
                console.log('Error----------');
                alert(response['message']);
            }
        }
        catch(error){
            console.log(error);
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
                                
                                <p>Booking Type: {reservationData.booking_type}</p>
                                <p>Check-In: {reservationData.start_date}</p>
                                <p>Check-Out: {reservationData.end_date}</p>
                                <p>Tax: {reservationData.tax}</p>
                                <p>Number of Guests: {reservationData.number_of_guests}</p>
                                <h2>Meals</h2>
                                <p>Breakfast</p>
                                <ul>
                                    {reservationData.breakfast && reservationData.breakfast.map((meal, index) => (
                                        <li key={index}>
                                            <p>Meal Name: {meal.meal_name}</p>
                                            <p>Quantity: {meal.quantity}</p>
                                            <p>Date: {meal.date}</p>
                                        </li>
                                    ))}
                                </ul>
                                <p>Lunch</p>
                                <ul>
                                    {reservationData.lunch && reservationData.lunch.map((meal, index) => (
                                        <li key={index}>
                                            <p>Meal Name: {meal.meal_name}</p>
                                            <p>Quantity: {meal.quantity}</p>
                                            <p>Date: {meal.date}</p>
                                        </li>
                                    ))}
                                </ul>
                                <p>Dinner</p>
                                <ul>
                                    {reservationData.dinner && reservationData.dinner.map((meal, index) => (
                                        <li key={index}>
                                            <p>Meal Name: {meal.meal_name}</p>
                                            <p>Quantity: {meal.quantity}</p>
                                            <p>Date: {meal.date}</p>
                                        </li>
                                    ))}
                                </ul>
                                

                                
                            </>
                        )}
                    </div>
                    <div className="pl-4">
                               
                        {reservationData && (
                            <>
                                <h1 className="text-2xl font-bold mb-4">Pricing</h1>
                                <p>Base price: {reservationData.base_price}</p>
                                <p>Platform Fee: {reservationData.platform_fee}</p>
                                <p>Tax: {reservationData.tax}</p>
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
