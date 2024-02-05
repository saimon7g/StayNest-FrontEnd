import Link from 'next/link';
import React from 'react';


export default async function RootPage() {

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
        </div>
     </div>
    </main>
  )
}