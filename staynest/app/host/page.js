// a page.js file
//

'use client';
import React from 'react';
import Link from 'next/link';
import GoogleMap from '@/Components/Maps';
import {useState} from 'react';
import { Modal,Button } from 'flowbite-react';
import ServiceSelectionModal from '@/Components/HostSide/ServiceSelection';
import HostNavBar from '@/Components/HostSide/HostNavbar';
import Footer from '@/Components/Footer';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Card } from 'flowbite-react';



export default function GuesrRootPage() {
    const [modalOpen, setModalOpen] = useState(false);

    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

    const handleSubmit = () => {
        setModalOpen(true);
    }

    
    return (
        <div>
            <HostNavBar isSearchFormVisible={isSearchFormVisible} setIsSearchFormVisible={setIsSearchFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div className='flex flex-col w-9/12 mx-auto border-4 rounded-lg shadow-2xl my-20'> 
                <div className='flex justify-center p-4'>
                    <text className="text-4xl text-center font-semibold">Welcome to StayNest</text>
                </div>   
               
               <div className='flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center w-1/3'>
                        <p className='text-3xl font-bold'> You could earn</p>
                        <div className='flex text-5xl font-bold text-amber-400'>
                            <FaBangladeshiTakaSign/><text>7000 </text>
                        </div>
                        <text className='text-pretty p-4 mt-6 text-lg font-bold text-gray-500'>Easily set up your place for renting with us</text>
                    </div>
                    <div className='mx-auto my-20'>
                        <GoogleMap/>
                    </div>
               </div>
                
                <div className='flex justify-center mb-8'>
                    <Card className="max-w-lg">
                        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-8">
                            1. Tell us about your place
                        </h4>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Share some basic info like where it is and how many guest can stay
                        </p>
                    </Card>
                </div>
                <div className='flex justify-center mb-8'>
                    <Card className="max-w-lg ">
                        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-8">
                            2. Make it stand out
                        </h4>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Add some photos plus a title and discription, we'll help you out
                        </p>
                    </Card>
                </div>
                <div className='flex justify-center mb-20'>
                    <Card className="max-w-lg">
                        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-8">
                            3. Finish up and publish
                        </h4>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Add some amenities, set your price and register your property.
                        </p>
                    </Card>
                </div>

                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 mx-auto  my-10" onClick={handleSubmit}>
                    Get Started
                </Button>
                
                {/*open Modal */}
                <ServiceSelectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
            <div className='mt-10'>
                <Footer />
            </div>
        </div>
    );
}
