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
                    "negotiation_status": "pending",
                    "photo": "base64 encoded image"// photo of property
                },
                {
                    "negotiation_id": "<negotiation id>",
                    "property_name": "Property Name 2",
                    "booking_type": "Stay with Meals",
                    "negotiation_status": "accepted",
                    "photo": "base64 encoded image"
                },
                {
                    "negotiation_id": "<negotiation id>",
                    "property_name": "Property Name 3",
                    "booking_type": "Paying Guest",
                    "negotiation_status": "rejected",
                    "photo": "base64 encoded image"
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
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}

export async function getNegotiationDetails(negotiationId) {
    const constantdata = {
        "status": "success",
        "message": "Negotiation details retrieved successfully",
        "data": {
            "negotiation_id": "<negotiation id>",
            "negotiation_status": "pending",
            "host": {
                "host_id": 123456,
                "host_name": "John Doe",
                "host_email": "sjbgnfsdjksdjkg@gmail.com",
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
                "booking_type": "Stay with Meals",
                "start_date": "2024-01-12",
                "end_date": "2024-01-15",
                "staying_price": 300,
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
            },
            "negotiation_details": {
                "default_price": 300,
                "guest_price": 250,
                "host_price": 200,
                "negotiation_status": "offeredbyhost"
            }
        }
    };
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            // geenrate error
            // return;
            return constantdata;
        }
        const response = await axios.get(`http://127.0.0.1:8000/guest/api/negotiation_details/${negotiationId}/`, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}

export async function offerAcceptedByGuest(data) {

    // const data = {
    //     negotiation_id: negotiationId,
    //     accepeted_price: negotiationDetails.negotiation_details.host_price,
    //     negotiation_status: "acceptedbyguest"
    // };




    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            // geenrate error
            // return;
            return constantdata;
        }
        const response = await axios.post(`http://127.0.0.1:8000/guest/api/offer_accepted_by_guest/`, data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}

export async function offerRejectedByGuest(data) {


    // const data = {
    //     negotiation_id: negotiationId,
    //     negotiation_status: "rejectedbyguest"
    // };


    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            // geenrate error
            // return;
            return constantdata;
        }
        const response = await axios.post(`http://127.0.0.1:8000/guest/api/offer_rejected_by_guest/`, data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return constantdata;
    }
}