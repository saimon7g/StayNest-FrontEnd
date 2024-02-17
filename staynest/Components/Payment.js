// Payment.jsx
'use client';

import { useState } from 'react';
import { Modal, Card, Button } from 'flowbite-react';

export function Payment({ openModal, setOpenModal, onPaymentComplete }) {
    const [paymentProcessing, setPaymentProcessing] = useState(false);

    const handlePayment = () => {
        // Simulate payment processing
        setPaymentProcessing(true);
        setTimeout(() => {
            setPaymentProcessing(false);
            onPaymentComplete(); // Notify parent component that payment is complete
        }, 2000);
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
                    disabled={paymentProcessing}
                >
                    {paymentProcessing ? 'Processing...' : 'Confirm Payment'}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};
