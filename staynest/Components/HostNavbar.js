// components/Navbar.js
'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import Logo from '@/StaticImage/logo2.png'

export default function Navbar() {

  const [userMode, setUserMode] = React.useState(false);
  function hostMode() {
    setUserMode(false);
  }
  function guestMode() {
    setUserMode(true);
  }

  return (
    <nav className="bg-yellow-200 p-1">
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
            <Link href="/host">
              <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={hostMode}>
                host
              </button>
            </Link>

            {/* black back ground button */}
            {/* <button className="bg-black-700 text-white font-bold py-2 px-4 rounded"  onClick={guestMode}> */}
            <Link href="/guest">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={guestMode}>
                guest
              </button>
            </Link>
          </div>
          <Link href="/account">
            <div >
              <Image src={Logo} width={65} alt="Picture of the author" className='border rounded-full'/>
            </div>
          </Link>
        </div>

      </dif>

    </nav>
  );
}
