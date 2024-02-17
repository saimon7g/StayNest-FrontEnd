import axios from 'axios';
export async function getServerSideProps() {
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    const data = {
        data: `This is the data from the server`,
    };

    // Pass the data to GuestHome as props

    return {
        props: {
            initialData: data,
        },
    };
}

export async function getPropertyByID(propertyId) {

    const result = {
        "listing_id": "123456",
        "name": "Cozy Apartment in New York",
        "location": "New York",
        "property_type": "Apartment",
        "property_subtype": "City Center",
        "description": "A comfortable and stylish apartment in the heart of the city.",
        "price": 150,
        "availability": {
            "check_in": "2024-01-12",
            "check_out": "2024-01-15"
        },
        "regular_amenities": ["Wi-Fi", "Kitchen", "Air Conditioning", "TV"],
        "standout_amenities": ["Private Balcony", "Jacuzzi"],
        "highlights": [
            "Close to public transportation",
            "Walking distance to popular attractions"
        ],
        "host": {
            "host_id": "789",
            "host_name": "John Doe",
            "host_email": "john.doe@example.com"
        },
        "photos": [
            {
                "url": "https://example.com/photo1.jpg",
                "title": "Living Room"
            },
            {
                "url": "https://example.com/photo2.jpg",
                "title": "Bedroom"
            },
            {
                "url": "https://example.com/photo3.jpg",
                "title": "Kitchen"
            }
        ],
        "reviews": [
            {
                "user": "Alice",
                "comment": "Great location and cozy atmosphere. Loved it!",
                "rating": 5
            },
            {
                "user": "Bob",
                "comment": "Clean and well-maintained. Would stay again.",
                "rating": 4
            }
            // Add more review objects as needed
        ]
    }


    return result;


}

export async function getProperties(data) {
    console.log(data)
    try {
        console.log('getProperties')
        console.log(data)
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");

        }
        else {
            console.log(authToken);
        }
        const response = await axios.put("http://127.0.0.1:8000/host/api/properties/search/", data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            },
        });
        // console.log(response);
        return response.data;

    }
    catch (error) {
        console.error(error);
    }
}


export async function reserveProperty(data) {
    try {
        const response = {
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
            }
        }
        return response;
    }
    catch (error) {
        console.error(error);
    }
}