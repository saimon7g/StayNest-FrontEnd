import React from 'react';
import Navbar from '@/Components/HostNavbar';

export default function GuestLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

