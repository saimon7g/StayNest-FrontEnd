'use client'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/StaticImage/logo1.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiSearch, FiBell } from 'react-icons/fi'; // Import notification icon
import { useRouter } from 'next/navigation';
import { formatDate } from '../utills';

const GuestNavbar = () => {
    const router = useRouter();
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
        console.log(startDate, endDate, numberOfPeople, location);
        const searchParams = {
            location: location,
            check_in: formatDate(startDate),
            check_out: formatDate(endDate),
            guests: numberOfPeople,
            room_type: "Entire home/apt",
            "price_range": {
                "min": 50,
                "max": 2000
            },
            "category": "any",
        };

        const queryString = JSON.stringify(searchParams);

        router.push(`/guest/stay/?search=${queryString}`);

        setIsSearchFormVisible(false);
    };

    return (
        <Navbar fluid rounded className="bg-blue-200">
            {/* Logo on the left */}
            <Navbar.Brand href="/">
                <Image src={Logo} alt="logo" width={100} height={100} />
            </Navbar.Brand>
            
            {/* Search bar in the middle */}
            <div className="flex justify-center items-center flex-grow">
                <div className="flex justify-between bg-slate-100 rounded-full py-2 px-6 cursor-pointer" onClick={() => setIsSearchFormVisible(!isSearchFormVisible)}>
                    <text className="text-2xl text-slate-400 px-20">Where | When</text>
                    <FiSearch size={30} />
                </div>
            </div>

            {/* User login/profile dropdown and notification icon on the right */}
            <div className="flex items-center ml-auto">
                <FiBell className="cursor-pointer text-white mr-4" size={24} />
                {/* Notification icon */}
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                    {/* Switch to toggle between host and guest modes */}
                    <div className="flex items-center ml-4">
                        <label htmlFor="switch" className="flex items-center cursor-pointer">
                            <span className="mr-2">Switch to</span>
                            <input type="checkbox" id="switch" className="hidden" />
                            <div className="toggle-wrapper relative w-12 h-6 bg-gray-400 rounded-full border-2 border-gray-400">
                                <div className="toggle-block absolute w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
                            </div>
                        </label>
                    </div>
                </Dropdown>
            </div>

            {/* Search form */}
            {isSearchFormVisible && (
                <div className="bg-slate-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 border border-gray-300 rounded-md shadow-md">
                    <text className="text-3xl ml-20 my-16"> Search your stay</text>
                    <form onSubmit={handleSearchSubmit} >
                        <div>
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                placeholder="Anywhere"
                                value={location}
                                onChange={handleLocationChange}
                                className="mb-2 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            />
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="flex flex-col">
                                <label htmlFor="arrival">Arrival</label>
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
                                <label htmlFor="departure">Departure</label>
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
                        <div>
                            <label htmlFor="travelers">Travelers</label>
                            <input
                                type="number"
                                placeholder="Number of People"
                                value={numberOfPeople}
                                onChange={handleNumberOfPeopleChange}
                                className="mb-2 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            />
                        </div>
                        <button type="submit" className="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Search
                        </button>
                    </form>
                </div>
            )}
        </Navbar>
    );
};

export default GuestNavbar;
