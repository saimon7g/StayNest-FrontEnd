// components/Navbar.js
'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/StaticImage/Meta_Inc._logo.jpg';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search query submission here
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">
            <Image src={Logo} alt="logo" width={100} height={100} />
        </div>

      </Link>
      <form onSubmit={handleSubmit} className="search-bar">
        <input type="text" placeholder="Search..." value={searchQuery} onChange={handleChange} />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <Link href="/account">
      
      <div className="account-image">  Your Account
        <Image src={Logo} alt="logo" width={100} height={100} />
      </div>
      </Link>
    </nav>
  );
};

export default Navbar;
