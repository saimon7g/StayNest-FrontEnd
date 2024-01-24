// components/Navbar.js
import Link from 'next/link';
import React from 'react';
import '@/Components/style/HostNavbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link href="/">
      <div className="logo">Your Logo Here</div>
    </Link>
    <Link href="/host">
        {/* no anchor tag in nextjs 14 */}
        <div className="account-image">StayNest</div>

    </Link>
    <Link href="/account">
        <div className="logo">Your Account</div>
    </Link>
  </nav>
);

export default Navbar;
