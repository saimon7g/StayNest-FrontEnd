'use client';
import { useState } from 'react';
import { HiArrowSmRight, HiUser, HiPencilAlt, HiCollection, HiChatAlt2, HiCheckCircle, HiCog, HiCheck } from 'react-icons/hi';
import { Sidebar, Avatar } from 'flowbite-react';
import  BookingDetails  from '@/Components/GuestSide/BookinsDeatails';
import MyListings from '@/Components/HostSide/MyListings';
import EditProfile from '@/Components/GuestSide/EditProfile';
import Settings from '@/Components/GuestSide/Settings';
import PreviousBookings from '@/Components/GuestSide/PreviousBookings';
import NegotiationList from '@/Components/NegotiationList';
import NegotiationDetails from '@/Components/GuestSide/NegotiationDetails';
import ListingDetails from '@/Components/HostSide/ListingDetails';
import {getPropertiesbyType} from '@/API/UserDashBoard';
import HostNavBar from '@/Components/HostSide/HostNavbar';
import Footer from '@/Components/Footer';


function Dashboard() {

    const [selectedOption, setSelectedOption] = useState('EditProfile');
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [selectedPropertyId, setSelectedPropertyId] = useState(null);
    const [selectedNegotiationId, setSelectedNegotiationId] = useState(null);
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // State to manage login status
    

    // function to fetch data for selected option
    
   
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
            <HostNavBar isLoginFormVisible={isLoginFormVisible} setIsLoginFormVisible={setIsLoginFormVisible} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

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
                            <Sidebar.Item onClick={() => handleOptionClick('MyListings')} icon={HiCollection} active={selectedOption === 'MyListings'}>
                                My Listings
                            </Sidebar.Item>
                            <Sidebar.Item onClick={() => handleOptionClick('Negotiation')} icon={HiChatAlt2} active={selectedOption === 'Negotiation'}>
                                Negotiation
                            </Sidebar.Item>
                            <Sidebar.Item onClick={() => handleOptionClick('PreviousBookings')} icon={HiCheckCircle} active={selectedOption === 'PreviousBookings'}>
                                Upcoming Bookings
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
                {selectedOption === 'MyListings' && <MyListings handleOptionClick={handleOptionClick} setSelectedPropertyId={setSelectedPropertyId} />}
                {selectedOption === 'ListingDetails' && <ListingDetails propertyId={selectedPropertyId} handleOptionClick={handleOptionClick} />}
                {selectedOption === 'UpcomingBookings' && <UpcomingBookings handleOptionClick={handleOptionClick} setSelectedBookingId={setSelectedBookingId} />}
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

}

export default Dashboard;