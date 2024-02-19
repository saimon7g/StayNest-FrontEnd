import axios from 'axios';

export async function getUpcomingBookings() {
    const constantdata = {
        "upcoming_bookings": [
            {
                "booking_id": 1,
                "property_name": "Property Name",
                "check_in": "2021-12-12",
                "check_out": "2021-12-12",
                "booking_status": "Pending"
            },
            {
                "booking_id": 2,
                "property_name": "Property Name",
                "check_in": "2021-12-12",
                "check_out": "2021-12-12",
                "booking_status": "Pending"
            },
            {
                "booking_id": 3,
                "property_name": "Property Name",
                "check_in": "2021-12-12",
                "check_out": "2021-12-12",
                "booking_status": "Pending"
            }
        ]
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
        else {
            console.log(authToken);
        }
        const response = await axios.get(`http://127.0.0.1:8000/guest/api/upcoming_bookings/`, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}