import axios from 'axios';

export async function Step1GET() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/host/api/property_registration/step1/");
        console.log(" from api step1get");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function Step1Post(data) {
    console.log(data);
    try {
        const response = await axios.post("http://127.0.0.1:8000/host/api/property_registration/step1/", data);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step2PUT(data) {
    console.log("step2put");
    console.log(data);
    console.log("step2put                    11111111 ");
    try {
        const response = await axios.put("http://127.0.0.1:8000/host/api/property_registration/step2/3/", data);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step2GET() {
    console.log("step2get");
    try {
        const response = await axios.get("http://127.0.0.1:8000/host/api/property_registration/step2/3/");
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function Step5GET() {
    console.log("step5get");
    try {
        const response = await fetch("http://127.0.0.1:8000/host/api/property_registration/step5/3/");
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}

export async function Step5PUT(data) {
    console.log("step5put");
    console.log(data);
    console.log("step5put                    11111111 ");
    try {
        const response = await axios.put("http://127.0.0.1:8000/host/api/property_registration/step5/3/", data);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
