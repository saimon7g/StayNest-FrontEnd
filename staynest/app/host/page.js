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
        </div>
    );
}
