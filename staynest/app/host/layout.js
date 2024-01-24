import React from 'react';
import Navbar from '@/Components/HostNavbar';

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

