// a not found page

import React from 'react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href="/guest">
                <div>Go back home</div>
            </Link>
        </div>
    )
}