// components/Navbar.js
'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import Logo from '@/StaticImage/Meta_Inc._logo.jpg'

export default function Navbar() { 

  const [userMode, setUserMode] = React.useState(false);
  function hostMode() {
    setUserMode(false);
  }
  function guestMode() {
    setUserMode(true);
  }

  return (
  <nav className="bg-yellow-400 p-1">
    <dif className="mx-auto flex justify-between items-center">
      <Link href="/">
        <div ><Image
      src={Logo}
      width={65}
      alt="Picture of the author"
    /></div>
      </Link>
      <Link href="/host">
          <div className="font-bold text-2xl">StayNest</div>
      </Link>

      <div className="flex">
        <div className="flex">
          <button class={`${userMode ? 'bg-black'  : 'bg-blue-700'} text-white font-bold py-2 px-4 rounded `} onClick={hostMode}>
              host
          </button>
          <button class={`${userMode ? 'bg-blue-700' : 'bg-black'} text-white font-bold py-2 px-4 rounded`} onClick={guestMode}>
              guest
          </button>
        </div>
        <Link href="/account">
            <div> 
              <Image src={Logo} width={65} alt="Picture of the author"/> 
            </div>
        </Link>
      </div>
      
      </dif>

  </nav>
);
}
