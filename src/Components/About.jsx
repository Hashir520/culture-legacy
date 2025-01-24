import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center py-4 px-4 md:px-8 uppercase text-black">
        {/* Logo */}
        <div className="w-1/5 text-center">
          <h1 className="text-sm md:text-lg text-red-800 italic font-serif font-extrabold cursor-pointer whitespace-nowrap">
            Heritage <span className="text-orange-500">Legacy</span>
            <span className="text-fuchsia-800"> By AI</span>
          </h1>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:hidden lg:flex w-2/4 justify-around">
          <a href="" className="font-bold text-black italic">
            Home
          </a>
          <Link to="/about" className="font-bold text-black italic">
            About Us
          </Link>
          <Link to="/hilights" className="font-bold text-black italic">
            Culture Highlights
          </Link>
          <Link to="/events" className="font-bold text-black italic">
            Events
          </Link>
          <a href="#" className="font-bold text-black italic">
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
        <h1 className="text-2xl sm:text-4xl font-bold font-serif italic">
          About Heritage Haven
        </h1>
        <p className="text-base sm:text-lg italic pt-4">
          Discover how Heritage Haven celebrates cultural diversity through
          <br className="hidden sm:block" /> engaging programs and immersive
          experiences that connect communities.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row px-6 md:px-16 space-y-10 md:space-y-0 md:space-x-5 my-10 md:my-20">
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl md:text-5xl font-serif italic font-bold  ">
            Our Commitment to Heritage
          </h1>
          <p className="text-base md:text-lg font-serif pt-4 md:pt-6">
            At Heritage Haven, we strive to preserve and celebrate cultural
            traditions through our diverse programs. Our mission is to engage
            the community and foster a deeper understanding of our rich
            heritage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center  gap-5">
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-4xl font-bold font-serif">
                500 participants
              </h1>
              <p className="text-base md:text-lg font-serif pt-4 md:pt-6">
                We have successfully engaged over 500 participants in our
                programs, showcasing the community’s enthusiasm for cultural
                heritage.
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-4xl font-bold font-serif">
                20 events
              </h1>
              <p className="text-base md:text-lg font-serif pt-4 md:pt-6">
                Our organization has hosted 20 events this year, bringing
                together people from all walks of life to celebrate our diverse
                cultures.
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-4xl font-bold font-serif ">
                100 workshops
              </h1>
              <p className="text-base md:text-lg font-serif pt-4 md:pt-6">
                With 100 workshops conducted, we provide hands-on experiences
                that educate and inspire participants of all ages
              </p>
            </div>
            <div>
              <h1 className="pt-6 md:pt-10 text-2xl md:text-4xl font-bold font-serif">
                10 years
              </h1>
              <p className="text-base md:text-lg font-serif pt-4 md:pt-6">
                Heritage Haven has been a cornerstone of cultural education for
                10 years, dedicated to enriching our community’s understanding
                of heritage.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center">
          <img
            src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_JO7QSzHI.webp"
            alt=""
            className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover
"
          />
        </div>
      </div>

      <div className="px-16 py-6">
        <h1 className="text-3xl font-bold font-serif">Meet Our Team</h1>
        <p className="pt-4 text-lg font-serif">
          Discover the passionate individuals dedicated to preserving our
          cultural heritage.
        </p>
      </div>

      {/* Cards */}

      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-7xl w-full">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_BYZmNiKS.webp"
              alt="Image 1"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl font-serif italic font-semibold mb-2">
                Traditional Crafts Workshop
              </h5>
              <p className="text-sm md:text-lg font-serif text-gray-600">
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
              <h5 className="text-xl md:text-2xl font-serif italic font-semibold mb-2">
                Annual Heritage Festival
              </h5>
              <p className="text-sm md:text-lg font-serif text-gray-600">
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
              <h5 className="text-xl md:text-2xl font-serif font-bold italic mb-2">
                Cultural History Workshop
              </h5>
              <p className="text-sm md:text-lg font-serif text-gray-600">
                Our Cultural History Workshop offers an engaging learning
                experience, where participants gain insights into diverse
                cultural traditions and their historical significance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 py-6">
        <h1 className="text-3xl font-bold font-serif">Join Us Today</h1>
        <p className="pt-4 text-lg font-serif">
          Get involved with our community programs and celebrate cultural
          heritage.
        </p>

        <div className="pt-4 pb-6">
          <button className="border border-orange-600 px-6 rounded-md py-3 text-orange-600 font-bold">Learn More</button>
        </div>
      </div>

      {/* Footer */}
         <footer className="bg-black py-10 px-6 md:px-12  lg:px-28 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-gray-600">
                {/* Need Help Section */}
                <div>
                  <h3 className="text-xl font-medium text-white uppercase mb-4">Need Help?</h3>
                  <p className="text-sm font-medium text-white mb-2">03218685617 (9am-10 pm, Mon-Sat)</p>
                  <a href="mailto:hashirshahid676@gmail.com" className="text-sm text-white font-medium">
                    hashirshahid676@gmail.com
                  </a>
                </div>
      
                {/* Customer Service Section */}
                <div>
                  <h3 className="text-xl font-medium text-white uppercase mb-4">Customer Service</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-sm text-white">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Delivery &amp; Orders</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Returns &amp; Exchanges</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Track My Order</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Payment Guide</a>
                    </li>
                  </ul>
                </div>
      
                {/* Company Section */}
                <div>
                  <h3 className="text-xl font-medium text-white uppercase mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-sm text-white">About Us</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Careers</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Store</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white">Addresses</a>
                    </li>
                    <li>
                      <a href="#" className="text-2xl font-serif text-purple-600">Gift Card</a>
                    </li>
                  </ul>
                </div>
      
                {/* Follow Us Section */}
                <div >
                  <h3 className="text-xl font-medium text-white uppercase mb-4">Follow Us</h3>
                  <div className="flex justify-center  space-x-4">
                    <a href="https://www.facebook.com" className="text-white hover:text-gray-700">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="" className="text-white hover:text-gray-700">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/ringuard01/" className="text-white hover:text-gray-700">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="" className="text-white hover:text-gray-700">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-700">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                    <a href="https://www.linkedin.com/feed/" className="text-white hover:text-gray-700">
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
