import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png'; // Adjusted path for the logo

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For handling the dropdown menu
  const location = useLocation(); // Hook to get the current route

  // Hook to detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 bg-cover bg-center bg-no-repeat py-4 px-4 transition-transform duration-300 ease-in-out ${scrollingDown ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ backgroundImage: `url('/assets/img/bg1.png')` }}
    >
      <div className="mx-4 lg:mx-12 flex justify-between items-center text-green-800">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="PlantWise Logo" className="h-10 lg:h-12" />
          <h1 className="text-2xl lg:text-3xl font-bold cursor-pointer">PlantWise</h1>
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="lg:hidden text-green-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
  className={`lg:flex ${
    isMenuOpen ? 'block' : 'hidden'
  } absolute lg:static top-full right-0 bg-white lg:bg-transparent z-10 lg:flex-row flex flex-col lg:space-x-6 shadow-md lg:shadow-none`}
>
  {[
    { to: '/Artikel', text: 'Artikel' },
    { to: '/Kamus', text: 'Kamus Tanaman' },
    { to: '/Scan', text: 'Scan Penyakit' },
    { to: '/Plan', text: 'My Plant' },
    { to: '/Komun', text: 'Komunitas' },
  ].map((link, index) => (
    <Link
      key={index}
      to={link.to}
      className={`block lg:inline-block py-2 px-3 lg:p-0 hover:text-green-500 ${
        location.pathname === link.to ? 'font-bold' : ''
      }`}
      style={{ whiteSpace: 'nowrap' }} // Ensures no line breaks in long text
    >
      {link.text}
    </Link>
  ))}
</nav>

      </div>
    </header>
  );
};

export default Navbar;
