'use client'
import { useState } from 'react';
import { HiArrowSmRight, HiUser, HiPencilAlt, HiCollection, HiChatAlt2, HiCheckCircle, HiCog, HiCheck } from 'react-icons/hi';
import { Sidebar, Avatar } from 'flowbite-react';
import { getUpcomingBookings } from '@/API/UserDashBoard';
import { BookingDetails } from '@/Components/GuestSide/BookinsDeatails';
import { getPreviousBookings } from '@/API/UserDashBoard';
import { getNegotiations } from '@/API/UserDashBoard';


function Dashboard() {

    const [selectedOption, setSelectedOption] = useState('EditProfile');
    const [upcomingBookings, setUpcomingBookings] = useState([]);
    const [previousBookings, setPreviousBookings] = useState([]);
    const [negotiations, setNegotiations] = useState([]);
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [selectednegotiationId, setSelectedNegotiationId] = useState(null);


    // function to fetch data for selected option
    const fetchData = async (option) => {
        if (option === 'MyBookings') {
            // Fetch bookings data
            const response = await getUpcomingBookings();
            setUpcomingBookings(response.data.upcoming_bookings);
        }
        else if (option === 'PreviousBookings') {
            // Fetch previous bookings data
            const response = await getPreviousBookings();
            setPreviousBookings(response.data.previous_bookings);
        }
        else if (option === 'Negotiation') {
            // Fetch negotiation data
            const response = await getNegotiations();
            setNegotiations(response.data.negotiations);
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
                {selectedOption === 'BookingDetails' && <BookingDetails bookingId={selectedBookingId} />}
                {selectedOption === 'Negotiation' && <Negotiation />}
                {selectedOption === 'PreviousBookings' && <PreviousBookings previousBookings={previousBookings} />}
                {selectedOption === 'Settings' && <Settings />}
            </div>
        </div>
    );





    // Sample components related to sidebar options
    function EditProfile() {
        return <div>Edit Profile Component</div>;
    }

    function MyBookings({ upcomingBookings }) {
        return (
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">All Upcoming Bookings</h1>
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
                                    <p className="text-gray-500">Type: {booking.booking_type}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <button className="flex items-center text-blue-500" onClick={() => handleOptionClick('BookingDetails')} icon={HiCog} active={selectedOption === 'BookingDetails'}>
                                    Details
                                    <HiArrowSmRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        );

    }



    function Negotiation() {
        return (
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">All Negotiations</h1>
                <div className="flex flex-col">
                    {/* Display negotiations */}
                    {negotiations.map((negotiation, index) => (
                        <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                            <div className="flex flex-row items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <HiUser className="text-3xl text-gray-500" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold">{negotiation.property_name}</h3>
                                    <p className="text-gray-500">Property Type: {negotiation.booking_type}</p>
                                    <p className="text-gray-500">Negotiation Status: {negotiation.negotiation_status}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <button className="flex items-center text-blue-500" onClick={() => handleOptionClick('BookingDetails')} icon={HiCog} active={selectedOption === 'BookingDetails'}>
                                    Details
                                    <HiArrowSmRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>





        );
    }

    function PreviousBookings({ previousBookings }) {
        return (
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-5">All Previous Bookings</h1>
                <div className="flex flex-col">
                    {/* Display previous bookings */}
                    {previousBookings.map((booking, index) => (
                        <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
                            <div className="flex flex-row items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <HiUser className="text-3xl text-gray-500" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold">{booking.property_name}</h3>
                                    <p className="text-gray-500">Check-in: {booking.check_in}</p>
                                    <p className="text-gray-500">Check-out: {booking.check_out}</p>
                                    <p className="text-gray-500">Type: {booking.booking_type}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <button className="flex items-center text-blue-500" onClick={() => handleOptionClick('BookingDetails')} icon={HiCog} active={selectedOption === 'BookingDetails'}>
                                    Details
                                    <HiArrowSmRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    function Settings() {
        return <div>Settings Component</div>;
    }









}


export default Dashboard;