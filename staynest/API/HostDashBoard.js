import axios from './axios'; // Import the configured Axios instance

export async function getMyListingDetailsForHost(propertyId) {
    try {
        // Perform the API request
        const response = await axios.get(`host/api/complete_registration/${propertyId}/`);
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return;
    }
}