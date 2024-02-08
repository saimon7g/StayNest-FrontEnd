'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default async function GuestHome() {

  const [data, setData] = useState("");



  return (
    <main className=" flex min-h-screen">
      {/* // className=" flex min-h-screen flex-col items-center justify-center" */}
      <div>
        Hello World from Guest page
      </div>
    </main>
  )


  
}
