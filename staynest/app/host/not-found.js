// a not found page

import React from 'react'
import Link from 'next/link'

export default function GuestNotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href="/host">
                <div>Go back to Host Homepage</div>
            </Link>
        </div>
    )
}