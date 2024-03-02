'use client';
import { useState } from 'react';
import { HiArrowSmRight, HiUser, HiPencilAlt, HiCollection, HiChatAlt2, HiCheckCircle, HiCog, HiCheck } from 'react-icons/hi';
import { Sidebar, Avatar } from 'flowbite-react';
import  BookingDetails  from '@/Components/GuestSide/BookinsDeatails';
import MyBookings from '@/Components/GuestSide/MyBookings';
import EditProfile from '@/Components/GuestSide/EditProfile';
import Settings from '@/Components/GuestSide/Settings';
import PreviousBookings from '@/Components/GuestSide/PreviousBookings';
import NegotiationList from '@/Components/GuestSide/NegotiationList';
import NegotiationDetails from '@/Components/GuestSide/NegotiationDetails';
import Navbar from "@/Components/GuestSide/GuestNavBar";
import Footer from "@/Components/Footer";


function Dashboard() {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); 

    const [selectedOption, setSelectedOption] = useState('EditProfile');
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [selectedNegotiationId, setSelectedNegotiationId] = useState(null);
    const [properties, setProperties] = useState(null);

   
   
    const handleOptionClick = (option) => {
        
        if(!loggedIn)
        {
            setIsLoginFormVisible(false);
            setIsLoginFormVisible(true);
            return;
        }
        setSelectedOption(option);
        
        
    };

    return (
        <div>
            <Navbar isLoginFormVisible={isLoginFormVisible} setIsLoginFormVisible={setIsLoginFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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
            {/* <textarea value={specialType} onChange={handleSpecialType} rows="1" cols="1" ></textarea> */}
            {/* Main Content */}
            <div className="flex-grow p-10 mt-10 relative">
                {/* Load components related to selected option */}
                {selectedOption === 'EditProfile' && <EditProfile />}
                {selectedOption === 'MyBookings' && <MyBookings handleOptionClick={handleOptionClick} setSelectedBookingId={setSelectedBookingId} />}
                {selectedOption === 'BookingDetails' && <BookingDetails bookingId={selectedBookingId} handleOptionClick={handleOptionClick} />}
                {selectedOption === 'Negotiation' && <NegotiationList handleOptionClick={handleOptionClick} setSelectedNegotiationId={setSelectedNegotiationId} />}
                {selectedOption === 'NegotiationDetails' && <NegotiationDetails negotiationId={selectedNegotiationId} handleOptionClick={handleOptionClick} />}
                {selectedOption === 'PreviousBookings' && <PreviousBookings handleOptionClick={handleOptionClick} setSelectedBookingId={setSelectedBookingId} />}
                {selectedOption === 'Settings' && <Settings />}
            </div>
        </div>
        <Footer />
        </div>
    );





    // Sample components related to sidebar options


}

export default Dashboard;