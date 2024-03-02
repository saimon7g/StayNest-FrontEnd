'use client';
import { useState, useEffect } from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/StaticImage/logo1.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiSearch, FiBell } from 'react-icons/fi'; // Import notification icon
import { formatDate } from '../utills';
import LoginForm from './LoginForm';
import SignupForm from '../SignupForm';
import Link from 'next/link';
import { getUser, logout } from '@/API/auth';

import SearchUsingMap from './SearchUsingMap';
// const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
//     const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

const GuestNavbar = ({ isSearchFormVisible, setIsSearchFormVisible, loggedIn, setLoggedIn }) => {
    const router = useRouter();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [location, setLocation] = useState('');
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [signupFormVisible, setSignupFormVisible] = useState(false);
    const [user, setUser] = useState(null);
    const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
    const [isMapVisible, setIsMapVisible] = useState(false);

    useEffect(() => {
        // Fetch the user data from the server
        const fetchUser = async () => {
            console.log('Fetching user...');
            try {
                const response = await getUser();
                setUser(response);
                setLoggedIn(true);

            } catch (error) {
                console.error('Get user failed:', error);
                setLoggedIn(false);
            }
        };

        fetchUser();
    }
        , [loggedIn]);



    const handleLogout = async () => {
        try {
            await logout();
            setLoggedIn(false);
            setIsLoginFormVisible(true);
        } catch (error) {
            console.logout('Logout failed:', error);
        }
    }
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

    const switchToHostMode = () => {
        router.push('/host');
    }

    return (
        <Navbar fluid rounded className="bg-cyan-700">
            {/* Logo on the left */}
            <Navbar.Brand href="/guest">
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
                {loggedIn ? ( // Check if the user is logged in
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Image src={user?.profile_picture} alt="avatar" width={40} height={40} className="rounded-full" />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Link href="/guest/dashboard">
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Link>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                        {/* Switch to toggle between host and guest modes */}
                        <div className="flex items-center ml-4">
                            <label htmlFor="switch" className="flex items-center cursor-pointer">
                                <span className="mr-2" onClick={switchToHostMode}>Switch to Host Mode</span>
                            </label>
                        </div>
                    </Dropdown>
                ) : (
                    <>
                        <Button onClick={() => setIsLoginFormVisible(true)}>Log In</Button>
                        {/* Render the LoginForm component conditionally */}
                        {isLoginFormVisible && <LoginForm isOpen={isLoginFormVisible} onClose={() => setIsLoginFormVisible(false)}
                            setLoginFormVisible={setIsLoginFormVisible} setLoggedIn={setLoggedIn} setSignupFormVisible={setSignupFormVisible} />}
                        {signupFormVisible && <SignupForm isOpen={signupFormVisible} onClose={() => setSignupFormVisible(false)}
                            setSignupFormVisible={setSignupFormVisible} setLoggedIn={setLoggedIn} />}
                    </>
                )}
            </div>

            {/* Search form */}
            {isSearchFormVisible && (
                <div className="bg-slate-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 border border-gray-300 rounded-md shadow-md">
                    <text className="text-3xl ml-20 my-16"> Search your stay</text>
                    <form onSubmit={handleSearchSubmit} >
                        <div>
                            <label htmlFor="location">Location</label>
                            <Button onClick={() => setIsMapVisible(true)}>Search using map</Button>
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
                        {/* add a close button  on the right bottom corner */}
                        <button onClick={() => setIsSearchFormVisible(false)} className="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Close
                        </button>
                    </form>
                </div>
            )}

            {/* Search using map */}
            {isMapVisible && <SearchUsingMap setLatlng={setLatlng} isMapVisible={isMapVisible} setIsMapVisible={setIsMapVisible} />}
        </Navbar>
    );
};

export default GuestNavbar;
