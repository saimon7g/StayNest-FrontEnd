'use client';
import { Card } from 'flowbite-react';
import { getBookingDetails } from '@/API/UserDashBoard';
import { useEffect, useState } from 'react';

// this function will receive booking id as props and fetch the booking details from the server


// {
//     "status": "success",
//     "message": "Booking confirmation details retrieved successfully",
//     "data": {
//         "booking_id": "<booking id>",
//         "user_id": "123456",
//         "listing_id": "789012",
//         "check_in": "2024-01-12",
//         "check_out": "2024-01-15",
//         "total_price": 300,
//         "confirmation_code": "ABC123",
//         "status": "confirmed",
//         "meals": {
//             "breakfast": [
//                 { "item": "Continental", "quantity": 2, "date": "2024-01-12" },
//                 { "item": "Full English", "quantity": 2, "date": "2024-01-12" }
//             ],
//             "lunch": [],
//             "dinner": [
//                 { "item": "Italian", "quantity": 2, "date": "2024-01-13" },
//                 { "item": "BBQ", "quantity": 2, "date": "2024-01-13" }
//             ]
//         }
//     }
// }



export function BookingDetails({ bookingId }) {


    const [fullDeatils, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchBookingDetails = async () => {
        const data = await getBookingDetails(bookingId);
        setDetails(data);
        setLoading(false);
        console.log("BookingDetails from useeffet");
        console.log(data);
        console.log(fullDeatils);
    };

    useEffect(() => {
        fetchBookingDetails();
    }, []);



    return (
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
        </Card>
    );
}

export default BookingDetails;