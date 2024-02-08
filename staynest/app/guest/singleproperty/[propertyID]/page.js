'use client';
import React from 'react';
import Image from 'next/image';
import { getPropertyByID } from '@/API/GuestAPI';


export default function SingleProperty({ params }) {
    const id = params.propertyID;
    console.log(id);
    console.log("Hello from SingleProperty");






  return (
    <main className=" flex min-h-screen">
      {/* // className=" flex min-h-screen flex-col items-center justify-center" */}
      <div>
        Hello World from Property page {id}
      </div>
    </main>
  )



}
