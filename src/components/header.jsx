import React from 'react';
import { Phone, MessageSquare, Menu, User } from "lucide-react";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center ml-12">
          <a href="/" className="flex items-center">
            <img src="/logov2.png" alt="bookmyCabs" className="h-10" />
            <span className="ml-2 text-yellow-500 font-bold text-3xl">
              {/* Bookmy<span className="text-black">cab</span> */}
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="flex items-center text-gray-700 hover:text-yellow-500">
            <MessageSquare className="h-4 w-4 mr-2" />
            <span>WHATSAPP</span>
          </a>
          <a href="tel:+919999955712" className="flex items-center text-gray-700 hover:text-yellow-500">
            <Phone className="h-4 w-4 mr-2" />
            <span>+91 7535 9646 12</span>
          </a>
          <a href="tel:+918800550676" className="flex items-center text-gray-700 hover:text-yellow-500">
            <Phone className="h-4 w-4 mr-2" />
            <span>+91 8650 5434 23</span>
          </a>

          {/* Use Link for navigation */}
          <Link to="/signup" className="flex items-center text-gray-700 hover:text-yellow-500">
            <User className="h-4 w-4 mr-2" />
            <span>SIGNUP</span>
          </Link>
        </div>

        <button className="md:hidden text-gray-700">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
