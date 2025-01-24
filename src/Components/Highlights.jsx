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
const Highlights = () => {
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
      <div className="pt-20 sm:pt-40 text-center px-4 sm:px-8 lg:px-20">
        <h1 className="text-2xl sm:text-4xl font-bold  ">
          The Power of Community Voices
        </h1>
        <p className="text-base sm:text-lg pt-4">
          At Heritage Haven, we believe that the voices of our community are
          vital in preserving and promoting cultural heritage. Through
          testimonials,
          <br className="hidden sm:block" /> we gain insights into the impact of
          our programs and events, helping us to continuously improve and
          celebrate our diverse history together.
        </p>
      </div>

      <div className="px-[25%] pt-10">
        <img
          src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_pLtNSpOU.webp"
          alt=""
        />
      </div>

      {/* Community Cards  */}

      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">
            Community Voices
          </h2>
          <p className="text-center text-xl mb-8">
            Hear from those who cherish our cultural heritage and programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                Heritage Haven's workshops have inspired my art and deepened my
                understanding of cultural traditions.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_BgWdkQBD.webp"
                  alt="Emily Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Emily Johnson</h4>
                  <p className="text-gray-600 text-sm">Local Artist</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                The educational programs at Heritage Haven are invaluable for my
                students, making history come alive.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_0oOFSWvf.webp"
                  alt="Michael Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Michael Smith</h4>
                  <p className="text-gray-600 text-sm">History Teacher</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                The Annual Heritage Festival was a fantastic experience! I loved
                the diverse performances and food.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_2RaUVpAi.webp"
                  alt="Sarah Lee"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Lee</h4>
                  <p className="text-gray-600 text-sm">Festival Attendee</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                Volunteering at Heritage Haven has been rewarding. It's great to
                see the community come together.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_9WQoy0Vp.webp"
                  alt="David Brown"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">David Brown</h4>
                  <p className="text-gray-600 text-sm">Community Volunteer</p>
                </div>
              </div>
            </div>

            <div className="bg-white  p-6 shadow-md rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                I appreciate how Heritage Haven promotes cultural understanding
                through engaging events.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_eQh8OPie.webp"
                  alt="Laura White"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Laura White</h4>
                  <p className="text-gray-600 text-sm">Cultural Enthusiast</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                My kids loved the cultural crafts workshop! It was a fun and
                educational experience for the whole family.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_DLmG8Fel.webp"
                  alt="James Wilson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">James Wilson</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* flex big image  */}

      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="mb-[75%]">
              <h2 className="text-4xl font-bold mb-4">
                The Impact of Your Voice
              </h2>
              <p className="text-gray-600 mb-6">
                Discover how our community members have been touched by the
                programs and events at Heritage Haven. Their voices reflect the
                profound impact of our mission to preserve and celebrate
                cultural heritage.
              </p>
              <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_tLYrYwcB.webp"
                  alt="Emily Johnson"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-800 mb-2">
                    Heritage Haven's workshops have deepened my understanding of
                    our local history. The events are well-organized and truly
                    engaging.
                  </p>
                  <h4 className="font-bold text-gray-900">Emily Johnson</h4>
                  <p className="text-gray-600 text-sm">Local Historian</p>
                </div>
              </div>
              {/* Pagination Dots */}
              <div className="flex justify-start mt-4 space-x-2">
                <button className="w-3 h-3 bg-gray-400 rounded-full" />
                <button className="w-3 h-3 bg-gray-800 rounded-full" />
                <button className="w-3 h-3 bg-gray-400 rounded-full" />
              </div>
            </div>
            {/* Image Section */}
            <div>
              <img
                src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_t3J2kz4n.webp"
                alt="Community Event"
                className="w-full rounded-3xl shadow-md"
              />
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

export default Highlights;
