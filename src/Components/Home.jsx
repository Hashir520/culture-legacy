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
const Home = () => {
  return (
    <>
      <header
        className="h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/0/09/Badshahi_Mosque_Sunset.jpg")',
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
            <div className="pt-36">
              <div className="relative overflow-hidden h-16">
                <h3 className="text-2xl md:text-5xl  whitespace-nowrap tracking-wide drop-shadow-lg font-bold transform transition-transform duration-700 ease-in-out hover:-translate-y-4">
                  Welcome to Heritage Legacy
                </h3>
              </div>
              <p className="text-sm md:text-lg mb-6 md:mb-4 leading-relaxed mx-auto max-w-screen-md">
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
      <div className="flex flex-col-reverse md:flex-row px-6 md:px-10 space-y-10 md:space-y-0 md:space-x-5 my-10 md:my-20">
        <div className="w-full md:w-2/4">
          <h1 className="text-2xl md:text-5xl  font-bold  ">
            Our Heritage, Our Mission
          </h1>
          <p className="text-base md:text-lg  pt-4 md:pt-6">
            At Heritage Haven, we are dedicated to preserving cultural
            traditions through community engagement and education. Our
            passionate team works tirelessly to create inclusive experiences
            that celebrate our diverse history and foster appreciation for
            cultural heritage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center  gap-5">
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-3xl font-bold ">
                2024 years
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                Since our founding, we have been committed to cultural
                preservation and education.
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-3xl font-bold ">
                150 events
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                We have organized over 150 events that bring the community
                together to celebrate cultural diversity.
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-3xl font-bold  ">
                5000 participants
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                Since our founding, we have been committed to cultural
                preservation and education.
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-3xl font-bold ">
                4 core values
              </h1>
              <p className="text-base md:text-lg  pt-4 md:pt-6">
                Our core values include Inclusivity, Community Engagement,
                Cultural Preservation, and Education.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6 flex justify-center md:justify-end items-center">
          <img
            src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_keNqAta1.webp"
            alt=""
            className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center px-4 md:w-3/4 lg:w-1/2 mx-auto pt-10">
        <h1 className="text-3xl md:text-5xl font-bold  text-center">
          Explore Our Engaging Community Programs
        </h1>
        <p className="text-base md:text-lg  text-gray-600 pt-10 text-justify">
          Join us at Heritage Haven for a variety of community programs and
          educational workshops designed to celebrate cultural heritage. Our
          offerings provide unique opportunities to learn, engage, and
          appreciate diverse traditions. Discover how you can participate and
          contribute to preserving our rich history.
        </p>
      </div>
      {/* Cards */}
      <div className="flex items-center justify-center min-h-full pt-10  bg-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-7xl w-full">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_BYZmNiKS.webp"
              alt="Image 1"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-semibold mb-2">
                Traditional Crafts Workshop
              </h5>
              <p className="text-sm md:text-lg  text-gray-600">
                Participants immerse themselves in creating traditional crafts,
                fostering creativity and cultural appreciation. This hands-on
                experience is perfect for all ages, promoting cultural
                understanding.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_HOApCtLm.webp"
              alt="Image 2"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-semibold mb-2">
                Annual Heritage Festival
              </h5>
              <p className="text-sm md:text-lg  text-gray-600">
                Experience the vibrant celebration of cultural diversity at our
                Annual Heritage Festival. Enjoy performances, food stalls, and
                workshops that highlight various cultural traditions.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_pHNsdKIk.webp"
              alt="Image 3"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Cultural History Workshop
              </h5>
              <p className="text-sm md:text-lg  text-gray-600">
                Our Cultural History Workshop offers an engaging learning
                experience, where participants gain insights into diverse
                cultural traditions and their historical significance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center px-5 md:w-3/4 lg:w-1/2 mx-auto pt-10">
        <h1 className="text-4xl md:text-5xl font-bold  text-center">
          Upcoming Heritage Festivals and Events
        </h1>
        <p className="text-base md:text-lg  text-gray-600 pt-10 text-justify">
          Join us at Heritage Haven for a series of vibrant festivals
          celebrating diverse cultural traditions. Our events offer a unique
          opportunity to engage with history through performances, workshops,
          and culinary experiences. Discover the richness of our shared heritage
          and connect with the community in meaningful ways. Don’t miss out on
          these enriching experiences!
        </p>
      </div>
      {/* Cards */}
      <div className="flex items-center justify-center bg-white py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-7xl w-full">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_UZLhnXSA.webp"
              alt="Image 1"
              className="w-full h-48 md:h-64 lg:h-72 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-semibold mb-2">
                Experience Cultural Diversity
              </h5>
              <p className="text-sm md:text-lg  text-gray-600">
                Immerse yourself in the lively atmosphere of our heritage
                festivals, where cultural diversity is celebrated through music,
                dance, and art. A perfect family outing!
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_178SwVYS.webp"
              alt="Image 2"
              className="w-full h-48 md:h-64 lg:h-72 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-semibold mb-2">
                Hands-On Cultural Workshops
              </h5>
              <p className="text-sm md:text-lg  text-gray-600">
                Engage in interactive workshops that teach traditional crafts
                and skills. Perfect for all ages, these sessions foster
                creativity and cultural understanding.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_MFpxSKDL.webp"
              alt="Image 3"
              className="w-full h-48 md:h-64 lg:h-72 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Taste the World
              </h5>
              <p className="text-sm md:text-lg  text-gray-600">
                Savor the flavors of diverse cultures at our food stalls, where
                traditional dishes are prepared with love and authenticity. A
                culinary journey awaits!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="bg-black py-10 px-6 md:px-12 lg:px-28 text-center">
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
                <a href="#" className="text-2xl font-serif text-purple-600">
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

export default Home;
