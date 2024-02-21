import axios from './axios'; // Import the configured Axios instance

export async function getUpcomingBookings() {
    // Placeholder constant data
    const constantData = {
        "status": "success",
        "message": "Upcoming bookings retrieved successfully",
        "data": {
            "upcoming_bookings": [
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
        const response = await axios.get(`guest/api/upcoming_bookings/`);
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return constantData; // Return placeholder data in case of error
    }
}

export async function getBookingDetails(bookingId) {
    // Placeholder constant data
    const constantData = {
        // Your constant data here...
    };

    try {
        // Perform the API request
        const response = await axios.get(`guest/api/booking_details/${bookingId}/`);
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return constantData; // Return placeholder data in case of error
    }
}

export async function getPreviousBookings() {
    // Placeholder constant data
    const constantData = {
        // Your constant data here...
    };

    try {
        // Perform the API request
        const response = await axios.get(`guest/api/previous_bookings/`);
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return constantData; // Return placeholder data in case of error
    }
}

export async function cancelBooking(data) {
    // Placeholder constant data
    const constantData = {
        // Your constant data here...
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
