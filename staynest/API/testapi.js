import React from "react";

export default async function Testapi() {
    // use try catch block to handle errors
    try {
        const response = await fetch("http://localhost:8000/api/HomeData");
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}