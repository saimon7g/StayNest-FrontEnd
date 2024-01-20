import React from "react";

export default async function Testapi() {
    const response = await fetch("http://localhost:8000/api/HomeData");
    const data = await response.json();
    // console.log(data);
    return data;

}
