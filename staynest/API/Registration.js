import axios from './axios'; // Import the configured Axios instance

export async function Step1GET() {
    try {
        const response = await axios.get("host/api/property_registration/step1/");
        console.log(" from api step1get");
        console.log(response.data);
        return response;
    } catch (error) {
        console.error(error);
    }
}

// Add headers for request of each step

export async function Step1Post(data) {
    console.log(data);
    try {
        const response = await axios.post("host/api/property_registration/step1/", data);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}


export async function Step2GET(registrationId) {
    console.log("step2get");
    try {

        const response = await axios.get(`host/api/property_registration/step2/${registrationId}/`);
        console.log(response);
        return response.data;
        
    }
    catch (error) {
        console.error(error);
    }
}


export async function Step2PUT(data, registration_id) {
    try {
        const response = await axios.put(`host/api/property_registration/step2/${registration_id}/`, data);
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step3GET(registrationId) {
    try {
        const response = await axios.get(`host/api/property_registration/step3/${registrationId}/`);
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step3PUT(data, registration_id) {
    try {
        const response = await axios.put(`host/api/property_registration/step3/${registration_id}/`, data);
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step4GET(registrationId) {
    try {
        const response = await axios.get(`host/api/property_registration/step4/${registrationId}/`);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step4PUT(data, registration_id) {
    try {
        const response = await axios.put(`host/api/property_registration/step4/${registration_id}/`, data);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step5GET(registration_id) {
    try {
        const response = await fetch(`host/api/property_registration/step5/${registration_id}/`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export async function Step5PUT(data, registration_id) {
    try {
        const response = await axios.put(`host/api/property_registration/step5/${registration_id}/`, data);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step6GET(registrationId) {
    try {
        const response = await axios.get(`host/api/property_registration/step6/${registrationId}/`);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step6PUT(data, registration_id) {
    try {
        const response = await axios.put(`host/api/property_registration/step6/${registration_id}/`, data);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step7GET(registrationId) {
    try {
        const response = await axios.get(`host/api/property_registration/step7/${registrationId}/`);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step7PUT(data, registration_id) {
    try {
        const response = await axios.put(`host/api/property_registration/step7/${registration_id}/`, data);
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}
