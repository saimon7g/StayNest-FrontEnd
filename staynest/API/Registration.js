import React from "react";

export async function Step1Post(data) {
    console.log(data);
    //  post data to server use try catch
    try {
        const response = await fetch("http://localhost:8000/host/api/property_registration/step1/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
export async function Step1GET() {
    console.log("step1get");
    try {
        const response = await fetch("http://localhost:8000/host/api/property_registration/step1/4/");
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}

export async function Step2PUT(data) {
    console.log("step2put");
    console.log(data);
    console.log("step2put                    11111111 ");
    try {
        const response = await fetch("http://localhost:8000/host/api/property_registration/step2/6/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}

export async function Step2GET() {
    console.log("step2get");
    try {
        const response = await fetch("http://localhost:8000/host/api/property_registration/step2/3/");
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}