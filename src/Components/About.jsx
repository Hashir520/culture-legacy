import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center py-4 px-4 md:px-8 uppercase text-black">
        {/* Logo */}
        <div className="w-1/5 text-center">
          <h1 className="text-sm md:text-lg text-red-800   font-extrabold cursor-pointer whitespace-nowrap">
            Heritage <span className="text-orange-500">Legacy</span>
            <span className="text-fuchsia-800"> By AI</span>
          </h1>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:hidden lg:flex w-2/4 justify-around">
          <Link to="/home" className="font-bold text-black ">
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
          <a href="#" className="font-bold text-black ">
            Contact
          </a>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden text-black font-bold cursor-pointer">
          &#9776;
        </div>
      </nav>
      {/* About Discription */}
      <div className="pt-20 sm:pt-40 text-center px-4 sm:px-8 lg:px-20">
        <h1 className="text-2xl sm:text-4xl font-bold  ">
          About Heritage Haven
        </h1>
        <p className="text-base sm:text-lg  pt-4">
          Discover how Heritage Haven celebrates cultural diversity through
          <br className="hidden sm:block" /> engaging programs and immersive
          experiences that connect communities.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row md:items-center px-6 md:px-10 space-y-10 md:space-y-0 md:space-x-5 my-10 md:my-20">
        <div className="w-full md:w-2/4 lg:px-20 ">
          <h1 className="text-xl md:text-5xl text-center lg:text-start md:text-start  font-bold  ">
            Our Commitment to Heritage
          </h1>
          <p className="text-base md:text-lg md:text-center lg:text-start  pt-4 md:pt-6">
            At Heritage Haven, we strive to preserve and celebrate cultural
            traditions through our diverse programs. Our mission is to engage
            the community and foster a deeper understanding of our rich
            heritage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center  gap-5">
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-2xl font-bold ">
                500 participants
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                We have successfully engaged over 500 participants in our
                programs, showcasing the community’s enthusiasm for cultural
                heritage.
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-2xl font-bold ">
                20 events
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                Our organization has hosted 20 events this year, bringing
                together people from all walks of life to celebrate our diverse
                cultures.
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-2xl font-bold  ">
                100 workshops
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                With 100 workshops conducted, we provide hands-on experiences
                that educate and inspire participants of all ages
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-2xl font-bold ">
                10 years
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                Heritage Haven has been a cornerstone of cultural education for
                10 years, dedicated to enriching our community’s understanding
                of heritage.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex md:justify-end justify-center items-center">
          <img
            src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_JO7QSzHI.webp"
            alt=""
            className="w-60 h-60 md:w-full md:h-96 md:ml-20 mb-10 md:mb-0 rounded-3xl object-cover
"
          />
        </div>
      </div>

      <div className="px-16 py-6 text-center">
        <h1 className="text-3xl font-bold ">Meet Our Team</h1>
        <p className="pt-4 text-lg ">
          Discover the passionate individuals dedicated to preserving our
          cultural heritage.
        </p>
      </div>

      {/* Cards */}

      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_6wT4Sg4x.webp"
              alt="Dr. Emily Carter"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Dr. Emily Carter
              </h3>
              <p className="text-gray-600">Executive Director</p>
              <p className="mt-2 text-gray-700">
                Dr. Carter has over 15 years of experience in cultural heritage
                management and is passionate about community education.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_xyOpu5PN.webp"
              alt="James Lee"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">James Lee</h3>
              <p className="text-gray-600">Program Coordinator</p>
              <p className="mt-2 text-gray-700">
                James specializes in organizing educational workshops and has a
                background in anthropology.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_WsPqBSkj.webp"
              alt="Maria Gonzalez"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Maria Gonzalez
              </h3>
              <p className="text-gray-600">Community Outreach Specialist</p>
              <p className="mt-2 text-gray-700">
                Maria works to engage the community and promote events, ensuring
                inclusivity in all programs.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_E4zHATmG.webp"
              alt="David Thompson"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                David Thompson
              </h3>
              <p className="text-gray-600">Cultural Historian</p>
              <p className="mt-2 text-gray-700">
                David brings a wealth of knowledge about local history and
                cultural practices to our programs.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 py-6  text-center">
        <h1 className="text-3xl font-bold ">Join Us Today</h1>
        <p className="pt-4 text-lg ">
          Get involved with our community programs and celebrate cultural
          heritage.
        </p>

        <div className="pt-4 pb-6">
          <Link to="/detail">
            <button className="border border-orange-600 px-6 rounded-md py-2 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-lg font-semibold">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-10 px-6 md:px-12  lg:px-28 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-gray-600">
          {/* Need Help Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Need Help?
            </h3>
            <p className="text-sm font-medium text-white mb-2">
              03218685617 (9am-10 pm, Mon-Sat)
            </p>
            <a
              href="mailto:hashirshahid676@gmail.com"
              className="text-sm text-white font-medium"
            >
              hashirshahid676@gmail.com
            </a>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Delivery &amp; Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Returns &amp; Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Payment Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Addresses
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl  text-purple-600">
                  Gift Card
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center  space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-white hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="" className="text-white hover:text-gray-700">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/ringuard01/"
                className="text-white hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className="text-white hover:text-gray-700">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="text-white hover:text-gray-700">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="text-white hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
