import React from 'react';
import { Modal , Button} from 'flowbite-react';





export function NegotiationModal( {data, openModal, setOpenModal} ) {

    
    return (
         <Modal show={openModal} size="xl" popup onClose={()=>setOpenModal(false)}>
        
           <Modal.Header className="bg-primary">
            <h2>Request for Negotiation</h2>
            </Modal.Header>
            <Modal.Body >
                <p>Request for negotiation has been sent to the host. You will be notified once the host responds to your request.</p>
                <p>Request for negotiation has been sent to the host. You will be notified once the host responds to your request.</p>
                
            </Modal.Body>
            <Modal.Footer className="bg-white">
                <Button 
                onClick={ () => setOpenModal(false) } >
                    Close
                    </Button>
            </Modal.Footer>

        </Modal>





    );







}

export default NegotiationModal;