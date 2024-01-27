import React from 'react'
import Link from 'next/link'


export default async function GuestHome() {

  return (
    <main className=" flex min-h-screen">
     {/* // className=" flex min-h-screen flex-col items-center justify-center" */}
     <div>
      Hello World from Guest page

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       <Link href="/">
        Button
        </Link>
      </button>
    </div>
    </main>
    )
}
