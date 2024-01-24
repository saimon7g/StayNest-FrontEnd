// a page.js file
//
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Page</h1>
            <Link href="/guest">
                <div>Go back home</div>
            </Link>
        </div>
    );
}
