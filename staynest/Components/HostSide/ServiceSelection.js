'use client'
import React, { useState } from 'react';
import { Button, Modal, Card ,Checkbox} from 'flowbite-react'; // Import your modal, button, and card components
import Link from 'next/link';
import {useRouter} from 'next/navigation';
function ServiceSelectionModal({ isOpen, onClose }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const router = useRouter();

  // Function to toggle selection of a service
  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(item => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };
  const handleSubmit = () => {
   router.push('/host/step1/?services=' + selectedServices.join(','));
    console.log('Selected Services:', selectedServices);

    onClose();
    }
    

  return (
    <Modal show={isOpen} onClose={onClose}>
<Modal.Header className='bg-yellow-200 py-4 text-lg font-bold'>
  Select Services Offered
  <p className="text-sm text-gray-600">You can offer multiple</p>
</Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <Card bg="gray-100" padding="4" rounded="md">
            <label className="flex items-center">
              <Checkbox
                checked={selectedServices.includes('stay')}
                onChange={() => toggleService('stay')}
              />
              <span className="ml-2 text-lg font-bold">Accommodation Only (Stay)</span>
            </label>
            <p className="text-gray-600">
              Provide guests with independent stays without meals included.
            </p>
          </Card>
          <Card bg="gray-100" padding="4" rounded="md">
            <label className="flex items-center">
              <Checkbox
                checked={selectedServices.includes('stay_with_meal')}
                onChange={() => toggleService('stay_with_meal')}
              />
              <span className="ml-2 text-lg font-bold">Stay With Meal</span>
            </label>
            <p className="text-gray-600">
              Offer guests a comprehensive package with accommodation and all meals provided. Hosts are responsible for arranging meals based on guest selections.
            </p>
          </Card>
          <Card bg="gray-100" padding="4" rounded="md">
            <label className="flex items-center">
              <Checkbox
                checked={selectedServices.includes('paying_guest')}
                onChange={() => toggleService('paying_guest')}
              />
              <span className="ml-2 text-lg font-bold">Paying Guest</span>
            </label>
            <p className="text-gray-600">
              Immerse guests in local culture by providing accommodation along with authentic meals prepared by the host.
            </p>
          </Card>
        </div>
      </Modal.Body>
      <Modal.Footer className='flex justify-center space-x-8'>
  <Button onClick={onClose} className=" ml-4 bg-yellow-400 text-black hover:bg-red-300 focus:bg-red-300">Cancel</Button>
  {/*link to host/step1*/}
    
  <Button onClick={handleSubmit} className="bg-yellow-400 text-black hover:bg-red-300 focus:bg-red-300" >Start Listing</Button>
    
</Modal.Footer>



    </Modal>
  );
}

export default ServiceSelectionModal;
