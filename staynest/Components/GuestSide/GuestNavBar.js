'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/StaticImage/logo1.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiSearch } from 'react-icons/fi'; // Import the search icon
import { IoIosCalendar } from 'react-icons/io'; // Import other icons as needed


const Navbar = ( ) => {



    // {
    //     "results": [
    //       {
    //         "listing_id": "123456",
    //         "name": "Cozy Apartment in New York",
    //         "location": "New York",
    //         "price": 150,
    //         "availability": {
    //           "check_in": "2024-01-12",
    //           "check_out": "2024-01-15"
    //         },
    //         "photo": "https://example.com/cozy_apartment_photo.jpg"
    //       },
    //     ]
    //   }
      
    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [location, setLocation] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleNumberOfPeopleChange = (event) => {
        setNumberOfPeople(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();






        setIsSearchFormVisible(false);
    };
   

    return (
        <nav className="flex justify-between items-center h-16 bg-blue-200 text-black relative shadow-sm font-mono" role="navigation">
            {/* Existing Logo */}
            <Link href="/">
                <div className="pl-8">
                    <Image src={Logo} alt="logo" width={100} height={100} />
                </div>
            </Link>

            {/* Search Icon */}
            <div className="flex justify-between bg-slate-100 rounded-full py-2 px-6 cursor-pointer" onClick={() => setIsSearchFormVisible(!isSearchFormVisible)}>
                <text className="text-2xl text-slate-400 px-20">Where | When</text>
                <FiSearch size={30} />
            </div>

            {/* Dynamic Search Form */}
            {isSearchFormVisible && (
                <div className="bg-slate-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 rounded-md shadow-md">
                    <text className="text-3xl ml-20 my-16"> Search your stay</text>
                    <form onSubmit={handleSearchSubmit} >
                        <div>
                            <label for="fname">Location</label>
                            <input
                                type="text"
                                placeholder="Anywhere"
                                value={location}
                                onChange={handleLocationChange}
                                className="mb-2 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            />
                        </div>
                        {/* Date Pickers */}
                        <div className="flex items-center mb-2">
                            
                            <div className="flex flex-col">
                                <label for="fname">Arrival</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleStartDateChange}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    placeholderText="mm/dd/yyyy"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="fname">Departure</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    placeholderText="mm/dd/yyyy"
                                    className="ml-2"
                                />
                            </div>
                        </div>
                        {/* Number of People and Location */}
                        <div>
                            <label for="fname">Travelers</label>
                            <input
                                type="number"
                                placeholder="Number of People"
                                value={numberOfPeople}
                                onChange={handleNumberOfPeopleChange}
                                className="mb-2 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            />
                        </div>


                        {/* Submit Button */}
                        <button type="submit" class="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Search
                        </button>
                    </form>
                </div>
            )}

            {/* Existing Account Link */}
            <Link href="/account">
                <div className=" pr-8">
                    <Image src={Logo} alt="account" width={100} height={100} className='rounded-full' />
                </div>
            </Link>
            <Link href="/host">
                <button>
                    bhung chung
                </button>
            </Link>
            
        </nav>
    );
};

export default Navbar;