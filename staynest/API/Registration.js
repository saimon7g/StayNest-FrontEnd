import axios from 'axios';

export async function Step1GET() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/host/api/property_registration/step1/");
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
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            return;
        }
        const response = await axios.post("http://127.0.0.1:8000/host/api/property_registration/step1/", data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
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
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            return;
        }
        else
        {
            console.log(authToken);
        }
        const response = await axios.get(`http://127.0.0.1:8000/host/api/property_registration/step2/${registrationId}/`, {
            headers: {   'Authorization': `Token ${authToken}`, 
            'Content-Type': 'application/json' }
        });
        console.log(response);
        return response;
        
    }
    catch (error) {
        console.error(error);
    }
}
export async function Step2PUT(data,registration_id) {
    console.log("step2put");
    console.log(data);
    console.log("step2put                    11111111 ");
    try {
        const authToken = sessionStorage.getItem('authToken');
        const response = await axios.put(`http://127.0.0.1:8000/host/api/property_registration/step2/${registration_id}/`, data, {
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
//step3Get
export async function Step3GET(registrationId) {
    console.log("step3get");
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken === null) {
            console.log("//-----No token found");
            return ;
        }
        else
        {
            console.log(authToken);
        }
        const response = await axios.get(`http://127.0.0.1:8000/host/api/property_registration/step3/${registrationId}/`, {
            headers: {   'Authorization': `Token ${authToken}`, 
            'Content-Type': 'application/json' },
        });
        console.log(response);
        return response;
        
    }
    catch (error) {
        console.error(error);
    }
}
// step3PUT
export async function Step3PUT(data,registration_id) {
    console.log("step3put");
    console.log(data);
    try {
        const authToken = sessionStorage.getItem('authToken');
        const response = await axios.put(`http://127.0.0.1:8000/host/api/property_registration/step3/${registration_id}/`, data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json',
                

            },
        });
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
    }
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
export async function Step4PUT(data,registration_id) {
    console.log("step3put");
    console.log(data);
    try {
        const authToken = sessionStorage.getItem('authToken');
        const response = await axios.put(`http://127.0.0.1:8000/host/api/property_registration/step4/${registration_id}/`, data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step5GET(registration_id) {
    console.log("step5get");
    try {
        const authToken = sessionStorage.getItem('authToken');
        const response = await fetch(`http://127.0.0.1:8000/host/api/property_registration/step5/${registration_id}/`,{
            headers: {   'Authorization': `Token ${authToken}`, 
            'Content-Type': 'application/json' }
        });
        // const result = await response.json();
        // console.log(re);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export async function Step5PUT(data,registration_id) {
    console.log("step3put");
    console.log(data);
    try {
        const authToken = sessionStorage.getItem('authToken');
        const response = await axios.put(`http://127.0.0.1:8000/host/api/property_registration/step5/${registration_id}/`, data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}
export async function Step6GET(registrationId) {
    console.log("step6get");
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
        const response = await axios.get(`http://127.0.0.1:8000/host/api/property_registration/step6/${registrationId}/`, {
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
export async function Step6PUT(data,registration_id) {
    console.log("step6put");
    console.log(data);
    try {
        const authToken = sessionStorage.getItem('authToken');
        const response = await axios.put(`http://127.0.0.1:8000/host/api/property_registration/step6/${registration_id}/`, data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}
export async function Step7GET(registrationId) {
    console.log("step7get");
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
        const response = await axios.get(`http://127.0.0.1:8000/host/api/property_registration/step7/${registrationId}/`, {
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
export async function Step7PUT(data,registration_id) {
    console.log("step7put");
    console.log(data);
    try {
        const authToken = sessionStorage.getItem('authToken');
        const response = await axios.put(`http://127.0.0.1:8000/host/api/property_registration/step7/${registration_id}/`, data, {
            headers: {
                'Authorization': `Token ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}