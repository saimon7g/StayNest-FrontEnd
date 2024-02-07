import React from 'react';
import { RegistrationProvider } from '@/contexts/registrationContext';
import Navbar from '@/Components/HostNavbar';

export default function GuestLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <RegistrationProvider>
                <Navbar />
                {children}
                </RegistrationProvider>
            </body>
        </html>
    )
}

