import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const dropdownRef = useRef(null);
  const { isDay, toggleTheme } = useTheme(); // Use the context

  // Function to handle click outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className={`p-4 flex items-center justify-between ${isDay ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {/* Logo Section */}
      <div>
        <Link to="/">
          <div className="h-8 w-auto italic font-bold text-4xl text-gray-800">Code Mastery</div>
        </Link>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden block focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-8 h-8 flex flex-col justify-between items-center">
          <span className="block w-8 h-1 bg-current"></span>
          <span className="block w-8 h-1 bg-current"></span>
          <span className="block w-8 h-1 bg-current"></span>
        </div>
      </button>

      {/* Main Navigation Links for desktop */}
      <ul className="hidden md:flex space-x-4 gap-4 ">
        <li>
          <Link to="/" className="hover:border border-black p-2 hover:text-black hover:bg-white">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:border border-black p-2 hover:text-black hover:bg-white">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:border border-black p-2 hover:text-black hover:bg-white">Services</Link>
        </li>
        <li>
          <Link to="/blog" className="hover:border border-black p-2 hover:text-black hover:bg-white">Blog</Link>
        </li>
        <li>
          <Link to="/courses" className="hover:border border-black p-2 hover:text-black hover:bg-white">Courses</Link>
        </li>
        <li>
          <Link to="/contact" className=" hover:border border-black p-2 hover:text-black hover:bg-white">Contact</Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-gray-500" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-gray-500" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-gray-500" />
        </a>
      </div>

      {/* Mobile Menu - only shown when the hamburger is clicked */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-gray-200 shadow-lg rounded-md flex flex-col space-y-4 p-4 z-50">
          <li>
            <Link to="/" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}

      {/* Day/Night Toggle Switch */}
      <div className="hidden md:flex items-center">
        <span className="mr-2 text-sm">{isDay ? 'Day' : 'Night'}</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={isDay} onChange={toggleTheme} className="sr-only" />
          <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner"></div>
          <div className={`absolute left-0 top-0 w-5 h-5 bg-blue-500 rounded-full shadow transform transition-transform ${isDay ? 'translate-x-0' : 'translate-x-5'}`}></div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
