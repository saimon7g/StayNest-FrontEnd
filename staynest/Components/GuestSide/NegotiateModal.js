import React, { useEffect,useState } from 'react';
import { Modal, Button, Card } from 'flowbite-react';
import { startNegotiationbyGuest } from '@/API/Negotiations';


export function NegotiationModal({ reservationData, openModal, setOpenModal }) {
    const [price, setPrice] = React.useState(0);
    const [negotiationStarted, setNegotiationStarted] =useState(false);
    const [negotiationData, setNegotiationData] = useState(null);

    useEffect( () => {
        setNegotiationData(reservationData);
        console.log(reservationData);   
        console.log(negotiationData);
    }, [reservationData]);




    // a async function to send the negotiation request to the server
    const sendNegotiationRequest = async () => {

        const data = {
            booking_details: {
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
                'status': "negotiation",
                'default_price': negotiationData.booking_details.total_price,
                'guest_price': price,
                'host_price': null,
                'negotiation_status': "offeredbyguest",


            },
            meals: {
                breakfast: negotiationData.meals.breakfast,
                lunch: negotiationData.meals.lunch,
                dinner: negotiationData.meals.dinner
            }
        };

        const response = await startNegotiationbyGuest(data);
        if (response && response.status === 200) {
            setNegotiationStarted(true);
        }
        console.log(response);
    }

    const print = () => {
        // console.log(breakfast);
        // console.log(lunch);
        // console.log(dinner);
        // console.log(cart);
        // console.log(negotiateModal);
        console.log(negotiationData);
      }




    return (
        <Modal show={openModal} size="xl" popup onClose={() => setOpenModal(false)}>

            <Modal.Header className="bg-primary">
                <h2>Request for Negotiation</h2>
            </Modal.Header>
            <Modal.Body >
                <div className="flex justify-center items-center h-screen">
                    <Card className="w-200 mx-auto p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="pr-4 border-r border-gray-400">
                                <h1 className="text-4xl font-bold mb-4">Reservation Summary</h1>
                                {negotiationData && (
                                    <>

                                        {/* <p>Booking Type: {negotiationData.booking_details && negotiationData.booking_details.booking_type}</p>
                                        <p>Check-In: {negotiationData.booking_details && negotiationData.booking_details.start_date}</p>
                                        <p>Check-Out: {negotiationData.booking_details && negotiationData.booking_details.end_date}</p>
                                        <p>Tax: {negotiationData.booking_details && negotiationData.booking_details.tax}</p>
                                        <p>Number of Guests: {negotiationData.booking_details && negotiationData.booking_details.number_of_guests}</p>
                                        <h2>Meals</h2>
                                        <p>Breakfast</p>
                                        <ul>
                                            {negotiationData.meals && negotiationData.meals.breakfast.map((meal, index) => (
                                                <li key={index}>
                                                    <p>Meal Name: {meal.meal_name}</p>
                                                    <p>Quantity: {meal.quantity}</p>
                                                    <p>Date: {meal.date}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>Lunch</p>
                                        <ul>
                                            {negotiationData.meals && negotiationData.meals.lunch.map((meal, index) => (
                                                <li key={index}>
                                                    <p>Meal Name: {meal.meal_name}</p>
                                                    <p>Quantity: {meal.quantity}</p>
                                                    <p>Date: {meal.date}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>Dinner</p>
                                        <ul>
                                            {negotiationData.meals && negotiationData.meals.dinner.map((meal, index) => (
                                                <li key={index}>
                                                    <p>Meal Name: {meal.meal_name}</p>
                                                    <p>Quantity: {meal.quantity}</p>
                                                    <p>Date: {meal.date}</p>
                                                </li>
                                            ))}
                                        </ul>

 */}

                                    </>
                                )}
                            </div>
                            <div className="pl-4">

                                    {reservationData && (
                                    <>
                                        <h1 className="text-2xl font-bold mb-4">Pricing</h1>
                                        <p>Base price: {reservationData.booking_details.base_price}</p>
                                        <p>Platform Fee: {reservationData.booking_details.platform_fee}</p>
                                        <p>Tax: {reservationData.booking_details.tax}</p>
                                        <p>Total meals price: {reservationData.booking_details.total_meals_price}</p>
                                        <p>Total price: {reservationData.booking_details.total_price}</p>
                                    </>
                                    )}

                                <Button className="ml-4" onClick={print}>   
                                    print
                                </Button>

                                {/* an input fiend for price input and a button named start negotiation */}
                                {/* if negotiation started false show this */}
                                {!negotiationStarted && <div className="flex justify-center">
                                    <input type="number" className="border-2 border-gray-400 p-2" placeholder="Enter your price" onChange={(e) => setPrice(e.target.value)} />
                                    <Button className="ml-4" onClick={sendNegotiationRequest}>Start Negotiation</Button>
                                </div>}
                                {/* if negotiation started true show this */}
                                {negotiationStarted && <div className="flex justify-center">
                                    <p>Negotiation Started</p>
                                </div>}
                            </div>
                        </div>
                    </Card>
                </div>

            </Modal.Body>
            <Modal.Footer className="flex justify-center">
                <Button
                    onClick={() => setOpenModal(false)} >
                    Close
                </Button>
            </Modal.Footer>

        </Modal>





    );







}

export default NegotiationModal;