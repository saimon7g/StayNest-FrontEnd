// a page.js file
//
import React from 'react';
import Link from 'next/link';
import GoogleMap from '@/Components/Maps';

export default function GuesrRootPage() {
    return (
        <div>
            <h1 className="title text-center">Welcome to StayNest</h1>
            <GoogleMap />
            {/* button using tailwind for next page */}
            <Link href="/host/step1">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </Link>
        </div>
    );
}
