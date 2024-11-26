'use client';
import Link from 'next/link';
import React from 'react';
import { LogInAPI } from '@/API/test';


export default async function RootPage() {
  const handleLogin = async () => {
    const data = {
      "username": "saimon77",
      "password": "12345"
    }
    const response = await LogInAPI(data);
    console.log(response);
   }

  return (
    <main className=" flex min-h-screen">
     <div>
      Hello World from root page
      <div className="flex flex-col items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/host/">Host</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/guest/">Guest</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
          log in
        </button>
        </div>
     </div>
    </main>
  )
}