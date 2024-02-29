import React, { useEffect, useState } from 'react';
import { Modal, Button, Card } from 'flowbite-react';
import { startNegotiationbyGuest } from '@/API/Negotiations';
import { TextInput } from 'flowbite-react';

export function NegotiationModal({ reservationData, openModal, setOpenModal }) {
    const [price, setPrice] = useState(0);
    const [negotiationStarted, setNegotiationStarted] = useState(false);
    const [negotiationData, setNegotiationData] = useState(null);

    useEffect(() => {
        setNegotiationData(reservationData);
    }, [reservationData]);

    // Function to send the negotiation request to the server
    const sendNegotiationRequest = async () => {
        const data = {
            
                'property_id': negotiationData.booking_details.property_id,
                'guest_id': negotiationData.booking_details.guest_id,
                'host_id': negotiationData.booking_details.host_id,
                'booking_type': negotiationData.booking_details.booking_type,
                'start_date': negotiationData.booking_details.start_date,
                'end_date': negotiationData.booking_details.end_date,
                'base_price': negotiationData.booking_details.base_price,
                'platform_fee': negotiationData.booking_details.platform_fee,
                'tax': negotiationData.booking_details.tax,
                'number_of_guests': negotiationData.booking_details.number_of_guests,
                'status': "guest_proposed",
                'default_price': negotiationData.booking_details.total_price,
                'guest_price': price,
                'host_price': null,
                'negotiation_status': "offeredbyguest",
            
            
                breakfast: negotiationData.meals.breakfast,
                lunch: negotiationData.meals.lunch,
                dinner: negotiationData.meals.dinner
            
        };

        const response = await startNegotiationbyGuest(data);
        if (response && response.status === 200) {
            setNegotiationStarted(true);
        }
        console.log(response);
    }

    return (
        <Modal show={openModal} size="xl" popup onClose={() => setOpenModal(false)}>

            <Modal.Header className="bg-primary">
                <h2>Request for Negotiation</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="flex justify-center ">
                    <Card className="w-200 mx-auto p-4">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">Fare Summary</h1>
                                {negotiationData && (
                                    <>
                                        <p>Base price: {negotiationData.booking_details.base_price}</p>
                                        <p>Platform Fee: {negotiationData.booking_details.platform_fee}</p>
                                        <p>Tax: {negotiationData.booking_details.tax}</p>
                                        <p>Total meals price: {negotiationData.booking_details.total_meals_price}</p>
                                        <p>Total price: {negotiationData.booking_details.total_price}</p>
                                    </>
                                )}
                            </div>
                            <div>
                                {!negotiationStarted && (
                                    <div className="flex flex-col items-bottom ">
                                        <TextInput type='number' placeholder='Propose a price' onChange={(e) => setPrice(e.target.value)} />
                                        <Button className="mt-4" onClick={sendNegotiationRequest}>Start Negotiation</Button>
                                    </div>
                                )}
                                {negotiationStarted && <p className="text-green-500">Negotiation Started</p>}
                            </div>
                        </div>
                    </Card>
                </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-center">
                <Button onClick={() => setOpenModal(false)}>Close</Button>
            </Modal.Footer>

        </Modal>
    );
}

export default NegotiationModal;
