import axios from './axios'; // Import the configured Axios instance
export async function getMyListings() {
    try {


        const response = await axios.get(`host/api/mylistings/`);
        if (typeof response.data === 'string') {
            // If response.data is a string, parse it to JSON
            return JSON.parse(response.data);
        } else {
            // If response.data is already JSON, return it directly
            return response.data;
        }
    }
    catch (error) {
        console.log(error);
        return error;
    }

}

export async function getUpcomingBookingsForGuest() {

    try {
        // Perform the API request
        const response = await axios.get(`guest/api/upcoming_bookings/as_guest/`);
        console.log("response fromm getUpcomingBookingsForGuest", response.data);
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return;
    }
}

export async function getBookingDetails(bookingId) {

    // {
    //     "id": 1,
    //     "breakfast": [],
    //     "lunch": [],
    //     "dinner": [],
    //     "property_id": 1,
    //     "property_name": "ABC Home",
    //     "property_photo": null,
    //     "booking_type": "stay_with_meal",
    //     "start_date": "2024-03-02",
    //     "end_date": "2024-03-02",
    //     "base_price": "2000.00",
    //     "platform_fee": "100.00",
    //     "tax": "200.00",
    //     "number_of_guests": 5,
    //     "status": "pending",
    //     "created_at": "2024-03-02T17:51:38.046659+06:00",
    //     "updated_at": "2024-03-02T17:51:38.134527+06:00",
    //     "guest_id": 3,
    //     "host_id": 3
    // }

    try {
        // Perform the API request
        console.log("bookingId", bookingId);
        const bookingResponse = await axios.get(`guest/api/booking_details/${bookingId}/`);

        if(typeof bookingResponse.data === 'string'){
            bookingResponse.data = JSON.parse(bookingResponse.data);
        }
        
        return bookingResponse.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return;
    }
};

export async function getPreviousBookings() {
    // Placeholder constant data
    const constantData = {
        "status": "success",
        "message": "Upcoming bookings retrieved successfully",
        "data": {
            "previous_bookings": [
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Stay",
                    "photo": "base64 encoded image"
                },
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Stay with Meals",
                    "photo": "base64 encoded image"
                },
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Paying Guest",
                    "photo": "base64 encoded image"
                }
            ]
        }
    };

    try {
        // Perform the API request
        const response = await axios.get(`guest/api/upcoming_bookings/as_guest/`);
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return ;
    }
}

export async function cancelBooking(data) {
    // Placeholder constant data
    const constantData = {

    };

    try {
        // Perform the API request
        const response = await axios.delete(`guest/api/cancel_booking/`, {
            data: data
        });
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return constantData; // Return placeholder data in case of error
    }
}
