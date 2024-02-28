// a page.js file
//

'use client';
import React from 'react';
import Link from 'next/link';
import GoogleMap from '@/Components/Maps';
import {useState} from 'react';
import { Modal,Button } from 'flowbite-react';
import ServiceSelectionModal from '@/Components/HostSide/ServiceSelection';

export default function GuesrRootPage() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = () => {
        setModalOpen(true);
    }

    
    return (
        <div>
            <h1 className="title text-center">Welcome to StayNest</h1>
            <GoogleMap />
            {/* button using tailwind for next page */}
            
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                    Get Started
                </Button>
            
            {/*open Modal */}
            <ServiceSelectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}
