import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center py-4 px-4 md:px-8 uppercase text-black">
      {/* Logo */}
      <div className="w-1/5 text-center">
        <h1 className="text-sm md:text-lg text-red-800   font-extrabold cursor-pointer whitespace-nowrap">
          Heritage <span className="text-orange-500">Legacy</span>
          <span className="text-fuchsia-800"> By AI</span>
        </h1>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:hidden lg:flex w-2/5 justify-around">
        <Link to="/" className="font-bold text-black ">
          Home
        </Link>
        <Link to="/about" className="font-bold text-black ">
          About Us
        </Link>
        <Link to="/hilights" className="font-bold text-black ">
          Community
        </Link>
        <Link to="/events" className="font-bold text-black ">
          Events
        </Link>
        <Link to="/contact" className="font-bold text-black ">
          Contact
        </Link>
      </div>
      {/* Hamburger Menu */}
      <div className="lg:hidden text-black font-bold cursor-pointer">
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
