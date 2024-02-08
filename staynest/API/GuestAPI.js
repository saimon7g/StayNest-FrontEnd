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