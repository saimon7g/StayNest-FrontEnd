'use client'
import { useState } from 'react';
import { HiArrowSmRight, HiUser, HiPencilAlt, HiCollection, HiChatAlt2, HiCheckCircle, HiCog, HiCheck } from 'react-icons/hi';
import { Sidebar, Avatar } from 'flowbite-react';
import { getUpcomingBookings } from '@/API/UserDashBoard';
import { useEffect } from 'react';

function Dashboard() {
    const [selectedOption, setSelectedOption] = useState('EditProfile'); // State to track selected option
    const [user, setUser] = useState({ name: 'John Doe', email: 'abc@gmail.com' }); // Sample user data
    const [upcomingBookings, setUpcomingBookings] = useState([]); // Sample upcoming bookings data


    //fetch upcoming bookings
    useEffect(() => {
    }, []);

    // function to fetch data for selected option
    const fetchData = async (option) => {
        if (option === 'MyBookings') {
            // Fetch bookings data
            const data = await getUpcomingBookings();
            setUpcomingBookings(data.upcoming_bookings);
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        fetchData(option);
    };

    return (
        <div className="flex flex-row h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-100">
                <Sidebar aria-label="User Dashboard">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            {/*  side bar items */}
                            <Sidebar.Item onClick={() => handleOptionClick('EditProfile')} icon={HiPencilAlt} active={selectedOption === 'EditProfile'}>
                                Edit Profile
                            </Sidebar.Item>
                            <Sidebar.Item onClick={() => handleOptionClick('MyBookings')} icon={HiCollection} active={selectedOption === 'MyBookings'}>
                                My Bookings
                            </Sidebar.Item>
                            <Sidebar.Item onClick={() => handleOptionClick('Negotiation')} icon={HiChatAlt2} active={selectedOption === 'Negotiation'}>
                                Negotiation
                            </Sidebar.Item>
                            <Sidebar.Item onClick={() => handleOptionClick('PreviousBookings')} icon={HiCheckCircle} active={selectedOption === 'PreviousBookings'}>
                                Previous Bookings
                            </Sidebar.Item>
                            <Sidebar.Item onClick={() => handleOptionClick('Settings')} icon={HiCog} active={selectedOption === 'Settings'}>
                                Settings
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-10 mt-10 relative">
                {/* Load components related to selected option */}
                {selectedOption === 'EditProfile' && <EditProfile />}
                {selectedOption === 'MyBookings' && <MyBookings upcomingBookings={upcomingBookings} />}

                {selectedOption === 'Negotiation' && <Negotiation />}
                {selectedOption === 'PreviousBookings' && <PreviousBookings />}
                {selectedOption === 'Settings' && <Settings />}
            </div>
        </div>
    );
}


// Sample components related to sidebar options
function EditProfile() {
    return <div>Edit Profile Component</div>;
}

function MyBookings({ upcomingBookings }) {
    return (

        // {
        //     "upcoming_bookings": [
        //         {
        //             "booking_id": 1,
        //             "property_name": "Property Name",
        //             "check_in": "2021-12-12",
        //             "check_out": "2021-12-12",
        //             "booking_status": "Pending"
        //         },
        //         {
        //             "booking_id": 2,
        //             "property_name": "Property Name",
        //             "check_in": "2021-12-12",
        //             "check_out": "2021-12-12",
        //             "booking_status": "Pending"
        //         },
        //         {
        //             "booking_id": 3,
        //             "property_name": "Property Name",
        //             "check_in": "2021-12-12",
        //             "check_out": "2021-12-12",
        //             "booking_status": "Pending"
        //         }
        //     ]
        // };

        <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-5">My Bookings</h1>
            <div className="flex flex-col">
                {/* Display upcoming bookings */}
                {upcomingBookings.map((booking, index) => (
                    <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                        <div className="flex flex-row items-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <HiUser className="text-3xl text-gray-500" />
                            </div>
                            <div className="ml-5">
                                <h3 className="text-lg font-bold">{booking.property_name}</h3>
                                <p className="text-gray-500">Check-in: {booking.check_in}</p>
                                <p className="text-gray-500">Check-out: {booking.check_out}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">

                            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                                <HiArrowSmRight className="text-xl text-gray-500" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );

}



function Negotiation() {
    return <div>Negotiation Component</div>;
}

function PreviousBookings() {
    return <div>Previous Bookings Component</div>;
}

function Settings() {
    return <div>Settings Component</div>;
}

export default Dashboard;