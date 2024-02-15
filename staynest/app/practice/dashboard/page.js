'use client'
import { useState } from 'react';
import { HiArrowSmRight, HiUser, HiPencilAlt, HiCollection, HiChatAlt2, HiCheckCircle, HiCog, HiCheck } from 'react-icons/hi';
import { Sidebar, Avatar } from 'flowbite-react';

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState('EditProfile'); // State to track selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100">
        <Sidebar aria-label="User Dashboard">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {/* Sidebar Options */}
              <Sidebar.Item onClick={() => handleOptionClick('EditProfile')} icon={HiPencilAlt} active={selectedOption === 'EditProfile'}>
                Edit Profile
              </Sidebar.Item>
              <Sidebar.Item onClick={() => handleOptionClick('MyListings')} icon={HiCollection} active={selectedOption === 'MyListings'}>
                My Listings
              </Sidebar.Item>
              <Sidebar.Item onClick={() => handleOptionClick('ListAPlace')} icon={HiArrowSmRight} active={selectedOption === 'ListAPlace'}>
                List a Place
              </Sidebar.Item>
              <Sidebar.Item onClick={() => handleOptionClick('Negotiation')} icon={HiChatAlt2} active={selectedOption === 'Negotiation'}>
                Negotiation
              </Sidebar.Item>
              <Sidebar.Item onClick={() => handleOptionClick('ConfirmedRentals')} icon={HiCheckCircle} active={selectedOption === 'ConfirmedRentals'}>
                Confirmed Rentals
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
        <div><Avatar rounded />
        <HiCheck size={24} /></div>
        {/* Load components related to selected option */}
        {selectedOption === 'EditProfile' && <EditProfile />}
        {selectedOption === 'MyListings' && <MyListings />}
        {selectedOption === 'ListAPlace' && <ListAPlace />}
        {selectedOption === 'Negotiation' && <Negotiation />}
        {selectedOption === 'ConfirmedRentals' && <ConfirmedRentals />}
        {selectedOption === 'Settings' && <Settings />}
      </div>
    </div>
  );
}


// Sample components related to sidebar options
function EditProfile() {
  return <div>Edit Profile Component</div>;
}

function MyListings() {
  return <div>My Listings Component</div>;
}

function ListAPlace() {
  return <div>List a Place Component</div>;
}

function Negotiation() {
  return <div>Negotiation Component</div>;
}

function ConfirmedRentals() {
  return <div>Confirmed Rentals Component</div>;
}

function Settings() {
  return <div>Settings Component</div>;
}

export default Dashboard;
