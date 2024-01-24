// components/Navbar.js
'use client';
import Link from 'next/link';
import { useState } from 'react';
import '@/Components/style/navBar.css';


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
            <img src="logo.png" alt="Staynest" />
        </div>

      </Link>
      <form onSubmit={handleSubmit} className="search-bar">
        <input type="text" placeholder="Search..." value={searchQuery} onChange={handleChange} />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="account-image">
        <img src="your-account-image.png" alt="Your Account" />
      </div>
    </nav>
  );
};

export default Navbar;
