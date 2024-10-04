import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleServicesDropdown = () => setShowServicesDropdown(!showServicesDropdown);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      {/* Navigation Section */}
      <header className="flex justify-between items-center p-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 px-10">
          <Link href="#" className="hover:text-gray-400">
            Work
          </Link>
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="hover:text-gray-400 focus:outline-none flex items-center">
              Services
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  showServicesDropdown ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showServicesDropdown && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem">
                    Service 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem">
                    Service 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem">
                    Service 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-gray-400">
            Blogs
          </Link>
        </nav>

        {/* Logo */}
        <div className="w-28 h-10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={112}
            height={60}
            className="object-contain"
            quality={100}
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4 px-10">
          <Link href="#" className="hover:text-gray-400">
            About Us
          </Link>
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Book intro call — it's free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-black text-white p-4">
          <Link href="#" className="block py-2">
            Work
          </Link>
          <button
            onClick={toggleServicesDropdown}
            className="w-full text-left py-2 flex justify-between items-center">
            Services
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                showServicesDropdown ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showServicesDropdown && (
            <div className="pl-4">
              <Link href="#" className="block py-2">
                Service 1
              </Link>
              <Link href="#" className="block py-2">
                Service 2
              </Link>
              <Link href="#" className="block py-2">
                Service 3
              </Link>
            </div>
          )}
          <Link href="#" className="block py-2">
            Blogs
          </Link>
          <Link href="#" className="block py-2">
            About Us
          </Link>
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 mt-2 w-full">
            Book intro call — it's free
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
