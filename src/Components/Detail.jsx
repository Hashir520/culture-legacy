import React from "react";
import { Link } from "react-router-dom";
const Detail = () => {
  return (
    <>
      <header
        className="h-screen bg-cover bg-no-repeat bg-center sm:bg-cover md:bg-cover lg:bg-cover"
        style={{
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/07/00/38/11/360_F_700381104_6CJ1BAcf8ompTm7DXinkib9PSVbSRft9.jpg")',
        }}
      >
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center py-4 px-4 md:px-8 uppercase text-black">
          {/* Logo */}
          <div className="w-1/5 text-center">
            <h1 className="text-sm md:text-lg text-red-800  font-extrabold cursor-pointer whitespace-nowrap">
              Heritage <span className="text-orange-500">Legacy</span>
              <span className="text-fuchsia-800"> By AI</span>
            </h1>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:hidden lg:flex w-2/4 justify-around">
            <a className="font-bold text-black cursor-pointer">Home</a>
            <Link to="/about" className="font-bold text-black ">
              About Us
            </Link>
            <Link to="/hilights" className="font-bold text-black ">
           Community
            </Link>
            <Link to="/events" className="font-bold text-black ">
              Events
            </Link>
            <a href="#" className="font-bold text-black ">
              Contact
            </a>
          </div>
          {/* Hamburger Menu */}
          <div className="lg:hidden text-black font-bold cursor-pointer">
            &#9776;
          </div>
        </nav>
        <main className="h-[85vh] flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
          <section>
            <div className="bg-transparent">
              <div className="relative overflow-hidden h-16">
                <h3 className="text-lg md:text-5xl whitespace-nowrap tracking-wide drop-shadow-lg font-bold transform transition-transform duration-700 ease-in-out hover:-translate-y-4">
                  Welcome to Heritage Legacy
                </h3>
              </div>
              <p className="text-sm md:text-lg font-semibold mb-6 md:mb-4 leading-relaxed mx-auto max-w-screen-md">
                Discover the beauty of our diverse cultural heritage through
                engaging programs and events. Join us in celebrating traditions
                that connect us all. Explore our mission and be part of our
                vibrant community.
              </p>
            </div>

            <div className="space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center">
              <a
                href="#"
                className="px-4 py-2 md:px-6 md:py-3 rounded bg-white text-black text-xs md:text-sm font-medium uppercase tracking-wider transition duration-300 hover:bg-[#10b981] hover:text-white"
              >
                Learn More
              </a>
              <a
                href="transparent.html"
                className="px-4 py-2 md:px-6 md:py-3 rounded bg-[#10b981] text-white text-xs md:text-sm font-bold uppercase tracking-wider transition duration-300 hover:bg-white hover:text-black"
              >
                Sign Up Here
              </a>
            </div>
          </section>
        </main>
      </header>

      {/* Discription */}

     
  
    </>
  );
};

export default Detail;
