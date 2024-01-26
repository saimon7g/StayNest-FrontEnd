import React from "react";

export async function Step1Post(data) {
    console.log(data);
    //  post data to server use try catch
    try {
        const response = await fetch("http://localhost:8000/api/property_registration/step1/", {
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