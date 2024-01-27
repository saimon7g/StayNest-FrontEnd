import React from "react";

export default async function Testapi() {
    const response = await fetch("http://127.0.0.1:8000/api/HomeData");
    const data = await response.json();
    // console.log(data);
    
    return data;

}
