import axios from 'axios'; // Import the configured Axios instance


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

export async function Step4GET(registrationId) {
    console.log("step4get");
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            return;
        }
        else
        {
            console.log(authToken);
        }
        const response = await axios.get(`http://127.0.0.1:8000/host/api/property_registration/step4/${registrationId}/`, {
            headers: {   'Authorization': `Token ${authToken}`, 
            'Content-Type': 'application/json' }
        });
        console.log(response.data);
        return response;
        
    }
    catch (error) {
        console.error(error);
    }
}

export async function  getMealOption(registration_id) {
  
    try {
        const authToken = 'Token 12345';
        const response = await fetch(`http://127.0.0.1:8000/host/api/property_registration/step5/${registration_id}/`,{
            headers: {   'Authorization': `Token ${authToken}`, 
            'Content-Type': 'application/json' }
        });
        
        console.log('mealoption',response.json());
        
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPropertyByIDd(property_id) {
    console.log("single property get");
    try {
        const authToken = 'Token 12345';
        const response = await axios.get(`http://127.0.0.1:8000/host/api/property/${property_id}/`, {
            headers: {   'Authorization': `Token ${authToken}`, 
            'Content-Type': 'application/json' }
        });
       
       
        // const result = await response.json();
         console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPropertyByID(propertyId) {
    const response =          
    {
        "name": "Rafi Villa",
        "location": "Dhaka",
        "some_basics": {
            "id": 57,
            "number_of_guests": 4,
            "number_of_bedrooms": 2,
            "number_of_beds": 2,
            "number_of_bathrooms": 2.0
        },
        "property_type": "Houseboat",
        "property_sub_type": "Entire place",
        "description": "sdjfbn hjb jfnvjdkdf fdkffng jfhg",
        "price": "1700.00",
        "availability": [{
            "start_date": "2024-01-12",
            "end_date": "2024-01-15"
        },],
        "regular_amenities": [
            "Wifi",
            "Parking"
        ],
        "standout_amenities": [
            "Dining",
            "Beach"
        ],
        "highlights": [
            "Peaceful",
            "Unique",
            "Family-friendly"
        ],
        "host": {
            "host_id": "789",
            "name": "Rafi",
            "email": "john.doe@example.com",
            "response_rate": "100%",
            "response_time": "within an hour",
            "super_host": true,
            "profile_pic": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAFICAYAAADK2F6BAAA+nElEQVR42u2dd3hUVf7GPzcVEmoIvQYxgHRLxICLZQEV7MKCKOIqIP7EiuKqrI11V9bK2gARUbGgggKiiAJKLwoISBEEQoeQ0BJS5/z+mGQyM5k0mEkyM+/nec4zM7fP95573vuee865FmAQQgghBAAhCoEQQgghYRRCCCEkjEIIIYSEUQghhJAwCiGEEBJGIYQQQsIohBBCSBiFEEIICaMQQgghYRRCCCEkjEIIIYSEUQghhJAwCiGEEBJGIYQQQsIohBBCSBiFEEIICaMQQgghYRRCCCEkjEIIIYSEUQghhJAwCiGEEBJGIYQQQsIohBBCSBiFEEIICaMQQgghYRRCCCECgjCFQAjhDeqd05QZ799P65a1iG10HhAHNFRghI9JAvZxZP8mft+ewq3D32H/lp1ntUULMAqsEOJM6H7peSz++b/ANZzY9RY1svdDSjLsOwLJKXDkAITo/lv4CFsO1G0EsbWhUSw0aMhJW0OqtxwOfEOf3s8w9/s1EkYhhO/p3L0daxdvBH6BBW/A0uXQoC5kh4EJhZD8JFEU5SCOtlx7IgcicuDgUUi8AK58ALiIrpd1YuVPv0kYhRC+wRjDtu3vE7/mY9i9H6rVh4iovOJEiEqRSyHrNJw6CE0bsDvxDpq3uB3LigSySlxbjW+EEKXilRc",
            "reviews": [
                {
                    "review_id": "123",
                    "reviewer_id": "456",
                    "reviewer_name": "Tina",
                    "review":"Great Host"
                 },
                {
                    "review_id": "124",
                    "reviewer_id": "457",
                    "reviewer_name": "John",
                    "review":"Great Host"
             }],

        "photos": [
            {
                "image_data": "data:image/png;base64,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",
                "title": "Living Room"
            }
        ],
        "reviews": [
            
                {
                    "review_id": "123",
                    "reviewer_id": "456",
                    "reviewer_name": "Tina",
                    "review":"Great Place to stay"
                 },
                {
                    "review_id": "124",
                    "reviewer_id": "457",
                    "reviewer_name": "John",
                    "review":"Great place to stay"
             },
            ]
        
    }
    }

    return response;


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
        console.log('getProperties')
        console.log(data)
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");

        }
        else {
            console.log(authToken);
        }
        const response = await axios.post("http://127.0.0.1:8000/guest/api/reserve/", data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            },
        });
        console.log(response);
        return response;

    }
    catch (error) {
        console.error(error);
    }
}
