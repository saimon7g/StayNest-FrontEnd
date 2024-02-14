'use client';
import React, {  useState } from 'react';
import Image from 'next/image';
import { getProperties } from '@/API/GuestAPI';
import { FaHome } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { useEffect,useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function GuestStay() {
  const [properties, setProperties] = useState([]);
  const router = useRouter();
  const params = useSearchParams();
  console.log('--------------params');
  console.log(params.get('search'));
 
    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await getProperties(params.get('search'));
          setProperties(response.results);
        } catch (error) {
          console.error('Error fetching properties:', error);
        }
      };
      fetchData();
      
    }, []);

   
  return (
    <div className="flex flex-col items-center justify-center">
        <div className='flex flex-row items-center justify-center w-11/12 my-20'>
            <div className='border-4 border-black rounded-lg w-1/4 ml-8'>
                <p className="text-slate-400">Location</p>
                <p>Dhaka</p>
            </div>
            <div className='border-4 border-black rounded-lg w-1/4 ml-8'>
                <p className="text-slate-400">Date</p>
                <p>01 January 2024</p>
            </div>
            <div className='border-4 border-black rounded-lg w-1/4 ml-8'>
                <p className="text-slate-400">Number of people</p>
                <p>02</p>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center w-11/12 my-20'>
            <div className='flex flex-row border-4 border-black rounded-lg w-1/6 ml-8'>
                <div className='w-1/3 ml-4'>
                    <FaHome size={50}/>
                </div>
                <div>
                    <p className="">Stay</p>
                </div>
                
            </div>
            <div className='flex flex-row border-4 border-black rounded-lg w-1/6 ml-8'>
                <div className='w-1/3 ml-4'>
                    <GiMeal size={50}/>
                </div>
                <div>
                    <p>Stay including meals</p>
                </div>
                
            </div>
            <div className='flex flex-row border-4 border-black rounded-lg w-1/6 ml-8'>
                <div className='w-1/3 ml-4'>
                    <FaHandshake size={50}/>
                </div>
                <div>
                    <p>Paying guest</p>
                </div>
                
            </div>
        </div>

       
        <div className="my-20">
          <p className='text-2xl font-bold'>discover safe travel with stay nest</p>
          <p className='text-lg text-slate-400'>multiday trips organised by local experts with activities</p>
          <p className='text-lg text-slate-400'> with meals and accomodationincluded</p>
        </div>
        <div className="ml-8 grid grid-cols-3 grid-rows-1">
          {
            properties.map((e)=>{
              return <div className='row-span-1 col-span-1' key={e.property_id}>
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
    