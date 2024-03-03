'use client';
import React, {  useState , useEffect} from 'react';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { getProperties } from '@/API/GuestAPI';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, Button } from 'flowbite-react';
import Navbar from "@/Components/GuestSide/GuestNavBar";
import Footer from "@/Components/Footer";
import { Badge } from 'flowbite-react';

export default function GuestStay() {
  const [properties, setProperties] = useState([]);
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('stay');
  const [newParams, setNewParams] = useState({});
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  useEffect(() => {
    setNewParams(JSON.parse(params.get('search')));
  }, [params]);

  useEffect(() => {
    fetchData();
  }, [newParams]);

  const fetchData = async () => {
    try {
      const response = await getProperties(JSON.stringify(newParams));
      setProperties(response.results);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleCategoryChange = (category) => {
    // params.set('search', category);
    // console.log(params.get('search'));
    setSelectedCategory(category);
    console.log(category);
    let jsonParams = JSON.parse(params.get('search'));
    console.log(jsonParams);
    jsonParams.category = category;
    setNewParams(jsonParams);
  };

   
  return (
    <div className='min-h-full'>
      <Navbar isLoginFormVisible={isLoginFormVisible} setIsLoginFormVisible={setIsLoginFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    <div className="flex flex-col items-center justify-center">
      <div className='flex flex-row items-center justify-center w-11/12 my-20'>
        <Button className={`flex flex-row border-4 border-black rounded-lg w-1/6 ml-8 ${selectedCategory === 'stay' ? '' : 'bg-green-300'}`}
        onClick={() => handleCategoryChange('stay')} >
          <div className='w-1/3 ml-4'>
            <FaHome size={50}/>
          </div>
          <div className='px-8'>
            <h3>Stay </h3>
          </div>
        </Button>
        <Button className={`flex flex-row border-4 border-black rounded-lg w-1/6 ml-8 ${selectedCategory === 'stay_with_meals' ? '' : 'bg-green-300'}`}
        onClick={() => handleCategoryChange('stay_with_meals')}>
          <div className='w-1/3 ml-4'>
            <GiMeal size={50}/>
          </div>
          <div>
            <h3>Stay Including Meals</h3>
          </div>
        </Button>
        <Button onClick={() => handleCategoryChange('paying_guest')} className={`flex flex-row border-4 border-black rounded-lg w-1/6 ml-8 ${selectedCategory === 'paying_guest' ? '' : 'bg-green-300'}`}>
          <div className='w-1/3 ml-4'>
            <FaHandshake size={50}/>
          </div>
          <div>
            Paying Guest
          </div>
        </Button>
      </div>

      <div className="my-20">
        <p className='text-2xl font-bold'>discover safe travel with stay nest</p>
        <p className='text-lg text-slate-400'>multiday trips organised by local experts with activities</p>
        <p className='text-lg text-slate-400'>with meals and accommodation included</p>
      </div>

      <div className="ml-8 grid grid-cols-3 grid-rows-1">
        {properties.map((e) => (
          <div className='row-span-1 col-span-1' key={e.property_id}>
            <Card className='h-9/12 mb-20'>
            <Link href="/guest/singleproperty/[id]" as={`/guest/singleproperty/${e.property_id}`}>
              <a href="#">
                <Image
                  src={e.photo}
                  width={400}
                  height={240}
                  alt="StayNest"
                />
              </a>
              <div className="p-5">
                <div className='flex p-2'>
                  {e.stay&&(
                  <div className='max-w-12'>
                    <Badge color="info">Stay</Badge>
                  </div>
                  )}
                  {e.stay_with_meal&&(
                  <div className='max-w-24'>
                    <Badge color="indigo">Stay + meal</Badge>
                  </div>
                  )}
                  {e.paying_guest&&(
                  <div className='max-w-24'>
                    <Badge color="pink">Paying guest</Badge>
                  </div>
                  )}
                  
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {e?.name}</h5>
                          
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e?.location_name}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Starting from {e?.price_per_night} taka per night</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> from {e?.availability?.start_date} to {e?.availability?.end_date}</p>
                      
                  {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.location_name}</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.name}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Starting from {e.price_per_night} taka per night</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">from {e.availability.start_date} to {e.availability.end_date}</p> */}
              </div>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
    