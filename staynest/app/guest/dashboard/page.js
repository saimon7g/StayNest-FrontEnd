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


function Dashboard() {

    const [selectedOption, setSelectedOption] = useState('EditProfile');
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [selectedNegotiationId, setSelectedNegotiationId] = useState(null);
    const [properties, setProperties] = useState(null);

   
   
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        
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
    );





    // Sample components related to sidebar options


}



// function Negotiation() {
//     return (
//         <div className="flex flex-col">
//             <h1 className="text-2xl font-bold mb-5">All Negotiations</h1>
//             <div className="flex flex-col">
//                 {/* Display negotiations */}
//                 {negotiations.map((negotiation, index) => (
//                     <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
//                         <div className="flex flex-row items-center">
//                             <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                                 <HiUser className="text-3xl text-gray-500" />
//                             </div>
//                             <div className="ml-5">
//                                 <h3 className="text-lg font-bold">{negotiation.property_name}</h3>
//                                 <p className="text-gray-500">Property Type: {negotiation.booking_type}</p>
//                                 <p className="text-gray-500">Negotiation Status: {negotiation.negotiation_status}</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-row items-center">
//                             <button className="flex items-center text-blue-500" onClick={() => handleOptionClick('BookingDetails')} icon={HiCog} active={selectedOption === 'BookingDetails'}>
//                                 Details
//                                 <HiArrowSmRight className="ml-2" />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>





//     );
// }

// function PreviousBookings({ previousBookings }) {
//     return (
//         <div className="flex flex-col">
//             <h1 className="text-2xl font-bold mb-5">All Previous Bookings</h1>
//             <div className="flex flex-col">
//                 {/* Display previous bookings */}
//                 {previousBookings.map((booking, index) => (
//                     <div key={index} className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-5">
//                         <div className="flex flex-row items-center">
//                             <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                                 <HiUser className="text-3xl text-gray-500" />
//                             </div>
//                             <div className="ml-5">
//                                 <h3 className="text-lg font-bold">{booking.property_name}</h3>
//                                 <p className="text-gray-500">Check-in: {booking.check_in}</p>
//                                 <p className="text-gray-500">Check-out: {booking.check_out}</p>
//                                 <p className="text-gray-500">Type: {booking.booking_type}</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-row items-center">
//                             <button className="flex items-center text-blue-500" onClick={() => handleOptionClick('BookingDetails')} icon={HiCog} active={selectedOption === 'BookingDetails'}>
//                                 Details
//                                 <HiArrowSmRight className="ml-2" />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
export default Dashboard;