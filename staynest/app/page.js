import React from 'react'
import Testapi from '../API/testapi'

export default async function Home() {

  const res= await Testapi();
  console.log(res);
  return (
    <main>
      Hello World
    </main>
  )
}
