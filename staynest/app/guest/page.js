'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '@/StaticImage/Meta_Inc._logo.jpg';
import { getProperties } from '@/API/GuestAPI';



export default async function GuestHome() {

  const response = await getProperties();

  return (
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <Image src={Logo} alt="logo" className="w-full" />
        </div>
        <div>
          <text>discover safe travel with stay nest</text>
        </div>
        <div className="ml-8 grid grid-cols-3 grid-rows-1">
          {
            response.results.map((e)=>{
              return <div className='row-span-1 col-span-1' key={e.property_id}>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                              <Image src={Logo} alt="logo" width={400} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> { e.location_name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.name}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Starting from {e.price_per_night} taka per night</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> from {e.availability.check_in} to {e.availability.check_out}</p>
                            </div>
                        </div>
                      </div>
            })
          }

          

          
        </div>
      </div>
  )



}
