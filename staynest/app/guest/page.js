'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/StaticImage/home_page.jpg';
import MyLogo from '@/StaticImage/logo1.png';
import { getProperties } from '@/API/GuestAPI';
import { useEffect, useContext } from 'react';
import QueryParamsContext from '@/contexts/queryParamsContext';
import { Spinner } from 'flowbite-react';

import Navbar from "@/Components/GuestSide/GuestNavBar";
import Footer from "@/Components/Footer";


export default function GuestHome() {
  const [properties, setProperties] = useState([]);
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = {
          "category": "any",
          "location": "any",
          "check_in": "any",
          "check_out": "any",
          "guests": "any",
          "price": "any",
          "property_type": "any",
        };
        const response = await getProperties(data);
        setProperties(response.results);
        console.log(response.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar isLoginFormVisible={isLoginFormVisible} setIsLoginFormVisible={setIsLoginFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className="flex flex-col items-center justify-center">
      
        <div className="">
          <Image src={Logo} alt="logo" width={1400} height={1000} />
        </div>
        <div className="mb-20">
          <p className='text-3xl font-bold'>discover safe travel with stay nest</p>
          <p className='text-lg text-slate-400'>multiday trips organised by local experts with activities</p>
          <p className='text-lg text-slate-400'> with meals and accomodationincluded</p>
        </div>
        <div className="ml-8 grid grid-cols-3 grid-rows-1">
          {
            spinner ? <Spinner size="large" /> :
            properties.map((e) => {
              return <div className='row-span-1 col-span-1' key={e.property_id}>
                <Link href="/guest/singleproperty/[id]" onClick={()=>setSpinner(true)} as={`/guest/singleproperty/${e.property_id}`} >
                  <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <Image
                        key={e.property_id} // Unique key for each image
                        src={e.photo} // Image URL
                        width={400}
                        height={240}
                        alt="StayNest" // Alt text
                      //layout="fill" // Optional: Responsive layout
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {e?.location_name}</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e?.name}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Starting from {e?.price_per_night} taka per night</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> from {e?.availability?.start_date} to {e?.availability?.end_date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            })
          }




        </div>
      </div>
      <Footer />
    </div>

  );
}
//         });

