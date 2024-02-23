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
    const constantdata = {
        "status": "success",
        "message": "Booking confirmation details retrieved successfully",
        "data": {
            "guest_id": 21314235,
            "host": {
                "host_id": 123456,
                "host_name": "John Doe",
                "host_email": "sadgdsgsdfg@gmail.com",
                "host_phone": "1234567890",
            },
            "propert_details": {
                "property_id": 123456,
                "property_name": "Aloha",
                "property_type": "Villa",
                "property_sub_type": "Entire Villa",
                "image_data": "sfgsgsdgdfsgsdgsdg",
                "address": "123, Aloha Street, Aloha, Aloha",
                "number_of_guests": 4,
                "number_of_bedrooms": 2,
                "number_of_beds": 3,
                "number_of_bathrooms": 2,
            },
            "booking_details": {
                "booking_id": "<booking id>",
                "booking_type": "Stay with Meals",
                "start_date": "2024-01-12",
                "end_date": "2024-01-15",
                "staying_price": 300,
                "booking_status": "upcoming",
            },
            "meals": {
                "breakfast": [
                    { "name": "Continental", "quantity": 2, "date": "2024-01-12", "price": 10 },
                    { "name": "Full English", "quantity": 2, "date": "2024-01-12", "price": 10 },
                ],
                "lunch": [
                    { "name": "Italian", "quantity": 2, "date": "2024-01-13", "price": 10 },
                    { "name": "BBQ", "quantity": 2, "date": "2024-01-13", "price": 10 }
                ],
                "dinner": [
                    { "name": "Italian", "quantity": 2, "date": "2024-01-13", "price": 10 },
                    { "name": "BBQ", "quantity": 2, "date": "2024-01-13", "price": 10 }
                ]
            }
        }
    };


    try {
        // Perform the API request
        const response = await axios.get(`guest/api/booking_details/${bookingId}/`);
        return constantdata;
    }
    catch (error) {
        console.error(error);
        return constantdata; // Return placeholder data in case of error
    }
}

export async function getPreviousBookings() {
    // Placeholder constant data
    const constantData ={
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
