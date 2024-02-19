import axios from 'axios';

export async function getUpcomingBookings() {
    const constantdata = {
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
                },
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Stay with Meals",
                },
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Paying Guest",
                }
            ]
        }
    };


    console.log("getUpcomingBookings");
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            // geenrate error
            // return;
            return constantdata;
        }
        const response = await axios.get(`http://127.0.0.1:8000/guest/api/upcoming_bookings/`, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}


export async function getBookingDetails(bookingId) {
    const constantdata = {
        "status": "success",
        "message": "Booking confirmation details retrieved successfully",
        "data": {
            "booking_id": "<booking id>",
            "user_id": "123456",
            "listing_id": "789012",
            "property_name": "Aloha",
            "check_in": "2024-01-12",
            "check_out": "2024-01-15",
            "total_price": 300,
            "confirmation_code": "ABC123",
            "booking_status": "upcoming",
            "meals": {
                "breakfast": [
                    { "item": "Continental", "quantity": 2, "date": "2024-01-12" },
                    { "item": "Full English", "quantity": 2, "date": "2024-01-12" }
                ],
                "lunch": [],
                "dinner": [
                    { "item": "Italian", "quantity": 2, "date": "2024-01-13" },
                    { "item": "BBQ", "quantity": 2, "date": "2024-01-13" }
                ]
            }
        }
    };

    console.log("getBookingDetails");
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            // geenrate error
            // return;
            return constantdata;
        }
        const response = await axios.get(`http://http://127.0.0.1:8000/guest/api/booking_details/${bookingId}/`, {
            headers: {
                Authorization: `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}

export async function getPreviousBookings() {
    const constantdata = {
        "status": "success",
        "message": "Previous bookings retrieved successfully",
        "data": {
            "previous_bookings": [
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name 1",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Stay",
                },
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name 2",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Stay with Meals",
                },
                {
                    "booking_id": "<booking id>",
                    "property_name": "Property Name 3",
                    "check_in": "2024-01-12",
                    "check_out": "2024-01-15",
                    "booking_type": "Paying Guest",
                }
            ]
        }
    };

    console.log("getPreviousBookings");
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            // geenrate error
            // return;
            return constantdata;
        }
        const response = await axios.get(`http://127.0.0.1:8000/guest/api/previous_bookings/`, {
            headers: {
                Authorization: `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}

export async function getNegotiations() {
    const constantdata = {
        "status": "success",
        "message": "Negotiations retrieved successfully",
        "data": {
            "negotiations": [
                {
                    "negotiation_id": "<negotiation id>",
                    "property_name": "Property Name 1",
                    "booking_type": "Stay",
                    "negotiation_status": "pending"
                },
                {
                    "negotiation_id": "<negotiation id>",
                    "property_name": "Property Name 2",
                    "booking_type": "Stay with Meals",
                    "negotiation_status": "accepted"
                },
                {
                    "negotiation_id": "<negotiation id>",
                    "property_name": "Property Name 3",
                    "booking_type": "Paying Guest",
                    "negotiation_status": "rejected"
                }
            ]
        }
    };

    console.log("getNegotiations");
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            // geenrate error
            // return;
            return constantdata;
        }
        const response = await axios.get(`http://127.0.0.1:8000/guest/api/negotiations/`, {
            headers: {
                Authorization: `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}
