// Payment.jsx
'use client';

import { useState } from 'react';

import { Modal, Card, Button ,Spinner } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
export function Payment({ openModal, setOpenModal, onPaymentComplete,negotiation}) {
    const [processing,setProcessing]=useState(false)

  

    const handlePayment = () => {
        // Simulate payment processing
        console.log('Processing payment...');
        console.log(negotiation);
      setProcessing(true)
        onPaymentComplete(negotiation);
        
        
    };

    return (
       
        <Modal show={openModal} size="md" popup onClose={()=>setOpenModal(false)}>
            <Modal.Header>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Payment</h3>
            </Modal.Header>
            <Modal.Body>
                <Card>
               {processing&&(
                <div>
                <Spinner aria-label="Extra large spinner example" size="xl" />
                <p>Please wait...</p>
                </div>
                
               )}    
                
                        <p className="text-gray-700 dark:text-gray-300">
                            Please click the button below to complete the payment.
                        </p>

                    
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handlePayment}>Complete payment</Button>
            </Modal.Footer>

            </Modal>
    );
};
