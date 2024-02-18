// Payment.jsx
'use client';

import { useState } from 'react';
import { Modal, Card, Button } from 'flowbite-react';

export function Payment({ openModal, setOpenModal, onPaymentComplete }) {
  

    const handlePayment = () => {
        // Simulate payment processing
      
        onPaymentComplete();
        setOpenModal(false);
    };

    return (
        <div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Make Payment</Modal.Header>
            <Modal.Body>
                <Card>
                    
                        <p>Please confirm your payment to proceed.</p>
                    
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={handlePayment}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                   
                >
                    
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};
