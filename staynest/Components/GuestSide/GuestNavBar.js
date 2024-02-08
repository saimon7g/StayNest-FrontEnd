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
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            {/* Existing Logo */}
            <Link href="/">
                <div className="pl-8">
                    <Image src={Logo} alt="logo" width={100} height={100} />
                </div>
            </Link>

            {/* Search Icon */}
            <div className="pr-8 cursor-pointer" onClick={() => setIsSearchFormVisible(!isSearchFormVisible)}>
                <FiSearch size={24} />
            </div>

            {/* Dynamic Search Form */}
            {isSearchFormVisible && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 rounded-md shadow-md">
                    <form onSubmit={handleSearchSubmit}>
                        {/* Date Pickers */}
                        <div className="flex items-center mb-2">
                            <IoIosCalendar size={20} className="mr-2" />
                            <DatePicker
                                selected={startDate}
                                onChange={handleStartDateChange}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="Start Date"
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={handleEndDateChange}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="End Date"
                                className="ml-2"
                            />
                        </div>

                        {/* Number of People and Location */}
                        <input
                            type="number"
                            placeholder="Number of People"
                            value={numberOfPeople}
                            onChange={handleNumberOfPeopleChange}
                            className="mb-2 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={handleLocationChange}
                            className="mb-2 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        />

                        {/* Submit Button */}
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Search
                        </button>
                    </form>
                </div>
            )}

            {/* Existing Account Link */}
            <Link href="/account">
                <div className="pr-8">
                    <Image src={Logo} alt="account" width={100} height={100} />
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;