//erro.js is to show some error message to user
'use client';
import React from 'react';
import Link from 'next/link';

export default function GuestError({error, reset}) {

    return (
        <div>
            <h1>404 Error - Page Not Found... Some error occured</h1>
            <Link href="/host">
                <div className="logo"> Go back Host Homepage</div>
            </Link>
        </div>
    );
}
// Compare this snippet from staynest/app/Guest/error.js:
// import React from 'react';
// import Link from 'next/link';
//
// export default function Error() {
//     return (
//         <div>
//             <h1>404 - Page Not Found</h1>
//             <Link href="/guest">
//                 <a>Go back home</a>
//             </Link>
//         </div>
//     );
// }
