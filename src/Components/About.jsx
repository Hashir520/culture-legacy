import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* About Discription */}
      <div className="pt-20 sm:pt-28 text-center px-4 sm:px-8 lg:px-20">
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
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Commitment to Heritage
          </h2>
          <p className="text-gray-600 mt-4">
            At Heritage Haven, we are dedicated to preserving cultural
            traditions through community engagement and education. Our
            passionate team works tirelessly to create inclusive experiences
            that celebrate our diverse history and foster appreciation for
            cultural heritage.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">500 participants</p>
              <p className="text-gray-600 text-sm">
                We have successfully engaged over 500 participants in our
                programs, showcasing the community’s enthusiasm for cultural
                heritage.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">20 events</p>
              <p className="text-gray-600 text-sm">
                Our organization has hosted 20 events this year, bringing
                together people from all walks of life to celebrate our diverse
                cultures.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">100 workshops</p>
              <p className="text-gray-600 text-sm">
                With 100 workshops conducted, we provide hands-on experiences
                that educate and inspire participants of all ages.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">10 years</p>
              <p className="text-gray-600 text-sm">
                Heritage Haven has been a cornerstone of cultural education for
                10 years, dedicated to enriching our community’s.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex md:justify-end justify-center items-center">
          <img
            src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_JO7QSzHI.webp"
            alt=""
            className="w-60 h-60 md:w-full md:h-96  md:ml-20 mb-10 md:mb-0 rounded-3xl object-cover
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
              <p className="mt-2 text-gray-700 text-base">
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
              <p className="mt-2 text-gray-700 text-base">
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
              <p className="mt-2 text-gray-700 text-base">
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
              <p className="mt-2 text-gray-700 text-base">
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
        <p className="pt-4 text-base ">
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
     <Footer/>
    </>
  );
};

export default About;
